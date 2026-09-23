import { DEEP_TIME_EVENTS } from '../data/deepTimeline';
import { HUMAN_TIME_EVENTS } from '../data/humanTimeline';
import { Clock, Globe2, ScrollText } from 'lucide-react';

export function DualTimeline() {
  return (
    <section id="dual-timeline" className="py-20 bg-[#1A1511] border-b border-[#463429]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <Clock className="w-4 h-4" />
            <span>Two Clocks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">The Earth Clock vs. The Human Memory Clock</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            The Kumari Kandam discussion sits at the intersection of two very different timescales. Geological processes unfold over billions of years; human cultural memory spans thousands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="p-4 rounded border border-[#463429] bg-[#241B15] flex items-center gap-3">
            <Globe2 className="w-8 h-8 text-[#53665C] shrink-0" />
            <div>
              <div className="text-sm font-bold font-heading text-[#E6D7B9]">Earth Clock</div>
              <div className="text-xs font-serif text-[#CDBB96]/80">Billions of years - continents forming, splitting, drifting.</div>
            </div>
          </div>
          <div className="p-4 rounded border border-[#463429] bg-[#241B15] flex items-center gap-3">
            <ScrollText className="w-8 h-8 text-[#9A7B45] shrink-0" />
            <div>
              <div className="text-sm font-bold font-heading text-[#E6D7B9]">Human Memory Clock</div>
              <div className="text-xs font-serif text-[#CDBB96]/80">Thousands of years - literature, oral tradition, and written record.</div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-bold font-heading text-[#E6D7B9] mb-4 flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-[#53665C]" /> Geological Deep Timeline
          </h3>
          <div className="relative pl-4 border-l-2 border-[#53665C]/40 space-y-5">
            {DEEP_TIME_EVENTS.map((e) => (
              <div key={e.id} className="relative">
                <span className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-[#53665C] border-2 border-[#1A1511]" />
                <div className="text-[11px] font-mono text-[#53665C]">{e.timeAgo}</div>
                <div className="text-sm font-bold font-heading text-[#E6D7B9]">{e.label}</div>
                <div className="text-xs font-serif text-[#CDBB96]/80 leading-relaxed">{e.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold font-heading text-[#E6D7B9] mb-4 flex items-center gap-2">
            <ScrollText className="w-4 h-4 text-[#9A7B45]" /> Human / Literary Timeline
          </h3>
          <div className="relative pl-4 border-l-2 border-[#9A7B45]/40 space-y-5">
            {HUMAN_TIME_EVENTS.map((e) => (
              <div key={e.id} className="relative">
                <span className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-[#9A7B45] border-2 border-[#1A1511]" />
                <div className="text-[11px] font-mono text-[#9A7B45]">{e.timeAgo}</div>
                <div className="text-sm font-bold font-heading text-[#E6D7B9]">{e.label}</div>
                <div className="text-xs font-serif text-[#CDBB96]/80 leading-relaxed">{e.description}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-[11px] font-serif text-[#CDBB96]/60 max-w-2xl">
          These two timelines are shown separately, at their own scales, rather than on one shared axis - collapsing billions of years and
          thousands of years onto a single line would misrepresent both.
        </p>
      </div>
    </section>
  );
}
