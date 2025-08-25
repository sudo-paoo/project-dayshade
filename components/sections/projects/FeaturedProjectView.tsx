import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function FeaturedProjectsView() {
  // ! should fetch on server
  const projects = [
    {
      title: "UE5 PD Session Part 1",
      description: "Installation, Navigation, and Transformation",
      is_monthly: true,
      is_featured: true,
      yt_id: "lppPHYvfjPk",
      published_date: new Date("2024-11-01"),
      tags: ["Unreal Engine 5", "Blender"],
      devs: ["Kharl Asuncion "],
    },
    {
      title: "UE5 PD Session Part 1",
      description: "Installation, Navigation, and Transformation",
      is_monthly: true,
      is_featured: true,
      yt_id: "lppPHYvfjPk",
      published_date: new Date("2024-11-01"),
      tags: ["Unreal Engine 5", "Blender"],
      devs: ["Kharl Asuncion "],
    },
    {
      title: "UE5 PD Session Part 1",
      description: "Installation, Navigation, and Transformation",
      is_monthly: true,
      is_featured: true,
      yt_id: "lppPHYvfjPk",
      published_date: new Date("2024-11-01"),
      tags: ["Unreal Engine 5", "Blender"],
      devs: ["Kharl Asuncion "],
    },
    {
      title: "UE5 PD Session Part 1",
      description: "Installation, Navigation, and Transformation",
      is_monthly: true,
      is_featured: true,
      yt_id: "lppPHYvfjPk",
      published_date: new Date("2024-11-01"),
      tags: ["Unreal Engine 5", "Blender"],
      devs: ["Kharl Asuncion "],
    },
  ];

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
          {projects.map((project, index) => (
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
                  <p className="text-white/70 mb-4">{project.description}</p>

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
