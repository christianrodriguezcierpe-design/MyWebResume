import Hero from "@/components/sections/Hero";
import Competencies from "@/components/sections/Competencies";
import PersonalSkills from "@/components/sections/PersonalSkills";
import Experience from "@/components/sections/Experience";
import Tools from "@/components/sections/Tools";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Competencies />
      <PersonalSkills />
      <Experience />
      <Tools />
      <Education />
      <Contact />
    </main>
  );
};

export default Index;
