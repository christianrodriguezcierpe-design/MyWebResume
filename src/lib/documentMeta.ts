import { Lang, SiteContent } from "@/lib/content";

// Maps a language code to the BCP 47 tag used for og:locale.
const OG_LOCALES: Record<Lang, string> = {
  en: "en_US",
  es: "es_CL",
};

// Selector -> which piece of meta content it should carry. The tags themselves
// live in index.html; this only rewrites their content so the served HTML keeps
// working as the pre-JS fallback.
const TITLE_TAGS = ['meta[property="og:title"]', 'meta[name="twitter:title"]'];
const DESCRIPTION_TAGS = [
  'meta[name="description"]',
  'meta[property="og:description"]',
  'meta[name="twitter:description"]',
];

const setContent = (selector: string, value: string) => {
  const tag = document.querySelector<HTMLMetaElement>(selector);
  // Absent tags are skipped rather than created: index.html is the source of
  // truth for which tags exist, and inventing them here would hide its drift.
  if (tag) tag.content = value;
};

/**
 * Points the document's language attribute and title/description metadata at
 * the given language.
 *
 * Note this cannot localize link previews on most social platforms — their
 * crawlers read the served HTML without running JavaScript, so they always see
 * the English defaults in index.html. Localizing those for real needs
 * prerendered per-language pages. What this does fix is the browser tab title
 * and description for the visitor actually reading the site, plus any consumer
 * that does execute scripts.
 */
export const applyDocumentMeta = (lang: Lang, meta: SiteContent["meta"]) => {
  document.documentElement.lang = lang;
  document.title = meta.title;

  for (const selector of TITLE_TAGS) setContent(selector, meta.title);
  for (const selector of DESCRIPTION_TAGS) setContent(selector, meta.description);

  setContent('meta[property="og:locale"]', OG_LOCALES[lang]);
};
