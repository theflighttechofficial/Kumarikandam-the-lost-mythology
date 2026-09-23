export interface ArgumentSide {
  position: string;
  evidence: string[];
  sources: string[];
  counterarguments: string[];
}

export interface ArgumentPair {
  id: string;
  question: string;
  argumentA: ArgumentSide;
  argumentB: ArgumentSide;
  unresolvedQuestions: string[];
}

export const ARGUMENT_PAIRS: ArgumentPair[] = [
  {
    id: 'ap-01',
    question: 'Was Kumari Kandam a literal continent?',
    argumentA: {
      position: 'Yes - it was a real, continent-scale landmass that sank.',
      evidence: ['Sangam-adjacent references to "Kadal Kol" (sea taking land)', 'Popular 20th-century Tamil revivalist reconstructions', 'Isolated submerged structures near Poompuhar'],
      sources: ['Kanda Puranam', 'G. Devaneya Pavanar writings', 'NIO Poompuhar survey reports'],
      counterarguments: ['No continental crust detected across most of the claimed area', 'No systematic archaeological or fossil evidence at continental scale', 'Tectonic rates cannot sink a continent within the claimed human timeframe'],
    },
    argumentB: {
      position: 'No - it reflects literary/cultural memory of coastal change, not a literal continent.',
      evidence: ['Regional sea-level rise since the last glacial maximum submerged real coastal land', 'Literary references are consistent with localized, not continental, loss', 'Modern geophysics shows oceanic, not continental, crust across most of the claimed footprint'],
      sources: ['Sumathi Ramaswamy, The Lost Land of Lemuria', 'Modern bathymetric and seismic surveys', 'Torsvik et al. on Mauritia (2013)'],
      counterarguments: ['Does not fully explain the vivid scale claimed in some literary retellings', 'Cannot rule out further as-yet-undiscovered submerged sites'],
    },
    unresolvedQuestions: ['Exactly how much land, if any, was actually lost to the sea along the Tamil coast in the relevant period?', 'How should the literary tradition be weighed as historical evidence versus cultural narrative?'],
  },
  {
    id: 'ap-02',
    question: 'Does Mauritia support the Kumari Kandam narrative?',
    argumentA: {
      position: 'Yes - it proves sunken continental fragments exist in the Indian Ocean, supporting the broader idea.',
      evidence: ['Ancient zircons of continental age found in Mauritius beach sand', 'Gravity data suggesting buried continental crust near Mauritius'],
      sources: ['Torsvik et al., Nature Geoscience 2013'],
      counterarguments: ['Mauritia is a small (~microcontinent-scale) fragment, not a giant landmass', 'It broke apart ~60-85 million years ago, far outside any human timeframe', 'It is located far from the specific claimed Kumari Kandam footprint near India'],
    },
    argumentB: {
      position: 'No - Mauritia is a tiny, ancient, unrelated geological fragment, not evidence for the Tamil narrative.',
      evidence: ['Scale mismatch: microcontinent vs. claimed giant continent', 'Timing mismatch: tens of millions of years vs. claimed human historical timescale', 'Location: centered near Mauritius, not the South Indian coast'],
      sources: ['Torsvik et al., Nature Geoscience 2013', 'Standard plate tectonic reconstructions of Gondwana breakup'],
      counterarguments: ['Some argue it still demonstrates that "lost land" claims in the region are not always baseless'],
    },
    unresolvedQuestions: ['Are there other undiscovered microcontinental fragments in the Indian Ocean, and would any be closer to the claimed Kumari Kandam location?'],
  },
  {
    id: 'ap-03',
    question: 'Is the Sangam chronology historically reliable?',
    argumentA: {
      position: 'Largely reliable as a literary corpus, though the "three academies" framework is legendary.',
      evidence: ['Sangam literature is internally consistent and stylistically datable', 'Corroborated in part by archaeology (e.g., Keezhadi) for the broader era'],
      sources: ['Tholkappiyam', 'Purananuru', 'Keezhadi Excavation Reports'],
      counterarguments: ['The specific "three Sangams with kings and sunken capitals" narrative appears only in much later commentary, not the core texts themselves'],
    },
    argumentB: {
      position: 'The traditional chronology (including sunken capitals) is a later elaboration, not historical fact.',
      evidence: ['The "three Sangams" legend first appears in medieval commentary (e.g., Iraiyanar Akapporul Urai), centuries after the core anthologies', 'No independent corroboration of kings or capitals lost to the sea'],
      sources: ['Iraiyanar Akapporul Urai (Nakkirar commentary)', 'Sumathi Ramaswamy scholarship'],
      counterarguments: ['Oral tradition may preserve genuine memory even without early textual attestation'],
    },
    unresolvedQuestions: ['How much of the "three Sangams" narrative reflects genuine oral memory versus later literary elaboration?'],
  },
];
