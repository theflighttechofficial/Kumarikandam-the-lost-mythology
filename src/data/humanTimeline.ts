export interface HumanTimeEvent {
  id: string;
  label: string;
  timeAgo: string;
  yearsAgo: number; // approx years ago, for relative positioning
  description: string;
}

export const HUMAN_TIME_EVENTS: HumanTimeEvent[] = [
  { id: 'ht-01', label: 'Early Tamil Oral & Literary Traditions', timeAgo: '~2,300+ years ago', yearsAgo: 2300, description: 'Earliest strands of Tamil poetic and oral tradition begin forming, later compiled into Sangam anthologies.' },
  { id: 'ht-02', label: 'Classical Tamil (Sangam) Literature', timeAgo: '~1,800-2,100 years ago', yearsAgo: 2000, description: 'Composition of Sangam-era anthologies (Ettuthokai, Pattuppattu) referencing sea-encroachment on Pandyan land.' },
  { id: 'ht-03', label: 'Medieval Commentaries', timeAgo: '~1,100-1,200 years ago', yearsAgo: 1150, description: 'Commentators like Nakkirar elaborate the "Three Sangams" narrative in exegetical works.' },
  { id: 'ht-04', label: 'Colonial-Era Scientific Theories', timeAgo: '~160 years ago (1860s)', yearsAgo: 160, description: 'Sclater proposes "Lemuria" as a biogeographic land-bridge hypothesis; later adopted by Theosophists.' },
  { id: 'ht-05', label: 'Tamil Renaissance', timeAgo: '~120 years ago (early 1900s)', yearsAgo: 120, description: 'Tamil revivalist scholars merge Puranic "Kumari Kandam" language with the Western "Lemuria" concept.' },
  { id: 'ht-06', label: '20th-Century Kumari Kandam Interpretations', timeAgo: '~60-100 years ago', yearsAgo: 80, description: 'Popular and nationalist writers elaborate detailed maps and chronologies of a sunken Tamil continent.' },
  { id: 'ht-07', label: 'Modern Geology Discredits Land-Bridge Lemuria', timeAgo: '~60 years ago onward', yearsAgo: 60, description: 'Plate tectonics (1960s onward) explains biogeographic patterns without a sunken continent.' },
  { id: 'ht-08', label: 'Internet-Era Popularization', timeAgo: 'Last ~25 years', yearsAgo: 20, description: 'Kumari Kandam claims spread widely online, often blending literary tradition with pseudo-scientific claims.' },
];
