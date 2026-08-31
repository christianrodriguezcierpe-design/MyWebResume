import { describe, it, expect, beforeEach } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { applyDocumentMeta } from "@/lib/documentMeta";
import { content } from "@/lib/content";

// Mirrors the tags index.html actually ships. applyDocumentMeta deliberately
// skips tags it cannot find, so these tests set up the same head it runs against.
const HEAD = `
  <meta name="description" content="original" />
  <meta property="og:title" content="original" />
  <meta property="og:description" content="original" />
  <meta property="og:locale" content="en_US" />
  <meta name="twitter:title" content="original" />
  <meta name="twitter:description" content="original" />
`;

const metaContent = (selector: string) =>
  document.querySelector<HTMLMetaElement>(selector)?.content;

beforeEach(() => {
  document.head.innerHTML = HEAD;
  document.title = "original";
  document.documentElement.lang = "";
});

describe("applyDocumentMeta", () => {
  it("applies the Spanish title, description, and locale", () => {
    applyDocumentMeta("es", content.es.meta);

    expect(document.documentElement.lang).toBe("es");
    expect(document.title).toBe(content.es.meta.title);
    expect(metaContent('meta[name="description"]')).toBe(content.es.meta.description);
    expect(metaContent('meta[property="og:title"]')).toBe(content.es.meta.title);
    expect(metaContent('meta[property="og:description"]')).toBe(content.es.meta.description);
    expect(metaContent('meta[name="twitter:title"]')).toBe(content.es.meta.title);
    expect(metaContent('meta[name="twitter:description"]')).toBe(content.es.meta.description);
    expect(metaContent('meta[property="og:locale"]')).toBe("es_CL");
  });

  it("switches back to English cleanly", () => {
    applyDocumentMeta("es", content.es.meta);
    applyDocumentMeta("en", content.en.meta);

    expect(document.documentElement.lang).toBe("en");
    expect(document.title).toBe(content.en.meta.title);
    expect(metaContent('meta[property="og:locale"]')).toBe("en_US");
  });

  it("does not throw when the expected tags are absent", () => {
    document.head.innerHTML = "";

    expect(() => applyDocumentMeta("es", content.es.meta)).not.toThrow();
    // The title and lang attribute need no pre-existing tag, so they still apply.
    expect(document.title).toBe(content.es.meta.title);
    expect(document.documentElement.lang).toBe("es");
  });
});

describe("index.html fallback", () => {
  // Crawlers that do not run JavaScript only ever see index.html, so its
  // English defaults must not drift from content.en.meta.
  const html = readFileSync(resolve(__dirname, "../../index.html"), "utf-8");

  it("ships the English title from content.ts", () => {
    expect(html).toContain(`<title>${content.en.meta.title}</title>`);
  });

  it("ships the English description in every description tag", () => {
    const descriptions = [...html.matchAll(/content="([^"]*10\+[^"]*)"/g)].map((m) => m[1]);

    expect(descriptions.length).toBeGreaterThanOrEqual(3);
    for (const description of descriptions) {
      expect(description).toBe(content.en.meta.description);
    }
  });

  it("declares every tag applyDocumentMeta rewrites", () => {
    for (const attr of [
      'name="description"',
      'property="og:title"',
      'property="og:description"',
      'property="og:locale"',
      'name="twitter:title"',
      'name="twitter:description"',
    ]) {
      expect(html).toContain(attr);
    }
  });
});
