import { MapPin } from "lucide-react";
import heroImage from "@/assets/hero-garden.jpg";

interface ProjectHeroProps {
  title: string;
  location: string;
  categories: string[];
}

const ProjectHero = ({ title, location, categories }: ProjectHeroProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pb-12 pt-32 animate-fade-in">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((category, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary border border-primary/30 rounded-full backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 max-w-4xl">
          {title}
        </h1>

        {/* Location */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="w-4 h-4 text-secondary" />
          <span className="text-sm md:text-base">{location}</span>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
