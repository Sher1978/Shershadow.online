"use client";

import { motion } from "framer-motion";
import { useDictionary } from "./DictionaryProvider";

interface QuizCardProps {
  question: {
    id: number;
    text: string;
    options: Array<{
      text: string;
      vector: string;
    }>;
  };
  onSelect: (vector: string) => void;
  currentStep: number;
  totalSteps: number;
}

export default function QuizCard({ question, onSelect, currentStep, totalSteps }: QuizCardProps) {
  const dict = useDictionary();
  const q = dict.Quiz;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="bg-[#161618]/80 backdrop-blur-xl border border-white/10 p-6 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
        
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
          <span className="text-[10rem] font-bold italic leading-none">
            {question.id.toString().padStart(2, '0')}
          </span>
        </div>

        {/* Telemetry Header */}
        <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
             <p className="font-mono text-[10px] text-gold tracking-[0.3em] uppercase">
               {q.progressLabel} // STEP_{currentStep}_{totalSteps}
             </p>
          </div>
          <div className="text-white/30 font-mono text-[10px] tracking-widest">
            SFI_SCAN_IN_PROGRESS...
          </div>
        </div>

        {/* Question Text */}
        <div className="mb-12 relative z-10">
          <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tight leading-tight">
            {question.text}
          </h3>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 gap-4 relative z-10">
          {question.options.map((option, idx) => (
            <motion.button
              key={idx}
              whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(option.vector)}
              className="group text-left border border-white/10 p-5 md:p-6 rounded-sm transition-all hover:border-gold/50 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-6">
                <span className="font-mono text-gold text-sm opacity-40 group-hover:opacity-100 transition-opacity">
                  0{idx + 1}
                </span>
                <span className="text-white/80 text-sm md:text-lg font-light leading-relaxed group-hover:text-white transition-colors">
                  {option.text}
                </span>
              </div>
              <div className="w-5 h-5 border border-white/20 rounded-full flex-shrink-0 flex items-center justify-center group-hover:border-gold transition-colors">
                <div className="w-2 h-2 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-12 h-1 bg-white/5 w-full relative overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
            className="absolute top-0 left-0 h-full bg-gold"
          />
        </div>
      </div>
    </motion.div>
  );
}
