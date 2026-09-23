import { BookOpen, Hammer, Mountain, Sparkles } from 'lucide-react';
import { POOMPUHAR } from '../data/poompuhar';

const COLUMNS = [
  { key: 'literature' as const, title: 'Literature', icon: BookOpen, color: '#9A7B45' },
  { key: 'archaeology' as const, title: 'Archaeology', icon: Hammer, color: '#53665C' },
  { key: 'geology' as const, title: 'Geology', icon: Mountain, color: '#8B5E4A' },
  { key: 'speculation' as const, title: 'Speculation', icon: Sparkles, color: '#756451' },
];

export function PoompuharModule() {
  return (
    <section id="poompuhar-module" className="py-20 bg-[#1A1511] border-b border-[#463429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <span>Poompuhar Dossier</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">
            Poompuhar: What Do We Actually Know?
          </h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            {POOMPUHAR.name} ({POOMPUHAR.alternativeNames.join(', ')}) — {POOMPUHAR.region}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {COLUMNS.map(({ key, title, icon: Icon, color }) => (
            <div key={key} className="rounded border border-[#463429] bg-[#241B15] overflow-hidden flex flex-col">
              <div className="p-3 border-b border-[#463429] flex items-center gap-2" style={{ background: '#1E1914' }}>
                <Icon className="w-4 h-4" style={{ color }} />
                <span className="text-sm font-heading font-bold text-[#E6D7B9]">{title}</span>
              </div>
              <div className="p-4 space-y-3 flex-1">
                {POOMPUHAR[key].map((item, i) => (
                  <div key={i}>
                    <span className="text-xs font-carto font-bold" style={{ color }}>{item.point}</span>
                    <p className="text-xs font-serif text-[#CDBB96] leading-relaxed mt-0.5">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
