"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useDictionary } from "./DictionaryProvider";

export default function Author() {
  const dict = useDictionary();
  const a = dict.Author;

  return (
    <section className="relative bg-carbon py-16 md:py-20 px-4 overflow-hidden md:min-h-screen flex items-center">
      
      {/* Background World/Dubai Illustration */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-0">
          <Image 
            src="/author.png" 
            alt="Chief Engineer World Visual" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-carbon via-transparent to-carbon" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Video / Visual Side */}
          <div className="relative group rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-black aspect-[9/16] w-full max-w-[320px] xs:max-w-[360px] sm:max-w-sm mx-auto lg:mx-0">
            <motion.div
              className="w-full h-full relative"
              initial={{ filter: "grayscale(100%)", opacity: 0.4 }}
              whileInView={{ filter: "grayscale(0%)", opacity: 1 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 1.2 }}
            >
              <iframe
                src="https://www.youtube.com/embed/Et9q9fs8p0E?autoplay=1&mute=1&loop=1&playlist=Et9q9fs8p0E&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0"
                allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={false}
                className="w-full h-full pointer-events-none"
                style={{ border: 'none' }}
              ></iframe>
            </motion.div>
            
            {/* Live Indicator */}
            <div className="absolute top-4 md:top-8 left-4 md:left-8 flex items-center gap-2 md:gap-3">
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-red-600 animate-pulse" />
              <p className="font-mono text-[8px] md:text-[10px] text-white/50 tracking-[0.4em] uppercase">LINK_ESTABLISHED // LIVE_TELEMETRY</p>
            </div>

            {/* Scanning Overlay */}
            <motion.div 
               animate={{ y: ["-100%", "200%"] }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-gold/10 to-transparent pointer-events-none"
            />
          </div>

          {/* Text Side */}
          <div className="space-y-8 md:space-y-12">
            <div>
              <motion.p 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 className="text-gold font-mono text-xs tracking-widest mb-4"
              >
                {a.role}
              </motion.p>
              <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-4 md:mb-8" style={{ fontFamily: "'Syncopate', sans-serif" }}>
                {a.titleLine1} <br /> 
                <span className="text-white/20">{a.titleLine2}</span>
              </h2>
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-white/60 font-light leading-relaxed max-w-xl">
                 <p>
                   {a.desc1}
                 </p>
                 <p>
                   {a.desc2}
                 </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-8 py-6 md:py-8 border-y border-white/5">
               <div>
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1">{a.yearsExp}</p>
                  <p className="text-[10px] text-gold font-mono uppercase tracking-widest">{a.yearsExpLabel}</p>
               </div>
               <div>
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1">{a.optimized}</p>
                  <p className="text-[10px] text-gold font-mono uppercase tracking-widest">{a.optimizedLabel}</p>
               </div>
            </div>

            <Link href={`/${dict.lang}/sfitest`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-8 md:px-12 py-5 md:py-6 border border-white/20 hover:border-gold text-white font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs transition-all flex items-center justify-center gap-4 group"
              >
                {a.cta}
                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:text-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
