import { ArrowDown } from 'lucide-react';
import { IDEA_EVOLUTION_STAGES } from '../data/ideaEvolution';

export function IdeaEvolutionTimeline() {
  return (
    <section id="idea-evolution-timeline" className="py-20 bg-[color:var(--section-15110D)] border-b border-[color:var(--bd-463429)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[color:var(--fg-E6D7B9)] tracking-wide">How The Idea Changed</h2>
          <p className="mt-2 text-base text-[color:var(--fg-CDBB96)] font-serif leading-relaxed">
            From a 19th-century biogeography hypothesis to a modern internet myth — and back to scholarly reassessment.
          </p>
        </div>

        <div className="flex flex-col items-stretch">
          {IDEA_EVOLUTION_STAGES.map((s, i) => (
            <div key={s.id}>
              <div className="p-4 rounded border border-[color:var(--bd-463429)] bg-[color:var(--bg-241B15)]">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-bold font-heading text-[color:var(--fg-E6D7B9)]">{s.stage}</h3>
                  <span className="text-[10px] font-mono text-[color:var(--fg-9A7B45)]">{s.period}</span>
                </div>
                <p className="text-xs font-serif text-[color:var(--fg-CDBB96)] leading-relaxed">{s.description}</p>
              </div>
              {i < IDEA_EVOLUTION_STAGES.length - 1 && (
                <div className="flex justify-center py-1.5">
                  <ArrowDown className="w-4 h-4 text-[color:var(--fg-9A7B45)]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
