import { useState } from 'react';
import { AlertTriangle, Waves } from 'lucide-react';
import { KADAL_KOL } from '../data/kadalKol';

const SEA_LEVEL_NOTES = (v: number) => {
  if (v === 0) return 'Present-day sea level and coastline.';
  if (v > -20) return 'Minor recession — early post-glacial coastline, roughly matching the mid-Holocene highstand era.';
  if (v > -60) return 'Moderate recession — much of the modern Gulf of Mannar shelf exposed as dry land.';
  if (v > -100) return 'Significant recession — a wider southern coastal plain exposed; consistent with sea levels roughly 10,000–15,000 years ago.';
  return 'Maximum glacial-era recession (~120m below present) — approximates the Last Glacial Maximum, ~20,000 years ago, well before the Sangam era and any written Tamil tradition.';
};

export function KadalKolSimulator() {
  const [seaLevel, setSeaLevel] = useState(0);

  return (
    <section id="kadal-kol" className="py-20 bg-[#140F0C] border-b border-[#463429] relative">
      <div className="absolute inset-0 bg-ocean-depths opacity-10 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <Waves className="w-4 h-4" />
            <span>Kadal Kol — "The Sea's Taking"</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Kadal Kol Simulator</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            A simplified paleogeographic visualization of post-glacial sea-level change near the southern Tamil coast —
            not a reconstruction of Kumari Kandam.
          </p>
        </div>

        <div className="p-6 rounded border border-[#9A7B45]/50 bg-[#241B15] mb-10">
          <div className="flex items-start gap-2 mb-5 text-xs text-[#CDBB96] font-serif leading-relaxed bg-[#1E1914] p-3 rounded border border-[#463429]">
            <AlertTriangle className="w-4 h-4 text-[#9A7B45] shrink-0 mt-0.5" />
            <p>
              This slider illustrates the well-established, gradual global sea-level curve since the Last Glacial
              Maximum. It is a scale demonstration of real coastal change, <strong className="text-[#E6D7B9]">not</strong> an
              attempt to depict or verify the popular "sunken continent" version of Kumari Kandam.
            </p>
          </div>

          <label htmlFor="sea-level-slider" className="block text-xs font-carto uppercase tracking-widest font-bold text-[#9A7B45] mb-3">
            Sea Level: <span className="text-[#E6D7B9] font-mono">{seaLevel}m</span> relative to present
          </label>
          <input
            id="sea-level-slider"
            type="range"
            min={-120}
            max={0}
            step={5}
            value={seaLevel}
            onChange={(e) => setSeaLevel(Number(e.target.value))}
            className="w-full accent-[#9A7B45] mb-4"
          />
          <div className="flex justify-between text-[10px] text-[#9A7B45] font-carto uppercase tracking-wider mb-5">
            <span>-120m (Last Glacial Max)</span>
            <span>0m (Present Day)</span>
          </div>
          <p className="text-sm text-[#E6D7B9] font-serif leading-relaxed bg-[#1E1914] p-4 rounded border border-[#463429]">
            {SEA_LEVEL_NOTES(seaLevel)}
          </p>
        </div>

        <h3 className="text-sm font-carto uppercase tracking-widest text-[#9A7B45] font-bold mb-4">Kadal Kol Terms &amp; Tradition</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {KADAL_KOL.map((k) => (
            <div key={k.id} className="p-4 rounded border border-[#463429] bg-[#241B15] hover-lift">
              <div className="flex items-baseline gap-2 mb-1.5 flex-wrap">
                <h4 className="text-sm font-bold text-[#E6D7B9] font-heading">{k.term}</h4>
                <span className="text-xs text-[#9A7B45] font-serif">{k.tamil}</span>
              </div>
              <p className="text-xs text-[#CDBB96]/80 font-serif italic mb-2">{k.meaning}</p>
              <p className="text-xs sm:text-sm text-[#CDBB96] font-serif leading-relaxed mb-2">{k.context}</p>
              {k.possibleCauses && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {k.possibleCauses.map((c) => (
                    <span key={c} className="px-2 py-0.5 rounded text-[10px] bg-[#1E1914] border border-[#463429] text-[#CDBB96]/80 font-carto">
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
