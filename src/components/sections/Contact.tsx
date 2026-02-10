import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-primary-foreground/70 mb-10">
            Open to opportunities in Software Delivery Management and IT Project Coordination
          </p>
          
          <div className="flex flex-col gap-4 mb-10">
            <a 
              href="mailto:christian.rodriguez.cierpe@gmail.com"
              className="flex items-center justify-center gap-3 bg-card/10 hover:bg-card/20 text-primary-foreground px-6 py-4 rounded-lg transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-accent" />
              <span className="group-hover:text-accent transition-colors">christian.rodriguez.cierpe@gmail.com</span>
            </a>
            
            <a 
              href="tel:+12269194814"
              className="flex items-center justify-center gap-3 bg-card/10 hover:bg-card/20 text-primary-foreground px-6 py-4 rounded-lg transition-all duration-300 group"
            >
              <Phone className="w-5 h-5 text-accent" />
              <span className="group-hover:text-accent transition-colors">+1 226-919-4814</span>
            </a>
            
            <div className="flex items-center justify-center gap-3 bg-card/10 text-primary-foreground px-6 py-4 rounded-lg">
              <MapPin className="w-5 h-5 text-accent" />
              <span>London, ON, Canada</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-4">
            <a 
              href="#"
              className="w-12 h-12 bg-card/10 hover:bg-accent rounded-full flex items-center justify-center text-primary-foreground hover:text-accent-foreground transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#"
              className="w-12 h-12 bg-card/10 hover:bg-accent rounded-full flex items-center justify-center text-primary-foreground hover:text-accent-foreground transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-primary-foreground/10">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Christian Rodriguez. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
