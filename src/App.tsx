import { lazy, ReactNode, Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { IntroFilm } from './components/IntroFilm';
import { Navbar } from './components/Navbar';
import { INITIAL_NOTES, INITIAL_TASKS, RESEARCH_SOURCES } from './data/lemuriaData';
import { ResearchNote, ResearchSource, ResearchTask } from './types';
import { lazySection, whenSectionsLoaded } from './lazySection';
import { SectionBoundary } from './components/SectionBoundary';
import { SectionSkeleton } from './components/SectionSkeleton';
import { NetworkStatus } from './components/NetworkStatus';

// Below-the-fold sections and modals load as separate chunks so the first screen ships less JavaScript.
const InteractiveMap = lazySection(() => import('./components/InteractiveMap'), 'InteractiveMap');
const KumariKandamSection = lazySection(() => import('./components/KumariKandamSection'), 'KumariKandamSection');
const ProductivitySuite = lazySection(() => import('./components/ProductivitySuite'), 'ProductivitySuite');
const RelatedLostLands = lazySection(() => import('./components/RelatedLostLands'), 'RelatedLostLands');
const ScienceVsMyth = lazySection(() => import('./components/ScienceVsMyth'), 'ScienceVsMyth');
const SourcesSection = lazySection(() => import('./components/SourcesSection'), 'SourcesSection');
const TimelineSection = lazySection(() => import('./components/TimelineSection'), 'TimelineSection');
const WhatIsLemuria = lazySection(() => import('./components/WhatIsLemuria'), 'WhatIsLemuria');
const NadusExplorerModal = lazySection(() => import('./components/NadusExplorerModal'), 'NadusExplorerModal');
const KumariQuizModal = lazySection(() => import('./components/KumariQuizModal'), 'KumariQuizModal');
const ClaimsExplorer = lazySection(() => import('./components/ClaimsExplorer'), 'ClaimsExplorer');
const EvidenceExplorer = lazySection(() => import('./components/EvidenceExplorer'), 'EvidenceExplorer');
const SangamSection = lazySection(() => import('./components/SangamSection'), 'SangamSection');
const KadalKolSimulator = lazySection(() => import('./components/KadalKolSimulator'), 'KadalKolSimulator');
const TamilLiteratureLibrary = lazySection(() => import('./components/TamilLiteratureLibrary'), 'TamilLiteratureLibrary');
const ThinaiExplorer = lazySection(() => import('./components/ThinaiExplorer'), 'ThinaiExplorer');
const PeopleDirectory = lazySection(() => import('./components/PeopleDirectory'), 'PeopleDirectory');
const GeologyExplorer = lazySection(() => import('./components/GeologyExplorer'), 'GeologyExplorer');
const GondwanaReconstruction = lazySection(() => import('./components/GondwanaReconstruction'), 'GondwanaReconstruction');
const LemuriaHistoryTimeline = lazySection(() => import('./components/LemuriaHistoryTimeline'), 'LemuriaHistoryTimeline');
const BathymetryExplorer = lazySection(() => import('./components/BathymetryExplorer'), 'BathymetryExplorer');
const SeaLevelExplorer = lazySection(() => import('./components/SeaLevelExplorer'), 'SeaLevelExplorer');
const PoompuharModule = lazySection(() => import('./components/PoompuharModule'), 'PoompuharModule');
const AdamsBridgeModule = lazySection(() => import('./components/AdamsBridgeModule'), 'AdamsBridgeModule');
const LostLandsExplorer = lazySection(() => import('./components/LostLandsExplorer'), 'LostLandsExplorer');
const EvidenceMatrix = lazySection(() => import('./components/EvidenceMatrix'), 'EvidenceMatrix');
const SourceLibrary = lazySection(() => import('./components/SourceLibrary'), 'SourceLibrary');
const SourceRelationGraph = lazySection(() => import('./components/SourceRelationGraph'), 'SourceRelationGraph');
const IdeaEvolutionTimeline = lazySection(() => import('./components/IdeaEvolutionTimeline'), 'IdeaEvolutionTimeline');
const IdentifyEvidenceGame = lazySection(() => import('./components/IdentifyEvidenceGame'), 'IdentifyEvidenceGame');
const FactOrClaimGame = lazySection(() => import('./components/FactOrClaimGame'), 'FactOrClaimGame');
const ExpeditionLog = lazySection(() => import('./components/ExpeditionLog'), 'ExpeditionLog');
const MarineArchaeologyDatabase = lazySection(() => import('./components/MarineArchaeologyDatabase'), 'MarineArchaeologyDatabase');
const ArchaeologyMethodsExplorer = lazySection(() => import('./components/ArchaeologyMethodsExplorer'), 'ArchaeologyMethodsExplorer');
const ProofRequirementsPage = lazySection(() => import('./components/ProofRequirementsPage'), 'ProofRequirementsPage');
const ExpectedEvidenceSimulator = lazySection(() => import('./components/ExpectedEvidenceSimulator'), 'ExpectedEvidenceSimulator');
const DualTimeline = lazySection(() => import('./components/DualTimeline'), 'DualTimeline');
const EtymologyExplorer = lazySection(() => import('./components/EtymologyExplorer'), 'EtymologyExplorer');
const GlossaryExplorer = lazySection(() => import('./components/GlossaryExplorer'), 'GlossaryExplorer');
const HypothesisBuilder = lazySection(() => import('./components/HypothesisBuilder'), 'HypothesisBuilder');
const DesignYourContinent = lazySection(() => import('./components/DesignYourContinent'), 'DesignYourContinent');
const CitationGenerator = lazySection(() => import('./components/CitationGenerator'), 'CitationGenerator');
const ResearchQuestionGenerator = lazySection(() => import('./components/ResearchQuestionGenerator'), 'ResearchQuestionGenerator');
const ArgumentBuilder = lazySection(() => import('./components/ArgumentBuilder'), 'ArgumentBuilder');
const SourceCriticismCard = lazySection(() => import('./components/SourceCriticismCard'), 'SourceCriticismCard');
const WhoSaidThisGame = lazySection(() => import('./components/WhoSaidThisGame'), 'WhoSaidThisGame');
const WhenDidThisAppearGame = lazySection(() => import('./components/WhenDidThisAppearGame'), 'WhenDidThisAppearGame');
const MediaArchive = lazySection(() => import('./components/MediaArchive'), 'MediaArchive');
const MapComparisonSlider = lazySection(() => import('./components/MapComparisonSlider'), 'MapComparisonSlider');


// Lazy-loaded modal
const GlobalSearchModal = lazySection(() => import('./components/GlobalSearchModal'), 'GlobalSearchModal');
const RealModal = lazy(() => import('./components/RealModal').then((m) => ({ default: m.RealModal })));

// The intro film plays on every page load, on all devices. Start at the top so a
// reload doesn't restore a mid-page scroll position behind the film.
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

// Physical parchment folio reveal: fades each section up once as it enters view.
// Plain CSS + one shared IntersectionObserver, so the first screen doesn't ship an animation library.
let revealObserver: IntersectionObserver | null = null;
function observeReveal(el: Element) {
  if (!('IntersectionObserver' in window)) {
    el.classList.add('is-visible');
    return () => {};
  }
  revealObserver ??= new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver?.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -60px 0px' },
  );
  revealObserver.observe(el);
  return () => revealObserver?.unobserve(el);
}

function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => (ref.current ? observeReveal(ref.current) : undefined), []);
  return (
    <div ref={ref} className="section-lazy reveal">
      <SectionBoundary>
        <Suspense fallback={<SectionSkeleton />}>{children}</Suspense>
      </SectionBoundary>
    </div>
  );
}

export default function App() {
  // Once the first screen is idle, fetch the remaining section chunks so scrolling never waits on the network.
  useEffect(() => {
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1500));
    idle(() => {
      whenSectionsLoaded();
    });
  }, []);

  // Ctrl+K / Cmd+K toggles search, as advertised on the navbar button.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchModalOpen((open) => !open);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // In-page links (#section) may target a section whose chunk hasn't rendered yet. Wait for it, then scroll.
  useEffect(() => {
    const scrollToHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id || document.getElementById(id)) return;
      whenSectionsLoaded().then(() => {
        let tries = 0;
        const attempt = () => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView();
          else if (tries++ < 30) requestAnimationFrame(attempt);
        };
        attempt();
      });
    };
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  const [showIntro, setShowIntro] = useState(true);

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
    setShowIntro(false);
    // Deep links (#section) land on their section once the film ends.
    const target = window.location.hash && document.getElementById(window.location.hash.slice(1));
    if (target) target.scrollIntoView();
  }, []);

  const replayIntro = useCallback(() => {
    window.scrollTo({ top: 0 });
    setShowIntro(true);
  }, []);

  return (
    <div className="min-h-screen text-[color:var(--fg-FAF6EE)] font-sans selection:bg-[color:var(--bg-9A7B45)]/30 selection:text-[color:var(--fg-FAF6EE)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:px-4 focus:py-3 focus:rounded focus:bg-[color:var(--bg-9A7B45)] focus:text-[color:var(--fg-FAF6EE)] focus:font-heading"
      >
        Skip to content
      </a>
      <NetworkStatus />

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
      <main id="main-content" tabIndex={-1} className="overflow-x-hidden focus:outline-none">
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
      {isNadusModalOpen && (
<Suspense fallback={null}>
<NadusExplorerModal
        isOpen={isNadusModalOpen}
        onClose={() => setIsNadusModalOpen(false)}
      />
</Suspense>
)}

      {/* Interactive Knowledge Quiz Modal */}
      {isQuizModalOpen && (
<Suspense fallback={null}>
<KumariQuizModal
        isOpen={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
      />
</Suspense>
)}

      {/* Global Search Modal (Ctrl+K) */}
      {isSearchModalOpen && (
<Suspense fallback={null}>
<GlobalSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onNavigateSection={(targetSection) => {
          const el = document.getElementById(targetSection);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else window.location.hash = targetSection;
        }}
      />
</Suspense>
)}

      {/* Standout Feature: "Is Lemuria Real?" Modal (lazy-mounted on first open) */}
      {isRealModalOpen && (
        <Suspense fallback={null}>
          <RealModal isOpen={isRealModalOpen} onClose={() => setIsRealModalOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}

