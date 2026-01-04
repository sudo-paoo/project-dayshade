import React from "react";
import { columns } from "@/components/sections/admin/recruitments/column";
import { DataTable } from "@/components/sections/admin/recruitments/data-table";
import { Label } from "@/components/ui/label";
import { getMembers } from "@/lib/members/getMembers";

const Page = async () => {
  const members = await getMembers();

  return (
    <section className="container mx-auto py-10 space-y-6">

        <Label className="text-3xl font-bold text-primary">Recruitment</Label>
        {/* Future filter/search or add button goes here */}

          <DataTable columns={columns} data={members} />

    </section>
  );
};

export default Page;
