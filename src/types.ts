export interface TimelineEvent {
  id: string;
  year: string;
  period: 'Sangam Era' | '1860s' | 'Late 1800s' | '20th Century' | 'Modern/Today';
  category: 'science' | 'mythology' | 'geology' | 'culture';
  title: string;
  summary: string;
  details: string;
  keyFigures: string[];
}

export interface ComparisonPoint {
  id: string;
  aspect: string;
  scientificView: {
    title: string;
    description: string;
    evidence: string;
  };
  mythologicalView: {
    title: string;
    description: string;
    evidence: string;
  };
}

export interface MapFeature {
  id: string;
  name: string;
  region: string;
  coordinates: { x: number; y: number }; // Percentage 0-100 on Indian Ocean map
  type: 'fossil_site' | 'modern_geology' | 'hypothesis_land' | 'ocean_ridge' | 'kumari_kandam';
  title: string;
  description: string;
  historicalContext: string;
  modernConsensus: string;
}

export interface ResearchSource {
  id: string;
  title: string;
  author: string;
  year: string;
  category: 'historical' | 'scientific' | 'modern';
  publication: string;
  readTime: string;
  summary: string;
  citationApa: string;
  citationMla: string;
  isRead: boolean;
  externalLink?: string;
}

export interface ResearchNote {
  id: string;
  title: string;
  tag: 'Science' | 'Mythology' | 'Tectonics' | 'Biogeography' | 'Kumari Kandam' | 'General';
  content: string;
  timestamp: string;
}

export interface ResearchTask {
  id: string;
  text: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  category: string;
}

export interface SangamAcademy {
  id: string;
  name: string;
  tamilName: string;
  location: string;
  duration: string;
  traditionalYears: number;
  kings: string;
  poetsCount: string;
  keyWorks: string[];
  delugeFate: string;
  historicalAnalysis: string;
}

export interface KumariNaduGroup {
  name: string;
  tamilName: string;
  meaning: string;
  description: string;
}

export interface LiteraryReference {
  work: string;
  tamilWork: string;
  period: string;
  quoteOrSummary: string;
  significance: string;
}
