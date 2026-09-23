import { useState } from 'react';
import { Globe2 } from 'lucide-react';
import { PALEOGEOGRAPHY } from '../data/paleogeography';

export function GondwanaReconstruction() {
  const [index, setIndex] = useState(0);
  const stage = PALEOGEOGRAPHY[index];

  return (
    <section id="gondwana-reconstruction" className="py-20 bg-[#140F0C] border-b border-[#463429] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <Globe2 className="w-4 h-4" />
            <span>~550 Million Years to Today</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">
            The Indian Ocean Before the Indian Ocean
          </h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            Drag the slider to move through the real tectonic history that shaped this ocean — a simplified,
            stylized timeline, not a precise map.
          </p>
        </div>

        <div className="p-6 sm:p-10 rounded border border-[#9A7B45]/50 bg-[#241B15]">
          {/* Stylized diagram placeholder */}
          <div className="relative w-full h-48 sm:h-56 rounded bg-ocean-depths border border-[#463429] overflow-hidden mb-8 flex items-center justify-center">
            <div
              className="rounded-full bg-[#8B5E4A]/70 border-2 border-[#CDBB96]/50 shadow-inner transition-all duration-500"
              style={{
                width: `${Math.max(20, 90 - index * 8)}%`,
                height: `${Math.max(30, 70 - index * 5)}%`,
              }}
            />
            <span className="absolute bottom-2 right-3 text-[10px] font-carto uppercase tracking-widest text-[#CDBB96]/60">
              Stylized landmass extent (illustrative only)
            </span>
          </div>

          <label htmlFor="paleo-slider" className="block text-xs font-carto uppercase tracking-widest font-bold text-[#9A7B45] mb-3">
            Stage {index + 1} of {PALEOGEOGRAPHY.length}
          </label>
          <input
            id="paleo-slider"
            type="range"
            min={0}
            max={PALEOGEOGRAPHY.length - 1}
            step={1}
            value={index}
            onChange={(e) => setIndex(Number(e.target.value))}
            className="w-full accent-[#9A7B45] mb-6"
          />

          <h3 className="text-xl font-bold text-[#E6D7B9] font-heading mb-1">{stage.period}</h3>
          <p className="text-xs text-[#9A7B45] font-carto uppercase tracking-wider mb-4">{stage.approximateAge}</p>
          <p className="text-sm text-[#CDBB96] font-serif leading-relaxed mb-4">{stage.environment}</p>
          {stage.notableEvents && stage.notableEvents.length > 0 && (
            <ul className="space-y-1">
              {stage.notableEvents.map((ev) => (
                <li key={ev} className="text-xs text-[#CDBB96]/90 font-serif flex items-start gap-1.5">
                  <span className="text-[#9A7B45] mt-1">•</span>
                  {ev}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
