import { Scissors } from "lucide-react";
import VideoReelsSection from "../components/VideoReelsSection";

const SobreNosotros = () => {
  return (
    <>
      <section className="bg-white py-12 md:py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">

          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary/10 text-secondary mb-4">
            <Scissors className="h-4 w-4 mr-2" />
            <span className="text-xs md:text-sm font-medium">
              Sobre Nosotros
            </span>
          </div>

          {/* Texto */}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
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