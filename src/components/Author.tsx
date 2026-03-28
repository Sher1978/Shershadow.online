"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Author() {
  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-white/5 overflow-hidden selection:bg-gold selection:text-black">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Video Column (Subconscious Capture) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative aspect-[9/16] md:aspect-square overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            src="https://player.vimeo.com/external/494252666.sd.mp4?s=724071981ed673418ef0066d93963486af4a737f&profile_id=165" // Placeholder Dubai/Premium vibe
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          
          <div className="absolute bottom-8 left-8">
             <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 bg-neon-scan animate-pulse" />
                <span className="font-mono text-[10px] text-neon-scan tracking-[0.4em] uppercase">IDENTITY_VERIFIED // ARCHITECT</span>
             </div>
            <h3 className="text-3xl font-bold text-white tracking-widest uppercase" style={{ fontFamily: "'Syncopate', sans-serif" }}>IGOR SHERLOCK</h3>
          </div>
        </motion.div>

        {/* Content Column */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-10 text-white uppercase tracking-tighter leading-[0.9]" style={{ fontFamily: "'Syncopate', sans-serif" }}>
            CHIEF ENGINEER: <br />
            <span className="text-gold italic">IGOR SHERLOCK</span>
          </h2>
          
          <div className="space-y-8 text-xl md:text-2xl text-white/70 font-light leading-relaxed mb-12 border-l-2 border-gold/30 pl-8 italic">
            <p>
              «Я не теоретик. Я построил свои системы в условиях предельных нагрузок Дубая. Я знаю, где твой Хранитель прячет твои деньги, потому что я нашел его в себе».
            </p>
            <p className="text-white font-bold">
              «Я — твой внешний Архитектор для снятия с ручника».
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
             <div className="p-6 bg-white/5 border border-white/10 hover:border-gold/30 transition-colors">
                <p className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase mb-2">EXPERIENCE</p>
                <p className="text-white font-bold uppercase tracking-tight">25 ЛЕТ В ПРОДАЖАХ</p>
             </div>
             <div className="p-6 bg-white/5 border border-white/10 hover:border-gold/30 transition-colors">
                <p className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase mb-2">LOCATION</p>
                <p className="text-white font-bold uppercase tracking-tight">SHERLOCK AUTO DUBAI</p>
             </div>
          </div>

          <Link href="/sfitest">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-transparent border border-gold text-gold font-bold tracking-[0.2em] uppercase hover:bg-gold hover:text-black transition-all duration-500"
            >
              ВСТУПИТЬ В СИСТЕМУ
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
