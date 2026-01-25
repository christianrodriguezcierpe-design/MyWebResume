import { GraduationCap, Award, Globe } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    title: "B.Sc. Computer Science Engineering",
    subtitle: "Minor: Software Engineering",
    institution: "Pontificia Universidad Católica de Valparaíso",
    year: "2010"
  },
  {
    icon: Award,
    title: "IT Project Management",
    subtitle: "PMBOK® Guide 5th Edition-based",
    institution: "Federico Santa María Technical University",
    year: "2018"
  },
  {
    icon: Award,
    title: "Scrum & Agile Methodologies Workshop",
    subtitle: "Certification",
    institution: "Optimisa S.A.",
    year: "2019"
  }
];

const languages = [
  { language: "Spanish", level: "Native" },
  { language: "English", level: "IELTS 6.0 (B2) • EAP Level 9" }
];

const Education = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Education & Training
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <edu.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1 font-sans">
                  {edu.title}
                </h3>
                <p className="text-accent text-sm mb-2">{edu.subtitle}</p>
                <p className="text-muted-foreground text-sm">{edu.institution}</p>
                <p className="text-muted-foreground/70 text-sm mt-1">{edu.year}</p>
              </div>
            ))}
          </div>
          
          {/* Languages */}
          <div className="bg-card p-8 rounded-lg shadow-card max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Globe className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-semibold text-foreground font-sans">Languages</h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.language} className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{lang.language}</span>
                  <span className="text-muted-foreground text-sm">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
