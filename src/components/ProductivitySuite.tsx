import { FormEvent, useState } from 'react';
import {
  BookmarkCheck,
  Check,
  CheckCircle2,
  CheckSquare,
  Copy,
  Download,
  FileText,
  Filter,
  ListTodo,
  Plus,
  Search,
  Sparkles,
  Tag,
  Trash2,
} from 'lucide-react';
import { ResearchNote, ResearchTask } from '../types';

interface ProductivitySuiteProps {
  notes: ResearchNote[];
  onAddNote: (note: Omit<ResearchNote, 'id' | 'timestamp'>) => void;
  onDeleteNote: (id: string) => void;
  tasks: ResearchTask[];
  onToggleTask: (id: string) => void;
  onAddTask: (text: string, priority: 'high' | 'medium' | 'low', category: string) => void;
  onDeleteTask: (id: string) => void;
  progressPercentage: number;
}

export function ProductivitySuite({
  notes,
  onAddNote,
  onDeleteNote,
  tasks,
  onToggleTask,
  onAddTask,
  onDeleteTask,
  progressPercentage,
}: ProductivitySuiteProps) {
  // Search & Filter state
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('All');

  // New Note state
  const [isAddingNote, setIsAddingNote] = useState<boolean>(false);
  const [newNoteTitle, setNewNoteTitle] = useState<string>('');
  const [newNoteTag, setNewNoteTag] = useState<ResearchNote['tag']>('Science');
  const [newNoteContent, setNewNoteContent] = useState<string>('');

  // New Task state
  const [isAddingTask, setIsAddingTask] = useState<boolean>(false);
  const [newTaskText, setNewTaskText] = useState<string>('');
  const [newTaskPriority, setNewTaskPriority] = useState<'high' | 'medium' | 'low'>('medium');
  const [newTaskCategory, setNewTaskCategory] = useState<string>('General');

  // Export copy state
  const [copiedStatus, setCopiedStatus] = useState<string | null>(null);

  // Filter notes
  const filteredNotes = notes.filter((n) => {
    const matchesKeyword =
      searchKeyword.trim() === '' ||
      n.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      n.content.toLowerCase().includes(searchKeyword.toLowerCase());
    const matchesTag = selectedTag === 'All' || n.tag === selectedTag;
    return matchesKeyword && matchesTag;
  });

  const handleCreateNote = (e: FormEvent) => {
    e.preventDefault();
    if (!newNoteTitle.trim() || !newNoteContent.trim()) return;

    onAddNote({
      title: newNoteTitle.trim(),
      tag: newNoteTag,
      content: newNoteContent.trim(),
    });

    setNewNoteTitle('');
    setNewNoteContent('');
    setIsAddingNote(false);
  };

  const handleCreateTask = (e: FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    onAddTask(newTaskText.trim(), newTaskPriority, newTaskCategory);
    setNewTaskText('');
    setIsAddingTask(false);
  };

  const handleExportNotesMarkdown = () => {
    const text = `# Lemuria Research Study Notes\nGenerated on: ${new Date().toLocaleDateString()}\nResearch Progress: ${progressPercentage}%\n\n` +
      notes
        .map(
          (n) =>
            `## ${n.title} [${n.tag}]\n*Saved: ${n.timestamp}*\n\n${n.content}\n\n---`
        )
        .join('\n\n');

    navigator.clipboard.writeText(text);
    setCopiedStatus('Copied all field notes to clipboard in Markdown format!');
    setTimeout(() => setCopiedStatus(null), 3000);
  };

  const handleExportTasksMarkdown = () => {
    const text = `# Lemuria Expedition Manifest\nGenerated on: ${new Date().toLocaleDateString()}\nProgress: ${progressPercentage}% (${tasks.filter((t) => t.completed).length}/${tasks.length} complete)\n\n` +
      tasks
        .map(
          (t) =>
            `- [${t.completed ? 'x' : ' '}] **${t.text}** _(${t.priority} priority, ${t.category})_`
        )
        .join('\n');

    navigator.clipboard.writeText(text);
    setCopiedStatus('Copied expedition manifest to clipboard in Markdown format!');
    setTimeout(() => setCopiedStatus(null), 3000);
  };

  return (
    <section id="productivity" className="py-20 bg-[#1E1914] border-b border-[#463429] relative">
      <div className="absolute inset-0 bg-carto-grid opacity-15 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
              <CheckSquare className="w-4 h-4 text-[#9A7B45]" />
              <span>Expedition Field Desk & Research Dossier</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">
              Field Notes & Expedition Suite
            </h2>
            <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
              Log archival discoveries, cross-reference coordinates, catalog geological specimens, and maintain your expedition task manifest.
            </p>
          </div>

          {/* Research Progress Metric Box */}
          <div className="p-4 sm:p-5 rounded bg-[#241B15] border border-[#463429] shadow-xl min-w-[280px] relative">
            <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
            <div className="flex items-center justify-between text-xs font-carto font-bold mb-2">
              <span className="text-[#E6D7B9] uppercase tracking-wider flex items-center gap-1.5">
                <BookmarkCheck className="w-4 h-4 text-[#9A7B45]" />
                <span>Expedition Progress</span>
              </span>
              <span className="text-[#9A7B45] font-mono text-base font-bold">
                {progressPercentage}%
              </span>
            </div>

            {/* Progress bar line */}
            <div className="w-full h-2.5 bg-[#1E1914] rounded-full overflow-hidden border border-[#463429]">
              <div
                className="h-full bg-gradient-to-r from-[#8B5E4A] via-[#9A7B45] to-[#CDBB96] transition-all duration-500 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#CDBB96]/80 mt-2 font-carto uppercase tracking-wider">
              <span>{tasks.filter((t) => t.completed).length}/{tasks.length} Directives Complete</span>
              <span>{notes.length} Journal Entries</span>
            </div>
          </div>
        </div>

        {/* Global Keyword Search & Filter Bar */}
        <div className="p-4 bg-[#241B15] border border-[#463429] rounded mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#9A7B45] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="search-research-input"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="Search dossier & keywords (zircon, Wegener)..."
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-[#1E1914] border border-[#463429] rounded text-[#FAF6EE] placeholder-[#CDBB96]/40 focus:outline-none focus:border-[#9A7B45] font-serif transition-colors"
            />
          </div>

          {/* Tag Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto font-carto">
            <span className="text-xs text-[#9A7B45] flex items-center gap-1 mr-1 uppercase font-bold tracking-wider text-[11px]">
              <Tag className="w-3 h-3 text-[#9A7B45]" /> Folio:
            </span>
            {['All', 'Science', 'Mythology', 'Tectonics', 'Biogeography', 'Kumari Kandam', 'General'].map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTag(t)}
                className={`px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap min-h-[32px] ${
                  selectedTag === t
                    ? 'bg-[#2B211A] text-[#FAF6EE] border border-[#9A7B45] shadow-sm'
                    : 'bg-[#1E1914] text-[#CDBB96]/70 hover:text-[#E6D7B9] border border-[#463429]'
                }`}
              >
                {t}
              </button>
            ))}

            <button
              onClick={handleExportNotesMarkdown}
              id="export-dossier-btn"
              className="w-full sm:w-auto sm:ml-2 flex items-center justify-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded bg-[#2B211A] hover:bg-[#342820] text-[#FAF6EE] border border-[#9A7B45] transition-colors min-h-[32px]"
              title="Copy all notes formatted for export"
            >
              <Copy className="w-3.5 h-3.5 text-[#9A7B45]" />
              <span>Export Dossier</span>
            </button>
          </div>
        </div>

        {copiedStatus && (
          <div className="mb-6 p-3 rounded bg-[#241B15] border border-[#53665C] text-[#FAF6EE] text-xs font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#53665C]" />
            <span>{copiedStatus}</span>
          </div>
        )}

        {/* Workspace Layout: Left Column (Research Notes) + Right Column (To Research Checklist) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* RESEARCH NOTES (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold font-heading text-[#E6D7B9] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#9A7B45]" />
                <span>Field Folio Entries ({filteredNotes.length})</span>
              </h3>

              <button
                id="toggle-add-note-btn"
                onClick={() => setIsAddingNote(!isAddingNote)}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold font-carto uppercase tracking-wider rounded bg-[#2B211A] hover:bg-[#342820] text-[#FAF6EE] border border-[#9A7B45] transition-colors"
              >
                <Plus className="w-3.5 h-3.5 text-[#9A7B45]" />
                <span>Add Entry</span>
              </button>
            </div>

            {/* Add Note Form Card */}
            {isAddingNote && (
              <form
                onSubmit={handleCreateNote}
                className="p-5 rounded bg-[#241B15] border border-[#9A7B45] space-y-4 shadow-xl relative"
              >
                <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-[#E6D7B9] uppercase tracking-widest font-carto">
                    New Field Note Dossier
                  </h4>
                  <button
                    type="button"
                    onClick={() => setIsAddingNote(false)}
                    className="text-xs text-[#CDBB96] hover:text-[#FAF6EE] font-carto uppercase"
                  >
                    Cancel
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <input
                      type="text"
                      placeholder="Note Title / Observation..."
                      value={newNoteTitle}
                      onChange={(e) => setNewNoteTitle(e.target.value)}
                      required
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded bg-[#1E1914] border border-[#463429] text-[#FAF6EE] placeholder-[#CDBB96]/40 focus:outline-none focus:border-[#9A7B45] font-serif"
                    />
                  </div>
                  <div>
                    <select
                      value={newNoteTag}
                      onChange={(e) => setNewNoteTag(e.target.value as ResearchNote['tag'])}
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded bg-[#1E1914] border border-[#463429] text-[#FAF6EE] focus:outline-none focus:border-[#9A7B45] font-carto"
                    >
                      <option value="Science">Science</option>
                      <option value="Mythology">Mythology</option>
                      <option value="Tectonics">Tectonics</option>
                      <option value="Biogeography">Biogeography</option>
                      <option value="General">General</option>
                    </select>
                  </div>
                </div>

                <textarea
                  placeholder="Detailed observations, archival citations, or stratigraphy notes..."
                  value={newNoteContent}
                  onChange={(e) => setNewNoteContent(e.target.value)}
                  rows={4}
                  required
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded bg-[#1E1914] border border-[#463429] text-[#FAF6EE] placeholder-[#CDBB96]/40 focus:outline-none focus:border-[#9A7B45] resize-none font-serif"
                />

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAddingNote(false)}
                    className="px-4 py-2 text-xs text-[#CDBB96] hover:text-[#FAF6EE] rounded font-carto uppercase"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-bold font-carto uppercase tracking-wider rounded bg-[#2B211A] hover:bg-[#342820] text-[#FAF6EE] border border-[#9A7B45] shadow-sm"
                  >
                    Record Note
                  </button>
                </div>
              </form>
            )}

            {/* Notes List */}
            <div className="space-y-3">
              {filteredNotes.length === 0 ? (
                <div className="p-8 text-center rounded bg-[#241B15] border border-[#463429] text-[#CDBB96] text-xs font-serif">
                  No notes found matching “{searchKeyword}”. Create a new field entry above!
                </div>
              ) : (
                filteredNotes.map((note) => (
                  <div
                    key={note.id}
                    className="p-5 rounded bg-[#241B15] border border-[#463429] hover:border-[#756451] transition-all space-y-2 group relative"
                  >
                    <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-[#1E1914] text-[#9A7B45] border border-[#9A7B45]/40 font-carto uppercase tracking-wider">
                          {note.tag}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-[#E6D7B9] font-heading">
                          {note.title}
                        </h4>
                      </div>

                      <button
                        onClick={() => onDeleteNote(note.id)}
                        className="text-[#CDBB96]/40 hover:text-[#8B5E4A] p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Delete note"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-[#CDBB96] leading-relaxed font-serif">
                      {note.content}
                    </p>

                    <div className="pt-2 text-[11px] text-[#9A7B45] font-mono">
                      {note.timestamp}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* TO RESEARCH CHECKLIST (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold font-heading text-[#E6D7B9] flex items-center gap-2">
                <ListTodo className="w-4 h-4 text-[#53665C]" />
                <span>Expedition Manifest ({tasks.length})</span>
              </h3>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleExportTasksMarkdown}
                  id="export-manifest-btn"
                  title="Copy expedition manifest formatted for export"
                  className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold font-carto uppercase tracking-wider rounded bg-[#2B211A] hover:bg-[#342820] text-[#FAF6EE] border border-[#463429] transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-[#53665C]" />
                </button>
                <button
                  id="toggle-add-task-btn"
                  onClick={() => setIsAddingTask(!isAddingTask)}
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold font-carto uppercase tracking-wider rounded bg-[#2B211A] hover:bg-[#342820] text-[#FAF6EE] border border-[#53665C] transition-colors"
                >
                  <Plus className="w-3.5 h-3.5 text-[#53665C]" />
                  <span>Add Directive</span>
                </button>
              </div>
            </div>

            {/* Add Task Form Card */}
            {isAddingTask && (
              <form
                onSubmit={handleCreateTask}
                className="p-4 rounded bg-[#241B15] border border-[#53665C] space-y-3 shadow-xl relative"
              >
                <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full brass-stud" />
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-[#E6D7B9] uppercase tracking-widest font-carto">
                    New Expedition Directive
                  </h4>
                  <button
                    type="button"
                    onClick={() => setIsAddingTask(false)}
                    className="text-xs text-[#CDBB96] hover:text-[#FAF6EE] font-carto uppercase"
                  >
                    Cancel
                  </button>
                </div>

                <input
                  type="text"
                  placeholder="Task directive (verify zircon radiometric date)..."
                  value={newTaskText}
                  onChange={(e) => setNewTaskText(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-xs rounded bg-[#1E1914] border border-[#463429] text-[#FAF6EE] placeholder-[#CDBB96]/40 focus:outline-none focus:border-[#53665C] font-serif"
                />

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] text-[#9A7B45] uppercase font-carto font-bold mb-1">
                      Urgency:
                    </label>
                    <select
                      value={newTaskPriority}
                      onChange={(e) =>
                        setNewTaskPriority(e.target.value as 'high' | 'medium' | 'low')
                      }
                      className="w-full px-2.5 py-1.5 text-xs rounded bg-[#1E1914] border border-[#463429] text-[#FAF6EE] focus:outline-none font-carto"
                    >
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] text-[#9A7B45] uppercase font-carto font-bold mb-1">
                      Subject:
                    </label>
                    <input
                      type="text"
                      placeholder="Category..."
                      value={newTaskCategory}
                      onChange={(e) => setNewTaskCategory(e.target.value)}
                      className="w-full px-2.5 py-1.5 text-xs rounded bg-[#1E1914] border border-[#463429] text-[#FAF6EE] focus:outline-none font-serif"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-1">
                  <button
                    type="submit"
                    className="px-4 py-1.5 text-xs font-bold font-carto uppercase tracking-wider rounded bg-[#2B211A] hover:bg-[#342820] text-[#FAF6EE] border border-[#53665C]"
                  >
                    Add to Manifest
                  </button>
                </div>
              </form>
            )}

            {/* Task Items List */}
            <div className="p-4 rounded bg-[#241B15] border border-[#463429] space-y-2.5">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className={`p-3 rounded border flex items-start justify-between gap-3 transition-colors ${
                    task.completed
                      ? 'bg-[#1E1914]/60 border-[#463429] text-[#CDBB96]/40 line-through'
                      : 'bg-[#1E1914] border-[#463429] text-[#CDBB96] hover:border-[#756451]'
                  }`}
                >
                  <div
                    onClick={() => onToggleTask(task.id)}
                    className="flex items-start gap-3 cursor-pointer flex-1"
                  >
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        task.completed
                          ? 'bg-[#53665C] border-[#53665C] text-[#FAF6EE]'
                          : 'border-[#756451] hover:border-[#9A7B45] bg-[#2B211A]'
                      }`}
                    >
                      {task.completed && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <div className="text-xs sm:text-sm font-serif">
                      <span className="leading-snug block">{task.text}</span>
                      <div className="flex items-center gap-2 mt-1 font-carto">
                        <span
                          className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded ${
                            task.priority === 'high'
                              ? 'bg-[#1E1914] text-[#8B5E4A] border border-[#8B5E4A]/50'
                              : task.priority === 'medium'
                              ? 'bg-[#1E1914] text-[#9A7B45] border border-[#9A7B45]/50'
                              : 'bg-[#1E1914] text-[#CDBB96]/60 border border-[#463429]'
                          }`}
                        >
                          {task.priority}
                        </span>
                        <span className="text-[10px] text-[#9A7B45] font-mono">
                          {task.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onDeleteTask(task.id)}
                    className="text-[#CDBB96]/40 hover:text-[#8B5E4A] p-1 rounded"
                    title="Remove task"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded bg-[#241B15] border border-[#463429] text-xs text-[#CDBB96] font-serif">
              <strong className="text-[#9A7B45] block mb-0.5 font-heading">Expedition Note:</strong>
              Checking off tasks and examining primary sources updates your expedition progress manifest in real time.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

