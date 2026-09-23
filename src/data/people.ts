export interface Person {
  id: string;
  name: string;
  role: string;
  period: string;
  contribution: string;
}

export const PEOPLE: Person[] = [
  {
    id: 'p-sclater',
    name: 'Philip Lutley Sclater',
    role: 'English zoologist',
    period: '1829–1913',
    contribution: 'Coined "Lemuria" in 1864 as a hypothetical biogeographic land bridge to explain lemur fossil distribution — the scientific origin point of the name, unrelated to any Tamil legend.',
  },
  {
    id: 'p-haeckel',
    name: 'Ernst Haeckel',
    role: 'German biologist and philosopher',
    period: '1834–1919',
    contribution: 'Popularized and speculatively extended Sclater\'s Lemuria hypothesis, at one point suggesting it as a possible site for early human evolution, in an era before plate tectonics offered a better explanation.',
  },
  {
    id: 'p-blavatsky',
    name: 'Helena Blavatsky',
    role: 'Theosophist and occult writer',
    period: '1831–1891',
    contribution: 'Reimagined Lemuria in "The Secret Doctrine" (1888) as a mystical lost continent and ancient "root race" homeland, the pivotal move that took the term out of zoology and into occult/esoteric popular culture.',
  },
  {
    id: 'p-scott-elliot',
    name: 'William Scott-Elliot',
    role: 'Theosophical writer',
    period: 'fl. c. 1890s–1910s',
    contribution: 'Elaborated detailed (entirely speculative) maps and descriptions of Lemuria\'s supposed geography and civilization, deepening the popular "lost continent" mythology.',
  },
  {
    id: 'p-torsvik',
    name: 'Trond H. Torsvik',
    role: 'Geologist and geophysicist',
    period: 'contemporary',
    contribution: 'Lead author of the 2013 Nature Geoscience study identifying the real Mauritia microcontinent from zircon evidence in Mauritius — the actual, peer-reviewed geological discovery often mistakenly cited as "proof" of Kumari Kandam.',
  },
  {
    id: 'p-wegener',
    name: 'Alfred Wegener',
    role: 'Geophysicist and meteorologist',
    period: '1880–1930',
    contribution: 'Proposed continental drift in 1912, the conceptual forerunner of plate tectonics that would eventually provide a far better explanation for cross-ocean fossil and rock similarities than any hypothetical sunken continent.',
  },
];
