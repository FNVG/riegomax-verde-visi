import HeaderProject from "@/components/HeaderProject";
import ProjectHero from "@/components/ProjectHero";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ProjectFacts, { defaultProjectFacts } from "@/components/ProjectFacts";
import ProjectDescription from "@/components/ProjectDescription";
import ProcessGallery from "@/components/ProcessGallery";
import CTASection from "@/components/CTASection";
import ProjectNavigation from "@/components/ProjectNavigation";
import Footer from "@/components/Footer";

import { projects } from "@/data/projects";
import { useParams, Navigate } from "react-router-dom"

const ProyectoDetalle = () => {
  const { id } = useParams<{ id: string }>();

  const project = id ? projects[id] : null;

  if (!project) {
    return <Navigate to="*" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <HeaderProject />

      <main>
        <ProjectHero
          title={project.data.title}
          location={project.data.location}
          categories={project.data.categories}
        />

        <ProjectFacts facts={defaultProjectFacts} />

        <BeforeAfterSlider />

        <ProjectDescription
          initialState={project.description.initialState}
          intervention={project.description.intervention}
          result={project.description.result}
        />

        <ProcessGallery />

        <CTASection />

        <ProjectNavigation
          previous={{ title: "Proyecto anterior", href: "/proyecto/1" }}
          next={{ title: "Proyecto siguiente", href: "/proyecto/2" }}
        />
      </main>

      <Footer />
    </div>
  );
};

export default ProyectoDetalle;
