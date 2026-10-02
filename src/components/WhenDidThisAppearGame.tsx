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
    <section id="when-did-this-appear-game" className="py-20 bg-[color:var(--section-15110D)] border-b border-[color:var(--bd-463429)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between flex-wrap gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[color:var(--fg-9A7B45)] mb-2">
              <CalendarClock className="w-4 h-4" />
              <span>When Did This Idea Appear?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[color:var(--fg-E6D7B9)] tracking-wide">Place It On the Timeline</h2>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[color:var(--bg-241B15)] border border-[color:var(--bd-463429)] text-xs font-mono text-[color:var(--fg-E6D7B9)]">
            <Trophy className="w-3.5 h-3.5 text-[color:var(--fg-9A7B45)]" /> Score: {score}/{WHEN_DID_THIS_APPEAR_QUESTIONS.length}
          </div>
        </div>

        <div className="p-6 rounded border border-[color:var(--bd-463429)] bg-[color:var(--bg-241B15)]">
          <p className="text-lg font-serif text-[color:var(--fg-E6D7B9)] mb-6 leading-relaxed">{q.statement}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
            {q.periodOptions.map((opt) => {
              const isCorrect = opt === q.correctPeriod;
              const isSelected = opt === selected;
              let style = 'bg-[color:var(--bg-1E1914)] border-[color:var(--bd-463429)] text-[color:var(--fg-CDBB96)]';
              if (selected) {
                if (isCorrect) style = 'bg-[color:var(--bg-1E1914)] border-[color:var(--bd-53665C)] text-[color:var(--fg-53665C)]';
                else if (isSelected) style = 'bg-[color:var(--bg-1E1914)] border-[color:var(--bd-8B5E4A)] text-[color:var(--fg-8B5E4A)]';
              }
              return (
                <button key={opt} onClick={() => handleAnswer(opt)} disabled={!!selected} className={`px-4 py-2.5 text-sm text-left rounded border transition-colors ${style}`}>
                  {opt}
                </button>
              );
            })}
          </div>

          {selected && (
            <div className="p-4 rounded bg-[color:var(--bg-1E1914)] border border-[color:var(--bd-463429)] text-xs font-serif text-[color:var(--fg-CDBB96)] leading-relaxed mb-4">
              <strong className="text-[color:var(--fg-9A7B45)]">Explanation: </strong>{q.explanation}
            </div>
          )}

          <button
            onClick={next}
            disabled={!selected}
            className="px-5 py-2.5 text-xs font-bold font-carto uppercase tracking-wider rounded bg-[color:var(--bg-2B211A)] hover:bg-[color:var(--bg-342820)] disabled:opacity-40 text-[color:var(--fg-FAF6EE)] border border-[color:var(--bd-9A7B45)]"
          >
            Next Question
          </button>
        </div>
      </div>
    </section>
  );
}
