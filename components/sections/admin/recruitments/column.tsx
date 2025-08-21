"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// This type is used to define the shape of our data.
export type RecruitmentEntity = {
  id: string;
  name: string;
  studentNum: number;
  course: string;
  YrLevel: string;
  StudEmail: string;
  FBLink: string;
  team: string;
  status: "pending" | "accepted" | "rejected";
};

export const columns: ColumnDef<RecruitmentEntity>[] = [
  { accessorKey: "rowNumber",
    header: "#",
    cell: ({row}) => row.index + 1,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "studentNum",
    header: "Student Number",
  },
  {
    accessorKey: "course",
    header: "Course",
  },
  {
    accessorKey: "YrLevel",
    header: "Year Level",
  },
  {
    accessorKey: "StudEmail",
    header: "Student Email",
  },
  {
    accessorKey: "FBLink",
    header: "FB Link",
  },
  {
    accessorKey: "team",
    header: "Team",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const currentStatus = row.getValue("status") as RecruitmentEntity["status"];

      return (
        <Select defaultValue={currentStatus}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="accepted">Accepted</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      );
    },
  },
];
