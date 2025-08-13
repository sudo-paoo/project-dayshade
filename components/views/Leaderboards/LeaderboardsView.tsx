"use client";

import Navbar from "@/components/global/navbar";
import BackgroundSvg from "@/components/leaderboards-ui/backgroundSvg";
import { GlassContainer } from "@/components/shared/glass-container";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function LeaderboardsView() {
  const [date, setDate] = useState<Date>(new Date());

  const section: string = "pb-9 pt-8 rounded-none";
  const sectionContentWidth: string = "max-w-7xl mx-auto px-8";
  const glassEffect: string = "backdrop-blur-xl bg-black/10";

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      <div className="absolute inset-0 -z-40  bg-pd-black flex items-center justify-center overflow-x-clip">
        <BackgroundSvg className="h-full w-auto overflow-x-clip" />
      </div>

      <div className="z-40">
        {/* HEADER */}
        <header className="my-12 md:my-16">
          <div className={`${sectionContentWidth}`}>
            {/* NAV CONTAINER */}
            <Navbar />
          </div>
        </header>

        <section className="space-y-16 lg:space-y-32 mb-16 md:mb-32">
          {/* SUB-HEADER */}
          <GlassContainer className={`${section} ${glassEffect}`}>
            <div className={`space-y-2 ${sectionContentWidth}`}>
              <span className="flex items-center">
                <Image
                  src="/assets/pd-logo.png"
                  alt="PD Logo"
                  width={52}
                  height={35}
                  className="rounded-lg"
                />
                <X className="text-red-700" />
                <Image
                  src="/assets/csc-logo.png"
                  alt="CSC Logo"
                  width={52}
                  height={35}
                  className="rounded-lg"
                />
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white to-[#791212] bg-clip-text text-transparent">
                QuiCCStions Overdrive
              </h1>
              <p className="md:text-xl lg:text-2xl">
                Check who’s winning the race!
              </p>
            </div>
          </GlassContainer>

          {/* LEADERBOARD */}
          <GlassContainer className={`${section} ${glassEffect}`}>
            <div className={`my-5 lg:my-8 ${sectionContentWidth}`}>
              <p className="flex justify-end text-sm md:text-xl mt-4 md:mt-0 mb-2 md:">
                Last updated: {date.toLocaleString()}
              </p>
              <GlassContainer
                className={`rounded-4xl h-[20rem] lg:h-[38rem] bg-black/50`}
              >
                <GlassContainer className="rounded-[1.3rem] mx-2 md:mx-5 my-3 md:my-6 border-0 bg-black/10">
                  <h2 className="text-center my-2 md:my-4 text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-[#791212] bg-clip-text text-transparent">
                    Leaderboards
                  </h2>
                </GlassContainer>
              </GlassContainer>
            </div>
          </GlassContainer>

          {/* CCS PAGE PROMOTION */}
          <GlassContainer className={`${section} ${glassEffect} relative`}>
            <div className={`my-5 lg:my-8 relative ${sectionContentWidth}`}>
              <p className="text-sm md:text-xl mt-4 md:mt-0 mb-2">
                For updates, follow the official CCS Student Council Page!
              </p>
              <GlassContainer
                className={`rounded-4xl h-[20rem] lg:h-[35rem] bg-black/50`}
              >
                <div>FB EMBED</div>
              </GlassContainer>
            </div>
          </GlassContainer>
        </section>
      </div>
    </main>
  );
}
