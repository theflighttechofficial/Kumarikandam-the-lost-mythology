export interface ExpeditionLogEntry {
  id: string;
  expeditionNumber: string;
  location: string;
  mission: string;
  observation: string;
  evidence: string;
  status: 'inconclusive' | 'partially_confirmed' | 'no_evidence_found' | 'ongoing';
  conclusion: string;
}

export const EXPEDITION_LOG_BANNER =
  'SIMULATED RESEARCH EXPEDITION — fictional illustrative content, not a real archaeological record.';

export const EXPEDITION_LOG: ExpeditionLogEntry[] = [
  {
    id: 'exp-01',
    expeditionNumber: 'Log 01',
    location: 'Gulf of Mannar Shelf, off Kanyakumari',
    mission: 'Bathymetric survey to test whether the shallow shelf shows signs of a much larger submerged landmass beyond the known Ice Age shelf extent.',
    observation: 'Shelf depth increases sharply beyond ~30 km offshore, dropping into deep basin consistent with known continental slope geometry.',
    evidence: 'Sonar bathymetry profile matches published shelf/slope boundary data; no anomalous shallow platform detected further south.',
    status: 'no_evidence_found',
    conclusion: 'No direct evidence establishing a continent-sized structure beyond the already-documented Ice Age shelf.',
  },
  {
    id: 'exp-02',
    expeditionNumber: 'Log 02',
    location: 'Offshore Poompuhar, Coromandel Coast',
    mission: 'Re-survey previously reported submerged structures to assess extent and possible function.',
    observation: 'Several linear brick-like features and scattered ceramic fragments observed in shallow water, consistent with earlier NIO reports.',
    evidence: 'Photographic and sonar documentation; samples referred for independent dating.',
    status: 'partially_confirmed',
    conclusion: 'Confirms the presence of submerged structures of likely human origin at town scale; does not establish any connection to a larger sunken continent.',
  },
  {
    id: 'exp-03',
    expeditionNumber: 'Log 03',
    location: 'Wadge Bank, south of Kanyakumari',
    mission: 'Assess whether elevated bank topography could represent the remains of a drowned inhabited landmass.',
    observation: 'Bank surface consists of relict coral and carbonate sediment typical of a drowned reef platform; no artificial structures detected.',
    evidence: 'Sediment core samples and side-scan sonar imagery.',
    status: 'no_evidence_found',
    conclusion: 'Consistent with natural reef/shelf drowning during post-glacial sea-level rise; no evidence of habitation or engineered structures.',
  },
  {
    id: 'exp-04',
    expeditionNumber: 'Log 04',
    location: 'Adam\'s Bridge shoal chain',
    mission: 'Sample sediment composition along the shoal chain to test claims of artificial construction.',
    observation: 'Sediment cores show calcareous sand and coral debris layered in a pattern consistent with natural marine deposition.',
    evidence: 'Core stratigraphy and grain-size analysis.',
    status: 'no_evidence_found',
    conclusion: 'No direct evidence of artificial construction; findings are consistent with a natural shoal system built on a relict land-bridge platform.',
  },
  {
    id: 'exp-05',
    expeditionNumber: 'Log 05',
    location: 'Central Indian Basin',
    mission: 'Test seafloor crust composition against claims of a sunken continent spanning toward Madagascar.',
    observation: 'Dredge samples recovered basaltic oceanic crust, not granitic continental rock.',
    evidence: 'Petrological analysis of dredged rock samples.',
    status: 'no_evidence_found',
    conclusion: 'No direct evidence establishing a continent-sized structure; crust composition is consistent with ordinary oceanic basin, not a sunken continent.',
  },
  {
    id: 'exp-06',
    expeditionNumber: 'Log 06',
    location: 'Mascarene Plateau, near Mauritius',
    mission: 'Collect volcanic rock samples to further characterize the Mauritia microcontinent fragment.',
    observation: 'Zircon grains recovered are consistent with previously published Precambrian ages.',
    evidence: 'Zircon U-Pb dating.',
    status: 'partially_confirmed',
    conclusion: 'Confirms the presence of ancient continental crust fragments beneath the plateau; provides no evidence of any associated human history or civilization.',
  },
  {
    id: 'exp-07',
    expeditionNumber: 'Log 07',
    location: 'Palk Strait paleochannel',
    mission: 'Map the buried river channel system beneath the strait to test correspondence with the legendary Pahruli River.',
    observation: 'A buried paleochannel system is detected consistent with a former river network active during low sea-level stands.',
    evidence: 'Sub-bottom profiler data and shallow core samples.',
    status: 'inconclusive',
    conclusion: 'A real drowned river system exists in the area, offering a plausible (though unproven) geological echo of the river traditions in Sangam poetry; this does not confirm the literary account\'s specific details.',
  },
  {
    id: 'exp-08',
    expeditionNumber: 'Log 08',
    location: 'Comorin Ridge seamount chain',
    mission: 'Determine the age and origin of the seamount chain south of Kanyakumari.',
    observation: 'Volcanic rock samples show ages in the tens of millions of years, consistent with hotspot-track volcanism.',
    evidence: 'Radiometric dating of dredged basalt.',
    status: 'no_evidence_found',
    conclusion: 'No direct evidence establishing a continent-sized structure; the ridge is a volcanic hotspot track, unrelated in age or origin to any human settlement.',
  },
  {
    id: 'exp-09',
    expeditionNumber: 'Log 09',
    location: 'Laccadive-Chagos Ridge',
    mission: 'Survey for any anomalous continental-type crust that might support extended "Kumari Kandam" claims.',
    observation: 'Crustal profile is consistent with a volcanic ridge formed over the Réunion hotspot track.',
    evidence: 'Seismic refraction survey.',
    status: 'ongoing',
    conclusion: 'Preliminary results show no continental-type crust; further survey legs are planned before a final assessment.',
  },
];
