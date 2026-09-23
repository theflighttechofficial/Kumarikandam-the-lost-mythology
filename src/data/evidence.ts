export interface Evidence {
  id: string;
  title: string;
  domain: 'literary_tradition' | 'geological_fragments' | 'sea_level_history' | 'linguistics' | 'popular_continent_claim';
  supports: string;
  doesNotProve: string;
  strength: 'strong' | 'moderate' | 'weak' | 'none';
  source: string;
}

export const EVIDENCE: Evidence[] = [
  {
    id: 'ev-sangam-corpus',
    title: 'Surviving Sangam-era anthologies (Ettuthokai, Pathuppattu)',
    domain: 'literary_tradition',
    supports: 'A sophisticated, ancient Tamil poetic tradition with real ecological and social detail, roughly 3rd century BCE – 3rd century CE.',
    doesNotProve: 'The existence, location, or submergence of any physical "academy" or lost continent.',
    strength: 'strong',
    source: 'Primary manuscript tradition; edited/published by U.V. Swaminatha Iyer from the 1880s onward.',
  },
  {
    id: 'ev-iraiyanar-commentary',
    title: "Nakkirar's commentary on Iraiyanar Akapporul (the three-Sangam narrative)",
    domain: 'literary_tradition',
    supports: 'A medieval (c. 8th–12th century) origin legend that later Tamil scholars used to frame the antiquity of their literature.',
    doesNotProve: 'That the first two Sangams or their lands were historical facts rather than a foundational literary myth.',
    strength: 'weak',
    source: 'Iraiyanar Akapporul, commentary attributed to Nakkirar.',
  },
  {
    id: 'ev-mauritia-zircons',
    title: 'Zircon crystals of Precambrian age found in Mauritius beach sand and lavas',
    domain: 'geological_fragments',
    supports: 'A fragment of continental crust (the Mauritia microcontinent) underlies the volcanic island of Mauritius and parts of the Mascarene Plateau.',
    doesNotProve: 'That Mauritia was ever a large, habitable landmass connected to India in the era of human civilization — it rifted apart and submerged ~60-83 million years ago, long before humans existed.',
    strength: 'strong',
    source: 'Torsvik, T.H. et al. (2013), "A Precambrian microcontinent in the Indian Ocean," Nature Geoscience.',
  },
  {
    id: 'ev-gravity-anomalies',
    title: 'Gravity and bathymetric anomalies across the Mascarene Plateau',
    domain: 'geological_fragments',
    supports: 'Thicker-than-oceanic crust consistent with rifted continental fragments scattered across the Indian Ocean floor.',
    doesNotProve: 'A single, continuous continent-sized landmass; the fragments are scattered, small, and mostly submerged well before any Tamil civilization existed.',
    strength: 'moderate',
    source: 'Marine geophysical surveys, various institutions (NGU, GEOMAR).',
  },
  {
    id: 'ev-post-glacial-sea-level',
    title: 'Global post-glacial sea-level rise curve (~120m since the Last Glacial Maximum)',
    domain: 'sea_level_history',
    supports: 'Coastal land worldwide, including plausibly areas south of the present Tamil Nadu coastline, was submerged as ice sheets melted between ~20,000 and ~6,000 years ago.',
    doesNotProve: 'A single catastrophic deluge event as described in legend, or that a continent-scale landmass existed there before submergence.',
    strength: 'moderate',
    source: 'Fleming, K. et al. (1998) and subsequent sea-level reconstructions; IPCC paleoclimate summaries.',
  },
  {
    id: 'ev-gulf-of-mannar-bathymetry',
    title: 'Bathymetric surveys of the Gulf of Mannar and Palk Strait',
    domain: 'sea_level_history',
    supports: 'A shallow, narrow continental shelf south of India consistent with modest coastal submergence during sea-level rise.',
    doesNotProve: 'Any large submerged landmass; the shelf is narrow, not continental in scale.',
    strength: 'moderate',
    source: 'National Institute of Oceanography (India) survey data.',
  },
  {
    id: 'ev-sclater-1864-paper',
    title: "Sclater's 1864 paper coining the term Lemuria",
    domain: 'popular_continent_claim',
    supports: 'The historical origin of the word "Lemuria" as a 19th-century pre-plate-tectonics biogeographic hypothesis about lemur distribution.',
    doesNotProve: 'Any connection to Tamil culture, Kumari Kandam, or a literal sunken continent — that link was added decades later by others, including Blavatsky and Tamil revivalists.',
    strength: 'strong',
    source: 'P.L. Sclater (1864), "The Mammals of Madagascar," The Quarterly Journal of Science.',
  },
  {
    id: 'ev-plate-tectonics-consensus',
    title: 'Modern plate tectonic theory and paleomagnetic reconstructions',
    domain: 'popular_continent_claim',
    supports: 'A well-supported scientific model explaining continental movement (India rifting from Gondwana ~120 Ma, colliding with Asia ~50 Ma) without requiring any land bridge or sunken continent.',
    doesNotProve: 'Nothing about tectonics supports a continent-scale Kumari Kandam existing during the timeframe of human civilization.',
    strength: 'strong',
    source: 'Standard plate tectonics literature (Dietz & Holden 1970 and subsequent refinements).',
  },
  {
    id: 'ev-no-archaeological-remains',
    title: 'Absence of submerged archaeological remains of a continent-scale civilization',
    domain: 'popular_continent_claim',
    supports: 'No underwater archaeology, sonar survey, or sediment core off the Tamil coast has located ruins of a continent-scale civilization.',
    doesNotProve: 'This is negative evidence: it does not disprove smaller-scale coastal changes, but strongly weighs against the popular "giant sunken continent" narrative.',
    strength: 'strong',
    source: 'Marine Archaeology Centre, National Institute of Oceanography (India) survey reports.',
  },
  {
    id: 'ev-thinai-botanical-accuracy',
    title: 'Cross-referencing of flora/fauna named in Sangam Thinai poetry with known South Indian ecology',
    domain: 'literary_tradition',
    supports: 'Sangam poets described real, regionally specific ecosystems (hill, forest, plain, coast, desert-margin) with observational accuracy.',
    doesNotProve: 'Anything about a lost continent; this is evidence of literary/ecological sophistication, not geological history.',
    strength: 'strong',
    source: 'Tolkappiyam, Porulatikaram; modern ecological-literary scholarship (e.g., George L. Hart).',
  },
  {
    id: 'ev-tamil-revivalist-tracts',
    title: '20th-century Tamil revivalist pamphlets asserting Kumari Kandam chronology',
    domain: 'popular_continent_claim',
    supports: 'The intellectual history of Tamil identity politics and the Dravidian movement\'s use of deep-antiquity narratives.',
    doesNotProve: 'Any of the specific dates, geography, or continent-scale claims made in these tracts, which predate and are unconnected to peer-reviewed geology.',
    strength: 'weak',
    source: 'Writings of Devaneya Pavanar and contemporaries, early-to-mid 20th century.',
  },
];
