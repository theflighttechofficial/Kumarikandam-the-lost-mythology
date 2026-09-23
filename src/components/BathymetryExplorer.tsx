import { useState } from 'react';
import { Layers, Waves } from 'lucide-react';
import { BATHYMETRY_LAYERS } from '../data/bathymetry';

export function BathymetryExplorer() {
  const [activeId, setActiveId] = useState(BATHYMETRY_LAYERS[0].id);
  const active = BATHYMETRY_LAYERS.find((l) => l.id === activeId) ?? BATHYMETRY_LAYERS[0];

  return (
    <section id="bathymetry-explorer" className="py-20 bg-[#1A1511] border-b border-[#463429] relative">
      <div className="absolute inset-0 bg-carto-grid opacity-15 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <Waves className="w-4 h-4" />
            <span>Ocean Floor Survey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Bathymetry Explorer</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            Nine seafloor zone types of the Indian Ocean, and what each one actually says about the Kumari Kandam continent claim.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-1.5 bg-[#241B15] p-2 rounded border border-[#463429]">
              {BATHYMETRY_LAYERS.map((layer) => (
                <button
                  key={layer.id}
                  onClick={() => setActiveId(layer.id)}
                  className={`text-left px-3 py-2.5 rounded transition-colors flex items-center justify-between gap-2 ${
                    activeId === layer.id ? 'bg-[#2B211A] text-[#FAF6EE] border border-[#9A7B45]' : 'text-[#CDBB96]/80 hover:text-[#E6D7B9] border border-transparent'
                  }`}
                >
                  <span className="text-sm font-carto font-semibold">{layer.name}</span>
                  <span className="text-[10px] font-mono text-[#9A7B45]">{layer.depthRange}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 p-5 rounded border border-[#463429] bg-[#241B15]">
            <div className="flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-[#9A7B45]" />
              <h3 className="text-xl font-bold font-heading text-[#E6D7B9]">{active.name}</h3>
              <span className="ml-auto text-xs font-mono text-[#9A7B45]">{active.depthRange}</span>
            </div>
            <div className="space-y-3 text-sm font-serif text-[#CDBB96] leading-relaxed">
              <div>
                <span className="text-[11px] font-carto uppercase tracking-wider text-[#9A7B45] font-bold block mb-1">Formation</span>
                <p>{active.formation}</p>
              </div>
              <div>
                <span className="text-[11px] font-carto uppercase tracking-wider text-[#9A7B45] font-bold block mb-1">Geological Significance</span>
                <p>{active.geologicalSignificance}</p>
              </div>
              <div>
                <span className="text-[11px] font-carto uppercase tracking-wider text-[#9A7B45] font-bold block mb-1">In the Indian Ocean</span>
                <p>{active.relationToIndianOcean}</p>
              </div>
              <div className="p-3 rounded bg-[#1E1914] border border-[#53665C]/50">
                <span className="text-[11px] font-carto uppercase tracking-wider text-[#53665C] font-bold block mb-1">Relation to the Kumari Kandam Claim</span>
                <p className="text-[#CDBB96]/90">{active.relationToKumariKandamClaim}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
