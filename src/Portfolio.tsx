import { motion } from "motion/react";
import { Layers, MapPin, Maximize2, Tag, Wrench } from "lucide-react";
import { PortfolioProject } from "./types";

interface PortfolioProps {
  projects: PortfolioProject[];
  lang: 'es' | 'en';
}

export default function Portfolio({ projects, lang }: PortfolioProps) {
  const t = {
    es: {
      subtitle: "Proyectos Seleccionados",
      methodology: "Marco de Trabajo",
      techStack: "Software",
    },
    en: {
      subtitle: "Selected Projects",
      methodology: "Framework",
      techStack: "Software",
    }
  }[lang];

  return (
    <div className="flex-grow px-6 py-10 bg-white dark:bg-dark-surface transition-colors duration-500">
      <header className="mb-10 border-b-2 border-black dark:border-white pb-4">
        <h2 className="text-3xl font-black tracking-tighter uppercase mb-1 dark:text-white">Portfolio</h2>
        <p className="text-neutral-400 dark:text-neutral-500 font-bold tracking-widest uppercase text-[10px]">
          {t.subtitle}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="group border border-neutral-200 dark:border-dark-border p-5 flex flex-col h-full bg-neutral-50 dark:bg-dark-bg/30 hover:border-black dark:hover:border-white transition-colors duration-300"
          >
            {/* Header */}
            <div className="mb-3">
              <span className="text-[9px] font-bold uppercase tracking-widest text-accent mb-1 block">
                {project.category}
              </span>
              <h3 className="text-base font-black uppercase tracking-tight dark:text-white leading-tight">
                {project.title}
              </h3>
            </div>

            {/* Metrics row */}
            <div className="flex flex-wrap gap-3 text-[9px] uppercase font-bold text-neutral-500 dark:text-neutral-400 mb-3 pb-3 border-b border-neutral-200 dark:border-dark-border">
              <div className="flex items-center gap-1"><MapPin size={10} className="text-neutral-400" /> {project.location}</div>
              {project.area && <div className="flex items-center gap-1"><Maximize2 size={10} className="text-neutral-400" /> {project.area}</div>}
              {project.value && <div className="flex items-center gap-1"><Layers size={10} className="text-neutral-400" /> {project.value}</div>}
            </div>

            {/* Description */}
            <p className="text-[11px] text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4 flex-grow">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 pt-3 border-t border-neutral-200 dark:border-dark-border">
              <div className="flex-1 min-w-0">
                <h4 className="text-[8px] font-black uppercase tracking-widest text-neutral-400 mb-1.5 flex items-center gap-1">
                  <Tag size={8} /> {t.methodology}
                </h4>
                <div className="flex flex-wrap gap-1">
                  {project.methodology.map(m => (
                    <span key={m} className="text-[8px] bg-black dark:bg-white text-white dark:text-black px-1.5 py-0.5 font-bold uppercase">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[8px] font-black uppercase tracking-widest text-neutral-400 mb-1.5 flex items-center gap-1">
                  <Wrench size={8} /> {t.techStack}
                </h4>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map(s => (
                    <span key={s} className="text-[8px] border border-neutral-300 dark:border-dark-border px-1.5 py-0.5 font-bold uppercase text-neutral-600 dark:text-neutral-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
