"use client"

import AboutSection from "@/components/AboutSection/AboutSection";
import MainSection from "@/components/MainSection/MainSection";
import MySkillsSection from "@/components/MySkillsSection/MySkillsSection";
import PortfolioSection from "@/components/PortfolioSection/PortfolioSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start">
      <MainSection />
      <AboutSection />
      <MySkillsSection />
      <PortfolioSection />
    </main>
  );
}
