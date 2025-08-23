import { columns } from "@/components/sections/leaderboard/leaderboard-table/columns";
import { DataTable } from "@/components/sections/leaderboard/leaderboard-table/data-table";
import { getEntries } from "@/lib/data/leaderboard-queries";
import { Suspense } from "react";

export default async function LeaderboardView() {
  const leaderboard_entries = await getEntries();
  return (
    <div className="lb-content-width">
      <div className="lg:mx-20">
        <h2 className="shadow-2xl text-center my-2 md:my-3 text-2xl md:text-4xl font-bold text-white z-50">
          Leaderboard
        </h2>
        <Suspense>
          <DataTable
            columns={columns}
            data={leaderboard_entries}
            dateUpdated={new Date().toLocaleDateString()}
          />
        </Suspense>
      </div>
    </div>
  );
}
