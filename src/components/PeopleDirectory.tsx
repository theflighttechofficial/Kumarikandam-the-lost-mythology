import { useMemo, useState } from 'react';
import { Search, Users } from 'lucide-react';
import { PEOPLE } from '../data/people';
import { TAMIL_REVIVAL } from '../data/tamilRevival';
import type { TamilRevivalFigure } from '../data/tamilRevival';

type DirectoryEntry = {
  id: string;
  name: string;
  role: string;
  period: string;
  summary: string;
  tag: string;
};

const ROLE_LABEL: Record<TamilRevivalFigure['role'], string> = {
  text_preservation: 'Text Preservation',
  kumari_kandam_promotion: 'Kumari Kandam Promotion',
  critical_historian: 'Critical Historian',
};

const TAG_STYLES: Record<string, string> = {
  'Text Preservation': 'text-[#53665C] border-[#53665C]/60',
  'Kumari Kandam Promotion': 'text-[#8B5E4A] border-[#8B5E4A]/60',
  'Critical Historian': 'text-[#9A7B45] border-[#9A7B45]/60',
  'Lemuria Origin Story': 'text-[#CDBB96] border-[#756451]/60',
};

export function PeopleDirectory() {
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState<string>('all');

  const entries: DirectoryEntry[] = useMemo(() => {
    const fromPeople: DirectoryEntry[] = PEOPLE.map((p) => ({
      id: p.id,
      name: p.name,
      role: p.role,
      period: p.period,
      summary: p.contribution,
      tag: 'Lemuria Origin Story',
    }));
    const fromRevival: DirectoryEntry[] = TAMIL_REVIVAL.map((r) => ({
      id: r.id,
      name: r.person,
      role: r.field,
      period: r.period,
      summary: r.contribution,
      tag: ROLE_LABEL[r.role],
    }));
    return [...fromPeople, ...fromRevival];
  }, []);

  const tags = ['all', 'Lemuria Origin Story', ...Object.values(ROLE_LABEL)];

  const filtered = entries.filter((e) => {
    const matchesQuery = query.trim() === '' || e.name.toLowerCase().includes(query.toLowerCase()) || e.summary.toLowerCase().includes(query.toLowerCase());
    const matchesTag = tag === 'all' || e.tag === tag;
    return matchesQuery && matchesTag;
  });

  return (
    <section id="people-directory" className="py-20 bg-[#140F0C] border-b border-[#463429] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <Users className="w-4 h-4" />
            <span>Figures Behind the Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">People Directory</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            From the 19th-century zoologists who coined "Lemuria" to the Tamil scholars who preserved, revived, or
            critically examined the classical corpus — clearly tagged by their actual role.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#9A7B45] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search people..."
              className="w-full pl-9 pr-3 py-2 text-sm rounded bg-[#241B15] border border-[#463429] text-[#E6D7B9] placeholder:text-[#756451] focus:outline-none focus:border-[#9A7B45] font-serif"
            />
          </div>
          <select
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="px-3 py-2 text-sm rounded bg-[#241B15] border border-[#463429] text-[#E6D7B9] focus:outline-none focus:border-[#9A7B45] font-carto uppercase tracking-wide"
          >
            {tags.map((t) => (
              <option key={t} value={t}>
                {t === 'all' ? 'All Roles' : t}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((e) => (
            <div key={e.id} className="hover-lift p-5 rounded border border-[#463429] bg-[#241B15]">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] text-[#9A7B45] font-carto uppercase tracking-wider">{e.period}</span>
                <span
                  className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border font-carto ${
                    TAG_STYLES[e.tag] ?? 'text-[#CDBB96] border-[#756451]/60'
                  }`}
                >
                  {e.tag}
                </span>
              </div>
              <h3 className="text-base font-bold text-[#E6D7B9] font-heading mb-1">{e.name}</h3>
              <p className="text-xs text-[#9A7B45] font-serif italic mb-2">{e.role}</p>
              <p className="text-xs sm:text-sm text-[#CDBB96] font-serif leading-relaxed">{e.summary}</p>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="text-sm text-[#CDBB96] font-serif col-span-full text-center py-10">No people match your search.</p>
          )}
        </div>
      </div>
    </section>
  );
}
