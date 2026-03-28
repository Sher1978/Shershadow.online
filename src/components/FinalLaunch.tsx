"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalLaunch() {
  return (
    <section className="py-32 bg-[#0A0A0A] relative overflow-hidden border-t border-white/5 selection:bg-neon-scan selection:text-black">
      
      {/* Background Scanning HUD */}
      <div className="absolute inset-0 scanner-grid opacity-[0.05] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-neon-scan/20 blur-sm" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto"
        >
          <div className="mb-8 font-mono text-xs text-neon-scan tracking-[0.5em] uppercase">SYSTEM_STATE: READY_FOR_SCAN</div>
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-10 tracking-[0.05em] uppercase leading-none" style={{ fontFamily: "'Syncopate', sans-serif" }}>
             СИСТЕМА <span className="text-gold">ГОТОВА</span> <br /> К СКАНИРОВАНИЮ.
          </h2>
          <p className="text-xl md:text-3xl text-white/50 font-light mb-16 italic max-w-2xl mx-auto px-4">
             Узнай свой Индекс Теневого Трения и получи пошаговый план по снятию с ручника за 30 дней.
          </p>

          <Link href="/sfitest">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-8 bg-neon-scan text-black font-bold tracking-[0.3em] uppercase transition-all duration-500 shadow-[0_0_50px_rgba(0,240,255,0.3)] hover:shadow-[0_0_80px_rgba(0,240,255,0.5)]"
            >
              ПРОЙТИ SFI-ТЕСТ
            </motion.button>
          </Link>
          
          <div className="mt-12 flex justify-center gap-8 font-mono text-[9px] text-white/20 tracking-[0.3em] uppercase">
             <span>Protocol: ZH-9021</span>
             <span>Access: UNLIMITED</span>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Circles */}
      <div className="absolute -bottom-64 -left-64 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute -top-64 -right-64 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none" />
    </section>
  );
}
