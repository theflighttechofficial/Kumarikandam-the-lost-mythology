export interface GeologyFeature {
  id: string;
  name: string;
  type: 'supercontinent' | 'microcontinent' | 'plateau' | 'island group' | 'rift zone';
  age?: string;
  location?: string;
  relevance: string;
}

export const GEOLOGY: GeologyFeature[] = [
  {
    id: 'geo-gondwana',
    name: 'Gondwana',
    type: 'supercontinent',
    age: 'Formed ~550 Ma; began breaking up ~180 Ma',
    location: 'Southern Hemisphere supercontinent comprising Africa, South America, Antarctica, Australia, India, and Madagascar',
    relevance: 'The real, well-established supercontinent whose slow breakup — not a catastrophic sinking — separated India from Africa/Madagascar over tens of millions of years, ultimately producing the modern Indian Ocean.',
  },
  {
    id: 'geo-mauritia',
    name: 'Mauritia',
    type: 'microcontinent',
    age: 'Precambrian crust (~2,500–3,000 Ma) rifted from Madagascar/India roughly 60–83 Ma; now buried beneath younger volcanic rock',
    location: 'Beneath Mauritius and scattered across parts of the Mascarene Plateau, Indian Ocean',
    relevance: 'A small, fragmented sliver of ancient continental crust confirmed by zircon dating in 2013 — genuinely real, but far smaller and older (by tens of millions of years, pre-dating humans entirely) than the popular Kumari Kandam narrative describes.',
  },
  {
    id: 'geo-kerguelen',
    name: 'Kerguelen Plateau',
    type: 'plateau',
    age: 'Formed by volcanic hotspot activity beginning ~130 Ma',
    location: 'Southern Indian Ocean, partly above sea level as the Kerguelen Islands',
    relevance: 'One of the largest oceanic plateaus on Earth, formed by a mantle hotspot rather than being a "sunken continent" in the popular sense — illustrates how large submerged features can form through volcanism, not just continental rifting.',
  },
  {
    id: 'geo-mascarene-plateau',
    name: 'Mascarene Plateau',
    type: 'plateau',
    age: 'Complex origin combining Precambrian continental fragments and later volcanic material, roughly 60 Ma onward',
    location: 'Indian Ocean, stretching from the Seychelles to Mauritius and Réunion',
    relevance: 'Hosts the Mauritia microcontinent fragments; a mix of true continental crust remnants and younger volcanic island-building — the clearest real geological analogue (though far smaller and older) that gets popularly conflated with Kumari Kandam.',
  },
  {
    id: 'geo-mascarene-islands',
    name: 'Mascarene Islands (Mauritius, Réunion, Rodrigues)',
    type: 'island group',
    age: 'Volcanic islands, mostly under ~10 Ma (much younger than the buried Mauritia crust beneath them)',
    location: 'Western Indian Ocean, east of Madagascar',
    relevance: 'Currently inhabited volcanic islands sitting atop the older, submerged Mauritia microcontinent — a good illustration of layered geological history at one site.',
  },
  {
    id: 'geo-seychelles',
    name: 'Seychelles Microcontinent',
    type: 'microcontinent',
    age: 'Precambrian granitic crust (~750 Ma), separated from India roughly 65 Ma',
    location: 'Western Indian Ocean, north of Madagascar',
    relevance: 'A genuine, partially above-water microcontinent (unlike fully-submerged Mauritia) that rifted away during the breakup of Gondwana/India — the best-known real "continental fragment" in the region.',
  },
  {
    id: 'geo-madagascar-rifting',
    name: 'Madagascar–India Rifting',
    type: 'rift zone',
    age: '~90 Ma (India separates from Madagascar) to ~65 Ma (Seychelles separates from India)',
    location: 'Western Indian Ocean, between present-day Madagascar and India',
    relevance: 'The specific rifting sequence that scattered the Seychelles and Mauritia fragments and ultimately sent the Indian plate on its journey north to collide with Asia and form the Himalayas — the real tectonic story behind the region\'s geology.',
  },
];
