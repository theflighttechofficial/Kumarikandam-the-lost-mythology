import { Crown } from 'lucide-react';
import { PANDYAN_TRADITION } from '../data/pandyanTradition';

export function PandyanSection() {
  return (
    <div id="pandyan-tradition">
      <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-4">
        <Crown className="w-4 h-4" />
        <span>Pandyan Tradition</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PANDYAN_TRADITION.map((p) => (
          <div key={p.id} className="p-4 rounded border border-[#463429] bg-[#1E1914] hover-lift">
            <h4 className="text-sm font-bold text-[#E6D7B9] font-heading mb-1.5">{p.subject}</h4>
            <p className="text-xs text-[#CDBB96] font-serif leading-relaxed">{p.relevance}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
