"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useDictionary } from "./DictionaryProvider";

export default function FAQ() {
  const dict = useDictionary();
  const d = dict.FAQ;

  return (
    <section className="py-12 md:py-24 bg-[#0A0A0A] text-white border-t border-white/5 overflow-hidden selection:bg-gold selection:text-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-24 flex flex-col items-center text-center">
          <div className="mb-4 text-gold font-mono text-[10px] tracking-[0.5em] uppercase">{d.protocol}</div>
          <h2 
            className="text-4xl md:text-6xl font-bold tracking-tighter uppercase" 
            style={{ fontFamily: "'Syncopate', sans-serif" }}
            dangerouslySetInnerHTML={{ __html: d.title }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {(d.faqs || []).map((faq: any, i: number) => (
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
          <p>{d.copyright}</p>
          <div className="flex gap-8 md:gap-12">
            <span>{d.stk}</span>
            <span>{d.origin}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
