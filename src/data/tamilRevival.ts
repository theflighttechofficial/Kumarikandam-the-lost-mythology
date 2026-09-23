export interface TamilRevivalFigure {
  id: string;
  person: string;
  period: string;
  field: string;
  publication: string;
  contribution: string;
  interpretation: string;
  historicalContext: string;
  source: string;
  role: 'text_preservation' | 'kumari_kandam_promotion' | 'critical_historian';
}

export const TAMIL_REVIVAL: TamilRevivalFigure[] = [
  {
    id: 'tr-uvs-iyer',
    person: 'U.V. Swaminatha Iyer',
    period: '1855–1942',
    field: 'Philology, manuscript editing',
    publication: 'Printed editions of Silappatikaram, Purananuru, Pattuppattu, and others (from 1880s onward)',
    contribution: 'Rediscovered, collated, and printed palm-leaf manuscripts of the classical Sangam corpus, almost single-handedly rescuing the physical texts from being lost.',
    interpretation: 'Focused on textual fidelity and philological accuracy; did not promote the Kumari Kandam continent narrative.',
    historicalContext: 'Worked within a broader 19th-century South Indian revival of interest in classical manuscripts, often in collaboration with colonial-era scholars and printers.',
    source: 'His autobiography "En Sarithiram" and published critical editions.',
    role: 'text_preservation',
  },
  {
    id: 'tr-maraimalai',
    person: 'Maraimalai Adigal',
    period: '1876–1950',
    field: 'Tamil linguistics, social reform',
    publication: 'Writings promoting Tanittamil (pure Tamil) movement',
    contribution: 'Advocated removing Sanskrit loanwords from Tamil and elevating Tamil as an independent classical language and culture; a founding figure of Tamil linguistic nationalism.',
    interpretation: 'Primarily concerned with linguistic purity and Saiva Siddhanta philosophy rather than literal Kumari Kandam geography, though his broader movement fed into later continent narratives.',
    historicalContext: 'Active during the early Dravidian self-respect and non-Brahmin movements in colonial Madras Presidency.',
    source: 'Maraimalai Adigal\'s collected Tanittamil writings.',
    role: 'text_preservation',
  },
  {
    id: 'tr-parithimar',
    person: 'Parithimar Kalaignar (V.G. Suryanarayana Sastri)',
    period: '1870–1903',
    field: 'Tamil literary history',
    publication: 'Lectures and essays asserting Tamil\'s antiquity relative to Sanskrit',
    contribution: 'Among the first to formally argue for Tamil as an ancient classical language deserving parity with Sanskrit, coining the term "Tamil Renaissance" spirit in academic circles.',
    interpretation: 'Argued for deep antiquity of Tamil language and literature; his claims about extreme age fed the intellectual climate in which Kumari Kandam ideas later flourished, though he was primarily a linguistic historian.',
    historicalContext: 'Delivered influential lectures in Madras in the 1890s amid growing Tamil identity consciousness.',
    source: 'Published lectures, University of Madras archives.',
    role: 'critical_historian',
  },
  {
    id: 'tr-devaneya',
    person: 'Devaneya Pavanar',
    period: '1902–1981',
    field: 'Tamil linguistics, Dravidian nationalism',
    publication: '"The Primary Classical Language of the World" and other tracts',
    contribution: 'Wrote extensively asserting Tamil as the world\'s oldest language and Kumari Kandam as a literal, precisely-dateable sunken continent spanning tens of thousands of years.',
    interpretation: 'Explicitly promoted the maximalist continent-sinking narrative as historical fact, well beyond what any textual or geological evidence supports.',
    historicalContext: 'Wrote during the height of the Dravidian movement\'s use of deep-antiquity narratives for cultural and political assertion.',
    source: 'Devaneya Pavanar\'s published tracts and pamphlets.',
    role: 'kumari_kandam_promotion',
  },
  {
    id: 'tr-purnalingam',
    person: 'M.S. Purnalingam Pillai',
    period: '1866–1947',
    field: 'Tamil literary history',
    publication: '"Tamil Literature" (1929)',
    contribution: 'Wrote one of the first systematic English-language histories of Tamil literature, discussing the Sangam legend while noting its uncertain historicity.',
    interpretation: 'Presented the three-Sangam tradition as inherited legend worth recording, generally more cautious than the outright promotional tracts of the period.',
    historicalContext: 'Part of the early 20th-century academic effort to formalize Tamil literary history for a wider (including English-reading) audience.',
    source: '"Tamil Literature" (1929), Purnalingam Pillai.',
    role: 'critical_historian',
  },
  {
    id: 'tr-vaiyapuri',
    person: 'S. Vaiyapuri Pillai',
    period: '1891–1956',
    field: 'Tamil philology and textual criticism',
    publication: '"History of Tamil Language and Literature" (1956)',
    contribution: 'Applied rigorous, skeptical philological dating methods to Sangam texts, notably arguing for later dates for some texts (including aspects of Tolkappiyam) than traditional accounts claimed.',
    interpretation: 'Explicitly critical of unverified antiquity claims; his work was controversial among revivalists precisely because it pushed back against maximalist dating and the Kumari Kandam framing.',
    historicalContext: 'His critical redating sparked significant academic and political controversy in mid-20th-century Tamil Nadu.',
    source: '"History of Tamil Language and Literature," S. Vaiyapuri Pillai.',
    role: 'critical_historian',
  },
  {
    id: 'tr-nilakanta-sastri',
    person: 'K.A. Nilakanta Sastri',
    period: '1892–1975',
    field: 'South Indian history',
    publication: '"A History of South India" (1955)',
    contribution: 'Wrote the standard academic history of South India, treating the Sangam legend and Pandyan chronology with careful source criticism, distinguishing epigraphically attested history from literary legend.',
    interpretation: 'Explicitly cautious historian; presents Kumari Kandam-adjacent material as tradition to be reported, not verified fact.',
    historicalContext: 'A leading figure of professional, source-critical Indian historiography in the mid-20th century.',
    source: '"A History of South India," K.A. Nilakanta Sastri.',
    role: 'critical_historian',
  },
];
