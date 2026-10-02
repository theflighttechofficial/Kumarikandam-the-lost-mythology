import { useState } from 'react';
import { Trophy, UserSearch } from 'lucide-react';
import { WHO_SAID_THIS_QUESTIONS } from '../data/whoSaidThisGame';

export function WhoSaidThisGame() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const q = WHO_SAID_THIS_QUESTIONS[index];

  const handleAnswer = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt === q.correctSpeaker) setScore((s) => s + 1);
  };

  const next = () => {
    setSelected(null);
    setIndex((i) => (i + 1) % WHO_SAID_THIS_QUESTIONS.length);
  };

  return (
    <section id="who-said-this-game" className="py-20 bg-[color:var(--section-1A1511)] border-b border-[color:var(--bd-463429)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between flex-wrap gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[color:var(--fg-9A7B45)] mb-2">
              <UserSearch className="w-4 h-4" />
              <span>Who Said This?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[color:var(--fg-E6D7B9)] tracking-wide">Identify the Speaker</h2>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[color:var(--bg-241B15)] border border-[color:var(--bd-463429)] text-xs font-mono text-[color:var(--fg-E6D7B9)]">
            <Trophy className="w-3.5 h-3.5 text-[color:var(--fg-9A7B45)]" /> Score: {score}/{WHO_SAID_THIS_QUESTIONS.length}
          </div>
        </div>

        <div className="p-6 rounded border border-[color:var(--bd-463429)] bg-[color:var(--bg-241B15)]">
          <blockquote className="text-lg font-serif italic text-[color:var(--fg-E6D7B9)] mb-6 leading-relaxed">"{q.quotation}"</blockquote>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
            {q.options.map((opt) => {
              const isCorrect = opt === q.correctSpeaker;
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
              <strong className="text-[color:var(--fg-9A7B45)]">Context: </strong>{q.context}
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
