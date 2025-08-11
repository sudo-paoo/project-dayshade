import Image from "next/image"
import { GlassContainer } from "@/components/shared/glass-container"
import { TextAnimate } from "@/components/magicui/text-animate"

interface FeaturedProjectsViewProps {
  imageErrors: Record<string, boolean>
  handleImageError: (imageName: string) => void
}

export default function FeaturedProjectsView({ imageErrors, handleImageError }: FeaturedProjectsViewProps) {
  return (
    <section className="w-full px-4 py-6" aria-labelledby="featured-projects-heading">
      <GlassContainer 
        className="p-6 md:p-8 relative overflow-hidden rounded-3xl border border-white/20 backdrop-blur-lg bg-gradient-to-br from-[var(--color-pd-purple)] via-[var(--color-pd-purple)]/80 to-[var(--color-pd-black)]/60 min-h-[400px]"
      >
        {/* Pattern Overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-[url(/assets/pattern.png)] bg-cover bg-no-repeat opacity-5 [background-color:var(--color-pd-dark-grey)]" />

        {/* Content Layout */}
        <div className="relative z-10 flex flex-col lg:flex-row gap-4 lg:gap-8 h-full">
          {/* Left Side - Text Content */}
          <div className="flex-1 lg:flex-[2] flex flex-col justify-between pr-0 lg:pr-4">
            <div>
              <TextAnimate className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4">
                Featured Projects
              </TextAnimate>
              <TextAnimate className="text-white/90 text-lg md:text-xl lg:text-2xl mb-6 lg:mb-8 max-w-none leading-relaxed">
               At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
              </TextAnimate>
            </div>
            
            <div>
              <TextAnimate className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                Developers
              </TextAnimate>
              <TextAnimate className="text-white/70 text-sm md:text-base lg:text-lg">
                Juan, Maria, and Jose
              </TextAnimate>
            </div>
          </div>
          
          {/* Right Side - Project Card */}
          <div className="flex-1 lg:flex-[1] flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="mb-3 lg:mb-4">
                <TextAnimate className="text-white text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-center">
                  TITLE OF THE PROJECT
                </TextAnimate>
                <TextAnimate className="text-white/70 text-sm md:text-base float-right">
                  November 29, 2077
                </TextAnimate>
              </div>
              
              <div 
                className="w-full h-64 md:h-80 lg:h-96 xl:h-[400px] bg-white/20 rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-white/30 overflow-hidden relative"
              >
                <Image
                  src={imageErrors['featured-project'] ? "/placeholder.png" : "/assets/about-pics/carousel-2.png"}
                  alt="Featured Project Sample"
                  fill
                  className="object-cover rounded-2xl"
                  unoptimized
                  onLoad={() => {
                    console.log("Featured project image loaded successfully")
                  }}
                  onError={() => handleImageError('featured-project')}
                />
              </div>
            </div>
          </div>
        </div>
      </GlassContainer>
    </section>
  )
}
