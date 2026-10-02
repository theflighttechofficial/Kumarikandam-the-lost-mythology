import { useState } from 'react';
import { AlertCircle, ChevronDown, ChevronUp, History } from 'lucide-react';
import { LEMURIA_HISTORY } from '../data/lemuriaHistory';
import type { LemuriaHistoryEvent } from '../data/lemuriaHistory';

const DOMAIN_STYLES: Record<LemuriaHistoryEvent['domain'], string> = {
  science: 'bg-[color:var(--bg-1E1914)] text-[color:var(--fg-53665C)] border-[color:var(--bd-53665C)]/50',
  'esoteric/popular': 'bg-[color:var(--bg-1E1914)] text-[color:var(--fg-8B5E4A)] border-[color:var(--bd-8B5E4A)]/50',
  'tamil revival': 'bg-[color:var(--bg-1E1914)] text-[color:var(--fg-9A7B45)] border-[color:var(--bd-9A7B45)]/50',
  'modern geology': 'bg-[color:var(--bg-1E1914)] text-[color:var(--fg-53665C)] border-[color:var(--bd-53665C)]/50',
};

export function LemuriaHistoryTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>('lh-1864-sclater');

  return (
    <section id="lemuria-history" className="py-20 bg-[color:var(--section-1A1511)] border-b border-[color:var(--bd-463429)] relative">
      <div className="absolute inset-0 bg-carto-grid opacity-15 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[color:var(--fg-9A7B45)] mb-2">
            <History className="w-4 h-4" />
            <span>From Zoology to Legend to Geology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[color:var(--fg-E6D7B9)] tracking-wide">History of the Lemuria Idea</h2>
        </div>

        <div className="p-5 rounded border border-[color:var(--bd-9A7B45)]/50 bg-[color:var(--bg-241B15)] flex items-start gap-3 mb-10">
          <AlertCircle className="w-5 h-5 text-[color:var(--fg-9A7B45)] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[color:var(--fg-CDBB96)] font-serif leading-relaxed">
            <strong className="text-[color:var(--fg-E6D7B9)]">A crucial nuance:</strong> Sclater coined "Lemuria" in 1864 purely as a
            biogeographic hypothesis to explain lemur fossils — he never claimed it was a giant continent that
            "sank" in a human-witnessed catastrophe. That framing was added decades later, first by Theosophists and
            then by unrelated Tamil revivalist writers, and it is a popular oversimplification, not his original
            scientific idea.
          </p>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l border-[color:var(--bd-463429)] space-y-6">
          {LEMURIA_HISTORY.map((ev) => {
            const isExpanded = expandedId === ev.id;
            return (
              <div key={ev.id} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-3.5 h-3.5 rounded-full border-2 bg-[color:var(--bg-9A7B45)] border-[color:var(--bd-FAF6EE)] transition-transform" />
                <div
                  onClick={() => setExpandedId(isExpanded ? null : ev.id)}
                  className={`hover-lift p-5 rounded border cursor-pointer transition-all ${
                    isExpanded ? 'bg-[color:var(--bg-241B15)] border-[color:var(--bd-9A7B45)] shadow-lg' : 'bg-[color:var(--bg-241B15)] border-[color:var(--bd-463429)] hover:border-[color:var(--bd-756451)]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg sm:text-xl font-bold font-heading text-[color:var(--fg-E6D7B9)]">{ev.year}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border font-carto ${DOMAIN_STYLES[ev.domain]}`}>
                        {ev.domain}
                      </span>
                    </div>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-[color:var(--fg-9A7B45)]" /> : <ChevronDown className="w-4 h-4 text-[color:var(--fg-9A7B45)]" />}
                  </div>
                  <h3 className="text-sm font-bold text-[color:var(--fg-E6D7B9)] font-heading mb-1">{ev.figure}</h3>
                  {isExpanded && <p className="text-xs sm:text-sm text-[color:var(--fg-CDBB96)] font-serif leading-relaxed mt-2">{ev.event}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
