export interface SourceGraphNode {
  id: string;
  label: string;
  year: string;
  description: string;
  x: number; // percentage position
  y: number;
}

export interface SourceGraphEdge {
  from: string;
  to: string;
}

export const SOURCE_GRAPH_NODES: SourceGraphNode[] = [
  { id: 'sclater', label: 'Sclater (1864)', year: '1864', description: 'Proposes "Lemuria" as a biogeographic land bridge to explain lemur distribution.', x: 10, y: 50 },
  { id: 'lemuria', label: 'Lemuria Hypothesis', year: '1864–1900s', description: 'The scientific hypothesis itself, actively discussed in Victorian zoology before plate tectonics.', x: 28, y: 50 },
  { id: 'theosophy', label: 'Theosophy', year: '1888–1904', description: 'Blavatsky and Scott-Elliot reinterpret Lemuria as an esoteric "root race" continent.', x: 48, y: 20 },
  { id: 'biogeography', label: 'Biogeography', year: '1860s–1960s', description: 'The scientific lineage that eventually resolves the lemur puzzle via continental drift and ocean rafting.', x: 48, y: 80 },
  { id: 'popular-lemuria', label: 'Popular Lemuria Culture', year: '1900s–present', description: 'Esoteric and pulp-fiction traditions keep a mythologized Lemuria alive in popular culture.', x: 68, y: 15 },
  { id: 'plate-tectonics', label: 'Plate Tectonics', year: '1912–1960s', description: 'Wegener\'s continental drift, later confirmed by seafloor spreading, replaces land-bridge biogeography.', x: 68, y: 85 },
  { id: 'modern-debate', label: 'Modern Debate', year: '1990s–present', description: 'Academic historians (e.g. Ramaswamy) and geologists reassess both the Tamil and Western strands.', x: 86, y: 50 },
  { id: 'kumari-kandam', label: 'Kumari Kandam', year: '1900s–present', description: 'Tamil revivalist scholars merge Sangam flood tradition with the Western Lemuria idea.', x: 68, y: 50 },
  { id: 'mauritia', label: 'Mauritia (2013)', year: '2013', description: 'Real microcontinent discovery, popularly (and misleadingly) dubbed "real-life Lemuria."', x: 96, y: 75 },
];

export const SOURCE_GRAPH_EDGES: SourceGraphEdge[] = [
  { from: 'sclater', to: 'lemuria' },
  { from: 'lemuria', to: 'theosophy' },
  { from: 'lemuria', to: 'biogeography' },
  { from: 'theosophy', to: 'popular-lemuria' },
  { from: 'biogeography', to: 'plate-tectonics' },
  { from: 'lemuria', to: 'kumari-kandam' },
  { from: 'popular-lemuria', to: 'modern-debate' },
  { from: 'plate-tectonics', to: 'modern-debate' },
  { from: 'kumari-kandam', to: 'modern-debate' },
  { from: 'modern-debate', to: 'mauritia' },
];
