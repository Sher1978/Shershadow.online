"use client";

import Hero from "@/components/Hero";
import ShadowTax from "@/components/ShadowTax";
import Dashboard from "@/components/Dashboard";
import Science from "@/components/Science";
import Superpower from "@/components/Superpower";
import HorizontalScroll from "@/components/HorizontalScroll";
import DangerZone from "@/components/DangerZone";
import Author from "@/components/Author";
import SocialProof from "@/components/SocialProof";
import FinalLaunch from "@/components/FinalLaunch";
import FAQ from "@/components/FAQ";
import Separator from "@/components/Separator";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <ShadowTax />
      <Science />
      <Dashboard />
      <Separator text="TRANSITION TO ACCELERATION" />
      <Superpower />
      <Separator text="THE SPRINT LOGIC" />
      <HorizontalScroll />
      <Separator text="THE RISK ARCHITECTURE" />
      <DangerZone />
      <Author />
      <SocialProof />
      <FinalLaunch />
      <FAQ />
    </main>
  );
}
