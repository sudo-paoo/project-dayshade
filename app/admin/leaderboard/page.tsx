import React from "react";
import {
  columns,
  leaderboard_entities,
} from "@/components/sections/admin/leaderboards/columns";
import { DataTable } from "@/components/sections/admin/leaderboards/data-table";

const mockData: leaderboard_entities[] = [
  {
    id: "1",
    rank: 1,
    name: "Alex Johnson",
    points: 2500,
  },
  {
    id: "2",
    rank: 2,
    name: "Sarah Williams",
    points: 2300,
  },
  {
    id: "3",
    rank: 3,
    name: "Michael Chen",
    points: 2100,
  },
  {
    id: "4",
    rank: 4,
    name: "Emma Davis",
    points: 1900,
  },
  {
    id: "5",
    rank: 5,
    name: "David Kim",
    points: 1800,
  },
  {
    id: "6",
    rank: 6,
    name: "Rachel Thompson",
    points: 1700,
  },
  {
    id: "7",
    rank: 7,
    name: "James Wilson",
    points: 1600,
  },
  {
    id: "8",
    rank: 8,
    name: "Lisa Garcia",
    points: 1500,
  },
  {
    id: "9",
    rank: 9,
    name: "Kevin Lee",
    points: 1400,
  },
  {
    id: "10",
    rank: 10,
    name: "Maria Rodriguez",
    points: 1300,
  },
];

const page = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold">PD x CSC Toot Leaderboards</h1>
      <p>
        Here you can view the leaderboards for the PD x CSC Toot integration.
      </p>
      <p>Last updated: 2 hours ago</p>

      <DataTable columns={columns} data={mockData} />
    </div>
  );
};

export default page;
