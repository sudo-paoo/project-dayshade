import React from "react";
import { GlassContainer } from "@/components/shared/glass-container";
import HomeHero from "@/components/sections/home/home-hero";
import { MonthlyShowcase } from "@/components/sections/home/monthly-showcase";
import { FeaturedProjects } from "@/components/sections/home/featured-projects";
import ConnectWithUsSection from "@/components/sections/home/work-with-us";
export default function Page() {
  return (
    <div className="min-h-screen p-4 md:p-16 bg-black text-white bg-[url('/assets/circles.png')] bg-cover pt-12 md:pt-16">
      <GlassContainer className="bg-black/50">
        {/* Hero Section */}
        <HomeHero />
        {/* Monthly Showcase Section */}
        <MonthlyShowcase />
        {/* Featured Projects Section */}
        <FeaturedProjects />
        {/* Connect With Us Section */}
        <ConnectWithUsSection />
      </GlassContainer>
    </div>
  );
}
