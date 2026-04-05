import type { Metadata } from "next";
import { Inter, Syncopate } from "next/font/google";
import "../globals.css";
import { getDictionary } from "@/dictionaries/get-dictionary";
import { Locale } from "@/i18n-config";
import { DictionaryProvider } from "@/components/DictionaryProvider";
import LangSwitcher from "@/components/LangSwitcher";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const syncopate = Syncopate({
  variable: "--font-syncopate",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Sher Shadow Capital | Zero Friction",
  description: "Elite business consulting for those who already at the top but suffocating from friction.",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ru" }];
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as Locale;
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang} className="dark h-full">
      <body className={`${inter.variable} ${syncopate.variable} min-h-full bg-carbon text-white antialiased`}>
        <DictionaryProvider dictionary={dictionary}>
          <LangSwitcher />
          {props.children}
        </DictionaryProvider>
      </body>
    </html>
  );
}
