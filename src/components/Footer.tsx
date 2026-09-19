import { FormEvent, useState } from 'react';
import { Code2, Compass, ExternalLink, HelpCircle, Mail, ShieldAlert } from 'lucide-react';

interface FooterProps {
  onOpenRealModal: () => void;
  onOpenVsCodeModal: () => void;
}

const FOLIO_LINKS = [
  { label: 'Origins (1864 Hypothesis)', href: '#what-is-lemuria' },
  { label: 'Expedition Map', href: '#interactive-map' },
  { label: 'Kumari Kandam Archives', href: '#kumari-kandam' },
  { label: 'Chronometer Timeline', href: '#timeline' },
];

const RESEARCH_LINKS = [
  { label: 'Science vs. Myth & Quiz', href: '#science-vs-myth' },
  { label: 'Other Lost Lands', href: '#related-lands' },
  { label: 'Field Notes & Manifest', href: '#productivity' },
  { label: 'Cartographic Sources', href: '#sources' },
];

export function Footer({ onOpenRealModal, onOpenVsCodeModal }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="relative bg-[#140F0C] pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* ============================================================ */}
        {/* THE FIELD DISPATCH — parchment closing folio card             */}
        {/* ============================================================ */}
        <div className="rounded-lg overflow-hidden border border-[#9A7B45]/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] bg-gradient-to-b from-[#F1E6C9] to-[#E6D7B9]">
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Wordmark + Mission (left, spans 2) */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#2B211A] border border-[#8B5E4A] flex items-center justify-center shrink-0">
                    <Compass className="w-4.5 h-4.5 text-[#CDBB96]" />
                  </div>
                  <span className="font-heading font-bold text-2xl tracking-[0.15em] text-[#8B5E4A]">
                    LEMURIA
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#463429] font-serif leading-relaxed max-w-sm">
                  A cartographic research atlas investigating Sclater&rsquo;s 1864 land-bridge hypothesis, plate tectonics, and the Tamil Kumari Kandam tradition. Every claim on this site is cross-checked against a primary source before it&rsquo;s published.
                </p>
              </div>

              {/* Newsletter (right, spans 3) */}
              <div className="lg:col-span-3 lg:pl-6 lg:border-l border-[#9A7B45]/30">
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#2B211A] mb-1">
                  The Field Dispatch
                </h3>
                <p className="text-xs sm:text-sm text-[#463429]/80 font-serif mb-4 max-w-md">
                  One note a month: a newly digitized primary source, a re-plotted map coordinate, or a fresh &ldquo;lost land&rdquo; comparison. Demo only — this form doesn&rsquo;t send real emails.
                </p>
                {subscribed ? (
                  <div className="flex items-center gap-2 text-sm text-[#53665C] font-carto font-semibold">
                    <Mail className="w-4 h-4" />
                    <span>Noted — thank you for reading.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      id="footer-newsletter-email"
                      className="flex-1 px-3.5 py-2.5 text-sm rounded bg-[#FAF6EE] border border-[#9A7B45]/40 text-[#2B211A] placeholder-[#756451]/60 focus:outline-none focus:border-[#8B5E4A] font-serif"
                    />
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded bg-[#8B5E4A] hover:bg-[#75503D] text-[#FAF6EE] text-xs font-bold uppercase tracking-wider font-carto transition-colors shadow-sm whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Link Columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-10 pt-8 border-t border-[#9A7B45]/25">
              <div className="space-y-2.5">
                <span className="block text-[11px] font-carto font-bold uppercase tracking-widest text-[#8B5E4A]">
                  Explore the Atlas
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#463429] font-serif">
                  {FOLIO_LINKS.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="hover:text-[#2B211A] hover:underline transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2.5">
                <span className="block text-[11px] font-carto font-bold uppercase tracking-widest text-[#8B5E4A]">
                  Research Desk
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#463429] font-serif">
                  {RESEARCH_LINKS.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="hover:text-[#2B211A] hover:underline transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2.5">
                <span className="block text-[11px] font-carto font-bold uppercase tracking-widest text-[#8B5E4A]">
                  The Inquest
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#463429] font-serif">
                  <li>
                    <button
                      id="footer-real-modal-btn"
                      onClick={onOpenRealModal}
                      className="flex items-center gap-1.5 hover:text-[#2B211A] hover:underline transition-colors text-left"
                    >
                      <HelpCircle className="w-3.5 h-3.5 text-[#8B5E4A] shrink-0" />
                      <span>Is Lemuria Real?</span>
                    </button>
                  </li>
                  <li>
                    <button
                      id="footer-vscode-modal-btn"
                      onClick={onOpenVsCodeModal}
                      className="flex items-center gap-1.5 hover:text-[#2B211A] hover:underline transition-colors text-left"
                    >
                      <Code2 className="w-3.5 h-3.5 text-[#8B5E4A] shrink-0" />
                      <span>View Source (VS Code)</span>
                    </button>
                  </li>
                </ul>
              </div>

              <div className="space-y-2.5">
                <span className="flex items-center gap-1.5 text-[11px] font-carto font-bold uppercase tracking-widest text-[#8B5E4A]">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Baseline
                </span>
                <p className="text-[11px] sm:text-xs text-[#463429]/85 font-serif leading-relaxed">
                  Gondwana rifted ~180&ndash;88 Ma; granitic crust cannot vertically subside into the mantle. No sunken continent is required to explain lemur distribution or Kumari Kandam.
                </p>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* ILLUSTRATED SKYLINE — Dravidian gopurams meeting the sea      */}
          {/* ============================================================ */}
          <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
            <svg viewBox="0 0 1200 220" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
              <defs>
                <linearGradient id="footerSeaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#CDBB96" />
                  <stop offset="55%" stopColor="#9FAE9F" />
                  <stop offset="100%" stopColor="#53665C" />
                </linearGradient>
              </defs>
              <rect width="1200" height="220" fill="url(#footerSeaGrad)" />

              {/* Distant gopuram (partially submerged, evoking Kumari Kandam) */}
              <g fill="#3D4F47" opacity="0.55">
                <rect x="150" y="150" width="46" height="70" />
                <polygon points="150,150 196,150 190,136 156,136" />
                <polygon points="156,136 190,136 184,124 162,124" />
                <polygon points="162,124 184,124 179,113 167,113" />
                <polygon points="167,113 179,113 173,100 173,100" />
                <circle cx="173" cy="96" r="4" />
              </g>

              {/* Central Dravidian gopuram tower (Meenakshi-style stepped tiers) */}
              <g fill="#2B3A34">
                <rect x="540" y="120" width="90" height="100" />
                <polygon points="540,120 630,120 618,100 552,100" />
                <polygon points="552,100 618,100 608,83 562,83" />
                <polygon points="562,83 608,83 599,68 571,68" />
                <polygon points="571,68 599,68 592,55 578,55" />
                <polygon points="578,55 592,55 585,42 585,42" />
                <rect x="581" y="30" width="8" height="14" />
                <circle cx="585" cy="26" r="5" />
                {/* doorway */}
                <rect x="574" y="185" width="22" height="35" fill="#141914" />
              </g>

              {/* Secondary smaller gopuram to the right */}
              <g fill="#3D4F47" opacity="0.75">
                <rect x="760" y="145" width="60" height="75" />
                <polygon points="760,145 820,145 810,128 770,128" />
                <polygon points="770,128 810,128 802,113 778,113" />
                <polygon points="778,113 802,113 795,100 785,100" />
                <circle cx="790" cy="94" r="4" />
              </g>

              {/* Simple lateen-sail boat, evoking a coastal trading vessel */}
              <g fill="#2B3A34" opacity="0.7">
                <path d="M 960 195 L 1030 195 L 1015 205 L 975 205 Z" />
                <line x1="995" y1="195" x2="995" y2="150" stroke="#2B3A34" strokeWidth="2" />
                <path d="M 995 152 L 1030 190 L 995 190 Z" />
              </g>

              {/* Foreground wave line */}
              <path
                d="M 0 210 Q 60 200 120 210 T 240 210 T 360 210 T 480 210 T 600 210 T 720 210 T 840 210 T 960 210 T 1080 210 T 1200 210 V 220 H 0 Z"
                fill="#1E1914"
                opacity="0.9"
              />
            </svg>
          </div>
        </div>

        {/* ============================================================ */}
        {/* BOTTOM BAR                                                    */}
        {/* ============================================================ */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9A7B45] gap-3 font-carto">
          <div className="uppercase tracking-wider text-[10px]">
            &copy; 2026 Lemuria Cartographic Expedition Archive &middot; Educational Use Only
          </div>
          <a
            href="https://opensource.org/licenses/MIT"
            className="flex items-center gap-1 text-[10px] text-[#CDBB96]/70 hover:text-[#E6D7B9] uppercase tracking-wider transition-colors"
          >
            MIT Licensed <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
