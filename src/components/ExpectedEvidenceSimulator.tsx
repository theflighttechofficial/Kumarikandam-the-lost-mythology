import { useState } from 'react';
import { BarChart3 } from 'lucide-react';
import { ACTUAL_EVIDENCE, EXPECTED_EVIDENCE_DIMENSIONS, HYPOTHESES } from '../data/expectedEvidenceSimulator';

function Bar({ value, color }: { value: number; color: string }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={`w-3.5 h-2 rounded-sm ${n <= value ? color : 'bg-[#3E3025]'}`} />
      ))}
    </div>
  );
}

export function ExpectedEvidenceSimulator() {
  const [hypothesisId, setHypothesisId] = useState(HYPOTHESES[0].id);
  const hypothesis = HYPOTHESES.find((h) => h.id === hypothesisId)!;

  return (
    <section id="expected-evidence-simulator" className="py-20 bg-[#15110D] border-b border-[#463429]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <BarChart3 className="w-4 h-4" />
            <span>What Would We Expect?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Expected vs. Actual Evidence Simulator</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            Choose a hypothesis to see what evidence it predicts, then compare that prediction against what is actually observed today.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {HYPOTHESES.map((h) => (
            <button
              key={h.id}
              onClick={() => setHypothesisId(h.id)}
              className={`px-3 py-2 text-xs font-carto uppercase tracking-wider rounded border transition-colors ${
                hypothesisId === h.id ? 'bg-[#2B211A] text-[#FAF6EE] border-[#9A7B45]' : 'bg-[#241B15] text-[#CDBB96]/70 border-[#463429]'
              }`}
            >
              {h.name}
            </button>
          ))}
        </div>

        <p className="text-xs font-serif text-[#CDBB96]/80 mb-6 italic">{hypothesis.description}</p>

        <div className="overflow-x-auto rounded border border-[#463429]">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-[#241B15] border-b border-[#463429]">
                <th className="p-3 text-xs font-carto uppercase tracking-wider text-[#9A7B45]">Dimension</th>
                <th className="p-3 text-xs font-carto uppercase tracking-wider text-[#9A7B45]">Expected (under hypothesis)</th>
                <th className="p-3 text-xs font-carto uppercase tracking-wider text-[#9A7B45]">Actually Observed</th>
              </tr>
            </thead>
            <tbody>
              {EXPECTED_EVIDENCE_DIMENSIONS.map((d) => (
                <tr key={d.key} className="border-b border-[#463429]">
                  <td className="p-3 text-sm font-heading text-[#E6D7B9]">{d.label}</td>
                  <td className="p-3"><Bar value={hypothesis.expected[d.key]} color="bg-[#9A7B45]" /></td>
                  <td className="p-3"><Bar value={ACTUAL_EVIDENCE[d.key]} color="bg-[#53665C]" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-[11px] font-serif text-[#CDBB96]/60">
          Bars show relative intensity (0-5), not measured units. The comparison illustrates the gap between what each hypothesis would predict and current findings.
        </p>
      </div>
    </section>
  );
}
