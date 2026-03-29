"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const results = [
  { label: "PROFIT CONVERSION", value: "+42%", desc: "Рост чистой прибыли за счет устранения внутренних багов системы.", color: "text-gold" },
  { label: "SOVEREIGN LEADERSHIP", value: "DEEP", desc: "Переход в состояние Хозяина, где ты диктуешь правила игры рынку.", color: "text-neon-scan" },
  { label: "FREEDOM LEVEL", value: "MAX", desc: "Выход из операционки без потери контроля и качества продукта.", color: "text-white" }
];

export default function Dashboard() {
  return (
    <section className="relative bg-carbon py-32 px-4 overflow-hidden min-h-[80vh] flex items-center">
      
      {/* Background HUD Visual */}
      <div className="absolute inset-x-0 top-0 bottom-0 opacity-20 pointer-events-none z-0">
          <Image 
            src="/telemetry_bg.png" 
            alt="Dashboard HUD Backdrop" 
            fill 
            className="object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon via-transparent to-carbon" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
        <div className="mb-24">
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-neon-scan font-mono text-xs tracking-widest mb-4"
          >
            Telemetry_Report // SFI_1.0_OUTCOME
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-8 max-w-4xl mx-auto" style={{ fontFamily: "'Syncopate', sans-serif" }}>
            Телеметрия <span className="text-white/20">твоего</span> будущего
          </h2>
          <p className="text-lg text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
            Система Sherlock Shadow не дает «советов». Мы внедряем изменения прямо в архитектуру твоего бизнеса, превращая хаос в измеримые результаты.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((res, index) => (
            <motion.div
              key={res.label}
              initial={{ opacity: 0, y: 30, filter: "grayscale(100%)" }}
              whileInView={{ opacity: 1, y: 0, filter: "grayscale(0%)" }}
              viewport={{ amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="p-12 border border-white/5 bg-carbon-light/60 backdrop-blur-md rounded-sm hover:border-gold/30 transition-all group"
            >
              <div className="mb-6">
                <p className="font-mono text-[10px] text-white/40 tracking-[0.3em] uppercase mb-1">{res.label}</p>
                <motion.p 
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                  className={`text-6xl font-bold ${res.color} tracking-tighter`}
                >
                  {res.value}
                </motion.p>
              </div>
              <p className="text-sm text-white/40 font-light leading-relaxed">{res.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <p className="font-mono text-[10px] text-neon-scan blink mb-8 uppercase tracking-[0.4em]">SYSTEM_READY_FOR_CALIBRATION</p>
          <Link href="https://shershadow.web.app/sfitest">
             <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-16 py-8 bg-white text-black font-bold uppercase tracking-[0.3em] text-sm hover:bg-gold transition-all"
             >
                Получить доступ
             </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
