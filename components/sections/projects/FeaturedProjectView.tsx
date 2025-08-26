import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";

export default function FeaturedProjectsView() {
  // ! should fetch on server
  const projects = [
    {
      title: "Test 1",
      description: "Installation, Navigation, and Transformation",
      is_monthly: true,
      is_featured: false,
      yt_id: "lppPHYvfjPk",
      published_date: new Date("2025-08-26"),
      tags: ["Unreal Engine 5", "Blender"],
      devs: ["Kharl Asuncion "],
    },
    {
      title: "Test 2",
      description: "Installation, Navigation, and Transformation",
      is_monthly: true,
      is_featured: false,
      yt_id: "dQw4w9WgXcQ",
      published_date: new Date("2025-02-15"),
      tags: ["Unreal Engine 5", "Blender"],
      devs: ["Kharl Asuncion "],
    },
     {
      title: "Test 3",
      description: "Installation, Navigation, and Transformation",
      is_monthly: true,
      is_featured: false,
      yt_id: "ly6YKz9UfQ4",
      published_date: new Date("2025-03-15"),
      tags: ["Unreal Engine 5", "Blender"],
      devs: ["Kharl Asuncion "],
    },
          {
        title: "TEST 4",
        description: "Installation, Navigation, and Transformation",
        is_monthly: true,
        is_featured: true,
        yt_id: "dsHyUgGMht0",
        published_date: new Date("2025-04-15"),
        tags: ["Unreal Engine 5", "Blender"],
        devs: ["Kharl Asuncion "],
      },
{
        title: "TEST 5",
        description: "Installation, Navigation, and Transformation",
        is_monthly: true,
        is_featured: false,
        yt_id: "IWZQB9zDD3Y",
        published_date: new Date("2025-08-15"),
        tags: ["Unreal Engine 5", "Blender"],
        devs: ["Kharl Asuncion "],
      },
      {
        title: "TEST 6",
        description: "Installation, Navigation, and Transformation",
        is_monthly: true,
        is_featured: false,
        yt_id: "LtlyeDAJR7A",
        published_date: new Date("2025-06-15"),
        tags: ["Unreal Engine 5", "Blender"],
        devs: ["Kharl Asuncion "],
      },
      {
        title: "TEST 7",
        description: "Installation, Navigation, and Transformation",
        is_monthly: true,
        is_featured: true,
        yt_id: "elfCDnMx3Ug",
        published_date: new Date("2025-07-15"),
        tags: ["Unreal Engine 5", "Blender"],
        devs: ["Kharl Asuncion "],
      },
       {
        title: "TEST 8",
        description: "Installation, Navigation, and Transformation",
        is_monthly: true,
        is_featured: false,
        yt_id: "Orvoa8z-p8g",
        published_date: new Date("2025-07-15"),
        tags: ["Unreal Engine 5", "Blender"],
        devs: ["Kharl Asuncion "],
      },
       {
        title: "TEST 9",
        description: "Installation, Navigation, and Transformation",
        is_monthly: true,
        is_featured: true,
        yt_id: "z4B3xSz42Gk",
        published_date: new Date("2025-07-15"),
        tags: ["Unreal Engine 5", "Blender"],
        devs: ["Kharl Asuncion "],
      },
  ];
  

  //removes the duplicate projects by youtube id and keep the newest by published_date
  const uniqueProjects: typeof projects = Object.values(
    projects.reduce((acc: Record<string, typeof projects[number]>, p) => {
      const key = p.yt_id || `${p.title}-${p.published_date}`;
      if (!acc[key]) acc[key] = p;
      else {
        // prefer the most recent published_date when duplicates exist
        const existing = new Date(acc[key].published_date as any);
        const incoming = new Date(p.published_date as any);
        if (incoming > existing) acc[key] = p;
      }
      return acc;
    }, {})
  );

  //top 3, original order, only takes the 3 and then the rest of the showcase is organized by date
  //the top 3 ignores the date featured because if it's true, it's going to be featured
  const featuredSorted: typeof projects = uniqueProjects
    .filter((p) => Boolean(p.is_featured))
    .slice(0, 3);

  const featuredIds = new Set(featuredSorted.map((p) => p.yt_id));

  const remainingSorted: typeof projects = uniqueProjects
    .filter((p) => !featuredIds.has(p.yt_id))
    .sort((a, b) => new Date(b.published_date as any).getTime() - new Date(a.published_date as any).getTime());

  const displayProjects: typeof projects = [...featuredSorted, ...remainingSorted];

  return (
    <section className="py-16 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="purple" className="mb-4">
            Featured Work
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Latest Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {displayProjects.map((project, index) => (
            <div
              key={index}
              className="transition duration-300 ease-in-out hover:translate-y-[-4px]"
            >
              <Card className="overflow-hidden bg-gradient-to-br from-black via-pd-dark-grey/50 to-black border border-white/10 hover:border-pd-purple/50 transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-[240px] overflow-hidden">
                  <Image
                    src={`https://img.youtube.com/vi/${project.yt_id}/hqdefault.jpg`}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Featured Badge */}
                  {featuredIds.has(project.yt_id) && (
                    <div className="absolute top-3 left-3 z-30">
                      <Badge
                        key={`featured-badge-${project.yt_id}`}
                        variant="purple"
                        className="text-xs uppercase bg-pd-purple text-white border-transparent shadow py-1 px-3 flex items-center"
                      >
                        <Star className="mr-2 h-4 w-4" />
                        FEATURED PROJECT
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="purple" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p
                    className="text-white/70 mb-4"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                    title={project.description}
                  >
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-white/60">
                        {project.devs.join(", ")}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="group"
                      asChild
                    >
                      <Link
                        href={`https://www.youtube.com/watch?v=${project.yt_id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
