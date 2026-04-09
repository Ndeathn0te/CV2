import { motion } from "motion/react";
import { ExternalLink, Layers, MapPin, Maximize2, Tag } from "lucide-react";
import { PortfolioProject } from "./types";

interface PortfolioProps {
  projects: PortfolioProject[];
  lang: 'es' | 'en';
}

export default function Portfolio({ projects, lang }: PortfolioProps) {
  const t = {
    es: {
      subtitle: "Compendio de Proyectos de Alta Complejidad",
      methodology: "Metodología",
      techStack: "Tecnologías",
      details: "Ver Detalles",
      area: "Superficie",
      value: "Inversión"
    },
    en: {
      subtitle: "Compendium of High-Complexity Projects",
      methodology: "Methodology",
      techStack: "Tech Stack",
      details: "View Details",
      area: "Area",
      value: "Program Value"
    }
  }[lang];

  return (
    <div className="flex-grow p-8 bg-white dark:bg-dark-surface transition-colors duration-500 overflow-y-auto">
      <header className="mb-12">
        <h2 className="text-4xl font-black tracking-tighter uppercase mb-2 dark:text-white">Portfolio</h2>
        <p className="text-neutral-500 dark:text-neutral-400 font-medium tracking-widest uppercase text-sm">
          {t.subtitle}
        </p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative bg-neutral-50 dark:bg-dark-bg/40 border border-neutral-200 dark:border-dark-border overflow-hidden flex flex-col h-full"
          >
            {/* Image Section */}
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-black/80 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-black uppercase tracking-tight dark:text-white">{project.title}</h3>
                <ExternalLink size={20} className="text-neutral-300 dark:text-neutral-600" />
              </div>

              <div className="flex flex-wrap gap-4 text-[10px] uppercase font-bold text-neutral-500 dark:text-neutral-400 mb-6">
                <div className="flex items-center gap-1.5"><MapPin size={12} className="text-accent" /> {project.location}</div>
                {project.area && <div className="flex items-center gap-1.5"><Maximize2 size={12} className="text-accent" /> {project.area}</div>}
                {project.value && <div className="flex items-center gap-1.5"><Layers size={12} className="text-accent" /> {project.value}</div>}
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 flex-grow italic">
                {project.description}
              </p>

              <div className="space-y-4 pt-4 border-t border-neutral-200 dark:border-dark-border">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-2 flex items-center gap-2">
                    <Tag size={10} /> {t.methodology}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.methodology.map(m => (
                      <span key={m} className="text-[9px] bg-neutral-200 dark:bg-dark-surface px-2 py-0.5 font-bold uppercase dark:text-neutral-400">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-2 flex items-center gap-2">
                    <Tag size={10} /> {t.techStack}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map(s => (
                      <span key={s} className="text-[9px] border border-neutral-300 dark:border-dark-border px-2 py-0.5 font-bold uppercase dark:text-neutral-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
