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
        <TextAnimate
          className="text-center font-bold mb-4"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 3rem)",
            color: "var(--color-pd-green)",
            letterSpacing: "2px",
          }}
        >
          TARLAC STATE UNIVERSITY CAMPUS SHOWCASE
        </TextAnimate>
      </div>

      {/* Showcase Container */}
      <GlassContainer className="w-full rounded-3xl p-4 md:p-8 border border-white/20 backdrop-blur-lg bg-white/10">
        <div className="flex justify-center items-center">
          <div className="flex flex-row items-center gap-4 md:gap-6">
            {/* Main Image */}
            <div className="w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden relative">
              <Image
                src={imageErrors['main-showcase'] ? "/placeholder.png" : "/assets/about-pics/carousel-1.png"}
                alt="Campus Showcase"
                fill
                className="object-cover"
                style={{
                  borderRadius: "16px",
                }}
                priority
                unoptimized
                onLoad={() => {
                  console.log("Main showcase image loaded successfully")
                }}
                onError={() => handleImageError('main-showcase')}
              />
            </div>

            {/* Vertical Date Section */}
            <div className="flex items-center">
              <div 
                className="text-white/80 font-bold tracking-wider text-center"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  fontSize: "clamp(12px, 1.5vw, 18px)",
                  letterSpacing: "1px",
                  color: "var(--color-pd-green)",
                }}
              >
                November 2024
              </div>
            </div>
          </div>
        </div>

        {/* CAPTIONS SHOULD BE PLACED HERE */}
        <div className="text-center mt-4 md:mt-6">
          <p className="text-white/70 text-xs sm:text-sm md:text-base italic">
            Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
          </p>
        </div>
      </GlassContainer>
    </div>
  )
}
