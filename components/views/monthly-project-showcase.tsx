import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, ChevronRight } from "lucide-react"

interface MonthlyProjectShowcaseProps {
  imageErrors: Record<string, boolean>
  handleImageError: (imageName: string) => void
}

export default function MonthlyProjectShowcase({ imageErrors, handleImageError }: MonthlyProjectShowcaseProps) {
  const currentShowcase = {
    title: "Tarlac State University Campus",
    month: "August",
    year: "2025",
    description: "An innovative virtual tour system showcasing the beautiful campus of Tarlac State University, featuring interactive 3D models and real-time navigation.",
    technologies: ["Three.js", "WebGL", "React"],
    images: [
      "/assets/about-pics/carousel-2.png",
      "/assets/about-pics/carousel-2.png",
      "/assets/about-pics/carousel-2.png"
    ]
  };

  return (
    <section className="py-24 w-full relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-pd-purple/5 -skew-y-6" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="purple" className="mb-4">Project of the Month</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Monthly Spotlight
          </h2>
          <div className="flex items-center justify-center gap-2 text-white/60">
            <CalendarDays className="w-5 h-5" />
            <span>{currentShowcase.month} {currentShowcase.year}</span>
          </div>
        </motion.div>

        {/* Main Content */}
        <Card className="relative overflow-hidden bg-gradient-to-br from-black/50 via-pd-dark-grey/30 to-black/50 border-white/10">
          {/* Hero Image */}
          <div className="relative h-[500px] md:h-[600px] overflow-hidden">
            <Image
              src={imageErrors['monthly-showcase'] ? "/placeholder.png" : currentShowcase.images[0]}
              alt={currentShowcase.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              onError={() => handleImageError('monthly-showcase')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {currentShowcase.technologies.map(tech => (
                  <Badge key={tech} variant="purple">
                    {tech}
                  </Badge>
                ))}
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                {currentShowcase.title}
              </h3>
              
              <p className="text-white/80 text-lg md:text-xl max-w-3xl mb-6">
                {currentShowcase.description}
              </p>

              <div className="flex items-center gap-2 text-white/60 group cursor-pointer hover:text-white transition-colors">
                <span>View Project Details</span>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          </div>
        </Card>
      </div>
    </section>
  );
}
