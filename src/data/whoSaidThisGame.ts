export interface WhoSaidQuestion {
  id: string;
  quotation: string;
  correctSpeaker: string;
  options: string[];
  context: string;
}

export const WHO_SAID_THIS_QUESTIONS: WhoSaidQuestion[] = [
  { id: 'wst-01', quotation: '"...we may fairly assume that a great southern continent once existed, of which the Mascarene Islands, Madagascar and India are the fragmentary remains."', correctSpeaker: 'Sclater', options: ['Sclater', 'Wegener', 'Blavatsky', 'Modern geologist'], context: 'From Philip Sclater\'s 1864 paper proposing "Lemuria" to explain lemur distribution, decades before plate tectonics.' },
  { id: 'wst-02', quotation: '"The continents and oceans have not retained the same position for even the shortest geological period."', correctSpeaker: 'Wegener', options: ['Wegener', 'Tamil commentator', 'Popular writer', 'Sclater'], context: 'From Alfred Wegener\'s foundational continental drift work, which later underpinned plate tectonics.' },
  { id: 'wst-03', quotation: '"Lemuria... was the home of the early Third Root-Race of humanity."', correctSpeaker: 'Blavatsky', options: ['Blavatsky', 'Modern geologist', 'Wegener', 'Tamil commentator'], context: 'From Blavatsky\'s The Secret Doctrine (1888), reframing Lemuria as a mystical rather than scientific concept.' },
  { id: 'wst-04', quotation: '"Madurai, having been swallowed by the sea, a second Sangam was held in Kapatapuram."', correctSpeaker: 'Tamil commentator', options: ['Tamil commentator', 'Popular writer', 'Modern geologist', 'Blavatsky'], context: 'Paraphrase of the traditional narrative found in medieval Tamil commentarial literature (e.g., Iraiyanar Akapporul Urai).' },
  { id: 'wst-05', quotation: '"Seismic and gravity data show that most of the claimed Kumari Kandam footprint is underlain by oceanic, not continental, crust."', correctSpeaker: 'Modern geologist', options: ['Modern geologist', 'Sclater', 'Blavatsky', 'Popular writer'], context: 'Representative summary of the modern geophysical consensus on the region.' },
  { id: 'wst-06', quotation: '"Beneath the waves of the Indian Ocean lies the forgotten cradle of the Tamil race, a continent lost in a single cataclysmic night."', correctSpeaker: 'Popular writer', options: ['Popular writer', 'Wegener', 'Modern geologist', 'Tamil commentator'], context: 'A representative example of dramatized popular (non-scholarly) writing on Kumari Kandam.' },
  { id: 'wst-07', quotation: '"A microcontinental fragment, which we call Mauritia, appears to be buried beneath young lavas on Mauritius."', correctSpeaker: 'Modern geologist', options: ['Modern geologist', 'Blavatsky', 'Sclater', 'Tamil commentator'], context: 'Paraphrase of Torsvik et al.\'s 2013 description of the Mauritia discovery.' },
];
