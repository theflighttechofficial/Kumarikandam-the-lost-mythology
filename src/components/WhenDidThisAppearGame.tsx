import { useState } from 'react';
import { CalendarClock, Trophy } from 'lucide-react';
import { WHEN_DID_THIS_APPEAR_QUESTIONS } from '../data/whenDidThisAppearGame';

export function WhenDidThisAppearGame() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const q = WHEN_DID_THIS_APPEAR_QUESTIONS[index];

  const handleAnswer = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt === q.correctPeriod) setScore((s) => s + 1);
  };

  const next = () => {
    setSelected(null);
    setIndex((i) => (i + 1) % WHEN_DID_THIS_APPEAR_QUESTIONS.length);
  };

  return (
    <section id="when-did-this-appear-game" className="py-20 bg-[#15110D] border-b border-[#463429]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between flex-wrap gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
              <CalendarClock className="w-4 h-4" />
              <span>When Did This Idea Appear?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Place It On the Timeline</h2>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#241B15] border border-[#463429] text-xs font-mono text-[#E6D7B9]">
            <Trophy className="w-3.5 h-3.5 text-[#9A7B45]" /> Score: {score}/{WHEN_DID_THIS_APPEAR_QUESTIONS.length}
          </div>
        </div>

        <div className="p-6 rounded border border-[#463429] bg-[#241B15]">
          <p className="text-lg font-serif text-[#E6D7B9] mb-6 leading-relaxed">{q.statement}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
            {q.periodOptions.map((opt) => {
              const isCorrect = opt === q.correctPeriod;
              const isSelected = opt === selected;
              let style = 'bg-[#1E1914] border-[#463429] text-[#CDBB96]';
              if (selected) {
                if (isCorrect) style = 'bg-[#1E1914] border-[#53665C] text-[#53665C]';
                else if (isSelected) style = 'bg-[#1E1914] border-[#8B5E4A] text-[#8B5E4A]';
              }
              return (
                <button key={opt} onClick={() => handleAnswer(opt)} disabled={!!selected} className={`px-4 py-2.5 text-sm text-left rounded border transition-colors ${style}`}>
                  {opt}
                </button>
              );
            })}
          </div>

          {selected && (
            <div className="p-4 rounded bg-[#1E1914] border border-[#463429] text-xs font-serif text-[#CDBB96] leading-relaxed mb-4">
              <strong className="text-[#9A7B45]">Explanation: </strong>{q.explanation}
            </div>
          )}

          <button
            onClick={next}
            disabled={!selected}
            className="px-5 py-2.5 text-xs font-bold font-carto uppercase tracking-wider rounded bg-[#2B211A] hover:bg-[#342820] disabled:opacity-40 text-[#FAF6EE] border border-[#9A7B45]"
          >
            Next Question
          </button>
        </div>
      </div>
    </section>
  );
}
