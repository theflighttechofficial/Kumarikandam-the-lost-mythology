import { useState } from 'react';
import { AlertTriangle, Waves } from 'lucide-react';
import { SEA_LEVEL_PERIODS, SEA_LEVEL_DISCLAIMER } from '../data/seaLevel';

export function SeaLevelExplorer() {
  const [idx, setIdx] = useState(0);
  const period = SEA_LEVEL_PERIODS[idx];

  return (
    <section id="sea-level-explorer" className="py-20 bg-[#15110D] border-b border-[#463429] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <Waves className="w-4 h-4" />
            <span>Move The Sea</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Sea Level Through Time</h2>
        </div>

        <div className="p-3.5 mb-6 rounded bg-[#241B15] border border-[#8B5E4A]/50 text-xs font-serif text-[#CDBB96] flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-[#8B5E4A] shrink-0 mt-0.5" />
          <span>{SEA_LEVEL_DISCLAIMER}</span>
        </div>

        <div className="p-6 rounded border border-[#463429] bg-[#241B15]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold font-heading text-[#E6D7B9]">{period.label}</h3>
            <span className="text-xs font-mono text-[#9A7B45]">{period.yearsAgo}</span>
          </div>

          <input
            type="range"
            min={0}
            max={SEA_LEVEL_PERIODS.length - 1}
            value={idx}
            onChange={(e) => setIdx(Number(e.target.value))}
            className="w-full accent-[#9A7B45] mb-2"
          />
          <div className="flex justify-between text-[10px] font-carto uppercase tracking-wider text-[#CDBB96]/60 mb-6">
            <span>LGM (Lowest)</span>
            <span>Modern (Baseline)</span>
          </div>

          {/* Coastline visual */}
          <div className="relative w-full h-32 rounded overflow-hidden border border-[#463429] mb-6 bg-[#1E1914]">
            <div className="absolute inset-x-0 bottom-0 bg-[#382C23]" style={{ height: '40%' }} />
            <div
              className="absolute inset-x-0 bottom-0 bg-[#2A3A44]/80 transition-all duration-500"
              style={{ height: `${10 + idx * (55 / (SEA_LEVEL_PERIODS.length - 1))}%` }}
            />
            <span className="absolute top-2 left-3 text-[10px] font-mono text-[#CDBB96]/70">Relative sea level: {period.relativeSeaLevel}</span>
          </div>

          <p className="text-sm font-serif text-[#CDBB96] leading-relaxed mb-3">{period.description}</p>
          <div className="p-3 rounded bg-[#1E1914] border border-[#463429] text-xs font-serif text-[#CDBB96]/90">
            <span className="text-[10px] font-carto uppercase tracking-wider text-[#9A7B45] font-bold block mb-1">Coastline Note</span>
            {period.coastlineNote}
          </div>
        </div>
      </div>
    </section>
  );
}
