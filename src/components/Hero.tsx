"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Background Parallax & Zoom
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  
  // Opacity Transitions for Hierarchy
  const h1Opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const h1Scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  
  const h2Opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0, 1, 1]);
  const h2Scale = useTransform(scrollYProgress, [0.3, 0.6], [0.8, 1]);
  const h2Y = useTransform(scrollYProgress, [0.3, 0.6], [50, 0]);

  const ctaOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const ctaScale = useTransform(scrollYProgress, [0.6, 0.8], [0.9, 1]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#0A0A0C]">
      {/* Background Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div style={{ scale: bgScale }} className="absolute inset-0 z-0">
          <img
            src="/hero_final.png"
            alt="Cinematic Hypercar"
            className="w-full h-full object-cover"
          />
          {/* Vignette Overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,12,0.6)_60%,#0A0A0C_100%)] z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0C]/20 to-[#0A0A0C] z-10" />
        </motion.div>

        {/* Volumetric Smoke Particles */}
        {mounted && (
          <div className="absolute inset-0 z-20 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: `${Math.random() * 100}%`, y: "110%", opacity: 0 }}
                animate={{ 
                  y: ["110%", "-20%"],
                  opacity: [0, 0.2, 0],
                  scale: [1, 2, 4],
                  filter: ["blur(20px)", "blur(60px)", "blur(120px)"]
                }}
                transition={{ 
                  duration: 10 + Math.random() * 15, 
                  repeat: Infinity, 
                  delay: Math.random() * 10 
                }}
                className="absolute w-80 h-80 bg-white/5 rounded-full"
              />
            ))}
          </div>
        )}

        {/* Content Layers (Sticky) */}
        <div className="absolute inset-0 z-30 flex items-center justify-center px-6">
          <div className="container mx-auto text-center relative h-full flex flex-col items-center justify-center">
            
            {/* Block A: ILLUSION (Initial State) */}
            <motion.div
              style={{ opacity: h1Opacity, scale: h1Scale }}
              className="absolute inset-0 flex flex-col items-center justify-center space-y-8"
            >
              <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-[0.2em] leading-none text-white uppercase" style={{ fontFamily: "'Syncopate', sans-serif" }}>
                ИЛЛЮЗИЯ <br /> СКОРОСТИ.
              </h1>
              <p className="text-xl md:text-4xl font-light tracking-[0.3em] uppercase text-white/60" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Твои 1000 сил уходят в дым.
              </p>
            </motion.div>

            {/* Block B: REALIZATION (Scroll-triggered) */}
            <motion.div
              style={{ opacity: h2Opacity, scale: h2Scale, y: h2Y }}
              className="flex flex-col items-center space-y-12 max-w-5xl"
            >
              <h2 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase italic leading-tight tracking-tighter" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#FF0000" }}>
                Твой КПД — 5%, <br /> потому что ты <br /> едешь на ручнике.
              </h2>
              
              <p className="text-lg md:text-2xl text-[#8E8E93] max-w-3xl font-medium" style={{ fontFamily: "'Manrope', sans-serif" }}>
                Пока конкуренты скользят по льду, ты жжешь тормозные колодки собственного бизнеса. Пора отпустить тормоз.
              </p>

              {/* Pulsating CTA */}
              <motion.div style={{ opacity: ctaOpacity, scale: ctaScale }} className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-16 py-8 bg-transparent border-2 border-[#FF0000] text-white font-bold tracking-widest uppercase overflow-hidden transition-all"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <motion.div 
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute inset-0 bg-[#FF0000]/30 blur-2xl" 
                  />
                  <span className="relative z-10 text-xl text-white">Пройти Shadow Audit</span>
                  <div className="absolute inset-0 border-2 border-[#FF0000] opacity-0 group-hover:opacity-100 transition-opacity animate-pulse shadow-[0_0_30px_#FF0000]" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: h1Opacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-4"
        >
          <div className="w-px h-24 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
