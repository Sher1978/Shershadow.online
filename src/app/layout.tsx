import type { Metadata } from "next";
import { Inter, Syncopate } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark h-full">
      <body className={`${inter.variable} ${syncopate.variable} min-h-full bg-carbon text-white antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
