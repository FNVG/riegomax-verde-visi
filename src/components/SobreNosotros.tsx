import { Scissors } from "lucide-react";
import VideoReelsSection from "../components/VideoReelsSection";

const SobreNosotros = () => {
  return (
    <>
      <section className="bg-white py-10 md:py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">

          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary mb-3">
            <Scissors className="h-4 w-4 mr-2" />
            <span className="text-xs md:text-sm font-medium">
              Sobre Nosotros
            </span>
          </div>

          {/* Texto */}
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Somos una empresa de Moreno, provincia de Buenos Aires,
            <span className="font-medium text-gray-800">
              {" "}especializada en riego automático, jardinería, paisajismo y bombas de agua.
            </span>
            {" "}Brindamos soluciones eficientes y personalizadas en cada proyecto.
          </p>

        </div>
      </section>

      <VideoReelsSection />
    </>
  );
};

export default SobreNosotros;