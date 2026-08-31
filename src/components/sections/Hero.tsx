import { MapPin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const hero = t.hero;

  return (
    <section className="bg-hero min-h-[70vh] flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/50 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-medium mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {hero.greeting}
          </p>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Christian
            <br />
            <span className="text-gradient">Rodriguez</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-primary-foreground/80 mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            {hero.role}
          </p>

          <p
            className="text-lg text-primary-foreground/60 max-w-2xl mx-auto mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {hero.summary}
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground/70 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span>{hero.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              <a href="mailto:christian.rodriguez.cierpe@gmail.com" className="hover:text-accent transition-colors">
                christian.rodriguez.cierpe@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
