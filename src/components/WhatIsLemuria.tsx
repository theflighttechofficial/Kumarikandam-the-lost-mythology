import { useState } from 'react';
import { BookOpen, History, Layers, Sparkles, HelpCircle, FileText } from 'lucide-react';

interface WhatIsLemuriaProps {
  onOpenRealModal: () => void;
}

export function WhatIsLemuria({ onOpenRealModal }: WhatIsLemuriaProps) {
  const [selectedPerspective, setSelectedPerspective] = useState<'science' | 'myth'>('science');

  return (
    <section id="what-is-lemuria" className="py-20 bg-[#1E1914] border-b border-[#463429] relative overflow-hidden">
      <div className="absolute inset-0 bg-carto-grid opacity-15 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-carto font-semibold tracking-widest uppercase text-[#9A7B45] mb-2 px-3 py-1 rounded bg-[#2B211A] border border-[#756451]/50">
            <BookOpen className="w-3.5 h-3.5 text-[#9A7B45]" />
            <span>Zoological Archives · Royal Society Dispatch 1864</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">
            What is Lemuria?
          </h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif leading-relaxed">
            Long before it became an occult trope of psychic giants or sunken golden temples, Lemuria was an earnest scientific proposition devised in 1864 by British zoologists grappling with a biogeographical anomaly across the Indian Ocean.
          </p>
        </div>

        {/* The Core Story: Origin of the Idea */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Main Historical Explanation */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded bg-[#241B15] border border-[#463429] shadow-xl space-y-4 relative">
              <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
              <span className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full brass-stud" />
              <span className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
              <span className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full brass-stud" />

              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-[#2B211A] text-[#9A7B45] border border-[#756451]/50">
                  <History className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-[#E6D7B9] font-heading">
                  The 1864 Zoological Riddle
                </h3>
              </div>

              <p className="text-[#CDBB96] text-sm sm:text-base leading-relaxed font-serif">
                In 1864, British zoologist <strong className="text-[#E6D7B9]">Philip Lutley Sclater</strong> was cataloging the primates of Madagascar. He observed that primitive strepsirrhine primates (lemurs) and related fossil lemuriforms were present in both <strong className="text-[#E6D7B9]">Madagascar</strong> and the <strong className="text-[#E6D7B9]">Indian subcontinent</strong>, but conspicuously missing from mainland Africa and the Arabian peninsula.
              </p>

              {/* Antique Parchment Manuscript Quote */}
              <div className="p-4 sm:p-5 rounded bg-[#1E1914] border border-[#756451]/60 text-sm text-[#CDBB96] space-y-2 shadow-inner relative">
                <div className="text-[10px] font-carto uppercase tracking-widest text-[#9A7B45] flex items-center gap-1.5 font-bold">
                  <FileText className="w-3.5 h-3.5 text-[#9A7B45]" />
                  <span>Archival Dispatch · The Quarterly Journal of Science (1864)</span>
                </div>
                <p className="italic text-[#E6D7B9] font-serif leading-relaxed text-sm sm:text-base pl-3 border-l-2 border-[#9A7B45]">
                  “The anomalies of the Mammalian fauna of Madagascar can best be explained by supposing that... a large continent occupied parts of the Atlantic and Indian Oceans... which I propose to designate Lemuria.”
                </p>
                <span className="block text-[11px] text-[#9A7B45] font-mono">
                  — Philip L. Sclater, The Mammals of Madagascar (1864)
                </span>
              </div>

              <p className="text-[#CDBB96] text-sm sm:text-base leading-relaxed font-serif">
                In Victorian geology, prevailing orthodoxy held that continents were immobile fixtures. Geologists lacked knowledge of horizontal plate drift and only understood <strong>vertical crustal subsidence</strong>. Thus, a submerged land bridge was the sole mathematically viable hypothesis available to explain identical terrestrial taxa separated by 4,000 miles of deep abyssal plain.
              </p>
            </div>
          </div>

          {/* Biological Puzzle Diagram Card - Antique Field Matrix */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded bg-[#241B15] border border-[#463429] shadow-xl relative">
            <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
            <span className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-carto uppercase tracking-widest text-[#9A7B45] font-bold">
                  Field Matrix · 1860s Soundings
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-carto font-bold bg-[#2B211A] text-[#9A7B45] border border-[#756451]/50">
                  Taxonomic Distribution
                </span>
              </div>

              <h4 className="text-lg font-bold text-[#E6D7B9] font-heading mb-3">
                The Faunal Dispersal Paradox
              </h4>

              <div className="space-y-3 text-xs sm:text-sm text-[#CDBB96] font-serif">
                <div className="p-3 rounded bg-[#1E1914] border border-[#53665C]/50 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#53665C] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#E6D7B9] block font-heading">Madagascar Haven</strong>
                    Over 100 endemic lemur species radiating in island isolation without continental carnivore competition.
                  </div>
                </div>

                <div className="p-3 rounded bg-[#1E1914] border border-[#9A7B45]/50 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#9A7B45] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#E6D7B9] block font-heading">Indian Subcontinent</strong>
                    Slender lorises, slow lorises, and fossil strepsirrhines exhibiting striking anatomical concordance.
                  </div>
                </div>

                <div className="p-3 rounded bg-[#1E1914] border border-[#8B5E4A]/50 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#8B5E4A] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#E6D7B9] block font-heading">Continental East Africa (The Gap)</strong>
                    No native lemurs; dominant anthropoids (monkeys & apes) outcompeted ancient primitive prosimians.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#463429] flex items-center justify-between">
              <span className="text-xs text-[#CDBB96]/80 font-carto">Victorian Deductive Solution:</span>
              <span className="text-xs font-bold text-[#FAF6EE] bg-[#2B211A] px-2.5 py-1 rounded border border-[#756451] font-carto">
                Hypothetical Bridge “Lemuria”
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Distinction: Original Scientific Hypothesis vs. Later Mythological Claims */}
        <div className="p-6 sm:p-8 rounded bg-[#241B15] border border-[#463429] shadow-xl relative">
          <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
          <span className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full brass-stud" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[10px] font-carto font-bold uppercase tracking-widest text-[#9A7B45] block">
                Historical Divergence Folio
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#E6D7B9] mt-0.5">
                Distinguishing Scientific Postulate from Occult Myth
              </h3>
            </div>

            {/* Perspective Switcher Buttons */}
            <div className="inline-flex p-1 rounded bg-[#1E1914] border border-[#463429]">
              <button
                id="tab-perspective-science"
                onClick={() => setSelectedPerspective('science')}
                className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded transition-all font-carto uppercase tracking-wider ${
                  selectedPerspective === 'science'
                    ? 'bg-[#2B211A] text-[#FAF6EE] border border-[#9A7B45] shadow-sm'
                    : 'text-[#CDBB96]/70 hover:text-[#E6D7B9]'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-[#9A7B45]" />
                <span>Original Science (1864)</span>
              </button>
              <button
                id="tab-perspective-myth"
                onClick={() => setSelectedPerspective('myth')}
                className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded transition-all font-carto uppercase tracking-wider ${
                  selectedPerspective === 'myth'
                    ? 'bg-[#2B211A] text-[#FAF6EE] border border-[#8B5E4A] shadow-sm'
                    : 'text-[#CDBB96]/70 hover:text-[#E6D7B9]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#8B5E4A]" />
                <span>Myth & Occult (1888+)</span>
              </button>
            </div>
          </div>

          {/* Conditional Display Based on Perspective */}
          {selectedPerspective === 'science' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-5 rounded bg-[#1E1914] border border-[#463429] space-y-2">
                <span className="text-[10px] font-carto text-[#9A7B45] uppercase font-bold tracking-wider">
                  01 · The Objective
                </span>
                <h4 className="text-sm font-bold text-[#E6D7B9] font-heading">Biogeographical Bridge</h4>
                <p className="text-xs text-[#CDBB96]/85 leading-relaxed font-serif">
                  Sclater never claimed Lemuria held ancient cities, spiritual energies, or lost empires. It was strictly a functional zoological dispersal corridor to account for mammalian distributions.
                </p>
              </div>

              <div className="p-5 rounded bg-[#1E1914] border border-[#463429] space-y-2">
                <span className="text-[10px] font-carto text-[#9A7B45] uppercase font-bold tracking-wider">
                  02 · Peer Validation
                </span>
                <h4 className="text-sm font-bold text-[#E6D7B9] font-heading">Endorsed by Evolutionists</h4>
                <p className="text-xs text-[#CDBB96]/85 leading-relaxed font-serif">
                  Ernst Haeckel and Alfred Russel Wallace legitimately reviewed the idea to model primate ancestry before the mechanism of seafloor spreading was discovered.
                </p>
              </div>

              <div className="p-5 rounded bg-[#1E1914] border border-[#463429] space-y-2">
                <span className="text-[10px] font-carto text-[#9A7B45] uppercase font-bold tracking-wider">
                  03 · Scientific Integrity
                </span>
                <h4 className="text-sm font-bold text-[#E6D7B9] font-heading">Honorable Retirement</h4>
                <p className="text-xs text-[#CDBB96]/85 leading-relaxed font-serif">
                  Once Alfred Wegener and 1960s geophysicists proved continental drift and Gondwana breakup, geologists retired Lemuria immediately in the light of superior empirical soundings.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-5 rounded bg-[#1E1914] border border-[#463429] space-y-2">
                <span className="text-[10px] font-carto text-[#8B5E4A] uppercase font-bold tracking-wider">
                  01 · Theosophical Co-option
                </span>
                <h4 className="text-sm font-bold text-[#E6D7B9] font-heading">The Third Root Race (1888)</h4>
                <p className="text-xs text-[#CDBB96]/85 leading-relaxed font-serif">
                  Helena Blavatsky repurposed Sclater’s zoological name in <em>The Secret Doctrine</em>, claiming Lemuria was the cradle of psychic, egg-bearing four-armed giants.
                </p>
              </div>

              <div className="p-5 rounded bg-[#1E1914] border border-[#463429] space-y-2">
                <span className="text-[10px] font-carto text-[#8B5E4A] uppercase font-bold tracking-wider">
                  02 · Kumari Kandam
                </span>
                <h4 className="text-sm font-bold text-[#E6D7B9] font-heading">Tamil Sangam Traditions</h4>
                <p className="text-xs text-[#CDBB96]/85 leading-relaxed font-serif">
                  In 20th-century South India, scholars connected Lemuria with the ancient Sangam flood traditions of Kumari Kandam, creating a potent symbol of Dravidian antiquity.
                </p>
              </div>

              <div className="p-5 rounded bg-[#1E1914] border border-[#463429] space-y-2">
                <span className="text-[10px] font-carto text-[#8B5E4A] uppercase font-bold tracking-wider">
                  03 · Mount Shasta & Pop Media
                </span>
                <h4 className="text-sm font-bold text-[#E6D7B9] font-heading">Enduring Adventure Tropes</h4>
                <p className="text-xs text-[#CDBB96]/85 leading-relaxed font-serif">
                  Lemuria lives on in California folklore (subterranean beings in Mt. Shasta), Marvel Comics (Namor vs. Lemuria), pulp adventure fiction, and video games.
                </p>
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded bg-[#1E1914] border border-[#463429]">
            <span className="text-xs text-[#CDBB96] font-serif">
              Seeking a comprehensive executive summary for classroom or expedition notes?
            </span>
            <button
              onClick={onOpenRealModal}
              id="open-real-modal-btn"
              className="px-4 py-2 rounded bg-[#2B211A] hover:bg-[#342820] text-[#FAF6EE] font-bold text-xs transition-colors flex items-center gap-1.5 shrink-0 font-heading tracking-wide border border-[#9A7B45] shadow-md"
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#9A7B45]" />
              <span>Consult “Is Lemuria Real?” Dossier</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

