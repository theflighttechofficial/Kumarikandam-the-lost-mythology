import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Globe2, HelpCircle, XCircle } from 'lucide-react';
import { RELATED_LOST_LANDS } from '../data/lemuriaData';

const statusMeta = {
  real: {
    label: 'Geologically Real',
    color: 'text-[#53665C]',
    border: 'border-[#53665C]/50',
    icon: CheckCircle2,
  },
  myth: {
    label: 'Unverified Myth',
    color: 'text-[#8B5E4A]',
    border: 'border-[#8B5E4A]/50',
    icon: XCircle,
  },
  contested: {
    label: 'Contested',
    color: 'text-[#9A7B45]',
    border: 'border-[#9A7B45]/50',
    icon: HelpCircle,
  },
} as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] as const },
  },
};

export function RelatedLostLands() {
  const [filter, setFilter] = useState<'all' | 'real' | 'myth'>('all');

  const filteredLands = RELATED_LOST_LANDS.filter((land) => {
    if (filter === 'all') return true;
    if (filter === 'real') return land.status === 'real';
    return land.status === 'myth';
  });

  return (
    <section id="related-lands" className="py-20 bg-[#1A1511] border-b border-[#463429] relative overflow-hidden">
      <div className="absolute inset-0 bg-carto-grid opacity-15 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-carto font-semibold tracking-widest uppercase text-[#9A7B45] mb-2 px-3 py-1 rounded bg-[#2B211A] border border-[#756451]/50">
              <Globe2 className="w-3.5 h-3.5 text-[#9A7B45]" />
              <span>Comparative Cartography · Sunken Lands Worldwide</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">
              Other "Lost Lands": Real vs. Mythical
            </h2>
            <p className="mt-2 text-base text-[#CDBB96] font-serif leading-relaxed">
              Lemuria and Kumari Kandam are not the only "sunken land" narratives in human history. Some, like Atlantis and Mu, are unverifiable literary or fabricated inventions. Others, like Zealandia and Doggerland, are rigorously documented geological and archaeological facts. Comparing them clarifies exactly where Lemuria sits on that spectrum.
            </p>
          </div>

          {/* Status Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#241B15] p-1.5 rounded border border-[#463429] font-carto shrink-0">
            {(
              [
                { id: 'all', label: 'All Lands' },
                { id: 'real', label: 'Geologically Real' },
                { id: 'myth', label: 'Unverified Myth' },
              ] as const
            ).map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFilter(opt.id)}
                className={`px-3 py-1 text-xs uppercase tracking-wider font-bold rounded transition-colors ${
                  filter === opt.id
                    ? 'bg-[#2B211A] text-[#FAF6EE] border border-[#9A7B45] shadow-sm'
                    : 'text-[#CDBB96]/70 hover:text-[#E6D7B9]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid with staggered reveal */}
        <motion.div
          key={filter}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filteredLands.map((land) => {
            const meta = statusMeta[land.status];
            const StatusIcon = meta.icon;
            return (
              <motion.div
                key={land.id}
                variants={cardVariants}
                className={`hover-lift p-5 rounded bg-[#241B15] border ${meta.border} space-y-3 relative`}
              >
                <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
                <div className="flex items-center justify-between">
                  <span className={`flex items-center gap-1.5 text-[10px] font-carto font-bold uppercase tracking-widest ${meta.color}`}>
                    <StatusIcon className="w-3.5 h-3.5" />
                    {meta.label}
                  </span>
                  <span className="text-[10px] font-mono text-[#CDBB96]/60">{land.era}</span>
                </div>

                <h3 className="text-base font-bold text-[#E6D7B9] font-heading">{land.name}</h3>
                <div className="text-xs text-[#9A7B45] font-serif">{land.origin}</div>

                <p className="text-xs text-[#CDBB96]/85 leading-relaxed font-serif">{land.description}</p>

                <div className="pt-2 border-t border-[#463429] space-y-1.5">
                  <span className="text-[10px] font-carto font-bold uppercase tracking-wider text-[#9A7B45]">
                    Key Figure: <span className="text-[#CDBB96] font-serif normal-case tracking-normal">{land.keyFigure}</span>
                  </span>
                  <p className="text-[11px] text-[#CDBB96]/75 leading-relaxed font-serif italic">
                    {land.verdict}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
