"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDictionary } from "./DictionaryProvider";
import QuizCard from "./QuizCard";
import QuizResult from "./QuizResult";

export default function QuizClient() {
  const dict = useDictionary();
  const q = dict.Quiz;
  const questions = q.questions;

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
          {!isFinished ? (
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
