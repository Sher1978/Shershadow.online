"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FinalLaunch() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Image src="/final_launch.png" alt="Final Acceleration Dubai" fill className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon via-transparent to-black" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-4xl md:text-8xl font-bold mb-12 text-white italic tracking-tighter">
            ТОЧКА <br />
            <span className="text-gold underline decoration-white/10">НЕВОЗВРАТА.</span>
          </h2>
          
          <div className="space-y-8 max-w-3xl mx-auto backdrop-blur-md bg-black/40 p-12 border border-white/10 mb-12">
            <p className="font-body text-xl md:text-2xl text-white/90 leading-tight">
              Твой выбор прост: продолжать жечь колодки, имитируя движение, или активировать Launch Control и увидеть, на что способна твоя система без тормозов.
            </p>
            <p className="font-body text-lg text-grey uppercase tracking-widest">
              Либо ты управляешь своей Тенью, либо она управляет твоим счетом в банке.
            </p>
          </div>

          <motion.button
            whileHover={{ 
              scale: 1.1, 
              boxShadow: "0 0 50px rgba(212, 175, 55, 0.4)",
              backgroundColor: "#D4AF37",
              color: "#000"
            }}
            animate={{ boxShadow: ["0 0 20px rgba(212, 175, 55, 0.2)", "0 0 40px rgba(212, 175, 55, 0.4)", "0 0 20px rgba(212, 175, 55, 0.2)"] }}
            transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-8 bg-gold text-black font-heading font-bold text-2xl rounded-none transition-all uppercase tracking-[0.2em]"
          >
            АКТИВИРОВАТЬ ZERO FRICTION
          </motion.button>
        </motion.div>
      </div>

      {/* Speed lines */}
      <div className="absolute inset-0 pointer-events-none">
         {[...Array(10)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.1, ease: "linear" }}
              className="absolute h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent w-full"
              style={{ top: `${i * 10}%` }}
            />
         ))}
      </div>
    </section>
  );
}
