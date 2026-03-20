"use client";

import { motion } from "framer-motion";

export default function ShadowTax() {
  return (
    <section className="py-24 bg-carbon relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 text-white uppercase italic tracking-tighter">
              ТЕНЕВОЙ НАЛОГ: <br />
              <span className="text-white/40">SFI INDEX</span>
            </h2>
            
            <div className="space-y-6 font-body text-grey text-lg leading-relaxed">
              <p>
                Проблема не в маркетинге или команде. Ты платишь невидимый налог на успех — <span className="text-gold font-bold">Shadow Friction (Теневое Трение)</span>.
              </p>
              <p>
                Каждое твое действие проходит через внутренний фильтр саботажа. Ты тратишь 80% энергии на борьбу с собой, и только 20% — на реальный рост.
              </p>
            </div>
          </div>

          <div className="relative aspect-video bg-black/50 border border-white/5 p-8 flex flex-col justify-end">
             {/* Abstract Graph Visualization */}
             <div className="flex items-end gap-1 h-48 mb-8">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${Math.random() * 100}%` }}
                    transition={{ delay: i * 0.05, duration: 1 }}
                    viewport={{ once: true }}
                    className={`flex-1 ${i > 15 ? 'bg-accent' : 'bg-danger/40'}`}
                  />
                ))}
             </div>
             <div className="flex justify-between font-heading text-[10px] text-grey uppercase tracking-widest">
               <span>Input Energy</span>
               <span className="text-danger font-bold">Friction Loss (80%)</span>
               <span className="text-accent font-bold">Result (20%)</span>
             </div>

             {/* UI Decorations */}
             <div className="absolute top-4 left-4 font-mono text-[10px] text-white/20">
               SYSTEM_AUDIT_LOG_V2.04 <br />
               SCANNING_FOR_INTERNAL_FRICTION...
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
