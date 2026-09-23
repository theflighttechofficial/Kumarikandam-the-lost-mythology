import { useState } from 'react';
import { Image as ImageIcon, Map, Mountain, ScrollText, User, Waves } from 'lucide-react';
import { MEDIA_ARCHIVE } from '../data/mediaArchive';

const CATEGORY_ICON: Record<string, JSX.Element> = {
  historical_map: <Map className="w-8 h-8" />,
  geological_map: <Mountain className="w-8 h-8" />,
  bathymetric_map: <Waves className="w-8 h-8" />,
  historical_illustration: <ScrollText className="w-8 h-8" />,
  portrait: <User className="w-8 h-8" />,
};

const CATEGORY_LABELS: Record<string, string> = {
  historical_map: 'Historical Map',
  geological_map: 'Geological Map',
  bathymetric_map: 'Bathymetric Map',
  historical_illustration: 'Historical Illustration',
  portrait: 'Portrait',
};

export function MediaArchive() {
  const [category, setCategory] = useState<string>('all');
  const categories = ['all', ...Array.from(new Set(MEDIA_ARCHIVE.map((m) => m.category)))];
  const filtered = category === 'all' ? MEDIA_ARCHIVE : MEDIA_ARCHIVE.filter((m) => m.category === category);

  return (
    <section id="media-archive" className="py-20 bg-[#1A1511] border-b border-[#463429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <ImageIcon className="w-4 h-4" />
            <span>Media Archive</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Historical & Scientific Media Archive</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            Text-only reference cards for notable historical maps, illustrations, and portraits related to this topic. No image files are hosted here; each card uses a stylized placeholder icon.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3 py-1.5 text-xs font-carto uppercase tracking-wider rounded border transition-colors ${
                category === c ? 'bg-[#2B211A] text-[#FAF6EE] border-[#9A7B45]' : 'bg-[#241B15] text-[#CDBB96]/70 border-[#463429]'
              }`}
            >
              {c === 'all' ? 'All' : CATEGORY_LABELS[c]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((m) => (
            <div key={m.id} className="rounded border border-[#463429] bg-[#241B15] overflow-hidden">
              <div className="h-28 flex items-center justify-center bg-[#1E1914] text-[#756451] border-b border-[#463429]">
                {CATEGORY_ICON[m.category]}
              </div>
              <div className="p-4">
                <span className="text-[10px] font-carto uppercase tracking-wider text-[#9A7B45]">{CATEGORY_LABELS[m.category]}</span>
                <h3 className="text-sm font-bold font-heading text-[#E6D7B9] mt-1 mb-1">{m.title}</h3>
                <p className="text-[11px] font-mono text-[#CDBB96]/70 mb-2">{m.creator} · {m.date}</p>
                <p className="text-xs font-serif text-[#CDBB96] leading-relaxed mb-2">{m.description}</p>
                <p className="text-[11px] font-serif text-[#9A7B45] leading-relaxed mb-2">{m.whyItMatters}</p>
                <p className="text-[10px] font-mono text-[#CDBB96]/50 border-t border-[#463429] pt-2">{m.source} · {m.license}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
