import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { InteractiveMap } from './components/InteractiveMap';
import { KumariKandamSection } from './components/KumariKandamSection';
import { Navbar } from './components/Navbar';
import { ProductivitySuite } from './components/ProductivitySuite';
import { RealModal } from './components/RealModal';
import { ScienceVsMyth } from './components/ScienceVsMyth';
import { SourcesSection } from './components/SourcesSection';
import { TimelineSection } from './components/TimelineSection';
import { VsCodeExportModal } from './components/VsCodeExportModal';
import { WhatIsLemuria } from './components/WhatIsLemuria';
import { INITIAL_NOTES, INITIAL_TASKS, RESEARCH_SOURCES } from './data/lemuriaData';
import { ResearchNote, ResearchSource, ResearchTask } from './types';

export default function App() {
  // Standout Feature Modals
  const [isRealModalOpen, setIsRealModalOpen] = useState(false);
  const [isVsCodeModalOpen, setIsVsCodeModalOpen] = useState(false);

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
        onOpenVsCodeModal={() => setIsVsCodeModalOpen(true)}
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
          <KumariKandamSection onOpenRealModal={() => setIsRealModalOpen(true)} />
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
      </main>

      {/* Academic Footer */}
      <Footer
        onOpenRealModal={() => setIsRealModalOpen(true)}
        onOpenVsCodeModal={() => setIsVsCodeModalOpen(true)}
      />

      {/* Standout Feature: "Is Lemuria Real?" Modal */}
      <RealModal
        isOpen={isRealModalOpen}
        onClose={() => setIsRealModalOpen(false)}
      />

      {/* VS Code Vanilla Files Exporter Modal */}
      <VsCodeExportModal
        isOpen={isVsCodeModalOpen}
        onClose={() => setIsVsCodeModalOpen(false)}
      />
    </div>
  );
}

