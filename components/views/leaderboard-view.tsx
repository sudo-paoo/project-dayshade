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
    <main className="relative min-h-screen z-30 text-white overflow-hidden pt-18 md:pt-24 pb-16 md:pb-32">
      <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-x-clip">
        <BackgroundSvg className="h-full w-auto overflow-x-clip" />
      </div>

      <div className="z-40">
        <section className="space-y-12 md:space-y-20 lg:space-y-24">
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
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-[#791212] bg-clip-text text-transparent">
                QuiCCStions Overdrive
              </h1>
              <p className="md:text-lg">Check who’s winning the race!</p>
            </div>
          </GlassContainer>

          {/* LEADERBOARD */}
          <div className="lb-content-width">
            <div className="lg:mx-20">
              <h2 className="shadow-2xl text-center my-2 md:my-3 text-2xl md:text-4xl font-bold text-white z-50">
                Leaderboard
              </h2>
              <DataTable
                columns={columns}
                data={data}
              />
            </div>
          </div>

          {/* CCS PAGE PROMOTION */}
          <GlassContainer className="rounded-none">
            <div className="my-5 md:my-10 lg:mb-20 lg:mt-12 flex justify-center flex-col items-center">
              <p className="text-base md:text-lg mb-2">
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
