"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Author() {
  return (
    <section className="py-24 bg-carbon border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square md:aspect-[4/5] overflow-hidden group shadow-2xl"
        >
          <Image
            src="/author.png"
            alt="Igor Sherlock"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
          />
          <div className="absolute bottom-10 left-10">
             <span className="font-heading text-gold text-[10px] tracking-[0.5em] block mb-2 uppercase font-bold">PILOT’S LOG // DECODED</span>
            <h3 className="font-heading text-4xl font-bold text-white tracking-widest">IGOR SHERLOCK</h3>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8 text-white uppercase italic tracking-tighter">
            Я РАЗРУШАЛ СВОИ <br />
            <span className="text-gold">ИМПЕРИИ САМ.</span>
          </h2>
          
          <div className="space-y-6 font-body text-grey text-lg italic border-l-4 border-gold pl-8 mb-12">
            <p>
              Я жег эти моторы дотла, пытаясь быть "удобным лидером". Моя "правильность" стоила мне миллионов. 
            </p>
            <p>
              Я сжигал моторы дотла, пока не понял: <span className="text-white font-bold">Тень — это не враг. Это заблокированный капитал.</span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 font-heading text-[10px] text-white/60 tracking-widest uppercase">
             <div>
               <p className="text-gold font-bold mb-2">EXPERIENCE</p>
               <p>28 ЛЕТ В B2B ПРОДАЖАХ</p>
             </div>
             <div>
               <p className="text-gold font-bold mb-2">LOCATION</p>
               <p>ВЛАДЕЛЬЕЦ БИЗНЕСА В ОАЭ</p>
             </div>
             <div>
               <p className="text-gold font-bold mb-2">INVESTMENT</p>
               <p>$50,000+ В ДЕШИФРОВКУ</p>
             </div>
             <div>
               <p className="text-gold font-bold mb-2">MISSION</p>
               <p>ZERO FRICTION ADVISOR</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
