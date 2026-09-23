export interface PaleoStage {
  id: string;
  period: string;
  approximateAge: string;
  environment: string;
  notableEvents?: string[];
}

export const PALEOGEOGRAPHY: PaleoStage[] = [
  {
    id: 'pg-1',
    period: 'Gondwana Assembled',
    approximateAge: '~550–180 Ma',
    environment: 'India, Madagascar, Africa, Antarctica, and Australia are joined as a single landmass in the Southern Hemisphere. No Indian Ocean exists yet — just a continuous supercontinent coastline.',
    notableEvents: ['Gondwana forms via collision of older continental blocks (~550 Ma)', 'Remains largely intact through the Paleozoic'],
  },
  {
    id: 'pg-2',
    period: 'Early Gondwana Breakup',
    approximateAge: '~180–130 Ma',
    environment: 'Rifting begins between West Gondwana (Africa, South America) and East Gondwana (India, Madagascar, Antarctica, Australia). A narrow seaway starts to open.',
    notableEvents: ['Initial rift basins form along future Indian Ocean margins'],
  },
  {
    id: 'pg-3',
    period: 'India–Madagascar Separation Begins',
    approximateAge: '~130–90 Ma',
    environment: 'Antarctica and Australia drift away from India/Madagascar. The Indian-Madagascar block remains joined but is now isolated from the rest of Gondwana, surrounded by widening ocean.',
    notableEvents: ['Kerguelen hotspot volcanism begins building the Kerguelen Plateau (~130 Ma onward)'],
  },
  {
    id: 'pg-4',
    period: 'India Rifts from Madagascar',
    approximateAge: '~90 Ma',
    environment: 'India begins separating from Madagascar, opening the earliest stretch of what will become the western Indian Ocean. Madagascar stays roughly in its present position; India starts its long northward journey.',
    notableEvents: ['Rift volcanism along the Indian west coast (Deccan-adjacent precursor activity)'],
  },
  {
    id: 'pg-5',
    period: 'Seychelles and Mauritia Rift Away',
    approximateAge: '~65–83 Ma',
    environment: 'As India continues moving north, the Seychelles microcontinent and the Mauritia fragment are left behind, stretched and thinned between India and Madagascar/Africa. Much of Mauritia begins to subside below sea level.',
    notableEvents: ['Deccan Traps volcanism (~66 Ma)', 'Mauritia crust progressively submerges, eventually buried under younger volcanic rock'],
  },
  {
    id: 'pg-6',
    period: 'India Crosses the Open Indian Ocean',
    approximateAge: '~65–50 Ma',
    environment: 'India travels rapidly northward across open ocean, isolated from all other landmasses — the loneliest chapter of its journey, long before any Tamil-speaking or human presence existed anywhere on Earth\'s relevant timescale.',
    notableEvents: ['Mascarene Islands begin forming later via hotspot volcanism atop buried Mauritia crust'],
  },
  {
    id: 'pg-7',
    period: 'India–Asia Collision',
    approximateAge: '~50–40 Ma',
    environment: 'India collides with the Asian plate, beginning the uplift of the Himalayas. The Indian Ocean basin takes on roughly its modern shape, with scattered submerged microcontinents (Mauritia, parts of the Kerguelen/Mascarene system) as the only remnants of the old Gondwana connection.',
    notableEvents: ['Himalayan orogeny begins', 'Modern Indian Ocean circulation patterns start to establish'],
  },
  {
    id: 'pg-8',
    period: 'Holocene / Present Day',
    approximateAge: '~11,700 years ago – today',
    environment: 'Post-glacial sea-level rise (roughly 120m since the Last Glacial Maximum) modestly reshapes coastlines worldwide, including the shelf south of Tamil Nadu near Kanyakumari — a real but geographically minor process, occurring tens of millions of years after all the continental-scale rifting above, and coinciding with the actual era of human coastal settlement and the Sangam literary tradition.',
    notableEvents: ['Post-glacial sea-level rise submerges coastal shelves globally', 'Human coastal settlement and, much later, the Sangam-era Tamil literary tradition emerge — entirely unrelated in timescale to Gondwana/Mauritia geology'],
  },
];
