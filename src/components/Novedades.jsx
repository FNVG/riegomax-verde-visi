import React from "react";

const Novedades = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-10">
      
      {/* Título */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Novedades
        </h2>
        <p className="text-sm md:text-base text-gray-500 mt-2">
          Últimas publicaciones de nuestras redes sociales
        </p>
      </div>

      {/* Contenedor de redes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Instagram */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <h3 className="text-lg font-semibold mb-3">
            Instagram
          </h3>

          {/* Widget Instagram (pegas aquí el script o iframe) */}
          <div className="w-full overflow-hidden rounded-lg">
            <iframe
    src="https://lightwidget.com/widgets/27e3f1c4a3265971b780869bca9c3cec.html"
    scrolling="no"
    allowTransparency
    className="lightwidget-widget"
    style={{
      width: "100%",
      height: "500px",
      border: 0,
      overflow: "hidden"
    }}
    title="Instagram Feed"
  />    
          </div>
        </div>

        {/* Facebook */}
       
      </div>
    </section>
  );
};

export default Novedades;