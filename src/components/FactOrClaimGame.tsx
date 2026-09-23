import { useState } from 'react';
import { CheckCircle2, RotateCcw, XCircle } from 'lucide-react';
import { FACT_OR_CLAIM_ENTRIES } from '../data/factOrClaimGame';

export function FactOrClaimGame() {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<'supported' | 'not_established' | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);

  const current = FACT_OR_CLAIM_ENTRIES[idx];

  const handlePick = (verdict: 'supported' | 'not_established') => {
    if (picked) return;
    setPicked(verdict);
    setAnswered((a) => a + 1);
    if (verdict === current.verdict) setScore((s) => s + 1);
  };

  const handleNext = () => {
    setPicked(null);
    setIdx((i) => (i + 1) % FACT_OR_CLAIM_ENTRIES.length);
  };

  const handleReset = () => {
    setPicked(null);
    setIdx(0);
    setScore(0);
    setAnswered(0);
  };

  return (
    <section id="fact-or-claim-game" className="py-20 bg-[#15110D] border-b border-[#463429]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">Field Exercise</div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Fact or Claim?</h2>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono text-[#9A7B45]">Score: {score}/{answered}</span>
            <button onClick={handleReset} className="block mt-1 text-[10px] text-[#CDBB96]/60 hover:text-[#E6D7B9] flex items-center gap-1">
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          </div>
        </div>

        <div className="p-6 rounded border border-[#463429] bg-[#241B15]">
          <p className="text-sm font-serif text-[#E6D7B9] leading-relaxed mb-5">{current.statement}</p>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <button
              disabled={!!picked}
              onClick={() => handlePick('supported')}
              className={`px-3 py-3 rounded border text-xs font-carto uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                picked
                  ? current.verdict === 'supported' ? 'bg-[#153422] border-[#22C55E] text-[#4ADE80]' : picked === 'supported' ? 'bg-[#3C1A1A] border-[#EF4444] text-[#F87171]' : 'bg-[#1E1914] border-[#463429] text-[#CDBB96]/50'
                  : 'bg-[#1E1914] border-[#463429] text-[#CDBB96] hover:border-[#22C55E]'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" /> Supported
            </button>
            <button
              disabled={!!picked}
              onClick={() => handlePick('not_established')}
              className={`px-3 py-3 rounded border text-xs font-carto uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                picked
                  ? current.verdict === 'not_established' ? 'bg-[#153422] border-[#22C55E] text-[#4ADE80]' : picked === 'not_established' ? 'bg-[#3C1A1A] border-[#EF4444] text-[#F87171]' : 'bg-[#1E1914] border-[#463429] text-[#CDBB96]/50'
                  : 'bg-[#1E1914] border-[#463429] text-[#CDBB96] hover:border-[#EF4444]'
              }`}
            >
              <XCircle className="w-4 h-4" /> Not Established
            </button>
          </div>
          {picked && (
            <div className="p-3 rounded bg-[#1E1914] border border-[#463429] text-xs font-serif text-[#CDBB96] leading-relaxed mb-4">
              {current.explanation}
            </div>
          )}
          <button onClick={handleNext} className="px-5 py-2 bg-[#9A7B45] hover:bg-[#B59253] text-[#14100D] rounded text-xs font-bold uppercase tracking-wider transition-colors">
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
