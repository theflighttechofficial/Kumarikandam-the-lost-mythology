import { useState } from 'react';
import { Check, Copy, Filter, Library, Search } from 'lucide-react';
import { ResearchSource } from '../types';

interface SourcesSectionProps {
  sources: ResearchSource[];
  onToggleRead: (id: string) => void;
}

export function SourcesSection({ sources, onToggleRead }: SourcesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'historical' | 'scientific' | 'modern'>('all');
  const [copiedCitationId, setCopiedCitationId] = useState<string | null>(null);
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const filteredSources = sources.filter((s) => {
    const matchesCategory = activeCategory === 'all' || s.category === activeCategory;
    const matchesKeyword =
      searchKeyword.trim() === '' ||
      s.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      s.author.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      s.summary.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchesCategory && matchesKeyword;
  });

  const handleCopyCitation = (source: ResearchSource, format: 'apa' | 'mla') => {
    const text = format === 'apa' ? source.citationApa : source.citationMla;
    navigator.clipboard.writeText(text);
    setCopiedCitationId(`${source.id}-${format}`);
    setTimeout(() => setCopiedCitationId(null), 2500);
  };

  return (
    <section id="sources" className="py-20 bg-[color:var(--section-1A1511)] border-b border-[color:var(--bd-463429)] relative">
      <div className="absolute inset-0 bg-carto-grid opacity-15 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[color:var(--fg-9A7B45)] mb-2">
              <Library className="w-4 h-4 text-[color:var(--fg-9A7B45)]" />
              <span>Cartographic & Scholarly Archives · Primary Sources</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[color:var(--fg-E6D7B9)] tracking-wide">
              Primary & Secondary Treatises
            </h2>
            <p className="mt-2 text-base text-[color:var(--fg-CDBB96)] font-serif max-w-2xl leading-relaxed">
              Distinguishing 19th-century zoological monographs from modern deep-sea drill core analyses and cultural histories. Mark treatises as analyzed to update your expedition ledger.
            </p>
          </div>

          {/* Search + Category Filter Pills */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <div className="relative w-full sm:w-56">
              <Search className="w-3.5 h-3.5 text-[color:var(--fg-9A7B45)] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                id="source-search-input"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Search sources..."
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-[color:var(--bg-241B15)] border border-[color:var(--bd-463429)] rounded text-[color:var(--fg-FAF6EE)] placeholder-[color:var(--fg-CDBB96)]/40 focus:outline-none focus:border-[color:var(--bd-9A7B45)] font-serif transition-colors"
              />
            </div>
            <div className="flex flex-wrap items-center gap-1.5 bg-[color:var(--bg-241B15)] p-1.5 rounded border border-[color:var(--bd-463429)] font-carto">
            <span className="text-[11px] text-[color:var(--fg-9A7B45)] px-2 flex items-center gap-1 uppercase font-bold tracking-wider">
              <Filter className="w-3 h-3 text-[color:var(--fg-9A7B45)]" /> Category:
            </span>
            {(
              [
                { id: 'all', label: 'All Sources' },
                { id: 'historical', label: 'Historical' },
                { id: 'scientific', label: 'Scientific' },
                { id: 'modern', label: 'Modern / Cultural' },
              ] as const
            ).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                id={`source-filter-${cat.id}`}
                className={`px-3 py-1 text-xs uppercase tracking-wider font-bold rounded transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-[color:var(--bg-2B211A)] text-[color:var(--fg-FAF6EE)] border border-[color:var(--bd-9A7B45)] shadow-sm'
                    : 'text-[color:var(--fg-CDBB96)]/85 hover:text-[color:var(--fg-E6D7B9)]'
                }`}
              >
                {cat.label}
              </button>
            ))}
            </div>
          </div>
        </div>

        {/* Sources Cards Grid */}
        {filteredSources.length === 0 ? (
          <div className="p-8 text-center rounded bg-[color:var(--bg-241B15)] border border-[color:var(--bd-463429)] text-[color:var(--fg-CDBB96)] text-xs font-serif">
            No sources found matching "{searchKeyword}".
          </div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSources.map((source) => {
            let catColor = 'bg-[color:var(--bg-1E1914)] text-[color:var(--fg-9A7B45)] border-[color:var(--bd-9A7B45)]/40';
            if (source.category === 'scientific') {
              catColor = 'bg-[color:var(--bg-1E1914)] text-[color:var(--fg-53665C)] border-[color:var(--bd-53665C)]/40';
            } else if (source.category === 'modern') {
              catColor = 'bg-[color:var(--bg-1E1914)] text-[color:var(--fg-8B5E4A)] border-[color:var(--bd-8B5E4A)]/40';
            }

            return (
              <div
                key={source.id}
                id={`source-card-${source.id}`}
                className={`hover-lift p-6 rounded border flex flex-col justify-between transition-all relative ${
                  source.isRead
                    ? 'bg-[color:var(--bg-241B15)] border-[color:var(--bd-9A7B45)] ring-1 ring-[color:var(--bd-9A7B45)]/20'
                    : 'bg-[color:var(--bg-241B15)] border-[color:var(--bd-463429)] hover:border-[color:var(--bd-756451)]'
                }`}
              >
                <div>
                  {/* Category badge & Read Status */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border font-carto ${catColor}`}>
                      {source.category} Treatise
                    </span>

                    <button
                      onClick={() => onToggleRead(source.id)}
                      id={`mark-read-${source.id}`}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-carto uppercase tracking-wider font-semibold border transition-colors ${
                        source.isRead
                          ? 'bg-[color:var(--bg-1E1914)] text-[color:var(--fg-FAF6EE)] border-[color:var(--bd-53665C)]'
                          : 'bg-[color:var(--bg-1E1914)] text-[color:var(--fg-CDBB96)]/85 border-[color:var(--bd-463429)] hover:text-[color:var(--fg-E6D7B9)]'
                      }`}
                      title={source.isRead ? 'Mark as Unread' : 'Mark as Analyzed'}
                    >
                      <div
                        className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${
                          source.isRead ? 'bg-[color:var(--bg-53665C)] border-[color:var(--bd-53665C)] text-[color:var(--fg-FAF6EE)]' : 'border-[color:var(--bd-463429)]'
                        }`}
                      >
                        {source.isRead && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                      </div>
                      <span>{source.isRead ? 'Analyzed' : 'Mark Read'}</span>
                    </button>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-heading text-[color:var(--fg-E6D7B9)] leading-snug mb-1">
                    {source.title}
                  </h3>

                  <div className="text-xs text-[color:var(--fg-9A7B45)] font-mono mb-2">
                    {source.author} ({source.year})
                  </div>

                  <div className="text-xs text-[color:var(--fg-CDBB96)]/85 italic mb-3 font-serif">
                    {source.publication}
                  </div>

                  <p className="text-xs sm:text-sm text-[color:var(--fg-CDBB96)] font-serif leading-relaxed mb-4">
                    {source.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[color:var(--bd-463429)] space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[color:var(--fg-CDBB96)]/85 font-carto uppercase tracking-wider">
                    <span>{source.readTime}</span>
                    <span className="text-[color:var(--fg-9A7B45)] font-bold">Archival Citation</span>
                  </div>

                  {/* Copy Citation Options */}
                  <div className="grid grid-cols-2 gap-2 font-carto">
                    <button
                      onClick={() => handleCopyCitation(source, 'apa')}
                      id={`copy-apa-${source.id}`}
                      className="px-2.5 py-1.5 rounded bg-[color:var(--bg-1E1914)] hover:bg-[color:var(--bg-2B211A)] border border-[color:var(--bd-463429)] hover:border-[color:var(--bd-9A7B45)] text-[color:var(--fg-CDBB96)] hover:text-[color:var(--fg-FAF6EE)] text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                    >
                      {copiedCitationId === `${source.id}-apa` ? (
                        <>
                          <Check className="w-3 h-3 text-[color:var(--fg-53665C)]" />
                          <span className="text-[color:var(--fg-53665C)]">APA Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-[color:var(--fg-9A7B45)]" />
                          <span>Copy APA</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => handleCopyCitation(source, 'mla')}
                      id={`copy-mla-${source.id}`}
                      className="px-2.5 py-1.5 rounded bg-[color:var(--bg-1E1914)] hover:bg-[color:var(--bg-2B211A)] border border-[color:var(--bd-463429)] hover:border-[color:var(--bd-9A7B45)] text-[color:var(--fg-CDBB96)] hover:text-[color:var(--fg-FAF6EE)] text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                    >
                      {copiedCitationId === `${source.id}-mla` ? (
                        <>
                          <Check className="w-3 h-3 text-[color:var(--fg-53665C)]" />
                          <span className="text-[color:var(--fg-53665C)]">MLA Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-[color:var(--fg-9A7B45)]" />
                          <span>Copy MLA</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        )}
      </div>
    </section>
  );
}

