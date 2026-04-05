"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useDictionary } from "./DictionaryProvider";

export default function FinalLaunch() {
  const dict = useDictionary();
  const d = dict.FinalLaunch;

  return (
    <section className="relative bg-[#0A0A0A] py-16 md:py-32 px-4 overflow-hidden md:min-h-screen flex items-center justify-center">
      
      {/* Background Portal Visual */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
          <Image 
            src="/portal_bg.png" 
            alt="Event Horizon" 
            fill 
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center w-full">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="relative p-8 md:p-24 border border-white/10 bg-black/60 backdrop-blur-3xl rounded-sm overflow-hidden"
        >
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 border-t-2 border-r-2 border-gold/40" />
          <div className="absolute bottom-0 left-0 w-12 h-12 md:w-16 md:h-16 border-b-2 border-l-2 border-gold/40" />

          <p className="text-neon-scan font-mono text-[10px] tracking-[0.5em] uppercase mb-8 md:mb-12">{d.sequence}</p>
          
          <h2 className="text-4xl md:text-8xl font-bold text-white uppercase tracking-tighter mb-8 md:mb-12 leading-tight" style={{ fontFamily: "'Syncopate', sans-serif" }}>
             {d.title.split("<br />")[0]} <br /> 
             <span className="text-gold">{d.stage}</span>
          </h2>

          <p className="text-lg md:text-2xl text-white/70 font-light mb-12 md:mb-16 leading-relaxed max-w-2xl mx-auto font-heading italic">
             {d.quote}
          </p>

          {/* SFI 4 Scenarios Explanation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16 text-left max-w-4xl mx-auto">
             {d.scenarios.map((item: any) => (
               <div key={item.id} className="p-6 md:p-8 bg-white/5 border border-white/10 hover:border-gold/30 transition-all group">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-mono text-[10px] text-neon-scan opacity-40">{item.id} //</span>
                    <h3 className="font-heading text-lg md:text-xl font-bold text-white tracking-widest">{item.label}</h3>
                  </div>
                  <p className="text-sm text-white/40 leading-relaxed font-light">{item.desc}</p>
               </div>
             ))}
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="text-center mb-4">
               <p className="text-neon-scan font-mono text-[10px] tracking-[0.3em] uppercase mb-2">{d.protocol}</p>
               <p className="text-white/30 text-[11px] font-light max-w-md mx-auto">
                 {d.testDesc}
               </p>
            </div>
            <Link href="https://shershadow.web.app/sfitest">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(212, 175, 55, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-12 md:px-20 py-6 md:py-10 bg-gold text-black font-bold uppercase tracking-[0.4em] text-xs md:text-sm hover:bg-white transition-all shadow-2xl relative group"
              >
                {d.cta}
                <div className="absolute inset-0 bg-white/20 group-hover:scale-105 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
              </motion.button>
            </Link>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-8 md:mt-12 opacity-40">
               <p className="font-mono text-[8px] md:text-[9px] uppercase tracking-widest text-white/50 flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-neon-scan rounded-full" /> 
                 {d.ready}
               </p>
               <p className="font-mono text-[8px] md:text-[9px] uppercase tracking-widest text-white/50 flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-neon-scan rounded-full" /> 
                 {d.calibrated}
               </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
