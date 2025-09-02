import { Facebook, Youtube, MessageCircle, Mail } from "lucide-react";
import { GlassContainer } from "@/components/shared/glass-container";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const MotionCard = motion(Card);

export default function SocialLinksSection() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/ccsprogrammersden",
      description: "Follow us on Facebook",
      iconBg: "bg-blue-600/50",
      iconColor: "text-blue-400",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@progdenofficial",
      description: "Subscribe to our channel",
      iconBg: "bg-red-600/50",
      iconColor: "text-red-400",
    },
    {
      name: "Discord",
      icon: MessageCircle,
      url: "https://discord.gg/bTXvdggz4g",
      description: "Join the Official CCS Discord server",
      iconBg: "bg-indigo-600/50",
      iconColor: "text-indigo-400",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:progdenofficial@gmail.com",
      description: "Send us an email",
      iconBg: "bg-green-600/50",
      iconColor: "text-green-400",
    },
  ]

  return (
      <div className="mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold mb-6 text-white">Connect With CCS Programmers' Den</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-300 mb-4">
            Stay updated with Programmers' Den through our social links!
            Where great minds compile!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
          {socialLinks.map((link) => {
            const IconComponent = link.icon
            return (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="block">
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-lg p-6 flex flex-col items-center text-center bg-gradient-to-br from-background/95 to-background/50 border border-foreground/10 shadow-2xl transform transition-transform duration-300 hover:scale-105"
                >
                  <div className={`${link.iconBg} p-3 rounded-full`}>
                    <IconComponent className={`w-6 h-6 md:w-8 md:h-8 ${link.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-white text-base md:text-lg font-semibold mb-1">{link.name}</h3>
                    <p className="text-xs md:text-sm text-gray-300">{link.description}</p>
                  </div>
                </MotionCard>
              </a>
            )
          })}
        </div>
      </div>
  )
}
