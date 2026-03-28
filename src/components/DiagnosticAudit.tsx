"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const zoneAContent = {
  header: "ZONE A: ENGINE ARCHITECTURE",
  sub: "ПРИРОДА ВНУТРЕННЕЙ БУКСОВКИ",
  text: "Внешние инструменты (MBA, найм, маркетинг) — это «обвес». Если двигатель (твоя психика) работает с Налогом на Трение, скорость не вырастет. Ты не сломан. Тебе просто нужно обновление «прошивки» двигателя до версии Launch Control.",
};

const entities = [
  { 
    title: "Хранитель (Guardian)", 
    desc: "Внутренний механизм защиты, который саботирует твой рост под видом «здравого смысла». Он блокирует масштаб, чтобы сохранить твою безопасность.",
    label: "SABOTAGE_PROTOCOL" 
  },
  { 
    title: "Золотая Тень", 
    desc: "Твой заблокированный ресурс силы. Там спрятана твоя агрессия, масштаб и истинный драйв, которые ты подавил в угоду социуму.",
    label: "POWER_RESERVE" 
  },
];

export default function DiagnosticAudit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative bg-[#0A0A0A] w-full h-[300vh] z-10 selection:bg-gold selection:text-black">
      
      {/* HUD Progress Bar */}
      <div className="fixed left-0 top-0 w-full h-[1px] bg-white/5 md:left-12 md:top-1/2 md:-translate-y-1/2 md:w-[1px] md:h-64 z-[100] pointer-events-none">
        <motion.div 
          className="h-full bg-gold shadow-[0_0_10px_#D4AF37] md:hidden" 
          style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }} 
        />
        <motion.div 
          className="hidden md:block w-full bg-gold shadow-[0_0_10px_#D4AF37]" 
          style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }} 
        />
      </div>

      {/* STACK OF CARDS */}
      
      {/* CARD 1: THE ENGINE LOGIC */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-10 border-b border-white/5 bg-[#0A0A0A]">
        <div className="absolute inset-0 scanner-grid opacity-[0.05] pointer-events-none" />
        
        <motion.div 
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 1, 0]),
            scale: useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 1, 0.9]),
          }}
          className="container mx-auto px-6 relative flex flex-col justify-center items-center text-center"
        >
          <span className="absolute text-[15rem] md:text-[25rem] font-bold text-white/[0.02] select-none pointer-events-none" 
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.05)' }}>A/D</span>
          
          <div className="mb-4 flex items-center gap-4">
             <div className="h-px w-12 bg-gold/50" />
             <span className="font-mono text-xs text-gold tracking-[0.4em] uppercase">{zoneAContent.header}</span>
             <div className="h-px w-12 bg-gold/50" />
          </div>

          <h2 className="text-4xl md:text-7xl font-bold text-white mb-10 max-w-5xl uppercase tracking-tighter" style={{ fontFamily: "'Syncopate', sans-serif" }}>
            {zoneAContent.sub}
          </h2>
          <p className="text-xl md:text-3xl text-white/60 font-light max-w-3xl leading-relaxed italic">
            {zoneAContent.text}
          </p>
        </motion.div>
      </div>

      {/* CARD 2: THE ENTITIES (Guardian & Gold Shadow) */}
      <motion.div 
        style={{ 
          y: useTransform(scrollYProgress, [0, 0.4, 0.5], ["100vh", "100vh", "0vh"]),
          opacity: useTransform(scrollYProgress, [0.4, 0.5, 0.8, 0.9], [0, 1, 1, 0]),
          scale: useTransform(scrollYProgress, [0.8, 0.9], [1, 0.9]),
        }}
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-20 border-b border-white/5 bg-[#0E0E0E] shadow-[0_-20px_60px_rgba(0,0,0,0.8)]"
      >
        <div className="absolute inset-0 scanner-grid opacity-[0.05] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative flex flex-col justify-center items-center">
          <div className="w-full max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 uppercase tracking-tighter text-center" style={{ fontFamily: "'Syncopate', sans-serif" }}>
              КЛЮЧЕВЫЕ СУЩНОСТИ <span className="text-gold">СИСТЕМЫ:</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {entities.map((ent, idx) => (
                <div key={idx} className="group p-10 bg-black/40 border border-white/5 hover:border-gold/30 transition-all duration-500 relative">
                  <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-gold/40 uppercase group-hover:text-gold transition-colors italic">
                    {ent.label}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">{ent.title}</h3>
                  <p className="text-white/50 text-lg font-light leading-relaxed">{ent.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* CARD 3: THE CALL TO UPGRADE */}
      <motion.div 
        style={{ 
          y: useTransform(scrollYProgress, [0, 0.8, 0.9], ["100vh", "100vh", "0vh"]),
          opacity: useTransform(scrollYProgress, [0.8, 0.9], [0, 1]),
        }}
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-30 bg-[#0A0A0A] shadow-[0_-20px_60px_rgba(0,0,0,0.8)]"
      >
        <div className="absolute inset-0 scanner-grid opacity-[0.05] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative flex flex-col justify-center items-center text-center">
          <div className="w-full max-w-4xl">
            <p className="font-mono text-neon-scan text-sm tracking-[0.5em] mb-8 uppercase">SYSTEM_STATE: READY_FOR_UPGRADE</p>
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-12 uppercase tracking-tighter leading-none" style={{ fontFamily: "'Syncopate', sans-serif" }}>
              ТЫ НЕ СЛОМАН. <br />
              МЫ ОБНОВИМ ТВОЮ <br />
              <span className="text-gold italic">«ПРОШИВКУ»</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/50 font-light mb-16 max-w-2xl mx-auto italic leading-relaxed">
              Переход на уровень <span className="text-white font-bold">Launch Control</span> — это не магия, а снятие системных ограничений.
            </p>

            <Link href="/sfitest">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-16 py-8 bg-gold text-black font-bold tracking-[0.3em] uppercase overflow-hidden transition-all duration-500 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              >
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10">ОБНУЛИТЬ ТРЕНИЕ</span>
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
      
    </section>
  );
}
