import Hero from "@/components/sections/Hero";
import Competencies from "@/components/sections/Competencies";
import Experience from "@/components/sections/Experience";
import Tools from "@/components/sections/Tools";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Competencies />
      <Experience />
      <Tools />
      <Education />
      <Contact />
    </main>
  );
};

export default Index;
