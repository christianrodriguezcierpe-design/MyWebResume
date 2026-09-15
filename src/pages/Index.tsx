import Hero from "@/components/sections/Hero";
import Competencies from "@/components/sections/Competencies";
import PersonalSkills from "@/components/sections/PersonalSkills";
import Experience from "@/components/sections/Experience";
import Tools from "@/components/sections/Tools";
import Education from "@/components/sections/Education";
import Availability from "@/components/sections/Availability";
import Contact from "@/components/sections/Contact";
import PrintResume from "@/components/PrintResume";

const Index = () => {
  return (
    <>
      {/* print:hidden — PrintResume below is the one-column layout that
          actually renders when the visitor downloads the PDF. */}
      <main className="min-h-screen print:hidden">
        <Hero />
        <Competencies />
        <PersonalSkills />
        <Experience />
        <Tools />
        <Education />
        <Availability />
        <Contact />
      </main>
      <PrintResume />
    </>
  );
};

export default Index;
