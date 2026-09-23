import { useState } from 'react';
import { RefreshCw, Sparkle } from 'lucide-react';
import { RESEARCH_QUESTION_TEMPLATES } from '../data/researchQuestionTemplates';

const CATEGORIES = ['All', 'Geology', 'Archaeology', 'Literature', 'Historiography', 'Methodology'] as const;

export function ResearchQuestionGenerator() {
  const [category, setCategory] = useState<typeof CATEGORIES[number]>('All');
  const [current, setCurrent] = useState(RESEARCH_QUESTION_TEMPLATES[0]);

  const generate = () => {
    const pool = category === 'All' ? RESEARCH_QUESTION_TEMPLATES : RESEARCH_QUESTION_TEMPLATES.filter((q) => q.category === category);
    const next = pool[Math.floor(Math.random() * pool.length)];
    setCurrent(next);
  };

  return (
    <section id="research-question-generator" className="py-20 bg-[#15110D] border-b border-[#463429]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <Sparkle className="w-4 h-4" />
            <span>Research Question Generator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Generate a Research Question</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            Pick a theme, then generate a research question to guide your own investigation.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3 py-1.5 text-xs font-carto uppercase tracking-wider rounded border transition-colors ${
                category === c ? 'bg-[#2B211A] text-[#FAF6EE] border-[#9A7B45]' : 'bg-[#241B15] text-[#CDBB96]/70 border-[#463429]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="p-8 rounded border border-[#9A7B45]/50 bg-[#241B15] text-center mb-6">
          <span className="text-[10px] font-carto uppercase tracking-wider text-[#9A7B45]">{current.category}</span>
          <p className="text-xl sm:text-2xl font-bold font-heading text-[#E6D7B9] leading-snug mt-3">{current.question}</p>
        </div>

        <button
          onClick={generate}
          className="flex items-center gap-2 mx-auto px-5 py-2.5 text-xs font-bold font-carto uppercase tracking-wider rounded bg-[#2B211A] hover:bg-[#342820] text-[#FAF6EE] border border-[#9A7B45]"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Generate Another
        </button>
      </div>
    </section>
  );
}
