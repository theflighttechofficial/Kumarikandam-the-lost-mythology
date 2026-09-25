import { CSSProperties, Fragment, useCallback, useEffect, useRef, useState } from 'react';

interface IntroFilmProps {
  onFinish: () => void;
}

// Chapter boundaries in milliseconds of film time.
const CHAPTERS = [
  { name: 'The hypothesis', s: 0, e: 4500 },
  { name: 'Kumari Kandam', s: 4500, e: 9500 },
  { name: 'Timeline', s: 9500, e: 14500 },
  { name: 'The evidence', s: 14500, e: 19500 },
  { name: 'The explorer', s: 19500, e: 24000 },
];
const TOTAL = 24000;

const EVENTS = [
  { y: '1864', w: 'Philip Sclater proposes Lemuria to explain lemur fossils', k: 'Hypothesis' },
  { y: '1870s', w: "Ernst Haeckel places humanity's cradle on Lemuria", k: 'Hypothesis' },
  { y: '1888', w: 'Helena Blavatsky folds Lemuria into Theosophy', k: 'Myth' },
  { y: '1900s', w: 'Tamil revivalists identify Lemuria with Kumari Kandam', k: 'Culture' },
  { y: '1904', w: 'W. Scott-Elliot publishes The Lost Lemuria', k: 'Myth' },
  { y: '1912', w: 'Alfred Wegener proposes continental drift', k: 'Science' },
  { y: '1960s', w: 'Plate tectonics is accepted', k: 'Science' },
  { y: '2013', w: 'Mauritia microcontinent found under Mauritius', k: 'Science' },
  { y: '2017', w: "Zealandia formalised as Earth's eighth continent", k: 'Science' },
];

const STEPS = ['Map', 'Sangam', 'Science vs myth', 'Timeline', 'Lost lands', 'Notebook'];

function chapterAt(t: number) {
  const i = CHAPTERS.findIndex((c) => t >= c.s && t < c.e);
  return i === -1 ? CHAPTERS.length - 1 : i;
}

function eventAt(local: number) {
  return Math.min(EVENTS.length - 1, Math.floor(Math.max(0, local - 200) / 500));
}

function fmt(ms: number) {
  const s = Math.floor(ms / 1000);
  return `00:${s < 10 ? '0' : ''}${s}`;
}

/* ── Schematic Indian Ocean map (not to scale) ── */
interface MapProps {
  id: string;
  drawIndia?: boolean;
  tect?: boolean;
  maur?: boolean;
  mythAnim?: string;
}

function OceanMap({ id, drawIndia, tect, maur, mythAnim }: MapProps) {
  const mythStyle: CSSProperties = mythAnim ? { animation: mythAnim } : {};
  return (
    <svg className="lf-map" viewBox="0 0 600 440" role="img" aria-label="Schematic map of the Indian Ocean">
      <defs>
        <pattern id={`lf-hatch-${id}`} width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <path d="M0 0V7" stroke="var(--lf-blood)" strokeWidth="1.4" />
        </pattern>
        <pattern id={`lf-waves-${id}`} width="24" height="10" patternUnits="userSpaceOnUse">
          <path d="M0 6 Q6 1 12 6 T24 6" fill="none" stroke="var(--lf-sea-l)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="600" height="440" fill={`url(#lf-waves-${id})`} opacity=".7" />
      {/* Africa */}
      <path className="lf-land" d="M0 0 H86 Q96 40 118 70 Q128 110 112 150 Q100 190 92 230 Q82 290 60 340 Q40 400 30 440 H0 Z" />
      {/* Arabia */}
      <path className="lf-land" d="M150 0 H236 Q230 26 206 44 Q180 58 160 40 Q150 20 150 0 Z" />
      {/* India */}
      <path
        className="lf-land"
        d="M268 0 H392 Q404 30 384 60 Q362 92 346 130 Q330 170 316 214 Q310 232 302 238 Q294 230 290 212 Q280 170 270 130 Q258 90 252 56 Q256 22 268 0 Z"
        style={drawIndia ? { strokeDasharray: 1100, animation: 'lf-draw 1.6s ease .3s both' } : undefined}
      />
      {/* Sri Lanka */}
      <path className="lf-land" d="M328 238 Q340 232 344 250 Q342 268 330 268 Q320 258 328 238 Z" />
      {/* Madagascar */}
      <path className="lf-land" d="M146 250 Q160 238 168 262 Q172 300 160 340 Q150 368 138 356 Q128 320 132 290 Q136 262 146 250 Z" />
      {/* Australia */}
      <path className="lf-land" d="M600 150 Q560 170 548 220 Q540 270 560 320 Q576 356 600 364 Z" />
      <text className="lf-lbl-big" x="18" y="200">AFRICA</text>
      <text className="lf-lbl-big" x="296" y="70" textAnchor="middle">INDIA</text>
      <text className="lf-lbl" x="118" y="388">Madagascar</text>
      <text className="lf-lbl" x="352" y="262">Sri Lanka</text>
      <text className="lf-lbl-big" x="592" y="390" textAnchor="end">AUSTRALIA</text>

      {/* 19th-century myth layer */}
      <g>
        <path
          d="M150 250 Q200 214 262 224 Q300 236 330 262 Q380 300 400 350 Q360 400 290 396 Q220 390 170 350 Q150 300 150 250 Z"
          fill={`url(#lf-hatch-${id})`}
          stroke="var(--lf-blood)"
          strokeWidth="1.6"
          strokeDasharray="6 5"
          opacity=".85"
          style={mythStyle}
        />
        <text x="276" y="330" textAnchor="middle" className="lf-myth-name" style={mythStyle}>LEMURIA</text>
        <text x="300" y="296" textAnchor="middle" className="lf-myth-ta" style={mythStyle}>குமரிக் கண்டம்</text>
      </g>

      {tect && (
        <g>
          <path
            d="M250 440 L262 396 L240 382 L256 340 L236 320 L250 284 L232 262 L246 226 L224 196 L210 150"
            fill="none"
            stroke="var(--lf-sea)"
            strokeWidth="2.4"
            strokeDasharray="10 4"
          />
          <text className="lf-lbl lf-sea" x="266" y="410">Central Indian Ridge</text>
          <path d="M300 300 L300 262" stroke="var(--lf-sea)" strokeWidth="2" />
          <path d="M296 272 L300 260 L304 272" fill="none" stroke="var(--lf-sea)" strokeWidth="2" />
          <text className="lf-lbl lf-sea" x="310" y="296">Indian plate drifts north</text>
        </g>
      )}

      {maur && (
        <g>
          <ellipse cx="214" cy="286" rx="26" ry="16" fill="var(--lf-sea)" opacity=".35" style={{ animation: 'lf-glow 2.4s ease-in-out infinite' }} />
          <circle cx="214" cy="286" r="4" fill="var(--lf-sea)" />
          <text className="lf-lbl lf-sea" x="214" y="320" textAnchor="middle">Mauritia fragment</text>
          <circle cx="206" cy="232" r="3" fill="var(--lf-sea)" />
          <text className="lf-lbl lf-sea" x="200" y="226" textAnchor="end">Mascarene Plateau</text>
        </g>
      )}
    </svg>
  );
}

/* ── Scenes ── */
function SceneHypothesis() {
  return (
    <>
      <div className="lf-frame" style={{ animation: 'lf-unroll 1.1s cubic-bezier(.6,0,.2,1) both' }}>
        <div className="lf-year" style={{ animation: 'lf-fade .6s ease .2s both' }}>1864</div>
        <OceanMap id="a" drawIndia mythAnim="lf-fade 1s ease 1.8s both" />
      </div>
      <p className="lf-caption">A zoologist finds lemur fossils in India and Madagascar, and imagines a land bridge.</p>
    </>
  );
}

function SceneKumari() {
  return (
    <>
      <div className="lf-kk">
        <div className="lf-tamil" lang="ta">குமரிக் கண்டம்</div>
        <div className="lf-translit">KUMARI KANDAM</div>
        <div className="lf-sea-box" aria-hidden="true">
          <div className="lf-shore" />
          <div className="lf-water">
            <svg viewBox="0 0 400 24" preserveAspectRatio="none">
              <path d="M0 14 Q25 2 50 14 T100 14 T150 14 T200 14 T250 14 T300 14 T350 14 T400 14 V24 H0Z" fill="rgba(47,93,98,.55)" />
            </svg>
            <div />
          </div>
        </div>
        <div className="lf-sangam">
          <span style={{ animationDelay: '2.4s' }}>First Sangam, <b>Madurai</b></span>
          <span style={{ animationDelay: '2.8s' }}>Second Sangam, <b>Kapaadapuram</b></span>
          <span style={{ animationDelay: '3.2s' }}><b>Kadal Kol</b>, the sea's seizing</span>
        </div>
      </div>
      <p className="lf-caption">In medieval commentaries on Sangam literature, the sea swallows the old Tamil lands.</p>
    </>
  );
}

function SceneTimeline({ n }: { n: number }) {
  const e = EVENTS[n];
  const kindColor = e.k === 'Science' ? 'var(--lf-sea)' : e.k === 'Culture' ? 'var(--lf-sepia)' : 'var(--lf-blood)';
  return (
    <>
      <div className="lf-tl">
        <div className="lf-tl-now">
          <span className="lf-year">{e.y}</span>
          <span className="lf-tl-who">{e.w}</span>
          <span className="lf-tl-kind" style={{ color: kindColor }}>{e.k}</span>
        </div>
        <div className="lf-rail">
          <i style={{ width: `${(n / (EVENTS.length - 1)) * 100}%` }} />
          {EVENTS.map((ev, k) => (
            <span key={ev.y} className={`lf-tick${k <= n ? ' on' : ''}`}>{ev.y}</span>
          ))}
        </div>
      </div>
      <p className="lf-caption">A century and a half of guesses, legends and hard evidence.</p>
    </>
  );
}

function SceneEvidence() {
  return (
    <>
      <div className="lf-frame">
        <OceanMap id="b" tect maur mythAnim="lf-sink 2.4s ease .6s both" />
      </div>
      <p className="lf-caption">No sunken continent. Drifting plates, and one small drowned fragment called Mauritia.</p>
    </>
  );
}

function SceneTitle() {
  return (
    <div className="lf-title">
      <div className="lf-t-line"><span style={{ animationDelay: '.2s' }}>LEMURIA</span></div>
      <div className="lf-t-amp">&amp;</div>
      <div className="lf-t-line"><span style={{ animationDelay: '.5s', color: 'var(--lf-blood)' }}>KUMARI KANDAM</span></div>
      <div className="lf-rule" />
      <div className="lf-sub">Lost Continent Explorer</div>
      <div className="lf-chain">
        {STEPS.map((s, k) => (
          <Fragment key={s}>
            {k > 0 && <i style={{ animationDelay: `${1.5 + k * 0.3}s` }}>·</i>}
            <span style={{ animationDelay: `${1.6 + k * 0.3}s` }}>{s}</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

/* ── Player ── */
export function IntroFilm({ onFinish }: IntroFilmProps) {
  const [chapter, setChapter] = useState(0);
  const [eventIdx, setEventIdx] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [leaving, setLeaving] = useState(false);
  // Bumped on every jump so the current scene remounts and its CSS animations restart.
  const [take, setTake] = useState(0);

  const tRef = useRef(0);
  const playingRef = useRef(true);
  const chapterRef = useRef(0);
  const eventRef = useRef(0);
  const doneRef = useRef(false);
  const tcRef = useRef<HTMLSpanElement>(null);
  const fillRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    playingRef.current = false;
    setLeaving(true);
    window.setTimeout(onFinish, 600);
  }, [onFinish]);

  // Lock page scroll while the film covers the site.
  useEffect(() => {
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = 'hidden';
    return () => {
      root.style.overflow = prev;
    };
  }, []);

  // Single rAF clock. Per-frame values (timecode, progress fills) are written to the DOM directly;
  // React state only changes when the chapter or timeline event changes.
  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(now - last, 100);
      last = now;
      if (playingRef.current) {
        tRef.current += dt;
        if (tRef.current >= TOTAL) {
          finish();
          return;
        }
      }
      const t = tRef.current;
      const i = chapterAt(t);
      if (i !== chapterRef.current) {
        chapterRef.current = i;
        setChapter(i);
      }
      if (i === 2) {
        const n = eventAt(t - CHAPTERS[2].s);
        if (n !== eventRef.current) {
          eventRef.current = n;
          setEventIdx(n);
        }
      }
      if (tcRef.current) tcRef.current.textContent = `${fmt(t)} / ${fmt(TOTAL)}`;
      CHAPTERS.forEach((c, k) => {
        const el = fillRefs.current[k];
        if (el) el.style.transform = `scaleX(${Math.max(0, Math.min(1, (t - c.s) / (c.e - c.s)))})`;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [finish]);

  // Keyboard: Esc skips, Space toggles play.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') finish();
      if (e.key === ' ' && (e.target as HTMLElement)?.tagName !== 'BUTTON') {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const togglePlay = () => {
    playingRef.current = !playingRef.current;
    setPlaying(playingRef.current);
  };

  const jump = (to: number) => {
    tRef.current = to;
    const i = chapterAt(to);
    chapterRef.current = i;
    eventRef.current = 0;
    setChapter(i);
    setEventIdx(0);
    setTake((n) => n + 1);
    playingRef.current = true;
    setPlaying(true);
  };

  return (
    <section
      className={`intro-film${playing ? '' : ' lf-paused'}${leaving ? ' lf-leaving' : ''}`}
      aria-label="Intro film"
      role="dialog"
      aria-modal="true"
    >
      <div className="lf-topbar">
        <div className="lf-mark">
          LEMURIA <span>&amp;</span> KUMARI KANDAM
        </div>
        <button className="lf-btn-ghost" onClick={finish}>
          Skip intro
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 5l8 7-8 7M17 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="lf-scene" key={`${chapter}-${take}`}>
        {chapter === 0 && <SceneHypothesis />}
        {chapter === 1 && <SceneKumari />}
        {chapter === 2 && <SceneTimeline n={eventIdx} />}
        {chapter === 3 && <SceneEvidence />}
        {chapter === 4 && <SceneTitle />}
      </div>

      <div className="lf-player">
        <button className="lf-round" onClick={togglePlay} aria-label={playing ? 'Pause intro' : 'Play intro'}>
          {playing ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5 3v10M11 3v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path d="M5 3.5v9l7.5-4.5z" fill="currentColor" />
            </svg>
          )}
        </button>
        <button className="lf-round" onClick={() => jump(0)} aria-label="Replay from the start">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3 12a9 9 0 1 0 3-6.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M3 4v5h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="lf-tc" ref={tcRef}>00:00 / 00:24</span>
        <div className="lf-chapters">
          {CHAPTERS.map((c, k) => (
            <button
              key={c.name}
              className={`lf-ch${k === chapter ? ' on' : ''}`}
              style={{ flexGrow: (c.e - c.s) / 1000 }}
              onClick={() => jump(c.s)}
              aria-label={`Jump to ${c.name}`}
            >
              <span className="lf-ch-label">{c.name}</span>
              <span className="lf-ch-track">
                <span className="lf-ch-fill" ref={(el) => { fillRefs.current[k] = el; }} />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
