import { Scissors } from "lucide-react";
import VideoReelsSection from "../components/VideoReelsSection";
const SobreNosotros = () => {
  return (
    <>
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
         <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
            <Scissors className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Sobre Nosotros</span>
          </div>
        {/* 
            <h3 className="text-3xl md:text-4xl font-bold text-gray-600 mb-6">
          Transformamos espacios verdes con soluciones competentes
        </h3>
          Diseño e instalación de sistemas de riego y mantenimiento de espacios verdes con técnicas de jardinería adaptadas a la necesidad de cada cliente
        */}
        
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Somos una empresa de Moreno, provincia de Buenos Aires,
          <span className="font-medium text-gray-800">
            {" "}especializada en sistemas de riego automáticos,  jardinería, paisajismo y bombas de agua.
          </span>
           {" "}Brindamos soluciones mediante técnicas y compromiso en cada proyecto
        </p>
      </div>
    </section>
    <VideoReelsSection />
    </>
    
  );
};

export default SobreNosotros;
