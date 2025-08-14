import React from "react";
import HomeHero from "@/components/sections/home/home-hero";
import { MonthlyShowcase } from "@/components/sections/home/monthly-showcase";
import { FeaturedProjects } from "@/components/sections/home/featured-projects";
import ProgrammersDenPage from "@/components/sections/home/work-with-us";
export default function Page() {
  return (
    <div className="min-h-screen pt-4 bg-black text-white bg-[url('/assets/circles.png')] bg-cover pt-20">
      {/* Hero Div*/}
      <HomeHero />
      {/* Sample Background for Transition */}
      {/* Projects Section */}
      <div className=" min-h-80 flex flex-col relative top-[-30px] justify-center items-center h-auto w-full py-8 bg-black bg-gradient-to-b from-black via-[#252323] to-black mask-y-from-90% mask-y-to-100%">
        <MonthlyShowcase />
        <FeaturedProjects />
      </div>
      {/* Programmers Den Section */}
      <ProgrammersDenPage />
    </div>
  );
}
