import { AlertTriangle, Compass } from 'lucide-react';
import { EXPEDITION_LOG, EXPEDITION_LOG_BANNER } from '../data/expeditionLog';

const STATUS_STYLES: Record<string, string> = {
  inconclusive: 'text-[#9A7B45] border-[#9A7B45]/60',
  partially_confirmed: 'text-[#53665C] border-[#53665C]/60',
  no_evidence_found: 'text-[#8B5E4A] border-[#8B5E4A]/60',
  ongoing: 'text-[#CDBB96] border-[#756451]/60',
};

export function ExpeditionLog() {
  return (
    <section id="expedition-log" className="py-20 bg-[#1A1511] border-b border-[#463429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 p-4 rounded border-2 border-[#8B5E4A] bg-[#241B15] flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-[#8B5E4A] shrink-0" />
          <span className="text-xs sm:text-sm font-carto font-bold uppercase tracking-wider text-[#E6D7B9]">
            {EXPEDITION_LOG_BANNER}
          </span>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <Compass className="w-4 h-4" />
            <span>Field Log</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Expedition Log</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {EXPEDITION_LOG.map((entry) => (
            <div key={entry.id} className="p-4 rounded border border-[#463429] bg-[#241B15]">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono text-[#9A7B45]">{entry.expeditionNumber}</span>
                <span className={`text-[9px] font-carto uppercase tracking-wider px-1.5 py-0.5 rounded border ${STATUS_STYLES[entry.status]}`}>
                  {entry.status.replace(/_/g, ' ')}
                </span>
              </div>
              <h3 className="text-sm font-bold font-heading text-[#E6D7B9] mb-1">{entry.location}</h3>
              <p className="text-xs font-serif text-[#CDBB96]/80 mb-2"><strong className="text-[#CDBB96]">Mission:</strong> {entry.mission}</p>
              <p className="text-xs font-serif text-[#CDBB96]/80 mb-2"><strong className="text-[#CDBB96]">Observation:</strong> {entry.observation}</p>
              <p className="text-xs font-serif text-[#CDBB96]/80 mb-2"><strong className="text-[#CDBB96]">Evidence:</strong> {entry.evidence}</p>
              <div className="p-2.5 rounded bg-[#1E1914] border border-[#463429] text-[11px] font-serif text-[#CDBB96]/90 italic">
                {entry.conclusion}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
