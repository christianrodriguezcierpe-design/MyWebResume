import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { content, Lang, SiteContent } from "@/lib/content";
import { applyDocumentMeta } from "@/lib/documentMeta";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: SiteContent; // shorthand for the current language's content
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "lang";
const DEFAULT_LANG: Lang = "en";

const isLang = (value: unknown): value is Lang => value === "en" || value === "es";

// Precedence: an explicit past choice, then the browser's preference, then EN.
// Wrapped in try/catch — storage access throws outright in some privacy modes.
const initialLang = (): Lang => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;
  } catch {
    // Ignore and fall through to the browser preference.
  }

  const preferred = window.navigator.languages ?? [window.navigator.language];
  for (const tag of preferred) {
    const base = tag?.split("-")[0]?.toLowerCase();
    if (isLang(base)) return base;
  }

  return DEFAULT_LANG;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(initialLang);

  // Keep the document language and page metadata in sync (accessibility / SEO)
  // and remember the choice for the next visit.
  useEffect(() => {
    applyDocumentMeta(lang, content[lang].meta);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Persisting is a convenience; the site works fine without it.
    }
  }, [lang]);

  const toggle = () => setLang((prev) => (prev === "en" ? "es" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};
