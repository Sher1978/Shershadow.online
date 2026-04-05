"use client";

import { motion } from "framer-motion";
import { useDictionary } from "./DictionaryProvider";

export default function Solution() {
  const dict = useDictionary();
  const d = dict.Solution;

  return (
    <section className="py-32 bg-platinum text-carbon overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          <h2 className="font-heading text-4xl md:text-7xl font-bold mb-12 tracking-tighter">
            {d.titleLine1} <br />
            <span className="text-accent">{d.titleLine2}</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-10">
            <p className="font-body text-2xl md:text-3xl font-light leading-relaxed">
              {d.desc1}
            </p>
            <div className="h-[2px] w-24 bg-accent mx-auto" />
            <p 
              className="font-body text-xl md:text-2xl text-carbon/70 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: d.desc2 }}
            />
          </div>
          
          <div className="mt-16 flex justify-center gap-12 font-heading text-[10px] tracking-[0.3em] text-accent font-bold">
            <span>ZERO RESISTANCE</span>
            <span>MAX VELOCITY</span>
            <span>SHADOW SYSTEM</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
