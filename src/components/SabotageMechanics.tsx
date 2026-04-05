"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useDictionary } from "./DictionaryProvider";

export default function SabotageMechanics() {
  const dict = useDictionary();
  const d = dict.Sabotage;

  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A] relative overflow-hidden border-t border-white/5">
      {/* Background HUD Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center gap-4 items-center mb-6">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="font-mono text-[10px] text-gold tracking-[0.4em] uppercase">{d.systemConflict}</span>
              <div className="w-8 h-[1px] bg-gold" />
            </div>
            
            <h2 
              className="text-4xl md:text-7xl font-bold text-white mb-8 uppercase tracking-tighter leading-tight font-heading"
              dangerouslySetInnerHTML={{ __html: d.title }}
            />
            
            <p className="text-xl text-white/40 font-light max-w-2xl mx-auto font-body italic">
              {d.subTitle}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          {/* Left: Set-point Concept */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold/40" />
               <h3 className="font-heading text-2xl text-white uppercase mb-6 flex items-center gap-3">
                 <span className="text-gold font-mono text-sm">[01]</span> {d.setPointTitle}
               </h3>
               <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed font-body">
                 <p dangerouslySetInnerHTML={{ __html: d.setPointDesc1 }} />
                 <p className="p-4 bg-white/5 border-l-2 border-gold text-base italic">
                    {d.setPointQuote}
                 </p>
               </div>
            </div>

            <div className="p-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold/40" />
               <h3 className="font-heading text-2xl text-white uppercase mb-6 flex items-center gap-3">
                 <span className="text-gold font-mono text-sm">[02]</span> {d.willpowerTitle}
               </h3>
               <p className="text-lg text-white/60 font-light leading-relaxed font-body">
                  {d.willpowerDesc}
               </p>
            </div>
          </motion.div>

          {/* Right: The Graph Visual */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gold/5 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8 bg-black border border-white/10 aspect-square flex flex-col justify-between"
            >
               {/* Label Overlay */}
               <div className="flex justify-between font-mono text-[9px] text-white/20 uppercase tracking-widest pb-4 border-b border-white/5">
                 <span>{d.telemetry}</span>
                 <span>{d.refStability}</span>
               </div>

               {/* The SVG Chart */}
               <div className="flex-1 relative mt-8">
                  <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible">
                    {/* Baseline (Set-point) */}
                    <line x1="0" y1="200" x2="400" y2="200" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
                    <text x="350" y="215" className="fill-white/30 font-mono text-[8px] uppercase tracking-widest">{d.floorLevel}</text>

                    {/* The Growth/Crash Curve */}
                    <motion.path
                      d="M 0,200 L 80,200 L 160,50 L 220,50 L 300,280 L 400,200"
                      fill="none"
                      stroke="#D4AF37"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 3, ease: "easeInOut" }}
                    />

                    {/* Points of Interest */}
                    <motion.circle cx="160" cy="50" r="4" fill="#D4AF37" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.5 }} />
                    <text x="170" y="45" className="fill-white font-mono text-[10px] uppercase font-bold">{d.peakLoad}</text>

                    <motion.circle cx="300" cy="280" r="4" fill="#FF4444" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2.2 }} />
                    <text x="250" y="295" className="fill-red-500 font-mono text-[10px] uppercase font-bold">{d.crashRollback}</text>

                    <circle cx="400" cy="200" r="4" fill="#00F0FF" />
                    <text x="320" y="190" className="fill-neon-scan font-mono text-[10px] uppercase">{d.normalState}</text>
                  </svg>
               </div>

               {/* Bottom Axis */}
               <div className="flex justify-between py-4 border-t border-white/5 font-mono text-[8px] text-white/20 uppercase">
                  <span>{d.cycleStart}</span>
                  <span>{d.willpowerPush}</span>
                  <span>{d.entropyPoint}</span>
               </div>

               {/* Indicator Tags */}
               <div className="absolute top-12 left-12 p-3 bg-black/80 border border-white/5 backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-gold animate-pulse" />
                    <span className="font-mono text-[9px] text-gold uppercase tracking-widest">{d.guardianArmed}</span>
                  </div>
                  <p className="font-mono text-[8px] text-white/40">{d.anomalyDetected}</p>
               </div>
            </motion.div>
          </div>
        </div>

        {/* The Mechanics Step-by-Step */}
        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
             {d.steps.map((step: any, idx: number) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: idx * 0.1 }}
                 viewport={{ once: true }}
                 className="group p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all relative"
               >
                 <div className="mb-4 font-mono text-[8px] text-white/20 uppercase tracking-widest flex justify-between">
                    <span>Step_0{idx + 1}</span>
                    <span className="text-gold group-hover:animate-pulse">{step.status}</span>
                 </div>
                 <h4 className="font-heading text-lg text-white mb-4 uppercase tracking-tight group-hover:text-gold transition-colors">{step.title}</h4>
                 <p className="text-sm text-white/40 font-light leading-relaxed font-body group-hover:text-white/60 transition-colors">
                    {step.desc}
                 </p>
               </motion.div>
             ))}
          </div>
        </div>

        {/* The Solution */}
        <div className="max-w-4xl mx-auto p-8 md:p-16 bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 relative overflow-hidden text-center backdrop-blur-sm">
           <div className="absolute top-0 left-0 w-2 h-full bg-gold/40" />
           <p className="font-mono text-[10px] text-gold uppercase tracking-[0.4em] mb-8">{d.solutionLabel}</p>
           
           <h3 
              className="text-3xl md:text-5xl font-bold text-white uppercase mb-8 font-heading"
              dangerouslySetInnerHTML={{ __html: d.solutionTitle }}
           />

           <ul className="space-y-4 text-lg text-white/60 mb-12 max-w-xl mx-auto list-none font-body text-left md:text-center">
             {d.solutionItems.map((item: string, idx: number) => (
               <li key={idx} className="flex items-start md:items-center justify-start md:justify-center gap-3">
                 <span className="w-1.5 h-1.5 bg-gold rotate-45 shrink-0 mt-1.5 md:mt-0" />
                 <span dangerouslySetInnerHTML={{ __html: item }} />
               </li>
             ))}
           </ul>

           <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gold text-black font-bold uppercase tracking-[0.3em] text-xs hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.2)]"
           >
              {d.solutionCTA}
           </motion.button>
        </div>
      </div>
    </section>
  );
}
