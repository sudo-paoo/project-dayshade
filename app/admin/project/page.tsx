'use client'

import React from "react";
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import AddProjectMenu from "@/components/sections/admin/projects/AddProjectMenu";
import EditProjectMenu from "@/components/sections/admin/projects/EditProjectMenu";

const Page = () => {
  // 🔹 Mock data
  const activeProjects = ["Project Title A", "Project Title B", "Project Title C"];

  const showcase = {
    title: "Spooky Sprout!",
    devs: "Dev Names",
    month: "August",
  };

  const projects = [
    {
      title: "Project Title",
      developer: "Developer Name",
      img: "https://via.placeholder.com/600x400",
      date: "Aug 20, 2025",
    },
    {
      title: "Another Project",
      developer: "Another Dev",
      img: "https://via.placeholder.com/600x400",
      date: "Jul 12, 2025",
    },
    {
      title: "Cool Game Project",
      developer: "Team XYZ",
      img: "https://via.placeholder.com/600x400",
      date: "Jun 05, 2025",
    },
  ];

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
      </header>

      {/* Top Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Active Projects */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Active Projects -
              <span className="text-sm text-muted-foreground"> Aug 20, 2025</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            {activeProjects.map((title, i) => (
              <p key={i}>{i + 1}. {title}</p>
            ))}
          </CardContent>
        </Card>

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

        {/* Add Project Button */}
        <Card>
          <CardContent className="flex items-center justify-center h-full">
            <AddProjectMenu />
          </CardContent>
        </Card>
      </section>

      {/* Main Projects List */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row justify-between items-start">
              <div>
                <CardTitle className="text-xl font-semibold">{p.title}</CardTitle>
                <CardDescription className="text-sm">By: {p.developer}</CardDescription>
              </div>
              <div className="flex flex-col items-end gap-2">
                <EditProjectMenu />
              </div>
            </CardHeader>
            <CardContent>
              <Image
                src={p.img}
                alt={p.title}
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-60 border"
              />
            </CardContent>
            <CardFooter className="flex justify-end text-sm text-muted-foreground">
              Date: {p.date}
            </CardFooter>
          </Card>
        ))}
      </main>
    </section>
  )
};

export default Page;
