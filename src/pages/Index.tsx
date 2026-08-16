import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SobreNosotros from "@/components/SobreNosotros";
import Novedades from "@/components/Novedades"
import BlogIndex from "@/components/BlogIndex"
import ProductIndex from "@/components/ProductIndex"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SobreNosotros />  
        <ServicesSection />
         
        <BeforeAfterSection />
        <ProjectsSection />
        <ProductIndex  />
        <BlogIndex />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
