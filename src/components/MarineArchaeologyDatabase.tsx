import { useState } from 'react';
import { Anchor, Waves } from 'lucide-react';
import { MARINE_ARCH_ENTRIES, MARINE_ARCH_METHODS } from '../data/marineArchaeology';

const TYPE_LABELS: Record<string, string> = {
  submerged_settlement: 'Submerged Settlement',
  ancient_harbour: 'Ancient Harbour',
  shipwreck: 'Shipwreck',
  paleo_shoreline: 'Paleo-shoreline',
  submerged_structure: 'Submerged Structure',
};

export function MarineArchaeologyDatabase() {
  const [tab, setTab] = useState<'sites' | 'methods'>('sites');

  return (
    <section id="marine-archaeology" className="py-20 bg-[#1A1511] border-b border-[#463429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <Anchor className="w-4 h-4" />
            <span>Marine Archaeology Database</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Submerged Sites & Survey Methods</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            Documented submerged settlements, harbours, and paleo-shorelines, alongside the scientific methods used to study them.
          </p>
        </div>

        <div className="flex gap-2 mb-6">
          {(['sites', 'methods'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 text-xs font-carto uppercase tracking-wider rounded border transition-colors ${
                tab === t ? 'bg-[#2B211A] text-[#FAF6EE] border-[#9A7B45]' : 'bg-[#241B15] text-[#CDBB96]/70 border-[#463429]'
              }`}
            >
              {t === 'sites' ? 'Sites' : 'Methods'}
            </button>
          ))}
        </div>

        {tab === 'sites' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MARINE_ARCH_ENTRIES.map((e) => (
              <div key={e.id} className="p-4 rounded border border-[#463429] bg-[#241B15]">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-carto uppercase tracking-wider text-[#9A7B45]">{TYPE_LABELS[e.type]}</span>
                  <span className="text-[10px] font-mono text-[#CDBB96]/60">{e.depth}</span>
                </div>
                <h3 className="text-sm font-bold font-heading text-[#E6D7B9] mb-1">{e.name}</h3>
                <p className="text-[11px] text-[#CDBB96]/70 font-mono mb-2">{e.location}</p>
                <p className="text-xs font-serif text-[#CDBB96] leading-relaxed mb-2">{e.description}</p>
                <p className="text-[11px] font-serif text-[#9A7B45] leading-relaxed border-t border-[#463429] pt-2">
                  Evidentiary status: {e.evidentiaryStatus}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MARINE_ARCH_METHODS.map((m) => (
              <div key={m.id} className="p-4 rounded border border-[#463429] bg-[#241B15] flex gap-3">
                <Waves className="w-4 h-4 text-[#53665C] shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-bold font-heading text-[#E6D7B9] mb-1">{m.name}</h3>
                  <p className="text-xs font-serif text-[#CDBB96] leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
