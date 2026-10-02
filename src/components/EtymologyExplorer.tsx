import { useMemo, useState } from 'react';
import { Languages, Search } from 'lucide-react';
import { LANGUAGE_TERMS } from '../data/languageTerms';

export function EtymologyExplorer() {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(LANGUAGE_TERMS[0].id);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return LANGUAGE_TERMS;
    return LANGUAGE_TERMS.filter(
      (t) => t.term.toLowerCase().includes(q) || t.transliteration.toLowerCase().includes(q)
    );
  }, [query]);

  const selected = LANGUAGE_TERMS.find((t) => t.id === selectedId) ?? filtered[0];

  return (
    <section id="etymology-explorer" className="py-20 bg-[color:var(--section-1E1914)] border-b border-[color:var(--bd-463429)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[color:var(--fg-9A7B45)] mb-2">
            <Languages className="w-4 h-4" />
            <span>Language & Etymology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[color:var(--fg-E6D7B9)] tracking-wide">Etymology Explorer</h2>
          <p className="mt-2 text-base text-[color:var(--fg-CDBB96)] font-serif max-w-2xl leading-relaxed">
            Search key Tamil and English terms behind the Kumari Kandam / Lemuria tradition to see their spelling, meaning, and usage history.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[color:var(--bg-241B15)] border border-[color:var(--bd-463429)] rounded px-3 py-2 mb-6 max-w-md">
          <Search className="w-4 h-4 text-[color:var(--fg-9A7B45)]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a term..."
            className="bg-transparent outline-none text-sm text-[color:var(--fg-E6D7B9)] placeholder:text-[color:var(--fg-CDBB96)]/85 flex-1"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-1.5 max-h-[420px] overflow-y-auto pr-1">
            {filtered.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedId(t.id)}
                className={`w-full text-left px-3 py-2 rounded text-sm font-heading border transition-colors ${
                  selected?.id === t.id ? 'bg-[color:var(--bg-2B211A)] text-[color:var(--fg-FAF6EE)] border-[color:var(--bd-9A7B45)]' : 'bg-[color:var(--bg-241B15)] text-[color:var(--fg-CDBB96)] border-[color:var(--bd-463429)]'
                }`}
              >
                {t.term}
              </button>
            ))}
          </div>

          {selected && (
            <div className="lg:col-span-2 p-5 rounded border border-[color:var(--bd-463429)] bg-[color:var(--bg-241B15)]">
              <div className="flex items-baseline gap-3 flex-wrap mb-3">
                <h3 className="text-2xl font-bold font-heading text-[color:var(--fg-E6D7B9)]">{selected.term}</h3>
                {selected.tamilSpelling && <span className="text-xl text-[color:var(--fg-9A7B45)]">{selected.tamilSpelling}</span>}
              </div>
              <p className="text-xs font-mono text-[color:var(--fg-CDBB96)]/85 mb-4">Transliteration: {selected.transliteration}</p>
              <div className="space-y-3 text-sm font-serif text-[color:var(--fg-CDBB96)] leading-relaxed">
                <div><span className="text-[color:var(--fg-9A7B45)] font-bold">Literal meaning: </span>{selected.literalMeaning}</div>
                <div><span className="text-[color:var(--fg-9A7B45)] font-bold">Historical usage: </span>{selected.historicalUsage}</div>
                <div><span className="text-[color:var(--fg-9A7B45)] font-bold">First known usage: </span>{selected.firstKnownUsage}</div>
                <div><span className="text-[color:var(--fg-9A7B45)] font-bold">Modern usage: </span>{selected.modernUsage}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
