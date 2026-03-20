"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    q: "ПОЧЕМУ ИИ ОБЪЕКТИВНЕЕ ЧЕЛОВЕКА?",
    a: "ИИ не имеет 'Хранителя'. Он видит твои паттерны через данные, игнорируя социальные маски и попытки мозга оправдать саботаж.",
  },
  {
    q: "КАК СПРИНТ ОКУПАЕТСЯ ЧЕРЕЗ НЕДЕЛЮ?",
    a: "Когда ты перестаешь тратить 80% энергии на трение, твоя эффективность растет кратно. Высвобожденный ресурс мгновенно конвертируется в решения, которые ты откладывал месяцами.",
  },
  {
    q: "БЕЗОПАСНЫ ЛИ МОИ ДАННЫЕ?",
    a: "Мы используем стек PostgreSQL/Redis с полным шифрованием. Твоя Тень дешифруется только локально в рамках твоего Sprint-аккаунта.",
  },
  {
    q: "ЧЕМ ЭТО ОТЛИЧАЕТСЯ ОТ КОУЧИНГА?",
    a: "Коучинг работает с сознанием. Мы работаем с системной архитектурой твоего 'железа'. Это не разговор, это перепрошивка.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-carbon text-white border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 tracking-tighter uppercase">ТЕХНИЧЕСКАЯ СПЕЦИФИКАЦИЯ</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border-l border-white/10 pl-8"
            >
              <h3 className="font-heading text-lg font-bold mb-4 text-gold">{faq.q}</h3>
              <p className="font-body text-grey leading-relaxed italic">{faq.a}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 font-heading text-[10px] text-grey tracking-[0.5em] uppercase">
          <p>© 2026 SHER SHADOW CAPITAL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            <span>STK: NEXTJS/FRAMER/TAILWIND</span>
            <span>LOC: DUBAI DESERT HQ</span>
          </div>
        </div>
      </div>
    </section>
  );
}
