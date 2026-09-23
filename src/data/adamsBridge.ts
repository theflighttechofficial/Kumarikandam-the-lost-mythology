export interface AdamsBridgeData {
  name: string;
  tamilName: string;
  sanskritTradition: string;
  location: string;
  geologicalStructure: string;
  sedimentComposition: string;
  bathymetry: string;
  culturalSignificance: string;
  historicalDescriptions: string[];
  scientificInterpretations: string[];
  unresolvedQuestions: string[];
}

export const ADAMS_BRIDGE: AdamsBridgeData = {
  name: "Adam's Bridge",
  tamilName: 'இராமர் பாலம் (Ramar Palam) / சேது (Sethu)',
  sanskritTradition: 'Rama Setu, the bridge said in the Ramayana to have been built by Rama\'s vanara army to cross from India to Lanka to rescue Sita.',
  location: 'A ~48 km chain of limestone shoals and sandbanks between Pamban Island (Tamil Nadu, India) and Mannar Island (Sri Lanka), separating the Gulf of Mannar from the Palk Strait.',
  geologicalStructure: 'A discontinuous shoal chain of sand, coral fragments, and limestone, resting on a shallow (mostly under 10 m, locally near sea level) carbonate platform.',
  sedimentComposition: 'Predominantly calcareous sand and coral debris with some quartz sand, consistent with a shallow marine/reef-influenced depositional environment rather than a constructed causeway.',
  bathymetry: 'Very shallow throughout, generally 1–10 m deep, historically shallow enough that some sections were reportedly walkable or fordable until a cyclone deepened the channel in 1480 CE.',
  culturalSignificance: 'A site of deep religious significance in Hindu tradition as Rama Setu, and a long-referenced geographic feature in South Indian and Sri Lankan cultural memory, distinct from the separate Kumari Kandam tradition.',
  historicalDescriptions: [
    'Medieval Arab and European geographers and navigators noted the shoals as a hazard to shipping between India and Ceylon for centuries.',
    '9th–15th century Islamic geographers (e.g. Al-Biruni) referred to the feature and associated legends around it.',
    'British-era Admiralty charts mapped the shoal chain in detail for navigational purposes from the 19th century onward.',
  ],
  scientificInterpretations: [
    'Marine geologists generally interpret the formation as a natural sandbar/shoal system built by longshore sediment transport and reef growth across a shallow, ancient land connection.',
    'Studies of the region\'s geomorphology suggest the underlying platform may correspond to a remnant of the India–Sri Lanka land bridge exposed during the Last Glacial Maximum sea-level low, later modified by marine sedimentation.',
    'No credible peer-reviewed geological study has confirmed the feature as an artificial or engineered structure; claims of "man-made" origin circulated in popular media (including a widely-cited 2002 NASA satellite image) were not scientific assertions of construction and were explicitly clarified by NASA as showing a natural sandbar chain.',
  ],
  unresolvedQuestions: [
    'The precise chronology of when different segments formed versus were reshaped by later storms (including the 1480 CE cyclone) is not fully resolved.',
    'The relative contributions of the original Ice Age land bridge substrate versus later reef/sediment accretion are still debated among coastal geomorphologists.',
    'How, if at all, the physical feature relates to the oral and textual transmission of the Rama Setu tradition remains a question for cultural historians, separate from its geological origin.',
  ],
};

export const ADAMS_BRIDGE_STAGES = [
  {
    id: 'stage-geological',
    stage: 'GEOLOGICAL FEATURE',
    description: 'A natural shoal/sandbar chain resting on a shallow carbonate platform, shaped by sediment transport, reef growth, and sea-level history.',
  },
  {
    id: 'stage-cultural',
    stage: 'CULTURAL INTERPRETATION',
    description: 'Coastal communities and navigators across centuries described, mapped, and named the shoals, integrating them into regional geography and seafaring lore.',
  },
  {
    id: 'stage-religious',
    stage: 'RELIGIOUS TRADITION',
    description: 'In the Ramayana tradition, the feature is identified as Rama Setu, the bridge built to reach Lanka — a matter of religious faith and textual narrative.',
  },
  {
    id: 'stage-modern',
    stage: 'MODERN CLAIM',
    description: 'Some modern popular sources assert the feature is scientifically proven to be artificially engineered; this specific claim is not supported by peer-reviewed marine geology.',
  },
];
