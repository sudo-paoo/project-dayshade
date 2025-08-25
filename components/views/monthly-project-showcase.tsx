import Image from "next/image"
import { GlassContainer } from "@/components/shared/glass-container"
import { TextAnimate } from "@/components/magicui/text-animate"

interface MonthlyProjectShowcaseProps {
  imageErrors: Record<string, boolean>
  handleImageError: (imageName: string) => void
}

export default function MonthlyProjectShowcase({ imageErrors, handleImageError }: MonthlyProjectShowcaseProps) {
  return (
    <div className="w-full px-4">
      {/* Monthly Project Showcase Header */}
      <div className="mb-4 max-w-7xl mx-auto">
        <TextAnimate className="text-white text-2xl md:text-3xl font-bold mb-4">
          Monthly Project Showcase
        </TextAnimate>
        
        {/* TSU Campus Showcase Title */}
        <TextAnimate className="mb-4 text-center font-bold tracking-[2px] text-pd-green [font-size:clamp(1.5rem,4vw,3rem)]">
          TARLAC STATE UNIVERSITY CAMPUS SHOWCASE
        </TextAnimate>
      </div>

      {/* Showcase Container */}
      <GlassContainer className="w-full rounded-3xl p-4 md:p-8 border border-white/20 backdrop-blur-lg bg-white/10">
        <div className="flex justify-center items-center">
          <div className="relative flex flex-row flex-wrap items-center gap-4 md:gap-6 justify-center w-full">
            {/* Main Image */}
            <div className="relative h-64 w-full max-w-[800px] overflow-hidden rounded-2xl sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]">
              <Image
                src={imageErrors['main-showcase'] ? "/placeholder.png" : "/assets/about-pics/carousel-1.png"}
                alt="Campus Showcase"
                fill
                className="rounded-[16px] object-cover w-full h-full"
                priority
                unoptimized
                onLoad={() => {
                  console.log("Main showcase image loaded successfully")
                }}
                onError={() => handleImageError('main-showcase')}
              />
            </div>
          </div>
        </div>

        {/* CAPTIONS SHOULD BE PLACED HERE */}
        <div className="text-center mt-4 md:mt-6">
          <p className="text-white/70 text-xs sm:text-sm md:text-base italic">
            Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
          </p>
        </div>
   
        <div className="text-center mt-3">
          <div className="font-bold text-pd-green">November 2024</div>
        </div>
      </GlassContainer>
    </div>
  )
}
