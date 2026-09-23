import { useMemo, useState } from 'react';
import { Globe2 } from 'lucide-react';
import { LOST_LANDS, EVIDENCE_TAG_LEGEND, type EvidenceTag } from '../data/lostLands';

const TYPE_LABEL = { verified_geological: 'Verified Geological / Paleogeographic Feature', cultural_mythological: 'Cultural / Mythological Lost Land' } as const;

export function LostLandsExplorer() {
  const [typeFilter, setTypeFilter] = useState<'all' | keyof typeof TYPE_LABEL>('all');

  const filtered = useMemo(
    () => LOST_LANDS.filter((l) => typeFilter === 'all' || l.type === typeFilter),
    [typeFilter]
  );

  return (
    <section id="lost-lands-explorer" className="py-20 bg-[#15110D] border-b border-[#463429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <Globe2 className="w-4 h-4" />
            <span>World Register of Lost Lands</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Real vs. Mythological Lost Lands</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            {LOST_LANDS.length} lost-land traditions, categorized by verified geological status versus cultural/mythological status.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex flex-wrap items-center gap-1.5 bg-[#241B15] p-1.5 rounded border border-[#463429] font-carto">
            {(['all', 'verified_geological', 'cultural_mythological'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`px-3 py-1 text-xs uppercase tracking-wider font-bold rounded transition-colors ${
                  typeFilter === t ? 'bg-[#2B211A] text-[#FAF6EE] border border-[#9A7B45]' : 'text-[#CDBB96]/70 hover:text-[#E6D7B9]'
                }`}
              >
                {t === 'all' ? 'All' : TYPE_LABEL[t]}
              </button>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mb-6 p-3 rounded bg-[#241B15] border border-[#463429] flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] font-carto text-[#CDBB96]/80">
          {(Object.entries(EVIDENCE_TAG_LEGEND) as [EvidenceTag, typeof EVIDENCE_TAG_LEGEND[EvidenceTag]][]).map(([key, v]) => (
            <span key={key} className="flex items-center gap-1">{v.dot} {v.label}</span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((land) => (
            <div key={land.id} className="p-4 rounded border border-[#463429] bg-[#241B15]">
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-sm font-bold font-heading text-[#E6D7B9]">{land.name}</h3>
                <span className={`text-[9px] font-carto uppercase tracking-wider px-1.5 py-0.5 rounded border ${land.type === 'verified_geological' ? 'text-[#53665C] border-[#53665C]/60' : 'text-[#8B5E4A] border-[#8B5E4A]/60'}`}>
                  {land.type === 'verified_geological' ? 'Verified' : 'Mythological'}
                </span>
              </div>
              <p className="text-[10px] font-mono text-[#9A7B45] mb-2">{land.region} · {land.approximateAge}</p>
              <div className="flex gap-1 mb-3">
                {land.evidenceTags.map((t) => (
                  <span key={t} title={EVIDENCE_TAG_LEGEND[t].label}>{EVIDENCE_TAG_LEGEND[t].dot}</span>
                ))}
              </div>
              <p className="text-xs font-serif text-[#CDBB96] leading-relaxed mb-2">{land.evidence}</p>
              <p className="text-[11px] font-serif text-[#CDBB96]/70 italic leading-relaxed">Misconception: {land.misconceptions}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
