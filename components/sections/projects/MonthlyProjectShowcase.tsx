import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ChevronRight } from "lucide-react";

export default function MonthlyProjectShowcase() {
  // ! should fetch on server
  const currentShowcase = {
      title: "ProgDen F4U-A1 Warthunder Custom Skin and Mascot",
      description:
        "Soar and conquer the skies with the custom ProgDen F4U-A1 Corsair War Thunder skin featuring our brand-new mascot. Custom skin on the F4U-A1 Corsair in the realistic and immersive game combat simulator War Thunder. Flying the classic and signature colors of Programmers Den delivered in a cinematic video.",
      is_monthly: true,
      is_featured: false,
      yt_id: "pt07ibtb8SM",
      published_date: new Date("2025-10-01"),
      tags: ["Custom Skin", "Game Design", "War Thunder Custom Skin"],
      devs: ["Mharl Vincent M. Aguilos", "Christian Kevin Y. Macale"],
  };

  return (
    <section className="py-24 w-full relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="purple" className="mb-4 md:text-2xl">
            Project of the Month
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Monthly Spotlight
          </h2>
          <div className="flex items-center justify-center gap-2 text-white/60">
            <CalendarDays className="w-5 h-5" />
            <span>
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </div>

        <Card className="relative overflow-hidden bg-gradient-to-br from-black/50 via-pd-dark-grey/30 to-black/50 border-white/10">
          <div className="relative h-[500px] md:h-[600px] overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${currentShowcase.yt_id}`}
              title={currentShowcase.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          <div className="relative p-8 md:p-12 bg-gradient-to-t from-black/90 to-black/20">
            <div className="flex flex-wrap gap-2 mb-4">
              {currentShowcase.tags.map((tag) => (
                <Badge key={tag} variant="purple">
                  {tag}
                </Badge>
              ))}
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              {currentShowcase.title}
            </h3>

            <p className="text-white/80 text-lg md:text-xl max-w-3xl mb-6 line-clamp-2">
              {currentShowcase.description}
            </p>

            <div className="flex items-center gap-2 text-white/60 group cursor-pointer hover:text-white transition-colors">
              <Link
                href={`https://www.youtube.com/watch?v=${currentShowcase.yt_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex text-center items-center justify-center gap-2"
              >
                View Project Details
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
