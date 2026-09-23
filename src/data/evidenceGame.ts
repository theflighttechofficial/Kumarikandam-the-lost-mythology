export type EvidenceCategory = 'Literary' | 'Archaeological' | 'Geological' | 'Linguistic';

export interface EvidenceGamePrompt {
  id: string;
  prompt: string;
  correctCategory: EvidenceCategory;
  explanation: string;
}

export const EVIDENCE_GAME_PROMPTS: EvidenceGamePrompt[] = [
  {
    id: 'eg-1',
    prompt: 'A 12th-century commentary on Iraiyanar Akapporul describes the chronology and kings of three successive Tamil Sangams.',
    correctCategory: 'Literary',
    explanation: 'This is a textual/commentarial source — evidence from written literature, not from physical remains or land forms.',
  },
  {
    id: 'eg-2',
    prompt: 'Brick structures and ring wells found offshore near Poompuhar, surveyed by marine archaeologists.',
    correctCategory: 'Archaeological',
    explanation: 'Physical excavated structures are archaeological evidence, distinct from literary description or geological dating.',
  },
  {
    id: 'eg-3',
    prompt: 'Zircon crystals dated to 1.9–3.0 billion years found in volcanic rock beneath Mauritius.',
    correctCategory: 'Geological',
    explanation: 'Mineral dating of rock samples is geological evidence about the age and origin of crust.',
  },
  {
    id: 'eg-4',
    prompt: 'Cognate vocabulary shared between Dravidian languages used to argue for a common ancient homeland.',
    correctCategory: 'Linguistic',
    explanation: 'Comparative vocabulary and grammar analysis across related languages is linguistic evidence.',
  },
  {
    id: 'eg-5',
    prompt: 'Seismic reflection surveys mapping the depth and composition of oceanic crust in the Central Indian Basin.',
    correctCategory: 'Geological',
    explanation: 'Seismic survey data characterizing crust type and structure is geological/geophysical evidence.',
  },
  {
    id: 'eg-6',
    prompt: 'The Manimekalai epic\'s account of a sea-surge that drowned Poompuhar after a festival was neglected.',
    correctCategory: 'Literary',
    explanation: 'A narrative episode from a classical epic poem is literary evidence, valuable for cultural memory but not physical proof.',
  },
  {
    id: 'eg-7',
    prompt: 'Radiocarbon-dated organic remains recovered from a submerged forest in the North Sea (Doggerland).',
    correctCategory: 'Archaeological',
    explanation: 'Dated organic/cultural remains recovered from excavation or dredging count as archaeological evidence.',
  },
  {
    id: 'eg-8',
    prompt: 'Paleomagnetic data showing the drift path of the Indian tectonic plate over the last 90 million years.',
    correctCategory: 'Geological',
    explanation: 'Paleomagnetic reconstruction is a core geological/geophysical technique for tracking plate motion.',
  },
  {
    id: 'eg-9',
    prompt: 'A reconstructed proto-Dravidian root word for "sea" compared across Tamil, Telugu, and Kannada.',
    correctCategory: 'Linguistic',
    explanation: 'Reconstructing proto-language vocabulary is a linguistic method, used cautiously to infer cultural history.',
  },
  {
    id: 'eg-10',
    prompt: 'Roman amphora fragments recovered during excavation at the Poompuhar site.',
    correctCategory: 'Archaeological',
    explanation: 'Excavated trade-good artifacts are physical archaeological evidence of contact and chronology.',
  },
  {
    id: 'eg-11',
    prompt: 'Kalittokai\'s reference to the Pandyan kings conquering new lands after the sea took their southern territory.',
    correctCategory: 'Literary',
    explanation: 'A verse from a Sangam anthology is a literary/poetic reference, not a geological record.',
  },
  {
    id: 'eg-12',
    prompt: 'Bathymetric mapping showing the depth profile of the Gulf of Mannar shelf.',
    correctCategory: 'Geological',
    explanation: 'Bathymetric survey data is a geological/oceanographic measurement of seafloor depth and shape.',
  },
];
