import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export default function MembersProjectView() {
  const memberStats = [
    { title: "Active Members", value: "50+" },
    { title: "Projects Completed", value: "100+" },
    { title: "Technologies Used", value: "20+" }
  ];

  return (
    <section className="py-24 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pd-green via-white to-pd-purple bg-clip-text text-transparent mb-6">
            Member Projects
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            Explore the innovative work of our talented community members
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {memberStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pd-purple/10 to-transparent border border-white/10 rounded-xl p-6 text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-white/60">{stat.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Project Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Web Development', 'Mobile Apps', 'AI & Machine Learning', 'Game Development', 'UI/UX Design', 'Data Science'].map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Card className="relative overflow-hidden bg-gradient-to-br from-black via-pd-dark-grey/30 to-black border-white/10 hover:border-pd-purple/50 transition-all duration-300">
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-pd-purple transition-colors">
                    {category}
                  </h4>
                  <p className="text-white/60 text-sm">
                    Discover amazing projects in {category.toLowerCase()}
                  </p>
                </div>
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="w-5 h-5 text-pd-purple" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
