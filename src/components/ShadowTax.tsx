"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ShadowTax() {
  return (
    <section className="py-12 md:py-32 bg-[#111113] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
          >
            <div className="flex gap-4 items-center mb-6">
               <div className="w-8 h-[1px] bg-neon-scan" />
               <span className="font-mono text-[10px] text-neon-scan tracking-[0.4em] uppercase">ZONE_C // ATTENTION_REQUIRED</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 text-white uppercase italic tracking-tighter leading-[0.9]">
              THE GOLDEN <br />
              <span className="text-neon-scan">SHADOW</span>
            </h2>
            
            <div className="space-y-6 font-body text-white/60 text-lg md:text-xl leading-relaxed max-w-xl">
              <p>
                Проблема не в маркетинге или команде. Ты платишь невидимый налог на успех — <span className="text-white font-bold">Shadow Friction (Теневое Трение)</span>.
              </p>
              <p>
                Каждое твое действие проходит через внутренний фильтр саботажа. Ты тратишь 80% энергии на борьбу с собой, и только 20% — на реальный рост.
              </p>
            </div>
          </motion.div>

          {/* Cinematic Visualization Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.3 }}
            className="relative aspect-video lg:aspect-square bg-black border border-white/10 overflow-hidden group shadow-2xl"
          >
             <Image 
                src="/golden_shadow.png"
                alt="The Golden Shadow - Dynamic Speed"
                fill
                className="object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
             />

             {/* Diagnostic Overlay */}
             <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 bg-gradient-to-t from-black via-transparent to-transparent">
                {/* Abstract Graph Visualization */}
                <div className="flex items-end gap-1.5 h-32 md:h-48 mb-8 relative z-10">
                    {[...Array(24)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${Math.random() * 80 + 20}%` }}
                        transition={{ delay: i * 0.03, duration: 1, ease: "circOut" }}
                        viewport={{ once: true }}
                        className={`flex-1 transition-all duration-500 shadow-[0_0_10px_rgba(255,255,255,0.1)] ${i > 18 ? 'bg-neon-scan' : 'bg-white/10'}`}
                      />
                    ))}
                </div>
                
                <div className="flex justify-between font-mono text-[9px] md:text-[10px] text-white/40 uppercase tracking-[0.3em] relative z-10 border-t border-white/10 pt-4">
                  <span>Input_Energy</span>
                  <span className="text-white/20">Friction_Loss (82.4%)</span>
                  <span className="text-neon-scan font-bold">Result_Field</span>
                </div>

                {/* HUD Elements */}
                <div className="absolute top-8 left-8 font-mono text-[10px] text-neon-scan/40 space-y-1">
                  <p className="animate-pulse">_SCANNING_PSYCHE_ANOMALIES...</p>
                  <p>COORD: 25.2048° N, 55.2708° E</p>
                </div>
                <div className="absolute top-8 right-8 text-right font-mono text-[10px] text-white/20 whitespace-pre">
                   SFI_SYSTEM_V4.0 {"\n"}
                   SECURED_BY_SHERLOCK
                </div>
             </div>

             {/* Scanner Line Effect */}
             <motion.div 
                animate={{ y: ["0%", "100%", "0%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-scan/30 to-transparent z-20 pointer-events-none"
             />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
