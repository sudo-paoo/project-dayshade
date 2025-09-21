import React from "react";
import { Label } from "@/components/ui/label"
import AddProjectMenu from "@/components/sections/admin/projects/AddProjectMenu";
import ProjectsListView from "@/components/sections/admin/projects/ProjectsListView";
import ShowFeaturedProjects from "@/components/sections/admin/projects/ShowFeaturedProjects";
import ShowActiveShowcase from "@/components/sections/admin/projects/ShowActiveShowcase";

const Page = () => {

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
        <ShowFeaturedProjects/>

        {/* Active Project Showcase */}
        <ShowActiveShowcase/>

      </section>

      {/* Project Cards */}
      <ProjectsListView />

    </section>
  )
};

export default Page;
