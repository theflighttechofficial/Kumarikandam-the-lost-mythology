export type EvidenceLensTag = 'tradition' | 'science' | 'archaeology' | 'interpretation' | 'unknown';

export const EVIDENCE_LENS_OPTIONS: { id: EvidenceLensTag; label: string; emoji: string }[] = [
  { id: 'tradition', label: 'Tradition', emoji: '📜' },
  { id: 'science', label: 'Science', emoji: '🔬' },
  { id: 'archaeology', label: 'Archaeology', emoji: '🏺' },
  { id: 'interpretation', label: 'Interpretation', emoji: '🧭' },
  { id: 'unknown', label: 'Unknown', emoji: '❓' },
];

interface EvidenceLensProps {
  active: EvidenceLensTag | 'all';
  onChange: (tag: EvidenceLensTag | 'all') => void;
}

export function EvidenceLens({ active, onChange }: EvidenceLensProps) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 bg-[#241B15] p-1.5 rounded border border-[#463429] font-carto">
      <span className="text-[11px] text-[#9A7B45] px-2 uppercase font-bold tracking-wider">Lens:</span>
      <button
        onClick={() => onChange('all')}
        className={`px-3 py-1 text-xs uppercase tracking-wider font-bold rounded transition-colors ${
          active === 'all' ? 'bg-[#2B211A] text-[#FAF6EE] border border-[#9A7B45]' : 'text-[#CDBB96]/70 hover:text-[#E6D7B9]'
        }`}
      >
        All
      </button>
      {EVIDENCE_LENS_OPTIONS.map((opt) => (
        <button
          key={opt.id}
          onClick={() => onChange(opt.id)}
          className={`px-3 py-1 text-xs uppercase tracking-wider font-bold rounded transition-colors flex items-center gap-1 ${
            active === opt.id ? 'bg-[#2B211A] text-[#FAF6EE] border border-[#9A7B45]' : 'text-[#CDBB96]/70 hover:text-[#E6D7B9]'
          }`}
        >
          <span>{opt.emoji}</span> {opt.label}
        </button>
      ))}
    </div>
  );
}
