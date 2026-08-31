import { describe, it, expect } from "vitest";
import { content, Lang } from "@/lib/content";

// The language toggle swaps `content.en` for `content.es` wholesale, and several
// components match icon arrays to translated items *by index*
// (Competencies.tsx, Education.tsx). So the two trees must stay structurally
// identical: same keys, same array lengths, same value types. Drifting them
// silently drops copy or misaligns icons instead of failing loudly.

type Shape =
  | { kind: "primitive"; type: string }
  | { kind: "array"; length: number; items: Shape[] }
  | { kind: "object"; entries: [string, Shape][] };

const shapeOf = (value: unknown): Shape => {
  if (Array.isArray(value)) {
    return { kind: "array", length: value.length, items: value.map(shapeOf) };
  }
  if (value !== null && typeof value === "object") {
    const entries = Object.keys(value as object)
      .sort()
      .map((key): [string, Shape] => [key, shapeOf((value as Record<string, unknown>)[key])]);
    return { kind: "object", entries };
  }
  return { kind: "primitive", type: typeof value };
};

// Walks both trees together and reports every divergence with a dotted path,
// so a failure names the offending field rather than dumping the whole object.
const diff = (a: unknown, b: unknown, path = "content"): string[] => {
  const [sa, sb] = [shapeOf(a), shapeOf(b)];

  if (sa.kind !== sb.kind) {
    return [`${path}: en is ${sa.kind}, es is ${sb.kind}`];
  }

  if (sa.kind === "array" && sb.kind === "array") {
    if (sa.length !== sb.length) {
      return [`${path}: en has ${sa.length} item(s), es has ${sb.length}`];
    }
    return (a as unknown[]).flatMap((item, i) => diff(item, (b as unknown[])[i], `${path}[${i}]`));
  }

  if (sa.kind === "object" && sb.kind === "object") {
    const keysA = sa.entries.map(([k]) => k);
    const keysB = sb.entries.map(([k]) => k);
    const onlyEn = keysA.filter((k) => !keysB.includes(k));
    const onlyEs = keysB.filter((k) => !keysA.includes(k));
    const problems = [
      ...onlyEn.map((k) => `${path}.${k}: present in en, missing in es`),
      ...onlyEs.map((k) => `${path}.${k}: present in es, missing in en`),
    ];
    const shared = keysA.filter((k) => keysB.includes(k));
    return [
      ...problems,
      ...shared.flatMap((k) =>
        diff(
          (a as Record<string, unknown>)[k],
          (b as Record<string, unknown>)[k],
          `${path}.${k}`,
        ),
      ),
    ];
  }

  if (sa.kind === "primitive" && sb.kind === "primitive" && sa.type !== sb.type) {
    return [`${path}: en is ${sa.type}, es is ${sb.type}`];
  }

  return [];
};

const langs: Lang[] = ["en", "es"];

describe("content", () => {
  it("has an entry for every supported language", () => {
    expect(Object.keys(content).sort()).toEqual([...langs].sort());
  });

  it("keeps the en and es trees structurally identical", () => {
    expect(diff(content.en, content.es)).toEqual([]);
  });

  it("matches the competency and education icon counts hard-coded in the components", () => {
    // Competencies.tsx and Education.tsx each declare a fixed icon array and
    // fall back to a default icon past its end. Keep the counts in step so no
    // item silently renders the fallback.
    for (const lang of langs) {
      expect(content[lang].competencies.items).toHaveLength(6);
      expect(content[lang].education.items).toHaveLength(3);
    }
  });

  it("has no empty strings", () => {
    const empties: string[] = [];
    const walk = (value: unknown, path: string) => {
      if (typeof value === "string") {
        if (value.trim() === "") empties.push(path);
      } else if (Array.isArray(value)) {
        value.forEach((item, i) => walk(item, `${path}[${i}]`));
      } else if (value !== null && typeof value === "object") {
        for (const [k, v] of Object.entries(value)) walk(v, `${path}.${k}`);
      }
    };
    walk(content, "content");
    expect(empties).toEqual([]);
  });
});
