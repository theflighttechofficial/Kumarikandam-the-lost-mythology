import { EVIDENCE_MATRIX, EVIDENCE_MATRIX_DIMENSIONS } from '../data/evidenceMatrix';
import { Grid3x3 } from 'lucide-react';

function Bar({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={`w-3.5 h-2 rounded-sm ${n <= value ? 'bg-[#9A7B45]' : 'bg-[#3E3025]'}`} />
      ))}
    </div>
  );
}

export function EvidenceMatrix() {
  return (
    <section id="evidence-matrix" className="py-20 bg-[#1A1511] border-b border-[#463429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <Grid3x3 className="w-4 h-4" />
            <span>Evidence Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Comparative Evidence Strength</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            Each bar segment shows relative evidence intensity (1-5) per category — not an aggregate "truth score."
          </p>
        </div>

        <div className="overflow-x-auto rounded border border-[#463429]">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-[#241B15] border-b border-[#463429]">
                <th className="p-3 text-xs font-carto uppercase tracking-wider text-[#9A7B45]">Entity</th>
                {EVIDENCE_MATRIX_DIMENSIONS.map((d) => (
                  <th key={d.key} className="p-3 text-xs font-carto uppercase tracking-wider text-[#9A7B45]">{d.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {EVIDENCE_MATRIX.map((row) => (
                <tr key={row.name} className="border-b border-[#463429] hover:bg-[#241B15]/60 group">
                  <td className="p-3 align-top">
                    <span className="text-sm font-bold font-heading text-[#E6D7B9]">{row.name}</span>
                    <p className="text-[11px] font-serif text-[#CDBB96]/70 mt-1 max-w-xs leading-relaxed">{row.note}</p>
                  </td>
                  {EVIDENCE_MATRIX_DIMENSIONS.map((d) => (
                    <td key={d.key} className="p-3 align-top"><Bar value={row[d.key]} /></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
