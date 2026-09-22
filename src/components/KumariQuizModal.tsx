import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, CheckCircle2, XCircle, RotateCcw, Sparkles, HelpCircle, Trophy, BookOpen } from 'lucide-react';
import { KUMARI_QUIZ_QUESTIONS } from '../data/lemuriaData';

interface KumariQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function KumariQuizModal({ isOpen, onClose }: KumariQuizModalProps) {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  const currentQ = KUMARI_QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    setIsAnswerSubmitted(true);
    if (selectedAnswer === currentQ.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    if (currentIdx + 1 < KUMARI_QUIZ_QUESTIONS.length) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizCompleted(false);
  };

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

        {/* Modal Body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#181410] border border-[#7A6038] rounded-xl shadow-2xl overflow-hidden text-[#E4D5BE] z-10 my-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#463429] bg-[#1E1914]">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-[#9A7B45]/20 border border-[#9A7B45]/40 rounded-lg text-[#D4AF37]">
                <Trophy className="w-6 h-6 animate-bounce" />
              </div>
              <div>
                <h2 className="text-xl font-serif font-bold text-[#E6C687] flex items-center gap-2">
                  Kumari Kandam & Lemuria Knowledge Quiz
                </h2>
                <p className="text-xs text-[#A89F91]">
                  Test your mastery of classical Sangam literature, geology, and plate tectonics
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

          {!quizCompleted ? (
            <div className="p-6">
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs text-[#A89F91] mb-2 font-mono">
                  <span>Question {currentIdx + 1} of {KUMARI_QUIZ_QUESTIONS.length}</span>
                  <span className="text-[#D4AF37] font-semibold">{currentQ.category}</span>
                </div>
                <div className="w-full bg-[#2A221A] h-2 rounded-full overflow-hidden border border-[#3E3025]">
                  <motion.div
                    className="bg-gradient-to-r from-[#8A6E3B] to-[#D4AF37] h-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIdx + 1) / KUMARI_QUIZ_QUESTIONS.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Question */}
              <h3 className="text-lg font-serif font-bold text-[#F3E5AB] mb-6 leading-relaxed">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQ.options.map((option, idx) => {
                  let optionClass = 'bg-[#1E1914] border-[#3E3025] hover:border-[#8A6E3B] text-[#E4D5BE]';

                  if (selectedAnswer === idx) {
                    optionClass = 'bg-[#2A2016] border-[#D4AF37] text-[#F3E5AB] font-medium';
                  }

                  if (isAnswerSubmitted) {
                    if (idx === currentQ.correctAnswer) {
                      optionClass = 'bg-[#153422] border-[#22C55E] text-[#4ADE80] font-semibold';
                    } else if (selectedAnswer === idx && idx !== currentQ.correctAnswer) {
                      optionClass = 'bg-[#3C1A1A] border-[#EF4444] text-[#F87171]';
                    }
                  }

                  return (
                    <motion.button
                      key={idx}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswerSubmitted}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${optionClass}`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full border border-current/30 flex items-center justify-center text-xs font-mono">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-sm">{option}</span>
                      </span>

                      {isAnswerSubmitted && idx === currentQ.correctAnswer && (
                        <CheckCircle2 className="w-5 h-5 text-[#4ADE80]" />
                      )}
                      {isAnswerSubmitted && selectedAnswer === idx && idx !== currentQ.correctAnswer && (
                        <XCircle className="w-5 h-5 text-[#F87171]" />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Explanation Panel */}
              <AnimatePresence>
                {isAnswerSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 bg-[#14100D] border border-[#463429] rounded-xl mb-6"
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] mb-1">
                      <Sparkles className="w-4 h-4" /> Explanation & Lore Context
                    </div>
                    <p className="text-xs text-[#C8BBAA] leading-relaxed">{currentQ.explanation}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3">
                {!isAnswerSubmitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                    className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-colors ${
                      selectedAnswer !== null
                        ? 'bg-[#9A7B45] hover:bg-[#B59253] text-[#14100D]'
                        : 'bg-[#2A231D] text-[#6E6155] cursor-not-allowed'
                    }`}
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2.5 bg-[#9A7B45] hover:bg-[#B59253] text-[#14100D] rounded-lg text-sm font-bold transition-colors"
                  >
                    {currentIdx + 1 < KUMARI_QUIZ_QUESTIONS.length ? 'Next Question →' : 'See Results'}
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="p-8 text-center space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-20 h-20 mx-auto rounded-full bg-[#9A7B45]/20 border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37]"
              >
                <Award className="w-10 h-10 animate-pulse" />
              </motion.div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-[#E6C687] mb-1">Quiz Complete!</h3>
                <p className="text-sm text-[#A89F91]">
                  You scored <span className="text-[#D4AF37] font-bold text-lg">{score}</span> out of{' '}
                  <span className="font-bold">{KUMARI_QUIZ_QUESTIONS.length}</span>
                </p>
              </div>

              {/* Achievement Badge */}
              <div className="bg-[#14100D] border border-[#3E3025] p-5 rounded-xl max-w-md mx-auto">
                <span className="text-xs uppercase font-mono text-[#D4AF37] tracking-wider block mb-1">
                  Earned Title
                </span>
                <p className="text-base font-serif font-bold text-[#F3E5AB]">
                  {score >= 9
                    ? 'Sangam Scholar & Master Cartographer 📜'
                    : score >= 6
                    ? 'Kumari Kandam Researcher 🗺️'
                    : 'Curious Lost Land Explorer ⛵'}
                </p>
                <p className="text-xs text-[#A89F91] mt-2">
                  {score >= 9
                    ? 'Outstanding! You have an exceptionally deep understanding of classical Tamil Sangam literature, ancient coastal deluge lore, and plate tectonics.'
                    : 'Great effort! Review the literary sources and science sections to unlock the Master title.'}
                </p>
              </div>

              <div className="flex justify-center gap-4 pt-4">
                <button
                  onClick={handleRestartQuiz}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#2A221A] hover:bg-[#382D22] border border-[#7A6038] text-[#E4D5BE] rounded-lg text-sm font-semibold transition-colors"
                >
                  <RotateCcw className="w-4 h-4" /> Retry Quiz
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#9A7B45] hover:bg-[#B59253] text-[#14100D] rounded-lg text-sm font-bold transition-colors"
                >
                  Done Exploring
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
