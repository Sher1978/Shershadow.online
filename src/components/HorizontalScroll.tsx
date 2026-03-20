"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Shadow Audit",
    desc: "ИИ-скан твоего реального Индекса Трения (SFI). Находим, где именно горят твои колодки.",
  },
  {
    num: "02",
    title: "30-Day Sprint",
    desc: "Дешифровка саботажа с Shadow Advisor и живым куратором. Перепрошивка базовых реакций.",
  },
  {
    num: "03",
    title: "Zero Resistance",
    desc: "Мгновенные решения. Естественный масштаб. Чистое ускорение. Твой бизнес летит без твоего участия.",
  },
];

export default function HorizontalScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-zinc-950 border-t border-white/5">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="/process_final.png" alt="Process vibe" className="w-full h-full object-cover" />
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-10 relative z-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative flex h-[70vh] w-[90vw] md:w-[60vw] flex-col justify-between border border-white/5 p-16 bg-carbon/80 backdrop-blur-xl shrink-0"
            >
              <div className="absolute top-0 right-0 p-8">
                <span className="font-heading text-6xl md:text-[12rem] font-bold text-white/5 select-none">{step.num}</span>
              </div>
              
              <div>
                <h3 className="font-heading text-4xl md:text-6xl font-bold text-white mb-8 uppercase tracking-tighter italic">
                  {step.title}
                </h3>
              </div>

              <div className="max-w-md">
                <p className="font-body text-grey text-xl leading-relaxed italic border-l-4 border-gold pl-8">
                  {step.desc}
                </p>
              </div>

              <div className="flex gap-4 items-center">
                 <span className="font-heading text-[10px] text-gold font-bold tracking-[0.5em]">SYSTEM_READY</span>
                {[...Array(5)].map((_, j) => (
                  <motion.div 
                    key={j} 
                    animate={j <= i ? { backgroundColor: "#D4AF37", opacity: 1 } : { backgroundColor: "rgba(255,255,255,0.1)", opacity: 0.5 }}
                    className="h-[2px] w-12" 
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
