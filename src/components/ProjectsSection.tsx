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
      description: "Eliminación de yuyos, poda de hojas secas y mantenimiento general para mejorar el crecimiento de las plantas.",
      image: servicio01,
      alt: "Mantenimiento de plantas en jardín residencial",
      featured: true
    },
    {
      id: 2,
      title: "Mantenimiento de césped",
      category: "Jardinería",
      location: "Paso del Rey, Buenos Aires",
      date: "2025",
      description: "Corte, bordeado y limpieza del césped para mantener el jardín en óptimas condiciones.",
      image: servicio02,
      alt: "Corte y mantenimiento de césped en jardín",
      featured: false
    },
    {
      id: 3,
      title: "Plantación de especies ornamentales",
      category: "Jardinería",
      location: "Paso del Rey, Buenos Aires",
      date: "2025",
      description: "Plantación de palmeras y especies ornamentales con preparación del suelo y adaptación al entorno.",
      image: servicio03,
      alt: "Plantación de palmeras en jardín",
      featured: false
    },
    {
      id: 4,
      title: "Diseño de cantero decorativo",
      category: "Paisajismo",
      location: "Paso del Rey, Buenos Aires",
      date: "2025",
      description: "Construcción de cantero con piedras decorativas y plantas ornamentales para mejorar el diseño del jardín.",
      image: servicio04,
      alt: "Cantero decorativo con piedras y plantas",
      featured: true
    },
    {
      id: 5,
      title: "Instalación de sistema de riego",
      category: "Riego",
      location: "Paso del Rey, Buenos Aires",
      date: "2023",
      description: "Instalación de sistema de riego automático por aspersión y goteo para optimizar el consumo de agua.",
      image: servicio05,
      alt: "Sistema de riego automático en jardín",
      featured: false
    },
    {
      id: 6,
      title: "Diseño y mantenimiento de jardín",
      category: "Jardinería",
      location: "Paso del Rey, Buenos Aires",
      date: "2025",
      description: "Diseño, plantación y mantenimiento general de jardín con especies ornamentales y césped.",
      image: servicio06,
      alt: "Jardín terminado con diseño paisajístico",
      featured: true
    }
  ];

  const filteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">

        {/* HEADER SEO NATURAL */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Filter className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Proyectos realizados</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Trabajos de jardinería, riego y paisajismo
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Algunos de nuestros trabajos realizados en jardines residenciales y espacios verdes, enfocados en diseño, mantenimiento y sistemas de riego.
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter ? "bg-primary hover:bg-primary-hover" : "hover:bg-primary/10"}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden border-0 hover:shadow-elegant transition-all duration-500 hover:-translate-y-2">

              <CardContent className="p-0">

                {/* IMAGE */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">

                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>

                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.date}
                    </div>

                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
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