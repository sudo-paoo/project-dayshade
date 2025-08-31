import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";
// * on the projects page, fetch all featured
export default function FeaturedProjectsView() {
  // ! should fetch on server
  const projects = [
    {
      title: "Nights in CCS",
      description:
        "Get ready to be spooked(or perhaps laugh) with Kharl Asuncion's Unreal Engine 5 horror game, where the goal is to find your lost Aquaflask in the CCS building while avoiding disastrous PNG monsters!",
      is_monthly: true,
      is_featured: true,
      yt_id: "I8WsKQK3bNk",
      published_date: new Date("2024-11-01"),
      tags: ["Unreal Engine 5", "Horror Game"],
      devs: ["Kharl Asuncion"],
    },
    {
      title: "Pebbles Virtual Robotics",
      description:
        "A software for learning robotics using virtual environments. Developed by alumni members of Programmers Den as their capstone project. With the help of current President Sigmund. Bringing robotics to life in the digital world",
      is_monthly: true,
      is_featured: true,
      site_link: "https://pebbles-robotics.web.app/",
      imgPreview: "/assets/projects/pebbles.jpg",
      published_date: new Date("2024-11-13"),
      tags: ["Unity C#", "Blender", "Robotics"],
      devs: ["Andrea Christela Adalem", "Iris", "Fernando", "Christler Neil Vinluan"],
    },
    {
      title: "Kasene Teto Fanart",
      description:
        "Delve in the world of 3D modelling and take a look at the creativity and artistry of Darrel Joshua Ocampo's 3D model fanart of Kasane Teto, crafted from scratch in Blender!",
      is_monthly: true,
      is_featured: false,
      yt_id: "xllgLhNAvFc",
      published_date: new Date("2024-12-01"),
      tags: ["Blender", "3D Modeling", "Fanart"],
      devs: ["Darrel Joshua Ocampo"],
    },
    {
      title: "QuickList: To-do task App",
      description: "A web app that is used for tracking tasks and note taking.",
      is_monthly: true,
      is_featured: false,
      yt_id: "0x8S2bHtzw8",
      published_date: new Date("2024-11-02"),
      tags: ["Web App", "Productivity"],
      devs: [
        "Luis Armann Barba",
        "Dustin Elie Gualberto",
        "Elton John Lennon Bundukin",
        "Arian Espino",
      ],
    },
    {
      title: "A Traditional Knight Game",
      description: "A platformer game made with the Godot Engine.",
      is_monthly: true,
      is_featured: false,
      yt_id: "TNT2c-cY8po",
      published_date: new Date("2024-11-03"),
      tags: ["Game Development"],
      devs: [
        "Edward Keith Duque",
        "Jian Carlo Capili",
        "Jonyl Ard Chriztan Tagaro",
        "Renz Chloe Nicdao",
        "Wendell Iverson Marzan",
      ],
    },
    {
      title: "Vending Machine GUI",
      description: "A GUI project simulating a vending machine.",
      is_monthly: true,
      is_featured: false,
      yt_id: "zzFijPTnvic",
      published_date: new Date("2024-11-04"),
      tags: ["Java", "GUI"],
      devs: [
        "Neo Seifer Matias",
        "Allen Ferdinald Torres",
        "Charmaine Bamba",
        "Justine Manaloto",
        "Kelvin Rivera",
        "Mharl Vincent Aguilos",
      ],
    },
    {
      title: "Spooky Sprout",
      description: "A fun and spooky-themed game.",
      is_monthly: true,
      is_featured: false,
      yt_id: "NPx0o8G1uf4",
      published_date: new Date("2024-11-05"),
      tags: ["Game Development"],
      devs: [
        "George Henry De Guzman",
        "Eithan Mathew Malonzo",
        "Kurt Angel Mamuad",
        "Daniel Sta. Maria",
        "Justin Cosme",
      ],
    },
    {
      title: "Flappy Ponyo",
      description:
        "A flappy bird inspired game but based in the world of Ponyo, built with the help of Godot Engine.",
      is_monthly: true,
      is_featured: false,
      yt_id: "f-3pSHMfXiw",
      published_date: new Date("2024-11-06"),
      tags: ["Godot Engine", "Game Development"],
      devs: ["Charmaine Bamba"],
    },
    {
      title: "Programmers' Den Christmas Countdown",
      description:
        "Get into the holiday spirit with Programmers' Den! We're counting down to Christmas with exciting activities, festive events, and surprises for everyone.",
      is_monthly: true,
      is_featured: false,
      yt_id: "YmjX_ErFlAk",
      published_date: new Date("2024-11-07"),
      tags: ["Event", "Christmas", "Community"],
      devs: [
        "Carla Angelene Carpio",
        "Lourainne Flores",
        "Clarissa Kassidy Pangilinan",
        "Jerome Ramos",
        "Beverlyn Raquel",
        "Shantrelle Louise Reinoso",
      ],
    },
    {
      title: "Tarlac Province Emergency Hotline",
      description:
        "A website used to showcase emergency contact numbers of all municipalities of Tarlac.",
      is_monthly: true,
      is_featured: false,
      yt_id: "_PSZVR1grSI",
      published_date: new Date("2024-11-08"),
      tags: ["Website", "Emergency"],
      devs: ["John Andrei Chavenia", "John Stephen Martinez"],
    },
    {
      title: "Dino Aalto",
      description: "A game inspired by the Dinosaur game, made in Godot Engine.",
      is_monthly: true,
      is_featured: false,
      yt_id: "p8lA9JKGuPA",
      published_date: new Date("2024-11-09"),
      tags: ["Godot Engine", "Game Development"],
      devs: ["Allen Ferdinald Torres"],
    },
    {
      title: "Profile Website",
      description:
        "A portfolio website-- shows services offered, projects developed, and a way to get in contact with the owner of the site.",
      is_monthly: true,
      is_featured: false,
      yt_id: "k0F43Rs7xgg",
      published_date: new Date("2024-11-10"),
      tags: ["Portfolio", "Website"],
      devs: ["Catherine Ramos", "Dave Marthin Sayo", "Chantelle Claveria"],
    },
    {
      title: "TSU Campus Showcase",
      description:
        "A website to showcase and explain different areas of Tarlac State University.",
      is_monthly: true,
      is_featured: false,
      yt_id: "UKsQ0FvB4jw",
      published_date: new Date("2024-11-11"),
      tags: ["Website", "Campus"],
      devs: [
        "Philip Abraham Kipte",
        "Janssen Carl Espedido",
        "Dessiree Camille Pasion",
        "Luis Antonio Magdangal",
        "John Ryu Dayrit",
        "Adriel John Pascual",
      ],
    },
    {
      title: "Stacks",
      description: "An addicting stack game made in the Unity Engine.",
      is_monthly: true,
      is_featured: false,
      yt_id: "JcLiwmk_sCY",
      published_date: new Date("2024-11-12"),
      tags: ["Unity Engine", "Game Development"],
      devs: ["Justine Manaloto"],
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
          <Badge variant="purple" className="mb-4 md:text-2xl">
            Featured Work
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Latest Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 items-stretch">
          {displayProjects.map((project, index) => (
            <div
              key={index}
              className="transition duration-300 ease-in-out hover:translate-y-[-4px]"
            >
              <Card className="overflow-hidden bg-gradient-to-br from-black via-pd-dark-grey/50 to-black border border-white/10 hover:border-pd-purple/50 transition-all duration-300 h-full">
                {/* Image Container */}
                <div className="relative h-[240px] overflow-hidden">
                  {project.yt_id ? (
                    <Image
                      src={`https://img.youtube.com/vi/${project.yt_id}/hqdefault.jpg`}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : project.site_link && project.imgPreview ? (
                    <Image
                      src={project.imgPreview}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : null}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Featured Badge */}
                  {project.is_featured && (
                    <div className="absolute top-3 left-3 z-30">
                      <Badge
                        key={`featured-badge-${index}`}
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
                <div className="px-6">
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
                    className="text-white/70 mb-4 line-clamp-2"
                    title={project.description}
                  >
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-white/60 line-clamp-2">
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
                        href={
                          project.site_link
                            ? project.site_link
                            : `https://www.youtube.com/watch?v=${project.yt_id}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                        <ArrowUpRight className="ml-2 h-4 w-4 " />
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
