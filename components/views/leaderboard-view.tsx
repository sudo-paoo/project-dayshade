import BackgroundSvg from "@/components/shared/red-boxes-bg-svg";

import { columns } from "@/components/sections/leaderboard/leaderboard-table/columns";
import { DataTable } from "../sections/leaderboard/leaderboard-table/data-table";

import CSCPromotion from "../sections/leaderboard/csc-promotion";
import SubHeader from "../sections/leaderboard/sub-header";

export default function LeaderboardView() {
  return (
    <main className="relative min-h-screen z-30 text-white overflow-hidden pt-18 md:pt-24 pb-16 md:pb-32">
      <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-x-clip">
        <BackgroundSvg className="h-full w-auto overflow-x-clip" />
      </div>

      <div className="z-40">
        <section className="space-y-12 md:space-y-20 lg:space-y-24">
          {/* SUB-HEADER */}
          <SubHeader />

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
          <CSCPromotion />
        </section>
      </div>
    </main>
  );
}
