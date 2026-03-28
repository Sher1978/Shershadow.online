"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const hooks = [
  { id: "Sovereign", text: "...ты боишься нанять тех, кто сильнее тебя?" },
  { id: "Expansion", text: "...твой масштаб пугает твоего внутреннего «скромного мальчика»?" },
  { id: "Vitality", text: "...логика убила твой инстинкт хищника и драйв?" },
  { id: "Architect", text: "...ты строишь идеальные планы в мире тотального хаоса?" },
  { id: "Mismatch", text: "...твои РЕЗУЛЬТАТЫ не соответствуют твоим знаниям и умениям?" },
];

export default function Hero() {
  const [currentHook, setCurrentHook] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHook((prev) => (prev + 1) % hooks.length);
    }, 2500); // 2.5s interval
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col md:grid md:grid-cols-2 bg-[#0A0A0A] selection:bg-neon-scan selection:text-black">
      
      {/* Background Scanning Visuals */}
      <div className="absolute inset-0 scanner-grid opacity-10 pointer-events-none z-1" />
      <div className="absolute inset-0 noise-overlay z-2" />
      <motion.div 
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-link-gold to-transparent opacity-30 z-3" 
      />

      {/* Left Column (System Diagnosis) */}
      <div className="order-2 md:order-1 min-h-[60vh] md:h-full flex flex-col justify-between p-8 md:p-24 relative z-20">
        
        {/* System ID Tag */}
        <div className="flex gap-4 items-center mb-12">
          <div className="w-2 h-2 bg-neon-scan animate-pulse" />
          <span className="font-mono text-[10px] text-neon-scan tracking-[0.4em] uppercase">SYSTEM_INIT // DETECTION_MODE_ACTIVE</span>
        </div>

        {/* H1 (Static) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "circOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-[0.9]" style={{ fontFamily: "'Syncopate', sans-serif" }}>
            Твой бизнес <br /> 
            <span className="text-white/20">буксует,</span> <br />
            потому что <br />
            <span className="text-neon-scan">...</span>
          </h1>
        </motion.div>

        {/* Dynamic Hooks Loader */}
        <div className="relative h-40 flex items-center my-8 md:my-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHook}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: "circInOut" }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight max-w-2xl italic tracking-tight underline decoration-neon-scan/30 underline-offset-8">
                {hooks[currentHook].text}
              </p>
              <div className="mt-4 font-mono text-[10px] text-neon-scan/50 uppercase tracking-[0.2em]">
                PHASE_TAG: {hooks[currentHook].id} // [DETECTED]
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sub-headline + CTA */}
        <div className="max-w-xl space-y-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
              Пока ты ищешь внешние инструменты развития, твоя Тень <span className="text-white font-bold">($Shadow$)</span> незаметно сжигает до 50% твоей прибыли. Мы не учим тебя бизнесу. Мы убираем внутреннее трение <span className="text-neon-scan font-bold">($SFI$)</span>, которое мешает тебе взлететь.
            </p>
          </motion.div>

          <Link href="https://shershadow.web.app/sfitest">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center gap-6 px-12 py-6 bg-transparent border border-neon-scan/40 hover:border-gold transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-scan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center">
                 <div className="w-1.5 h-1.5 bg-neon-scan group-hover:bg-gold transition-colors" />
              </div>
              <span className="relative z-10 text-white font-bold tracking-[0.25em] uppercase text-sm">ЗАПУСТИТЬ СКАНИРОВАНИЕ SFI</span>
              <svg className="w-6 h-6 text-neon-scan group-hover:text-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Right Column (Blueprint Image) */}
      <div className="order-1 md:order-2 h-[40vh] md:h-full relative overflow-hidden bg-black/40 border-l border-white/5">
        <motion.div
          animate={{ scale: [1, 1.05] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="w-full h-full relative"
        >
          <Image
            src="/hero_car_cinematic.png"
            alt="Anomaly Logic Visualization"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Smoke/Steam Effect Overlays */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100 }}
                animate={{ 
                  opacity: [0, 0.2, 0], 
                  y: [0, -200], 
                  x: [0, (i % 2 ? 50 : -50)],
                  scale: [1, 2.5] 
                }}
                transition={{ 
                  duration: 7 + Math.random() * 5, 
                  repeat: Infinity, 
                  delay: i * 2,
                  ease: "easeOut" 
                }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/5 blur-[100px] rounded-full"
              />
            ))}
          </div>
        </motion.div>
        
        {/* HUD Elements */}
        <div className="absolute bottom-12 right-12 z-20 pointer-events-none hidden md:block">
           <div className="p-6 border border-white/10 bg-black/60 backdrop-blur-md">
              <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                 <div className="space-y-1">
                    <p className="font-mono text-[8px] text-white/40 uppercase">Target_Status</p>
                    <p className="font-heading text-xs text-neon-scan uppercase">In_Stall</p>
                 </div>
                 <div className="space-y-1">
                    <p className="font-mono text-[8px] text-white/40 uppercase">Shadow_Tax</p>
                    <p className="font-heading text-xs text-white uppercase font-bold">82.3%</p>
                 </div>
                 <div className="space-y-1">
                    <p className="font-mono text-[8px] text-white/40 uppercase">System_Load</p>
                    <p className="font-heading text-xs text-white uppercase">Critical</p>
                 </div>
                 <div className="space-y-1">
                    <p className="font-mono text-[8px] text-white/40 uppercase">Efficiency</p>
                    <div className="w-16 h-1 bg-white/10 mt-1 overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }} 
                         animate={{ width: "15%" }} 
                         transition={{ delay: 1, duration: 2 }}
                         className="h-full bg-neon-scan" 
                       />
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent z-10 hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent md:hidden z-10" />
      </div>

    </section>
  );
}
