"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Superpower() {
  return (
    <section className="py-12 md:py-24 bg-carbon text-white relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image 
          src="/superpower_final.png" 
          alt="Infinite track" 
          fill 
          className="object-cover" 
          sizes="100vw"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h2 className="font-heading text-4xl md:text-6xl lg:text-8xl font-bold mb-12 tracking-tighter leading-none">
            ZERO <br />
            <span className="text-gold italic">FRICTION.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <p className="font-body text-2xl font-light leading-tight text-white/90">
              Пока конкуренты жгут резину в попытках «заставить» себя работать, ты направляешь 100% энергии в движение.
            </p>
            <div className="space-y-6">
               <p className="font-body text-lg text-grey italic border-l-2 border-gold pl-6">
                 Это твоя несправедливая выгода. Суперсила — это когда твой внутренний двигатель больше не воюет с тормозной системой.
               </p>
               <div className="flex gap-4">
                 <div className="h-1 flex-1 bg-gold" />
                 <div className="h-1 flex-1 bg-white/10" />
                 <div className="h-1 flex-1 bg-white/10" />
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
