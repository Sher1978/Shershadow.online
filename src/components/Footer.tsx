"use client";

import { motion } from "framer-motion";
import { useDictionary } from "./DictionaryProvider";
import Link from "next/link";

export default function Footer() {
  const dict = useDictionary();
  const d = dict.Footer;

  return (
    <footer className="bg-carbon border-t border-white/5 py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-accent to-transparent opacity-20" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-6xl font-bold mb-12 tracking-widest uppercase">
            {d.title1} <span className="text-accent underline decoration-accent/20">{d.title2}</span>
          </h2>

          <Link href={`/${dict.lang}/sfitest`}>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(255, 69, 0, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-6 bg-accent text-white font-heading font-bold text-xl rounded-none transition-all mb-24 overflow-hidden"
            >
              <span className="relative z-10">{d.cta}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent-glow to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-[10px] font-heading text-grey tracking-widest uppercase">
            <p>{d.rights}</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-white transition-colors">{d.privacy}</a>
              <a href="#" className="hover:text-white transition-colors">{d.hq}</a>
              <a href="#" className="hover:text-white transition-colors">{d.protocol}</a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-danger via-accent to-danger opacity-20" />
    </footer>
  );
}
