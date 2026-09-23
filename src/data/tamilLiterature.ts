export interface TamilLiteratureWork {
  id: string;
  title: string;
  type: 'grammar' | 'epic' | 'anthology' | 'poetics treatise';
  language?: string;
  relevance: string[];
  period?: string;
  evidenceLevel: 'primary historical source' | 'later commentary/tradition' | 'post-Sangam classical work';
}

export const TAMIL_LITERATURE: TamilLiteratureWork[] = [
  {
    id: 'tl-tolkappiyam',
    title: 'Tolkappiyam',
    type: 'grammar',
    language: 'Old Tamil',
    relevance: ['Oldest extant Tamil grammar', 'Defines the Thinai (ecological-emotional landscape) framework', 'Foundational to Sangam poetics'],
    period: 'Traditionally dated variously; scholarly consensus places core layers roughly 2nd century BCE – 5th century CE',
    evidenceLevel: 'primary historical source',
  },
  {
    id: 'tl-silappatikaram',
    title: 'Silappatikaram (The Tale of the Anklet)',
    type: 'epic',
    language: 'Old/Middle Tamil',
    relevance: ['One of the Five Great Epics of Tamil literature', 'Rich depiction of Chera, Chola, and Pandyan kingdoms', 'Contains references to coastal geography and sea-related motifs'],
    period: 'Composed roughly 5th–6th century CE, post-Sangam',
    evidenceLevel: 'post-Sangam classical work',
  },
  {
    id: 'tl-iraiyanar-akapporul',
    title: 'Iraiyanar Akapporul (and Nakkirar\'s commentary)',
    type: 'poetics treatise',
    language: 'Old/Middle Tamil',
    relevance: ['Primary literary source for the three-Sangam narrative', 'Treatise on akam (interior/love) poetics'],
    period: 'Treatise itself likely early medieval; the widely-cited commentary is attributed to a later period, roughly 8th–12th century CE',
    evidenceLevel: 'later commentary/tradition',
  },
  {
    id: 'tl-kalithokai',
    title: 'Kalithokai',
    type: 'anthology',
    language: 'Old Tamil',
    relevance: ['One of the Ettuthokai (Eight Anthologies)', 'Known for its kali meter and dramatic monologue style', 'Organized partly around the five Thinai landscapes'],
    period: 'Sangam period, roughly 1st–5th century CE (later than the earliest anthologies)',
    evidenceLevel: 'primary historical source',
  },
  {
    id: 'tl-manimekalai',
    title: 'Manimekalai',
    type: 'epic',
    language: 'Middle Tamil',
    relevance: ['Sequel to Silappatikaram', 'Buddhist philosophical themes', 'One of the Five Great Epics'],
    period: 'Composed roughly 6th century CE, post-Sangam',
    evidenceLevel: 'post-Sangam classical work',
  },
  {
    id: 'tl-purananuru',
    title: 'Purananuru (Four Hundred Poems on the Exterior)',
    type: 'anthology',
    language: 'Old Tamil',
    relevance: ['One of the Ettuthokai', 'Puram (public/heroic) poetry on war, kingship, and ethics', 'Key historical source for Sangam-era political geography'],
    period: 'Sangam period, roughly 1st century BCE – 3rd century CE',
    evidenceLevel: 'primary historical source',
  },
  {
    id: 'tl-akananuru',
    title: 'Akananuru (Four Hundred Poems on the Interior)',
    type: 'anthology',
    language: 'Old Tamil',
    relevance: ['One of the Ettuthokai', 'Akam (love/interior) poetry organized by the five Thinai', 'Rich ecological and emotional detail'],
    period: 'Sangam period, roughly 1st century BCE – 3rd century CE',
    evidenceLevel: 'primary historical source',
  },
  {
    id: 'tl-pattinappalai',
    title: 'Pattinappalai',
    type: 'anthology',
    language: 'Old Tamil',
    relevance: ['One of the Pathuppattu (Ten Idylls)', 'Detailed description of the Chola port city of Puhar/Kaveripattinam', 'Valuable for reconstructing Sangam-era maritime trade and coastal urban life'],
    period: 'Sangam period, roughly 2nd–3rd century CE',
    evidenceLevel: 'primary historical source',
  },
  {
    id: 'tl-paripadal',
    title: 'Paripadal',
    type: 'anthology',
    language: 'Old Tamil',
    relevance: ['One of the Ettuthokai', 'Devotional and descriptive poems, notably about the Vaigai river in Madurai', 'Later layer of the Sangam corpus, transitional toward bhakti literature'],
    period: 'Late Sangam period, roughly 3rd–5th century CE',
    evidenceLevel: 'primary historical source',
  },
];
