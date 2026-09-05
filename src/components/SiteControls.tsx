import LanguageToggle from "@/components/LanguageToggle";
import ThemeToggle from "@/components/ThemeToggle";

// Single fixed anchor for both toggle pills, laid out with flex so they can
// never overlap regardless of either pill's width — the previous version
// positioned each independently (right-4 / right-20), which drifted out of
// sync when the theme toggle grew from one button to two.
const SiteControls = () => (
  <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
    <LanguageToggle />
    <ThemeToggle />
  </div>
);

export default SiteControls;
