export interface SangamPanel {
  id: string;
  name: string;
  location: string;
  patron: string;
  status: 'legendary_tradition' | 'historically_debated' | 'well_attested_literature';
  associatedWith: string[];
  duration?: string;
  poets?: string;
  rulers?: string;
  texts?: string[];
  laterCommentary?: string;
  historicallyEstablished: string;
  evidenceClassification: 'literary tradition only' | 'partly corroborated' | 'no independent corroboration';
}

export const SANGAM_TRADITION: SangamPanel[] = [
  {
    id: 'sangam-1',
    name: 'First Sangam (Talai Sangam)',
    location: "'Then Madurai', said in legend to have been submerged by the sea",
    patron: 'Legendary Pandyan kings, beginning with Agastya tradition',
    status: 'legendary_tradition',
    associatedWith: ['Kumari Kandam legend', 'Agastyam (a lost grammar attributed to sage Agastya)'],
    duration: 'Traditionally said to span thousands of years (figures vary wildly across sources, from ~4,400 to over 10,000 years)',
    poets: 'Said to include gods and sages such as Shiva and Murugan in the most mythologized retellings',
    rulers: 'A long unverifiable list of Pandyan kings given only in later commentary',
    texts: ['Agastyam (no longer extant, known only by reputation)'],
    laterCommentary: 'Nakkirar\'s medieval commentary on Iraiyanar Akapporul is the primary source for this narrative; it was written many centuries after the events it describes.',
    historicallyEstablished: 'No text from the "First Sangam" survives, and no independent historical or archaeological record confirms its existence, location, or submergence. Historians treat it as a foundational literary legend.',
    evidenceClassification: 'literary tradition only',
  },
  {
    id: 'sangam-2',
    name: 'Second Sangam (Idai Sangam)',
    location: "'Kapatapuram', also said in legend to have been lost to the sea",
    patron: 'Legendary Pandyan kings, successors to the first Sangam patrons',
    status: 'legendary_tradition',
    associatedWith: ['Kumari Kandam legend', 'Tolkappiyam (partially attributed to this era by tradition)'],
    duration: 'Traditionally said to span roughly 3,700 years in maximalist retellings',
    poets: 'Legendary figures including the sage Tolkappiyar in some tellings',
    rulers: 'A further unverifiable Pandyan king-list from commentary',
    texts: ['Tolkappiyam is sometimes traditionally linked here, though its actual composition is dated by scholars to a later, more historical period'],
    laterCommentary: "Again sourced almost entirely from Nakkirar's commentary, itself written thousands of years after the claimed events.",
    historicallyEstablished: 'No surviving text is reliably dated to this "academy," and no submerged city called Kapatapuram has ever been located archaeologically. It remains an unverified tradition.',
    evidenceClassification: 'literary tradition only',
  },
  {
    id: 'sangam-3',
    name: 'Third Sangam (Kadai Sangam)',
    location: 'Madurai (present-day Madurai, Tamil Nadu — not submerged)',
    patron: 'Historical Pandyan kings of the early historic period',
    status: 'well_attested_literature',
    associatedWith: ['Surviving Sangam corpus: Ettuthokai (Eight Anthologies) and Pathuppattu (Ten Idylls)', 'Tolkappiyam (grammar)'],
    duration: 'Corresponds broadly to the historical "Sangam period" of Tamil literature, roughly 3rd century BCE to 3rd century CE, per modern philological dating',
    poets: 'Hundreds of named poets whose works survive, including Kapilar, Paranar, Avvaiyar, and many others',
    rulers: 'Historically attested Pandyan, Chola, and Chera rulers named within the poems themselves, some cross-checked against inscriptions and foreign accounts (e.g., Greco-Roman trade records)',
    texts: ['Tolkappiyam', 'Kalithokai', 'Purananuru', 'Akananuru', 'Pattinappalai', 'Silappatikaram (slightly later, post-Sangam)'],
    laterCommentary: 'Extensively edited and published from palm-leaf manuscripts by scholars such as U.V. Swaminatha Iyer starting in the 1880s, which is how this literature reached the modern era at all.',
    historicallyEstablished: 'This is the only one of the three "Sangams" corresponding to literature that actually survives and can be dated, cross-referenced, and studied. Madurai as a real historical city is not disputed.',
    evidenceClassification: 'partly corroborated',
  },
];
