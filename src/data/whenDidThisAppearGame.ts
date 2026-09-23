export interface WhenDidThisAppearQuestion {
  id: string;
  statement: string;
  correctPeriod: string;
  explanation: string;
  periodOptions: string[];
}

export const WHEN_DID_THIS_APPEAR_QUESTIONS: WhenDidThisAppearQuestion[] = [
  { id: 'wda-01', statement: 'Sangam poets compose verses referencing Pandyan coastal territory.', correctPeriod: 'Classical Tamil (Sangam) Literature', explanation: 'These verses are part of the Sangam-era anthologies, composed roughly 1,800-2,100 years ago.', periodOptions: ['Classical Tamil (Sangam) Literature', 'Colonial-Era Scientific Theories', 'Internet-Era Popularization', 'Medieval Commentaries'] },
  { id: 'wda-02', statement: 'The term "Kumari Kandam" first appears in a Tamil religious text (Kanda Puranam).', correctPeriod: 'Medieval Commentaries', explanation: 'While Kanda Puranam is c. 15th century, the broader elaboration of the "three Sangams" legend occurs in the medieval commentarial period.', periodOptions: ['Medieval Commentaries', 'Classical Tamil (Sangam) Literature', 'Tamil Renaissance', 'Modern Geology'] },
  { id: 'wda-03', statement: 'Philip Sclater proposes "Lemuria" as a hypothetical land bridge to explain lemur distribution.', correctPeriod: 'Colonial-Era Scientific Theories', explanation: 'Sclater\'s paper was published in 1864, during the colonial-era scientific period, before plate tectonics existed.', periodOptions: ['Colonial-Era Scientific Theories', 'Modern Geology', 'Tamil Renaissance', '20th-Century Kumari Kandam Interpretations'] },
  { id: 'wda-04', statement: 'Tamil revivalist writers merge the Western "Lemuria" concept with the Puranic "Kumari Kandam" term.', correctPeriod: 'Tamil Renaissance', explanation: 'This synthesis occurred during the early 20th-century Tamil renaissance/revivalist movement.', periodOptions: ['Tamil Renaissance', 'Classical Tamil (Sangam) Literature', 'Colonial-Era Scientific Theories', 'Internet-Era Popularization'] },
  { id: 'wda-05', statement: 'Plate tectonics provides a scientific explanation for biogeographic patterns without requiring a sunken land bridge.', correctPeriod: 'Modern Geology', explanation: 'Plate tectonic theory was established from the 1960s onward, superseding land-bridge hypotheses like the original Lemuria.', periodOptions: ['Modern Geology', 'Colonial-Era Scientific Theories', 'Medieval Commentaries', 'Tamil Renaissance'] },
  { id: 'wda-06', statement: 'Detailed Kumari Kandam maps and chronologies circulate widely on social media and websites.', correctPeriod: 'Internet-Era Popularization', explanation: 'This widespread, often unsourced, popularization is a feature of the last ~25 years of internet-era spread.', periodOptions: ['Internet-Era Popularization', 'Tamil Renaissance', 'Medieval Commentaries', 'Classical Tamil (Sangam) Literature'] },
];
