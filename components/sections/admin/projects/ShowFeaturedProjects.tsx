'use client'

import React, {useState, useEffect} from 'react'
import { Card, CardHeader, CardTitle, CardContent  } from '@/components/ui/card'
import { toast } from 'sonner'

const ShowFeaturedProjects = () => {
  const [activeProjects, setActiveProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const res = await fetch('/api/GETFeatured');
        const json = await res.json();
        if (json.success) setActiveProjects(json.data);
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
          Active Featured Projects
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        {activeProjects.length > 0 ? (
          activeProjects.map((project, i) => (
            <p key={project.id}>
              {i + 1}. {project.title}
            </p>
          ))
        ) : (
          <p>No featured projects available.</p>
        )}
      </CardContent>
    </Card>
  );
}

export default ShowFeaturedProjects
