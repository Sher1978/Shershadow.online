"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const results = [
  {
    title: "PROFIT_CONVERSION",
    label: "ПРИБЫЛЬ",
    desc: "Полная конвертация Налога на Трение в чистую прибыль. Рост маржинальности без привлечения внешних инвестиций."
  },
  {
    title: "SOVEREIGN_LEADERSHIP",
    label: "ЛИДЕРСТВО",
    desc: "Управление лидерами из позиции Sovereign. Ты больше не контролер, ты — Архитектор, задающий вектор развития."
  },
  {
    title: "SYSTEM_FREEDOM",
    label: "СВОБОДА",
    desc: "Выход из операционного ада через калибровку «внутреннего компаса». Система работает на тебя, а не ты на неё."
  }
];

export default function Dashboard() {
  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden selection:bg-neon-scan selection:text-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <div className="max-w-2xl">
              <div className="flex gap-4 items-center mb-6">
                 <div className="w-12 h-[1px] bg-neon-scan" />
                 <span className="font-mono text-xs text-neon-scan tracking-[0.4em] uppercase">TELEMETRY_STATUS: OPTIMIZED</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter" style={{ fontFamily: "'Syncopate', sans-serif" }}>
                 ТЕЛЕМЕТРИЯ <br /> <span className="text-gold">БУДУЩЕГО</span>
              </h2>
           </div>
           <div className="bg-white/5 border border-white/10 p-4 font-mono text-[10px] text-white/40 uppercase">
              Target_Index: <span className="text-neon-scan">SFI 1.0 (Zero Friction)</span>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {results.map((res, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 bg-carbon-light/20 border border-white/5 hover:border-neon-scan/40 transition-all duration-500 relative"
              >
                 <div className="text-neon-scan font-mono text-[10px] tracking-[0.3em] uppercase mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
                    {res.title}
                 </div>
                 <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">{res.label}</h3>
                 <p className="text-white/40 text-lg font-light leading-relaxed group-hover:text-white/80 transition-colors">
                    {res.desc}
                 </p>
                 
                 {/* Visual Gauge */}
                 <div className="mt-12 h-[2px] w-full bg-white/5 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 0.5 + i * 0.2, duration: 1.5 }}
                      className="h-full bg-neon-scan"
                    />
                 </div>
              </motion.div>
           ))}
        </div>

        <div className="mt-24 text-center">
           <Link href="/sfitest">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-16 py-6 bg-transparent border border-neon-scan text-neon-scan font-bold tracking-[0.3em] uppercase hover:bg-neon-scan hover:text-black transition-all duration-500 shadow-[0_0_30px_rgba(0,240,255,0.1)]"
              >
                 ЗАПУСТИТЬ ТЕЛЕМЕТРИЮ
              </motion.button>
           </Link>
        </div>
      </div>
    </section>
  );
}
