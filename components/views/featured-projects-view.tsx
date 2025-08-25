import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

interface FeaturedProjectsViewProps {
  imageErrors: Record<string, boolean>
  handleImageError: (imageName: string) => void
}

export default function FeaturedProjectsView({ imageErrors, handleImageError }: FeaturedProjectsViewProps) {
  const projects = [
    {
      title: "Project Dayshade",
      description: "A revolutionary platform that transforms how developers collaborate and showcase their work.",
      image: "/assets/about-pics/carousel-2.png",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      developers: ["Juan", "Maria", "Jose"],
      date: "2025"
    },
    {
      title: "AI Development Hub",
      description: "An innovative AI-powered development environment that helps teams build better software faster.",
      image: "/assets/about-pics/carousel-2.png",
      tags: ["Python", "React", "AI"],
      developers: ["Alex", "Sarah"],
      date: "2025"
    }
  ];

  return (
    <section className="py-16 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="purple" className="mb-4">Featured Work</Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Latest Projects
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            Discover our most impactful and innovative projects, pushing the boundaries of what's possible.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-gradient-to-br from-black via-pd-dark-grey/50 to-black border border-white/10 hover:border-pd-purple/50 transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src={imageErrors[project.title] ? "/placeholder.png" : project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    onError={() => handleImageError(project.title)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="purple" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-white/60">
                        {project.developers.join(", ")}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="group">
                      View Project
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
