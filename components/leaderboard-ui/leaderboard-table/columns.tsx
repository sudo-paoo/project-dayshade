"use client";

import { Leaderboard } from "@/type/zod/leaderboard";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Leaderboard>[] = [
  {
    accessorKey: "rank",
    header: "Rank",
    cell: ({ getValue }) => {
      const rank = getValue<number>();
      if (rank === 1) return "🥇"; // Gold
      if (rank === 2) return "🥈"; // Silver
      if (rank === 3) return "🥉"; // Bronze
      return rank; // fallback to the number
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "points",
    header: "Points",
  },
];
