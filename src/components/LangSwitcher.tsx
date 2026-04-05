"use client";

import { usePathname, useRouter } from "next/navigation";
import { i18n } from "@/i18n-config";
import { motion } from "framer-motion";

export default function LangSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const redirectedPathname = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const currentLocale = pathname.split("/")[1] || i18n.defaultLocale;

  return (
    <div className="fixed top-6 right-6 z-[100] flex gap-2 p-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full">
      {i18n.locales.map((locale) => {
        const isActive = currentLocale === locale;
        return (
          <button
            key={locale}
            onClick={() => router.push(redirectedPathname(locale))}
            className={`
              relative px-3 py-1 text-[10px] font-mono uppercase tracking-widest transition-colors
              ${isActive ? "text-black" : "text-white/50 hover:text-white"}
            `}
          >
            {isActive && (
              <motion.div
                layoutId="activeLocale"
                className="absolute inset-0 bg-neon-scan rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{locale}</span>
          </button>
        );
      })}
    </div>
  );
}
