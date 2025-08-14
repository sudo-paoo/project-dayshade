import Navbar from "@/components/global/navbar";
import BackgroundSvg from "@/components/leaderboards-ui/bg-svg";
import LeaderboardsContainer from "@/components/leaderboards-ui/lb-container";
import { GlassContainer } from "@/components/shared/glass-container";
import { X } from "lucide-react";
import Image from "next/image";

import {
  columns,
  Leaderboard,
} from "@/components/leaderboards-ui/leaderboards-table/columns";
import { rankings } from "@/data/mockLeaderboards";
import { DataTable } from "../leaderboards-ui/leaderboards-table/data-table";

// TODO: insert logic for fetching rankings here
async function getData(): Promise<Leaderboard[]> {
  return rankings;
}
const data = await getData();

export default function LeaderboardsView() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      <div className="absolute inset-0 -z-40  bg-pd-black flex items-center justify-center overflow-x-clip">
        <BackgroundSvg className="h-full w-auto overflow-x-clip" />
      </div>

      <div className="z-40">
        {/* HEADER */}
        <header className="my-10 md:my-14 lb-content-width">
          {/* NAV CONTAINER */}
          <Navbar />
        </header>

        <section className="space-y-12 lg:space-y-28 mb-16 md:mb-32">
          {/* SUB-HEADER */}
          <GlassContainer className="pb-9 pt-8 lb-glass-plus">
            <div className={`space-y-2 lb-content-width`}>
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
          <LeaderboardsContainer
            topText={{
              content: "Last updated: August 14, 2025",
              align: "right",
            }}
          >
            <GlassContainer className="rounded-[1.3rem] mx-2 md:mx-5 my-3 md:my-7 border-0 bg-black/40">
              <h2 className="shadow-2xl text-center my-2 md:my-3 text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-[#791212] bg-clip-text text-transparent">
                Leaderboards
              </h2>
            </GlassContainer>
            <DataTable
              columns={columns}
              data={data}
            />
          </LeaderboardsContainer>

          {/* CCS PAGE PROMOTION */}
          <LeaderboardsContainer
            topText={{
              content:
                "For updates, follow the official CCS Student Council Page!",
              align: "left",
            }}
          >
            <div>FB EMBED</div>
          </LeaderboardsContainer>
        </section>
      </div>
    </main>
  );
}
