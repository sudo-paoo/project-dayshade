import Image from "next/image";

interface ArchiveProjectShowcaseViewProps {
  imageErrors: Record<string, boolean>;
  handleImageError: (imageName: string) => void;
}
import { GlassContainer } from "@/components/shared/glass-container";
import { TextAnimate } from "@/components/magicui/text-animate";

interface DarkProjectShowcaseViewProps {
  imageErrors: Record<string, boolean>;
  handleImageError: (imageName: string) => void;
}

export default function DarkProjectShowcaseView({
  imageErrors,
  handleImageError,
}: DarkProjectShowcaseViewProps) {
  return (
    <section
      className="w-full px-4 py-12 bg-gradient-to-b from-transparent via-[var(--color-pd-black)]/60 to-[var(--color-pd-black)]/80"
      aria-labelledby="dark-project-showcase-heading"
    >
      {/* Dark Project Showcase Section */}
      <GlassContainer className="w-full rounded-3xl p-8 md:p-12 border border-white/20 backdrop-blur-lg bg-gradient-to-br from-[var(--color-pd-dark-grey)] via-[var(--color-pd-dark-grey)] to-[var(--color-pd-black)]">
        {/* Project Cards */}
        <div className="space-y-8">
          {/* Project Card 1 */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <GlassContainer className="w-full lg:w-1/2 lg:max-w-[36rem] h-96 lg:h-[28rem] rounded-2xl border border-white/20 backdrop-blur-lg bg-gray-200 flex-shrink-0">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <Image
                  src={
                    imageErrors["project-1"]
                      ? "/placeholder.png"
                      : "/assets/about-pics/carousel-1.png"
                  }
                  alt="Project Image 1"
                  fill
                  className="object-cover"
                  unoptimized
                  onLoad={() => {
                    console.log("Project image 1 loaded successfully");
                  }}
                  onError={() => handleImageError("project-1")}
                />
              </div>
            </GlassContainer>
            <GlassContainer
              variant="card"
              className="flex-1 h-96 lg:h-[28rem] rounded-2xl flex flex-col relative overflow-hidden"
            >
              <div className="absolute inset-0 rounded-[16px] bg-[url(/assets/pattern.png)] bg-auto bg-repeat opacity-18 [background-color:var(--color-pd-dark-grey)]" />
              <div className="relative z-10 w-full h-full flex flex-col p-4 sm:p-6 lg:p-8">
                {/* Project Title*/}
                <div className="text-center mb-4">
                  <TextAnimate className="text-white text-base lg:text-lg font-bold">
                    Project Title
                  </TextAnimate>
                </div>

                {/* Description*/}
                <div className="flex-1 flex items-center justify-center text-center">
                  <TextAnimate className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-relaxed break-words hyphens-auto">
                    Brief description of the project goes here. It should be
                    concise yet informative, giving an overview of what the
                    project is about and its key features.
                  </TextAnimate>
                </div>

                {/* Developer and Published*/}
                <div className="mt-auto pt-4 border-t border-white/20 text-center">
                  <TextAnimate className="text-[var(--color-pd-green)] text-sm font-semibold mb-1">
                    Developer: JUAN DELA CRUZ
                  </TextAnimate>
                  <TextAnimate className="text-white/70 text-xs">
                    Published: November 20, 2024
                  </TextAnimate>
                </div>
              </div>
            </GlassContainer>
          </div>

          {/* Project Card 2 */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <GlassContainer className="w-full lg:w-1/2 lg:max-w-[36rem] h-96 lg:h-[28rem] rounded-2xl border border-white/20 backdrop-blur-lg bg-gray-200 flex-shrink-0">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <Image
                  src={
                    imageErrors["project-2"]
                      ? "/placeholder.png"
                      : "/assets/about-pics/carousel-3.png"
                  }
                  alt="Project Image 2"
                  fill
                  className="object-cover"
                  unoptimized
                  onLoad={() => {
                    console.log("Project image 2 loaded successfully");
                  }}
                  onError={() => handleImageError("project-2")}
                />
              </div>
            </GlassContainer>
            <GlassContainer
              variant="card"
              className="flex-1 h-96 lg:h-[28rem] rounded-2xl flex flex-col relative overflow-hidden"
            >
              <div className="absolute inset-0 rounded-[16px] bg-[url(/assets/pattern.png)] bg-auto bg-repeat opacity-18 [background-color:var(--color-pd-dark-grey)]" />
              <div className="relative z-10 w-full h-full flex flex-col p-4 sm:p-6 lg:p-8">
                {/* Project Title*/}
                <div className="text-center mb-4">
                  <TextAnimate className="text-white text-base lg:text-lg font-bold">
                    Project Title
                  </TextAnimate>
                </div>

                {/* Description */}
                <div className="flex-1 flex items-center justify-center text-center">
                  <TextAnimate className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-relaxed break-words hyphens-auto">
                    Brief description of the project goes here. It should be
                    concise yet informative, giving an overview of what the
                    project is about and its key features.
                  </TextAnimate>
                </div>

                {/* Developer and Published*/}
                <div className="mt-auto pt-4 border-t border-white/20 text-center">
                  <TextAnimate className="text-[var(--color-pd-green)] text-sm font-semibold mb-1">
                    Developer: JUAN DELA CRUZ
                  </TextAnimate>
                  <TextAnimate className="text-white/70 text-xs">
                    Published: October 10, 2024
                  </TextAnimate>
                </div>
              </div>
            </GlassContainer>
          </div>

          {/* Project Card 3 */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <GlassContainer className="w-full lg:w-1/2 lg:max-w-[36rem] h-96 lg:h-[28rem] rounded-2xl border border-white/20 backdrop-blur-lg bg-gray-200 flex-shrink-0">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <Image
                  src={
                    imageErrors["project-3"]
                      ? "/placeholder.png"
                      : "/assets/about-pics/carousel-5.png"
                  }
                  alt="Project Image 3"
                  fill
                  className="object-cover"
                  unoptimized
                  onLoad={() => {
                    console.log("Project image 3 loaded successfully");
                  }}
                  onError={() => handleImageError("project-3")}
                />
              </div>
            </GlassContainer>
            <GlassContainer
              variant="card"
              className="flex-1 h-96 lg:h-[28rem] rounded-2xl flex flex-col relative overflow-hidden"
            >
              <div className="absolute inset-0 rounded-[16px] bg-[url(/assets/pattern.png)] bg-auto bg-repeat opacity-18 [background-color:var(--color-pd-dark-grey)]" />
              <div className="relative z-10 w-full h-full flex flex-col p-4 sm:p-6 lg:p-8">
                {/* Project Title*/}
                <div className="text-center mb-4">
                  <TextAnimate className="text-white text-base lg:text-lg font-bold">
                    Project Title
                  </TextAnimate>
                </div>

                {/* Description*/}
                <div className="flex-1 flex items-center justify-center text-center">
                  <TextAnimate className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-relaxed break-words hyphens-auto">
                    Brief description of the project goes here. It should be
                    concise yet informative, giving an overview of what the
                    project is about and its key features.
                  </TextAnimate>
                </div>

                {/* Developer and Published*/}
                <div className="mt-auto pt-4 border-t border-white/20 text-center">
                  <TextAnimate className="text-[var(--color-pd-green)] text-sm font-semibold mb-1">
                    Developer: JUAN DELA CRUZ
                  </TextAnimate>
                  <TextAnimate className="text-white/70 text-xs">
                    Published: December 15, 2024
                  </TextAnimate>
                </div>
              </div>
            </GlassContainer>
          </div>
        </div>
      </GlassContainer>
    </section>
  );
}
