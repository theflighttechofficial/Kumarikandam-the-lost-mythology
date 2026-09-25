import { lazy, ReactNode, Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { IntroFilm } from './components/IntroFilm';
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

const INTRO_SEEN_KEY = 'lemuria_intro_seen';

// Play the intro film once per session. Deep links (#section) and reduced-motion users go straight to the site.
function shouldShowIntro() {
  try {
    if (window.location.hash) return false;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    return sessionStorage.getItem(INTRO_SEEN_KEY) !== '1';
  } catch {
    return true;
  }
}

// Physical parchment folio reveal. Animates only opacity + transform (compositor-only, no blur filter),
// and the wrapper skips layout/paint while off-screen (.section-lazy).
const folioTransitionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1], // Natural, physical paper settlement
    },
  },
} as const;

function Reveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="section-lazy"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={folioTransitionVariants}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [showIntro, setShowIntro] = useState(shouldShowIntro);

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

  const finishIntro = useCallback(() => {
    try {
      sessionStorage.setItem(INTRO_SEEN_KEY, '1');
    } catch {
      // Ignore
    }
    setShowIntro(false);
  }, []);

  const replayIntro = useCallback(() => {
    window.scrollTo({ top: 0 });
    setShowIntro(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#140F0C] text-[#FAF6EE] font-sans selection:bg-[#9A7B45]/30 selection:text-[#FAF6EE]">
      {/* Landing: intro film, shown once per session over the site */}
      {showIntro && <IntroFilm onFinish={finishIntro} />}

      {/* Navigation Bar with Research Progress & Real Modal trigger */}
      <Navbar
        onReplayIntro={replayIntro}
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
        <Reveal>
          <WhatIsLemuria onOpenRealModal={() => setIsRealModalOpen(true)} />
        </Reveal>

        {/* 3. Interactive Map (Indian Ocean, Madagascar, India, Mauritia, Ridges) */}
        <Reveal>
          <InteractiveMap />
        </Reveal>

        {/* 4. Special Focus: Kumari Kandam in Sangam Literature */}
        <Reveal>
          <KumariKandamSection
            onOpenRealModal={() => setIsRealModalOpen(true)}
            onOpenNadusModal={() => setIsNadusModalOpen(true)}
          />
        </Reveal>

        {/* 5. Science vs. Myth (Comparative Matrix & Knowledge Quiz) */}
        <Reveal>
          <ScienceVsMyth />
        </Reveal>

        {/* 6. Timeline (1860s to Modern Day) */}
        <Reveal>
          <TimelineSection />
        </Reveal>

        {/* 6b. Other Lost Lands: Real vs. Mythical Comparative Content */}
        <Reveal>
          <RelatedLostLands />
        </Reveal>

        {/* 6c. Claims Explorer */}
        <Reveal>
          <ClaimsExplorer />
        </Reveal>

        {/* 6d. Evidence Explorer */}
        <Reveal>
          <EvidenceExplorer />
        </Reveal>

        {/* 6e. Sangam & Pandyan Tradition */}
        <Reveal>
          <SangamSection />
        </Reveal>

        {/* 6f. Kadal Kol Simulator */}
        <Reveal>
          <KadalKolSimulator />
        </Reveal>

        {/* 6g. Tamil Literature Library */}
        <Reveal>
          <TamilLiteratureLibrary />
        </Reveal>

        {/* 6h. Thinai Explorer */}
        <Reveal>
          <ThinaiExplorer />
        </Reveal>

        {/* 6i. People Directory */}
        <Reveal>
          <PeopleDirectory />
        </Reveal>

        {/* 6j. Geology Explorer + Mauritia Deep Dive */}
        <Reveal>
          <GeologyExplorer />
        </Reveal>

        {/* 6k. Gondwana Reconstruction Slider */}
        <Reveal>
          <GondwanaReconstruction />
        </Reveal>

        {/* 6l. Lemuria History Timeline */}
        <Reveal>
          <LemuriaHistoryTimeline />
        </Reveal>

        {/* 6m. Bathymetry Explorer */}
        <Reveal>
          <BathymetryExplorer />
        </Reveal>

        {/* 6n. Sea Level Explorer */}
        <Reveal>
          <SeaLevelExplorer />
        </Reveal>

        {/* 6o. Poompuhar Module */}
        <Reveal>
          <PoompuharModule />
        </Reveal>

        {/* 6p. Adam's Bridge Module */}
        <Reveal>
          <AdamsBridgeModule />
        </Reveal>

        {/* 6q. Expanded Lost Lands Explorer */}
        <Reveal>
          <LostLandsExplorer />
        </Reveal>

        {/* 6r. Evidence Matrix */}
        <Reveal>
          <EvidenceMatrix />
        </Reveal>

        {/* 6s. Source Relation Graph */}
        <Reveal>
          <SourceRelationGraph />
        </Reveal>

        {/* 6t. Idea Evolution Timeline */}
        <Reveal>
          <IdeaEvolutionTimeline />
        </Reveal>

        {/* 6u. Identify The Evidence Game */}
        <Reveal>
          <IdentifyEvidenceGame />
        </Reveal>

        {/* 6v. Fact or Claim Game */}
        <Reveal>
          <FactOrClaimGame />
        </Reveal>

        {/* 6w. Expedition Log */}
        <Reveal>
          <ExpeditionLog />
        </Reveal>

        {/* 7. Research Notes & Productivity Suite (Tasks, Notes, Keywords, Progress Bar) */}
        <Reveal>
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
        </Reveal>

        {/* 8. Academic Sources (Historical, Scientific, Modern) */}
        <Reveal>
          <SourcesSection
            sources={sources}
            onToggleRead={handleToggleSourceRead}
          />
        </Reveal>

        {/* 9. Expanded Source Library */}
        <Reveal>
          <SourceLibrary />
        </Reveal>

        {/* 10a. Marine Archaeology Database */}
        <Reveal>
          <MarineArchaeologyDatabase />
        </Reveal>

        {/* 10b. Archaeology Methods Explorer */}
        <Reveal>
          <ArchaeologyMethodsExplorer />
        </Reveal>

        {/* 10c. Proof Requirements Page */}
        <Reveal>
          <ProofRequirementsPage />
        </Reveal>

        {/* 10d. Expected Evidence Simulator */}
        <Reveal>
          <ExpectedEvidenceSimulator />
        </Reveal>

        {/* 10e. Dual Timeline (Deep Time + Human Time) */}
        <Reveal>
          <DualTimeline />
        </Reveal>

        {/* 10f. Etymology Explorer */}
        <Reveal>
          <EtymologyExplorer />
        </Reveal>

        {/* 10g. Glossary Explorer */}
        <Reveal>
          <GlossaryExplorer />
        </Reveal>

        {/* 10h. Hypothesis Builder */}
        <Reveal>
          <HypothesisBuilder />
        </Reveal>

        {/* 10i. Design Your Own Lost Continent */}
        <Reveal>
          <DesignYourContinent />
        </Reveal>

        {/* 10j. Citation Generator */}
        <Reveal>
          <CitationGenerator />
        </Reveal>

        {/* 10k. Research Question Generator */}
        <Reveal>
          <ResearchQuestionGenerator />
        </Reveal>

        {/* 10l. Argument Builder */}
        <Reveal>
          <ArgumentBuilder />
        </Reveal>

        {/* 10m. Source Criticism Card */}
        <Reveal>
          <SourceCriticismCard />
        </Reveal>

        {/* 10n. Who Said This Game */}
        <Reveal>
          <WhoSaidThisGame />
        </Reveal>

        {/* 10o. When Did This Appear Game */}
        <Reveal>
          <WhenDidThisAppearGame />
        </Reveal>

        {/* 10p. Media Archive */}
        <Reveal>
          <MediaArchive />
        </Reveal>

        {/* 10q. Historical Map Comparison Slider */}
        <Reveal>
          <MapComparisonSlider />
        </Reveal>
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


