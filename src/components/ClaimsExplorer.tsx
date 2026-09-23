import { useMemo, useState } from 'react';
import { Filter, Gavel } from 'lucide-react';
import { CLAIMS } from '../data/claims';
import type { Claim } from '../data/claims';
import { EvidenceLens, type EvidenceLensTag } from './EvidenceLens';

const CATEGORY_TO_LENS: Record<Claim['category'], EvidenceLensTag> = {
  literary: 'tradition',
  geological: 'science',
  historiographical: 'interpretation',
  popular: 'unknown',
  linguistic: 'interpretation',
};

function deriveLens(claim: Claim): EvidenceLensTag {
  if (claim.evidenceType.some((e) => /archaeolog|excavat|marine survey/i.test(e))) return 'archaeology';
  return CATEGORY_TO_LENS[claim.category];
}

const STATUS_STYLES: Record<Claim['status'], string> = {
  established: 'bg-[#1E1914] text-[#53665C] border-[#53665C]/60',
  contested: 'bg-[#1E1914] text-[#9A7B45] border-[#9A7B45]/60',
  unsupported: 'bg-[#1E1914] text-[#8B5E4A] border-[#8B5E4A]/60',
  legendary_tradition: 'bg-[#1E1914] text-[#CDBB96] border-[#756451]/60',
};

const STATUS_LABEL: Record<Claim['status'], string> = {
  established: 'Established',
  contested: 'Contested',
  unsupported: 'Unsupported',
  legendary_tradition: 'Legendary Tradition',
};

const CONFIDENCE_LABEL: Record<Claim['confidence'], string> = {
  high: 'High Confidence',
  moderate: 'Moderate Confidence',
  low: 'Low Confidence',
  none: 'No Scientific Confidence',
};

const CATEGORIES: { id: Claim['category'] | 'all'; label: string }[] = [
  { id: 'all', label: 'All Categories' },
  { id: 'literary', label: 'Literary' },
  { id: 'geological', label: 'Geological' },
  { id: 'historiographical', label: 'Historiographical' },
  { id: 'popular', label: 'Popular Claim' },
  { id: 'linguistic', label: 'Linguistic' },
];

export function ClaimsExplorer() {
  const [category, setCategory] = useState<Claim['category'] | 'all'>('all');
  const [status, setStatus] = useState<Claim['status'] | 'all'>('all');
  const [lens, setLens] = useState<EvidenceLensTag | 'all'>('all');

  const filtered = useMemo(
    () =>
      CLAIMS.filter(
        (c) =>
          (category === 'all' || c.category === category) &&
          (status === 'all' || c.status === status) &&
          (lens === 'all' || deriveLens(c) === lens)
      ),
    [category, status, lens]
  );

  return (
    <section id="claims-explorer" className="py-20 bg-[#1A1511] border-b border-[#463429] relative">
      <div className="absolute inset-0 bg-carto-grid opacity-15 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <Gavel className="w-4 h-4" />
            <span>Register of Claims</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Claims Explorer</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            Every assertion made about Kumari Kandam and Lemuria, sorted by how well it holds up — from established
            science to unsupported popular claims.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 bg-[#241B15] p-1.5 rounded border border-[#463429] font-carto">
            <span className="text-[11px] text-[#9A7B45] px-2 flex items-center gap-1 uppercase font-bold tracking-wider">
              <Filter className="w-3 h-3" /> Category:
            </span>
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`px-3 py-1 text-xs uppercase tracking-wider font-bold rounded transition-colors ${
                  category === c.id ? 'bg-[#2B211A] text-[#FAF6EE] border border-[#9A7B45]' : 'text-[#CDBB96]/70 hover:text-[#E6D7B9]'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-1.5 bg-[#241B15] p-1.5 rounded border border-[#463429] font-carto">
            <span className="text-[11px] text-[#9A7B45] px-2 flex items-center gap-1 uppercase font-bold tracking-wider">
              Status:
            </span>
            {(['all', 'established', 'contested', 'unsupported', 'legendary_tradition'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={`px-3 py-1 text-xs uppercase tracking-wider font-bold rounded transition-colors ${
                  status === s ? 'bg-[#2B211A] text-[#FAF6EE] border border-[#9A7B45]' : 'text-[#CDBB96]/70 hover:text-[#E6D7B9]'
                }`}
              >
                {s === 'all' ? 'All' : STATUS_LABEL[s]}
              </button>
            ))}
          </div>
          <EvidenceLens active={lens} onChange={setLens} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((c) => (
            <div key={c.id} className="hover-lift p-5 rounded border border-[#463429] bg-[#241B15]">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border font-carto ${STATUS_STYLES[c.status]}`}>
                  {STATUS_LABEL[c.status]}
                </span>
                <span className="text-[10px] font-carto uppercase tracking-wider text-[#9A7B45]">{CONFIDENCE_LABEL[c.confidence]}</span>
              </div>
              <h3 className="text-base font-bold text-[#E6D7B9] font-heading mb-2 leading-snug">{c.claim}</h3>
              {c.description && <p className="text-xs sm:text-sm text-[#CDBB96] font-serif leading-relaxed mb-3">{c.description}</p>}
              <div className="flex flex-wrap gap-1.5">
                {c.evidenceType.map((e) => (
                  <span key={e} className="px-2 py-0.5 rounded text-[10px] bg-[#1E1914] border border-[#463429] text-[#CDBB96]/80 font-carto">
                    {e}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
