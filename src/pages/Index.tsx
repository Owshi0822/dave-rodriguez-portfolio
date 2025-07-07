
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { EducationSkills } from "@/components/EducationSkills";
import { Experience } from "@/components/Experience";
import { ProjectsTrainings } from "@/components/ProjectsTrainings";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <EducationSkills />
      <Experience />
      <ProjectsTrainings />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
