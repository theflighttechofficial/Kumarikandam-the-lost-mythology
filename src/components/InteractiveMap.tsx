import { useState, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Layers, MapPin, ShieldAlert } from 'lucide-react';
import { MAP_FEATURES } from '../data/lemuriaData';
import { MapFeature } from '../types';

type HistoricalPillar = 'science' | 'occult' | 'tamil';

export function InteractiveMap() {
  const [activePillar, setActivePillar] = useState<HistoricalPillar>('science');
  const [selectedFeature, setSelectedFeature] = useState<MapFeature>(MAP_FEATURES[0]);
  const [hoveredFeature, setHoveredFeature] = useState<MapFeature | null>(null);

  // Modern geological toggle layers
  const [showTectonicsLayer, setShowTectonicsLayer] = useState<boolean>(true);
  const [showRealFragmentsLayer, setShowRealFragmentsLayer] = useState<boolean>(true);

  // Parallax & Compass Needle angle state
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [needleAngle, setNeedleAngle] = useState<number>(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!mapContainerRef.current) return;
    const rect = mapContainerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const normalX = (e.clientX - centerX) / (rect.width / 2);
    const normalY = (e.clientY - centerY) / (rect.height / 2);

    // Subtle 3-5px parallax shift
    setMouseOffset({
      x: normalX * 4,
      y: normalY * 4,
    });

    // Angle from compass rose located at top-right (approx 85% width, 18% height)
    const compassScreenX = rect.left + rect.width * 0.85;
    const compassScreenY = rect.top + rect.height * 0.18;
    const dx = e.clientX - compassScreenX;
    const dy = e.clientY - compassScreenY;
    const angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
    setNeedleAngle(angleDeg);
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
    setHoveredFeature(null);
  };

  return (
    <section id="interactive-map" className="py-20 bg-[#1A1511] border-b border-[#463429] relative overflow-hidden">
      {/* Antique chart parchment background texture */}
      <div className="absolute inset-0 bg-carto-grid opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-carto font-semibold tracking-widest uppercase text-[#9A7B45] mb-2 px-3 py-1 rounded bg-[#2B211A] border border-[#756451]/50">
            <Compass className="w-3.5 h-3.5 text-[#9A7B45]" />
            <span>Admiralty Chart Folio · 1864–2013</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">
            The Indian Ocean & Hypothetical Lemuria
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#CDBB96] font-serif leading-relaxed">
            Navigate the nautical theatre of the 1864 zoogeographic hypothesis. Examine how Victorian land-bridge science, occult Theosophy, and Tamil cultural memory mapped three distinct iterations across the Indian Ocean basin.
          </p>
        </div>

        {/* ============================================================ */}
        {/* THE THREE LEMURIAS ARCHIVAL SELECTOR CARDS                   */}
        {/* ============================================================ */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {/* 01 — SCIENCE (Sclater · 1864) */}
          <button
            onClick={() => setActivePillar('science')}
            id="pillar-science-btn"
            className={`text-left p-4 rounded transition-all relative border ${
              activePillar === 'science'
                ? 'bg-[#2B211A] border-[#9A7B45] shadow-lg shadow-black/40 ring-1 ring-[#9A7B45]/50'
                : 'bg-[#241B15]/80 border-[#463429] hover:border-[#756451] hover:bg-[#2B211A]/60'
            }`}
          >
            <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-carto uppercase tracking-widest text-[#9A7B45] font-bold">
                01 — SCIENCE
              </span>
              <span className="text-[10px] font-mono text-[#CDBB96]/70">1864</span>
            </div>
            <div className="text-sm font-heading font-semibold text-[#E6D7B9]">
              Sclater’s Zoogeographic Bridge
            </div>
            <p className="text-xs text-[#CDBB96]/80 font-serif mt-1 line-clamp-2">
              Mammalian corridor hypothesized to explain lemur fossils between Madagascar and the Western Ghats.
            </p>
            {activePillar === 'science' && (
              <div className="mt-2.5 flex items-center gap-1.5 text-[10px] font-carto text-[#9A7B45] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9A7B45]" />
                Active Cartographic Layer
              </div>
            )}
          </button>

          {/* 02 — OCCULT (Blavatsky · 1888) */}
          <button
            onClick={() => setActivePillar('occult')}
            id="pillar-occult-btn"
            className={`text-left p-4 rounded transition-all relative border ${
              activePillar === 'occult'
                ? 'bg-[#2B211A] border-[#8B5E4A] shadow-lg shadow-black/40 ring-1 ring-[#8B5E4A]/50'
                : 'bg-[#241B15]/80 border-[#463429] hover:border-[#756451] hover:bg-[#2B211A]/60'
            }`}
          >
            <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-carto uppercase tracking-widest text-[#8B5E4A] font-bold">
                02 — OCCULT
              </span>
              <span className="text-[10px] font-mono text-[#CDBB96]/70">1888</span>
            </div>
            <div className="text-sm font-heading font-semibold text-[#E6D7B9]">
              Theosophical Transformation
            </div>
            <p className="text-xs text-[#CDBB96]/80 font-serif mt-1 line-clamp-2">
              Blavatsky’s <em>The Secret Doctrine</em>: spiritual Third Root Race continent spanning the southern oceans.
            </p>
            {activePillar === 'occult' && (
              <div className="mt-2.5 flex items-center gap-1.5 text-[10px] font-carto text-[#8B5E4A] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5E4A]" />
                Active Cartographic Layer
              </div>
            )}
          </button>

          {/* 03 — TAMIL MEMORY (Kumari Kandam) */}
          <button
            onClick={() => setActivePillar('tamil')}
            id="pillar-tamil-btn"
            className={`text-left p-4 rounded transition-all relative border ${
              activePillar === 'tamil'
                ? 'bg-[#2B211A] border-[#53665C] shadow-lg shadow-black/40 ring-1 ring-[#53665C]/50'
                : 'bg-[#241B15]/80 border-[#463429] hover:border-[#756451] hover:bg-[#2B211A]/60'
            }`}
          >
            <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-carto uppercase tracking-widest text-[#53665C] font-bold">
                03 — TAMIL MEMORY
              </span>
              <span className="text-[10px] font-mono text-[#CDBB96]/70">Antiquity</span>
            </div>
            <div className="text-sm font-heading font-semibold text-[#E6D7B9]">
              Kumari Kandam (குமரிக்கண்டம்)
            </div>
            <p className="text-xs text-[#CDBB96]/80 font-serif mt-1 line-clamp-2">
              The 49 Nadus, Pahruli river, and sunken Sangam academies (Thenmadurai) swallowed by oceanic inundations.
            </p>
            {activePillar === 'tamil' && (
              <div className="mt-2.5 flex items-center gap-1.5 text-[10px] font-carto text-[#53665C] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#53665C]" />
                Active Cartographic Layer
              </div>
            )}
          </button>
        </div>

        {/* Clear Geological Status Banner */}
        <div className="mb-6 p-3.5 rounded bg-[#241B15] border border-[#756451]/60 text-xs font-serif text-[#CDBB96] flex items-center justify-between gap-3 shadow">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-4 h-4 text-[#9A7B45] shrink-0" />
            <span>
              <strong className="text-[#E6D7B9] font-heading font-semibold uppercase tracking-wider text-[11px]">
                HISTORICAL & CONCEPTUAL LEMURIA:
              </strong>{' '}
              NOT accepted as a real sunken continent by modern geology. Indian Ocean basins are deep basaltic crust explained by plate tectonics and Gondwana rifting.
            </span>
          </div>
          <span className="shrink-0 text-[10px] font-carto uppercase tracking-widest text-[#9A7B45] border border-[#756451]/50 px-2 py-0.5 rounded">
            Disproven 1960s
          </span>
        </div>

        {/* Map Explorer: Stage + Dossier Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* ============================================================ */}
          {/* THE NAUTICAL PARCHMENT MAP STAGE                             */}
          {/* ============================================================ */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Chart Toolbar */}
            <div className="p-3 bg-[#241B15] border border-[#463429] rounded-t flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 font-mono text-[#CDBB96]">
                <Layers className="w-3.5 h-3.5 text-[#9A7B45]" />
                <span className="font-carto font-bold uppercase tracking-wider text-[11px]">
                  Geological Overlays:
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <button
                  id="toggle-tectonics-layer"
                  onClick={() => setShowTectonicsLayer(!showTectonicsLayer)}
                  className={`px-2.5 py-1.5 rounded border transition-all text-xs font-carto uppercase tracking-wider flex items-center gap-1.5 min-h-[36px] ${
                    showTectonicsLayer
                      ? 'bg-[#2B211A] text-[#8B5E4A] border-[#8B5E4A] font-bold'
                      : 'bg-[#1E1914] text-[#CDBB96]/50 border-[#463429]'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5E4A] shrink-0" />
                  <span className="sm:hidden">Tectonics</span>
                  <span className="hidden sm:inline">Central Indian Ridge (Tectonics)</span>
                </button>

                <button
                  id="toggle-fragments-layer"
                  onClick={() => setShowRealFragmentsLayer(!showRealFragmentsLayer)}
                  className={`px-2.5 py-1.5 rounded border transition-all text-xs font-carto uppercase tracking-wider flex items-center gap-1.5 min-h-[36px] ${
                    showRealFragmentsLayer
                      ? 'bg-[#2B211A] text-[#53665C] border-[#53665C] font-bold'
                      : 'bg-[#1E1914] text-[#CDBB96]/50 border-[#463429]'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#53665C] shrink-0" />
                  <span className="sm:hidden">Microcontinents</span>
                  <span className="hidden sm:inline">Real Microcontinents (Mauritia)</span>
                </button>
              </div>
            </div>

            {/* Weathered Nautical Map Container with Mouse Parallax & Dynamic Needle */}
            <div
              ref={mapContainerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#1E1914] border-x border-b border-[#463429] rounded-b overflow-hidden shadow-2xl select-none"
            >
              {/* Bathymetry Depth Lines & Hand-Drawn Cartography */}
              <svg
                viewBox="0 0 1000 650"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Parchment Ocean fill */}
                  <radialGradient id="nauticalOceanGrad" cx="50%" cy="50%" r="65%">
                    <stop offset="0%" stopColor="#251E18" />
                    <stop offset="60%" stopColor="#1E1914" />
                    <stop offset="100%" stopColor="#15110D" />
                  </radialGradient>

                  {/* Sclater 1864 Science Hatched Parchment Pattern */}
                  <pattern id="sclaterHatch" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="14" stroke="#9A7B45" strokeWidth="1.2" strokeOpacity="0.5" />
                  </pattern>

                  {/* Occult 1888 Stippled Pattern */}
                  <pattern id="occultStipple" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="4" cy="4" r="1" fill="#8B5E4A" fillOpacity="0.6" />
                    <circle cx="12" cy="12" r="1" fill="#8B5E4A" fillOpacity="0.6" />
                    <circle cx="12" cy="4" r="0.8" fill="#8B5E4A" fillOpacity="0.3" />
                  </pattern>

                  {/* Tamil Kumari Kandam Wave Pattern */}
                  <pattern id="kumariPattern" width="20" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 0 5 Q 5 0 10 5 T 20 5" fill="none" stroke="#53665C" strokeWidth="1" strokeOpacity="0.5" />
                  </pattern>

                  {/* Continental Landmass Fill - Aged Iron Gall Ink */}
                  <linearGradient id="antiqueLandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#382C23" />
                    <stop offset="100%" stopColor="#2A211A" />
                  </linearGradient>
                </defs>

                {/* Ocean Background */}
                <rect width="1000" height="650" fill="url(#nauticalOceanGrad)" />

                {/* Loxodromic Rhumb Lines (Navigational Network) with mouse parallax */}
                <g
                  transform={`translate(${mouseOffset.x * 0.5}, ${mouseOffset.y * 0.5})`}
                  stroke="#9A7B45"
                  strokeOpacity="0.15"
                  strokeWidth="0.8"
                  strokeDasharray="5 7"
                >
                  <line x1="280" y1="460" x2="680" y2="180" />
                  <line x1="360" y1="280" x2="780" y2="480" />
                  <line x1="500" y1="30" x2="500" y2="620" />
                  <line x1="80" y1="350" x2="920" y2="350" />
                  <line x1="280" y1="460" x2="520" y2="350" />
                  <line x1="520" y1="350" x2="680" y2="180" />
                  <line x1="450" y1="280" x2="480" y2="420" />
                </g>

                {/* Graticule Latitude / Longitude lines */}
                <g stroke="#9A7B45" strokeOpacity="0.1" strokeWidth="0.75" strokeDasharray="3 4">
                  <line x1="150" y1="0" x2="150" y2="650" />
                  <line x1="300" y1="0" x2="300" y2="650" />
                  <line x1="450" y1="0" x2="450" y2="650" />
                  <line x1="600" y1="0" x2="600" y2="650" />
                  <line x1="750" y1="0" x2="750" y2="650" />
                  <line x1="900" y1="0" x2="900" y2="650" />
                  <line x1="0" y1="130" x2="1000" y2="130" />
                  <line x1="0" y1="260" x2="1000" y2="260" />
                  <line x1="0" y1="390" x2="1000" y2="390" />
                  <line x1="0" y1="520" x2="1000" y2="520" />
                </g>

                {/* Classical Nautical Watermark */}
                <g transform="translate(560, 95)" opacity="0.4">
                  <text x="0" y="0" fill="#9A7B45" fontSize="13" fontFamily="Cinzel, serif" letterSpacing="5" textAnchor="middle">
                    OCEANVS INDICVS · 1864
                  </text>
                </g>

                {/* Coordinate Markers */}
                <g fill="#9A7B45" fillOpacity="0.4" fontSize="9" fontFamily="monospace">
                  <text x="18" y="125">20°N · Tropic of Cancer</text>
                  <text x="18" y="255">0° · Aequator</text>
                  <text x="18" y="385">20°S · Tropic of Capricorn</text>
                  <text x="18" y="515">40°S · Mare Australe</text>
                  <text x="305" y="635">40°E</text>
                  <text x="455" y="635">60°E</text>
                  <text x="605" y="635">80°E</text>
                  <text x="755" y="635">100°E</text>
                </g>

                {/* Real Continental Coastlines (Approximations) */}
                <g transform={`translate(${mouseOffset.x * 0.3}, ${mouseOffset.y * 0.3})`}>
                  {/* Africa East Coast */}
                  <path
                    d="M 180 50 Q 210 140 240 220 Q 280 290 270 380 Q 250 460 210 540 L 120 560 L 120 50 Z"
                    fill="url(#antiqueLandGrad)"
                    stroke="#463429"
                    strokeWidth="1.5"
                  />
                  <text x="180" y="270" fill="#CDBB96" fillOpacity="0.5" fontSize="11" fontWeight="bold" fontFamily="Cinzel, serif">
                    AFRICA
                  </text>

                  {/* Madagascar */}
                  <path
                    d="M 350 360 C 370 390 380 450 360 500 C 345 490 335 440 338 390 Z"
                    fill="#382C23"
                    stroke="#756451"
                    strokeWidth="1.2"
                  />
                  <text x="365" y="430" fill="#CDBB96" fontSize="10" fontWeight="bold" fontFamily="Cinzel, serif">
                    Madagascar
                  </text>

                  {/* Indian Subcontinent */}
                  <path
                    d="M 530 110 L 610 120 L 670 140 L 680 180 L 650 260 L 620 280 L 580 240 L 540 180 Z"
                    fill="url(#antiqueLandGrad)"
                    stroke="#756451"
                    strokeWidth="1.2"
                  />
                  <text x="590" y="190" fill="#E6D7B9" fontSize="12" fontWeight="bold" fontFamily="Cinzel, serif">
                    INDIA
                  </text>

                  {/* Sri Lanka (Ceylon) */}
                  <ellipse cx="645" cy="290" rx="9" ry="13" fill="#382C23" stroke="#756451" strokeWidth="1" />

                  {/* Arabian Peninsula */}
                  <path
                    d="M 280 90 L 360 110 L 420 150 L 390 190 L 320 160 Z"
                    fill="url(#antiqueLandGrad)"
                    stroke="#463429"
                    strokeWidth="1"
                  />

                  {/* Australia Northwest */}
                  <path
                    d="M 860 380 Q 920 420 960 450 L 960 620 L 840 620 Q 820 500 860 380 Z"
                    fill="url(#antiqueLandGrad)"
                    stroke="#463429"
                    strokeWidth="1.2"
                  />
                  <text x="880" y="520" fill="#CDBB96" fillOpacity="0.5" fontSize="11" fontWeight="bold" fontFamily="Cinzel, serif">
                    AUSTRALIA
                  </text>
                </g>

                {/* ============================================================ */}
                {/* HISTORICAL CARTOGRAPHIC LAYER: SWITCHES BASED ON THREE PILLARS */}
                {/* ============================================================ */}

                {/* 1. SCIENCE: Sclater's 1864 Dispersal Bridge */}
                {activePillar === 'science' && (
                  <g id="layer-science-bridge">
                    <path
                      d="M 360 480 
                         C 340 400, 390 320, 440 300 
                         C 500 280, 580 200, 630 180 
                         C 670 210, 650 280, 600 360 
                         C 560 420, 530 520, 460 550 
                         C 390 570, 370 520, 360 480 Z"
                      fill="url(#sclaterHatch)"
                      stroke="#9A7B45"
                      strokeWidth="1.8"
                      strokeDasharray="6 4"
                    />
                    <text
                      x="490"
                      y="390"
                      fill="#CDBB96"
                      fontSize="13"
                      fontWeight="bold"
                      fontFamily="Cinzel, serif"
                      letterSpacing="3"
                      textAnchor="middle"
                    >
                      LEMURIA (1864)
                    </text>
                    <text
                      x="490"
                      y="408"
                      fill="#9A7B45"
                      fontSize="9"
                      fontFamily="monospace"
                      textAnchor="middle"
                    >
                      Sclater’s Hypothetical Mammalian Corridor
                    </text>
                  </g>
                )}

                {/* 2. OCCULT: Blavatsky's 1888 Occult Southern Continent */}
                {activePillar === 'occult' && (
                  <g id="layer-occult-realm">
                    {/* Vast Pacific-Indian continent spanning east to Australia */}
                    <path
                      d="M 330 520 
                         C 310 380, 420 280, 510 260 
                         C 600 240, 720 220, 830 300 
                         C 910 360, 920 540, 820 580 
                         C 700 620, 520 620, 420 590 
                         C 350 570, 330 540, 330 520 Z"
                      fill="url(#occultStipple)"
                      stroke="#8B5E4A"
                      strokeWidth="1.8"
                      strokeDasharray="4 4"
                    />
                    <text
                      x="610"
                      y="420"
                      fill="#E6D7B9"
                      fontSize="13"
                      fontWeight="bold"
                      fontFamily="Cinzel, serif"
                      letterSpacing="3"
                      textAnchor="middle"
                    >
                      OCCULT LEMURIA (1888)
                    </text>
                    <text
                      x="610"
                      y="438"
                      fill="#8B5E4A"
                      fontSize="9"
                      fontFamily="monospace"
                      textAnchor="middle"
                    >
                      Third Root Race Spiritual Domain · The Secret Doctrine
                    </text>
                  </g>
                )}

                {/* 3. TAMIL MEMORY: Kumari Kandam (குமரிக்கண்டம்) */}
                {activePillar === 'tamil' && (
                  <g id="layer-tamil-memory">
                    {/* Landmass south of Cape Comorin (Kanyakumari) encompassing Thenmadurai */}
                    <path
                      d="M 580 270 
                         C 570 330, 530 380, 520 440 
                         C 510 500, 560 560, 620 560 
                         C 680 560, 710 480, 690 380 
                         C 670 310, 645 280, 620 280 Z"
                      fill="url(#kumariPattern)"
                      stroke="#53665C"
                      strokeWidth="1.8"
                      strokeDasharray="5 3"
                    />
                    {/* Ancient Pahruli River representation */}
                    <path
                      d="M 610 320 Q 590 390 620 460 Q 600 500 580 540"
                      fill="none"
                      stroke="#53665C"
                      strokeWidth="1.5"
                      strokeDasharray="2 2"
                    />
                    <text
                      x="640"
                      y="430"
                      fill="#CDBB96"
                      fontSize="12"
                      fontWeight="bold"
                      fontFamily="Cinzel, serif"
                      letterSpacing="2"
                      textAnchor="middle"
                    >
                      KUMARI KANDAM
                    </text>
                    <text
                      x="640"
                      y="448"
                      fill="#53665C"
                      fontSize="9"
                      fontFamily="sans-serif"
                      textAnchor="middle"
                    >
                      குமரிக்கண்டம் · 49 Nadus & Pahruli River
                    </text>
                  </g>
                )}

                {/* LAYER 2: Tectonic Spreading Centers (Central, SW, SE Indian Ridges) */}
                {showTectonicsLayer && (
                  <g id="svg-tectonic-ridges" opacity="0.85">
                    {/* Central Indian Ridge */}
                    <path
                      d="M 470 230 Q 520 320 560 400"
                      stroke="#8B5E4A"
                      strokeWidth="2.5"
                      fill="none"
                      strokeDasharray="3 3"
                    />
                    {/* Southwest Indian Ridge */}
                    <path
                      d="M 560 400 Q 480 480 400 580"
                      stroke="#8B5E4A"
                      strokeWidth="2.5"
                      fill="none"
                      strokeDasharray="3 3"
                    />
                    {/* Southeast Indian Ridge */}
                    <path
                      d="M 560 400 Q 660 470 780 540"
                      stroke="#8B5E4A"
                      strokeWidth="2.5"
                      fill="none"
                      strokeDasharray="3 3"
                    />
                    {/* Rodriguez Triple Junction */}
                    <circle cx="560" cy="400" r="5" fill="#8B5E4A" stroke="#2B211A" strokeWidth="1" />
                    <text x="575" y="405" fill="#8B5E4A" fontSize="9" fontFamily="monospace">
                      Triple Junction (Seafloor Spreading)
                    </text>
                  </g>
                )}

                {/* LAYER 3: Real Continental Fragments (Mauritia & Seychelles) */}
                {showRealFragmentsLayer && (
                  <g id="svg-real-fragments" opacity="0.9">
                    {/* Seychelles Granitic Plateau */}
                    <ellipse cx="440" cy="350" rx="16" ry="11" fill="none" stroke="#53665C" strokeWidth="1.5" strokeDasharray="2 2" />
                    <circle cx="440" cy="350" r="3" fill="#53665C" />
                    <text x="445" y="340" fill="#CDBB96" fontSize="8.5" fontFamily="monospace">
                      Seychelles (Granite Block)
                    </text>

                    {/* Mauritia Microcontinent */}
                    <ellipse cx="465" cy="465" rx="20" ry="14" fill="#53665C" fillOpacity="0.2" stroke="#53665C" strokeWidth="1.5" />
                    <circle cx="465" cy="465" r="3.5" fill="#53665C" />
                    <text x="475" y="470" fill="#E6D7B9" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
                      Mauritia (2013 Shard)
                    </text>
                  </g>
                )}

                {/* ============================================================ */}
                {/* INTERACTIVE INK PINS & ANNOTATION HOTSPOTS                   */}
                {/* ============================================================ */}
                {MAP_FEATURES.map((feature) => {
                  const x = (feature.coordinates.x / 100) * 1000;
                  const y = (feature.coordinates.y / 100) * 650;
                  const isSelected = selectedFeature.id === feature.id;
                  const isHovered = hoveredFeature?.id === feature.id;

                  // Ink pin styling: dark iron gall center with fine brass ring
                  return (
                    <g
                      key={feature.id}
                      className="cursor-pointer"
                      onClick={() => setSelectedFeature(feature)}
                      onMouseEnter={() => setHoveredFeature(feature)}
                      onMouseLeave={() => setHoveredFeature(null)}
                      onTouchStart={() => setHoveredFeature(feature)}
                      transform={`translate(0, ${isHovered ? -3 : 0})`}
                      style={{ transition: 'transform 0.2s ease-out' }}
                    >
                      {/* Selection indicator ring */}
                      {isSelected && (
                        <circle
                          cx={x}
                          cy={y}
                          r="14"
                          fill="none"
                          stroke="#9A7B45"
                          strokeWidth="1"
                          strokeDasharray="3 3"
                        />
                      )}

                      {/* Outer Brass Ring */}
                      <circle
                        cx={x}
                        cy={y}
                        r={isSelected ? 9 : 7}
                        fill="#2B211A"
                        stroke="#9A7B45"
                        strokeWidth={isSelected ? 1.5 : 1}
                      />

                      {/* Ink Pin Head */}
                      <circle
                        cx={x}
                        cy={y}
                        r={isSelected ? 4.5 : 3.5}
                        fill="#E6D7B9"
                      />

                      {/* Small Label below pin */}
                      <text
                        x={x}
                        y={y + 16}
                        fill="#CDBB96"
                        fontSize="8.5"
                        fontFamily="Cinzel, serif"
                        textAnchor="middle"
                        className="pointer-events-none drop-shadow"
                      >
                        {feature.name.split('(')[0]}
                      </text>
                    </g>
                  );
                })}

                {/* Interactive Compass Rose with Dynamic Needle responding to cursor */}
                <g transform="translate(870, 110) scale(0.65)">
                  <circle cx="0" cy="0" r="65" stroke="#756451" strokeWidth="1" strokeDasharray="3 4" fill="none" />
                  <circle cx="0" cy="0" r="55" stroke="#9A7B45" strokeWidth="1.2" fill="none" />
                  
                  {/* Fixed Cardial labels */}
                  <text x="0" y="-62" textAnchor="middle" fill="#E6D7B9" fontSize="10" fontFamily="Cinzel, serif" fontWeight="bold">N</text>
                  <text x="62" y="3" textAnchor="middle" fill="#CDBB96" fontSize="9" fontFamily="Cinzel, serif">E</text>
                  <text x="0" y="70" textAnchor="middle" fill="#CDBB96" fontSize="9" fontFamily="Cinzel, serif">S</text>
                  <text x="-62" y="3" textAnchor="middle" fill="#CDBB96" fontSize="9" fontFamily="Cinzel, serif">W</text>

                  {/* Rotatable Needle pointing toward mouse cursor */}
                  <g transform={`rotate(${needleAngle})`}>
                    {/* North pointer (brass) */}
                    <polygon points="0,-48 6,-8 0,0 -6,-8" fill="#9A7B45" />
                    {/* South pointer (dark ink) */}
                    <polygon points="0,48 -6,8 0,0 6,8" fill="#463429" />
                    <circle cx="0" cy="0" r="3" fill="#E6D7B9" />
                  </g>
                </g>
              </svg>

              {/* ============================================================ */}
              {/* HOVER PAPER ANNOTATION SLIP (SUBTLE PAPER SHADOW, NO NEON)    */}
              {/* ============================================================ */}
              <AnimatePresence>
                {hoveredFeature && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      left: `${Math.min(Math.max(hoveredFeature.coordinates.x, 15), 75)}%`,
                      top: `${Math.max(hoveredFeature.coordinates.y - 18, 8)}%`,
                    }}
                    className="absolute pointer-events-none z-30 max-w-xs -translate-x-1/2 p-3 rounded bg-[#FAF6EE] text-[#1E1914] border border-[#756451] shadow-[0_8px_20px_rgba(0,0,0,0.6)] font-serif text-xs"
                  >
                    {/* Paper Corner Notch */}
                    <div className="text-[10px] font-carto uppercase tracking-widest text-[#8B5E4A] font-bold border-b border-[#CDBB96] pb-1 mb-1">
                      Field Note · {hoveredFeature.region}
                    </div>
                    <div className="font-heading font-bold text-xs text-[#2B211A]">
                      {hoveredFeature.name}
                    </div>
                    <p className="mt-1 text-[11px] text-[#463429] leading-snug">
                      {hoveredFeature.id === 'mf-mauritia'
                        ? 'MAURITIA: Precambrian continental material beneath the Indian Ocean. NOT EVIDENCE FOR THE TRADITIONAL LEMURIA MAP.'
                        : hoveredFeature.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Left Chart Note */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:right-auto bg-[#2B211A]/90 border border-[#756451]/70 px-3 py-1.5 rounded text-[10px] sm:text-[11px] font-mono text-[#CDBB96] flex items-center gap-2 shadow">
                <Compass className="w-3.5 h-3.5 text-[#9A7B45] shrink-0" />
                <span className="font-carto">
                  <span className="hidden sm:inline">Hover pins for field note slips · Click to open full dossier</span>
                  <span className="sm:hidden">Tap a pin for details</span>
                </span>
              </div>
            </div>

            {/* Map Pin Legend */}
            <div className="mt-3 p-3 bg-[#241B15] border border-[#463429] rounded flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-carto uppercase tracking-wider text-[#CDBB96]/80">
              <span className="text-[#9A7B45] font-bold">Legend:</span>
              {(
                [
                  { type: 'kumari_kandam', label: 'Tamil Memory Site', color: '#53665C' },
                  { type: 'fossil_site', label: 'Fossil / Biogeography', color: '#9A7B45' },
                  { type: 'hypothesis_land', label: "Sclater's Hypothesis", color: '#8B5E4A' },
                  { type: 'modern_geology', label: 'Real Microcontinent', color: '#53665C' },
                  { type: 'ocean_ridge', label: 'Tectonic Ridge', color: '#8B5E4A' },
                ] as const
              ).map((item) => (
                <span key={item.type} className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full border shrink-0"
                    style={{ backgroundColor: '#2B211A', borderColor: item.color }}
                  />
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* ============================================================ */}
          {/* INSPECTOR PANEL: FIELD DOSSIER FOLIO                         */}
          {/* ============================================================ */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="h-full p-5 bg-[#241B15] border border-[#463429] rounded flex flex-col justify-between shadow-xl relative">
              <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
              <span className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full brass-stud" />
              <span className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
              <span className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full brass-stud" />

              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#463429]">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#9A7B45]" />
                    <span className="text-xs font-carto text-[#E6D7B9] uppercase tracking-widest font-bold">
                      Hydrographic Dossier
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-carto uppercase tracking-wider bg-[#2B211A] text-[#9A7B45] border border-[#756451]/50">
                    {selectedFeature.type.replace('_', ' ')}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold font-heading text-[#E6D7B9]">
                    {selectedFeature.name}
                  </h3>
                  <div className="text-xs font-mono text-[#9A7B45] mt-0.5">
                    {selectedFeature.region}
                  </div>
                </div>

                <div className="p-3.5 rounded bg-[#1E1914] border border-[#463429] text-xs font-serif text-[#CDBB96]">
                  <span className="text-[11px] font-heading font-semibold text-[#E6D7B9] uppercase tracking-wider block mb-1">
                    {selectedFeature.title}
                  </span>
                  <p className="text-xs leading-relaxed text-[#CDBB96]/90">
                    {selectedFeature.description}
                  </p>
                </div>

                {/* Historical Claim vs Modern Reality */}
                <div className="space-y-2.5 pt-1">
                  <div className="p-3 rounded bg-[#1E1914] border border-[#756451]/40">
                    <span className="text-[10px] font-carto uppercase text-[#9A7B45] font-bold block mb-1 tracking-wider">
                      Victorian Hypothesis (1864)
                    </span>
                    <p className="text-xs text-[#CDBB96]/80 leading-relaxed font-serif">
                      {selectedFeature.historicalContext}
                    </p>
                  </div>

                  <div className="p-3 rounded bg-[#1E1914] border border-[#53665C]/50">
                    <span className="text-[10px] font-carto uppercase text-[#53665C] font-bold block mb-1 tracking-wider">
                      Modern Geological Reality
                    </span>
                    <p className="text-xs text-[#CDBB96]/90 leading-relaxed font-serif">
                      {selectedFeature.modernConsensus}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hotspot Switcher Pills */}
              <div className="mt-6 pt-4 border-t border-[#463429]">
                <span className="text-[10px] font-carto uppercase tracking-wider text-[#9A7B45] block mb-2 font-semibold">
                  Select Field Hotspot:
                </span>
                <div className="grid grid-cols-2 gap-1.5 text-xs">
                  {MAP_FEATURES.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedFeature(f)}
                      className={`p-1.5 px-2 rounded text-left truncate transition-colors font-carto text-[11px] ${
                        selectedFeature.id === f.id
                          ? 'bg-[#9A7B45] text-[#FAF6EE] font-bold shadow'
                          : 'bg-[#1E1914] text-[#CDBB96]/70 hover:text-[#E6D7B9] border border-[#463429]'
                      }`}
                    >
                      {f.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
