import { useRef, useState, useEffect, MouseEvent } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Compass, HelpCircle, ShieldAlert } from 'lucide-react';

interface HeroProps {
  onOpenRealModal: () => void;
}

export function Hero({ onOpenRealModal }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [mouseOffset, setMouseOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Handle gentle mouse movement for subtle 3-6px physical parallax
  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const normalX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const normalY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setMouseOffset({
      x: normalX * 5, // 3-6px subtle range
      y: normalY * 5,
    });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  // Track scroll position of the hero section relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scroll animations: gentle, physical shifts without dramatic zooms
  // Title gently moves upward on scroll
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.6, 0.1]);

  // Compass background slowly shifts and slightly rotates with scroll
  const compassY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const compassRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const compassOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [0.35, 0.2, 0.05]);

  // Faded cartographic layer becomes subtly visible/shifts
  const mapLayerY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const mapLayerOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 0.45, 0.2]);

  // Parchment cards subtle shift
  const cardsY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const cardsOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.7, 0.2]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 border-b border-[#463429] bg-[#1E1914]"
    >
      {/* Antique Nautical Map Frame - Parchment vignette & border */}
      <div className="absolute inset-0 bg-carto-grid opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1914] via-transparent to-[#1E1914] pointer-events-none" />

      {/* Brass Corner Studs */}
      <div className="absolute top-3 left-3 w-8 h-8 border-t border-l border-[#9A7B45]/70 pointer-events-none flex items-start justify-start p-1">
        <span className="w-1.5 h-1.5 rounded-full brass-stud" />
      </div>
      <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-[#9A7B45]/70 pointer-events-none flex items-start justify-end p-1">
        <span className="w-1.5 h-1.5 rounded-full brass-stud" />
      </div>
      <div className="absolute bottom-3 left-3 w-8 h-8 border-b border-l border-[#9A7B45]/70 pointer-events-none flex items-end justify-start p-1">
        <span className="w-1.5 h-1.5 rounded-full brass-stud" />
      </div>
      <div className="absolute bottom-3 right-3 w-8 h-8 border-b border-r border-[#9A7B45]/70 pointer-events-none flex items-end justify-end p-1">
        <span className="w-1.5 h-1.5 rounded-full brass-stud" />
      </div>

      {/* ============================================================ */}
      {/* ANTIQUE COMPASS ROSE & FADED CARTOGRAPHY (PRINTED BRASS LOOK) */}
      {/* ============================================================ */}

      {/* Compass Rose positioned behind title */}
      <motion.div
        style={{
          y: compassY,
          rotate: compassRotate,
          opacity: compassOpacity,
          x: mouseOffset.x * 0.8,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 80 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] sm:w-[720px] sm:h-[720px] pointer-events-none select-none z-0"
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full text-[#9A7B45]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Concentric Astrolabe Rings in printed antique ink */}
          <circle cx="250" cy="250" r="235" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 4" />
          <circle cx="250" cy="250" r="220" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.45" />
          <circle cx="250" cy="250" r="195" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.2" />
          <circle cx="250" cy="250" r="150" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="6 4" />
          <circle cx="250" cy="250" r="100" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
          <circle cx="250" cy="250" r="35" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />

          {/* Navigational Degree Tick Marks */}
          {Array.from({ length: 72 }).map((_, i) => {
            const angle = i * 5;
            const isMajor = i % 6 === 0;
            const length = isMajor ? 12 : 5;
            const r1 = 220;
            const r2 = r1 - length;
            const rad = (angle * Math.PI) / 180;
            const x1 = 250 + r1 * Math.cos(rad);
            const y1 = 250 + r1 * Math.sin(rad);
            const x2 = 250 + r2 * Math.cos(rad);
            const y2 = 250 + r2 * Math.sin(rad);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth={isMajor ? 1.5 : 0.75}
                strokeOpacity={isMajor ? 0.6 : 0.25}
              />
            );
          })}

          {/* 16-Point Cartographic Star (Printed Brass / Engraved) */}
          {/* North Point */}
          <polygon points="250,30 258,230 250,250 242,230" fill="#9A7B45" fillOpacity="0.35" />
          <polygon points="250,30 242,230 250,250 250,30" fill="#9A7B45" fillOpacity="0.7" />

          {/* East Point */}
          <polygon points="470,250 270,258 250,250 270,242" fill="#9A7B45" fillOpacity="0.35" />
          <polygon points="470,250 270,242 250,250 470,250" fill="#9A7B45" fillOpacity="0.7" />

          {/* South Point */}
          <polygon points="250,470 242,270 250,250 258,270" fill="#9A7B45" fillOpacity="0.35" />
          <polygon points="250,470 258,270 250,250 250,470" fill="#9A7B45" fillOpacity="0.7" />

          {/* West Point */}
          <polygon points="30,250 230,242 250,250 230,258" fill="#9A7B45" fillOpacity="0.35" />
          <polygon points="30,250 230,258 250,250 30,250" fill="#9A7B45" fillOpacity="0.7" />

          {/* Intercardinal Points */}
          <polygon points="405,95 260,240 250,250 248,248" fill="#9A7B45" fillOpacity="0.2" />
          <polygon points="405,405 252,260 250,250 252,252" fill="#9A7B45" fillOpacity="0.2" />
          <polygon points="95,405 240,260 250,250 248,252" fill="#9A7B45" fillOpacity="0.2" />
          <polygon points="95,95 240,240 250,250 248,248" fill="#9A7B45" fillOpacity="0.2" />

          {/* Latin Cardinal Labels */}
          <text x="250" y="58" textAnchor="middle" fill="#CDBB96" fontSize="10" fontFamily="Cinzel, serif" letterSpacing="2">N · SEPTENTRIO</text>
          <text x="440" y="254" textAnchor="middle" fill="#CDBB96" fontSize="10" fontFamily="Cinzel, serif" letterSpacing="2">E</text>
          <text x="250" y="450" textAnchor="middle" fill="#CDBB96" fontSize="10" fontFamily="Cinzel, serif" letterSpacing="2">S · MERIDIES</text>
          <text x="60" y="254" textAnchor="middle" fill="#CDBB96" fontSize="10" fontFamily="Cinzel, serif" letterSpacing="2">W</text>
        </svg>
      </motion.div>

      {/* Faded Cartographic Coastal Lines behind Title */}
      <motion.div
        style={{
          y: mapLayerY,
          opacity: mapLayerOpacity,
          x: mouseOffset.x * -0.5,
        }}
        className="absolute inset-0 pointer-events-none select-none z-0"
      >
        <svg className="w-full h-full" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
          {/* Loxodromic Rhumb Lines */}
          <g stroke="#9A7B45" strokeOpacity="0.25" strokeWidth="0.75" strokeDasharray="5 7">
            <line x1="200" y1="500" x2="800" y2="200" />
            <line x1="300" y1="200" x2="900" y2="550" />
            <line x1="600" y1="50" x2="600" y2="650" />
            <line x1="100" y1="350" x2="1100" y2="350" />
          </g>

          {/* Faded hypothetical coast outline */}
          <path
            d="M 380 500 C 350 420, 420 340, 500 320 C 580 300, 680 220, 740 190 C 790 230, 760 320, 700 410 C 650 480, 610 560, 520 580 C 440 600, 400 550, 380 500 Z"
            fill="none"
            stroke="#9A7B45"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            strokeOpacity="0.35"
          />
          <text x="560" y="440" fill="#9A7B45" strokeOpacity="0.4" fontSize="11" fontFamily="Cinzel, serif" letterSpacing="4" textAnchor="middle" opacity="0.4">
            MARE INDICVM · 1864
          </text>
        </svg>
      </motion.div>

      {/* ============================================================ */}
      {/* HERO MAIN CONTENT CONTAINER                                  */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* 1. Exact Hierarchy Item: FIELD DOSSIER · 1864—PRESENT */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="mb-4"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded border border-[#756451]/50 bg-[#2B211A]/80 text-[#CDBB96] text-xs font-carto tracking-[0.25em] uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9A7B45]" />
            <span>FIELD DOSSIER · 1864—PRESENT</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#9A7B45]" />
          </div>
        </motion.div>

        {/* 2. Main Title: LEMURIA / THE LOST CONTINENT / AN HISTORICAL INVESTIGATION */}
        <motion.div
          style={{
            y: titleY,
            opacity: titleOpacity,
            x: mouseOffset.x * 0.5,
          }}
          className="mb-6 space-y-1"
        >
          {/* Main Title text with engraved letterpress shadow */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-heading text-[#E6D7B9] tracking-[0.12em] leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            KUMARI KANDAM
          </h1>

          <div className="text-xl sm:text-3xl font-heading text-[#CDBB96] tracking-[0.2em] uppercase font-semibold pt-1">
            THE LOST CONTINENT
          </div>

          <div className="flex items-center justify-center gap-3 pt-3">
            <span className="h-[1px] w-12 sm:w-20 bg-[#756451]" />
            <span className="text-xs sm:text-sm font-carto text-[#9A7B45] uppercase tracking-[0.3em] font-semibold">
              AN HISTORICAL INVESTIGATION
            </span>
            <span className="h-[1px] w-12 sm:w-20 bg-[#756451]" />
          </div>
        </motion.div>

        {/* 3. Three Pillars: Science · Occultism · Tamil Cultural Memory */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="mb-8"
        >
          <div className="text-sm sm:text-base font-serif italic text-[#CDBB96]/90 tracking-wide">
            Science · Occultism · Tamil Cultural Memory
          </div>
          <p className="mt-4 max-w-2xl mx-auto text-xs sm:text-sm text-[#CDBB96]/80 font-serif leading-relaxed">
            In 1864, British zoologist Philip Sclater hypothesized a submerged Indian Ocean continent to explain the anomalous distribution of lemurs. Explore the three distinct historical constructions of Lemuria: Victorian zoology, Theosophical occultism, and the Tamil cultural memory of Kumari Kandam.
          </p>
        </motion.div>

        {/* 4. Exact CTA Button: [ OPEN THE ATLAS ] */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12"
        >
          <a
            href="#interactive-map"
            id="hero-open-atlas-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3 rounded bg-[#9A7B45] hover:bg-[#8B5E4A] text-[#FAF6EE] font-heading font-bold text-sm tracking-[0.15em] uppercase border border-[#CDBB96]/40 shadow-lg transition-all active:scale-[0.98]"
          >
            <Compass className="w-4 h-4 text-[#FAF6EE]" />
            <span>OPEN THE ATLAS</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#FAF6EE]" />
          </a>

          <button
            id="hero-is-lemuria-real-btn"
            onClick={onOpenRealModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-[#2B211A] hover:bg-[#463429] text-[#E6D7B9] font-carto text-xs uppercase tracking-wider border border-[#756451]/60 shadow transition-all active:scale-[0.98]"
          >
            <HelpCircle className="w-4 h-4 text-[#9A7B45]" />
            <span>Consult Atlas Verdict</span>
          </button>
        </motion.div>

        {/* 5. Three Archival Pillars Preview: Archival Folio Cards */}
        <motion.div
          style={{
            y: cardsY,
            opacity: cardsOpacity,
            x: mouseOffset.x * -0.3,
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left pt-6 border-t border-[#463429]"
        >
          {/* Pillar 1 */}
          <a
            href="#what-is-lemuria"
            className="p-4 rounded bg-[#2B211A]/90 border border-[#463429] hover:border-[#9A7B45] transition-colors relative block group shadow"
          >
            <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
            <span className="text-[10px] font-carto text-[#9A7B45] uppercase tracking-widest block font-bold">
              01 · SCIENCE
            </span>
            <span className="text-sm font-heading font-semibold text-[#E6D7B9] block mt-1">
              Zoogeographic Hypothesis
            </span>
            <span className="text-xs text-[#CDBB96]/75 font-serif block mt-1">
              Philip Sclater (1864) & mammalian dispersal corridors.
            </span>
          </a>

          {/* Pillar 2 */}
          <a
            href="#science-vs-myth"
            className="p-4 rounded bg-[#2B211A]/90 border border-[#463429] hover:border-[#9A7B45] transition-colors relative block group shadow"
          >
            <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
            <span className="text-[10px] font-carto text-[#8B5E4A] uppercase tracking-widest block font-bold">
              02 · OCCULT
            </span>
            <span className="text-sm font-heading font-semibold text-[#E6D7B9] block mt-1">
              Theosophical Metamorphosis
            </span>
            <span className="text-xs text-[#CDBB96]/75 font-serif block mt-1">
              Helena Blavatsky (1888) & esoteric third root race lore.
            </span>
          </a>

          {/* Pillar 3 */}
          <a
            href="#kumari-kandam"
            className="p-4 rounded bg-[#2B211A]/90 border border-[#463429] hover:border-[#9A7B45] transition-colors relative block group shadow"
          >
            <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
            <span className="text-[10px] font-carto text-[#53665C] uppercase tracking-widest block font-bold">
              03 · CULTURAL MEMORY
            </span>
            <span className="text-sm font-heading font-semibold text-[#E6D7B9] block mt-1">
              Kumari Kandam (குமரிக்கண்டம்)
            </span>
            <span className="text-xs text-[#CDBB96]/75 font-serif block mt-1">
              Sangam academies, southern deluges, & Tamil antiquity.
            </span>
          </a>
        </motion.div>

        {/* Admiralty Geological Notice */}
        <motion.div
          style={{ y: cardsY, opacity: cardsOpacity }}
          className="mt-6 inline-flex items-center gap-2 px-3.5 py-2 rounded bg-[#241B15] border border-[#463429] text-[11px] text-[#CDBB96]/80 font-serif"
        >
          <ShieldAlert className="w-3.5 h-3.5 text-[#9A7B45] shrink-0" />
          <span>
            <strong className="text-[#E6D7B9] font-heading">Geological Record:</strong> The traditional lost-continent model was retired with the discovery of plate tectonics and Gondwana continental drift.
          </span>
        </motion.div>

      </div>
    </section>
  );
}

