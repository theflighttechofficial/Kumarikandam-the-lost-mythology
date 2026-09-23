export interface DeepTimeEvent {
  id: string;
  label: string;
  timeAgo: string;
  approxMya: number; // millions of years ago, for relative positioning
  description: string;
}

export const DEEP_TIME_EVENTS: DeepTimeEvent[] = [
  { id: 'dt-01', label: 'Earth Forms', timeAgo: '4.5 billion years ago', approxMya: 4500, description: 'Accretion of the Earth from the solar nebula.' },
  { id: 'dt-02', label: 'Early Life Appears', timeAgo: '~3.5 billion years ago', approxMya: 3500, description: 'Earliest microbial life leaves traces in the rock record.' },
  { id: 'dt-03', label: 'Continental Assembly Begins', timeAgo: '~1.8 billion years ago', approxMya: 1800, description: 'Early supercontinent cycles (e.g., Columbia/Nuna) begin shaping stable continental crust.' },
  { id: 'dt-04', label: 'Gondwana Assembles', timeAgo: '~600 million years ago', approxMya: 600, description: 'Southern continents (Africa, India, Madagascar, Antarctica, Australia, South America) join into Gondwana.' },
  { id: 'dt-05', label: 'Pangaea Forms', timeAgo: '~300 million years ago', approxMya: 300, description: 'Gondwana joins Laurasia to form the supercontinent Pangaea.' },
  { id: 'dt-06', label: 'Pangaea Breaks Up', timeAgo: '~200 million years ago', approxMya: 200, description: 'Rifting begins splitting Pangaea back into Gondwana and Laurasia.' },
  { id: 'dt-07', label: 'Indian Ocean Evolution', timeAgo: '~180-120 million years ago', approxMya: 150, description: 'Gondwana fragments; Madagascar, India, and microcontinental slivers like Mauritia separate amid seafloor spreading.' },
  { id: 'dt-08', label: 'India Drifts North', timeAgo: '~100 million years ago', approxMya: 100, description: 'The Indian tectonic plate begins its rapid northward journey across the widening Indian Ocean.' },
  { id: 'dt-09', label: 'India Approaches Eurasia', timeAgo: '~50 million years ago', approxMya: 50, description: 'India nears collision with Eurasia, beginning the uplift that forms the Himalayas.' },
  { id: 'dt-10', label: 'Present Day', timeAgo: 'Today', approxMya: 0, description: 'Modern Indian Ocean bathymetry, coastlines, and microcontinental fragments (e.g. Mauritia) as mapped by geophysics.' },
];
