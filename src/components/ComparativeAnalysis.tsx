"use client";

import { motion } from "framer-motion";
import { Shield, Target, Minus } from "lucide-react";

const comparisons = [
  {
    title: "Конвенциональная Терапия",
    symbol: "🚫",
    items: [
      {
        primary: "Поиск причин в прошлом",
        secondary: "Копание в детстве не меняет текущие нейронные цепочки саботажа здесь и сейчас.",
      },
      {
        primary: "Бессрочный процесс",
        secondary: "Отсутствие дедлайна позволяет психике годами имитировать работу без результата.",
      },
      {
        primary: "Интеллектуальный инсайт",
        secondary: "Понимание проблемы не дает инструментов для её технического устранения.",
      }
    ],
    verdict: "АНАЛИЗ БЕЗ ПЕРЕСБОРКИ. СИСТЕМА ОСТАЕТСЯ В СТАРОЙ АРХИТЕКТУРЕ.",
    isShadow: false
  },
  {
    title: "Коучинг и Тренинги",
    symbol: "🚫",
    items: [
      {
        primary: "Внешние инструменты",
        secondary: "Попытка внедрить навыки на старый фундамент приводит к быстрому отторжению.",
      },
      {
        primary: "Ставка на силу воли",
        secondary: "Ресурс воли ограничен — система всегда возвращает вас в точку комфорта.",
      },
      {
        primary: "Дофаминовая ловушка",
        secondary: "Временный подъем на тренинге сменяется еще более глубоким откатом.",
      }
    ],
    verdict: "ВНЕШНИЙ ЛОСК. СИСТЕМА «ХРАНИТЕЛЬ» БЫСТРО ПОДАВЛЯЕТ ЭТОТ ИМПУЛЬС.",
    isShadow: false
  },
  {
    title: "Shadow Sprint (SFI)",
    symbol: "⚡️",
    items: [
      {
        primary: "Инженерный протокол",
        secondary: "Мы не мотивируем, мы пересобираем архитектуру вашей личности под новые задачи.",
      },
      {
        primary: "30-дневный Спринт",
        secondary: "Сверхкороткий цикл изменений не дает защитным механизмам успеть среагировать.",
      },
      {
        primary: "Движение «Ниже радаров»",
        secondary: "Методология обходит сопротивление Эго, делая квантовый скачок естественным.",
      }
    ],
    verdict: "ZERO FRICTION. УСТОЙЧИВЫЙ ПЕРЕХОД НА НОВЫЙ УРОВЕНЬ ДОХОДА И ЭНЕРГИИ.",
    isShadow: true
  }
];

export default function ComparativeAnalysis() {
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
          SYSTEM_AUDIT // THE_ILLUSION_OF_CHOICE
        </motion.p>
        <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-8" style={{ fontFamily: "'Syncopate', sans-serif" }}>
          Иллюзия <span className="text-white/20">выбора</span>
        </h2>
        <p className="text-white/40 max-w-2xl mx-auto font-light leading-relaxed text-lg lg:text-xl">
          Почему классические методы работы с состоянием и бизнесом <span className="text-white/80 font-medium">НЕ ДАЮТ РЕЗУЛЬТАТА</span> на уровне <span className="text-white/80 font-medium">СВЕРХ-ЗАДАЧ</span>. 
          Выбирай не между «лучшим», а между <span className="text-gold/90 font-medium tracking-wide italic">«РАБОТАЮЩИМ»</span>.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
        {comparisons.map((item, index) => (
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
              {item.items.map((point, pIdx) => (
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
                <label className="text-[9px] font-mono text-white/40 uppercase tracking-[0.3em]">Вердикт_системы</label>
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
                  Shadow_Protocol // Comparative_Matrix // v1.10
              </span>
          </div>
      </div>

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </section>
  );
}
