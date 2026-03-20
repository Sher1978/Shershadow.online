"use client";

import { motion } from "framer-motion";

interface SeparatorProps {
  text?: string;
  className?: string;
}

export default function Separator({ text, className = "" }: SeparatorProps) {
  return (
    <div className={`py-32 bg-black flex items-center justify-center border-y border-white/5 ${className}`}>
      {text && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          className="font-heading text-xs tracking-[0.8em] text-white uppercase italic"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}
