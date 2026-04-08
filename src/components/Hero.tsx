"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDictionary } from "./DictionaryProvider";

export default function Hero() {
  const dict = useDictionary();
  const h = dict.Hero;
  const hooks = h.hooks;
  const [currentHook, setCurrentHook] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHook((prev) => (prev + 1) % hooks.length);
    }, 2500); // 2.5s interval
    return () => clearInterval(timer);
  }, [hooks.length]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col md:grid md:grid-cols-2 bg-[#111113] selection:bg-neon-scan selection:text-black">
      
      {/* Background Scanning Visuals */}
      <div className="absolute inset-0 scanner-grid opacity-10 pointer-events-none z-1" />
      <div className="absolute inset-0 noise-overlay z-2" />
      <motion.div 
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-link-gold to-transparent opacity-30 z-3" 
      />

      {/* Left Column (System Diagnosis) */}
      <div className="order-2 md:order-1 flex flex-col justify-center p-6 md:p-24 relative z-20 min-h-[50vh] md:min-h-screen">
        
        {/* System ID Tag */}
        <div className="flex gap-4 items-center mb-6 md:mb-8">
          <div className="w-2 h-2 bg-neon-scan animate-pulse" />
          <span className="font-mono text-[10px] text-neon-scan tracking-[0.4em] uppercase">{h.systemInit}</span>
        </div>

        {/* H1 (Static) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "circOut" }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-[0.9]" style={{ fontFamily: "'Syncopate', sans-serif" }}>
            {h.titleLine1} <br /> 
            <span className="text-white/20">{h.titleLine2}</span> <br />
            {h.titleLine3} <br />
            <span className="text-neon-scan">...</span>
          </h1>
        </motion.div>

        {/* Dynamic Hooks Loader */}
        <div className="relative min-h-[10rem] md:min-h-[16rem] flex items-center my-4 md:my-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHook}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: "circInOut" }}
              className="absolute inset-x-0 flex flex-col justify-center"
            >
              <p className="text-xl md:text-3xl lg:text-4xl font-light text-white leading-tight max-w-2xl italic tracking-tight underline decoration-neon-scan/30 underline-offset-8">
                {hooks[currentHook].text}
              </p>
              <div className="mt-4 font-mono text-[10px] text-neon-scan/50 uppercase tracking-[0.2em]">
                {h.phaseTag}: {hooks[currentHook].id} // {h.detected}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sub-headline + CTA */}
        <div className="max-w-xl space-y-6 md:space-y-12 mb-8 md:mb-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 md:space-y-6"
          >
            <p className="text-base md:text-xl text-white/70 font-light leading-relaxed">
              {h.subHeadline.split('($Shadow$)').map((part: string, i: number, arr: string[]) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="text-white font-bold">($Shadow$)</span>}
                </span>
              )).map((part: any, i: number) => {
                // Split by ($SFI$) as well
                const subParts = part.props.children[0].split('($SFI$)');
                if (subParts.length > 1) {
                  return (
                    <span key={i}>
                      {subParts.map((sub: string, j: number, subArr: string[]) => (
                        <span key={j}>
                          {sub}
                          {j < subArr.length - 1 && <span className="text-neon-scan font-bold">($SFI$)</span>}
                        </span>
                      ))}
                      {part.props.children[1]}
                    </span>
                  );
                }
                return part;
              })}
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <Link href={`/${dict.lang}/sfitest`}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center justify-center gap-6 px-8 md:px-12 py-4 md:py-6 bg-transparent border border-neon-scan/40 hover:border-gold transition-all duration-500 overflow-hidden w-full md:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-scan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center">
                   <div className="w-1.5 h-1.5 bg-neon-scan group-hover:bg-gold transition-colors" />
                </div>
                <span className="relative z-10 text-white font-bold tracking-[0.25em] uppercase text-xs md:text-sm">{h.cta}</span>
                <svg className="w-5 h-5 md:w-6 md:h-6 text-neon-scan group-hover:text-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </Link>

            <div className="flex gap-4 w-full md:w-auto">
              <Link href="https://t.me/sherlockdxb" className="flex-1 md:flex-none">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 240, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full p-4 border border-white/10 flex items-center justify-center transition-all"
                  title="Telegram"
                >
                  <svg className="w-6 h-6 text-white/60 hover:text-neon-scan" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.198 2.499a2.242 2.242 0 0 0-1.022.285L1.826 9.562c-1.1.447-1.097 1.069-.201 1.347l4.316 1.332 10.155-6.425c.483-.294.923-.136.561.186l-8.216 7.424-.316 1.488c.146.28.324.56.536.83l3.6 2.658c1.3.96 2.242.463 2.56-1.096l2.766-13.01c.23-.934-.16-1.53-.889-1.365Z"/>
                  </svg>
                </motion.button>
              </Link>
              <Link href="https://wa.me/971588044688" className="flex-1 md:flex-none">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(212, 175, 55, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full p-4 border border-white/10 flex items-center justify-center transition-all"
                  title="WhatsApp"
                >
                  <svg className="w-6 h-6 text-white/60 hover:text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column (Blueprint Image) - High visibility on mobile */}
      <div className="order-1 md:order-2 h-[35vh] md:h-full relative overflow-hidden bg-[#111113] border-b md:border-b-0 md:border-l border-white/5 z-10">
        <motion.div
          initial={{ filter: "grayscale(100%)", scale: 1.1, opacity: 0.01 }}
          animate={{ filter: "grayscale(0%)", scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="w-full h-full relative z-0"
        >
          <Image
            src="/hero_car_cinematic.png"
            alt="Anomaly Logic Visualization"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />


        </motion.div>
        
        {/* HUD Elements */}
        <div className="absolute bottom-12 right-12 z-20 pointer-events-none hidden md:block">
           <div className="p-6 border border-white/10 bg-black/60 backdrop-blur-md">
              <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                 <div className="space-y-1">
                    <p className="font-mono text-[8px] text-white/40 uppercase">{h.targetStatus}</p>
                    <p className="font-heading text-xs text-neon-scan uppercase">{h.inStall}</p>
                 </div>
                 <div className="space-y-1">
                    <p className="font-mono text-[8px] text-white/40 uppercase">{h.shadowTax}</p>
                    <p className="font-heading text-xs text-white uppercase font-bold">82.3%</p>
                 </div>
                 <div className="space-y-1">
                    <p className="font-mono text-[8px] text-white/40 uppercase">{h.systemLoad}</p>
                    <p className="font-heading text-xs text-white uppercase">{h.critical}</p>
                 </div>
                 <div className="space-y-1">
                    <p className="font-mono text-[8px] text-white/40 uppercase">{h.efficiency}</p>
                    <div className="w-16 h-1 bg-white/10 mt-1 overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }} 
                         animate={{ width: "15%" }} 
                         transition={{ delay: 1, duration: 2 }}
                         className="h-full bg-neon-scan" 
                       />
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111113] via-[#111113]/20 to-transparent z-10 hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-transparent md:hidden z-10 pointer-events-none" />
      </div>

    </section>

  );
}
