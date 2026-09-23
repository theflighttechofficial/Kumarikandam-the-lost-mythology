import { Check, Mountain, X } from 'lucide-react';
import { GEOLOGY } from '../data/geology';

const TYPE_STYLES: Record<string, string> = {
  supercontinent: 'text-[#53665C] border-[#53665C]/60',
  microcontinent: 'text-[#9A7B45] border-[#9A7B45]/60',
  plateau: 'text-[#8B5E4A] border-[#8B5E4A]/60',
  'island group': 'text-[#CDBB96] border-[#756451]/60',
  'rift zone': 'text-[#53665C] border-[#53665C]/60',
};

const COMPARISON_ROWS: { aspect: string; mauritia: string; kumariKandam: string }[] = [
  { aspect: 'Scientific status', mauritia: 'Confirmed by peer-reviewed zircon dating (2013)', kumariKandam: 'No peer-reviewed geological evidence' },
  { aspect: 'Size', mauritia: 'Small fragment (~microcontinent, part of a plateau)', kumariKandam: 'Described as a vast continent spanning to Antarctica/Madagascar' },
  { aspect: 'Timing', mauritia: 'Submerged ~60–83 million years ago', kumariKandam: 'Claimed to exist during human/Tamil civilization (thousands of years ago)' },
  { aspect: 'Human presence', mauritia: 'Tens of millions of years before any hominins existed', kumariKandam: 'Claimed to host an advanced Tamil civilization' },
  { aspect: 'Cause of submergence', mauritia: 'Slow tectonic rifting and thermal subsidence', kumariKandam: 'Claimed sudden catastrophic deluge' },
  { aspect: 'Archaeological remains', mauritia: 'None expected or claimed (too old, too deep)', kumariKandam: 'Claimed cities and civilization; none ever found' },
];

export function GeologyExplorer() {
  return (
    <section id="geology-explorer" className="py-20 bg-[#1A1511] border-b border-[#463429] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <Mountain className="w-4 h-4" />
            <span>What The Rocks Actually Say</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Geology Explorer</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            The real geological features of the western Indian Ocean — supercontinents, microcontinents, and
            plateaus — established by peer-reviewed science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {GEOLOGY.map((g) => (
            <div key={g.id} className="hover-lift p-5 rounded border border-[#463429] bg-[#241B15]">
              <span className={`inline-block mb-2 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border font-carto ${TYPE_STYLES[g.type] ?? ''}`}>
                {g.type}
              </span>
              <h3 className="text-base font-bold text-[#E6D7B9] font-heading mb-1.5">{g.name}</h3>
              {g.age && <p className="text-xs text-[#9A7B45] font-serif italic mb-1">{g.age}</p>}
              {g.location && <p className="text-xs text-[#CDBB96]/70 font-serif mb-2">{g.location}</p>}
              <p className="text-xs sm:text-sm text-[#CDBB96] font-serif leading-relaxed">{g.relevance}</p>
            </div>
          ))}
        </div>

        {/* Mauritia Deep Dive */}
        <div id="mauritia-deep-dive" className="p-6 sm:p-8 rounded border border-[#9A7B45]/60 bg-[#241B15]">
          <h3 className="text-2xl font-bold font-heading text-[#E6D7B9] mb-2">Mauritia Deep Dive</h3>
          <p className="text-sm text-[#CDBB96] font-serif leading-relaxed mb-6 max-w-3xl">
            Mauritia is real. Kumari Kandam, as popularly described, is not the same thing. Here is exactly where
            they diverge.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#463429]">
                  <th className="text-left py-2 pr-4 text-[#9A7B45] font-carto uppercase tracking-wider text-[10px]">Aspect</th>
                  <th className="text-left py-2 pr-4 text-[#53665C] font-carto uppercase tracking-wider text-[10px]">Mauritia (Real Geology)</th>
                  <th className="text-left py-2 text-[#8B5E4A] font-carto uppercase tracking-wider text-[10px]">Kumari Kandam (Popular Claim)</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.aspect} className="border-b border-[#463429]/60">
                    <td className="py-3 pr-4 font-bold text-[#E6D7B9] font-heading align-top">{row.aspect}</td>
                    <td className="py-3 pr-4 text-[#CDBB96] font-serif align-top">
                      <div className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#53665C] shrink-0 mt-0.5" />
                        {row.mauritia}
                      </div>
                    </td>
                    <td className="py-3 text-[#CDBB96] font-serif align-top">
                      <div className="flex items-start gap-1.5">
                        <X className="w-3.5 h-3.5 text-[#8B5E4A] shrink-0 mt-0.5" />
                        {row.kumariKandam}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
