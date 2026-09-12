import { useState } from 'react';
import { CheckSquare, Code2, Compass, HelpCircle, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenRealModal: () => void;
  onOpenVsCodeModal: () => void;
  progressPercentage: number;
}

export function Navbar({ onOpenRealModal, onOpenVsCodeModal, progressPercentage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Origins', href: '#what-is-lemuria' },
    { name: 'Expedition Map', href: '#interactive-map' },
    { name: 'Kumari Kandam', href: '#kumari-kandam' },
    { name: 'Science vs. Myth', href: '#science-vs-myth' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Field Notes', href: '#productivity' },
    { name: 'Archives', href: '#sources' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#1E1914]/95 backdrop-blur-md border-b border-[#463429] shadow-xl">
      {/* Top subtle maritime graduation bar */}
      <div className="h-1 border-nautical-bar opacity-70" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Brand / Title - Antique Nautical Atlas Header */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-[#E6D7B9] hover:text-[#FAF6EE] transition-colors group shrink-0"
          >
            <div className="w-8 h-8 rounded bg-[#2B211A] border border-[#756451]/60 flex items-center justify-center text-[#9A7B45] group-hover:border-[#9A7B45] transition-colors shadow-inner">
              <Compass className="w-4 h-4 text-[#9A7B45]" />
            </div>
            <div>
              <span className="font-heading font-bold text-base sm:text-lg tracking-[0.2em] text-[#E6D7B9]">
                LEMURIA
              </span>
              <span className="hidden 2xl:inline-block text-[9px] font-carto text-[#9A7B45] ml-2 px-1.5 py-0.5 rounded bg-[#2B211A] border border-[#463429] uppercase tracking-widest">
                Cartographic Survey
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-3 text-[11px] font-carto uppercase tracking-wide text-[#CDBB96]/80 min-w-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#FAF6EE] transition-colors py-1 hover:border-b border-[#9A7B45]/70 whitespace-nowrap shrink-0"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3 xl:gap-2 2xl:gap-3 shrink-0">
            {/* Field Log Progress Gauge */}
            <a
              href="#productivity"
              id="nav-progress-pill"
              className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-full bg-[#2B211A] text-[#E6D7B9] border border-[#463429] hover:border-[#9A7B45] transition-colors shadow-inner whitespace-nowrap"
              title="View Field Journal & Expedition Tasks"
            >
              <CheckSquare className="w-3.5 h-3.5 text-[#9A7B45] shrink-0" />
              <span className="hidden sm:inline text-[#CDBB96]/80 font-carto">Log:</span>
              <span className="text-[#E6D7B9] font-mono font-bold">{progressPercentage}%</span>
            </a>

            {/* Standout Feature: "Ask the Atlas / Is It Real?" */}
            <button
              id="nav-is-lemuria-real-btn"
              onClick={onOpenRealModal}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-semibold rounded bg-[#9A7B45] hover:bg-[#8B5E4A] text-[#FAF6EE] shadow transition-all active:scale-95 font-heading tracking-wide border border-[#CDBB96]/40 whitespace-nowrap"
            >
              <HelpCircle className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden min-[400px]:inline">Is It Real?</span>
            </button>

            {/* VS Code Plain Files Modal */}
            <button
              id="nav-vscode-files-btn"
              onClick={onOpenVsCodeModal}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded bg-[#2B211A] hover:bg-[#463429] text-[#CDBB96] border border-[#463429] hover:border-[#756451] transition-colors whitespace-nowrap"
              title="View & copy pure HTML/CSS/JS files for VS Code"
            >
              <Code2 className="w-3.5 h-3.5 text-[#9A7B45] shrink-0" />
              <span className="font-carto">VS Code</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#CDBB96] hover:text-[#FAF6EE] rounded hover:bg-[#2B211A]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-4 border-t border-[#463429] space-y-2 bg-[#231B15]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-carto uppercase tracking-wider text-[#CDBB96] hover:text-[#FAF6EE] hover:bg-[#2B211A] rounded transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-[#463429] flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVsCodeModal();
                }}
                className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-medium rounded bg-[#2B211A] text-[#CDBB96] border border-[#463429]"
              >
                <Code2 className="w-3.5 h-3.5 text-[#9A7B45]" />
                <span>View VS Code Project Files</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

