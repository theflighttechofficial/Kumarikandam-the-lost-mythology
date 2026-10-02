import { useState } from 'react';
import { Scale } from 'lucide-react';
import { ARGUMENT_PAIRS } from '../data/argumentPairs';

function ArgumentColumn({ label, side, accent }: { label: string; side: { position: string; evidence: string[]; sources: string[]; counterarguments: string[] }; accent: string }) {
  return (
    <div className="p-4 rounded border border-[color:var(--bd-463429)] bg-[color:var(--bg-241B15)]">
      <div className={`text-xs font-carto uppercase tracking-wider mb-2 ${accent}`}>{label}</div>
      <p className="text-sm font-bold font-heading text-[color:var(--fg-E6D7B9)] mb-3">{side.position}</p>
      <div className="mb-3">
        <div className="text-[10px] font-carto uppercase tracking-wider text-[color:var(--fg-9A7B45)] mb-1">Evidence</div>
        <ul className="list-disc list-inside text-xs font-serif text-[color:var(--fg-CDBB96)] space-y-0.5">{side.evidence.map((e, i) => <li key={i}>{e}</li>)}</ul>
      </div>
      <div className="mb-3">
        <div className="text-[10px] font-carto uppercase tracking-wider text-[color:var(--fg-9A7B45)] mb-1">Sources</div>
        <ul className="list-disc list-inside text-xs font-serif text-[color:var(--fg-CDBB96)] space-y-0.5">{side.sources.map((s, i) => <li key={i}>{s}</li>)}</ul>
      </div>
      <div>
        <div className="text-[10px] font-carto uppercase tracking-wider text-[color:var(--fg-8B5E4A)] mb-1">Counterarguments</div>
        <ul className="list-disc list-inside text-xs font-serif text-[color:var(--fg-CDBB96)] space-y-0.5">{side.counterarguments.map((c, i) => <li key={i}>{c}</li>)}</ul>
      </div>
    </div>
  );
}

export function ArgumentBuilder() {
  const [selectedId, setSelectedId] = useState(ARGUMENT_PAIRS[0].id);
  const pair = ARGUMENT_PAIRS.find((p) => p.id === selectedId)!;

  return (
    <section id="argument-builder" className="py-20 bg-[color:var(--section-1E1914)] border-b border-[color:var(--bd-463429)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[color:var(--fg-9A7B45)] mb-2">
            <Scale className="w-4 h-4" />
            <span>Argument Builder</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[color:var(--fg-E6D7B9)] tracking-wide">Weigh Both Sides</h2>
          <p className="mt-2 text-base text-[color:var(--fg-CDBB96)] font-serif max-w-2xl leading-relaxed">
            Pick a contested question and compare both sides' evidence, sources, and counterarguments side by side.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {ARGUMENT_PAIRS.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedId(p.id)}
              className={`px-3 py-2 text-xs font-carto uppercase tracking-wider rounded border transition-colors ${
                selectedId === p.id ? 'bg-[color:var(--bg-2B211A)] text-[color:var(--fg-FAF6EE)] border-[color:var(--bd-9A7B45)]' : 'bg-[color:var(--bg-241B15)] text-[color:var(--fg-CDBB96)]/85 border-[color:var(--bd-463429)]'
              }`}
            >
              {p.question}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <ArgumentColumn label="Argument A" side={pair.argumentA} accent="text-[color:var(--fg-9A7B45)]" />
          <ArgumentColumn label="Argument B" side={pair.argumentB} accent="text-[color:var(--fg-53665C)]" />
        </div>

        <div className="p-4 rounded border border-[color:var(--bd-463429)] bg-[color:var(--bg-241B15)]">
          <div className="text-[10px] font-carto uppercase tracking-wider text-[color:var(--fg-CDBB96)]/85 mb-1">Unresolved Questions</div>
          <ul className="list-disc list-inside text-sm font-serif text-[color:var(--fg-CDBB96)] space-y-1">
            {pair.unresolvedQuestions.map((q, i) => <li key={i}>{q}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
