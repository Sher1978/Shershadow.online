"use client";

import { motion } from "framer-motion";
import { Shield, Target, Minus } from "lucide-react";
import { useDictionary } from "./DictionaryProvider";

export default function ComparativeAnalysis() {
  const dict = useDictionary();
  const d = dict.Comparative;

  const comparisons = [
    {
      title: d.column1.title,
      symbol: "🚫",
      items: d.column1.items,
      verdict: d.column1.verdict,
      isShadow: false
    },
    {
      title: d.column2.title,
      symbol: "🚫",
      items: d.column2.items,
      verdict: d.column2.verdict,
      isShadow: false
    },
    {
      title: d.column3.title,
      symbol: "⚡️",
      items: d.column3.items,
      verdict: d.column3.verdict,
      isShadow: true
    }
  ];

  return (
    <section className="relative bg-[#020202] py-24 px-4 overflow-hidden border-t border-white/5">
      {/* Background Gradients for visibility */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/10 blur-[120px] rounded-full pointer-events-none opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-scan/10 blur-[120px] rounded-full pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10 text-center mb-20 px-4">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gold/60 font-mono text-[10px] tracking-[0.4em] uppercase mb-4"
        >
          {d.auditLabel}
        </motion.p>
        <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-8" style={{ fontFamily: "'Syncopate', sans-serif" }}>
          {d.title}
        </h2>
        <p 
          className="text-white/40 max-w-2xl mx-auto font-light leading-relaxed text-lg lg:text-xl"
          dangerouslySetInnerHTML={{ __html: d.subTitle }}
        />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
        {comparisons.map((item: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`relative p-8 lg:p-10 border rounded-sm flex flex-col h-full bg-[#0c0c0c] backdrop-blur-md ${item.isShadow ? 'border-gold/30 shadow-[0_0_80px_rgba(212,175,55,0.07)]' : 'border-white/10'} transition-all duration-500`}
          >
            {item.isShadow && (
              <div className="absolute -top-px left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-100" />
            )}
            
            <div className="flex items-center gap-5 mb-12">
              <div className={`w-12 h-12 flex items-center justify-center rounded-sm shrink-0 ${item.isShadow ? 'bg-gold/10' : 'bg-white/5'}`}>
                 {item.isShadow ? <Target className="w-6 h-6 text-gold" /> : <Minus className="w-6 h-6 text-white/20" />}
              </div>
              <h3 className={`text-base font-bold tracking-[0.2em] uppercase leading-tight ${item.isShadow ? 'text-gold' : 'text-white/90'}`}>
                {item.title}
              </h3>
            </div>

            <div className="space-y-10 mb-16 flex-grow">
              {item.items.map((point: any, pIdx: number) => (
                <div key={pIdx} className="flex gap-5 relative opacity-90">
                  <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full ${item.isShadow ? 'bg-gold/15' : 'bg-white/10'}`}>
                    <span className="text-base">
                        {item.symbol}
                    </span>
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold uppercase tracking-widest mb-1.5 ${item.isShadow ? 'text-white' : 'text-white/80'}`}>
                      {point.primary}
                    </h4>
                    <p className="text-[11px] text-white/40 font-light leading-relaxed max-w-[240px]">
                      {point.secondary}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className={`mt-auto pt-8 border-t ${item.isShadow ? 'border-gold/20' : 'border-white/5'}`}>
              <div className="flex items-center gap-3 mb-4 opacity-50">
                <div className={`w-1.5 h-1.5 rounded-full ${item.isShadow ? 'bg-gold animate-pulse shadow-[0_0_8px_rgba(255,184,0,1)]' : 'bg-white'}`} />
                <label className="text-[9px] font-mono text-white/40 uppercase tracking-[0.3em]">{d.verdictLabel}</label>
              </div>
              <p className={`text-xs font-bold uppercase leading-relaxed tracking-widest ${item.isShadow ? 'text-gold' : 'text-white/50'}`}>
                {item.verdict}
              </p>
            </div>

            {item.isShadow && (
              <div className="absolute top-6 right-6 pointer-events-none">
                <div className="relative">
                  <div className="absolute inset-0 bg-gold blur-[12px] opacity-20 animate-pulse" />
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-50"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center relative z-10">
          <div className="inline-flex items-center gap-6 px-10 py-5 border border-white/15 bg-white/[0.05] rounded-full backdrop-blur-md">
              <Shield className="w-4 h-4 text-gold/60" />
              <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.5em]">
                  {d.protocolLabel}
              </span>
          </div>
      </div>

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </section>
  );
}
