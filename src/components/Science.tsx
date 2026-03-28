"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const steps = [
  { id: "01", title: "SEARCH BUG", desc: "Глубокий поиск багов в твоей нейросети, которые мешают тебе видеть возможности роста." },
  { id: "02", title: "EXTRACT CAPITAL", desc: "Распаковка твоей «Золотой Тени» — скрытых талантов и агрессивного потенциала." },
  { id: "03", title: "REWRITE PROTOCOL", desc: "Внедрение новой прошивки SFI 1.0 для работы в режиме Zero Friction." }
];

export default function Science() {
  return (
    <section className="relative bg-[#0A0A0A] py-24 px-4 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Background Illustration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
          <Image 
            src="/science_final.png" 
            alt="Algorithm Background" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-12">
            <div>
              <motion.p 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 className="text-neon-scan font-mono text-xs tracking-widest mb-4"
              >
                The_Method // Zero_Friction
              </motion.p>
              <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-6" style={{ fontFamily: "'Syncopate', sans-serif" }}>
                30-Days <br /> 
                <span className="text-white/20">Sprint</span> Algorithm
              </h2>
              <p className="text-xl text-white/60 font-light max-w-lg leading-relaxed italic border-l-2 border-gold pl-6">
                «Мы не просто правим твое состояние. Мы переписываем твой рабочий процесс под новый уровень масштаба.»
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group flex gap-8 items-start p-6 hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 rounded-sm"
                >
                  <span className="text-4xl font-bold text-white/10 group-hover:text-gold transition-colors font-mono">
                    {step.id}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 tracking-widest uppercase">{step.title}</h3>
                    <p className="text-white/50 font-light leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="https://shershadow.web.app/sfitest">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gold text-black font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.2)]"
              >
                Начать Спринт
              </motion.button>
            </Link>
          </div>

          <div className="relative aspect-square lg:aspect-auto lg:h-[700px] group">
            <motion.div
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full relative"
            >
              <Image
                src="/science_final.png"
                alt="Science Visualization"
                fill
                className="object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-1000 grayscale group-hover:grayscale-0"
              />
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/4 right-0 p-4 border border-gold/40 bg-black/60 backdrop-blur-md hidden md:block"
              >
                <p className="text-[10px] font-mono text-gold uppercase tracking-tighter">PHASE_01_COMPLETE</p>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
