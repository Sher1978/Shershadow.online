"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Author() {
  return (
    <section className="relative bg-carbon py-24 px-4 overflow-hidden min-h-screen flex items-center">
      
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Video / Visual Side */}
          <div className="relative group rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-black aspect-[9/16] md:aspect-square lg:aspect-[4/5] max-w-lg mx-auto lg:mx-0">
            <motion.div
              className="w-full h-full relative"
              initial={{ filter: "grayscale(100%)", opacity: 0.4 }}
              whileInView={{ filter: "grayscale(0%)", opacity: 1 }}
              viewport={{ amount: 0.6 }}
              transition={{ duration: 1.2 }}
            >
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://player.vimeo.com/external/494252666.sd.mp4?s=724071981ed673418ef0066d93963486af4a737f&profile_id=165" type="video/mp4" />
              </video>
            </motion.div>
            
            {/* Live Indicator */}
            <div className="absolute top-8 left-8 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <p className="font-mono text-[10px] text-white/50 tracking-[0.4em] uppercase">LINK_ESTABLISHED // LIVE_TELEMETRY</p>
            </div>

            {/* Scanning Overlay */}
            <motion.div 
               animate={{ y: ["-100%", "200%"] }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-gold/10 to-transparent pointer-events-none"
            />
          </div>

          {/* Text Side */}
          <div className="space-y-12">
            <div>
              <motion.p 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 className="text-gold font-mono text-xs tracking-widest mb-4"
              >
                Chief_Engineer // Igor_Sherlock
              </motion.p>
              <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-8" style={{ fontFamily: "'Syncopate', sans-serif" }}>
                Архитектор <br /> 
                <span className="text-white/20">Системы</span>
              </h2>
              <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed max-w-xl">
                 <p>
                   Игорь Шерлок — больше чем ментор. Это инженер, который разбирает твой бизнес и твою психику как сложный механизм, находя скрытые баги там, где другие видят «просто лень» или «плохой рынок».
                 </p>
                 <p>
                   Основатель Sherlock Capital, создатель протокола SFI и автор методики Zero Friction. Его задача — превратить твою борьбу в плавное, скоростное движение к масштабу.
                 </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
               <div>
                  <p className="text-3xl font-bold text-white mb-1">15+</p>
                  <p className="text-[10px] text-gold font-mono uppercase tracking-widest">YEARS_EXP</p>
               </div>
               <div>
                  <p className="text-3xl font-bold text-white mb-1">500+</p>
                  <p className="text-[10px] text-gold font-mono uppercase tracking-widest">SFI_OPTIMIZED</p>
               </div>
            </div>

            <Link href="https://shershadow.web.app/sfitest">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 border border-white/20 hover:border-gold text-white font-bold uppercase tracking-[0.2em] text-xs transition-all flex items-center gap-4 group"
              >
                Подключиться к системе
                <svg className="w-5 h-5 group-hover:text-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
