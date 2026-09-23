export interface EvidenceDimension {
  key: string;
  label: string;
}

export const EXPECTED_EVIDENCE_DIMENSIONS: EvidenceDimension[] = [
  { key: 'continentalCrust', label: 'Continental Crust' },
  { key: 'ancientRocks', label: 'Ancient Continental Rocks' },
  { key: 'sedimentarySequences', label: 'Terrestrial Sedimentary Sequences' },
  { key: 'terrestrialFossils', label: 'Terrestrial Fossils' },
  { key: 'humanArchaeology', label: 'Human Archaeology' },
  { key: 'seismicSignature', label: 'Continental Seismic Signature' },
];

export interface Hypothesis {
  id: string;
  name: string;
  description: string;
  expected: Record<string, number>; // 1-5 intensity expected under this hypothesis
}

export const HYPOTHESES: Hypothesis[] = [
  {
    id: 'giant-continent',
    name: 'Giant Continental Landmass (Kumari Kandam as literally described)',
    description: 'A large continent once spanned the Indian Ocean and sank entirely within human historical memory.',
    expected: { continentalCrust: 5, ancientRocks: 5, sedimentarySequences: 5, terrestrialFossils: 5, humanArchaeology: 5, seismicSignature: 5 },
  },
  {
    id: 'regional-coastal',
    name: 'Regional Coastal Change',
    description: 'Sea-level rise and coastal erosion submerged limited coastal settlements, not a continent.',
    expected: { continentalCrust: 1, ancientRocks: 1, sedimentarySequences: 2, terrestrialFossils: 1, humanArchaeology: 3, seismicSignature: 1 },
  },
  {
    id: 'literary-memory',
    name: 'Literary Memory Only',
    description: 'The narrative is a literary/cultural tradition with no requirement of a physical submerged landmass.',
    expected: { continentalCrust: 0, ancientRocks: 0, sedimentarySequences: 0, terrestrialFossils: 0, humanArchaeology: 0, seismicSignature: 0 },
  },
];

// What is actually observed today, on the same 0-5 intensity scale, for comparison.
export const ACTUAL_EVIDENCE: Record<string, number> = {
  continentalCrust: 1, // only isolated Mauritia fragment
  ancientRocks: 1,
  sedimentarySequences: 1,
  terrestrialFossils: 0,
  humanArchaeology: 2, // scattered contested coastal sites
  seismicSignature: 1,
};
