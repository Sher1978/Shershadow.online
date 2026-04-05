"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useDictionary } from "./DictionaryProvider";

export default function DangerZone() {
  const dict = useDictionary();
  const d = dict.DangerZone;
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.6, 0.9],
    ["#000000", "#3E0000", "#1A0000", "#000000"]
  );

  const stage1Opacity = useTransform(scrollYProgress, [0.05, 0.2, 0.35], [0.1, 1, 0.1]);
  const stage2Opacity = useTransform(scrollYProgress, [0.4, 0.55, 0.7], [0.1, 1, 0.1]);
  const stage3Opacity = useTransform(scrollYProgress, [0.75, 0.9, 1.0], [0.1, 1, 1]);
  
  // Ruptured loop logic: circle that gaps open as you scroll
  const dashOffset = useTransform(scrollYProgress, [0, 1], [1885, 1300]); // 2*PI*300 is ~1885

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const opacities = [stage1Opacity, stage2Opacity, stage3Opacity];

  return (
    <section ref={containerRef} className="relative py-12 md:py-24 overflow-hidden h-[150vh] md:h-[200vh]">
      <motion.div 
        style={{ backgroundColor }}
        className="absolute inset-0 z-0"
      />

      {/* Decorative Ruptured Loop Graphic */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none" className="opacity-20">
          <motion.circle 
            cx="400" 
            cy="400" 
            r="300" 
            stroke="url(#danger_gradient)" 
            strokeWidth="4" 
            strokeLinecap="round"
            strokeDasharray="1885"
            style={{ strokeDashoffset: dashOffset }}
            className="rotate-[-90deg] origin-center"
          />
          <defs>
            <linearGradient id="danger_gradient" x1="400" y1="100" x2="400" y2="700" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF0000" />
              <stop offset="1" stopColor="#8B0000" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="sticky top-0 h-screen z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center">
        <motion.div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-7xl font-bold mb-12 text-white leading-none tracking-tighter uppercase italic">
            {d.title1} <br />
            <span className="text-danger-bright underline decoration-white/10">{d.title2}</span>
          </h2>
          
          <div className="space-y-16">
            <p 
              className="font-body text-xl md:text-2xl font-light text-white/80 leading-tight"
              dangerouslySetInnerHTML={{ __html: d.desc1 }}
            />
            
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
               {d.steps.map((stepText: string, i: number) => (
                 <div key={i} className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                   <motion.div style={{ opacity: opacities[i] }} className="text-center group">
                     <div className={`mb-4 font-heading text-4xl transition-colors ${i === 0 ? 'text-white/20 group-hover:text-white' : i === 1 ? 'text-danger-bright/20 group-hover:text-danger-bright' : 'text-danger/20 group-hover:text-danger'}`}>
                       0{i + 1}
                     </div>
                     <span className={`font-heading text-sm tracking-widest uppercase font-bold ${i === 0 ? 'text-white' : i === 1 ? 'text-danger-bright' : 'text-danger'}`}>
                       {stepText}
                     </span>
                   </motion.div>
                   {i < d.steps.length - 1 && (
                     <div className="hidden md:flex items-center text-white/10 text-2xl">→</div>
                   )}
                 </div>
               ))}
            </div>

            <div className="space-y-4">
              <p className="font-body text-2xl md:text-4xl font-bold text-white uppercase italic tracking-tighter">
                {d.resultTitle}
              </p>
              <p className="font-body text-lg md:text-xl text-danger-bright font-medium max-w-2xl mx-auto border-t border-danger-bright/20 pt-6">
                {d.resultDesc}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Extreme Sparks for Impact */}
      {mounted && [...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0], 
            x: [0, (Math.random() - 0.5) * 800], 
            y: [0, -Math.random() * 600],
            scale: [0, 1.5, 0]
          }}
          transition={{ duration: 1.5 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          className="absolute w-[2px] h-[2px] bg-danger-bright rounded-full pointer-events-none shadow-[0_0_10px_#FF0000]"
          style={{ 
            left: `${Math.random() * 100}%`, 
            top: `${Math.random() * 100 + 10}%`
          }}
        />
      ))}
    </section>
  );
}
