export interface EvidenceMatrixRow {
  name: string;
  literary: number;
  geological: number;
  archaeological: number;
  historical: number;
  note: string;
}

export const EVIDENCE_MATRIX: EvidenceMatrixRow[] = [
  {
    name: 'Kumari Kandam',
    literary: 5,
    geological: 1,
    archaeological: 1,
    historical: 2,
    note: 'Rich literary/textual tradition, but essentially no direct geological or archaeological support for a continent-scale landmass.',
  },
  {
    name: 'Lemuria (Sclater\'s hypothesis)',
    literary: 1,
    geological: 1,
    archaeological: 0,
    historical: 4,
    note: 'A well-documented 19th-century scientific hypothesis, historically important, but superseded by plate tectonics.',
  },
  {
    name: 'Mauritia (microcontinent)',
    literary: 0,
    geological: 5,
    archaeological: 0,
    historical: 3,
    note: 'Confirmed by zircon dating in peer-reviewed geology; a real but tiny, tens-of-millions-of-years-old fragment, not a civilization.',
  },
  {
    name: 'Doggerland',
    literary: 0,
    geological: 5,
    archaeological: 4,
    historical: 4,
    note: 'One of the best-evidenced submerged landscapes, combining seismic mapping, dredged artifacts, and DNA/environmental data.',
  },
  {
    name: 'Atlantis',
    literary: 4,
    geological: 0,
    archaeological: 0,
    historical: 3,
    note: 'Entirely a literary/philosophical source (Plato); no geological or archaeological corroboration of a sunken Atlantic civilization at the described scale.',
  },
  {
    name: 'Zealandia',
    literary: 0,
    geological: 5,
    archaeological: 1,
    historical: 3,
    note: 'A formally recognized real submerged continent, established through gravimetry, seismic, and drilling data.',
  },
  {
    name: 'Sundaland',
    literary: 1,
    geological: 5,
    archaeological: 3,
    historical: 3,
    note: 'Well-documented Ice Age shelf exposure, studied through bathymetry, genetics, and archaeology of regional migration.',
  },
];

export const EVIDENCE_MATRIX_DIMENSIONS: Array<{ key: keyof Pick<EvidenceMatrixRow, 'literary' | 'geological' | 'archaeological' | 'historical'>; label: string }> = [
  { key: 'literary', label: 'Literary' },
  { key: 'geological', label: 'Geological' },
  { key: 'archaeological', label: 'Archaeological' },
  { key: 'historical', label: 'Historical' },
];
