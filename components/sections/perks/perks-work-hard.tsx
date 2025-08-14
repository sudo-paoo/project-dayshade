"use client"

import * as React from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"

function PerksWorkHard() {
  const [api, setApi] = React.useState<CarouselApi>()
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const images = [
    { src: "/assets/perks-pics/perks-6.png", alt: "Virtual Dive" },
    { src: "/assets/perks-pics/perks-7.png", alt: "Super Smash Bros." },
    { src: "/assets/perks-pics/perks-8.png", alt: "Tekken" },
  ]

  React.useEffect(() => {
    if (!api) return

    const play = () => {
      stop() 
      timeoutRef.current = setTimeout(() => {
        api.scrollNext()
      }, 3000) 
    }

    const stop = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }

    play()

    api.on("pointerDown", stop)
    api.on("pointerUp", play)
    api.on("select", play)

    return () => {
      stop()
      api.off("pointerDown", stop)
      api.off("pointerUp", play)
      api.off("select", play)
    }
  }, [api])

  return (
    <section className="w-full px-0 py-12 text-white">
      <div className="container-fluid px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-pd-green">WORK HARD. PLAY HARD.</h2>
            <p className="max-w-[900px] text-gray-300 text-lg md:text-xl lg:text-2xl">
              Celebrate gaming as a platform. Engage in exciting organization Team Building activities that sprout
              teamwork and healthy competition.
            </p>
          </div>
        </div>
        {/* Carousel - small to medium screens */}
        <div className="mx-auto w-full max-w-4xl mt-8 lg:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={image.src || "/placeholder.svg"}
                    width={800}
                    height={200}
                    alt={image.alt}
                    className="w-full h-[200px] object-cover rounded-lg"
                    priority={index === 0}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Image for for large screeens */}
        <div className="hidden lg:flex lg:flex-row lg:gap-0 lg:justify-center lg:mt-8">
          {images.map((image, index) => (
            <div key={index} className="w-full lg:w-1/3">
              <Image
                src={image.src || "/placeholder.svg"}
                width={800}
                height={300}
                alt={image.alt}
                className="w-full h-[300px] object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PerksWorkHard
