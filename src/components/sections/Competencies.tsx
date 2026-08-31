import {
  Target,
  BarChart3,
  Users,
  Repeat,
  FileText,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Icons are kept here (not in content.ts) and matched by index to the
// translated items. Keep this array's order in sync with competencies.items.
const icons = [Target, BarChart3, Users, Repeat, FileText, TrendingUp];

const Competencies = () => {
  const { t } = useLanguage();
  const { heading, subtitle, items } = t.competencies;

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {heading}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((comp, index) => {
            const Icon = icons[index] ?? Target;
            return (
              <div
                key={comp.title}
                className="bg-card p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">
                  {comp.title}
                </h3>
                <p className="text-muted-foreground text-sm">{comp.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Competencies;
