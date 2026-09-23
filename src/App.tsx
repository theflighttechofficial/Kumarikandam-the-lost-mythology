import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { InteractiveMap } from './components/InteractiveMap';
import { KumariKandamSection } from './components/KumariKandamSection';
import { Navbar } from './components/Navbar';
import { ProductivitySuite } from './components/ProductivitySuite';
import { RelatedLostLands } from './components/RelatedLostLands';
import { ScienceVsMyth } from './components/ScienceVsMyth';
import { SourcesSection } from './components/SourcesSection';
import { TimelineSection } from './components/TimelineSection';
import { WhatIsLemuria } from './components/WhatIsLemuria';
import { INITIAL_NOTES, INITIAL_TASKS, RESEARCH_SOURCES } from './data/lemuriaData';
import { ResearchNote, ResearchSource, ResearchTask } from './types';

import { NadusExplorerModal } from './components/NadusExplorerModal';
import { KumariQuizModal } from './components/KumariQuizModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';

import { ClaimsExplorer } from './components/ClaimsExplorer';
import { EvidenceExplorer } from './components/EvidenceExplorer';
import { SangamSection } from './components/SangamSection';
import { KadalKolSimulator } from './components/KadalKolSimulator';
import { TamilLiteratureLibrary } from './components/TamilLiteratureLibrary';
import { ThinaiExplorer } from './components/ThinaiExplorer';
import { PeopleDirectory } from './components/PeopleDirectory';
import { GeologyExplorer } from './components/GeologyExplorer';
import { GondwanaReconstruction } from './components/GondwanaReconstruction';
import { LemuriaHistoryTimeline } from './components/LemuriaHistoryTimeline';
import { BathymetryExplorer } from './components/BathymetryExplorer';
import { SeaLevelExplorer } from './components/SeaLevelExplorer';
import { PoompuharModule } from './components/PoompuharModule';
import { AdamsBridgeModule } from './components/AdamsBridgeModule';
import { LostLandsExplorer } from './components/LostLandsExplorer';
import { EvidenceMatrix } from './components/EvidenceMatrix';
import { SourceLibrary } from './components/SourceLibrary';
import { SourceRelationGraph } from './components/SourceRelationGraph';
import { IdeaEvolutionTimeline } from './components/IdeaEvolutionTimeline';
import { IdentifyEvidenceGame } from './components/IdentifyEvidenceGame';
import { FactOrClaimGame } from './components/FactOrClaimGame';
import { ExpeditionLog } from './components/ExpeditionLog';

import { MarineArchaeologyDatabase } from './components/MarineArchaeologyDatabase';
import { ArchaeologyMethodsExplorer } from './components/ArchaeologyMethodsExplorer';
import { ProofRequirementsPage } from './components/ProofRequirementsPage';
import { ExpectedEvidenceSimulator } from './components/ExpectedEvidenceSimulator';
import { DualTimeline } from './components/DualTimeline';
import { EtymologyExplorer } from './components/EtymologyExplorer';
import { GlossaryExplorer } from './components/GlossaryExplorer';
import { HypothesisBuilder } from './components/HypothesisBuilder';
import { DesignYourContinent } from './components/DesignYourContinent';
import { CitationGenerator } from './components/CitationGenerator';
import { ResearchQuestionGenerator } from './components/ResearchQuestionGenerator';
import { ArgumentBuilder } from './components/ArgumentBuilder';
import { SourceCriticismCard } from './components/SourceCriticismCard';
import { WhoSaidThisGame } from './components/WhoSaidThisGame';
import { WhenDidThisAppearGame } from './components/WhenDidThisAppearGame';
import { MediaArchive } from './components/MediaArchive';
import { MapComparisonSlider } from './components/MapComparisonSlider';

// Lazy-loaded modal
const RealModal = lazy(() => import('./components/RealModal').then((m) => ({ default: m.RealModal })));

export default function App() {
  // Standout Feature Modals
  const [isRealModalOpen, setIsRealModalOpen] = useState(false);
  const [isNadusModalOpen, setIsNadusModalOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);



  // Persistent Research Notes State
  const [notes, setNotes] = useState<ResearchNote[]>(() => {
    try {
      const saved = localStorage.getItem('lemuria_research_notes');
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback
    }
    return INITIAL_NOTES;
  });

  // Persistent Research Tasks State
  const [tasks, setTasks] = useState<ResearchTask[]>(() => {
    try {
      const saved = localStorage.getItem('lemuria_research_tasks');
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback
    }
    return INITIAL_TASKS;
  });

  // Persistent Sources Read State
  const [sources, setSources] = useState<ResearchSource[]>(() => {
    try {
      const saved = localStorage.getItem('lemuria_research_sources');
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback
    }
    return RESEARCH_SOURCES;
  });

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('lemuria_research_notes', JSON.stringify(notes));
    } catch {
      // Ignore
    }
  }, [notes]);

  useEffect(() => {
    try {
      localStorage.setItem('lemuria_research_tasks', JSON.stringify(tasks));
    } catch {
      // Ignore
    }
  }, [tasks]);

  useEffect(() => {
    try {
      localStorage.setItem('lemuria_research_sources', JSON.stringify(sources));
    } catch {
      // Ignore
    }
  }, [sources]);

  // Dynamic Research Progress Calculation
  const progressPercentage = useMemo(() => {
    // 1. Task progress (weight 45%)
    const completedTasks = tasks.filter((t) => t.completed).length;
    const taskRatio = tasks.length > 0 ? completedTasks / tasks.length : 0;

    // 2. Sources Read progress (weight 35%)
    const readSources = sources.filter((s) => s.isRead).length;
    const sourcesRatio = sources.length > 0 ? readSources / sources.length : 0;

    // 3. Notes created progress (weight 20%, target is 4 notes)
    const notesRatio = Math.min(notes.length / 4, 1);

    const score = taskRatio * 45 + sourcesRatio * 35 + notesRatio * 20;
    return Math.min(Math.max(Math.round(score), 10), 100);
  }, [tasks, sources, notes]);

  // Notes Handlers
  const handleAddNote = (newNoteData: Omit<ResearchNote, 'id' | 'timestamp'>) => {
    const newNote: ResearchNote = {
      ...newNoteData,
      id: `n-${Date.now()}`,
      timestamp: 'Just now',
    };
    setNotes((prev) => [newNote, ...prev]);
  };

  const handleDeleteNote = (id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  // Tasks Handlers
  const handleToggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleAddTask = (
    text: string,
    priority: 'high' | 'medium' | 'low',
    category: string
  ) => {
    const newTask: ResearchTask = {
      id: `task-${Date.now()}`,
      text,
      completed: false,
      priority,
      category: category.trim() || 'General',
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  // Sources Handlers
  const handleToggleSourceRead = (id: string) => {
    setSources((prev) =>
      prev.map((s) => (s.id === id ? { ...s, isRead: !s.isRead } : s))
    );
  };

  // Physical parchment folio animation variant
  const folioTransitionVariants = {
    hidden: { opacity: 0, y: 28, filter: 'blur(1px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.65,
        ease: [0.25, 1, 0.5, 1], // Natural, physical paper settlement
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#140F0C] text-[#FAF6EE] font-sans selection:bg-[#9A7B45]/30 selection:text-[#FAF6EE]">
      {/* Navigation Bar with Research Progress & Real Modal trigger */}
      <Navbar
        onOpenRealModal={() => setIsRealModalOpen(true)}
        onOpenSearchModal={() => setIsSearchModalOpen(true)}
        onOpenQuizModal={() => setIsQuizModalOpen(true)}
        progressPercentage={progressPercentage}
      />


      {/* Main Content Sections with Physical Folio Reveal Transitions */}
      <main className="overflow-x-hidden">
        {/* 1. Hero Section */}
        <Hero onOpenRealModal={() => setIsRealModalOpen(true)} />

        {/* 2. What is Lemuria? (Origins & Distinction) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={folioTransitionVariants}
        >
          <WhatIsLemuria onOpenRealModal={() => setIsRealModalOpen(true)} />
        </motion.div>

        {/* 3. Interactive Map (Indian Ocean, Madagascar, India, Mauritia, Ridges) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={folioTransitionVariants}
        >
          <InteractiveMap />
        </motion.div>

        {/* 4. Special Focus: Kumari Kandam in Sangam Literature */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={folioTransitionVariants}
        >
          <KumariKandamSection
            onOpenRealModal={() => setIsRealModalOpen(true)}
            onOpenNadusModal={() => setIsNadusModalOpen(true)}
          />
        </motion.div>

        {/* 5. Science vs. Myth (Comparative Matrix & Knowledge Quiz) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={folioTransitionVariants}
        >
          <ScienceVsMyth />
        </motion.div>

        {/* 6. Timeline (1860s to Modern Day) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={folioTransitionVariants}
        >
          <TimelineSection />
        </motion.div>

        {/* 6b. Other Lost Lands: Real vs. Mythical Comparative Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={folioTransitionVariants}
        >
          <RelatedLostLands />
        </motion.div>

        {/* 6c. Claims Explorer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={folioTransitionVariants}
        >
          <ClaimsExplorer />
        </motion.div>

        {/* 6d. Evidence Explorer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={folioTransitionVariants}
        >
          <EvidenceExplorer />
        </motion.div>

        {/* 6e. Sangam & Pandyan Tradition */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={folioTransitionVariants}
        >
          <SangamSection />
        </motion.div>

        {/* 6f. Kadal Kol Simulator */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={folioTransitionVariants}
        >
          <KadalKolSimulator />
        </motion.div>

        {/* 6g. Tamil Literature Library */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={folioTransitionVariants}
        >
          <TamilLiteratureLibrary />
        </motion.div>

        {/* 6h. Thinai Explorer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={folioTransitionVariants}
        >
          <ThinaiExplorer />
        </motion.div>

        {/* 6i. People Directory */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={folioTransitionVariants}
        >
          <PeopleDirectory />
        </motion.div>

        {/* 6j. Geology Explorer + Mauritia Deep Dive */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={folioTransitionVariants}
        >
          <GeologyExplorer />
        </motion.div>

        {/* 6k. Gondwana Reconstruction Slider */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={folioTransitionVariants}
        >
          <GondwanaReconstruction />
        </motion.div>

        {/* 6l. Lemuria History Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={folioTransitionVariants}
        >
          <LemuriaHistoryTimeline />
        </motion.div>

        {/* 6m. Bathymetry Explorer */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <BathymetryExplorer />
        </motion.div>

        {/* 6n. Sea Level Explorer */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <SeaLevelExplorer />
        </motion.div>

        {/* 6o. Poompuhar Module */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <PoompuharModule />
        </motion.div>

        {/* 6p. Adam's Bridge Module */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <AdamsBridgeModule />
        </motion.div>

        {/* 6q. Expanded Lost Lands Explorer */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <LostLandsExplorer />
        </motion.div>

        {/* 6r. Evidence Matrix */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <EvidenceMatrix />
        </motion.div>

        {/* 6s. Source Relation Graph */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <SourceRelationGraph />
        </motion.div>

        {/* 6t. Idea Evolution Timeline */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <IdeaEvolutionTimeline />
        </motion.div>

        {/* 6u. Identify The Evidence Game */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <IdentifyEvidenceGame />
        </motion.div>

        {/* 6v. Fact or Claim Game */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <FactOrClaimGame />
        </motion.div>

        {/* 6w. Expedition Log */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <ExpeditionLog />
        </motion.div>

        {/* 7. Research Notes & Productivity Suite (Tasks, Notes, Keywords, Progress Bar) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={folioTransitionVariants}
        >
          <ProductivitySuite
            notes={notes}
            onAddNote={handleAddNote}
            onDeleteNote={handleDeleteNote}
            tasks={tasks}
            onToggleTask={handleToggleTask}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
            progressPercentage={progressPercentage}
          />
        </motion.div>

        {/* 8. Academic Sources (Historical, Scientific, Modern) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={folioTransitionVariants}
        >
          <SourcesSection
            sources={sources}
            onToggleRead={handleToggleSourceRead}
          />
        </motion.div>

        {/* 9. Expanded Source Library */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <SourceLibrary />
        </motion.div>

        {/* 10a. Marine Archaeology Database */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <MarineArchaeologyDatabase />
        </motion.div>

        {/* 10b. Archaeology Methods Explorer */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <ArchaeologyMethodsExplorer />
        </motion.div>

        {/* 10c. Proof Requirements Page */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <ProofRequirementsPage />
        </motion.div>

        {/* 10d. Expected Evidence Simulator */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <ExpectedEvidenceSimulator />
        </motion.div>

        {/* 10e. Dual Timeline (Deep Time + Human Time) */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <DualTimeline />
        </motion.div>

        {/* 10f. Etymology Explorer */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <EtymologyExplorer />
        </motion.div>

        {/* 10g. Glossary Explorer */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <GlossaryExplorer />
        </motion.div>

        {/* 10h. Hypothesis Builder */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <HypothesisBuilder />
        </motion.div>

        {/* 10i. Design Your Own Lost Continent */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <DesignYourContinent />
        </motion.div>

        {/* 10j. Citation Generator */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <CitationGenerator />
        </motion.div>

        {/* 10k. Research Question Generator */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <ResearchQuestionGenerator />
        </motion.div>

        {/* 10l. Argument Builder */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <ArgumentBuilder />
        </motion.div>

        {/* 10m. Source Criticism Card */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <SourceCriticismCard />
        </motion.div>

        {/* 10n. Who Said This Game */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <WhoSaidThisGame />
        </motion.div>

        {/* 10o. When Did This Appear Game */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <WhenDidThisAppearGame />
        </motion.div>

        {/* 10p. Media Archive */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <MediaArchive />
        </motion.div>

        {/* 10q. Historical Map Comparison Slider */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={folioTransitionVariants}>
          <MapComparisonSlider />
        </motion.div>
      </main>

      {/* Academic Footer */}
      <Footer
        onOpenRealModal={() => setIsRealModalOpen(true)}
      />

      {/* Interactive 49 Nadus Explorer Modal */}
      <NadusExplorerModal
        isOpen={isNadusModalOpen}
        onClose={() => setIsNadusModalOpen(false)}
      />

      {/* Interactive Knowledge Quiz Modal */}
      <KumariQuizModal
        isOpen={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
      />

      {/* Global Search Modal (Ctrl+K) */}
      <GlobalSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onNavigateSection={(targetSection) => {
          const el = document.getElementById(targetSection);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Standout Feature: "Is Lemuria Real?" Modal (lazy-mounted on first open) */}
      {isRealModalOpen && (
        <Suspense fallback={null}>
          <RealModal isOpen={isRealModalOpen} onClose={() => setIsRealModalOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}


