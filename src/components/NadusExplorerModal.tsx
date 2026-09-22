import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, Filter, Compass, MapPin, ExternalLink, Layers, Sparkles } from 'lucide-react';
import { INDIVIDUAL_NADUS, KUMARI_NADU_GROUPS } from '../data/lemuriaData';
import { IndividualNadu } from '../types';

interface NadusExplorerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NadusExplorerModal({ isOpen, onClose }: NadusExplorerModalProps) {
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeNadu, setActiveNadu] = useState<IndividualNadu | null>(null);

  const filteredNadus = useMemo(() => {
    return INDIVIDUAL_NADUS.filter((nadu) => {
      const matchesGroup = selectedGroup === 'all' || nadu.groupName === selectedGroup;
      const matchesSearch =
        nadu.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        nadu.tamilName.includes(searchQuery) ||
        nadu.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
        nadu.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesGroup && matchesSearch;
    });
  }, [selectedGroup, searchQuery]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0E0C0A]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl bg-[#181410] border border-[#7A6038] rounded-xl shadow-2xl overflow-hidden text-[#E4D5BE] z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#463429] bg-[#1E1914]">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-[#9A7B45]/20 border border-[#9A7B45]/40 rounded-lg text-[#D4AF37]">
                <Compass className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-[#E6C687] flex items-center gap-2">
                  The 49 Nadus of Kumari Kandam
                  <span className="text-xs font-sans px-2.5 py-0.5 rounded-full bg-[#9A7B45]/30 text-[#F3E5AB] border border-[#9A7B45]/40">
                    49 நாடுகள் Explorer
                  </span>
                </h2>
                <p className="text-xs text-[#A89F91]">
                  Explore the 7 traditional regional clusters swallowed by the oceanic deluge (Kadal Kol)
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#A89F91] hover:text-[#E4D5BE] hover:bg-[#2A231D] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Controls Bar */}
          <div className="p-4 sm:p-6 border-b border-[#362920] bg-[#14100D] flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C7A6B]" />
              <input
                type="text"
                placeholder="Search Nadus, Tamil names, meanings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-[#1E1914] border border-[#463429] rounded-lg text-sm text-[#E4D5BE] placeholder-[#7A6C60] focus:outline-none focus:border-[#9A7B45]"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center space-x-1 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-thin">
              <button
                onClick={() => setSelectedGroup('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedGroup === 'all'
                    ? 'bg-[#9A7B45] text-[#14100D] font-bold'
                    : 'bg-[#1E1914] text-[#A89F91] hover:bg-[#2A231D]'
                }`}
              >
                All 49 Nadus
              </button>
              {KUMARI_NADU_GROUPS.map((group) => (
                <button
                  key={group.name}
                  onClick={() => setSelectedGroup(group.name)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedGroup === group.name
                      ? 'bg-[#9A7B45] text-[#14100D] font-bold'
                      : 'bg-[#1E1914] text-[#A89F91] hover:bg-[#2A231D]'
                  }`}
                >
                  {group.tamilName}
                </button>
              ))}
            </div>
          </div>

          {/* Main Grid View & Detail Panel */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cards List */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-max">
              {filteredNadus.length === 0 ? (
                <div className="col-span-full py-12 text-center text-[#8C7A6B]">
                  No Nadus match your search query. Try clearing filters.
                </div>
              ) : (
                filteredNadus.map((nadu) => (
                  <motion.div
                    key={nadu.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setActiveNadu(nadu)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      activeNadu?.id === nadu.id
                        ? 'bg-[#2A2219] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/10'
                        : 'bg-[#1C1713] border-[#3E3025] hover:border-[#8A6E3B]'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-mono text-[#D4AF37] px-2 py-0.5 rounded bg-[#9A7B45]/20 border border-[#9A7B45]/30">
                        {nadu.groupName}
                      </span>
                      <span className="text-xs text-[#9E9182] font-semibold">{nadu.geographyType}</span>
                    </div>
                    <h3 className="text-base font-serif font-bold text-[#F3E5AB]">{nadu.name}</h3>
                    <p className="text-sm font-sans font-medium text-[#C8AA70] mb-2">{nadu.tamilName}</p>
                    <p className="text-xs text-[#B8ACA0] line-clamp-2">{nadu.meaning}</p>
                  </motion.div>
                ))
              )}
            </div>

            {/* Selected Detail Sidebar */}
            <div className="bg-[#14100D] border border-[#3E3025] rounded-xl p-5 flex flex-col justify-between h-full">
              {activeNadu ? (
                <div className="space-y-4">
                  <div className="border-b border-[#362920] pb-3">
                    <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                      {activeNadu.groupName}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-[#E6C687] mt-1">{activeNadu.name}</h3>
                    <p className="text-sm text-[#C8AA70] font-medium">{activeNadu.tamilName}</p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#8C7A6B] font-semibold mb-1">Literal Meaning</h4>
                    <p className="text-sm text-[#E4D5BE] bg-[#1E1914] p-3 rounded-lg border border-[#362920]">
                      {activeNadu.meaning}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#8C7A6B] font-semibold mb-1">Ancient Lore & Description</h4>
                    <p className="text-xs leading-relaxed text-[#C4B7A6]">{activeNadu.description}</p>
                  </div>

                  {activeNadu.ancientCapitalOrLandmark && (
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-1 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" /> Ancient Capital / Landmark
                      </h4>
                      <p className="text-xs text-[#F3E5AB] bg-[#2A2016] p-2.5 rounded-lg border border-[#8A6E3B]/40 font-medium">
                        {activeNadu.ancientCapitalOrLandmark}
                      </p>
                    </div>
                  )}

                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#8C7A6B] font-semibold mb-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> Submerged Seafloor Hypothesis
                    </h4>
                    <p className="text-xs text-[#A89F91] italic bg-[#1E1914] p-3 rounded-lg border border-[#362920]">
                      {activeNadu.submergedLocationNotes}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#7A6C60]">
                  <Layers className="w-10 h-10 mb-3 text-[#5A4D42]" />
                  <p className="text-sm font-medium">Select any of the 49 Nadus on the left to view detailed ancient geography and lore.</p>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-[#2D231B] text-center">
                <span className="text-[11px] text-[#8C7A6B]">
                  Source: Adiyarkkunallar\'s 12th-century commentary on Silappatikaram
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
