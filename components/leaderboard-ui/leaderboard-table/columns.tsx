import { Leaderboard } from "@/type/zod/leaderboard";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Leaderboard>[] = [
  {
    accessorKey: "rank",
    header: "Rank",
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
