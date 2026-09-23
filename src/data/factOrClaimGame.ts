export interface FactOrClaimEntry {
  id: string;
  statement: string;
  verdict: 'supported' | 'not_established';
  explanation: string;
}

export const FACT_OR_CLAIM_ENTRIES: FactOrClaimEntry[] = [
  {
    id: 'fc-1',
    statement: 'Sea levels were roughly 120 metres lower than today during the Last Glacial Maximum, ~20,000 years ago.',
    verdict: 'supported',
    explanation: 'This is a well-established figure from global paleoclimate and sea-level reconstruction research.',
  },
  {
    id: 'fc-2',
    statement: 'A continent-sized landmass called Kumari Kandam sank in a single catastrophic event and is now confirmed by marine geology.',
    verdict: 'not_established',
    explanation: 'No peer-reviewed marine geology confirms a continent-scale sunken landmass in this location; deep ocean basins here show young oceanic crust.',
  },
  {
    id: 'fc-3',
    statement: 'Madagascar and India were once physically joined as part of Gondwana before rifting apart around 88 million years ago.',
    verdict: 'supported',
    explanation: 'This is standard, well-evidenced plate tectonic history, confirmed through paleomagnetic and geochronological data.',
  },
  {
    id: 'fc-4',
    statement: 'Zircon crystals nearly 3 billion years old have been found beneath young volcanic rock on Mauritius, indicating a hidden continental fragment.',
    verdict: 'supported',
    explanation: 'Published in Nature Geoscience (Torsvik et al., 2013); a genuine, peer-reviewed finding, though it does not confirm any lost civilization.',
  },
  {
    id: 'fc-5',
    statement: 'The Mauritia discovery proves that Lemuria, as described by Theosophists, actually existed.',
    verdict: 'not_established',
    explanation: 'Mauritia is a tiny, tens-of-millions-of-years-old crustal fragment, geologically and temporally unrelated to the Theosophical "root race" narrative.',
  },
  {
    id: 'fc-6',
    statement: 'Marine archaeologists have found submerged brick structures and ring wells off the coast of Poompuhar, Tamil Nadu.',
    verdict: 'supported',
    explanation: 'Documented by Indian marine archaeology surveys (including NIO), though precise dating and interpretation remain debated.',
  },
  {
    id: 'fc-7',
    statement: 'Adam\'s Bridge (Rama Setu) has been scientifically proven to be an artificial structure built by human or divine agency.',
    verdict: 'not_established',
    explanation: 'Marine geologists generally interpret it as a natural sandbar/shoal chain; no peer-reviewed study confirms artificial construction.',
  },
  {
    id: 'fc-8',
    statement: 'Doggerland, a former landmass connecting Britain to continental Europe, was submerged by rising seas and a tsunami around 6,200 BCE.',
    verdict: 'supported',
    explanation: 'Confirmed by seismic surveys, dredged artifacts, and study of the Storegga Slide tsunami deposit.',
  },
  {
    id: 'fc-9',
    statement: 'Alfred Wegener\'s continental drift theory was immediately accepted by geologists when proposed in 1912.',
    verdict: 'not_established',
    explanation: 'Wegener\'s theory faced significant resistance for decades and was only widely accepted after seafloor spreading evidence emerged in the 1960s.',
  },
  {
    id: 'fc-10',
    statement: 'Zealandia is recognized by geologists as meeting the criteria for a genuine, mostly-submerged continent.',
    verdict: 'supported',
    explanation: 'Formally proposed and supported in GSA Today (Mortimer et al., 2017) using elevation, geology, and boundary criteria.',
  },
  {
    id: 'fc-11',
    statement: 'Ancient Tamil Sangam poetry never mentions land lost to the sea.',
    verdict: 'not_established',
    explanation: 'This is false as stated — Sangam texts like Kalittokai and Silappatikaram do reference land lost to oceanic incursion; the debate is over the scale and literal historicity, not whether the theme exists.',
  },
  {
    id: 'fc-12',
    statement: 'Plate tectonics shows that continents drift laterally over geological time rather than sinking vertically in place.',
    verdict: 'supported',
    explanation: 'This is the foundational, well-evidenced mechanism of plate tectonics confirmed since the 1960s.',
  },
];
