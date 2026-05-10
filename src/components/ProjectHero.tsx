import { MapPin } from "lucide-react";
import heroImage from "@/assets/hero-garden.jpg";

interface ProjectHeroProps {
  title: string;
  location: string;
  categories: string[];
}

const ProjectHero = ({
  title,
  location,
  categories,
}: ProjectHeroProps) => {
  return (
    <section className="relative h-[34vh] sm:h-[42vh] md:h-[60vh] lg:h-[70vh] flex items-end overflow-hidden">
      
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
      <div className="relative container mx-auto px-4 pb-5 pt-16 sm:pb-6 sm:pt-20 md:pb-12 md:pt-32 animate-fade-in">
        
        {/* Categories */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {categories.map((category, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-[10px] sm:text-xs font-medium bg-primary/20 text-primary border border-primary/30 rounded-full backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 md:mb-4 max-w-4xl leading-tight">
          {title}
        </h1>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary" />

          <span className="text-xs sm:text-sm md:text-base">
            {location}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;