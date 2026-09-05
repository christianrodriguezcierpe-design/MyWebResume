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
    // Count occurrences of the exact copy rather than a substring like "10+",
    // so this stays a guard against drift instead of coupling to today's wording.
    const escaped = content.en.meta.description.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const matches = [...html.matchAll(new RegExp(`content="${escaped}"`, "g"))];

    expect(matches.length).toBeGreaterThanOrEqual(3);
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

describe("social preview image", () => {
  const root = resolve(__dirname, "../..");
  const html = readFileSync(resolve(root, "index.html"), "utf-8");

  const tagContent = (attr: string) =>
    html.match(new RegExp(`<meta ${attr} content="([^"]*)"`))?.[1];

  const SITE = "https://christianrodriguezcierpe-design.github.io/MyWebResume/";

  it("declares an image for both og and twitter", () => {
    // twitter:card promises summary_large_image; without an image the preview
    // renders bare, which is the failure this guards against.
    expect(html).toContain('content="summary_large_image"');
    expect(tagContent('property="og:image"')).toBe(`${SITE}og-image.png`);
    expect(tagContent('name="twitter:image"')).toBe(`${SITE}og-image.png`);
  });

  it("uses absolute URLs, which crawlers do not resolve relatively", () => {
    for (const attr of ['property="og:image"', 'name="twitter:image"', 'property="og:url"']) {
      expect(tagContent(attr)).toMatch(/^https:\/\//);
    }
  });

  it("ships the image the tags point at", () => {
    const file = resolve(root, "public/og-image.png");
    const png = readFileSync(file);

    // PNG signature, then IHDR carries width/height as big-endian uint32s.
    expect(png.subarray(1, 4).toString()).toBe("PNG");
    expect(png.readUInt32BE(16)).toBe(1200);
    expect(png.readUInt32BE(20)).toBe(630);
  });

  it("declares the dimensions the file actually has", () => {
    const png = readFileSync(resolve(root, "public/og-image.png"));

    expect(tagContent('property="og:image:width"')).toBe(String(png.readUInt32BE(16)));
    expect(tagContent('property="og:image:height"')).toBe(String(png.readUInt32BE(20)));
  });

  it("gives the image alt text", () => {
    expect(tagContent('property="og:image:alt"')).toBeTruthy();
    expect(tagContent('name="twitter:image:alt"')).toBeTruthy();
  });
});
