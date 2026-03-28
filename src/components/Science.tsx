"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  { 
    id: "01", 
    title: "ПОИСК БАГА", 
    desc: "Сканирование системы на поиск Хранителя и зон утечек Теневого Капитала." 
  },
  { 
    id: "02", 
    title: "ИЗВЛЕЧЕНИЕ КАПИТАЛА", 
    desc: "Разблокировка запрещенной энергии и перевод её из пассива в актив." 
  },
  { 
    id: "03", 
    title: "ПРОШИВКА ПАТТЕРНОВ", 
    desc: "Внедрение новых алгоритмов принятия решений на уровне инстинктов." 
  },
];

export default function Science() {
  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-white/5 selection:bg-neon-scan selection:text-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter uppercase"
            style={{ fontFamily: "'Syncopate', sans-serif" }}
          >
            ZERO FRICTION: <br />
            <span className="text-gold">АЛГОРИТМ ОПТИМИЗАЦИИ</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed italic">
            Это не терапия. Это спринт. Мы находим баг, извлекаем Теневой Капитал и прошиваем новые паттерны за 30 дней. Единственная система для предпринимателей, переводящая психологическое сопротивление в оцифрованный финансовый результат.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-10 bg-carbon-light/30 border border-white/5 relative group hover:border-gold/30 transition-all duration-500"
            >
              <div className="absolute top-0 left-10 -translate-y-1/2 bg-gold text-black px-4 py-1 font-mono text-[10px] font-bold">
                 STEP_{step.id}
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight" style={{ fontFamily: "'Syncopate', sans-serif" }}>{step.title}</h3>
              <p className="text-white/50 text-lg leading-relaxed">{step.desc}</p>
              
              <div className="mt-8 h-1 w-full bg-white/5 overflow-hidden">
                 <motion.div 
                   initial={{ x: "-100%" }}
                   whileInView={{ x: "0%" }}
                   transition={{ delay: 0.5 + i * 0.2, duration: 1 }}
                   className="h-full bg-gold"
                 />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/sfitest">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-transparent border border-gold text-gold font-bold tracking-[0.3em] uppercase hover:bg-gold hover:text-black transition-all duration-500"
            >
              ПЕРЕПРОШИТЬ СИСТЕМУ
            </motion.button>
          </Link>
        </div>
      </div>
      
      {/* Blueprint Visual Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-gold/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/10 pointer-events-none" />
    </section>
  );
}
