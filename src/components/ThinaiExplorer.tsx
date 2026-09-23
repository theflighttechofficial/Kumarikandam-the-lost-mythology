import { useState } from 'react';
import { Fish, Flower2, Leaf, Mountain, Sun } from 'lucide-react';
import { THINAI } from '../data/thinai';

const ICONS = {
  'thinai-kurinji': Mountain,
  'thinai-mullai': Leaf,
  'thinai-marutham': Flower2,
  'thinai-neithal': Fish,
  'thinai-paalai': Sun,
} as const;

export function ThinaiExplorer() {
  const [activeId, setActiveId] = useState<string>('thinai-kurinji');
  const active = THINAI.find((t) => t.id === activeId) ?? THINAI[0];

  return (
    <section id="thinai-explorer" className="py-20 bg-[#140F0C] border-b border-[#463429] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <Leaf className="w-4 h-4" />
            <span>Landscape &amp; Emotion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Thinai Explorer</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            The five ecological-emotional landscapes that structure Sangam love poetry, as codified in Tolkappiyam.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {THINAI.map((t) => {
            const Icon = ICONS[t.id as keyof typeof ICONS];
            const isActive = activeId === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveId(t.id)}
                className={`hover-lift p-4 rounded border text-center transition-all ${
                  isActive ? 'bg-[#241B15] border-[#9A7B45] shadow-lg' : 'bg-[#1A1511] border-[#463429] hover:border-[#756451]'
                }`}
              >
                <Icon className={`w-6 h-6 mx-auto mb-2 ${isActive ? 'text-[#9A7B45]' : 'text-[#756451]'}`} />
                <div className="text-sm font-bold text-[#E6D7B9] font-heading">{t.name}</div>
                <div className="text-[10px] text-[#9A7B45] font-serif">{t.tamil}</div>
              </button>
            );
          })}
        </div>

        <div className="p-6 sm:p-8 rounded border border-[#9A7B45]/50 bg-[#241B15]">
          <h3 className="text-xl sm:text-2xl font-bold text-[#E6D7B9] font-heading mb-1">
            {active.name} <span className="text-[#9A7B45] text-base font-serif">· {active.tamil}</span>
          </h3>
          <p className="text-sm text-[#CDBB96] font-serif italic mb-5">{active.environment}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs sm:text-sm">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#9A7B45] font-carto block mb-1">Associated Emotion</span>
              <p className="text-[#CDBB96] font-serif leading-relaxed">{active.associatedEmotion}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#9A7B45] font-carto block mb-1">Occupations</span>
              <p className="text-[#CDBB96] font-serif leading-relaxed">{active.occupation.join(', ')}</p>
            </div>
            {active.flora && (
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#9A7B45] font-carto block mb-1">Flora</span>
                <p className="text-[#CDBB96] font-serif leading-relaxed">{active.flora.join(', ')}</p>
              </div>
            )}
            {active.fauna && (
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#9A7B45] font-carto block mb-1">Fauna</span>
                <p className="text-[#CDBB96] font-serif leading-relaxed">{active.fauna.join(', ')}</p>
              </div>
            )}
            {active.literaryReferences && (
              <div className="sm:col-span-2">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#9A7B45] font-carto block mb-1">Literary References</span>
                <p className="text-[#CDBB96] font-serif leading-relaxed">{active.literaryReferences.join(', ')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
