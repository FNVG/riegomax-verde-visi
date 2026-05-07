import { Calendar, Ruler, Wrench, FolderOpen } from "lucide-react";

interface ProjectFact {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface ProjectFactsProps {
  facts: ProjectFact[];
}

const ProjectFacts = ({ facts }: ProjectFactsProps) => {
  return (
    <section className="py-12 md:py-16 border-y border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-xl bg-muted/30 border border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 text-primary">
                {fact.icon}
              </div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                {fact.label}
              </span>
              <span className="font-display text-lg font-semibold text-foreground">
                {fact.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectFacts;

export const defaultProjectFacts: ProjectFact[] = [
  {
    icon: <Calendar className="w-5 h-5" />,
    label: "Duración",
    value: "3 semanas",
  },
  {
    icon: <Ruler className="w-5 h-5" />,
    label: "Superficie",
    value: "450 m²",
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    label: "Servicios",
    value: "Riego + Césped",
  },
  {
    icon: <FolderOpen className="w-5 h-5" />,
    label: "Año",
    value: "2024",
  },
];
