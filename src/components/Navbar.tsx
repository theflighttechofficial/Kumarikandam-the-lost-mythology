import { useEffect, useRef, useState } from 'react';
import { CheckSquare, ChevronDown, Compass, HelpCircle, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenRealModal: () => void;
  onOpenSearchModal: () => void;
  onOpenQuizModal: () => void;
  progressPercentage: number;
}

export function Navbar({
  onOpenRealModal,
  onOpenSearchModal,
  onOpenQuizModal,
  progressPercentage,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);

  // The 5 links that stay visible in the primary bar.
  const primaryLinks = [
    { name: 'Origins', href: '#what-is-lemuria' },
    { name: 'Expedition Map', href: '#interactive-map' },
    { name: 'Kumari Kandam', href: '#kumari-kandam' },
    { name: 'Science vs. Myth', href: '#science-vs-myth' },
    { name: 'Timeline', href: '#timeline' },
  ];

  // Everything else lives behind "Explore More", grouped by theme.
  const exploreGroups: { group: string; links: { name: string; href: string }[] }[] = [
    {
      group: 'Tamil Tradition & Literature',
      links: [
        { name: 'Sangam Tradition', href: '#sangam-tradition' },
        { name: 'Kadal Kol', href: '#kadal-kol' },
        { name: 'Tamil Literature', href: '#tamil-literature' },
        { name: 'Thinai', href: '#thinai-explorer' },
        { name: 'Poompuhar', href: '#poompuhar-module' },
        { name: "Adam's Bridge", href: '#adams-bridge-module' },
        { name: 'Etymology', href: '#etymology-explorer' },
      ],
    },
    {
      group: 'Geology & Geography',
      links: [
        { name: 'Geology', href: '#geology-explorer' },
        { name: 'Gondwana', href: '#gondwana-reconstruction' },
        { name: 'Bathymetry', href: '#bathymetry-explorer' },
        { name: 'Sea Level', href: '#sea-level-explorer' },
        { name: 'Dual Timeline', href: '#dual-timeline' },
        { name: 'Map Comparison', href: '#map-comparison-slider' },
      ],
    },
    {
      group: 'Claims & Evidence',
      links: [
        { name: 'Lost Lands', href: '#related-lands' },
        { name: 'Lost Lands DB', href: '#lost-lands-explorer' },
        { name: 'Claims', href: '#claims-explorer' },
        { name: 'Evidence', href: '#evidence-explorer' },
        { name: 'Evidence Matrix', href: '#evidence-matrix' },
        { name: 'Source Graph', href: '#source-relation-graph' },
        { name: 'Idea Evolution', href: '#idea-evolution-timeline' },
        { name: 'Lemuria History', href: '#lemuria-history' },
        { name: 'People', href: '#people-directory' },
        { name: 'Proof Requirements', href: '#proof-requirements' },
        { name: 'Expected Evidence', href: '#expected-evidence-simulator' },
      ],
    },
    {
      group: 'Archaeology & Sources',
      links: [
        { name: 'Marine Archaeology', href: '#marine-archaeology' },
        { name: 'Methods', href: '#archaeology-methods' },
        { name: 'Archives', href: '#sources' },
        { name: 'Source Library', href: '#source-library' },
        { name: 'Source Criticism', href: '#source-criticism' },
        { name: 'Media Archive', href: '#media-archive' },
        { name: 'Expedition Log', href: '#expedition-log' },
      ],
    },
    {
      group: 'Tools, Games & Field Notes',
      links: [
        { name: 'Glossary', href: '#glossary-explorer' },
        { name: 'Hypothesis Builder', href: '#hypothesis-builder' },
        { name: 'Design a Continent', href: '#design-your-continent' },
        { name: 'Citation Generator', href: '#citation-generator' },
        { name: 'Research Questions', href: '#research-question-generator' },
        { name: 'Argument Builder', href: '#argument-builder' },
        { name: 'Evidence Game', href: '#identify-evidence-game' },
        { name: 'Fact or Claim', href: '#fact-or-claim-game' },
        { name: 'Who Said This?', href: '#who-said-this-game' },
        { name: 'When Did This Appear?', href: '#when-did-this-appear-game' },
        { name: 'Field Notes', href: '#productivity' },
      ],
    },
  ];

  // Flat list retained for the mobile menu (shows everything in one scroll).
  const navLinks = [...primaryLinks, ...exploreGroups.flatMap((g) => g.links)];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (exploreRef.current && !exploreRef.current.contains(event.target as Node)) {
        setExploreOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
                KUMARI KANDAM
              </span>
              <span className="hidden 2xl:inline-block text-[9px] font-carto text-[#9A7B45] ml-2 px-1.5 py-0.5 rounded bg-[#2B211A] border border-[#463429] uppercase tracking-widest">
                Cartographic Survey
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-4 text-[11px] font-carto uppercase tracking-wide text-[#CDBB96]/80 min-w-0">
            {primaryLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#FAF6EE] transition-colors py-1 hover:border-b border-[#9A7B45]/70 whitespace-nowrap shrink-0"
              >
                {link.name}
              </a>
            ))}

            {/* Explore More dropdown */}
            <div className="relative shrink-0" ref={exploreRef}>
              <button
                onClick={() => setExploreOpen((open) => !open)}
                className="flex items-center gap-1 hover:text-[#FAF6EE] transition-colors py-1 whitespace-nowrap"
                aria-expanded={exploreOpen}
              >
                Explore More
                <ChevronDown className={`w-3 h-3 transition-transform ${exploreOpen ? 'rotate-180' : ''}`} />
              </button>

              {exploreOpen && (
                <div className="absolute right-0 top-full mt-2 w-[min(90vw,760px)] max-h-[75vh] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 p-5 rounded-lg bg-[#1E1914] border border-[#463429] shadow-2xl z-50 normal-case">
                  {exploreGroups.map((group) => (
                    <div key={group.group}>
                      <p className="text-[10px] font-carto uppercase tracking-widest text-[#9A7B45] mb-1.5 pb-1 border-b border-[#463429]">
                        {group.group}
                      </p>
                      <div className="flex flex-col">
                        {group.links.map((link) => (
                          <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setExploreOpen(false)}
                            className="px-1 py-1.5 text-[11px] text-[#CDBB96]/80 hover:text-[#FAF6EE] hover:bg-[#2B211A] rounded transition-colors"
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3 xl:gap-2 2xl:gap-3 shrink-0">
            {/* Global Search Button */}
            <button
              onClick={onOpenSearchModal}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded bg-[#2B211A] hover:bg-[#3E2F25] text-[#E4D5BE] border border-[#7A6038]/60 transition-colors shadow-inner"
              title="Search portal (Ctrl+K)"
            >
              <span className="text-[#D4AF37]">🔍</span>
              <span className="hidden md:inline font-mono text-[11px] text-[#A89F91]">Ctrl+K</span>
            </button>

            {/* Quiz Button */}
            <button
              onClick={onOpenQuizModal}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded bg-[#2B211A] hover:bg-[#3E2F25] text-[#D4AF37] border border-[#7A6038]/60 transition-colors"
              title="Take Kumari Kandam Knowledge Quiz"
            >
              <span>🏆 Quiz</span>
            </button>

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

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#CDBB96] hover:text-[#FAF6EE] rounded hover:bg-[#2B211A]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#463429] space-y-2 bg-[#231B15]">
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
          </div>
        )}
      </div>
    </header>
  );
}


