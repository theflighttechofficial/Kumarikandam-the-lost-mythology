import { FormEvent, useState } from 'react';
import { Check, Copy, Quote } from 'lucide-react';

interface CitationInput {
  author: string;
  title: string;
  year: string;
  journal: string;
  doi: string;
}

function buildCitations(i: CitationInput) {
  const [last, ...rest] = i.author.split(' ');
  const initials = rest.map((n) => `${n[0]}.`).join(' ');
  const apaAuthor = rest.length ? `${last}, ${initials}` : i.author;
  const doiPart = i.doi ? ` https://doi.org/${i.doi}` : '';

  return {
    APA: `${apaAuthor} (${i.year}). ${i.title}. ${i.journal}.${doiPart}`,
    MLA: `${i.author}. "${i.title}." ${i.journal}, ${i.year}.${doiPart}`,
    Chicago: `${i.author}. "${i.title}." ${i.journal} (${i.year}).${doiPart}`,
    IEEE: `${i.author}, "${i.title}," ${i.journal}, ${i.year}.${doiPart}`,
    Harvard: `${i.author} ${i.year}, '${i.title}', ${i.journal}.${doiPart}`,
  };
}

export function CitationGenerator() {
  const [form, setForm] = useState<CitationInput>({ author: '', title: '', year: '', journal: '', doi: '' });
  const [citations, setCitations] = useState<Record<string, string> | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.author.trim() || !form.title.trim() || !form.year.trim()) return;
    setCitations(buildCitations(form));
  };

  const copy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="citation-generator" className="py-20 bg-[#1A1511] border-b border-[#463429]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <Quote className="w-4 h-4" />
            <span>Citation Generator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Automatic Citation Generator</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            Enter source details to generate formatted citations in APA, MLA, Chicago, IEEE, and Harvard styles.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <input required placeholder="Author (e.g. Ramaswamy, Sumathi)" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} className="px-3 py-2 text-sm rounded bg-[#241B15] border border-[#463429] text-[#FAF6EE] placeholder-[#CDBB96]/40" />
          <input required placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="px-3 py-2 text-sm rounded bg-[#241B15] border border-[#463429] text-[#FAF6EE] placeholder-[#CDBB96]/40" />
          <input required placeholder="Year" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} className="px-3 py-2 text-sm rounded bg-[#241B15] border border-[#463429] text-[#FAF6EE] placeholder-[#CDBB96]/40" />
          <input placeholder="Journal / Publisher" value={form.journal} onChange={(e) => setForm({ ...form, journal: e.target.value })} className="px-3 py-2 text-sm rounded bg-[#241B15] border border-[#463429] text-[#FAF6EE] placeholder-[#CDBB96]/40" />
          <input placeholder="DOI (optional)" value={form.doi} onChange={(e) => setForm({ ...form, doi: e.target.value })} className="px-3 py-2 text-sm rounded bg-[#241B15] border border-[#463429] text-[#FAF6EE] placeholder-[#CDBB96]/40 sm:col-span-2" />
          <button type="submit" className="sm:col-span-2 px-5 py-2.5 text-xs font-bold font-carto uppercase tracking-wider rounded bg-[#2B211A] hover:bg-[#342820] text-[#FAF6EE] border border-[#9A7B45]">
            Generate Citations
          </button>
        </form>

        {citations && (
          <div className="space-y-3">
            {Object.entries(citations).map(([style, text]) => (
              <div key={style} className="p-3.5 rounded border border-[#463429] bg-[#241B15] flex items-start justify-between gap-3">
                <div>
                  <div className="text-[10px] font-carto uppercase tracking-wider text-[#9A7B45] mb-1">{style}</div>
                  <div className="text-sm font-serif text-[#CDBB96]">{text}</div>
                </div>
                <button onClick={() => copy(style, text)} className="shrink-0 p-2 rounded bg-[#1E1914] border border-[#463429] hover:border-[#9A7B45]">
                  {copied === style ? <Check className="w-4 h-4 text-[#53665C]" /> : <Copy className="w-4 h-4 text-[#9A7B45]" />}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
