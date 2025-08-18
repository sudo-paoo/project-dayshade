"use client";

import React from "react";
import { columns, RecruitmentEntity } from "@/components/sections/admin/recruitments/column";
import { DataTable } from "@/components/sections/admin/recruitments/data-table";
import { Label } from "@/components/ui/label";

const mockData: RecruitmentEntity[] = [
  {
    id: "1",
    name: "John Doe",
    studentNum: 20231001,
    course: "BS Computer Science",
    YrLevel: "3rd Year",
    StudEmail: "john.doe@example.com",
    FBLink: "https://facebook.com/johndoe",
    team: "GameDev",
    status: "pending",
  },
  {
    id: "2",
    name: "Jane Smith",
    studentNum: 20231002,
    course: "BS Information Technology",
    YrLevel: "2nd Year",
    StudEmail: "jane.smith@example.com",
    FBLink: "https://facebook.com/janesmith",
    team: "MultiMedia",
    status: "accepted",
  },
  {
    id: "3",
    name: "Michael Johnson",
    studentNum: 20231003,
    course: "BS Computer Engineering",
    YrLevel: "4th Year",
    StudEmail: "michael.johnson@example.com",
    FBLink: "https://facebook.com/michaeljohnson",
    team: "GameDev",
    status: "rejected",
  },
  {
    id: "4",
    name: "Emily Davis",
    studentNum: 20231004,
    course: "BS Information Systems",
    YrLevel: "1st Year",
    StudEmail: "emily.davis@example.com",
    FBLink: "https://facebook.com/emilydavis",
    team: "MultiMedia",
    status: "pending",
  },
  {
    id: "5",
    name: "Daniel Garcia",
    studentNum: 20231005,
    course: "BS Computer Science",
    YrLevel: "3rd Year",
    StudEmail: "daniel.garcia@example.com",
    FBLink: "https://facebook.com/danielgarcia",
    team: "GameDev",
    status: "accepted",
  },
  {
    id: "6",
    name: "Sophia Martinez",
    studentNum: 20231006,
    course: "BS Information Technology",
    YrLevel: "2nd Year",
    StudEmail: "sophia.martinez@example.com",
    FBLink: "https://facebook.com/sophiamartinez",
    team: "MultiMedia",
    status: "pending",
  },
  {
    id: "7",
    name: "David Wilson",
    studentNum: 20231007,
    course: "BS Computer Science",
    YrLevel: "4th Year",
    StudEmail: "david.wilson@example.com",
    FBLink: "https://facebook.com/davidwilson",
    team: "GameDev",
    status: "rejected",
  },
  {
    id: "8",
    name: "Olivia Brown",
    studentNum: 20231008,
    course: "BS Information Systems",
    YrLevel: "1st Year",
    StudEmail: "olivia.brown@example.com",
    FBLink: "https://facebook.com/oliviabrown",
    team: "MultiMedia",
    status: "accepted",
  },
];

const Page = () => {
  return (
    <section className="container mx-auto py-10 space-y-6">

        <Label className="text-2xl font-bold">Recruitment</Label>
        {/* Future filter/search or add button goes here */}

          <DataTable columns={columns} data={mockData} />

    </section>
  );
};

export default Page;
