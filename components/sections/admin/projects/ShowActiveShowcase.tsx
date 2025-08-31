'use client'

import React, {useState, useEffect} from 'react'
import { Card, CardHeader, CardTitle, CardContent  } from '@/components/ui/card'
import { Label } from "@/components/ui/label"
import { toast } from 'sonner'

const ShowActiveShowcase = () => {
  const [showcase, setShowcase] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const res = await fetch("/api/GETShowcase");
        const json = await res.json();
        if (json.success) setShowcase(json.data);
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
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Active Showcase
          <span className="text-sm text-muted-foreground"> — Monthly Picks</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {showcase.length > 0 ? (
          showcase.map((project) => (
            <div key={project.id} className="flex flex-col items-start gap-1">
              <Label className="text-2xl font-bold">{project.title}</Label>
              <span className="text-sm text-muted-foreground">
                By: {project.devs?.join(", ")}
              </span>
            </div>
          ))
        ) : (
          <p>No showcase projects available.</p>
        )}
      </CardContent>
    </Card>

  );
}

export default ShowActiveShowcase
