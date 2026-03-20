"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/proof_1.png", alt: "Hypercar cockpit" },
  { src: "/proof_2.png", alt: "Luxury watch" },
  { src: "/proof_3.png", alt: "Private jet briefing" },
  { src: "/proof_4.png", alt: "Dubai night speed" },
  { src: "/hero.png", alt: "Dubai Vibes" },
  { src: "/dashboard.png", alt: "AI Dashboard" },
  { src: "/author.png", alt: "Sherlock Dubai" },
  { src: "/hero_final.png", alt: "Bugatti Power" },
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-carbon text-white border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 tracking-tighter uppercase">ГАЛЕРЕЯ ПРОЯВЛЕННОСТИ</h2>
          <p className="font-body text-grey max-w-xl italic border-l-2 border-gold pl-6">
            Масштаб, который становится естественным. Энергия, которая уходит в результат, а не в борьбу.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden group border border-white/5"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
