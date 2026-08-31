import { useLanguage } from "@/contexts/LanguageContext";
import { Lang } from "@/lib/content";

const options: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-4 right-20 z-50">
      <div
        className="flex items-center gap-1 bg-card/80 backdrop-blur-sm rounded-full p-1 shadow-card border border-border"
        role="group"
        aria-label="Language"
      >
        {options.map((opt) => {
          const active = lang === opt.code;
          return (
            <button
              key={opt.code}
              type="button"
              onClick={() => setLang(opt.code)}
              aria-pressed={active}
              className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${
                active
                  ? "bg-accent text-accent-foreground shadow-card"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageToggle;
