import { useState } from 'react';
import { SearchCheck } from 'lucide-react';
import { SOURCES } from '../data/sources';
import { SOURCE_CRITICISM } from '../data/sourceCriticism';

export function SourceCriticismCard() {
  const [sourceId, setSourceId] = useState(SOURCE_CRITICISM[0].sourceId);
  const criticism = SOURCE_CRITICISM.find((c) => c.sourceId === sourceId)!;
  const source = SOURCES.find((s) => s.id === sourceId);

  return (
    <section id="source-criticism" className="py-20 bg-[#15110D] border-b border-[#463429]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <SearchCheck className="w-4 h-4" />
            <span>Source Criticism Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Interrogate a Source</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            Select a source to examine its authorship, purpose, distance from the event, and limitations.
          </p>
        </div>

        <select
          value={sourceId}
          onChange={(e) => setSourceId(e.target.value)}
          className="w-full mb-6 px-3 py-2.5 text-sm rounded bg-[#241B15] border border-[#463429] text-[#E6D7B9] font-carto"
        >
          {SOURCE_CRITICISM.map((c) => {
            const s = SOURCES.find((x) => x.id === c.sourceId);
            return <option key={c.sourceId} value={c.sourceId}>{s?.title ?? c.sourceId}</option>;
          })}
        </select>

        <div className="p-5 rounded border border-[#463429] bg-[#241B15]">
          {source && <h3 className="text-lg font-bold font-heading text-[#E6D7B9] mb-4">{source.title}</h3>}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['Date', criticism.date],
              ['Author', criticism.author],
              ['Purpose', criticism.purpose],
              ['Audience', criticism.audience],
              ['Primary / Secondary', criticism.primaryOrSecondary],
              ['Distance From Event', criticism.distanceFromEvent],
              ['Evidence Type', criticism.evidenceType],
              ['Potential Limitations', criticism.potentialLimitations],
            ].map(([label, value]) => (
              <div key={label} className="p-3 rounded bg-[#1E1914] border border-[#463429]">
                <div className="text-[10px] font-carto uppercase tracking-wider text-[#9A7B45] mb-1">{label}</div>
                <div className="text-xs font-serif text-[#CDBB96] leading-relaxed">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
