import BackgroundSvg from "@/components/shared/red-boxes-bg-svg";
import LeaderboardsContainer from "@/components/leaderboard-ui/lb-container";
import { GlassContainer } from "@/components/shared/glass-container";
import { X } from "lucide-react";
import Image from "next/image";

import { columns } from "@/components/leaderboard-ui/leaderboard-table/columns";
import { rankings } from "@/data/mockLeaderboard";
import { DataTable } from "../leaderboard-ui/leaderboard-table/data-table";
import { Leaderboard } from "@/type/zod/leaderboard";

import Script from "next/script";
import FacebookPostEmbed from "../leaderboard-ui/fb-embed";

// TODO: insert logic for fetching rankings here
async function getData(): Promise<Leaderboard[]> {
  return rankings;
}
const data = await getData();

export default function LeaderboardView() {
  return (
    // ! app/page.tsx -> may py-10 na classname hence -mb-10. remove if not the case anymore
    <main className="relative min-h-screen text-white overflow-hidden pt-8 -mb-10">
      <div className="absolute inset-0 flex items-center justify-center overflow-x-clip">
        <BackgroundSvg className="h-full w-auto overflow-x-clip" />
      </div>

      <div className="z-40">
        {/* HEADER */}
        {/* <header className="my-10 md:my-14 lb-content-width">
          <Navbar />
        </header> */}

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
            <GlassContainer className="rounded-[1.3rem] border-0 bg-black/40">
              <h2 className="shadow-2xl text-center my-2 md:my-3 text-2xl md:text-4xl font-bold bg-gradient-to-r from-white to-[#791212] bg-clip-text text-transparent">
                Leaderboard
              </h2>
            </GlassContainer>
            <DataTable
              columns={columns}
              data={data}
            />
          </LeaderboardsContainer>

          {/* CCS PAGE PROMOTION */}
          <GlassContainer className="rounded-none">
            <div className="my-5 md:my-10 lg:mb-20 lg:mt-12 flex justify-center flex-col items-center">
              <p className="text-sm md:text-xl mt-4 md:mt-0 mb-2">
                For updates, follow the official CCS Student Council Page!
              </p>
              <GlassContainer
                className={`p-3 md:p-5 flex justify-center md:mx-10 lg:mx-0 rounded-lg`}
              >
                <div className="flex justify-center">
                  <div className="flex justify-center flex-wrap lg:space-y-0 py-4 lg:py-0 gap-5">
                    {/* TODO: change links later */}
                    <span className="flex justify-center lg:-mb-16">
                      <FacebookPostEmbed url="https://www.facebook.com/photo/?fbid=802338978987202&set=a.208136178407488" />
                    </span>
                    <span className="flex justify-center lg:-mr-18 lg:mt-14">
                      <FacebookPostEmbed url="https://www.facebook.com/photo/?fbid=791025153451918&set=pb.100076333207528.-2207520000" />
                    </span>
                  </div>
                </div>
              </GlassContainer>
            </div>
          </GlassContainer>
        </section>
      </div>
    </main>
  );
}
