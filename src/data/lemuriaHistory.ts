export interface LemuriaHistoryEvent {
  id: string;
  year: string;
  figure: string;
  event: string;
  domain: 'science' | 'esoteric/popular' | 'tamil revival' | 'modern geology';
}

export const LEMURIA_HISTORY: LemuriaHistoryEvent[] = [
  {
    id: 'lh-1864-sclater',
    year: '1864',
    figure: 'Philip Sclater',
    event: 'Coins the term "Lemuria" in a biogeography paper to explain the puzzling distribution of lemur fossils across Madagascar, India, and the Malay Archipelago, proposing a hypothetical sunken land bridge — a pre-plate-tectonics device, not a claim about human civilization.',
    domain: 'science',
  },
  {
    id: 'lh-1870s-haeckel',
    year: '1870s',
    figure: 'Ernst Haeckel',
    event: 'Popularizes Lemuria further, speculatively suggesting it could be the "cradle of humanity" in his evolutionary diagrams — extending Sclater\'s zoogeographic idea into human origins speculation.',
    domain: 'science',
  },
  {
    id: 'lh-1888-blavatsky',
    year: '1888',
    figure: 'Helena Blavatsky',
    event: 'In "The Secret Doctrine," recasts Lemuria as a mystical lost continent inhabited by an ancient "root race," fusing the scientific term with Theosophical occult cosmology — this is where Lemuria decisively leaves science and enters esoteric literature.',
    domain: 'esoteric/popular',
  },
  {
    id: 'lh-1896-iraiyanar-print',
    year: '1893',
    figure: 'U.V. Swaminatha Iyer',
    event: 'Publishes the first printed edition of Silappatikaram, part of a broader project recovering Sangam-era palm-leaf manuscripts from monasteries and private collections — reviving access to real Sangam literature.',
    domain: 'tamil revival',
  },
  {
    id: 'lh-early1900s-scott-elliot',
    year: 'c. 1904',
    figure: 'W. Scott-Elliot',
    event: 'Publishes Theosophical accounts elaborating Lemuria\'s supposed geography and inhabitants in detail, further cementing the pseudo-historical "lost continent" image in Western popular culture.',
    domain: 'esoteric/popular',
  },
  {
    id: 'lh-1910s-maraimalai',
    year: 'c. 1910s–1920s',
    figure: 'Maraimalai Adigal',
    event: 'Leads the Tamil "pure language" (Tanittamil) revival movement, promoting Tamil linguistic and cultural pride; some contemporaries in this broader movement began linking Tamil antiquity to the Western Lemuria concept.',
    domain: 'tamil revival',
  },
  {
    id: 'lh-1940s-devaneya',
    year: '1940s',
    figure: 'Devaneya Pavanar',
    event: 'Writes extensively asserting Tamil as one of the world\'s oldest languages and Kumari Kandam as a literal, precisely-dated lost continent, merging Tamil revivalist pride with the by-then well-known "Lemuria" myth.',
    domain: 'tamil revival',
  },
  {
    id: 'lh-1950s-nilakanta-sastri',
    year: '1955',
    figure: 'K.A. Nilakanta Sastri',
    event: 'Publishes "A History of South India," offering a critical historian\'s account that treats the Sangam legend cautiously, distinguishing attested Pandyan history from the maximalist submergence narrative.',
    domain: 'tamil revival',
  },
  {
    id: 'lh-1960s-tectonics',
    year: '1960s–1970s',
    figure: 'Plate tectonics researchers (e.g., Dietz & Holden)',
    event: 'The theory of plate tectonics becomes established, definitively explaining continental distribution and fossil patterns without requiring any sunken land bridge — quietly making the original scientific rationale for "Lemuria" obsolete.',
    domain: 'modern geology',
  },
  {
    id: 'lh-2001-mascarene-study',
    year: '2001',
    figure: 'Various marine geologists',
    event: 'Renewed geophysical survey interest in the Mascarene Plateau region identifies gravity anomalies suggesting fragments of thicker, continent-like crust beneath the Indian Ocean floor.',
    domain: 'modern geology',
  },
  {
    id: 'lh-2013-torsvik-mauritia',
    year: '2013',
    figure: 'Trond H. Torsvik and colleagues',
    event: 'Publish peer-reviewed evidence (zircon dating from Mauritius) for a small submerged Precambrian microcontinent, naming it "Mauritia" — confirming a real, but modest and human-irrelevant, piece of ancient continental crust beneath the Indian Ocean.',
    domain: 'modern geology',
  },
  {
    id: 'lh-2016-madagascar-fragments',
    year: '2016',
    figure: 'Follow-up geophysical studies',
    event: 'Further mapping identifies additional small continental fragments scattered across the Indian Ocean floor left behind by the breakup of Madagascar, India, and the Seychelles microcontinent.',
    domain: 'modern geology',
  },
  {
    id: 'lh-popular-media-continued',
    year: '2000s–present',
    figure: 'Popular media, documentaries, and social media',
    event: 'The "Mauritia proves Kumari Kandam" conflation spreads widely online, despite the roughly 60-million-year gap between Mauritia\'s submergence and any human civilization — an ongoing case study in how real science gets popularly misread.',
    domain: 'esoteric/popular',
  },
];
