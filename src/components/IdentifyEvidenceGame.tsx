import { useState } from 'react';
import { Puzzle, RotateCcw } from 'lucide-react';
import { EVIDENCE_GAME_PROMPTS, type EvidenceCategory } from '../data/evidenceGame';

const CATEGORIES: EvidenceCategory[] = ['Literary', 'Archaeological', 'Geological', 'Linguistic'];

export function IdentifyEvidenceGame() {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<EvidenceCategory | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);

  const current = EVIDENCE_GAME_PROMPTS[idx];

  const handlePick = (cat: EvidenceCategory) => {
    if (picked) return;
    setPicked(cat);
    setAnswered((a) => a + 1);
    if (cat === current.correctCategory) setScore((s) => s + 1);
  };

  const handleNext = () => {
    setPicked(null);
    setIdx((i) => (i + 1) % EVIDENCE_GAME_PROMPTS.length);
  };

  const handleReset = () => {
    setPicked(null);
    setIdx(0);
    setScore(0);
    setAnswered(0);
  };

  return (
    <section id="identify-evidence-game" className="py-20 bg-[#1A1511] border-b border-[#463429]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
              <Puzzle className="w-4 h-4" />
              <span>Field Exercise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Identify The Evidence</h2>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono text-[#9A7B45]">Score: {score}/{answered}</span>
            <button onClick={handleReset} className="block mt-1 text-[10px] text-[#CDBB96]/60 hover:text-[#E6D7B9] flex items-center gap-1">
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          </div>
        </div>

        <div className="p-6 rounded border border-[#463429] bg-[#241B15]">
          <p className="text-sm font-serif text-[#E6D7B9] leading-relaxed mb-5">{current.prompt}</p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {CATEGORIES.map((cat) => {
              let cls = 'bg-[#1E1914] border-[#463429] text-[#CDBB96] hover:border-[#9A7B45]';
              if (picked) {
                if (cat === current.correctCategory) cls = 'bg-[#153422] border-[#22C55E] text-[#4ADE80]';
                else if (cat === picked) cls = 'bg-[#3C1A1A] border-[#EF4444] text-[#F87171]';
              }
              return (
                <button key={cat} disabled={!!picked} onClick={() => handlePick(cat)} className={`px-3 py-2.5 rounded border text-xs font-carto uppercase tracking-wider transition-colors ${cls}`}>
                  {cat}
                </button>
              );
            })}
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
