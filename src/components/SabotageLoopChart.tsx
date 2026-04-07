"use client";

import { motion } from "framer-motion";

export default function SabotageLoopChart() {
  return (
    <div className="relative w-full aspect-[21/9] md:aspect-[3/1] bg-black/40 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm group">
      {/* Grid Background */}
      <div className="absolute inset-0 scanner-grid opacity-10" />
      
      {/* Axis Lines */}
      <div className="absolute left-0 w-full top-1/2 h-px bg-white/10" /> {/* Zero Line */}
      <div className="absolute bottom-0 left-12 top-0 w-px bg-white/10" /> {/* Y Axis */}

      {/* Zones Labels */}
      <div className="absolute top-4 left-16 font-mono text-[8px] text-neon-scan opacity-40 uppercase tracking-widest">
        Growth_Vector // Stage 01
      </div>
      <div className="absolute bottom-4 right-16 font-mono text-[8px] text-red-500 opacity-40 uppercase tracking-widest text-right">
        System_Failure // Rollback
      </div>

      <svg
        viewBox="0 0 1000 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-full p-8 md:p-12"
      >
        {/* Baseline (Start 0) */}
        <line x1="50" y1="200" x2="150" y2="200" stroke="white" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />

        {/* The Path: (0,200) -> (300, 50) [Peak] -> (600, 350) [Crash] -> (950, 280) [New Lower Zero] */}
        {/* Using a Cubic Bezier for smooth sine-like curve */}
        <motion.path
          d="M 50 200 
             C 150 200, 200 50, 350 50
             C 500 50, 600 350, 750 350
             C 850 350, 900 280, 980 280"
          stroke="url(#pathGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
        />

        {/* Glow Follower */}
        <motion.circle
          r="6"
          fill="#00F0FF"
          filter="blur(4px)"
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: "100%" }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
          style={{ offsetPath: "path('M 50 200 C 150 200, 200 50, 350 50 C 500 50, 600 350, 750 350 C 850 350, 900 280, 980 280')" }}
        />

        {/* Definitions for Gradients */}
        <defs>
          <linearGradient id="pathGradient" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00F0FF" /> {/* Start Green/Neon */}
            <stop offset="40%" stopColor="#00F0FF" /> {/* Peak Green */}
            <stop offset="60%" stopColor="#FF0000" /> {/* Crash Red */}
            <stop offset="100%" stopColor="#FF0000" stopOpacity="0.5" /> {/* Finish Low Red */}
          </linearGradient>
        </defs>

        {/* Markers */}
        {/* Start Point */}
        <circle cx="50" cy="200" r="4" fill="white" />
        <text x="60" y="190" fill="white" fontSize="12" className="font-mono opacity-50 uppercase">Zero_Point</text>

        {/* Peak Point */}
        <circle cx="350" cy="50" r="3" fill="#00F0FF" />
        <text x="360" y="45" fill="#00F0FF" fontSize="12" className="font-mono uppercase">Illusion_of_Growth</text>

        {/* Crash Point */}
        <circle cx="750" cy="350" r="3" fill="#FF0000" />
        <text x="760" y="370" fill="#FF0000" fontSize="12" className="font-mono uppercase">System_Crash</text>

        {/* New Zero Point */}
        <circle cx="980" cy="280" r="4" fill="white" />
        <text x="820" y="270" fill="white" fontSize="12" className="font-mono opacity-50 uppercase text-right">New_Entropy_Level</text>
      </svg>

      {/* Decorative HUD Details */}
      <div className="absolute top-4 right-4 flex gap-2">
        <div className="w-1 h-4 bg-neon-scan/20" />
        <div className="w-1 h-4 bg-neon-scan/40" />
        <div className="w-1 h-4 bg-neon-scan" />
      </div>

      <div className="absolute bottom-4 left-6 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="font-mono text-[10px] text-white/40 uppercase tracking-tighter">Negative_Delta_Detected</span>
      </div>
    </div>
  );
}
