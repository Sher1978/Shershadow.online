"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useDictionary } from "./DictionaryProvider";

export default function Science() {
  const dict = useDictionary();
  const d = dict.Science;

  return (
    <section className="relative bg-carbon py-16 md:py-20 px-4 overflow-hidden md:min-h-screen flex items-center">
      
      {/* Background Illustration */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-0">
          <Image 
            src="/science_final.png" 
            alt="Algorithm Background" 
            fill 
            className="object-cover grayscale opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-carbon" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          <div className="space-y-8 md:space-y-12">
            <div>
              <motion.p 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 className="text-neon-scan font-mono text-xs tracking-widest mb-4"
              >
                {d.method}
              </motion.p>
              <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-6" style={{ fontFamily: "'Syncopate', sans-serif" }}>
                {d.titleLine1} <br /> 
                <span className="text-white/20">{d.sprint}</span> {d.algorithm}
              </h2>
              <p className="text-lg md:text-xl text-white/60 font-light max-w-lg leading-relaxed italic border-l-2 border-gold pl-6">
                {d.quote}
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {d.steps.map((step: any, index: number) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group flex gap-6 md:gap-8 items-start p-4 md:p-6 hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 rounded-sm"
                >
                  <span className="text-3xl md:text-4xl font-bold text-white/10 group-hover:text-gold transition-colors font-mono">
                    {step.id}
                  </span>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2 tracking-widest uppercase">{step.title}</h3>
                    <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="https://shershadow.web.app/sfitest">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-10 py-5 bg-gold text-black font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.2)]"
              >
                {d.cta}
              </motion.button>
            </Link>
          </div>

          <div className="relative aspect-square lg:aspect-auto lg:h-[700px] group hidden md:block">
            <motion.div
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full relative"
            >
              <motion.div
                initial={{ filter: "grayscale(100%)", opacity: 0.5 }}
                whileInView={{ filter: "grayscale(0%)", opacity: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 1.5 }}
                className="w-full h-full relative"
              >
                <Image
                  src="/science_final.png"
                  alt="Science Visualization"
                  fill
                  className="object-contain"
                />
              </motion.div>
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/4 right-0 p-4 border border-gold/40 bg-black/60 backdrop-blur-md hidden md:block"
              >
                <p className="text-[10px] font-mono text-gold uppercase tracking-tighter">{d.phaseComplete}</p>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
