import { useState } from 'react';
import { Share2 } from 'lucide-react';
import { SOURCE_GRAPH_NODES, SOURCE_GRAPH_EDGES } from '../data/sourceGraph';

export function SourceRelationGraph() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = SOURCE_GRAPH_NODES.find((n) => n.id === activeId) ?? null;

  const connected = active
    ? SOURCE_GRAPH_EDGES.filter((e) => e.from === active.id || e.to === active.id).map((e) =>
        SOURCE_GRAPH_NODES.find((n) => n.id === (e.from === active.id ? e.to : e.from))
      )
    : [];

  return (
    <section id="source-relation-graph" className="py-20 bg-[#1A1511] border-b border-[#463429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <Share2 className="w-4 h-4" />
            <span>Influence Diagram</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Source Relation Graph</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            Click a node to see what it connects to and why.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 relative rounded border border-[#463429] bg-[#241B15] h-[420px] overflow-hidden">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              {SOURCE_GRAPH_EDGES.map((e, i) => {
                const from = SOURCE_GRAPH_NODES.find((n) => n.id === e.from)!;
                const to = SOURCE_GRAPH_NODES.find((n) => n.id === e.to)!;
                const highlighted = active && (active.id === e.from || active.id === e.to);
                return (
                  <line
                    key={i}
                    x1={from.x} y1={from.y} x2={to.x} y2={to.y}
                    stroke={highlighted ? '#9A7B45' : '#463429'}
                    strokeWidth={highlighted ? 0.6 : 0.3}
                    vectorEffect="non-scaling-stroke"
                  />
                );
              })}
            </svg>
            {SOURCE_GRAPH_NODES.map((n) => (
              <button
                key={n.id}
                onClick={() => setActiveId(n.id === activeId ? null : n.id)}
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 px-2.5 py-1.5 rounded text-[10px] font-carto uppercase tracking-wider border transition-all whitespace-nowrap ${
                  activeId === n.id
                    ? 'bg-[#9A7B45] text-[#14100D] border-[#9A7B45] font-bold z-10'
                    : 'bg-[#1E1914] text-[#CDBB96] border-[#463429] hover:border-[#9A7B45]'
                }`}
              >
                {n.label}
              </button>
            ))}
          </div>

          <div className="lg:col-span-4 p-5 rounded border border-[#463429] bg-[#241B15]">
            {active ? (
              <div>
                <span className="text-[10px] font-mono text-[#9A7B45]">{active.year}</span>
                <h3 className="text-lg font-bold font-heading text-[#E6D7B9] mb-2">{active.label}</h3>
                <p className="text-sm font-serif text-[#CDBB96] leading-relaxed mb-4">{active.description}</p>
                <span className="text-[11px] font-carto uppercase tracking-wider text-[#9A7B45] font-bold block mb-1.5">Connected to:</span>
                <div className="flex flex-wrap gap-1.5">
                  {connected.map((c) => c && (
                    <span key={c.id} className="text-[10px] px-2 py-0.5 rounded bg-[#1E1914] border border-[#463429] text-[#CDBB96]">{c.label}</span>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-sm font-serif text-[#CDBB96]/70">Select a node on the diagram to see its description and connections.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
