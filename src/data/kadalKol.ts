export interface KadalKolEntry {
  id: string;
  term: string;
  tamil: string;
  meaning: string;
  context: string;
  associatedWith?: string[];
  possibleCauses?: string[];
}

export const KADAL_KOL: KadalKolEntry[] = [
  {
    id: 'kk-kadal-kol',
    term: 'Kadal Kol',
    tamil: 'கடல்கொள்',
    meaning: 'The sea\'s taking / the sea seizing (land)',
    context: 'A recurring phrase and motif in later Tamil literary and folk tradition describing the ocean encroaching on and claiming coastal land, used to explain the loss of the legendary first two Sangam lands.',
    associatedWith: ['Kumari Kandam legend', 'Then Madurai submergence narrative'],
    possibleCauses: ['Post-glacial sea-level rise (real, gradual, over millennia)', 'Coastal erosion and monsoon flooding (real, localized)', 'Storm surge / cyclone events (real, episodic)', 'Catastrophic single deluge (legendary framing, not geologically attested)'],
  },
  {
    id: 'kk-kumari-river',
    term: 'Kumari River (Pahruli/Kumari)',
    tamil: 'குமரி நதி',
    meaning: 'The Kumari (or Pahruli) river, said to have flowed through the lost southern lands',
    context: 'Referenced in Nakkirar\'s commentary as one of the geographical features of the submerged Sangam-era lands, alongside 49 lost territories (nadus).',
    associatedWith: ['49 Nadus tradition', 'Then Madurai'],
    possibleCauses: ['May reflect folk memory of a real paleo-river system on the now-submerged continental shelf south of Kanyakumari, though this is speculative and unverified.'],
  },
  {
    id: 'kk-49-nadus',
    term: 'Ezhilnadu / 49 Nadus',
    tamil: 'நாற்பத்தொன்பது நாடுகள்',
    meaning: 'The forty-nine territorial divisions said to have made up the lost lands',
    context: 'A detailed list appearing in the commentary tradition, naming specific regions such as fertile groves, hill country, and river deltas — presented with geographic specificity despite no independent corroboration.',
    associatedWith: ['Kumari Kandam legend'],
    possibleCauses: ['Likely a literary/mnemonic device systematizing the legend rather than a surveyed historical record.'],
  },
  {
    id: 'kk-deluge-motif',
    term: 'Great Deluge (Pralayam parallel)',
    tamil: 'பிரளயம்',
    meaning: 'Flood/deluge, a motif shared with wider South Asian and global flood traditions',
    context: 'The Kumari Kandam submergence narrative echoes broader South Asian Pralaya (cosmic deluge) mythology, suggesting a shared narrative pattern rather than a uniquely Tamil geological record.',
    associatedWith: ['Comparative mythology of flood narratives worldwide'],
    possibleCauses: ['Cultural memory of real post-glacial flooding events combined with a widespread mythological flood archetype.'],
  },
  {
    id: 'kk-marutham-loss',
    term: 'Loss of Marutham (riverine plain) Thinai lands',
    tamil: 'மருதம் நிலம் இழப்பு',
    meaning: 'Legendary loss of fertile riverine plains to the sea',
    context: 'Later folk retellings sometimes specifically describe fertile agricultural plains (matching the Marutham thinai ecological type) among the submerged lands, blending literary ecology with the deluge legend.',
    associatedWith: ['Thinai ecological framework'],
    possibleCauses: ['Literary elaboration mapping the five Thinai landscape types onto the lost-land narrative for completeness.'],
  },
  {
    id: 'kk-kanyakumari-coastline',
    term: 'Kanyakumari coastline shift',
    tamil: 'கன்னியாகுமரி கடற்கரை',
    meaning: 'Observed historical retreat/advance of the coastline near Kanyakumari',
    context: 'Local tradition and some 19th–20th century colonial surveys note modest coastal changes near Cape Comorin, which have sometimes been cited (disproportionately) as "proof" of the Kumari Kandam legend.',
    associatedWith: ['Colonial-era coastal surveys'],
    possibleCauses: ['Normal monsoon-driven erosion/accretion cycles', 'Minor post-glacial submergence of the continental shelf edge'],
  },
];
