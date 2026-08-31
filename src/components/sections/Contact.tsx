import { Mail, MapPin, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const GITHUB_URL = "https://github.com/christianrodriguezcierpe-design/MyWebResume/tree/main";

// LinkedIn intentionally hidden until the profile is updated.
// To restore: re-add `Linkedin` to the import above, set LINKEDIN_URL,
// and render the button alongside the GitHub one.

const Contact = () => {
  const { t } = useLanguage();
  const { heading, subtitle, locationLabel, rights } = t.contact;

  return (
    <section className="py-20 bg-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {heading}
          </h2>
          <p className="text-primary-foreground/70 mb-10">{subtitle}</p>

          <div className="flex flex-col gap-4 mb-10">
            <a
              href="mailto:christian.rodriguez.cierpe@gmail.com"
              className="flex items-center justify-center gap-3 bg-card/10 hover:bg-card/20 text-primary-foreground px-6 py-4 rounded-lg transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-accent" />
              <span className="group-hover:text-accent transition-colors">christian.rodriguez.cierpe@gmail.com</span>
            </a>

            <div className="flex items-center justify-center gap-3 bg-card/10 text-primary-foreground px-6 py-4 rounded-lg">
              <MapPin className="w-5 h-5 text-accent" />
              <span>{locationLabel}</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card/10 hover:bg-accent rounded-full flex items-center justify-center text-primary-foreground hover:text-accent-foreground transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-primary-foreground/10">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Christian Rodriguez. {rights}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
