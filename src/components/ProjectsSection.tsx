import { useState } from "react";
import { Filter, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import servicio01 from "@/assets/trabajos/1.jpeg";
import servicio02 from "@/assets/trabajos/2.jpeg";
import servicio03 from "@/assets/trabajos/3.jpeg";
import servicio04 from "@/assets/trabajos/4.jpeg";
import servicio05 from "@/assets/trabajos/5.jpeg";
import servicio06 from "@/assets/trabajos/6.jpeg";
import servicio07 from "@/assets/trabajos/7.jpeg";
import servicio08 from "@/assets/trabajos/8.jpeg";
import servicio09 from "@/assets/trabajos/9.jpeg";
import servicio10 from "@/assets/trabajos/10.jpeg";
import servicio11 from "@/assets/trabajos/11.jpeg";
import servicio12 from "@/assets/trabajos/12.jpeg";


const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filters = ["Todos", "Jardinería", "Paisajismo", "Riego"];

  const projects = [
    {
      id: 1,
      title: "Mantenimiento de plantas",
      category: "Jardinería",
      location: "Paso del Rey, Buenos Aires",
      date: "2025",
      description:
        "Eliminación de yuyos, poda de hojas secas y mantenimiento general.",
      image: servicio01,
      alt: "Mantenimiento de plantas"
    },
    {
      id: 2,
      title: "Mantenimiento de césped",
      category: "Jardinería",
      location: "Paso del Rey, Buenos Aires",
      date: "2025",
      description:
        "Corte, bordeado y limpieza del césped en óptimas condiciones.",
      image: servicio02,
      alt: "Mantenimiento de césped"
    },
    {
      id: 3,
      title: "Plantación de especies",
      category: "Jardinería",
      location: "Paso del Rey, Buenos Aires",
      date: "2025",
      description:
        "Plantación de especies ornamentales con preparación del suelo.",
      image: servicio03,
      alt: "Plantación ornamental"
    },
    {
      id: 4,
      title: "Cantero decorativo",
      category: "Paisajismo",
      location: "Paso del Rey, Buenos Aires",
      date: "2025",
      description:
        "Cantero con piedras decorativas y plantas ornamentales.",
      image: servicio04,
      alt: "Cantero decorativo"
    },
    {
      id: 5,
      title: "Instalación de riego",
      category: "Riego",
      location: "Paso del Rey, Buenos Aires",
      date: "2023",
      description:
        "Sistema de riego automático por aspersión y goteo.",
      image: servicio05,
      alt: "Sistema de riego"
    },
    {
      id: 6,
      title: "Colocación de césped y plantación de orejas de elefante",
      category: "Jardinería",
      location: "Paso del Rey, Buenos Aires",
      date: "2025",
      description:
        "Orejas de elefante y césped grama bahiana.",
      image: servicio06,
      alt: "Jardín terminado"
    },
    {
      id: 7,
      title: "Diseño y mantenimiento",
      category: "Paisajismo",
      location: "Paso del Rey, Buenos Aires",
      date: "2026",
      description:
        "Diseño y mantenimiento general de jardín.",
      image: servicio07,
      alt: "Jardín terminado"
    },
    {
      id: 8,
      title: "Riego por goteo",
      category: "Riego",
      location: "Moreno, provincia de Buenos Aires",
      date: "2026",
      image: servicio08,
      description:
        "Instalación de sistema de riego por goteo",
       alt: "Riego terminado"
    },
    {
      id: 9,
      title: "Distribución de cañería",
      category: "Riego",
      location: "Moreno, provincia de Buenos Aires",
      date: "2026",
      image: servicio09,
      description:
        "Zanjeo y tendido del ramal principal y ramificaciones para sistema de riego automático por aspersión"
    },
    {
      id: 10,
      title: "Nivelación y colocación de césped",
      category: "Paisajismo",
      location: "Moreno, provincia de Buenos Aires",
      date: "2026",
      description:
        "Nivelación para colocación de panes de césped grama bahiana",
      image: servicio10
    },
    {
      id: 11,
      title: "Riego por goteo",
      category: "Riego",
      location: "Moreno, provincia de Buenos Aires",
      date: "2026",
      description:
        "Instalación de sistema de riego por goteo",
    image: servicio11},
    {
      id: 12,
      title: "Instalación de programador y colector",
      category: "Riego",
      location: "Moreno, provincia de Buenos Aires",
      date: "2026",
      description:
        "Instalación de válvulas solenoides, filtro y válvula de alivio con programador para automatizar el sistema",
      image: servicio12}  

  ];

  const filteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-10 md:py-12 bg-gradient-earth">

      <div className="container mx-auto px-4">

        {/* HEADER más compacto */}
        <div className="text-center max-w-lg mx-auto mb-6">

          <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/10 text-primary mb-3">
            <Filter className="h-4 w-4 mr-2" />
            <span className="text-xs font-medium">Proyectos</span>
          </div>
        {
          /*
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Jardinería, riego y paisajismo
          </h2>

          <p className="text-sm md:text-base text-muted-foreground">
            Trabajos realizados en espacios verdes.
          </p>
          */
        }
          

        </div>

        {/* FILTERS más limpios */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-6">
          {filters.map((filter) => (
            <Button
              key={filter}
              size="sm"
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="text-xs px-3 py-1"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-0 hover:shadow-sm transition-all duration-300"
            >

              <CardContent className="p-0">

                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* INFO más compacta */}
                <div className="p-3">

                  <div className="flex justify-between text-[11px] text-muted-foreground mb-1">

                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {project.location.split(",")[0]}
                    </div>

                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {project.date}
                    </div>

                  </div>

                  <h3 className="text-sm md:text-base font-semibold mb-1">
                    {project.title}
                  </h3>

                  <p className="text-xs md:text-sm text-muted-foreground leading-snug">
                    {project.description}
                  </p>

                </div>

              </CardContent>

            </Card>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;