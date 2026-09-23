import { useMemo, useState } from 'react';
import { BookOpen, Search } from 'lucide-react';
import { GLOSSARY_TERMS } from '../data/glossary';

export function GlossaryExplorer() {
  const [query, setQuery] = useState('');
  const [letter, setLetter] = useState<string | null>(null);

  const letters = useMemo(
    () => Array.from(new Set(GLOSSARY_TERMS.map((t) => t.term[0].toUpperCase()))).sort(),
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GLOSSARY_TERMS.filter((t) => {
      const matchesQuery = !q || t.term.toLowerCase().includes(q) || t.simpleDefinition.toLowerCase().includes(q);
      const matchesLetter = !letter || t.term[0].toUpperCase() === letter;
      return matchesQuery && matchesLetter;
    }).sort((a, b) => a.term.localeCompare(b.term));
  }, [query, letter]);

  return (
    <section id="glossary-explorer" className="py-20 bg-[#15110D] border-b border-[#463429]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Digital Glossary</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Glossary of Terms</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            {GLOSSARY_TERMS.length} geological, archaeological, and Tamil-cultural terms used throughout this site, in plain and technical language.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="flex items-center gap-2 bg-[#241B15] border border-[#463429] rounded px-3 py-2 flex-1">
            <Search className="w-4 h-4 text-[#9A7B45]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search terms..."
              className="bg-transparent outline-none text-sm text-[#E6D7B9] placeholder:text-[#CDBB96]/40 flex-1"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-6">
          <button
            onClick={() => setLetter(null)}
            className={`px-2 py-1 text-xs font-carto rounded border ${!letter ? 'bg-[#2B211A] text-[#FAF6EE] border-[#9A7B45]' : 'bg-[#241B15] text-[#CDBB96]/60 border-[#463429]'}`}
          >
            All
          </button>
          {letters.map((l) => (
            <button
              key={l}
              onClick={() => setLetter(l)}
              className={`w-7 h-7 text-xs font-carto rounded border ${letter === l ? 'bg-[#2B211A] text-[#FAF6EE] border-[#9A7B45]' : 'bg-[#241B15] text-[#CDBB96]/60 border-[#463429]'}`}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
          {filtered.map((t) => (
            <details key={t.id} className="rounded border border-[#463429] bg-[#241B15] p-3.5">
              <summary className="cursor-pointer text-sm font-bold font-heading text-[#E6D7B9]">
                {t.term} <span className="text-xs font-serif font-normal text-[#CDBB96]/70">- {t.simpleDefinition}</span>
              </summary>
              <div className="mt-2 space-y-1.5 text-xs font-serif text-[#CDBB96] leading-relaxed">
                <div><span className="text-[#9A7B45] font-bold">Technical: </span>{t.technicalDefinition}</div>
                <div><span className="text-[#9A7B45] font-bold">Relevance here: </span>{t.websiteRelevance}</div>
              </div>
            </details>
          ))}
          {filtered.length === 0 && (
            <div className="p-6 text-center text-xs text-[#CDBB96]/60 font-serif">No terms match your search.</div>
          )}
        </div>
      </div>
    </section>
  );
}
