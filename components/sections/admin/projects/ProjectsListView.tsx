'use client'

import React, { useState, useEffect } from 'react'
import EditProjectMenu from "@/components/sections/admin/projects/EditProjectMenu";
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from '@/components/ui/card';
import { toast } from 'sonner'
import { getProjects } from '@/lib/projects/getProjects';

const ProjectsListView = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      async function loadProjects() {
          try {
            const data = await getProjects();
            setProjects(data);
          } catch (error) {
              console.error(error);
              toast.error("Something went wrong.");
          } finally {
              setLoading(false);
          }
      }
      loadProjects();
    }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {projects.map((p, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row justify-between items-start">
            <div>
              <CardTitle className="text-xl font-semibold">{p.title}</CardTitle>
              {/* adjust field name if needed */}
              {p.developer && (
                <CardDescription className="text-sm">By: {p.developer}</CardDescription>
              )}
            </div>
            <div className="flex flex-col items-end gap-2">
              <EditProjectMenu project={p} />
            </div>
          </CardHeader>
          <CardContent>
            {p.image_url ? (
              <Image
                src={p.image_url}
                alt={p.title}
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-60 border"
              />
            ) : (
              <div className="w-full h-60 flex items-center justify-center border rounded-lg bg-gray-100 text-gray-500">
                No image
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-end text-sm text-muted-foreground">
            {/* adjust to match your DB column */}
            Date: {p.published_date}
          </CardFooter>
        </Card>
      ))}
    </main>
  )
}

export default ProjectsListView
