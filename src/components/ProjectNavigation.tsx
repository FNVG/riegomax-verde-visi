import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectLink {
  title: string;
  href: string;
}

interface ProjectNavigationProps {
  previous?: ProjectLink;
  next?: ProjectLink;
}

const ProjectNavigation = ({ previous, next }: ProjectNavigationProps) => {
  return (
    <section className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          {previous ? (
            <Link
              to={previous.href}
              className="group flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors max-w-xs"
            >
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="text-left">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Anterior</span>
                <p className="text-sm font-medium text-foreground line-clamp-1">{previous.title}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              to={next.href}
              className="group flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors max-w-xs"
            >
              <div className="text-right">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Siguiente</span>
                <p className="text-sm font-medium text-foreground line-clamp-1">{next.title}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectNavigation;
