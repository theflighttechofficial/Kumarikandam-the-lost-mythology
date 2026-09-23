import { CheckCircle2, Scale, XCircle } from 'lucide-react';
import { EVIDENCE } from '../data/evidence';
import type { Evidence } from '../data/evidence';

const DOMAIN_LABEL: Record<Evidence['domain'], string> = {
  literary_tradition: 'Literary Tradition',
  geological_fragments: 'Geological Fragments',
  sea_level_history: 'Sea-Level History',
  linguistics: 'Linguistics',
  popular_continent_claim: 'The Popular Continent Claim',
};

const DOMAIN_ORDER: Evidence['domain'][] = [
  'literary_tradition',
  'geological_fragments',
  'sea_level_history',
  'popular_continent_claim',
  'linguistics',
];

const STRENGTH_STYLES: Record<Evidence['strength'], string> = {
  strong: 'text-[#53665C] border-[#53665C]/60',
  moderate: 'text-[#9A7B45] border-[#9A7B45]/60',
  weak: 'text-[#8B5E4A] border-[#8B5E4A]/60',
  none: 'text-[#8B5E4A] border-[#8B5E4A]/60',
};

export function EvidenceExplorer() {
  const grouped = DOMAIN_ORDER.map((domain) => ({
    domain,
    items: EVIDENCE.filter((e) => e.domain === domain),
  })).filter((g) => g.items.length > 0);

  return (
    <section id="evidence-explorer" className="py-20 bg-[#140F0C] border-b border-[#463429] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <Scale className="w-4 h-4" />
            <span>Weighing the Evidence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Evidence Explorer</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            For each piece of evidence: what it genuinely supports, versus what it is often wrongly used to "prove."
            Evidence for literary tradition, geological fragments, and sea-level history is real — evidence for a
            giant sunken continent is not.
          </p>
        </div>

        <div className="space-y-10">
          {grouped.map((g) => (
            <div key={g.domain}>
              <h3 className="text-sm font-carto uppercase tracking-widest text-[#9A7B45] font-bold mb-4 pb-2 border-b border-[#463429]">
                {DOMAIN_LABEL[g.domain]}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {g.items.map((e) => (
                  <div key={e.id} className="hover-lift p-5 rounded border border-[#463429] bg-[#1A1511]">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h4 className="text-base font-bold text-[#E6D7B9] font-heading leading-snug">{e.title}</h4>
                      <span className={`shrink-0 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border font-carto ${STRENGTH_STYLES[e.strength]}`}>
                        {e.strength}
                      </span>
                    </div>
                    <div className="space-y-2 mb-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#53665C] shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-[#CDBB96] font-serif leading-relaxed">
                          <span className="text-[#53665C] font-bold uppercase text-[10px] font-carto mr-1">Supports:</span>
                          {e.supports}
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-[#8B5E4A] shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-[#CDBB96] font-serif leading-relaxed">
                          <span className="text-[#8B5E4A] font-bold uppercase text-[10px] font-carto mr-1">Does not prove:</span>
                          {e.doesNotProve}
                        </p>
                      </div>
                    </div>
                    <p className="text-[10px] text-[#9A7B45]/80 font-carto uppercase tracking-wider">Source: {e.source}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
