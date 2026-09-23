export interface ResearchQuestionTemplate {
  id: string;
  category: 'Geology' | 'Archaeology' | 'Literature' | 'Historiography' | 'Methodology';
  question: string;
}

export const RESEARCH_QUESTION_TEMPLATES: ResearchQuestionTemplate[] = [
  { id: 'rq-01', category: 'Geology', question: 'What does the seismic and gravity data actually show beneath the claimed footprint of Kumari Kandam?' },
  { id: 'rq-02', category: 'Geology', question: 'How does the discovery of the Mauritia microcontinent change (or not change) the case for a larger sunken landmass?' },
  { id: 'rq-03', category: 'Geology', question: 'What rate of tectonic change would be required for a continent-scale landmass to submerge within a few thousand years, and is that rate observed anywhere on Earth?' },
  { id: 'rq-04', category: 'Archaeology', question: 'What dating evidence exists for the submerged structures reported off Poompuhar, and how solid is it?' },
  { id: 'rq-05', category: 'Archaeology', question: 'How does the Keezhadi excavation record relate (if at all) to claims of a submerged Sangam-era civilization?' },
  { id: 'rq-06', category: 'Literature', question: 'How does the "three Sangams" narrative develop across different historical texts, from the earliest commentary to modern retellings?' },
  { id: 'rq-07', category: 'Literature', question: 'What is the earliest textual appearance of the term "Kumari Kandam," and how does its meaning shift over time?' },
  { id: 'rq-08', category: 'Historiography', question: 'How did 19th-century Western biogeography (Sclater\'s Lemuria) come to merge with Tamil revivalist writing in the early 20th century?' },
  { id: 'rq-09', category: 'Historiography', question: 'What political and cultural motivations shaped the popularization of Kumari Kandam during the Tamil renaissance?' },
  { id: 'rq-10', category: 'Methodology', question: 'What would count as sufficient evidence to confirm (or rule out) a literal sunken continent, and has that threshold been met?' },
  { id: 'rq-11', category: 'Methodology', question: 'How should researchers distinguish between literary/cultural memory of coastal change and a literal claim of continental submergence?' },
  { id: 'rq-12', category: 'Geology', question: 'What does paleo-sea-level data reveal about which coastal areas were actually exposed at various points over the last 20,000 years?' },
  { id: 'rq-13', category: 'Archaeology', question: 'What underwater survey methods have been applied to the Gulf of Mannar / Adam\'s Bridge region, and what have they found?' },
  { id: 'rq-14', category: 'Literature', question: 'How do later medieval commentaries elaborate on earlier, sparser Sangam-era references to land loss?' },
];
