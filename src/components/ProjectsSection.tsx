import { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import servicio01 from "@/assets/trabajos/mantenimiento-de-plantas.jpg";
import servicio02 from "@/assets/trabajos/mantenimiento-de-cesped.jpg";
import servicio03 from "@/assets/trabajos/plantacion-de-especies.jpg";
import servicio04 from "@/assets/trabajos/cantero-decorativo.jpg";
import servicio05 from "@/assets/trabajos/instalacion-de-riego.jpg";
import servicio06 from "@/assets/trabajos/colocacion-cesped-orejas-de-elefante.jpg";
import servicio07 from "@/assets/trabajos/paisajismo-jardin.jpg";
import servicio08 from "@/assets/trabajos/riego-por-goteo-cantero.jpg";
import servicio09 from "@/assets/trabajos/distribucion-de-caneria-riego.jpg";
import servicio10 from "@/assets/trabajos/nivelacion-y-colocacion-de-cesped.jpg";
import servicio11 from "@/assets/trabajos/riego-por-goteo-cerco.jpg";
import servicio12 from "@/assets/trabajos/instalacion-programador-y-colector.jpg";


const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filters = ["Todos", "Jardinería", "Paisajismo", "Riego"];

  // Cada categoría enlaza a la página de su servicio (enlace interno con texto descriptivo)
  const servicioDe: Record<string, { href: string; texto: string }> = {
    "Jardinería": { href: "/servicios/jardineria", texto: "Ver servicio de jardinería" },
    "Paisajismo": { href: "/servicios/paisajismo", texto: "Ver servicio de paisajismo" },
    "Riego": { href: "/servicios/sistemas-de-riego", texto: "Ver sistemas de riego" },
  };

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
      date: "2025",
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
      title: "Paisajismo",
      category: "Paisajismo",
      location: "General Rodriguez, Buenos Aires",
      date: "2026",
      description:
        "Plantación de grama bahiana, instalación de piedras decorativas con oleas y chips, e implementación de sistema de riego por aspersión y goteo.",
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
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Trabajos realizados
          </h2>
          

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
                    alt={project.alt || project.title}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
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

                  {servicioDe[project.category] && (
                    <Link
                      to={servicioDe[project.category].href}
                      className="mt-1 inline-flex min-h-[44px] items-center gap-1.5 text-xs md:text-sm font-semibold text-primary hover:underline"
                    >
                      {servicioDe[project.category].texto}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  )}

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