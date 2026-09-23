export interface ArchaeologyMethodDetail {
  id: string;
  name: string;
  icon: 'radiocarbon' | 'sonar' | 'cores' | 'subbottom' | 'rov';
  summary: string;
  fields: { label: string; value: string }[];
}

export const ARCHAEOLOGY_METHODS: ArchaeologyMethodDetail[] = [
  {
    id: 'method-radiocarbon',
    name: 'Radiocarbon Dating',
    icon: 'radiocarbon',
    summary: 'Dates organic material by measuring the decay of carbon-14 isotopes.',
    fields: [
      { label: 'What It Measures', value: 'Ratio of carbon-14 to carbon-12 remaining in once-living organic material.' },
      { label: 'Typical Materials', value: 'Charcoal, wood, shell, bone, peat, textile fibers.' },
      { label: 'Age Limitations', value: 'Reliable up to roughly 50,000 years; not useable on inorganic materials like rock or plain sediment.' },
      { label: 'Calibration', value: 'Raw dates are calibrated against tree-ring and other independently dated records to produce calendar-year estimates.' },
      { label: 'Sources of Error', value: 'Contamination, reservoir effects in marine samples, and sample handling can skew results.' },
    ],
  },
  {
    id: 'method-sonar',
    name: 'Sonar Survey',
    icon: 'sonar',
    summary: 'Uses sound-wave reflection to image the seafloor and submerged features.',
    fields: [
      { label: 'What It Detects', value: 'Seafloor topography, buried or exposed structures, wrecks, and sediment anomalies.' },
      { label: 'Side-Scan Sonar', value: 'Produces wide swaths of seafloor imagery, useful for locating discrete objects like wrecks.' },
      { label: 'Multibeam Sonar', value: 'Produces precise 3D bathymetric models over broad areas, used for regional seafloor mapping.' },
    ],
  },
  {
    id: 'method-cores',
    name: 'Sediment Cores',
    icon: 'cores',
    summary: 'Cylindrical samples drilled from the seabed or lakebed preserve layered environmental history.',
    fields: [
      { label: 'Layers', value: 'Each layer (stratum) represents a deposition period; sequence gives relative chronology.' },
      { label: 'Microfossils', value: 'Foraminifera, diatoms, and ostracods indicate past water depth, salinity, and temperature.' },
      { label: 'Pollen', value: 'Preserved pollen grains reveal past vegetation and climate on nearby land.' },
      { label: 'Geochemistry', value: 'Isotope and elemental ratios in sediment layers reconstruct past sea level and climate conditions.' },
    ],
  },
  {
    id: 'method-subbottom',
    name: 'Sub-bottom Profiling',
    icon: 'subbottom',
    summary: 'Uses low-frequency acoustic pulses to image sediment layers beneath the seafloor surface.',
    fields: [
      { label: 'What It Reveals', value: 'Buried channels, paleo-shorelines, and stratigraphy hidden beneath the modern seabed.' },
      { label: 'Typical Use', value: 'Locating buried structures or paleo-landscapes prior to excavation or coring.' },
    ],
  },
  {
    id: 'method-rov',
    name: 'ROV Exploration',
    icon: 'rov',
    summary: 'Remotely Operated Vehicles carry cameras and sensors to depths unsafe or impractical for divers.',
    fields: [
      { label: 'Capabilities', value: 'High-resolution video, manipulator arms for sample recovery, sonar and laser-scanning payloads.' },
      { label: 'Typical Use', value: 'Deep-water wreck inspection, structure verification, and precision sample collection.' },
    ],
  },
];
