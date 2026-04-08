"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDictionary } from "./DictionaryProvider";

export default function DiagnosticAudit() {
  const dict = useDictionary();
  const d = dict.Diagnostic;
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative bg-carbon py-8 md:py-16 px-4 overflow-hidden">
      
      {/* Background Blueprint Image */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-0">
         <Image 
           src="/engine_schematic.png" 
           alt="Blueprint Background" 
           fill 
           className="object-cover grayscale opacity-50"
         />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-mono text-xs tracking-[0.3em] uppercase mb-4"
          >
            {d.auditSequence}
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter" style={{ fontFamily: "'Syncopate', sans-serif" }}>
            {d.titleLine1} <span className="text-white/30">{d.titleLine2}</span>
          </h2>
        </div>

        <div className="space-y-6 md:space-y-8">
          {d.cards.map((card: any, index: number) => {
            // Mapping static icons to cards
            const icons = ["/engine_schematic.png", "/process_final.png", "/zone_c_update.png"];
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="sticky top-24 w-full"
              >
                <div className="bg-[#161618]/90 backdrop-blur-xl border border-white/10 p-6 md:p-16 rounded-sm shadow-2xl overflow-hidden relative group">
                  
                  {/* Decorative number */}
                  <div className="absolute top-4 right-8 text-[8rem] md:text-[12rem] font-bold text-white/5 pointer-events-none select-none italic">
                    {card.id}
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="space-y-6 md:space-y-8 relative z-10">
                      <div>
                        <p className="text-gold font-mono text-[10px] tracking-widest mb-2">{card.zone}</p>
                        <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight uppercase">
                          {card.title}
                        </h3>
                      </div>
                      <p 
                        className="text-base md:text-lg text-white/60 font-light leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: card.description }}
                      />
                      
                      <Link href={`/${dict.lang}/sfitest`}>
                        <motion.button
                          whileHover={{ x: 10 }}
                          className="flex items-center gap-4 text-neon-scan font-bold tracking-widest text-xs uppercase"
                        >
                          {d.scanCTA}
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </motion.button>
                      </Link>
                    </div>

                    <div className="relative h-[250px] md:h-[400px] w-full rounded-sm overflow-hidden border border-white/5 bg-black/40">
                      <motion.div
                        className="w-full h-full relative"
                        initial={{ filter: "grayscale(100%)", opacity: 0.4 }}
                        whileInView={{ filter: "grayscale(0%)", opacity: 1 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ duration: 1.2 }}
                      >
                        <Image
                          src={icons[index]}
                          alt={card.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
