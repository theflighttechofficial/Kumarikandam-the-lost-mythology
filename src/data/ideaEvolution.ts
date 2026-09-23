export interface IdeaEvolutionStage {
  id: string;
  stage: string;
  period: string;
  description: string;
}

export const IDEA_EVOLUTION_STAGES: IdeaEvolutionStage[] = [
  {
    id: 'ie-biogeography',
    stage: 'Biogeographical Hypothesis',
    period: '1864',
    description: 'Philip Sclater proposes a sunken land bridge to explain why lemurs are found in Madagascar and India but not in between — a working scientific hypothesis of its time.',
  },
  {
    id: 'ie-lemuria',
    stage: 'Lemuria Named',
    period: '1864–1880s',
    description: 'The hypothesis is named "Lemuria" and taken up by other naturalists, including Ernst Haeckel, who speculates it could be a cradle of early hominid evolution.',
  },
  {
    id: 'ie-theosophy',
    stage: 'Theosophical Continent',
    period: '1888–1904',
    description: 'Helena Blavatsky and William Scott-Elliot transform Lemuria from a scientific hypothesis into an esoteric "root race" continent populated by mystical beings, complete with speculative maps.',
  },
  {
    id: 'ie-tamil',
    stage: 'Tamil Cultural Interpretation',
    period: '1890s–1900s',
    description: 'Tamil scholars encounter Western Lemuria maps and connect them with the long-standing Sangam literary tradition of a submerged southern land, seeing scientific validation of ancient Tamil memory.',
  },
  {
    id: 'ie-kumari-kandam',
    stage: 'Kumari Kandam',
    period: '1900s–1950s',
    description: 'Revivalist scholars (Parithimar Kalaignar, Devaneya Pavanar, and others) elaborate a detailed geography of Kumari Kandam — 49 Nadus, rivers, mountains — as a symbol of Tamil antiquity and anti-colonial pride.',
  },
  {
    id: 'ie-internet',
    stage: 'Modern Internet Narrative',
    period: '1990s–present',
    description: 'Kumari Kandam and Lemuria circulate widely online, often stripped of historiographical context and presented as settled fact, frequently conflated with unrelated discoveries like Mauritia.',
  },
  {
    id: 'ie-reassessment',
    stage: 'Modern Scientific Reassessment',
    period: '1960s–present',
    description: 'Plate tectonics (1960s) and later peer-reviewed historiography (e.g. Ramaswamy 2004) separately settle the geological question and analyze the cultural history, distinguishing genuine coastal submergence from the maximalist continental myth.',
  },
];
