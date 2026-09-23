export interface MarineArchMethod {
  id: string;
  name: string;
  description: string;
  category: 'survey' | 'excavation' | 'dating' | 'analysis';
}

export interface MarineArchEntry {
  id: string;
  name: string;
  type: 'submerged_settlement' | 'ancient_harbour' | 'shipwreck' | 'paleo_shoreline' | 'submerged_structure';
  location: string;
  depth: string;
  description: string;
  evidentiaryStatus: string;
}

export const MARINE_ARCH_METHODS: MarineArchMethod[] = [
  { id: 'mam-01', name: 'Underwater Excavation', description: 'Controlled removal and recording of submerged sediment layers by divers or remote tools to recover artifacts in context.', category: 'excavation' },
  { id: 'mam-02', name: 'Sonar Mapping', description: 'Sound-wave based mapping of the seafloor to detect anomalies such as structures, mounds, or wreck outlines.', category: 'survey' },
  { id: 'mam-03', name: 'Bathymetric Surveys', description: 'Systematic measurement of underwater depth to produce detailed seafloor topography maps.', category: 'survey' },
  { id: 'mam-04', name: 'ROV Exploration', description: 'Remotely operated vehicles equipped with cameras and sensors used to inspect sites too deep or hazardous for divers.', category: 'survey' },
  { id: 'mam-05', name: 'Marine Sediment Cores', description: 'Cylindrical samples drilled from the seafloor, preserving layered records of past environments.', category: 'analysis' },
  { id: 'mam-06', name: 'Radiocarbon Dating', description: 'Measures decay of carbon-14 in organic remains to date material up to ~50,000 years old.', category: 'dating' },
  { id: 'mam-07', name: 'OSL Dating', description: 'Optically Stimulated Luminescence dates when quartz/feldspar grains were last exposed to sunlight, useful for sediment burial ages.', category: 'dating' },
  { id: 'mam-08', name: 'Paleoenvironmental Reconstruction', description: 'Combines pollen, microfossils, and sediment chemistry to reconstruct past coastlines, climate, and vegetation.', category: 'analysis' },
];

export const MARINE_ARCH_ENTRIES: MarineArchEntry[] = [
  { id: 'mae-01', name: 'Poompuhar Offshore Structures', type: 'submerged_structure', location: 'Off Poompuhar, Tamil Nadu coast', depth: '~5-23m', description: 'Sonar and diving surveys by NIO recorded brick-like formations and scattered structural remains off the Kaveri delta.', evidentiaryStatus: 'Confirmed submerged features exist; interpretation as a large ancient port city is debated among archaeologists.' },
  { id: 'mae-02', name: 'Dwarka Offshore Site', type: 'submerged_settlement', location: 'Gulf of Khambhat / Dwarka, Gujarat', depth: '~20-40m', description: 'Underwater surveys reported stone alignments and pottery scatter near the Gujarat coast.', evidentiaryStatus: 'Site is real; dating and cultural attribution remain contested in peer-reviewed literature.' },
  { id: 'mae-03', name: 'Mahabalipuram Nearshore Remains', type: 'submerged_structure', location: 'Mahabalipuram, Tamil Nadu', depth: '~5-8m', description: 'Shallow-water surveys near the shore temple identified scattered masonry blocks.', evidentiaryStatus: 'Well documented; consistent with coastal erosion of historically-known structures, not evidence of a lost continent.' },
  { id: 'mae-04', name: 'Sunda Shelf Paleo-shoreline', type: 'paleo_shoreline', location: 'Sunda Shelf, Southeast Asia', depth: 'Now ~-40 to -120m relative to present sea level', description: 'Bathymetric and sediment-core evidence traces the exposed shelf during glacial sea-level lowstands.', evidentiaryStatus: 'Well-established in peer-reviewed paleogeography; illustrates real, regional (not continental-scale) land exposure.' },
  { id: 'mae-05', name: 'Bay of Bengal Paleo-river Channels', type: 'paleo_shoreline', location: 'Continental shelf, Bay of Bengal', depth: '-40 to -100m', description: 'Seismic and bathymetric surveys reveal buried river channels from lower sea-level periods.', evidentiaryStatus: 'Consistent with known Pleistocene sea-level change; not evidence of a sunken continent.' },
  { id: 'mae-06', name: 'Generic Ancient Harbour Model (Poompuhar/Kaveripattinam)', type: 'ancient_harbour', location: 'Kaveri river mouth, Tamil Nadu', depth: 'Partly onshore, partly submerged', description: 'Literary and limited archaeological evidence suggests a Sangam-era port town partially lost to coastal processes.', evidentiaryStatus: 'Plausible coastal port with erosion/subsidence; not evidence of continental-scale submergence.' },
];
