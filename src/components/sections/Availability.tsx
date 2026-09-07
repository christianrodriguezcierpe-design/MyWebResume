import { Plane, Laptop, Car, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { AvailabilityItem } from "@/lib/content";

// Resolved by key rather than array index — unlike Competencies.tsx/Education.tsx,
// so this can never silently misalign an icon to the wrong item.
const icons: Record<AvailabilityItem["key"], LucideIcon> = {
  relocation: Plane,
  workModes: Laptop,
  license: Car,
};

const Availability = () => {
  const { t } = useLanguage();
  const { heading, items } = t.availability;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {heading}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => {
            const Icon = icons[item.key];
            return (
              <div
                key={item.key}
                className="bg-card p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1 font-sans">
                  {item.label}
                </h3>
                {/* value may carry a line break (e.g. two licenses on separate
                    lines) — whitespace-pre-line renders that literally */}
                <p className="text-muted-foreground text-sm whitespace-pre-line">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Availability;
