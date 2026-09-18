import { Compass, HelpCircle, ShieldAlert } from 'lucide-react';

interface FooterProps {
  onOpenRealModal: () => void;
  onOpenVsCodeModal: () => void;
}

export function Footer({ onOpenRealModal, onOpenVsCodeModal }: FooterProps) {
  return (
    <footer className="bg-[#140F0C] border-t border-[#463429] py-12 text-[#CDBB96] text-sm relative">
      <div className="absolute inset-0 bg-carto-grid opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-[#FAF6EE]">
              <Compass className="w-5 h-5 text-[#9A7B45]" />
              <span className="font-heading font-bold text-lg tracking-wider">
                LEMURIA EXPEDITION ARCHIVE
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#CDBB96] font-serif leading-relaxed max-w-md">
              An interactive cartographic and archival expedition investigating Philip Sclater’s 1864 zoological land-bridge hypothesis, the reality of Gondwana and plate tectonics, microcontinent Mauritia, and classical Tamil Kumari Kandam literature.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 font-carto">
              <button
                id="footer-real-modal-btn"
                onClick={onOpenRealModal}
                className="px-3.5 py-1.5 rounded bg-[#241B15] border border-[#9A7B45] text-[#FAF6EE] hover:bg-[#2B211A] text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <HelpCircle className="w-3.5 h-3.5 text-[#9A7B45]" />
                <span>“Is Lemuria Real?” Inquest</span>
              </button>

              <button
                id="footer-vscode-modal-btn"
                onClick={onOpenVsCodeModal}
                className="px-3.5 py-1.5 rounded bg-[#1E1914] hover:bg-[#241B15] border border-[#463429] hover:border-[#9A7B45] text-[#CDBB96] hover:text-[#FAF6EE] text-xs font-bold uppercase tracking-wider transition-colors"
              >
                VS Code Vanilla Project
              </button>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-2 text-xs font-carto">
            <span className="uppercase text-[#9A7B45] font-bold tracking-widest block mb-2 text-[11px]">
              Expedition Folios
            </span>
            <ul className="space-y-1.5 text-[#CDBB96]">
              <li>
                <a href="#what-is-lemuria" className="hover:text-[#FAF6EE] transition-colors">
                  What is Lemuria? (1864 Origins)
                </a>
              </li>
              <li>
                <a href="#interactive-map" className="hover:text-[#FAF6EE] transition-colors">
                  Portolan Chart & Indian Ocean
                </a>
              </li>
              <li>
                <a href="#kumari-kandam" className="hover:text-[#FAF6EE] transition-colors">
                  Kumari Kandam (Sangam Archives)
                </a>
              </li>
              <li>
                <a href="#science-vs-myth" className="hover:text-[#FAF6EE] transition-colors">
                  Science vs. Myth Inquest & Quiz
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-[#FAF6EE] transition-colors">
                  Chronometer Timeline (1860s–Today)
                </a>
              </li>
              <li>
                <a href="#related-lands" className="hover:text-[#FAF6EE] transition-colors">
                  Other Lost Lands (Atlantis, Zealandia & More)
                </a>
              </li>
              <li>
                <a href="#productivity" className="hover:text-[#FAF6EE] transition-colors">
                  Field Notes & Expedition Manifest
                </a>
              </li>
              <li>
                <a href="#sources" className="hover:text-[#FAF6EE] transition-colors">
                  Cartographic Treatises & Archives
                </a>
              </li>
            </ul>
          </div>

          {/* Academic Standard Note */}
          <div className="space-y-2 text-xs font-serif">
            <span className="font-carto uppercase text-[#9A7B45] font-bold tracking-widest block mb-2 text-[11px]">
              Geological Consensus
            </span>
            <div className="p-3 rounded bg-[#1A1511] border border-[#463429] text-[#CDBB96] space-y-1.5">
              <span className="text-[#9A7B45] font-bold flex items-center gap-1 font-carto text-[10px] uppercase tracking-wider">
                <ShieldAlert className="w-3.5 h-3.5 text-[#53665C]" /> Empirical Scientific Baseline
              </span>
              <p className="text-[11px] leading-relaxed">
                Earth sciences explain biological distribution through the rift of Gondwana (~180–88 Ma) and continental crust buoyancy, precluding vertical subsidence of massive landmasses into oceanic abysses.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#463429] flex flex-col sm:flex-row items-center justify-between text-xs text-[#9A7B45] gap-4 font-carto">
          <div className="uppercase tracking-wider text-[10px]">
            Lemuria Cartographic Expedition Archive • Portolan Nautical Folio
          </div>
          <div className="text-[10px] text-[#CDBB96]/70 uppercase tracking-wider">
            19th-Century Biogeography vs. Modern Plate Tectonics
          </div>
        </div>
      </div>
    </footer>
  );
}

