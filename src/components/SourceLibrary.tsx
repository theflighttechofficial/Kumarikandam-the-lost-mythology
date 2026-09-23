import { useMemo, useState } from 'react';
import { Library, Search } from 'lucide-react';
import { SOURCES, SOURCE_TYPE_LABELS, type SourceType } from '../data/sources';

const TYPES: (SourceType | 'all')[] = ['all', ...(Object.keys(SOURCE_TYPE_LABELS) as SourceType[])];

const RELIABILITY_STYLES: Record<string, string> = {
  high: 'text-[#53665C] border-[#53665C]/60',
  moderate: 'text-[#9A7B45] border-[#9A7B45]/60',
  low: 'text-[#8B5E4A] border-[#8B5E4A]/60',
  not_applicable: 'text-[#CDBB96]/60 border-[#756451]/60',
};

export function SourceLibrary() {
  const [type, setType] = useState<SourceType | 'all'>('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SOURCES.filter(
      (s) =>
        (type === 'all' || s.type === type) &&
        (!q || s.title.toLowerCase().includes(q) || s.author.toLowerCase().includes(q) || s.domain.toLowerCase().includes(q))
    );
  }, [type, query]);

  return (
    <section id="source-library" className="py-20 bg-[#15110D] border-b border-[#463429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <Library className="w-4 h-4" />
            <span>Expanded Bibliography</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Source Library</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            {SOURCES.length} primary, scholarly, and reference sources spanning literature, geology, archaeology, and cultural history.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="flex items-center gap-2 bg-[#241B15] border border-[#463429] rounded px-3 py-2 flex-1">
            <Search className="w-4 h-4 text-[#9A7B45]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search title, author, domain..."
              className="bg-transparent outline-none text-sm text-[#E6D7B9] placeholder:text-[#CDBB96]/40 flex-1"
            />
          </div>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as SourceType | 'all')}
            className="bg-[#241B15] border border-[#463429] rounded px-3 py-2 text-xs text-[#CDBB96] font-carto uppercase tracking-wider"
          >
            {TYPES.map((t) => (
              <option key={t} value={t}>{t === 'all' ? 'All Types' : SOURCE_TYPE_LABELS[t]}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[720px] overflow-y-auto pr-1">
          {filtered.map((s) => (
            <div key={s.id} className="p-4 rounded border border-[#463429] bg-[#241B15]">
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <span className="text-[10px] font-carto uppercase tracking-wider text-[#9A7B45]">{SOURCE_TYPE_LABELS[s.type]}</span>
                <span className={`text-[9px] font-carto uppercase px-1.5 py-0.5 rounded border ${RELIABILITY_STYLES[s.reliabilityCategory]}`}>
                  {s.reliabilityCategory.replace('_', ' ')}
                </span>
              </div>
              <h3 className="text-sm font-bold font-heading text-[#E6D7B9] leading-snug mb-1">{s.title}</h3>
              <p className="text-[11px] font-mono text-[#CDBB96]/70 mb-2">{s.author} · {s.year}</p>
              <p className="text-xs font-serif text-[#CDBB96] leading-relaxed">{s.relevance}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
