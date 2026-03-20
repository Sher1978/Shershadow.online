"use client";

import { motion } from "framer-motion";
import { Gauge, Zap, AlertTriangle } from "lucide-react";

const cards = [
  {
    title: "Уставший победитель",
    description: "Тебе всё дается через сверхусилия. Пока другие скользят по льду, ты продираешься через бетон.",
    icon: <Zap className="w-6 h-6 text-gold" />,
    label: "OVERHEATED",
  },
  {
    title: "Пленник этики",
    description: "Твой масштаб заперт внутри твоей 'вежливости'. Ты боишься быть неудобным и строишь комфортную среду для всех, кроме себя.",
    icon: <AlertTriangle className="w-6 h-6 text-gold" />,
    label: "LIMITER ACTIVE",
  },
  {
    title: "Узкое горлышко",
    description: "Система работает только на твоем ручном приводе. Ты и есть главный тормоз своего бизнеса, потому что боишься отпустить контроль.",
    icon: <Gauge className="w-6 h-6 text-gold" />,
    label: "BOTTLENECK",
  },
];

export default function Dashboard() {
  return (
    <section className="py-24 bg-carbon-light relative overflow-hidden border-t border-white/5">
      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5 animate-scanline bg-gradient-to-b from-transparent via-accent to-transparent h-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 tracking-tighter uppercase">
            ДЛЯ КОГО ЭТОТ СПРИНТ
          </h2>
          <p className="font-body text-grey text-lg max-w-xl">
            Только для тех, кто уже на вершине, но задыхается от трения.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                borderColor: "rgba(255, 69, 0, 0.5)",
                backgroundColor: "rgba(18, 18, 18, 1)",
                y: -5
              }}
              className="glass-card p-10 border border-white/5 relative group cursor-pointer transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-accent/20 group-hover:border-accent transition-colors" />
              
              <div className="flex justify-between items-start mb-16">
                <motion.div 
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index }}
                  className="p-4 bg-gold/10 rounded-sm"
                >
                  {card.icon}
                </motion.div>
                <span className="text-[10px] font-heading text-gold tracking-[0.2em] font-bold">{card.label}</span>
              </div>

              <h3 className="font-heading text-2xl font-bold mb-6 group-hover:text-accent transition-colors">
                {card.title}
              </h3>
              <p className="font-body text-grey leading-relaxed group-hover:text-white transition-colors">
                {card.description}
              </p>

              <div className="mt-12 h-[2px] bg-white/5 relative overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${60 + Math.random() * 30}%` }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="absolute inset-0 bg-accent shadow-[0_0_10px_#FF4500]" 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
