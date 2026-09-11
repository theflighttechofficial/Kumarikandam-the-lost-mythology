import { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp, Clock, Filter, Sparkles, User } from 'lucide-react';
import { TIMELINE_EVENTS } from '../data/lemuriaData';
import { TimelineEvent } from '../types';

export function TimelineSection() {
  const [filterCategory, setFilterCategory] = useState<'all' | 'science' | 'mythology' | 'geology' | 'culture'>('all');
  const [expandedEventId, setExpandedEventId] = useState<string | null>('t-1864');

  const filteredEvents = TIMELINE_EVENTS.filter((event) => {
    if (filterCategory === 'all') return true;
    return event.category === filterCategory;
  });

  const toggleExpand = (id: string) => {
    setExpandedEventId(expandedEventId === id ? null : id);
  };

  return (
    <section id="timeline" className="py-20 bg-[#1A1511] border-b border-[#463429] relative">
      <div className="absolute inset-0 bg-carto-grid opacity-15 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
              <Clock className="w-4 h-4 text-[#9A7B45]" />
              <span>Chronometer & Logbook · Evolution Across 160 Years</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">
              Historical Timeline
            </h2>
            <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
              Trace the idea from Sclater’s 1864 zoological dilemma, through Victorian esoteric literature and Alfred Wegener’s continental drift, to 21st-century microcontinent zircon discoveries.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#241B15] p-1.5 rounded border border-[#463429] font-carto">
            <span className="text-[11px] text-[#9A7B45] px-2 flex items-center gap-1 uppercase font-bold tracking-wider">
              <Filter className="w-3 h-3 text-[#9A7B45]" /> Archive:
            </span>
            {(
              [
                { id: 'all', label: 'All Eras' },
                { id: 'science', label: 'Science' },
                { id: 'mythology', label: 'Mythology' },
                { id: 'geology', label: 'Geology' },
                { id: 'culture', label: 'Culture' },
              ] as const
            ).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                id={`timeline-filter-${cat.id}`}
                className={`px-3 py-1 text-xs uppercase tracking-wider font-bold rounded transition-colors ${
                  filterCategory === cat.id
                    ? 'bg-[#2B211A] text-[#FAF6EE] border border-[#9A7B45] shadow-sm'
                    : 'text-[#CDBB96]/70 hover:text-[#E6D7B9]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#463429] space-y-7 max-w-4xl mx-auto">
          {filteredEvents.map((event) => {
            const isExpanded = expandedEventId === event.id;

            let badgeColor = 'bg-[#1E1914] text-[#9A7B45] border-[#9A7B45]/50';
            let dotColor = 'bg-[#9A7B45] border-[#FAF6EE]';

            if (event.category === 'science') {
              badgeColor = 'bg-[#1E1914] text-[#53665C] border-[#53665C]/50';
              dotColor = 'bg-[#53665C] border-[#FAF6EE]';
            } else if (event.category === 'mythology') {
              badgeColor = 'bg-[#1E1914] text-[#8B5E4A] border-[#8B5E4A]/50';
              dotColor = 'bg-[#8B5E4A] border-[#FAF6EE]';
            } else if (event.category === 'geology') {
              badgeColor = 'bg-[#1E1914] text-[#53665C] border-[#53665C]/50';
              dotColor = 'bg-[#53665C] border-[#FAF6EE]';
            } else if (event.category === 'culture') {
              badgeColor = 'bg-[#1E1914] text-[#9A7B45] border-[#9A7B45]/50';
              dotColor = 'bg-[#9A7B45] border-[#FAF6EE]';
            }

            return (
              <div key={event.id} className="relative group">
                {/* Timeline node circle */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-2 w-3.5 h-3.5 rounded-full border-2 ${dotColor} transition-transform group-hover:scale-125 shadow-sm`}
                />

                {/* Event Card */}
                <div
                  onClick={() => toggleExpand(event.id)}
                  id={`timeline-card-${event.id}`}
                  className={`p-5 sm:p-6 rounded border transition-all cursor-pointer relative ${
                    isExpanded
                      ? 'bg-[#241B15] border-[#9A7B45] shadow-lg ring-1 ring-[#9A7B45]/30'
                      : 'bg-[#241B15] border-[#463429] hover:border-[#756451]'
                  }`}
                >
                  <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl sm:text-2xl font-bold font-heading text-[#E6D7B9]">
                        {event.year}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border font-carto ${badgeColor}`}>
                        {event.period} • {event.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-[#9A7B45] font-carto uppercase tracking-wider font-semibold">
                      <span>{isExpanded ? 'Collapse Log' : 'Inspect Notes'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#E6D7B9] mb-1.5 font-heading">
                    {event.title}
                  </h3>

                  <p className="text-[#CDBB96] text-xs sm:text-sm font-serif leading-relaxed">
                    {event.summary}
                  </p>

                  {/* Expanded Academic Details */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-[#463429] space-y-3">
                      <p className="text-xs sm:text-sm text-[#CDBB96] font-serif leading-relaxed bg-[#1E1914] p-3.5 rounded border border-[#463429]">
                        {event.details}
                      </p>

                      {event.keyFigures.length > 0 && (
                        <div className="flex items-center gap-2 text-xs text-[#9A7B45] font-carto">
                          <User className="w-3.5 h-3.5 text-[#9A7B45]" />
                          <span className="uppercase tracking-wider font-bold text-[10px]">Naturalists & Scholars:</span>
                          <span className="text-[#E6D7B9] font-serif">
                            {event.keyFigures.join(', ')}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

