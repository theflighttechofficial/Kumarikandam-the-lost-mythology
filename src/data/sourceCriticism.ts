export interface SourceCriticismEntry {
  sourceId: string; // matches SourceEntry.id in sources.ts
  date: string;
  author: string;
  purpose: string;
  audience: string;
  primaryOrSecondary: 'primary' | 'secondary';
  distanceFromEvent: string;
  evidenceType: string;
  potentialLimitations: string;
}

export const SOURCE_CRITICISM: SourceCriticismEntry[] = [
  { sourceId: 'src-001', date: 'c. 5th century CE', author: 'Ilango Adigal', purpose: 'Epic poetry / moral narrative', audience: 'Tamil courtly and literary audience', primaryOrSecondary: 'primary', distanceFromEvent: 'Centuries after any claimed Sangam-era events', evidenceType: 'Literary/narrative', potentialLimitations: 'A literary epic, not a historical record; events are stylized for narrative and moral purposes.' },
  { sourceId: 'src-007', date: '1864', author: 'Philip Lutley Sclater', purpose: 'Explain disjunct lemur distribution using contemporary biogeography', audience: 'Scientific readership of the Quarterly Journal of Science', primaryOrSecondary: 'primary', distanceFromEvent: 'Contemporary hypothesis, pre-dates plate tectonics by a century', evidenceType: 'Biogeographic inference', potentialLimitations: 'Written before plate tectonics; the land-bridge model it proposed has since been superseded.' },
  { sourceId: 'src-009', date: '1888', author: 'Helena P. Blavatsky', purpose: 'Present a theosophical cosmology', audience: 'Theosophical Society members and readers', primaryOrSecondary: 'primary', distanceFromEvent: 'Claimed esoteric knowledge, no empirical basis', evidenceType: 'Esoteric/spiritual claim', potentialLimitations: 'Not an empirical or historical source; explicitly a mystical framework.' },
  { sourceId: 'src-012', date: '2013', author: 'Trond H. Torsvik et al.', purpose: 'Report peer-reviewed geological findings', audience: 'Scientific community (Nature Geoscience readers)', primaryOrSecondary: 'primary', distanceFromEvent: 'Direct geophysical/geochemical data collection', evidenceType: 'Geological/geochemical data', potentialLimitations: 'Findings pertain to a small microcontinental fragment near Mauritius, not the broader Kumari Kandam claim.' },
  { sourceId: 'src-014', date: '2004', author: 'Sumathi Ramaswamy', purpose: 'Historiographical analysis of the Lemuria/Kumari Kandam synthesis', audience: 'Academic historians and South Asian studies scholars', primaryOrSecondary: 'secondary', distanceFromEvent: 'Analyzes texts and movements from a scholarly distance', evidenceType: 'Historical/cultural analysis', potentialLimitations: 'Interpretive framework; focuses on cultural history rather than adjudicating geological claims.' },
  { sourceId: 'src-016', date: '1966', author: 'G. Devaneya Pavanar', purpose: 'Advocate for Tamil linguistic and civilizational antiquity', audience: 'Tamil revivalist readership', primaryOrSecondary: 'primary', distanceFromEvent: 'Written millennia after claimed events, drawing on legendary tradition', evidenceType: 'Advocacy / cultural-nationalist argument', potentialLimitations: 'Not peer-reviewed science; written with an explicit ideological purpose.' },
  { sourceId: 'src-019', date: 'various, 1980s-2000s', author: 'National Institute of Oceanography (India)', purpose: 'Report underwater survey findings off Poompuhar', audience: 'Scientific and government readership', primaryOrSecondary: 'primary', distanceFromEvent: 'Direct survey data collection', evidenceType: 'Marine survey data', potentialLimitations: 'Interpretation of the features found (natural vs. constructed) remains debated among specialists.' },
];
