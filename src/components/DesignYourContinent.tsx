import { useState } from 'react';
import { Map as MapIcon } from 'lucide-react';

type TileType = 'ocean' | 'land' | 'mountain' | 'volcano' | 'settlement' | 'agriculture' | 'port';

const TILE_OPTIONS: { type: TileType; label: string; color: string }[] = [
  { type: 'ocean', label: 'Ocean', color: 'bg-[#2A4A5A]' },
  { type: 'land', label: 'Land', color: 'bg-[#5A4A32]' },
  { type: 'mountain', label: 'Mountain', color: 'bg-[#6B6259]' },
  { type: 'volcano', label: 'Volcano', color: 'bg-[#8B5E4A]' },
  { type: 'settlement', label: 'Settlement', color: 'bg-[#CDBB96]' },
  { type: 'agriculture', label: 'Agriculture', color: 'bg-[#53665C]' },
  { type: 'port', label: 'Port', color: 'bg-[#9A7B45]' },
];

const COLS = 12;
const ROWS = 8;

function makeEmptyGrid(): TileType[] {
  return new Array(COLS * ROWS).fill('ocean');
}

export function DesignYourContinent() {
  const [grid, setGrid] = useState<TileType[]>(makeEmptyGrid());
  const [brush, setBrush] = useState<TileType>('land');
  const [feedback, setFeedback] = useState<string[] | null>(null);

  const idx = (x: number, y: number) => y * COLS + x;
  const neighbors = (x: number, y: number) => {
    const out: { x: number; y: number }[] = [];
    [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([dx, dy]) => {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < COLS && ny >= 0 && ny < ROWS) out.push({ x: nx, y: ny });
    });
    return out;
  };

  const paint = (i: number) => {
    setGrid((prev) => {
      const next = [...prev];
      next[i] = brush;
      return next;
    });
    setFeedback(null);
  };

  const checkConstraints = () => {
    const messages: string[] = [];
    let settlementIssues = 0;
    let agricultureIssues = 0;
    let portIssues = 0;

    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLS; x++) {
        const t = grid[idx(x, y)];
        const nbrs = neighbors(x, y).map((n) => grid[idx(n.x, n.y)]);
        if (t === 'settlement') {
          const hasLand = nbrs.some((n) => n === 'land' || n === 'agriculture' || n === 'settlement');
          const hasWater = nbrs.some((n) => n === 'ocean' || n === 'port');
          if (!hasLand || !hasWater) settlementIssues++;
        }
        if (t === 'agriculture' && (nbrs.every((n) => n !== 'land' && n !== 'agriculture') )) {
          agricultureIssues++;
        }
        if (t === 'port') {
          const hasOcean = nbrs.some((n) => n === 'ocean');
          const hasLand = nbrs.some((n) => n === 'land' || n === 'settlement' || n === 'agriculture');
          if (!hasOcean || !hasLand) portIssues++;
        }
      }
    }

    if (settlementIssues === 0) messages.push('Settlements: PASS - all settlements have adjacent land and water.');
    else messages.push(`Settlements: FAIL - ${settlementIssues} settlement tile(s) lack adjacent land+water.`);

    if (agricultureIssues === 0) messages.push('Agriculture: PASS - all agriculture tiles are adjacent to land.');
    else messages.push(`Agriculture: FAIL - ${agricultureIssues} agriculture tile(s) are isolated from land.`);

    if (portIssues === 0) messages.push('Ports: PASS - all ports have adjacent land and ocean.');
    else messages.push(`Ports: FAIL - ${portIssues} port tile(s) lack adjacent land+ocean.`);

    setFeedback(messages);
  };

  return (
    <section id="design-your-continent" className="py-20 bg-[#1E1914] border-b border-[#463429]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <MapIcon className="w-4 h-4" />
            <span>Design Your Own Lost Continent</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Continent Designer</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            Paint your own continent, then check it against simple settlement/agriculture/port placement rules. A playful way to think about what a plausible landmass needs.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {TILE_OPTIONS.map((o) => (
            <button
              key={o.type}
              onClick={() => setBrush(o.type)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-carto uppercase tracking-wider rounded border ${
                brush === o.type ? 'border-[#9A7B45] text-[#FAF6EE]' : 'border-[#463429] text-[#CDBB96]/70'
              }`}
            >
              <span className={`w-3 h-3 rounded-sm ${o.color}`} />
              {o.label}
            </button>
          ))}
        </div>

        <div
          className="grid gap-0.5 border border-[#463429] bg-[#0F0C09] p-1 rounded max-w-fit"
          style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
        >
          {grid.map((t, i) => {
            const opt = TILE_OPTIONS.find((o) => o.type === t)!;
            return (
              <button
                key={i}
                onClick={() => paint(i)}
                className={`w-7 h-7 sm:w-8 sm:h-8 ${opt.color} hover:brightness-125 transition-all border border-black/20`}
                title={opt.label}
              />
            );
          })}
        </div>

        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={checkConstraints}
            className="px-5 py-2.5 text-xs font-bold font-carto uppercase tracking-wider rounded bg-[#2B211A] hover:bg-[#342820] text-[#FAF6EE] border border-[#9A7B45]"
          >
            Check Constraints
          </button>
          <button
            onClick={() => { setGrid(makeEmptyGrid()); setFeedback(null); }}
            className="px-5 py-2.5 text-xs font-bold font-carto uppercase tracking-wider rounded bg-[#241B15] hover:bg-[#342820] text-[#CDBB96] border border-[#463429]"
          >
            Reset
          </button>
        </div>

        {feedback && (
          <div className="mt-5 p-4 rounded border border-[#463429] bg-[#241B15] space-y-1.5">
            {feedback.map((f, i) => (
              <div key={i} className={`text-xs font-mono ${f.includes('PASS') ? 'text-[#53665C]' : 'text-[#8B5E4A]'}`}>{f}</div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
