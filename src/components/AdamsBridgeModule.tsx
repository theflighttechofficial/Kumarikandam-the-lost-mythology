import { ArrowRight } from 'lucide-react';
import { ADAMS_BRIDGE, ADAMS_BRIDGE_STAGES } from '../data/adamsBridge';

export function AdamsBridgeModule() {
  return (
    <section id="adams-bridge-module" className="py-20 bg-[#15110D] border-b border-[#463429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">
            {ADAMS_BRIDGE.name} <span className="text-[#9A7B45] text-xl">/ {ADAMS_BRIDGE.tamilName}</span>
          </h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-3xl leading-relaxed">{ADAMS_BRIDGE.location}</p>
        </div>

        {/* Four-stage distinction diagram */}
        <div className="mb-10 flex flex-col md:flex-row items-stretch gap-2 md:gap-0">
          {ADAMS_BRIDGE_STAGES.map((s, i) => (
            <div key={s.id} className="flex items-center flex-1">
              <div className="flex-1 p-4 rounded border border-[#463429] bg-[#241B15]">
                <span className="text-[10px] font-carto uppercase tracking-widest text-[#9A7B45] font-bold">{`0${i + 1}`}</span>
                <h3 className="text-sm font-heading font-bold text-[#E6D7B9] mt-1">{s.stage}</h3>
                <p className="text-xs font-serif text-[#CDBB96] mt-1.5 leading-relaxed">{s.description}</p>
              </div>
              {i < ADAMS_BRIDGE_STAGES.length - 1 && (
                <ArrowRight className="w-5 h-5 text-[#9A7B45] mx-2 hidden md:block shrink-0" />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 rounded border border-[#463429] bg-[#241B15]">
              <span className="text-[11px] font-carto uppercase tracking-wider text-[#9A7B45] font-bold block mb-1">Geological Structure</span>
              <p className="text-sm font-serif text-[#CDBB96]">{ADAMS_BRIDGE.geologicalStructure}</p>
            </div>
            <div className="p-4 rounded border border-[#463429] bg-[#241B15]">
              <span className="text-[11px] font-carto uppercase tracking-wider text-[#9A7B45] font-bold block mb-1">Sediment Composition</span>
              <p className="text-sm font-serif text-[#CDBB96]">{ADAMS_BRIDGE.sedimentComposition}</p>
            </div>
            <div className="p-4 rounded border border-[#463429] bg-[#241B15]">
              <span className="text-[11px] font-carto uppercase tracking-wider text-[#9A7B45] font-bold block mb-1">Bathymetry</span>
              <p className="text-sm font-serif text-[#CDBB96]">{ADAMS_BRIDGE.bathymetry}</p>
            </div>
            <div className="p-4 rounded border border-[#53665C]/50 bg-[#241B15]">
              <span className="text-[11px] font-carto uppercase tracking-wider text-[#53665C] font-bold block mb-1">Cultural Significance</span>
              <p className="text-sm font-serif text-[#CDBB96]">{ADAMS_BRIDGE.culturalSignificance}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded border border-[#463429] bg-[#241B15]">
              <span className="text-[11px] font-carto uppercase tracking-wider text-[#9A7B45] font-bold block mb-2">Historical Descriptions</span>
              <ul className="space-y-1.5 text-xs font-serif text-[#CDBB96] list-disc list-inside">
                {ADAMS_BRIDGE.historicalDescriptions.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
            <div className="p-4 rounded border border-[#463429] bg-[#241B15]">
              <span className="text-[11px] font-carto uppercase tracking-wider text-[#9A7B45] font-bold block mb-2">Scientific Interpretations</span>
              <ul className="space-y-1.5 text-xs font-serif text-[#CDBB96] list-disc list-inside">
                {ADAMS_BRIDGE.scientificInterpretations.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
            <div className="p-4 rounded border border-[#8B5E4A]/50 bg-[#241B15]">
              <span className="text-[11px] font-carto uppercase tracking-wider text-[#8B5E4A] font-bold block mb-2">Unresolved Questions</span>
              <ul className="space-y-1.5 text-xs font-serif text-[#CDBB96] list-disc list-inside">
                {ADAMS_BRIDGE.unresolvedQuestions.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
