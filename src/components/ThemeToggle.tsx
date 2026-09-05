import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type ThemeOption = "light" | "dark";

const options: { value: ThemeOption; label: string; icon: typeof Sun }[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
];

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Before hydration next-themes doesn't know the real theme yet; default the
  // display to light rather than guessing, matching the pre-mount render before.
  const active: ThemeOption = mounted && theme === "dark" ? "dark" : "light";

  return (
    <div
      className="flex items-center gap-1 bg-card/80 backdrop-blur-sm rounded-full p-1 shadow-card border border-border"
      role="group"
      aria-label="Theme"
    >
      {options.map((opt) => {
        const isActive = active === opt.value;
        const Icon = opt.icon;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setTheme(opt.value)}
            aria-pressed={isActive}
            aria-label={opt.label}
            className={`p-1.5 rounded-full transition-all duration-300 ${
              isActive
                ? "bg-accent text-accent-foreground shadow-card"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon className="h-4 w-4" />
          </button>
        );
      })}
    </div>
  );
};

export default ThemeToggle;
