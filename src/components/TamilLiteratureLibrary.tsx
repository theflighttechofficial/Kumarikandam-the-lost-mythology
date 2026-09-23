import { useMemo, useState } from 'react';
import { BookOpen, Search } from 'lucide-react';
import { TAMIL_LITERATURE } from '../data/tamilLiterature';
import type { TamilLiteratureWork } from '../data/tamilLiterature';

const EVIDENCE_STYLES: Record<TamilLiteratureWork['evidenceLevel'], string> = {
  'primary historical source': 'text-[#53665C] border-[#53665C]/60',
  'later commentary/tradition': 'text-[#8B5E4A] border-[#8B5E4A]/60',
  'post-Sangam classical work': 'text-[#9A7B45] border-[#9A7B45]/60',
};

export function TamilLiteratureLibrary() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState<TamilLiteratureWork['type'] | 'all'>('all');

  const filtered = useMemo(
    () =>
      TAMIL_LITERATURE.filter((w) => {
        const matchesQuery = query.trim() === '' || w.title.toLowerCase().includes(query.toLowerCase()) || w.relevance.some((r) => r.toLowerCase().includes(query.toLowerCase()));
        const matchesType = type === 'all' || w.type === type;
        return matchesQuery && matchesType;
      }),
    [query, type]
  );

  return (
    <section id="tamil-literature" className="py-20 bg-[#1A1511] border-b border-[#463429] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <BookOpen className="w-4 h-4" />
            <span>The Classical Library</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Tamil Literature Library</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            Search the surviving classical Tamil corpus — grammars, epics, and anthologies — each tagged by how
            directly it counts as historical evidence.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#9A7B45] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search works, e.g. 'Thinai' or 'Madurai'..."
              className="w-full pl-9 pr-3 py-2 text-sm rounded bg-[#241B15] border border-[#463429] text-[#E6D7B9] placeholder:text-[#756451] focus:outline-none focus:border-[#9A7B45] font-serif"
            />
          </div>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as TamilLiteratureWork['type'] | 'all')}
            className="px-3 py-2 text-sm rounded bg-[#241B15] border border-[#463429] text-[#E6D7B9] focus:outline-none focus:border-[#9A7B45] font-carto uppercase tracking-wide"
          >
            <option value="all">All Types</option>
            <option value="grammar">Grammar</option>
            <option value="epic">Epic</option>
            <option value="anthology">Anthology</option>
            <option value="poetics treatise">Poetics Treatise</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((w) => (
            <div key={w.id} className="hover-lift p-5 rounded border border-[#463429] bg-[#241B15] flex flex-col">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] uppercase tracking-wider font-carto text-[#9A7B45] font-bold">{w.type}</span>
                <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border font-carto ${EVIDENCE_STYLES[w.evidenceLevel]}`}>
                  {w.evidenceLevel}
                </span>
              </div>
              <h3 className="text-base font-bold text-[#E6D7B9] font-heading mb-1.5">{w.title}</h3>
              {w.period && <p className="text-xs text-[#CDBB96]/70 font-serif italic mb-2">{w.period}</p>}
              <ul className="space-y-1 mt-auto">
                {w.relevance.map((r) => (
                  <li key={r} className="text-xs text-[#CDBB96] font-serif leading-relaxed flex items-start gap-1.5">
                    <span className="text-[#9A7B45] mt-1">•</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="text-sm text-[#CDBB96] font-serif col-span-full text-center py-10">No works match your search.</p>
          )}
        </div>
      </div>
    </section>
  );
}
