import React from "react";
import {
  columns,
  leaderboard_entities,
} from "@/components/sections/admin/leaderboards/columns";
import { DataTable } from "@/components/sections/admin/leaderboards/data-table";
import { LeaderboardEntriesSchema } from "@/lib/validation/leaderboard-entries";


const page = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold">PD x CSC Toot Leaderboards</h1>
      <p>
        Here you can view the leaderboards for the PD x CSC Toot integration.
      </p>
      {/* <p>Last updated: 2 hours ago</p> */}

      {/* <DataTable columns={columns} data={mockData} /> */}
    </div>
  );
};

export default page;
