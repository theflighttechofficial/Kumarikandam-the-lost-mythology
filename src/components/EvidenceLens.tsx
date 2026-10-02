export type EvidenceLensTag = 'tradition' | 'science' | 'archaeology' | 'interpretation' | 'unknown';

export const EVIDENCE_LENS_OPTIONS: { id: EvidenceLensTag; label: string }[] = [
  { id: 'tradition', label: 'Tradition' },
  { id: 'science', label: 'Science' },
  { id: 'archaeology', label: 'Archaeology' },
  { id: 'interpretation', label: 'Interpretation' },
  { id: 'unknown', label: 'Unknown' },
];

interface EvidenceLensProps {
  active: EvidenceLensTag | 'all';
  onChange: (tag: EvidenceLensTag | 'all') => void;
}

export function EvidenceLens({ active, onChange }: EvidenceLensProps) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 bg-[color:var(--bg-241B15)] p-1.5 rounded border border-[color:var(--bd-463429)] font-carto">
      <span className="text-[11px] text-[color:var(--fg-9A7B45)] px-2 uppercase font-bold tracking-wider">Lens:</span>
      <button
        onClick={() => onChange('all')}
        className={`px-3 py-1 text-xs uppercase tracking-wider font-bold rounded transition-colors ${
          active === 'all' ? 'bg-[color:var(--bg-2B211A)] text-[color:var(--fg-FAF6EE)] border border-[color:var(--bd-9A7B45)]' : 'text-[color:var(--fg-CDBB96)]/85 hover:text-[color:var(--fg-E6D7B9)]'
        }`}
      >
        All
      </button>
      {EVIDENCE_LENS_OPTIONS.map((opt) => (
        <button
          key={opt.id}
          onClick={() => onChange(opt.id)}
          className={`px-3 py-1 text-xs uppercase tracking-wider font-bold rounded transition-colors flex items-center gap-1 ${
            active === opt.id ? 'bg-[color:var(--bg-2B211A)] text-[color:var(--fg-FAF6EE)] border border-[color:var(--bd-9A7B45)]' : 'text-[color:var(--fg-CDBB96)]/85 hover:text-[color:var(--fg-E6D7B9)]'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
