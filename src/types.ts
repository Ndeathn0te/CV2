export interface Contact {
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  photo?: string;
}

export interface Experience {
  dates: string;
  duration: string;
  company: string;
  sector: string;
  role: string;
  location: string;
  project: string;
  summary: string;
  reasonForLeaving?: string;
}

export interface EarlierExperience {
  role: string;
  company: string;
  year: string;
}

export interface TechnicalSkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
}

export interface Award {
  title: string;
  issuer: string;
  year: string;
  description?: string;
}

export interface Language {
  language: string;
  level: string;
}

export interface CVData {
  name: string;
  title: string;
  contact: Contact;
  summary: string;
  experience: Experience[];
  earlierExperience: EarlierExperience[];
  technicalSkills: TechnicalSkillCategory[];
  education: Education[];
  awards: Award[];
  certifications: string[];
  languages: Language[];
}
