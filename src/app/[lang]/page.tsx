import Hero from "@/components/Hero";
import DiagnosticAudit from "@/components/DiagnosticAudit";
import SabotageMechanics from "@/components/SabotageMechanics";
import Science from "@/components/Science";
import ComparativeAnalysis from "@/components/ComparativeAnalysis";
import Author from "@/components/Author";
import Dashboard from "@/components/Dashboard";
import FAQ from "@/components/FAQ";
import FinalLaunch from "@/components/FinalLaunch";
import HorizontalScroll from "@/components/HorizontalScroll";
import DangerZone from "@/components/DangerZone";
import Footer from "@/components/Footer";

export default async function Home(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;
  return (
    <main className="bg-background min-h-screen">
      {/* 
        JTBD STRUCTURE:
        Block 1: HERO (Anomaly Detection)
        Block 2: THE BLUEPRINT LOGIC (Diagnostic Audit)
        Block 2.5: SYSTEM RESISTANCE (Sabotage Mechanics)
        Block 3: ZERO FRICTION (The Method - Science)
        Block 4: ABOUT AUTHOR (Chief Engineer)
        Block 5: TELEMETRY (Dashboard)
        Block 6: SHADOW LOGIC FAQ
        Block 7: FINAL CTA (Final Launch)
      */}
      <Hero />
      <DiagnosticAudit />
      <HorizontalScroll />
      <SabotageMechanics />
      <Science />
      <ComparativeAnalysis />
      <Author />
      <Dashboard />
      <FAQ />
      <DangerZone />
      <FinalLaunch />
      <Footer />
    </main>
  );
}
