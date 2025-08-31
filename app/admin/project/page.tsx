'use client'

import React from "react";
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardContent  } from '@/components/ui/card'
import AddProjectMenu from "@/components/sections/admin/projects/AddProjectMenu";
import ProjectsListView from "@/components/sections/admin/projects/ProjectsListView";
import ShowActiveProjects from "@/components/sections/admin/projects/ShowActiveProjects";

const Page = () => {


  // 🔹 Mock data
  const showcase = {
    title: "Spooky Sprout!",
    devs: "Dev Names",
    month: "August",
  };


  return (
    <section className="p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <div className="flex flex-col gap-1">
          <Label className="text-3xl font-bold text-primary" htmlFor="projects">
            PD Projects
          </Label>
          <p className="text-muted-foreground text-sm">
            Add, edit, or remove featured projects
          </p>
        </div>

         {/* Add Project Button */}
          <AddProjectMenu />
      </header>

      {/* Top Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Active Projects */}
        <ShowActiveProjects/>

        {/* Active Project Showcase */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Active Showcase
              <span className="text-sm text-muted-foreground"> — {showcase.month}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start gap-1">
            <Label className="text-base font-medium">{showcase.title}</Label>
            <span className="text-sm text-muted-foreground">By: {showcase.devs}</span>
          </CardContent>
        </Card>

      </section>

      {/* Project Cards */}
      <ProjectsListView />

    </section>
  )
};

export default Page;
