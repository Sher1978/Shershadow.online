"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Shadow Audit",
    subtitle: "Аудит Теневого Трения",
    desc: "ИИ-сканирование вашего реального Индекса Трения (SFI). Находим скрытые точки слива энергии и саботажа в системе принятия решений.",
    color: "#FFFFFF",
  },
  {
    num: "02",
    title: "30-Day Sprint",
    subtitle: "Дешифровка и Перепрошивка",
    desc: "Работа с Shadow Advisor и живым куратором. Изоляция багов управления и внедрение новых протоколов действия без сопротивления.",
    color: "#FF0000",
  },
  {
    num: "03",
    title: "Zero Resistance",
    subtitle: "Масштаб без тормозов",
    desc: "Мгновенные решения. Естественный выход на новый уровень оборота. Чистое ускорение, где бизнес растет быстрее тебя.",
    color: "#FF0000",
  },
];

export default function SprintRoute() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-12 md:py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <Image 
          src="/process_final.png" 
          alt="Technical Route Background" 
          fill 
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="font-heading text-gold text-[10px] tracking-[0.5em] uppercase font-bold mb-4 block">THE_TRAJECTORY // МАРШРУТ</span>
          <h2 className="font-heading text-4xl md:text-7xl font-bold text-white uppercase italic tracking-tighter">
            ТРИ ЭТАПА <span className="text-white/40">ПРОРЫВА</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              className="group relative flex flex-col bg-carbon/80 backdrop-blur-3xl border border-white/5 p-10 h-full min-h-[500px] hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              {/* Animated Background Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
                   style={{ backgroundColor: step.color }} />

              <div className="mb-12">
                <span className="font-heading text-6xl md:text-8xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-500 translate-x-[-10px]">
                  {step.num}
                </span>
              </div>

              <div className="mt-auto">
                <p className="font-heading text-sm text-gold tracking-widest uppercase mb-2">
                  {step.subtitle}
                </p>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6 leading-tight tracking-tighter uppercase italic">
                  {step.title}
                </h3>
                <div className="w-12 h-[2px] mb-8 bg-gold group-hover:w-full transition-all duration-700" />
                <p className="font-body text-grey text-lg italic leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Technical Bit */}
              <div className="mt-10 pt-6 border-t border-white/5 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                 <span className="font-mono text-[8px] text-white tracking-widest">STATUS: READY_FOR_SYNC</span>
                 <div className="flex gap-1">
                    {[...Array(4)].map((_, j) => (
                      <div key={j} className="w-4 h-[1px] bg-white/20" />
                    ))}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
