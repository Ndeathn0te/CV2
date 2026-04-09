import { PortfolioProject } from "./types";

export const portfolioDataEs: PortfolioProject[] = [
  {
    id: "fehmarnbelt",
    title: "Túnel de Fehmarnbelt (Enlace Fijo)",
    category: "Infraestructura",
    location: "Dinamarca - Alemania",
    area: "18 km de longitud",
    value: "€7.400 M",
    description: "Dirección de operaciones BIM para el túnel sumergido más largo del mundo. Coordinación Open BIM de 22 segmentos estructurales críticos bajo metodología ISO 19650.",
    methodology: ["ISO 19650", "CDE Management", "Kanban / Agile"],
    techStack: ["Revit", "Navisworks", "Synchro 4D", "BIMcollab"],
    imageUrl: "https://images.unsplash.com/photo-1545139239-e817af750cd5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "data-centers",
    title: "Centros de Datos Hyperscale",
    category: "Misión Crítica / IT",
    location: "España",
    area: "20.000 m² IT por clúster",
    value: "+€6.000 M (Programa)",
    description: "Producción de paquetes de diseño técnico MEP y coordinación espacial (LOD 350) para nubes hiperescala de Microsoft y Amazon bajo frameworks de AECOM y estrictos NDA.",
    methodology: ["MEP Coordination", "Technical Design", "Security Protocols"],
    techStack: ["Revit MEP", "Navisworks", "Python (Automations)"],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010958384e?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "camp-nou",
    title: "Spotify Camp Nou",
    category: "Deportes / Estadios",
    location: "Barcelona, España",
    area: "300.000 m²",
    value: "€1.300 M",
    description: "Liderazgo del equipo de modelado arquitectónico in situ y remoto. Gestión de modelos federados de alta densidad para la remodelación estructural y arquitectónica del estadio de fútbol más grande de Europa.",
    methodology: ["VDC", "Clash Detection", "ICE Sessions"],
    techStack: ["Revit", "Dynamo", "ACC"],
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "nato-defense",
    title: "Infraestructura de Defensa OTAN",
    category: "Defensa / Militar",
    location: "Bélgica",
    area: "250.000 m²",
    value: "€800 M",
    description: "Diseño BIM de despliegue rápido y coordinación espacial bajo protocolos USACE (Cuerpo de Ingenieros del Ejército de los EE. UU.). Gestión de entregables escalonados rigurosos (30/60/90/100%).",
    methodology: ["USACE Standards", "Phased Deliverables", "Secure BIM"],
    techStack: ["Revit", "Navisworks", "ACC"],
    imageUrl: "https://images.unsplash.com/photo-1584462198614-046129841029?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "hospital-orihuela",
    title: "Ampliación Hospital de Orihuela",
    category: "Salud / MEP",
    location: "Alicante, España",
    area: "45.000 m²",
    value: "€70 M",
    description: "Coordinación BIM integral para el alcance mecánico (climatización y fluidos). Generación de modelos ejecutables, cuantificación por fases y verificación de instalaciones in situ frente a modelos de diseño.",
    methodology: ["LoIN / BEP", "Federated Workflows", "As-Built Verification"],
    techStack: ["Revit MEP", "Navisworks", "CDE"],
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
  },
  {
    id: "magellan-telescope",
    title: "Telescopio Gigante de Magallanes",
    category: "Científico / Ingeniería Pesada",
    location: "Chile / España (IDOM)",
    area: "No divulgado",
    value: "€1.700 M",
    description: "Coordinación extrema MEP y arquitectónica resolviendo severas restricciones de espacio. Desarrollo operativo bajo plazos implacables para infraestructuras científicas de escala global.",
    methodology: ["Clash Detection", "High-Precision VDC"],
    techStack: ["Revit", "Navisworks", "IT Server Infrastructure"],
    imageUrl: "https://images.unsplash.com/photo-1549495689-f55dbbb02a3a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "hospitals-spain-senegal",
    title: "Megahospitales (Basurto / Donostia / Dakar)",
    category: "Salud",
    location: "España / Senegal",
    area: "420.000 m² combinados",
    value: "€685 M combinados",
    description: "Gestión de un volumen extremo de coordinación de atención médica concurrente internacional. Implementación de librerías estandarizadas y resolución de cuellos de botella de datos críticos en el modelo.",
    methodology: ["ISO 19650", "Concurrent Engineering", "QA Governance"],
    techStack: ["Revit", "Navisworks", "Dynamo"],
    imageUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop"
  },
  {
    id: "heritage-salamanca",
    title: "Palacio Marqués de Salamanca HQ",
    category: "Patrimonial / Corporativo",
    location: "Madrid, España",
    area: "25.000 m²",
    value: "€50 M",
    description: "Restauración integral de BIM para un edificio patrimonial histórico, equilibrando integraciones modernas de MEP con estrictas restricciones de conservación estética y estructural.",
    methodology: ["Heritage BIM (HBIM)", "Scan-to-BIM", "Point Cloud Intel"],
    techStack: ["Revit", "ReCap", "LiDAR Data"],
    imageUrl: "https://images.unsplash.com/photo-1621614050901-71fb264f33b1?q=80&w=2012&auto=format&fit=crop"
  },
  {
    id: "isla-multiespacio",
    title: "Rascacielos Isla Multiespacio",
    category: "Uso Mixto / High-Rise",
    location: "Valencia, Venezuela",
    area: "90.000 m²",
    value: "€150 M",
    description: "Producción completa de arquitectura BIM de principio a fin, incluyendo supervisión de campo. Lideró la interoperabilidad multiplataforma entre equipos de Revit y ArchiCAD vía ecosistema Open BIM.",
    methodology: ["Open BIM", "IFC Interoperability", "Site Supervision"],
    techStack: ["Revit", "ArchiCAD", "V-Ray", "AutoCAD"],
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  }
];

export const portfolioDataEn: PortfolioProject[] = [
  {
    id: "fehmarnbelt",
    title: "Fehmarnbelt Fixed Link Tunnel",
    category: "Infrastructure",
    location: "Denmark - Germany",
    area: "18 km Length",
    value: "€7.4bn",
    description: "Directed BIM operations for the world's longest immersed tunnel. Managed Open BIM coordination for 22 critical structural segments under ISO 19650.",
    methodology: ["ISO 19650", "CDE Management", "Kanban / Agile"],
    techStack: ["Revit", "Navisworks", "Synchro 4D", "BIMcollab"],
    imageUrl: "https://images.unsplash.com/photo-1545139239-e817af750cd5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "data-centers",
    title: "Hyperscale Data Centers",
    category: "Mission Critical / IT",
    location: "Spain",
    area: "20,000 sqm IT per cluster",
    value: "+€6bn (Program)",
    description: "Produced MEP technical design packages and spatial coordination (LOD 350) for Microsoft and Amazon hyperscale clouds under AECOM frameworks and strict NDAs.",
    methodology: ["MEP Coordination", "Technical Design", "Security Protocols"],
    techStack: ["Revit MEP", "Navisworks", "Python (Automations)"],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010958384e?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "camp-nou",
    title: "Spotify Camp Nou Stadium",
    category: "Sports / Stadiums",
    location: "Barcelona, Spain",
    area: "300,000 sqm",
    value: "€1.3bn",
    description: "Led the on-site and remote architectural modeling team. Managed high-density federated models for the structural and architectural remodeling of Europe's largest football stadium.",
    methodology: ["VDC", "Clash Detection", "ICE Sessions"],
    techStack: ["Revit", "Dynamo", "ACC"],
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "nato-defense",
    title: "NATO Defense Infrastructure",
    category: "Defense / Military",
    location: "Belgium",
    area: "250,000 sqm",
    value: "€800m",
    description: "Rapid-deployment BIM design and spatial coordination under USACE (U.S. Army Corps of Engineers) protocols. Managed rigorous staggered deliverables (30/60/90/100%).",
    methodology: ["USACE Standards", "Phased Deliverables", "Secure BIM"],
    techStack: ["Revit", "Navisworks", "ACC"],
    imageUrl: "https://images.unsplash.com/photo-1584462198614-046129841029?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "hospital-orihuela",
    title: "Orihuela Hospital Expansion",
    category: "Healthcare / MEP",
    location: "Alicante, Spain",
    area: "45,000 sqm",
    value: "€70m",
    description: "Comprehensive BIM coordination for the mechanical scope (HVAC and fluids). Generated execution-ready models, phased quantification, and on-site MEP verification against design models.",
    methodology: ["LoIN / BEP", "Federated Workflows", "As-Built Verification"],
    techStack: ["Revit MEP", "Navisworks", "CDE"],
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
  },
  {
    id: "magellan-telescope",
    title: "Giant Magellan Telescope",
    category: "Scientific / Heavy Engineering",
    location: "Chile / Spain (IDOM)",
    area: "Undisclosed",
    value: "€1.7bn",
    description: "Extreme MEP and architectural coordination solving severe spatial constraints. Executed under relentless deadlines for a global-scale scientific megastructure.",
    methodology: ["Clash Detection", "High-Precision VDC"],
    techStack: ["Revit", "Navisworks", "IT Server Infrastructure"],
    imageUrl: "https://images.unsplash.com/photo-1549495689-f55dbbb02a3a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "hospitals-spain-senegal",
    title: "Megahospitals (Basurto / Donostia / Dakar)",
    category: "Healthcare",
    location: "Spain / Senegal",
    area: "420,000 sqm aggregate",
    value: "€685m aggregate",
    description: "Managed an extreme volume of concurrent international healthcare coordination. Deployed standardized libraries and resolved critical data bottlenecks in federated models.",
    methodology: ["ISO 19650", "Concurrent Engineering", "QA Governance"],
    techStack: ["Revit", "Navisworks", "Dynamo"],
    imageUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop"
  },
  {
    id: "heritage-salamanca",
    title: "Marqués de Salamanca Heritage HQ",
    category: "Heritage / Corporate",
    location: "Madrid, Spain",
    area: "25,000 sqm",
    value: "€50m",
    description: "Comprehensive BIM restoration for a landmark heritage building, balancing modern MEP integrations with strict aesthetic and structural preservation constraints.",
    methodology: ["Heritage BIM (HBIM)", "Scan-to-BIM", "Point Cloud Intel"],
    techStack: ["Revit", "ReCap", "LiDAR Data"],
    imageUrl: "https://images.unsplash.com/photo-1621614050901-71fb264f33b1?q=80&w=2012&auto=format&fit=crop"
  },
  {
    id: "isla-multiespacio",
    title: "Isla Multiespacio High-Rise",
    category: "Mixed-Use / High-Rise",
    location: "Valencia, Venezuela",
    area: "90,000 sqm",
    value: "€150m",
    description: "End-to-end architectural BIM production including field supervision. Championed cross-platform interoperability between Revit and ArchiCAD teams via the Open BIM ecosystem.",
    methodology: ["Open BIM", "IFC Interoperability", "Site Supervision"],
    techStack: ["Revit", "ArchiCAD", "V-Ray", "AutoCAD"],
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  }
];
