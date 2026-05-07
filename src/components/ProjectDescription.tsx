import { AlertCircle, Wrench, CheckCircle2 } from "lucide-react";

interface ProjectDescriptionProps {
  initialState: {
    title: string;
    items: string[];
  };
  intervention: {
    title: string;
    items: string[];
  };
  result: {
    title: string;
    items: string[];
  };
}

const ProjectDescription = ({ initialState, intervention, result }: ProjectDescriptionProps) => {
  const sections = [
    {
      ...initialState,
      icon: <AlertCircle className="w-5 h-5" />,
      iconBg: "bg-destructive/10 text-destructive",
    },
    {
      ...intervention,
      icon: <Wrench className="w-5 h-5" />,
      iconBg: "bg-secondary/10 text-secondary",
    },
    {
      ...result,
      icon: <CheckCircle2 className="w-5 h-5" />,
      iconBg: "bg-primary/10 text-primary",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-secondary text-sm font-medium uppercase tracking-wider">
            Detalles del proyecto
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Descripción Técnica
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {sections.map((section, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-10 h-10 rounded-xl ${section.iconBg} flex items-center justify-center mb-4`}>
                {section.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
