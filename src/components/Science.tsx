"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Science() {
  return (
    <section className="py-24 bg-carbon text-white overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative aspect-square bg-black/40 border border-white/10 overflow-hidden group"
        >
          <Image 
            src="/science_final.png" 
            alt="Ego Core Architecture" 
            fill 
            className="object-contain group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
          <div className="absolute top-4 left-4 font-mono text-[10px] text-accent/60">
            PERSONALITY_ARCH_MAP_V1 <br />
            GUARDIAN_LAYER: ACTIVE
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tighter">
            НИЖЕ РАДАРА <br />
            <span className="text-white/40">ХРАНИТЕЛЯ</span>
          </h2>
          
          <div className="space-y-6 font-body text-grey text-lg leading-relaxed border-l-2 border-gold pl-8">
            <p>
              Твой <span className="text-white font-bold italic">Хранитель</span> (алгоритм безопасности мозга) видит в росте угрозу и жмет на тормоз.
            </p>
            <p>
              Мы не занимаемся терапией. Метод <span className="text-gold font-bold italic underline decoration-gold/20">Zero Friction</span> — это высокоточная инженерия, работающая ниже радаров защиты.
            </p>
            <p>
              Мы перепрошиваем софт: Хранитель становится союзником, охраняющим твой новый масштаб.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
