import { useState } from 'react';
import {
  Anchor,
  BookOpen,
  ChevronRight,
  Compass,
  HelpCircle,
  History,
  Sparkles,
  Waves,
} from 'lucide-react';
import { KUMARI_NADU_GROUPS, LITERARY_REFERENCES, SANGAM_ACADEMIES, ancientLandmarks, kumariTerritories } from '../data/lemuriaData';
import { SangamAcademy } from '../types';


interface KumariKandamSectionProps {
  onOpenRealModal: () => void;
  onOpenNadusModal?: () => void;
}

export function KumariKandamSection({ onOpenRealModal, onOpenNadusModal }: KumariKandamSectionProps) {
  const [activeTab, setActiveTab] = useState<'academies' | 'literature' | 'geography' | 'science'>('academies');
  const [selectedAcademy, setSelectedAcademy] = useState<SangamAcademy>(SANGAM_ACADEMIES[0]);


  return (
    <section id="kumari-kandam" className="py-20 bg-[#1A1511] border-b border-[#463429] relative overflow-hidden">
      {/* Decorative cartographic graticule */}
      <div className="absolute inset-0 bg-carto-grid opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#2B211A] border border-[#756451]/50 text-[#9A7B45] text-xs font-carto uppercase tracking-widest mb-3 font-semibold">
              <Waves className="w-3.5 h-3.5 text-[#53665C]" />
              <span>Dravidian Antiquity · Sangam Literary Folio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#E6D7B9] tracking-wide">
              Kumari Kandam <span className="text-[#9A7B45] text-2xl sm:text-3xl font-serif font-normal">(குமரிக்கண்டம்)</span>
            </h2>
            <p className="mt-3 text-base text-[#CDBB96] font-serif leading-relaxed">
              Centuries before Victorian naturalists coined “Lemuria,” classical Tamil commentators recorded the existence of <strong className="text-[#E6D7B9]">Kumari Kandam</strong>—a sovereign maritime realm south of Cape Comorin, boasting forty-nine nadus, sacred rivers, and the fabled poetic assemblies lost to oceanic inundations (<em className="text-[#9A7B45]">Kadal Kol</em>).
            </p>
          </div>

          {/* Action Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenRealModal}
              id="kumari-verdict-btn"
              className="px-4 py-2.5 rounded bg-[#2B211A] hover:bg-[#342820] text-[#FAF6EE] border border-[#9A7B45] text-xs font-carto font-bold transition-colors flex items-center gap-2 shadow-md uppercase tracking-wider"
            >
              <HelpCircle className="w-4 h-4 text-[#9A7B45]" />
              <span>Did Kumari Kandam Exist? (Verdict)</span>
            </button>
          </div>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="flex flex-wrap gap-2 p-1 rounded bg-[#241B15] border border-[#463429] mb-10 text-xs font-carto">
          <button
            onClick={() => setActiveTab('academies')}
            id="tab-sangams-btn"
            className={`flex items-center gap-2 px-4 py-2 rounded transition-all uppercase tracking-wider ${
              activeTab === 'academies'
                ? 'bg-[#2B211A] text-[#FAF6EE] font-bold border border-[#9A7B45] shadow-sm'
                : 'text-[#CDBB96]/70 hover:text-[#E6D7B9]'
            }`}
          >
            <History className="w-3.5 h-3.5 text-[#9A7B45]" />
            <span>The Three Sangams (முச்சங்கம்)</span>
          </button>

          <button
            onClick={() => setActiveTab('literature')}
            id="tab-literature-btn"
            className={`flex items-center gap-2 px-4 py-2 rounded transition-all uppercase tracking-wider ${
              activeTab === 'literature'
                ? 'bg-[#2B211A] text-[#FAF6EE] font-bold border border-[#9A7B45] shadow-sm'
                : 'text-[#CDBB96]/70 hover:text-[#E6D7B9]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-[#9A7B45]" />
            <span>Sangam Verses & Epics (இலக்கிய சான்றுகள்)</span>
          </button>

          <button
            onClick={() => setActiveTab('geography')}
            id="tab-geography-btn"
            className={`flex items-center gap-2 px-4 py-2 rounded transition-all uppercase tracking-wider ${
              activeTab === 'geography'
                ? 'bg-[#2B211A] text-[#FAF6EE] font-bold border border-[#9A7B45] shadow-sm'
                : 'text-[#CDBB96]/70 hover:text-[#E6D7B9]'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-[#9A7B45]" />
            <span>The 49 Nadus & Rivers (49 நாடுகள்)</span>
          </button>

          <button
            onClick={() => setActiveTab('science')}
            id="tab-science-btn"
            className={`flex items-center gap-2 px-4 py-2 rounded transition-all uppercase tracking-wider ${
              activeTab === 'science'
                ? 'bg-[#2B211A] text-[#FAF6EE] font-bold border border-[#53665C] shadow-sm'
                : 'text-[#CDBB96]/70 hover:text-[#E6D7B9]'
            }`}
          >
            <Anchor className="w-3.5 h-3.5 text-[#53665C]" />
            <span>Marine Archaeology & Ice Age Shelf</span>
          </button>
        </div>

        {/* TAB 1: The Three Sangams */}
        {activeTab === 'academies' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SANGAM_ACADEMIES.map((academy, index) => {
                const isSelected = selectedAcademy.id === academy.id;
                return (
                  <div
                    key={academy.id}
                    onClick={() => setSelectedAcademy(academy)}
                    className={`hover-lift p-5 rounded border cursor-pointer transition-all relative ${
                      isSelected
                        ? 'bg-[#2B211A] border-[#9A7B45] shadow-lg ring-1 ring-[#9A7B45]/40'
                        : 'bg-[#241B15] border-[#463429] hover:border-[#756451]'
                    }`}
                  >
                    <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-carto font-bold uppercase tracking-widest text-[#9A7B45]">
                        Assembly 0{index + 1}
                      </span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded font-carto uppercase tracking-wider font-semibold ${
                          index < 2
                            ? 'bg-[#1E1914] text-[#8B5E4A] border border-[#8B5E4A]/50'
                            : 'bg-[#1E1914] text-[#53665C] border border-[#53665C]/50'
                        }`}
                      >
                        {index < 2 ? 'Legendary: Submerged (கடல் கொண்டவை)' : 'Surviving Inland'}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#E6D7B9] font-heading">
                      {academy.name}
                    </h3>
                    <div className="text-xs text-[#9A7B45] font-serif mt-0.5">
                      {academy.tamilName}
                    </div>

                    <p className="mt-2.5 text-xs text-[#CDBB96]/80 line-clamp-2 font-serif">
                      {academy.location}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#463429] flex items-center justify-between text-[11px] text-[#CDBB96]/70 font-mono">
                      <span title="Legendary figure from oral tradition, not a historically verified date">
                        {academy.traditionalYears.toLocaleString()} Years*
                      </span>
                      <span className="text-[#9A7B45] font-carto font-semibold flex items-center gap-1 uppercase text-[10px]">
                        Inspect <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Academy Deep-Dive Inspector */}
            <div className="p-6 sm:p-8 rounded bg-[#241B15] border border-[#463429] shadow-xl space-y-6 relative">
              <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
              <span className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full brass-stud" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#463429]">
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-carto uppercase text-[#9A7B45] tracking-widest font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Chronological Dossier</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#E6D7B9] mt-1">
                    {selectedAcademy.name}
                  </h3>
                  <span className="text-[#9A7B45] text-sm font-serif">
                    {selectedAcademy.tamilName}
                  </span>
                </div>

                <div className="p-3 rounded bg-[#1E1914] border border-[#463429] text-right">
                  <span className="text-[10px] uppercase font-carto text-[#9A7B45] block font-bold">
                    Traditional Reign Length
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#E6D7B9] font-mono">
                    {selectedAcademy.duration}
                  </span>
                  <span className="block text-[9px] uppercase tracking-wider text-[#8B5E4A] font-carto font-bold mt-1">
                    *Legendary figure, not historical fact
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
                <div className="space-y-3.5">
                  <div className="p-4 rounded bg-[#1E1914] border border-[#463429]">
                    <span className="text-[10px] font-carto font-bold text-[#9A7B45] uppercase tracking-wider block mb-1">
                      Geographic Seat
                    </span>
                    <p className="text-[#CDBB96] text-xs leading-relaxed font-serif">
                      {selectedAcademy.location}
                    </p>
                  </div>

                  <div className="p-4 rounded bg-[#1E1914] border border-[#463429]">
                    <span className="text-[10px] font-carto font-bold text-[#9A7B45] uppercase tracking-wider block mb-1">
                      Pandyan Dynasty Patrons & Assembly
                    </span>
                    <p className="text-[#CDBB96] text-xs leading-relaxed font-serif">
                      <strong className="text-[#E6D7B9]">Rulers:</strong> {selectedAcademy.kings}
                    </p>
                    <p className="text-[#CDBB96]/80 text-xs mt-1 font-serif">
                      <strong className="text-[#E6D7B9]">Assembly Poets:</strong> {selectedAcademy.poetsCount}
                    </p>
                  </div>

                  <div className="p-4 rounded bg-[#1E1914] border border-[#463429]">
                    <span className="text-[10px] font-carto font-bold text-[#53665C] uppercase tracking-wider block mb-1">
                      Key Masterworks Attributed
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {selectedAcademy.keyWorks.map((work) => (
                        <span
                          key={work}
                          className="px-2 py-1 rounded bg-[#2B211A] text-[#FAF6EE] text-xs border border-[#756451]/50 font-serif"
                        >
                          {work}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-3.5">
                  <div className="p-4 rounded bg-[#1E1914] border border-[#8B5E4A]/50">
                    <span className="text-[10px] font-carto font-bold text-[#8B5E4A] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                      <Waves className="w-3.5 h-3.5 text-[#8B5E4A]" />
                      The Deluge (Kadal Kol / கடல் கோள்)
                    </span>
                    <p className="text-[#CDBB96] text-xs leading-relaxed font-serif">
                      {selectedAcademy.delugeFate}
                    </p>
                  </div>

                  <div className="p-4 rounded bg-[#1E1914] border border-[#463429]">
                    <span className="text-[10px] font-carto font-bold text-[#9A7B45] uppercase tracking-wider block mb-1">
                      Modern Scholarly & Epigraphical Assessment
                    </span>
                    <p className="text-[#CDBB96]/85 text-xs leading-relaxed font-serif">
                      {selectedAcademy.historicalAnalysis}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Sangam Literature Verses */}
        {activeTab === 'literature' && (
          <div className="space-y-6">
            <div className="p-4 rounded bg-[#241B15] border border-[#463429] text-xs font-serif text-[#CDBB96] mb-4">
              <strong className="text-[#E6D7B9] block text-sm mb-1 font-heading">
                Authentic Epigraphical & Literary Records of Oceanic Encroachment
              </strong>
              Unlike the Atlantis fable, which originates solely in Plato’s allegorical dialogues, the cultural memory of ancient southern shorelines swallowed by the ocean is documented throughout multiple independent classical Tamil poems, grammars, and commentaries composed between the 1st and 12th centuries CE.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {LITERARY_REFERENCES.map((ref) => (
                <div
                  key={ref.work}
                  className="hover-lift p-5 rounded bg-[#241B15] border border-[#463429] hover:border-[#756451] transition-colors space-y-3 relative"
                >
                  <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-[#E6D7B9] font-heading">
                        {ref.work}
                      </h4>
                      <div className="text-xs text-[#9A7B45] font-serif">
                        {ref.tamilWork}
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#1E1914] text-[#CDBB96] border border-[#463429]">
                      {ref.period}
                    </span>
                  </div>

                  <div className="p-3.5 rounded bg-[#1E1914] border border-[#756451]/50 italic font-serif text-xs text-[#FAF6EE] leading-relaxed pl-3 border-l-2 border-l-[#9A7B45]">
                    “{ref.quoteOrSummary}”
                  </div>

                  <div className="pt-1">
                    <span className="text-[10px] font-carto font-bold text-[#9A7B45] uppercase tracking-wider block mb-1">
                      Academic Context
                    </span>
                    <p className="text-xs text-[#CDBB96]/80 leading-relaxed font-serif">
                      {ref.significance}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: The 49 Nadus & Geography */}
        {activeTab === 'geography' && (
          <div className="space-y-6">
            <div className="p-5 rounded bg-[#241B15] border border-[#463429] shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold font-heading text-[#E6D7B9] mb-1">
                  The 49 Submerged Provinces (ஏழு ஏழு நாற்பத்தொன்பது நாடுகள்)
                </h3>
                <p className="text-xs font-serif text-[#CDBB96] leading-relaxed">
                  Commentators on the <em>Silappatikaram</em> (specifically Adiyarkkunallar in the 12th century) recorded that Kumari Kandam was structured into <strong>seven clusters of seven territories</strong> (49 Nadus), bounded by the ancient <strong>Pahruli River</strong> (பஃறுளி ஆறு) and the <strong>Kumari Mountain</strong> (குமரிக்கோடு).
                </p>
              </div>

              {onOpenNadusModal && (
                <button
                  onClick={onOpenNadusModal}
                  className="px-4 py-2.5 rounded bg-[#9A7B45] hover:bg-[#B59253] text-[#14100D] text-xs font-carto font-bold transition-all flex items-center gap-2 shrink-0 shadow-md uppercase tracking-wider"
                >
                  <Compass className="w-4 h-4" />
                  <span>Launch 49 Nadus Explorer</span>
                </button>
              )}
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {KUMARI_NADU_GROUPS.map((group, idx) => (
                <div
                  key={group.name}
                  className="hover-lift p-5 rounded bg-[#241B15] border border-[#463429] hover:border-[#756451] transition-colors space-y-2 relative"
                >
                  <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-carto text-[#9A7B45] font-bold uppercase tracking-widest">
                      Province Group 0{idx + 1}
                    </span>
                    <span className="text-xs font-mono text-[#CDBB96]/70">7 Nadus</span>
                  </div>

                  <h4 className="text-sm font-bold text-[#E6D7B9] font-heading">
                    {group.name}
                  </h4>
                  <div className="text-xs text-[#9A7B45] font-serif">
                    {group.tamilName}
                  </div>

                  <div className="text-xs text-[#CDBB96] font-serif pt-1">
                    <strong className="text-[#E6D7B9]">Meaning:</strong> {group.meaning}
                  </div>

                  <p className="text-xs text-[#CDBB96]/80 leading-relaxed pt-1 font-serif">
                    {group.description}
                  </p>
                </div>
              ))}

              {/* Special Card for Lost Rivers & Mountains */}
              <div className="p-5 rounded bg-[#241B15] border border-[#9A7B45]/50 space-y-2 relative">
                <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
                <span className="text-[10px] font-carto text-[#9A7B45] font-bold uppercase tracking-widest">
                  Sacred Waterways & Peaks
                </span>
                <h4 className="text-sm font-bold text-[#E6D7B9] font-heading">
                  Pahruli River & Kumari Ridge
                </h4>
                <div className="text-xs text-[#9A7B45] font-serif">
                  பஃறுளி ஆறு & குமரிக்கோடு
                </div>
                <p className="text-xs text-[#CDBB96]/85 leading-relaxed font-serif">
                  Sangam verses describe King Nediyon excavating the Pahruli River to irrigate the southern littoral. Following oceanic encroachment, the Pandyas re-established their inland capitals along the Vaigai at modern Madurai.
                </p>
              </div>
            </div>

            {/* Key Geographic & Cultural Landmarks Grid */}
            <div className="pt-6 border-t border-[#463429]">
              <h3 className="text-lg font-bold font-heading text-[#E6D7B9] mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#9A7B45]" />
                Key Geographic & Cultural Landmarks
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ancientLandmarks.map((landmark) => (
                  <div key={landmark.name} className="p-4 rounded bg-[#1E1914] border border-[#463429] space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-bold text-[#F3E5AB] font-heading">{landmark.name}</h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#9A7B45]/20 text-[#D4AF37] border border-[#9A7B45]/30">
                        {landmark.type}
                      </span>
                    </div>
                    <p className="text-xs text-[#CDBB96] font-serif leading-relaxed">{landmark.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}


        {/* TAB 4: Marine Archaeology & Ice Age Science */}
        {activeTab === 'science' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* The Scientific Reality */}
              <div className="p-6 sm:p-8 rounded bg-[#241B15] border border-[#463429] space-y-4 relative">
                <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
                <div className="flex items-center gap-2 text-[#53665C] text-xs font-carto uppercase font-bold tracking-widest">
                  <Anchor className="w-3.5 h-3.5" />
                  <span>Geological Reality · Ice Age Exposed Shelf</span>
                </div>
                <h3 className="text-lg font-bold font-heading text-[#E6D7B9]">
                  The Submerged Coastal Shelf of the Gulf of Mannar
                </h3>
                <p className="text-xs sm:text-sm text-[#CDBB96] leading-relaxed font-serif">
                  During the Last Glacial Maximum (~20,000 to 14,000 years ago), extensive water was locked into continental ice sheets, dropping global sea levels by <strong>100 to 120 meters</strong>.
                </p>
                <div className="p-4 rounded bg-[#1E1914] border border-[#463429] space-y-2 text-xs text-[#CDBB96] font-serif">
                  <div className="font-semibold text-[#E6D7B9] font-heading uppercase tracking-wider text-[11px]">
                    Empirical Field Soundings:
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-[#CDBB96]/90">
                    <li>Sri Lanka was entirely physically joined to the Indian mainland by an expansive, low-lying coastal plain.</li>
                    <li>The Gulf of Mannar and Palk Strait were dry, river-carved valleys occupied by Paleolithic and Mesolithic populations.</li>
                    <li>Between 12,000 and 7,000 BP, post-glacial meltwater pulses submerged hundreds of square kilometers of inhabited coastal lands.</li>
                  </ul>
                </div>
                <p className="text-xs text-[#CDBB96]/80 leading-relaxed font-serif">
                  Geologists and historians conclude that this catastrophic prehistoric marine transgression formed the <strong>genuine historical nucleus</strong> of the oral traditions of <em>Kadal Kol</em> (sea deluge) that were later codified in Sangam poetry.
                </p>
              </div>

              {/* Underwater Archaeology Findings */}
              <div className="p-6 sm:p-8 rounded bg-[#241B15] border border-[#463429] space-y-4 relative">
                <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
                <div className="flex items-center gap-2 text-[#9A7B45] text-xs font-carto uppercase font-bold tracking-widest">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Marine Surveys · Poompuhar & Coromandel</span>
                </div>
                <h3 className="text-lg font-bold font-heading text-[#E6D7B9]">
                  Submerged Structures Along the Tamil Coastline
                </h3>
                <p className="text-xs sm:text-sm text-[#CDBB96] leading-relaxed font-serif">
                  Surveys by the <strong>National Institute of Oceanography (NIO)</strong> along the Coromandel coast near Poompuhar (Kaveripattinam) have revealed tangible submerged man-made structures:
                </p>
                <div className="space-y-2.5 text-xs text-[#CDBB96] font-serif">
                  <div className="p-3 rounded bg-[#1E1914] border border-[#463429]">
                    <strong className="text-[#E6D7B9] block font-heading">Offshore Brick Ruins & Wharves</strong>
                    Divers and side-scan sonar discovered brick masonry, ring wells, and wharf structures submerged 5–8 meters underwater, dating to the early centuries CE.
                  </div>
                  <div className="p-3 rounded bg-[#1E1914] border border-[#463429]">
                    <strong className="text-[#E6D7B9] block font-heading">Corroborating the Epic "Manimekalai"</strong>
                    The Buddhist epic <em>Manimekalai</em> accurately chronicles how the great port of Poompuhar was engulfed by a catastrophic tidal surge or tsunami.
                  </div>
                </div>
                <p className="text-xs text-[#CDBB96]/80 font-serif">
                  Verdict: While an expansive continent extending across to Madagascar is physically impossible in plate tectonics, <em>regional coastal inundations and submerged ports are documented historical realities</em> of South Indian archaeology.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

