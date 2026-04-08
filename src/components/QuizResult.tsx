"use client";

import { motion } from "framer-motion";
import { useDictionary } from "./DictionaryProvider";
import Link from "next/link";
import Image from "next/image";

interface QuizResultProps {
  answers: string[];
}

export default function QuizResult({ answers }: QuizResultProps) {
  const dict = useDictionary();
  const q = dict.Quiz;
  const results = q.results;

  // Scoring Logic
  const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach(v => {
    counts[v] = (counts[v] || 0) + 1;
  });

  const maxScore = Math.max(...Object.values(counts));
  const winners = Object.keys(counts).filter(k => counts[k] === maxScore);

  let finalVector = winners[0];
  if (winners.length > 1) {
    const tieBreaker = answers[11]; // 12-th question
    if (winners.includes(tieBreaker)) {
        finalVector = tieBreaker;
    } else {
        // Fallback to tie-breaker vector anyway as per user instruction
        finalVector = tieBreaker;
    }
  }

  const result = results[finalVector as keyof typeof results];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-5xl mx-auto py-12 md:py-24 px-4"
    >
      <div className="bg-[#161618]/90 backdrop-blur-2xl border border-white/10 rounded-sm overflow-hidden relative shadow-2xl">
        
        {/* Background Visual Artifact */}
        <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
          <Image 
            src="/engine_schematic.png" 
            alt="SFI Result Visual" 
            fill 
            className="object-cover grayscale"
          />
        </div>

        <div className="relative z-10 p-8 md:p-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-gold font-mono text-xs tracking-[0.4em] uppercase mb-6">
              SFI_DIAGNOSTIC_COMPLETE // CALIBRATION_DONE
            </p>
            
            <div className="mb-12">
              <h2 className="text-white/20 text-[6rem] md:text-[10rem] font-bold leading-none mb-[-2rem] md:mb-[-4rem]">
                {finalVector}
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter" style={{ fontFamily: "'Syncopate', sans-serif" }}>
                {result.title}
              </h3>
            </div>

            <div className="max-w-3xl mx-auto mb-16 px-4 py-12 border border-red-500/30 bg-red-500/5 rounded-sm relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#161618] px-4">
                <p className="text-red-500 font-mono text-xs tracking-widest uppercase">
                  {q.priceHeading}
                </p>
              </div>
              
              <div className="space-y-6">
                 <h4 className="text-gold font-bold text-xl md:text-2xl uppercase tracking-widest opacity-80">
                   «{result.shadowBug}»
                 </h4>
                 <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed italic">
                   {result.price}
                 </p>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center animate-pulse">
                    <span className="text-gold text-xl">!</span>
                  </div>
                  <p className="text-white/60 text-sm text-left font-mono uppercase tracking-tighter leading-tight">
                    CRITICAL_FRICTION_DETECTED // <br/>
                    ESTIMATED_LOSS: SIGNIFICANT
                  </p>
                </div>
                <div className="w-px h-12 bg-white/10 hidden md:block" />
                <div className="text-right">
                  <p className="text-white font-bold text-lg leading-none uppercase">SYSTEM FAILURE RISK</p>
                  <p className="text-red-500 font-mono text-xs uppercase">HIGH_PROBABILITY</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 items-center">
              <Link 
                href={`https://t.me/${q.botUsername}?start=sfi_${finalVector}`} 
                target="_blank"
                className="w-full max-w-md"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-6 bg-gold text-black font-bold uppercase tracking-[0.2em] text-sm hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] relative group overflow-hidden"
                >
                  <span className="relative z-10">{q.botCTA}</span>
                  <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 pointer-events-none" />
                </motion.button>
              </Link>
              
              <Link href={`/${dict.lang}/`} className="text-white/40 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest border-b border-white/10 pb-1">
                RETURN_TO_DASHBOARD
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
