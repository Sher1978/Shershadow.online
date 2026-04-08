"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useDictionary } from "./DictionaryProvider";
import QuizCard from "./QuizCard";
import QuizResult from "./QuizResult";
import { ChevronRight, ArrowLeft, Target, Cpu, Zap } from "lucide-react";

export default function QuizClient() {
  const dict = useDictionary();
  const router = useRouter();
  const q = dict.Quiz;
  const questions = q.questions;

  const [showIntro, setShowIntro] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleSelect = (vector: string) => {
    const newAnswers = [...answers, vector];
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div className="min-h-screen bg-carbon overflow-hidden relative py-12 md:py-24">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-carbon pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-12 text-center md:text-left">
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="text-gold font-mono text-xs tracking-[0.4em] mb-2 uppercase"
          >
            {q.title}
          </motion.p>
          <h1 className="text-3xl md:text-6xl font-bold text-white uppercase tracking-tighter" style={{ fontFamily: "'Syncopate', sans-serif" }}>
            {q.subtitle}
          </h1>
        </div>

        <AnimatePresence mode="wait">
          {showIntro ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 relative overflow-hidden group">
                {/* Decorative element */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold/10 blur-[100px] rounded-full group-hover:bg-gold/20 transition-colors duration-700" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gold/10 rounded-lg border border-gold/20">
                      <Cpu className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-gold font-mono text-sm tracking-widest uppercase">
                      SYSTEM_INIT // READY
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter italic" style={{ fontFamily: "'Syncopate', sans-serif" }}>
                    {q.intro.title}
                  </h2>

                  <p className="text-xl text-white/60 leading-relaxed mb-10">
                    {q.intro.description.split("($SFI$)").map((part: string, i: number) => (
                      <span key={i}>
                        {part}
                        {i === 0 && q.intro.description.includes("($SFI$)") && (
                          <span className="text-gold font-bold">SFI Index</span>
                        )}
                      </span>
                    ))}
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {q.intro.highlights.map((text: string, i: number) => (
                      <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-4 flex items-start gap-3">
                        {i === 0 && <Target className="w-5 h-5 text-gold/60 mt-1" />}
                        {i === 1 && <Cpu className="w-5 h-5 text-gold/60 mt-1" />}
                        {i === 2 && <Zap className="w-5 h-5 text-gold/60 mt-1" />}
                        <span className="text-sm text-white/80 font-medium leading-snug">{text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col md:flex-row gap-4">
                    <button
                      onClick={() => setShowIntro(false)}
                      className="flex-1 bg-white text-carbon font-bold py-5 px-8 rounded-2xl flex items-center justify-center gap-3 hover:bg-gold transition-all duration-300 group/btn active:scale-[0.98]"
                    >
                      <span className="uppercase tracking-wider">{q.intro.startCTA}</span>
                      <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    
                    <button
                      onClick={() => router.push(`/${dict.lang}`)}
                      className="px-8 py-5 rounded-2xl border border-white/10 text-white/60 font-medium flex items-center justify-center gap-3 hover:bg-white/5 hover:text-white transition-all duration-300"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      <span>{q.intro.backCTA}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Security Footer */}
              <div className="mt-8 flex items-center justify-center gap-6 text-[10px] text-white/20 font-mono tracking-widest uppercase">
                <span className="flex items-center gap-1.5"><div className="w-1 h-1 bg-gold rounded-full" /> SECURE_PROTOCOL_V4</span>
                <span className="flex items-center gap-1.5"><div className="w-1 h-1 bg-gold rounded-full" /> END_TO_END_ENCRYPTION</span>
                <span className="hidden md:flex items-center gap-1.5"><div className="w-1 h-1 bg-gold rounded-full" /> ANALYZING_NEURAL_TRAJECTORY</span>
              </div>
            </motion.div>
          ) : !isFinished ? (
            <QuizCard
              key={currentIndex}
              question={questions[currentIndex]}
              currentStep={currentIndex + 1}
              totalSteps={questions.length}
              onSelect={handleSelect}
            />
          ) : (
            <QuizResult answers={answers} />
          )}
        </AnimatePresence>
      </div>

      {/* Decorative Lines */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5 ml-8 hidden xl:block" />
      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/5 mr-8 hidden xl:block" />
    </div>
  );
}
