export interface Claim {
  id: string;
  claim: string;
  category: 'literary' | 'geological' | 'historiographical' | 'popular' | 'linguistic';
  status: 'established' | 'contested' | 'unsupported' | 'legendary_tradition';
  evidenceType: string[];
  confidence: 'high' | 'moderate' | 'low' | 'none';
  description?: string;
}

export const CLAIMS: Claim[] = [
  {
    id: 'claim-sangam-existed',
    claim: 'Tamil literary tradition describes three successive Sangams (academies) patronized by Pandyan kings.',
    category: 'literary',
    status: 'legendary_tradition',
    evidenceType: ['medieval commentary', 'Iraiyanar Akapporul preface'],
    confidence: 'moderate',
    description: 'The existence of Sangam-era poetry (the Ettuthokai/Pathuppattu corpus) is well established; the framing narrative of three formal royal "academies" comes chiefly from a 12th-century commentary and is treated by historians as tradition rather than documented institutional history.',
  },
  {
    id: 'claim-first-second-sangam-submerged',
    claim: 'The first two Sangam academies were located in lands later swallowed by the sea.',
    category: 'literary',
    status: 'legendary_tradition',
    evidenceType: ['Nakkirar commentary on Iraiyanar Akapporul', 'oral tradition'],
    confidence: 'low',
    description: 'This is a medieval literary/legendary claim, not a historical or geological record. No surviving Sangam-era text itself makes this claim in the form later popularized.',
  },
  {
    id: 'claim-kumari-kandam-continent',
    claim: 'Kumari Kandam was a vast continent stretching from India to Antarctica/Madagascar that sank in a catastrophic deluge.',
    category: 'popular',
    status: 'unsupported',
    evidenceType: ['19th–20th century Tamil revivalist writing', 'popular press'],
    confidence: 'none',
    description: 'This maximalist "lost continent" version has no support in plate tectonics, marine geology, or the primary Sangam texts. It is a 19th/20th-century elaboration that fused Tamil tradition with Sclater\'s unrelated "Lemuria" biogeographic hypothesis.',
  },
  {
    id: 'claim-lemuria-biogeography',
    claim: 'Philip Sclater proposed "Lemuria" as a hypothetical land bridge to explain lemur fossil distribution.',
    category: 'historiographical',
    status: 'established',
    evidenceType: ['Sclater 1864 paper, The Mammals of Madagascar'],
    confidence: 'high',
    description: 'Well documented in the history of science. Sclater\'s Lemuria was a pre-plate-tectonics biogeographic device, not a claim about a sunken Tamil homeland.',
  },
  {
    id: 'claim-mauritia-microcontinent',
    claim: 'A submerged microcontinent called Mauritia exists beneath Mauritius and the Mascarene Plateau.',
    category: 'geological',
    status: 'established',
    evidenceType: ['zircon dating (Torsvik et al. 2013)', 'gravity anomaly mapping', 'seismic data'],
    confidence: 'high',
    description: 'Confirmed by peer-reviewed geology. Mauritia is a small (~microcontinent, not vast) Precambrian fragment left behind during the breakup of Gondwana/Madagascar-India rifting, roughly 60-83 million years ago.',
  },
  {
    id: 'claim-mauritia-equals-kumari-kandam',
    claim: 'The Mauritia microcontinent proves that Kumari Kandam existed as described in popular literature.',
    category: 'popular',
    status: 'unsupported',
    evidenceType: ['conflation in popular media'],
    confidence: 'none',
    description: 'Mauritia submerged roughly 60+ million years before anatomically modern humans existed, let alone Tamil-speaking civilization. It cannot be the homeland described in Sangam-era or revivalist literature.',
  },
  {
    id: 'claim-tolkappiyam-antiquity',
    claim: 'Tolkappiyam is the oldest extant Tamil grammar, reflecting a long pre-existing poetic tradition.',
    category: 'literary',
    status: 'established',
    evidenceType: ['manuscript tradition', 'internal linguistic analysis', 'scholarly consensus'],
    confidence: 'high',
  },
  {
    id: 'claim-kadal-kol-coastal-erosion',
    claim: 'References to "Kadal Kol" (the sea\'s taking) in Tamil tradition reflect real coastal erosion/submergence events near Kanyakumari and the Gulf of Mannar.',
    category: 'geological',
    status: 'contested',
    evidenceType: ['sea-level curve reconstructions', 'oral tradition', 'coastal geomorphology'],
    confidence: 'moderate',
    description: 'Post-glacial sea-level rise (roughly 120m since the Last Glacial Maximum, ~20,000 years ago) did submerge coastal land worldwide, including likely areas south of present-day Kanyakumari. This is plausible and modest, not evidence for a giant lost continent.',
  },
  {
    id: 'claim-gondwana-breakup',
    claim: 'India, Madagascar, and other landmasses were once joined in the supercontinent Gondwana.',
    category: 'geological',
    status: 'established',
    evidenceType: ['paleomagnetic data', 'matching rock strata', 'fossil distribution', 'plate reconstruction models'],
    confidence: 'high',
  },
  {
    id: 'claim-devaneya-pavanar-continent',
    claim: 'Devaneya Pavanar and other Tamil revivalists asserted Kumari Kandam as literal, dateable pre-history spanning tens of thousands of years.',
    category: 'historiographical',
    status: 'unsupported',
    evidenceType: ['revivalist tracts, early-to-mid 20th century'],
    confidence: 'low',
    description: 'These are ideologically motivated historical claims from the Tamil revival movement, valuable as intellectual history but not supported by archaeological or geological evidence.',
  },
  {
    id: 'claim-thinai-ecological-realism',
    claim: 'The five Thinai (ecological/emotional landscapes) of Sangam poetry reflect accurate observation of real South Indian ecosystems.',
    category: 'literary',
    status: 'established',
    evidenceType: ['botanical and zoological cross-references in poems', 'modern literary-ecological scholarship'],
    confidence: 'high',
  },
  {
    id: 'claim-kanyakumari-submergence-scale',
    claim: 'Any land lost off the southern Tamil coast was continental in scale (thousands of km).',
    category: 'popular',
    status: 'unsupported',
    evidenceType: ['bathymetric survey of Gulf of Mannar/Palk Strait'],
    confidence: 'none',
    description: 'Bathymetry shows a narrow continental shelf south of India; there is no submerged landmass of continental scale in the region.',
  },
];
