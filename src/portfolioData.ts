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
    id: "camp-nou",
    title: " Spotify Camp Nou",
    category: "Deportes / Estadios",
    location: "Barcelona, España",
    area: "300.000 m²",
    value: "€1.300 M",
    description: "Liderazgo del equipo de modelado arquitectónico in situ. Gestión de modelos federados de alta densidad para la remodelación del estadio más grande de Europa.",
    methodology: ["VDC", "Clash Detection", "ICE Sessions"],
    techStack: ["Revit", "Dynamo", "ACC (Autodesk Construction Cloud)"],
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "data-centers",
    title: "Centros de Datos Hyperscale",
    category: "Misión Crítica",
    location: "Bélgica - España",
    area: "20.000 m² IT",
    value: "+€6.000 M",
    description: "Coordinación técnica MEP para infraestructuras de Microsoft y Amazon. Paquetes de diseño de alta precisión (LOD 350) bajo protocolos de seguridad USACE.",
    methodology: ["MEP Coordination", "Technical Design", "Security Protocols"],
    techStack: ["Revit MEP", "Navisworks", "Python (Automations)"],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010958384e?q=80&w=2000&auto=format&fit=crop"
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
    id: "camp-nou",
    title: "Spotify Camp Nou Stadium",
    category: "Sports / Stadiums",
    location: "Barcelona, Spain",
    area: "300,000 sqm",
    value: "€1.3bn",
    description: "Led the on-site architectural modeling team. Managed high-density federated models for the remodeling of Europe's largest football stadium.",
    methodology: ["VDC", "Clash Detection", "ICE Sessions"],
    techStack: ["Revit", "Dynamo", "ACC (Autodesk Construction Cloud)"],
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "data-centers",
    title: "Hyperscale Data Centers",
    category: "Mission Critical",
    location: "Belgium - Spain",
    area: "20,000 sqm IT",
    value: "+€6bn",
    description: "MEP technical coordination for Microsoft and Amazon infrastructures. High-precision design packages (LOD 350) under USACE security protocols.",
    methodology: ["MEP Coordination", "Technical Design", "Security Protocols"],
    techStack: ["Revit MEP", "Navisworks", "Python (Automations)"],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010958384e?q=80&w=2000&auto=format&fit=crop"
  }
];
