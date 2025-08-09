"use client";

import Navbar from "@/components/global/navbar";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function LeaderboardsView() {
  const [date, setDate] = useState<Date>(new Date());

  const sectionPadding: string = "px-6 lg:px-16 pb-6 md:pb-10 py-4 md:py-6";
  const sectionContentWidth: string = "max-w-7xl mx-auto";
  const red: string = "#541c1c";
  const lightgrey: string = "#787878";
  const darkgrey: string = "#39393B";
  const glassEffect: string = "backdrop-blur-md bg-white/10 shadow-md";

  return (
    <main
      className="min-h-screen text-white"
      style={{
        background: `linear-gradient(to bottom, ${red} 0%, var(--color-pd-black) 105%)`,
      }}
    >
      {/* HEADER */}
      <header className="pb-8.5 md:pb-9 pt-1 px-6 md:px-8 lg:px-16">
        <div className={`${sectionContentWidth}`}>
          {/* NAV CONTAINER */}
          <Navbar />
        </div>
      </header>

      {/* SUB-HEADER */}
      <section
        className={`bg-gradient-to-r from-[#787878] to-[#39393B] ${sectionPadding}`}
      >
        <div className={`md:space-y-1 ${sectionContentWidth}`}>
          <span className="flex items-center">
            <Image
              src="/assets/pd-logo.png"
              alt="PD Logo"
              width={52}
              height={35}
              className="rounded-lg"
            />
            <X className="text-black" />
            <Image
              src="/assets/csc-logo.png"
              alt="PD Logo"
              width={52}
              height={35}
              className="rounded-lg"
            />
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Leaderboards
          </h1>
          <p className="md:text-xl lg:text-2xl">
            Check who’s winning the race!
          </p>
        </div>
      </section>

      {/* LEADERBOARD */}
      <section className={`${sectionPadding}`}>
        <div className={`md:mt-12 lg:mt-18 ${sectionContentWidth}`}>
          <p className="flex justify-end text-sm md:text-xl mt-4 md:mt-0">
            Last updated: {date.toLocaleString()}
          </p>
          <div
            className={`bg-[#787878] rounded-lg py-4 px-6 h-[20rem] lg:h-[35rem]`}
          >
            -asdas
          </div>
        </div>
      </section>

      {/* CCS Page Promotion */}
      <div>
        <svg
          viewBox="0 0 1439 181"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="horizontalGradient"
              x1="0"
              y1="0"
              x2="1439"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0"
                stopColor={`#787878`}
              />
              <stop
                offset="1"
                stopColor={`#39393B`}
              />
            </linearGradient>
          </defs>
          <path
            d="M1439 0V181H-1C628.435 177.093 1001.3 170.643 1439 0Z"
            fill="url(#horizontalGradient)"
          />
        </svg>

        <section
          className={`${sectionPadding}`}
          style={{
            background: `linear-gradient(to right, #787878, #39393B)`,
          }}
        >
          <div className={`md:px-10 ${sectionContentWidth}`}>
            <p className="md:text-xl font-bold">
              For updates, follow the official CCS Student Council Page!
            </p>
            <div className="bg-white py-4 px-6 h-[20rem] lg:h-[35rem]">-</div>
          </div>
        </section>

        <svg
          viewBox="0 0 1440 199"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="horizontalGradient2"
              x1="0"
              y1="0"
              x2="1440"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0"
                stopColor={`#787878`}
              />
              <stop
                offset="1"
                stopColor={`#39393B`}
              />
            </linearGradient>
          </defs>
          <path
            d="M274.031 33.7476C110.395 21.4591 5.1637 125.66 -2 199V0H1440C1391.56 28.3219 1251.23 130.513 1057.38 73.5002C863.787 16.5641 674.248 59.7884 584.755 104.014C493.51 149.106 446.635 46.7095 274.031 33.7476Z"
            fill="url(#horizontalGradient2)"
          />
        </svg>
      </div>
    </main>
  );
}
