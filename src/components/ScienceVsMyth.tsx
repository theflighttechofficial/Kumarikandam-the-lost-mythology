import { useState } from 'react';
import { Award, Check, CheckCircle2, ChevronRight, Microscope, Sparkles, X, XCircle } from 'lucide-react';
import { COMPARISON_POINTS } from '../data/lemuriaData';

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: 'Why did Philip Sclater initially propose the concept of Lemuria in 1864?',
    options: [
      'To search for an ancient psychic civilization described in occult texts',
      'To explain why lemur fossils and primates were found in Madagascar and India',
      'To prove that Atlantis was located in the Indian Ocean',
      'To discover where diamonds and volcanic zircons originated',
    ],
    correctIndex: 1,
    explanation: 'Correct! Sclater was a zoologist addressing the puzzle of why lemur relatives existed in Madagascar and southern Asia but were absent from mainland Africa.',
  },
  {
    question: 'What physical principle explains why continents cannot simply sink vertically into the ocean floor?',
    options: [
      'Oceanic trenches have no bottom gravitational pull',
      'Continental granitic crust is less dense (more buoyant) than basaltic oceanic crust',
      'Seawater pressure pushes upward with infinite hydraulic force',
      'The rotation of the Earth keeps all landmasses at sea level',
    ],
    correctIndex: 1,
    explanation: 'Correct! Continental crust (density ~2.7 g/cm³) is lighter than oceanic basalt (~3.0 g/cm³) and mantle rock (~3.3 g/cm³), making it physically impossible to sink vertically.',
  },
  {
    question: 'How did the idea of Lemuria transform into an occult myth of lost civilizations?',
    options: [
      'NASA discovered pyramids on the Indian Ocean seafloor in 1965',
      'Alfred Wegener claimed ancient humans sailed from Lemuria',
      'Helena Blavatsky and Theosophists incorporated it as the homeland of "root races" in 1888',
      'Ancient Roman cartographers had already mapped its cities',
    ],
    correctIndex: 2,
    explanation: 'Correct! Helena Blavatsky co-opted the scientific term in The Secret Doctrine, turning a zoological hypothesis into esoteric mythology.',
  },
  {
    question: 'What did Alfred Wegener propose in 1912 that ultimately made land bridges like Lemuria unnecessary?',
    options: [
      'That the Earth is expanding, pushing continents apart',
      'That continents drift across the globe on tectonic plates',
      'That sea levels have always been constant',
      'That fossils cannot be used as evidence of ancient connections',
    ],
    correctIndex: 1,
    explanation: 'Correct! Wegener\'s theory of continental drift showed landmasses like Madagascar and India were once joined and drifted apart, replacing the need for a sunken bridge.',
  },
  {
    question: 'What did the 2013 discovery of "Mauritia" beneath Mauritius actually prove?',
    options: [
      'That Kumari Kandam was a real, continent-spanning empire',
      'That Atlantis was located in the Indian Ocean',
      'That a tiny Precambrian continental fragment exists beneath volcanic rock, unrelated to the mythical lost civilization',
      'That lemurs originated in Mauritius before spreading to Madagascar',
    ],
    correctIndex: 2,
    explanation: 'Correct! Mauritia is a genuine geological microcontinent left over from the India-Madagascar rift ~84 million years ago—real science, but no evidence for a sunken human civilization.',
  },
];

export function ScienceVsMyth() {
  const [activeQuizIndex, setActiveQuizIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const currentQuiz = QUIZ_QUESTIONS[activeQuizIndex];

  const handleOptionClick = (idx: number) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
  };

  const handleAnswerSubmit = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    if (selectedOption === currentQuiz.correctIndex) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (activeQuizIndex + 1 < QUIZ_QUESTIONS.length) {
      setActiveQuizIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setActiveQuizIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setQuizScore(0);
    setQuizFinished(false);
  };

  return (
    <section id="science-vs-myth" className="py-20 bg-[color:var(--section-1E1914)] border-b border-[color:var(--bd-463429)] relative">
      <div className="absolute inset-0 bg-carto-grid opacity-15 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[color:var(--fg-9A7B45)] mb-2">
            <Microscope className="w-4 h-4 text-[color:var(--fg-53665C)]" />
            <span>Comparative Ledger · Empirical Hydrography & Cultural Lore</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[color:var(--fg-E6D7B9)] tracking-wide">
            Science vs. Myth
          </h2>
          <p className="mt-3 text-base text-[color:var(--fg-CDBB96)] font-serif leading-relaxed">
            How a rigorous 19th-century scientific deduction evolved in two completely divergent directions: overturned by modern marine geophysics, yet immortalized in esoteric occult folklore and adventure mythology.
          </p>
        </div>

        {/* Comparison Cards Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Scientific View Column Header */}
          <div className="p-6 rounded bg-[color:var(--bg-241B15)] border border-[color:var(--bd-463429)] relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[color:var(--bd-463429)]">
              <div className="flex items-center gap-3">
                <div>
                  <h3 className="text-xl font-bold text-[color:var(--fg-E6D7B9)] font-heading">
                    Scientific Empirical View
                  </h3>
                  <span className="text-xs text-[color:var(--fg-53665C)] font-mono">
                    Plate Tectonics & Marine Geophysics
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 text-[10px] font-bold bg-[color:var(--bg-1E1914)] text-[color:var(--fg-53665C)] rounded border border-[color:var(--bd-53665C)]/40 uppercase tracking-wider font-carto">
                Geophysical Proof
              </span>
            </div>

            <div className="space-y-5">
              {COMPARISON_POINTS.map((item) => (
                <div
                  key={item.id}
                  className="hover-lift p-4 rounded bg-[color:var(--bg-1E1914)] border border-[color:var(--bd-463429)] space-y-2 hover:border-[color:var(--bd-756451)] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-carto font-bold uppercase text-[color:var(--fg-9A7B45)] tracking-widest">
                      {item.aspect}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-[color:var(--fg-E6D7B9)] font-heading">
                    {item.scientificView.title}
                  </h4>
                  <p className="text-xs text-[color:var(--fg-CDBB96)] leading-relaxed font-serif">
                    {item.scientificView.description}
                  </p>
                  <div className="pt-2 text-[11px] text-[color:var(--fg-53665C)] font-mono bg-[color:var(--bg-241B15)] p-2 rounded border border-[color:var(--bd-463429)]">
                    <strong className="text-[color:var(--fg-E6D7B9)]">Evidence:</strong> {item.scientificView.evidence}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Myth & Legend View Column Header */}
          <div className="p-6 rounded bg-[color:var(--bg-241B15)] border border-[color:var(--bd-463429)] relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[color:var(--bd-463429)]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-[color:var(--bg-1E1914)] text-[color:var(--fg-8B5E4A)] border border-[color:var(--bd-8B5E4A)]/40">
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[color:var(--fg-E6D7B9)] font-heading">
                    Myth & Esoteric Legend
                  </h3>
                  <span className="text-xs text-[color:var(--fg-8B5E4A)] font-mono">
                    Theosophical Folios & Cultural Memory
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 text-[10px] font-bold bg-[color:var(--bg-1E1914)] text-[color:var(--fg-8B5E4A)] rounded border border-[color:var(--bd-8B5E4A)]/40 uppercase tracking-wider font-carto">
                Occult Folklore
              </span>
            </div>

            <div className="space-y-5">
              {COMPARISON_POINTS.map((item) => (
                <div
                  key={item.id}
                  className="hover-lift p-4 rounded bg-[color:var(--bg-1E1914)] border border-[color:var(--bd-463429)] space-y-2 hover:border-[color:var(--bd-756451)] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-carto font-bold uppercase text-[color:var(--fg-8B5E4A)] tracking-widest">
                      {item.aspect}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-[color:var(--fg-E6D7B9)] font-heading">
                    {item.mythologicalView.title}
                  </h4>
                  <p className="text-xs text-[color:var(--fg-CDBB96)] leading-relaxed font-serif">
                    {item.mythologicalView.description}
                  </p>
                  <div className="pt-2 text-[11px] text-[color:var(--fg-8B5E4A)] font-mono bg-[color:var(--bg-241B15)] p-2 rounded border border-[color:var(--bd-463429)]">
                    <strong className="text-[color:var(--fg-E6D7B9)]">Source Basis:</strong> {item.mythologicalView.evidence}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Concept Check: Student Research Knowledge Quiz */}
        <div className="p-6 sm:p-8 rounded bg-[color:var(--bg-241B15)] border border-[color:var(--bd-463429)] relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-[color:var(--bd-463429)]">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[color:var(--fg-9A7B45)] font-carto">
                <Award className="w-4 h-4 text-[color:var(--fg-9A7B45)]" />
                <span>Field Examination</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[color:var(--fg-E6D7B9)] mt-1">
                Test Your Research Understanding
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[color:var(--fg-CDBB96)]/90">
              <span>Question {activeQuizIndex + 1} of {QUIZ_QUESTIONS.length}</span>
              <span className="px-2.5 py-0.5 rounded bg-[color:var(--bg-1E1914)] text-[color:var(--fg-9A7B45)] font-bold border border-[color:var(--bd-463429)]">
                Score: {quizScore}
              </span>
            </div>
          </div>

          {!quizFinished ? (
            <div className="space-y-6">
              <h4 className="text-base sm:text-lg font-medium text-[color:var(--fg-E6D7B9)] font-heading">
                {currentQuiz.question}
              </h4>

              <div className="space-y-2.5">
                {currentQuiz.options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQuiz.correctIndex;

                  let btnStyle = 'bg-[color:var(--bg-1E1914)] border-[color:var(--bd-463429)] text-[color:var(--fg-CDBB96)] hover:border-[color:var(--bd-756451)] hover:text-[color:var(--fg-E6D7B9)]';

                  if (isSubmitted) {
                    if (isCorrect) {
                      btnStyle = 'bg-[color:var(--bg-2B211A)] border-[color:var(--bd-53665C)] text-[color:var(--fg-FAF6EE)] font-medium ring-1 ring-[color:var(--bd-53665C)]';
                    } else if (isSelected) {
                      btnStyle = 'bg-[color:var(--bg-2B211A)] border-[color:var(--bd-8B5E4A)] text-[color:var(--fg-FAF6EE)] ring-1 ring-[color:var(--bd-8B5E4A)]';
                    } else {
                      btnStyle = 'bg-[color:var(--bg-1E1914)]/50 border-[color:var(--bd-463429)] text-[color:var(--fg-CDBB96)]/85 opacity-50';
                    }
                  } else if (isSelected) {
                    btnStyle = 'bg-[color:var(--bg-2B211A)] border-[color:var(--bd-9A7B45)] text-[color:var(--fg-FAF6EE)] font-medium ring-1 ring-[color:var(--bd-9A7B45)]';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(idx)}
                      disabled={isSubmitted}
                      id={`quiz-option-${idx}`}
                      className={`w-full text-left p-3.5 sm:p-4 rounded border text-xs sm:text-sm flex items-center justify-between transition-all font-serif ${btnStyle}`}
                    >
                      <span className="pr-4">{option}</span>
                      {isSubmitted && isCorrect && (
                        <Check className="w-5 h-5 text-[color:var(--fg-53665C)] shrink-0" />
                      )}
                      {isSubmitted && isSelected && !isCorrect && (
                        <X className="w-5 h-5 text-[color:var(--fg-8B5E4A)] shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback and next button */}
              {isSubmitted && (
                <div className="p-4 rounded bg-[color:var(--bg-1E1914)] border border-[color:var(--bd-463429)] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider font-carto">
                    {selectedOption === currentQuiz.correctIndex ? (
                      <span className="text-[color:var(--fg-53665C)] flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" /> Verified Assessment
                      </span>
                    ) : (
                      <span className="text-[color:var(--fg-8B5E4A)] flex items-center gap-1.5">
                        <XCircle className="w-4 h-4" /> Divergent Finding
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[color:var(--fg-CDBB96)] font-serif leading-relaxed">
                    {currentQuiz.explanation}
                  </p>
                </div>
              )}

              <div className="flex items-center justify-end gap-3 pt-2">
                {!isSubmitted ? (
                  <button
                    onClick={handleAnswerSubmit}
                    disabled={selectedOption === null}
                    id="submit-quiz-answer-btn"
                    className="px-6 py-2.5 rounded bg-[color:var(--bg-2B211A)] hover:bg-[color:var(--bg-342820)] disabled:opacity-40 disabled:cursor-not-allowed text-[color:var(--fg-FAF6EE)] font-bold text-xs font-carto uppercase tracking-wider transition-all border border-[color:var(--bd-9A7B45)]"
                  >
                    Confirm Response
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    id="next-quiz-question-btn"
                    className="px-6 py-2.5 rounded bg-[color:var(--bg-2B211A)] hover:bg-[color:var(--bg-342820)] text-[color:var(--fg-FAF6EE)] font-bold text-xs font-carto uppercase tracking-wider transition-all flex items-center gap-1.5 border border-[color:var(--bd-9A7B45)]"
                  >
                    <span>{activeQuizIndex + 1 < QUIZ_QUESTIONS.length ? 'Next Investigation' : 'View Fellow Dossier'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <h4 className="text-xl font-bold font-heading text-[color:var(--fg-E6D7B9)]">
                Knowledge Check Completed!
              </h4>
              <p className="text-[color:var(--fg-CDBB96)] text-sm max-w-md mx-auto font-serif leading-relaxed">
                You scored <strong className="text-[color:var(--fg-FAF6EE)]">{quizScore} out of {QUIZ_QUESTIONS.length}</strong>. You understand both the original biological dilemma and the geophysical reason why plate tectonics permanently disproved the sunken continent.
              </p>
              <button
                onClick={resetQuiz}
                id="reset-quiz-btn"
                className="px-5 py-2.5 rounded bg-[color:var(--bg-1E1914)] hover:bg-[color:var(--bg-2B211A)] text-[color:var(--fg-FAF6EE)] text-xs font-bold font-carto uppercase tracking-wider border border-[color:var(--bd-463429)] transition-colors"
              >
                Repeat Examination
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

