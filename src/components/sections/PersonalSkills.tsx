import { useLanguage } from "@/contexts/LanguageContext";

const PersonalSkills = () => {
  const { t } = useLanguage();
  const { heading, subtitle, items } = t.skills;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {heading}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-2">
          {items.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-card text-muted-foreground text-sm rounded-full shadow-card hover:shadow-card-hover hover:text-accent transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalSkills;
