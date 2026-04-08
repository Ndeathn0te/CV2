import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Award, 
  GraduationCap, 
  Wrench, 
  Languages,
  ChevronRight,
  FileText,
  ExternalLink,
  Moon,
  Sun
} from "lucide-react";
import { cvData } from "./data";

export default function App() {
  const cvRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to Light/Print mode

  // Auto-print if the URL has ?print=true (useful when opening in a new tab)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('print') === 'true') {
      // Small delay to ensure styles are loaded
      const timer = setTimeout(() => {
        window.print();
        // Clean up the URL after printing
        window.history.replaceState({}, '', window.location.pathname);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handlePrint = () => {
    // If we are in an iframe, window.print() might be blocked.
    // Opening in a new tab with a print flag is the most reliable way.
    const printUrl = window.location.origin + window.location.pathname + '?print=true';
    window.open(printUrl, '_blank');
  };

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`${isDarkMode ? "dark" : ""} min-h-screen transition-colors duration-500 bg-neutral-100 dark:bg-dark-bg font-sans text-neutral-900 dark:text-neutral-100 p-2 print:p-0 print:bg-white`}>
      {/* Botones de acción flotantes */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 print:hidden z-50">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleDarkMode}
          className="bg-white dark:bg-dark-surface text-black dark:text-white p-4 rounded-full shadow-2xl flex items-center justify-center border border-neutral-200 dark:border-dark-border backdrop-blur-md bg-opacity-80"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isDarkMode ? "moon" : "sun"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isDarkMode ? <Moon size={20} className="text-blue-400" /> : <Sun size={20} className="text-amber-500" />}
            </motion.div>
          </AnimatePresence>
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrint}
          title="Imprimir o Guardar como PDF"
          className="bg-black dark:bg-white text-white dark:text-black p-4 rounded-full transition-all shadow-2xl flex items-center justify-center group border border-transparent dark:border-dark-border"
        >
          <div className="flex items-center gap-2 px-2">
            <FileText size={20} />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-medium whitespace-nowrap">
              Imprimir / PDF
            </span>
            <ExternalLink size={14} className="opacity-50" />
          </div>
        </motion.button>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        id="cv-print-area"
        ref={cvRef} 
        className="w-[210mm] mx-auto bg-white dark:bg-dark-surface shadow-2xl print:shadow-none relative border border-neutral-200 dark:border-dark-border print:border-none min-h-[560mm] flex flex-col transition-colors duration-500"
      >
        {/* Header - Ultra Minimal */}
        <header className="bg-black dark:bg-black text-white px-8 py-2.5 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            {cvData.contact.photo && (
              <div className="w-20 h-20 shrink-0 border-2 border-white/20 dark:border-white/10 overflow-hidden transition-all duration-500">
                <img 
                  src={cvData.contact.photo} 
                  alt={cvData.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
            <div>
              <h1 className="text-2xl font-black tracking-tighter uppercase leading-none">{cvData.name}</h1>
              <p className="text-[10pt] font-light text-neutral-400 tracking-widest uppercase">{cvData.title}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-[7.5pt] font-bold uppercase text-neutral-300">
            <div className="flex items-center gap-1"><MapPin size={8} /> {cvData.contact.location}</div>
            <div className="flex items-center gap-1"><Phone size={8} /> {cvData.contact.phone}</div>
            <div className="flex items-center gap-1"><Mail size={8} /> {cvData.contact.email}</div>
            <div className="flex items-center gap-1"><Linkedin size={8} /> {cvData.contact.linkedin}</div>
          </div>
        </header>

        {/* Hero Metrics - C-Level Snapshot */}
        <section className="bg-neutral-900 border-b-2 border-accent text-white px-8 py-1 flex justify-between items-center text-[6.5pt] uppercase tracking-widest font-bold">
          <div className="flex flex-col"><span className="text-neutral-400 text-[5.5pt]">Valor de Programa</span><span className="text-white">&gt; €10.000 Millones</span></div>
          <div className="w-px h-5 bg-neutral-700"></div>
          <div className="flex flex-col"><span className="text-neutral-400 text-[5.5pt]">Área Coordinada</span><span className="text-white">&gt; 500.000 m²</span></div>
          <div className="w-px h-5 bg-neutral-700"></div>
          <div className="flex flex-col"><span className="text-neutral-400 text-[5.5pt]">Liderazgo Equipos</span><span className="text-white">Hasta 16 profesionales</span></div>
          <div className="w-px h-5 bg-neutral-700"></div>
          <div className="flex flex-col"><span className="text-neutral-400 text-[5.5pt]">Certificación Base</span><span className="text-white">PMP / ISO 19650</span></div>
        </section>

        {/* Summary - Single Line if possible */}
        <section className="px-9 py-2 bg-neutral-50 dark:bg-dark-bg/50 border-b border-neutral-200 dark:border-dark-border">
          <p className="text-[7pt] leading-snug text-neutral-800 dark:text-neutral-300 italic whitespace-pre-line">
            <span className="text-accent dark:text-accent font-black uppercase text-[7pt] mr-2">Perfil:</span>
            {cvData.summary}
          </p>
        </section>

        <div className="grid grid-cols-12 flex-grow">
          {/* Experience Column */}
          <div className="col-span-8 px-9 py-3 space-y-3 border-r border-neutral-100 dark:border-dark-border">
            <section>
              <h2 className="text-[8.5pt] font-black uppercase tracking-widest border-b-2 border-black dark:border-white mb-2 pb-0.5">Experiencia</h2>
              <div className="space-y-2.5">
                {cvData.experience.map((exp, idx) => (
                  <div key={idx} className="break-inside-avoid">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-[8pt] font-black uppercase leading-tight dark:text-white">{exp.role}</h3>
                      <span className="text-[6.5pt] font-bold text-neutral-500 dark:text-neutral-400">{exp.dates}</span>
                    </div>
                    <div className="flex justify-between text-[6.5pt] font-bold text-neutral-400 dark:text-neutral-500 uppercase mb-0.5">
                      <span>{exp.company} / {exp.sector} • {exp.location}</span>
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-start gap-1 bg-neutral-50 dark:bg-dark-bg/30 px-1 border-l border-black dark:border-white mb-0.5">
                      <ChevronRight size={6} className="mt-0.5 shrink-0" />
                      <p className="text-[6.5pt] font-bold text-neutral-800 dark:text-neutral-200 italic leading-tight">{exp.project}</p>
                    </div>
                    <p className="text-[7pt] text-neutral-800 dark:text-neutral-300 leading-snug whitespace-pre-line mb-1">{exp.summary}</p>
                    {exp.reasonForLeaving && exp.reasonForLeaving !== "N/A - Puesto actual" && (
                      <div className="flex gap-1 items-start bg-neutral-50 dark:bg-dark-bg/20 px-1 py-0.5 border-l-2 border-neutral-200 dark:border-dark-border">
                        <span className="text-[5.5pt] font-black uppercase text-neutral-400 shrink-0 mt-0.5">Salida:</span>
                        <p className="text-[6.5pt] text-neutral-500 dark:text-neutral-500 italic leading-tight">{exp.reasonForLeaving}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="break-inside-avoid">
              <h2 className="text-[8.5pt] font-black uppercase tracking-widest border-b-2 border-black dark:border-white mb-2 pb-0.5">Historial</h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                {cvData.earlierExperience.map((exp, idx) => (
                  <div key={idx} className="flex justify-between items-start text-[7.5pt] border-b border-neutral-50 dark:border-dark-border/50 pb-0.5 gap-2">
                    <span className="font-bold uppercase leading-tight text-neutral-800 dark:text-neutral-200">{exp.role} @ {exp.company}</span>
                    <span className="text-neutral-400 dark:text-neutral-500 shrink-0">{exp.year}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <aside className="col-span-4 bg-neutral-50 dark:bg-dark-bg/20 px-8 py-3 space-y-4 print:bg-white min-h-full">
            <section className="break-inside-avoid">
              <h2 className="text-[8.5pt] font-black uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-2 flex items-center gap-1">
                <Wrench size={8} /> Especialización
              </h2>
              <div className="space-y-1.5">
                {cvData.technicalSkills.map((cat, idx) => (
                  <div key={idx}>
                    <h3 className="text-[7pt] font-bold uppercase text-neutral-900 dark:text-neutral-100 mb-0.5">{cat.category}</h3>
                    <div className="flex flex-wrap gap-0.5">
                      {cat.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="text-[7pt] bg-white dark:bg-dark-surface border border-neutral-200 dark:border-dark-border px-1.5 py-0.5 text-neutral-700 dark:text-neutral-300 uppercase">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="break-inside-avoid">
              <h2 className="text-[8.5pt] font-black uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-2 flex items-center gap-1">
                <GraduationCap size={8} /> Educación
              </h2>
              <div className="space-y-2.5">
                {cvData.education.map((edu, idx) => (
                  <div key={idx}>
                    <p className="text-[8pt] font-bold uppercase leading-tight text-neutral-900 dark:text-neutral-100">{edu.degree}</p>
                    <p className="text-[7pt] text-neutral-500 dark:text-neutral-500 uppercase">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="break-inside-avoid">
              <h2 className="text-[8.5pt] font-black uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-2 flex items-center gap-1">
                <Award size={8} /> Reconocimientos
              </h2>
              {cvData.awards.map((award, idx) => (
                <div key={idx} className="bg-black dark:bg-neutral-800 text-white p-1.5 mb-1.5 border border-transparent dark:border-dark-border">
                  <p className="text-[7.5pt] font-bold uppercase leading-tight">{award.title}</p>
                  <p className="text-[6.5pt] text-neutral-400 dark:text-neutral-500 uppercase">{award.issuer} / {award.year}</p>
                  {award.description && <p className="text-[6pt] text-neutral-500 dark:text-neutral-400 italic leading-tight text-justify">{award.description}</p>}
                </div>
              ))}
              <div className="mt-2.5">
                <h3 className="text-[7pt] font-bold uppercase text-neutral-400 dark:text-neutral-500 mb-1">Certificaciones</h3>
                <ul className="space-y-0.5">
                  {cvData.certifications.map((cert, idx) => (
                    <li key={idx} className="text-[7pt] text-neutral-700 dark:text-neutral-400 uppercase flex items-start gap-1">
                      <div className="w-0.5 h-0.5 bg-black dark:bg-white rotate-45 mt-1 shrink-0" /> {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="break-inside-avoid">
              <h2 className="text-[8.5pt] font-black uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-2 flex items-center gap-1">
                <Languages size={8} /> Idiomas
              </h2>
              <div className="space-y-1.5">
                {cvData.languages.map((lang, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-neutral-200 dark:border-dark-border text-[8pt] pb-1">
                    <span className="font-bold uppercase text-neutral-800 dark:text-neutral-200">{lang.language}</span>
                    <span className="text-neutral-400 dark:text-neutral-500">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>

        <footer className="mt-auto bg-black text-white px-9 py-2 flex justify-between items-center text-[6pt] uppercase tracking-widest">
          <span>Armando González • Portafolio CV • 2026</span>
          <div className="flex gap-2">
            <div className="w-4 h-[1px] bg-neutral-800 rotate-45" />
            <div className="w-4 h-[1px] bg-neutral-800 rotate-45" />
          </div>
        </footer>
      </motion.div>
    </div>
  );
}
