"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const faqs = [
  {
    q: "ПОЧЕМУ СЕЙЧАС?",
    a: "Твой Хранитель выигрывает время. Каждая неделя промедления — это не просто упущенная выгода, это ресурс, который твоя Тень ($Shadow$) сжигает прямо сейчас. Система не прощает бездействия в условиях предельных нагрузок."
  },
  {
    q: "ПОЧЕМУ ТЕНЬ ВАЖНЕЕ МАРКЕТИНГА?",
    a: "Маркетинг — это бензин. Если в баке твоего двигателя дыра (Налог на Трение), ты просто заливаешь деньги в асфальт. Мы не вешаем на машину новый обтекатель, мы чиним сам двигатель."
  },
  {
    q: "КТО ТАКОЙ ХРАНИТЕЛЬ?",
    a: "Это твой внутренний механизм защиты. Он саботирует твой рост, маскируясь под 'здравый смысл' и 'рациональное планирование'. Его задача — оставить тебя там, где тебе 'безопасно', но где нет твоего масштаба."
  },
  {
    q: "ЧТО ТАКОЕ SFI INDEX?",
    a: "Shadow Friction Index — это оцифрованный показатель твоего внутреннего сопротивления. Это технический параметр, который показывает, сколько усилий твоя система тратит на борьбу с самой собой."
  }
];

export default function FAQ() {
  return (
    <section className="py-12 md:py-24 bg-[#0A0A0A] text-white border-t border-white/5 selection:bg-gold selection:text-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-24 flex flex-col items-center text-center">
          <div className="mb-4 text-gold font-mono text-[10px] tracking-[0.5em] uppercase">FAQ_PROTOCOL_LOG_V3.01</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase" style={{ fontFamily: "'Syncopate', sans-serif" }}>
             ОБРАБОТКА <span className="text-white/20">САБОТАЖА</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-500"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gold uppercase tracking-tight">{faq.q}</h3>
              <p className="text-white/50 text-base md:text-lg font-light leading-relaxed italic">{faq.a}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 md:mt-32 pt-12 md:pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 font-mono text-[8px] md:text-[10px] text-white/20 tracking-[0.5em] uppercase">
          <p>© 2026 SHER SHADOW CAPITAL // ALL_RIGHTS_RESERVED</p>
          <div className="flex gap-8 md:gap-12">
            <span>STK: NEXTJS/FRAMER/BLUEPRINT</span>
            <span>SYSTEM_ORIGIN: DUBAI HQ</span>
          </div>
        </div>
      </div>
    </section>
  );
}
