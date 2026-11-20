import Seo from "@/components/Seo";
import { negocioLocal } from "@/lib/schema";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SobreNosotros from "@/components/SobreNosotros";
import BlogIndex from "@/components/BlogIndex";
import ProductIndex from "@/components/ProductIndex";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Riegomax | Sistemas de riego, jardinería y paisajismo en Buenos Aires"
        description="Especialistas en sistemas de riego, jardinería y paisajismo. Diseñamos y mantenemos espacios verdes con calidad profesional en Buenos Aires."
        path="/"
        jsonLd={negocioLocal}
      />
      <Header />
      <main>
        <HeroSection />
        <SobreNosotros />
        <ServicesSection />
        <BeforeAfterSection />
        <ProjectsSection />
        <ProductIndex />
        <BlogIndex />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
