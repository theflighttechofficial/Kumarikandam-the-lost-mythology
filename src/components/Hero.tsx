interface HeroProps {
  onOpenRealModal: () => void;
}

// The three ways "Lemuria" has been told, in the order they appeared.
const STRANDS = [
  {
    year: '1864',
    name: 'Zoology',
    text: 'Philip Sclater proposes a sunken land bridge to explain lemur fossils in India and Madagascar.',
    href: '#what-is-lemuria',
  },
  {
    year: '1888',
    name: 'Theosophy',
    text: 'Helena Blavatsky recasts Lemuria as the home of a lost "root race".',
    href: '#science-vs-myth',
  },
  {
    year: '1900s',
    name: 'Tamil revival',
    text: 'Scholars link it to Kumari Kandam, the southern lands the Sangam commentaries say the sea took.',
    href: '#kumari-kandam',
  },
];

export function Hero({ onOpenRealModal }: HeroProps) {
  return (
    <section className="border-b border-[color:var(--bd-463429)] bg-[color:var(--section-1E1914)]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 lg:pt-20 lg:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Text column */}
        <div className="lg:col-span-7">
          <p lang="ta" className="text-lg sm:text-xl text-[color:var(--fg-9A7B45)]" style={{ fontFamily: "'Noto Serif Tamil', serif" }}>
            குமரிக் கண்டம்
          </p>
          <h1 className="mt-3 font-heading font-bold text-[color:var(--fg-E6D7B9)] text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-[0.04em]">
            Kumari Kandam
          </h1>
          <p className="mt-4 font-serif italic text-2xl sm:text-3xl text-[color:var(--fg-CDBB96)] leading-snug max-w-[34ch]">
            Did a continent sink south of India?
          </p>
          <p className="mt-6 font-serif text-lg text-[color:var(--fg-CDBB96)]/85 leading-relaxed max-w-[60ch]">
            No, according to plate tectonics. But the idea has three separate histories, and each one says
            something real about the people who believed it. This atlas follows all three, then tests them against
            the sea floor.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#interactive-map"
              id="hero-open-atlas-btn"
              className="inline-flex items-center px-6 py-3 rounded bg-[color:var(--bg-9A7B45)] hover:bg-[color:var(--bg-8B5E4A)] text-[color:var(--fg-14100D)] font-heading font-bold text-sm tracking-[0.12em] uppercase"
            >
              Open the map
            </a>
            <button
              id="hero-is-lemuria-real-btn"
              onClick={onOpenRealModal}
              className="font-serif text-lg text-[color:var(--fg-E6D7B9)] underline decoration-[color:var(--fg-756451)] underline-offset-4 hover:decoration-[color:var(--fg-9A7B45)]"
            >
              Read the short verdict
            </button>
          </div>

          {/* The three strands, as an ordered index rather than cards */}
          <ol className="mt-14 border-t border-[color:var(--bd-463429)]">
            {STRANDS.map((s) => (
              <li key={s.year} className="border-b border-[color:var(--bd-463429)]">
                <a href={s.href} className="grid grid-cols-[4.5rem_1fr] sm:grid-cols-[5.5rem_9rem_1fr] gap-x-4 gap-y-1 py-4 group">
                  <span className="font-mono text-sm text-[color:var(--fg-9A7B45)] pt-0.5">{s.year}</span>
                  <span className="font-heading text-sm uppercase tracking-[0.12em] text-[color:var(--fg-E6D7B9)] group-hover:text-[color:var(--fg-FAF6EE)] pt-0.5">
                    {s.name}
                  </span>
                  <span className="col-start-2 sm:col-start-auto font-serif text-base text-[color:var(--fg-CDBB96)]/90 leading-snug">
                    {s.text}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Map column: the 1864 land bridge drawn over present-day coastlines */}
        <figure className="lg:col-span-5 lg:sticky lg:top-24">
          <svg
            viewBox="0 0 600 440"
            className="w-full h-auto border border-[color:var(--bd-463429)] bg-[color:var(--bg-1A1511)]"
            role="img"
            aria-label="Schematic map of the Indian Ocean with the hypothesised Lemuria land bridge between Madagascar and India"
          >
            <defs>
              <pattern id="hero-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <path d="M0 0V7" stroke="var(--bd-8B5E4A)" strokeWidth="1.2" />
              </pattern>
            </defs>
            <g fill="var(--bg-2B211A)" stroke="var(--bd-756451)" strokeWidth="1.4" strokeLinejoin="round">
              <path d="M0 0 H86 Q96 40 118 70 Q128 110 112 150 Q100 190 92 230 Q82 290 60 340 Q40 400 30 440 H0 Z" />
              <path d="M150 0 H236 Q230 26 206 44 Q180 58 160 40 Q150 20 150 0 Z" />
              <path d="M268 0 H392 Q404 30 384 60 Q362 92 346 130 Q330 170 316 214 Q310 232 302 238 Q294 230 290 212 Q280 170 270 130 Q258 90 252 56 Q256 22 268 0 Z" />
              <path d="M328 238 Q340 232 344 250 Q342 268 330 268 Q320 258 328 238 Z" />
              <path d="M146 250 Q160 238 168 262 Q172 300 160 340 Q150 368 138 356 Q128 320 132 290 Q136 262 146 250 Z" />
              <path d="M600 150 Q560 170 548 220 Q540 270 560 320 Q576 356 600 364 Z" />
            </g>
            <path
              d="M150 250 Q200 214 262 224 Q300 236 330 262 Q380 300 400 350 Q360 400 290 396 Q220 390 170 350 Q150 300 150 250 Z"
              fill="url(#hero-hatch)"
              stroke="var(--bd-8B5E4A)"
              strokeWidth="1.4"
              strokeDasharray="6 5"
              opacity="0.9"
            />
            <g fontFamily="Cinzel, serif" fill="var(--fg-CDBB96)" fontSize="14" letterSpacing="1.5">
              <text x="18" y="200">AFRICA</text>
              <text x="320" y="70" textAnchor="middle">INDIA</text>
              <text x="592" y="390" textAnchor="end">AUSTRALIA</text>
            </g>
            <g fontFamily="'IBM Plex Mono', monospace" fill="var(--fg-A08D72)" fontSize="12">
              <text x="118" y="388">Madagascar</text>
              <text x="352" y="262">Sri Lanka</text>
            </g>
            <text x="276" y="330" textAnchor="middle" fontFamily="Cinzel, serif" fontWeight="700" fontSize="20" letterSpacing="3" fill="var(--fg-B98A6E)">
              LEMURIA
            </text>
          </svg>
          <figcaption className="mt-3 font-serif text-sm text-[color:var(--fg-CDBB96)]/85 leading-relaxed">
            Hatched: the land bridge as Victorian zoologists imagined it. Schematic, not to scale. Continental drift
            replaced the idea; the sea floor here is young oceanic crust.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
