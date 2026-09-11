import { useEffect, useState } from 'react';
import { BookOpen, CheckCircle, Compass, HelpCircle, Microscope, Sparkles, X } from 'lucide-react';
import { REAL_LEMURIA_DEEP_DIVE } from '../data/lemuriaData';

interface RealModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RealModal({ isOpen, onClose }: RealModalProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentPillar = REAL_LEMURIA_DEEP_DIVE.pillars[activeTab];

  return (
    <div
      id="real-lemuria-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="real-lemuria-modal-card"
        className="relative w-full max-w-3xl bg-[#1A1511] border border-[#9A7B45] rounded shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="absolute top-2.5 left-2.5 w-2 h-2 rounded-full brass-stud z-20" />
        <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full brass-stud z-20" />
        <span className="absolute bottom-2.5 left-2.5 w-2 h-2 rounded-full brass-stud z-20" />
        <span className="absolute bottom-2.5 right-2.5 w-2 h-2 rounded-full brass-stud z-20" />

        {/* Modal Header */}
        <div className="relative px-6 py-6 bg-[#241B15] border-b border-[#463429]">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded bg-[#1E1914] border border-[#9A7B45] text-[#9A7B45]">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45]">
                    Expedition Inquest Dossier
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-carto font-bold uppercase tracking-wider bg-[#1E1914] text-[#8B5E4A] border border-[#8B5E4A]/60 rounded">
                    Geological Reality: Disproven
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#E6D7B9] mt-1">
                  “Is Lemuria Real?”
                </h2>
              </div>
            </div>
            <button
              id="close-real-modal-btn"
              onClick={onClose}
              className="p-1.5 text-[#CDBB96] hover:text-[#FAF6EE] rounded hover:bg-[#2B211A] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="mt-3 text-xs sm:text-sm text-[#CDBB96] font-serif bg-[#1E1914] p-3 rounded border border-[#463429] leading-relaxed">
            <strong className="text-[#9A7B45] font-carto uppercase text-[11px] font-bold block mb-0.5">Definitive Academic Verdict: </strong>
            {REAL_LEMURIA_DEEP_DIVE.shortAnswer}
          </p>
        </div>

        {/* 3 Interactive Pillars Navigation */}
        <div className="px-6 pt-3 border-b border-[#463429] bg-[#1E1914] font-carto">
          <div className="flex flex-wrap gap-2">
            {REAL_LEMURIA_DEEP_DIVE.pillars.map((pillar, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={pillar.badge}
                  id={`real-pillar-tab-${index}`}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-t transition-all border-b-2 ${
                    isActive
                      ? 'bg-[#241B15] text-[#FAF6EE] border-[#9A7B45] shadow-sm'
                      : 'text-[#CDBB96]/70 hover:text-[#E6D7B9] border-transparent hover:bg-[#241B15]/50'
                  }`}
                >
                  {index === 0 && <BookOpen className="w-3.5 h-3.5 text-[#9A7B45]" />}
                  {index === 1 && <Microscope className="w-3.5 h-3.5 text-[#53665C]" />}
                  {index === 2 && <Sparkles className="w-3.5 h-3.5 text-[#8B5E4A]" />}
                  <span>{pillar.badge}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Pillar Content */}
        <div className="p-6 space-y-4 bg-[#1A1511]">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-[#E6D7B9] font-heading flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9A7B45]"></span>
              {currentPillar.title}
            </h3>
            <span className="text-[11px] px-2 py-0.5 rounded bg-[#1E1914] text-[#9A7B45] border border-[#463429] font-carto uppercase tracking-wider">
              Pillar {activeTab + 1} of 3
            </span>
          </div>

          <p className="text-[#E6D7B9] font-medium text-sm sm:text-base font-serif leading-relaxed">
            {currentPillar.lead}
          </p>

          <p className="text-[#CDBB96] text-xs sm:text-sm font-serif leading-relaxed">
            {currentPillar.body}
          </p>

          <div className="p-3.5 rounded bg-[#241B15] border border-[#463429] flex items-start gap-3">
            <CheckCircle className="w-4 h-4 text-[#53665C] shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] font-carto font-bold uppercase tracking-widest text-[#9A7B45] block mb-0.5">
                Cartographic Consensus
              </span>
              <span className="text-xs sm:text-sm font-serif text-[#FAF6EE] leading-relaxed">
                {currentPillar.verdict}
              </span>
            </div>
          </div>

          {/* Quick comparison checklist across the 3 dimensions */}
          <div className="pt-2 border-t border-[#463429]">
            <div className="text-[10px] font-carto font-bold uppercase tracking-widest text-[#9A7B45] mb-2.5">
              Expedition Takeaway Summary:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-serif">
              <div
                onClick={() => setActiveTab(0)}
                className={`p-3 rounded cursor-pointer border transition-colors ${
                  activeTab === 0
                    ? 'bg-[#241B15] border-[#9A7B45] text-[#FAF6EE]'
                    : 'bg-[#1E1914] border-[#463429] text-[#CDBB96]/80 hover:border-[#756451]'
                }`}
              >
                <div className="font-carto font-bold uppercase text-[10px] tracking-wider text-[#9A7B45] mb-1">1. Historical Hypothesis</div>
                <div className="text-xs leading-relaxed">Formulated 1864 by Philip Sclater as a zoological land bridge for lemurs.</div>
              </div>

              <div
                onClick={() => setActiveTab(1)}
                className={`p-3 rounded cursor-pointer border transition-colors ${
                  activeTab === 1
                    ? 'bg-[#241B15] border-[#53665C] text-[#FAF6EE]'
                    : 'bg-[#1E1914] border-[#463429] text-[#CDBB96]/80 hover:border-[#756451]'
                }`}
              >
                <div className="font-carto font-bold uppercase text-[10px] tracking-wider text-[#53665C] mb-1">2. Modern Science</div>
                <div className="text-xs leading-relaxed">Superseded by Plate Tectonics. Madagascar and India broke apart from Gondwana.</div>
              </div>

              <div
                onClick={() => setActiveTab(2)}
                className={`p-3 rounded cursor-pointer border transition-colors ${
                  activeTab === 2
                    ? 'bg-[#241B15] border-[#8B5E4A] text-[#FAF6EE]'
                    : 'bg-[#1E1914] border-[#463429] text-[#CDBB96]/80 hover:border-[#756451]'
                }`}
              >
                <div className="font-carto font-bold uppercase text-[10px] tracking-wider text-[#8B5E4A] mb-1">3. Cultural Mythology</div>
                <div className="text-xs leading-relaxed">Embraced by Blavatsky’s Theosophy, Tamil Kumari Kandam, and speculative fiction.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-[#241B15] border-t border-[#463429] flex items-center justify-between font-carto">
          <div className="flex items-center gap-2 text-xs text-[#9A7B45]">
            <Compass className="w-3.5 h-3.5 text-[#9A7B45]" />
            <span className="text-[11px] uppercase tracking-wider">Field Inquest Record</span>
          </div>
          <button
            id="modal-got-it-btn"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-bold font-carto uppercase tracking-wider rounded bg-[#2B211A] hover:bg-[#342820] text-[#FAF6EE] border border-[#9A7B45] transition-colors"
          >
            Return to Dossier
          </button>
        </div>
      </div>
    </div>
  );
}

