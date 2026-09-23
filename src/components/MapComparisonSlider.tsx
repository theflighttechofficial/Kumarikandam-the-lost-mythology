import { useState } from 'react';
import { Layers } from 'lucide-react';

interface PanelDef {
  id: string;
  label: string;
  caption: string;
  status: string;
  render: () => JSX.Element;
}

const PANELS: PanelDef[] = [
  {
    id: 'a',
    label: 'A. 19th-Century "Lemuria" Concept',
    caption: 'A stylized representation of the speculative land-bridge concept proposed by Sclater and elaborated by later writers.',
    status: 'Superseded scientific hypothesis, pre-dates plate tectonics.',
    render: () => (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect width="200" height="120" fill="#1E1914" />
        <ellipse cx="100" cy="60" rx="70" ry="30" fill="#5A4A32" opacity="0.7" />
        <text x="100" y="64" textAnchor="middle" fontSize="8" fill="#E6D7B9">speculative landmass</text>
      </svg>
    ),
  },
  {
    id: 'b',
    label: 'B. Tamil Revivalist "Kumari Kandam" Concept',
    caption: 'A stylized representation of the popular narrative depicting a large continent south of India.',
    status: 'Popular/cultural narrative, not a geological reconstruction.',
    render: () => (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect width="200" height="120" fill="#1E1914" />
        <path d="M60 30 Q100 10 140 30 Q160 60 140 95 Q100 115 60 95 Q40 60 60 30 Z" fill="#9A7B45" opacity="0.7" />
        <text x="100" y="64" textAnchor="middle" fontSize="8" fill="#1E1914">"Kumari Kandam"</text>
      </svg>
    ),
  },
  {
    id: 'c',
    label: 'C. Modern Indian Ocean Bathymetry',
    caption: 'A stylized representation of real seafloor depth patterns, mostly oceanic crust with ridges.',
    status: 'Based on real geophysical survey data.',
    render: () => (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect width="200" height="120" fill="#0F1B24" />
        <rect x="0" y="0" width="200" height="120" fill="#1B2E3D" opacity="0.5" />
        <line x1="20" y1="20" x2="180" y2="100" stroke="#2A4A5A" strokeWidth="6" />
        <line x1="30" y1="100" x2="170" y2="20" stroke="#2A4A5A" strokeWidth="4" />
        <text x="100" y="64" textAnchor="middle" fontSize="8" fill="#CDBB96">oceanic crust + ridges</text>
      </svg>
    ),
  },
  {
    id: 'd',
    label: 'D. Gondwana Reconstruction',
    caption: 'A stylized representation of the ancient supercontinent Gondwana before breakup, ~180 million years ago.',
    status: 'Based on peer-reviewed plate-tectonic reconstructions.',
    render: () => (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect width="200" height="120" fill="#1E1914" />
        <path d="M40 20 L160 20 L150 100 L50 100 Z" fill="#53665C" opacity="0.7" />
        <text x="100" y="64" textAnchor="middle" fontSize="8" fill="#E6D7B9">Gondwana (assembled)</text>
      </svg>
    ),
  },
  {
    id: 'e',
    label: 'E. Mauritia Geological Reconstruction',
    caption: 'A stylized representation of the small, confirmed buried microcontinental fragment near Mauritius.',
    status: 'Peer-reviewed (Torsvik et al. 2013); the only confirmed "lost fragment" in the region.',
    render: () => (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect width="200" height="120" fill="#0F1B24" />
        <circle cx="100" cy="60" r="14" fill="#8B5E4A" />
        <text x="100" y="90" textAnchor="middle" fontSize="8" fill="#CDBB96">Mauritia (small, ancient)</text>
      </svg>
    ),
  },
];

export function MapComparisonSlider() {
  const [index, setIndex] = useState(0);
  const panel = PANELS[index];

  return (
    <section id="map-comparison-slider" className="py-20 bg-[#1E1914] border-b border-[#463429]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <Layers className="w-4 h-4" />
            <span>Historical Map Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Comparing Five Concepts of the Region</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            Since real historical map images are not reproduced here, these are stylized schematic panels — not real cartography — used to compare five different concepts of the same region.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {PANELS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setIndex(i)}
              className={`px-3 py-1.5 text-xs font-carto uppercase tracking-wider rounded border transition-colors ${
                index === i ? 'bg-[#2B211A] text-[#FAF6EE] border-[#9A7B45]' : 'bg-[#241B15] text-[#CDBB96]/70 border-[#463429]'
              }`}
            >
              {p.id.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="rounded border border-[#463429] bg-[#241B15] overflow-hidden">
          <div className="h-56 sm:h-72">{panel.render()}</div>
          <div className="p-5">
            <h3 className="text-lg font-bold font-heading text-[#E6D7B9] mb-2">{panel.label}</h3>
            <p className="text-sm font-serif text-[#CDBB96] leading-relaxed mb-2">{panel.caption}</p>
            <p className="text-xs font-serif text-[#9A7B45]">Evidentiary status: {panel.status}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
