import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, BookOpen, MapPin, Compass, Layers, User, ArrowRight, ShieldCheck } from 'lucide-react';
import {
  SANGAM_ACADEMIES,
  LITERARY_REFERENCES,
  INDIVIDUAL_NADUS,
  HISTORICAL_FIGURES,
  TIMELINE_EVENTS,
  RELATED_LOST_LANDS,
  MAP_FEATURES
} from '../data/lemuriaData';
import { SearchItem } from '../types';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export function GlobalSearchModal({ isOpen, onClose, onNavigateSection }: GlobalSearchModalProps) {
  const [query, setQuery] = useState<string>('');

  // Listen for Cmd+K or Ctrl+K globally
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open search modal (trigger via navbar or parent state)
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Build aggregated searchable index
  const searchIndex: SearchItem[] = useMemo(() => {
    const items: SearchItem[] = [];

    // 1. Sangam Academies
    SANGAM_ACADEMIES.forEach((sa) => {
      items.push({
        id: sa.id,
        title: sa.name,
        subtitle: sa.tamilName,
        category: 'Sangam Academy',
        content: `${sa.location} ${sa.kings} ${sa.delugeFate} ${sa.historicalAnalysis}`,
        sectionTarget: 'kumari-kandam',
      });
    });

    // 2. 49 Nadus
    INDIVIDUAL_NADUS.forEach((nadu) => {
      items.push({
        id: nadu.id,
        title: nadu.name,
        subtitle: `${nadu.tamilName} (${nadu.groupName})`,
        category: '49 Nadus',
        content: `${nadu.meaning} ${nadu.description} ${nadu.submergedLocationNotes}`,
        sectionTarget: 'kumari-kandam',
      });
    });

    // 3. Literary Sources
    LITERARY_REFERENCES.forEach((lit, idx) => {
      items.push({
        id: `lit-${idx}`,
        title: lit.work,
        subtitle: lit.tamilWork,
        category: 'Literary Source',
        content: `${lit.period} ${lit.quoteOrSummary} ${lit.significance}`,
        sectionTarget: 'kumari-kandam',
      });
    });

    // 4. Historical Figures
    HISTORICAL_FIGURES.forEach((fig) => {
      items.push({
        id: fig.id,
        title: fig.name,
        subtitle: fig.role,
        category: 'Key Figure',
        content: `${fig.keyContribution} ${fig.summary} ${fig.notableQuote}`,
        sectionTarget: 'kumari-kandam',
      });
    });

    // 5. Timeline Events
    TIMELINE_EVENTS.forEach((te) => {
      items.push({
        id: te.id,
        title: te.title,
        subtitle: `${te.year} (${te.period})`,
        category: 'Timeline',
        content: `${te.summary} ${te.details}`,
        sectionTarget: 'timeline',
      });
    });

    // 6. Map Features
    MAP_FEATURES.forEach((mf) => {
      items.push({
        id: mf.id,
        title: mf.title,
        subtitle: mf.region,
        category: 'Geology & Science',
        content: `${mf.description} ${mf.historicalContext} ${mf.modernConsensus}`,
        sectionTarget: 'interactive-map',
      });
    });

    // 7. Related Lost Lands
    RELATED_LOST_LANDS.forEach((rll) => {
      items.push({
        id: rll.id,
        title: rll.name,
        subtitle: rll.era,
        category: 'Lost Land',
        content: `${rll.description} ${rll.verdict}`,
        sectionTarget: 'related-lost-lands',
      });
    });

    return items;
  }, []);

  // Filtered results
  const results = useMemo(() => {
    if (!query.trim()) return searchIndex.slice(0, 8); // Top default suggestions
    const q = query.toLowerCase();
    return searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.content.toLowerCase().includes(q)
    ).slice(0, 15);
  }, [query, searchIndex]);

  const handleSelectResult = (targetSection: string) => {
    onNavigateSection(targetSection);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0E0C0A]/85 backdrop-blur-md"
        />

        {/* Search Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          className="relative w-full max-w-2xl bg-[#181410] border border-[#7A6038] rounded-xl shadow-2xl overflow-hidden text-[#E4D5BE] z-10"
        >
          {/* Input Bar */}
          <div className="flex items-center p-4 border-b border-[#362920] bg-[#1E1914]">
            <Search className="w-5 h-5 text-[#D4AF37] mr-3" />
            <input
              type="text"
              autoFocus
              placeholder="Search lost lands, Nadus, Sangams, books (e.g., Pahruli, Sclater, Kapatapuram)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-base text-[#E4D5BE] placeholder-[#7A6C60] focus:outline-none"
            />
            {query && (
              <button onClick={() => setQuery('')} className="p-1 text-[#8C7A6B] hover:text-[#E4D5BE] mr-2">
                <X className="w-4 h-4" />
              </button>
            )}
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono bg-[#14100D] border border-[#3E3025] rounded text-[#8C7A6B]">
              ESC
            </kbd>
          </div>

          {/* Results List */}
          <div className="max-h-96 overflow-y-auto p-3 space-y-2 divide-y divide-[#2A2016]">
            {results.length === 0 ? (
              <div className="p-8 text-center text-[#8C7A6B]">
                No results found for "<span className="text-[#D4AF37]">{query}</span>".
              </div>
            ) : (
              results.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelectResult(item.sectionTarget)}
                  className="p-3 rounded-lg hover:bg-[#261E17] cursor-pointer transition-colors flex items-start justify-between group pt-3"
                >
                  <div className="space-y-1 pr-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#9A7B45]/20 text-[#D4AF37] border border-[#9A7B45]/30">
                        {item.category}
                      </span>
                      <span className="text-xs text-[#8C7A6B] font-medium">{item.subtitle}</span>
                    </div>
                    <h4 className="text-sm font-serif font-bold text-[#F3E5AB] group-hover:text-[#D4AF37] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#A89F91] line-clamp-1">{item.content}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#7A6C60] group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all mt-1" />
                </div>
              ))
            )}
          </div>

          {/* Footer Info */}
          <div className="px-4 py-2.5 bg-[#14100D] border-t border-[#362920] flex items-center justify-between text-[11px] text-[#8C7A6B]">
            <span>Tip: Press <kbd className="font-mono text-[#D4AF37]">Ctrl+K</kbd> anywhere to open search</span>
            <span>{searchIndex.length} items indexed</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
