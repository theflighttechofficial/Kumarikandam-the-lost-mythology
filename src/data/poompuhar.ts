export interface PoompuharColumnItem {
  point: string;
  detail: string;
}

export interface PoompuharData {
  name: string;
  alternativeNames: string[];
  region: string;
  significance: string[];
  themes: string[];
  literature: PoompuharColumnItem[];
  archaeology: PoompuharColumnItem[];
  geology: PoompuharColumnItem[];
  speculation: PoompuharColumnItem[];
}

export const POOMPUHAR: PoompuharData = {
  name: 'Poompuhar',
  alternativeNames: ['Kaveripattinam', 'Kaveripoompattinam', 'Puhar'],
  region: 'Mouth of the Kaveri River, Coromandel Coast, Tamil Nadu, India',
  significance: [
    'Capital port of the early Chola kingdom described in Sangam and post-Sangam literature.',
    'Setting of major episodes in the epic Silappatikaram and the Buddhist epic Manimekalai.',
    'Site of documented marine and coastal archaeological excavation since the 1960s.',
  ],
  themes: ['maritime trade', 'coastal submergence', 'Sangam-era urbanism', 'literary memory of disaster'],
  literature: [
    { point: 'Silappatikaram', detail: 'Describes Poompuhar as a magnificent Chola port with a lighthouse, marketplaces, and a beachfront festival quarter.' },
    { point: 'Manimekalai', detail: 'Recounts that the sea "took back" the city after the annual Indra festival was neglected — a moralized flood narrative.' },
    { point: 'Literary function', detail: 'Both texts use the submergence as a narrative and moral device as much as a historical report; classical Tamil poetry often frames coastal loss as divine consequence.' },
  ],
  archaeology: [
    { point: 'Onshore excavations', detail: 'Brick structures, a wharf-like platform, ring wells, and Roman/Mediterranean amphora sherds have been excavated at Poompuhar since the 1960s (Archaeological Survey of India).' },
    { point: 'Offshore surveys', detail: 'The National Institute of Oceanography (NIO) has surveyed submerged structures a short distance offshore, interpreted as remains of an older shoreline settlement or wharf.' },
    { point: 'Dating uncertainty', detail: 'Precise dating and functional interpretation of the submerged features remain debated among archaeologists; not all reported structures are confirmed as man-made.' },
  ],
  geology: [
    { point: 'Coastal dynamics', detail: 'The Kaveri delta coastline is geologically active, shaped by river sediment deposition, longshore drift, and periodic storm/cyclone erosion.' },
    { point: 'Sea-level context', detail: 'Regional sea level has been broadly close to modern levels for the last ~2,000–3,000 years, so submergence here is best explained by local coastal erosion, subsidence, and storm surges rather than a large-scale sea-level event.' },
    { point: 'No continent-scale evidence', detail: 'Nothing in the regional geology indicates the loss of a large landmass — the evidence supports the loss of a coastal town-scale settlement over time.' },
  ],
  speculation: [
    { point: 'Popular claims', detail: 'Some popular accounts present Poompuhar as direct physical proof of Kumari Kandam or a "sunken continent." This goes well beyond what the archaeological and geological evidence supports.' },
    { point: 'What is NOT established', detail: 'There is no confirmed evidence of a continent-sized landmass, nor of the specific Sangam-era institutions (First/Second Sangam) being physically located at the excavated offshore features.' },
    { point: 'Fair framing', detail: 'Poompuhar is best understood as a real, partly-submerged ancient port town — genuinely significant, but a town-scale case of coastal change, not confirmation of the maximalist continental myth.' },
  ],
};
