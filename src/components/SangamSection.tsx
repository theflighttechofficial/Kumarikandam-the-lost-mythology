import { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Landmark, MapPin, ScrollText } from 'lucide-react';
import { SANGAM_TRADITION } from '../data/sangamTradition';
import { PandyanSection } from './PandyanSection';

const CLASSIFICATION_STYLES: Record<string, string> = {
  'literary tradition only': 'text-[#8B5E4A] border-[#8B5E4A]/60',
  'partly corroborated': 'text-[#9A7B45] border-[#9A7B45]/60',
  'no independent corroboration': 'text-[#8B5E4A] border-[#8B5E4A]/60',
};

export function SangamSection() {
  const [expandedId, setExpandedId] = useState<string | null>('sangam-3');

  return (
    <section id="sangam-tradition" className="py-20 bg-[#1A1511] border-b border-[#463429] relative">
      <div className="absolute inset-0 bg-ocean-depths opacity-10 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <ScrollText className="w-4 h-4" />
            <span>The Three Sangams</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Sangam Tradition</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            Tamil literary legend speaks of three successive academies. Only the third corresponds to literature
            that actually survives and can be historically verified.
          </p>
        </div>

        <div className="space-y-5">
          {SANGAM_TRADITION.map((panel) => {
            const isExpanded = expandedId === panel.id;
            return (
              <div
                key={panel.id}
                className={`rounded border transition-all ${
                  isExpanded ? 'bg-[#241B15] border-[#9A7B45] shadow-lg' : 'bg-[#241B15] border-[#463429] hover:border-[#756451]'
                }`}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : panel.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-[#E6D7B9] font-heading">{panel.name}</h3>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border font-carto ${CLASSIFICATION_STYLES[panel.evidenceClassification]}`}>
                        {panel.evidenceClassification}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#CDBB96] font-serif mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#9A7B45] shrink-0" />
                      {panel.location}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#CDBB96] font-serif">
                      <Landmark className="w-3.5 h-3.5 text-[#9A7B45] shrink-0" />
                      Patron: {panel.patron}
                    </div>
                  </div>
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-[#9A7B45] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#9A7B45] shrink-0" />}
                </button>

                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#463429] space-y-4">
                    {panel.duration && (
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-[#9A7B45] font-carto">Duration (traditional): </span>
                        <span className="text-xs sm:text-sm text-[#CDBB96] font-serif">{panel.duration}</span>
                      </div>
                    )}
                    {panel.poets && (
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-[#9A7B45] font-carto">Poets: </span>
                        <span className="text-xs sm:text-sm text-[#CDBB96] font-serif">{panel.poets}</span>
                      </div>
                    )}
                    {panel.rulers && (
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-[#9A7B45] font-carto">Rulers: </span>
                        <span className="text-xs sm:text-sm text-[#CDBB96] font-serif">{panel.rulers}</span>
                      </div>
                    )}
                    {panel.texts && panel.texts.length > 0 && (
                      <div className="flex items-start gap-2">
                        <BookOpen className="w-3.5 h-3.5 text-[#9A7B45] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#CDBB96] font-serif">
                          <span className="text-[10px] uppercase tracking-wider font-bold text-[#9A7B45] font-carto mr-1">Associated texts:</span>
                          {panel.texts.join(', ')}
                        </span>
                      </div>
                    )}
                    {panel.laterCommentary && (
                      <p className="text-xs sm:text-sm text-[#CDBB96] font-serif leading-relaxed bg-[#1E1914] p-3.5 rounded border border-[#463429]">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-[#9A7B45] font-carto block mb-1">What later commentators say:</span>
                        {panel.laterCommentary}
                      </p>
                    )}
                    <p className="text-xs sm:text-sm text-[#E6D7B9] font-serif leading-relaxed bg-[#1E1914] p-3.5 rounded border border-[#9A7B45]/40">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-[#53665C] font-carto block mb-1">What's historically established:</span>
                      {panel.historicallyEstablished}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {panel.associatedWith.map((a) => (
                        <span key={a} className="px-2 py-0.5 rounded text-[10px] bg-[#1E1914] border border-[#463429] text-[#CDBB96]/80 font-carto">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-14">
          <PandyanSection />
        </div>
      </div>
    </section>
  );
}
