import { useState } from 'react';
import { ChevronDown, Microscope } from 'lucide-react';
import { ARCHAEOLOGY_METHODS } from '../data/archaeologyMethods';

export function ArchaeologyMethodsExplorer() {
  const [expanded, setExpanded] = useState<string | null>(ARCHAEOLOGY_METHODS[0]?.id ?? null);

  return (
    <section id="archaeology-methods" className="py-20 bg-[#15110D] border-b border-[#463429]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <Microscope className="w-4 h-4" />
            <span>Research Methods</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Archaeology Methods Explorer</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            How researchers actually date, survey, and analyze submerged and coastal sites.
          </p>
        </div>

        <div className="space-y-3">
          {ARCHAEOLOGY_METHODS.map((m) => {
            const isOpen = expanded === m.id;
            return (
              <div key={m.id} className="rounded border border-[#463429] bg-[#241B15] overflow-hidden">
                <button
                  onClick={() => setExpanded(isOpen ? null : m.id)}
                  className="w-full flex items-center justify-between gap-3 p-4 text-left"
                >
                  <div>
                    <h3 className="text-sm sm:text-base font-bold font-heading text-[#E6D7B9]">{m.name}</h3>
                    <p className="text-xs font-serif text-[#CDBB96]/70 mt-0.5">{m.summary}</p>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-[#9A7B45] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {m.fields.map((f) => (
                      <div key={f.label} className="p-3 rounded bg-[#1E1914] border border-[#463429]">
                        <div className="text-[10px] font-carto uppercase tracking-wider text-[#9A7B45] mb-1">{f.label}</div>
                        <div className="text-xs font-serif text-[#CDBB96] leading-relaxed">{f.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
