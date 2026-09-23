import { useMemo, useState } from 'react';
import { CheckCircle2, ClipboardList, XCircle } from 'lucide-react';
import { PROOF_REQUIREMENTS } from '../data/proofRequirements';

const CATEGORIES = ['Geological', 'Archaeological', 'Paleoenvironmental', 'Chronological'] as const;

export function ProofRequirementsPage() {
  const [filter, setFilter] = useState<typeof CATEGORIES[number] | 'All'>('All');

  const items = useMemo(
    () => PROOF_REQUIREMENTS.filter((p) => filter === 'All' || p.category === filter),
    [filter]
  );

  const observedCount = PROOF_REQUIREMENTS.filter((p) => p.currentlyObserved).length;

  return (
    <section id="proof-requirements" className="py-20 bg-[#1E1914] border-b border-[#463429]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <ClipboardList className="w-4 h-4" />
            <span>How Would We Prove Kumari Kandam?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Expected Evidence Checklist</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            If a literal, continent-scale Kumari Kandam existed and sank within human memory, what would we expect to find today? Below is a checklist of what current research has and has not observed.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {(['All', ...CATEGORIES] as const).map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3 py-1.5 text-xs font-carto uppercase tracking-wider rounded border transition-colors ${
                filter === c ? 'bg-[#2B211A] text-[#FAF6EE] border-[#9A7B45]' : 'bg-[#241B15] text-[#CDBB96]/70 border-[#463429]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="space-y-2 mb-8">
          {items.map((p) => (
            <div key={p.id} className="p-3.5 rounded border border-[#463429] bg-[#241B15] flex items-start gap-3">
              {p.currentlyObserved ? (
                <CheckCircle2 className="w-4 h-4 text-[#53665C] shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-4 h-4 text-[#8B5E4A] shrink-0 mt-0.5" />
              )}
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-carto uppercase tracking-wider text-[#9A7B45]">{p.category}</span>
                  <span className="text-sm font-bold font-heading text-[#E6D7B9]">{p.requirement}</span>
                </div>
                <p className="text-xs font-serif text-[#CDBB96]/80 mt-1 leading-relaxed">{p.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-5 rounded border border-[#9A7B45]/50 bg-[#241B15]">
          <h3 className="text-sm font-bold font-heading text-[#E6D7B9] mb-2">Do current observations establish all of these?</h3>
          <p className="text-xs sm:text-sm font-serif text-[#CDBB96] leading-relaxed">
            No. Of the {PROOF_REQUIREMENTS.length} expected lines of evidence for a literal, continent-scale, human-memory-era Kumari Kandam,
            only {observedCount} are currently observed - and even those (like isolated zircon and gravity signals) point to a small, ancient
            microcontinental fragment (Mauritia) rather than the giant sunken civilization described in popular narratives. This does not mean
            the literary or cultural tradition is without value - it means the specific, literal geological and archaeological claim remains unsupported
            by current evidence.
          </p>
        </div>
      </div>
    </section>
  );
}
