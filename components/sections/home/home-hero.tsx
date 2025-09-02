import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, OrthographicCamera  } from '@react-three/drei';
import { PDLogo } from "@/components/logos/pd-logo";
import { ChevronRight } from 'lucide-react';
function HomeHero() {

  return (
    <div className="flex flex-col m-4 sm:mx-5 mx-6 p-2 items-center justify-between">
      <div className="h-72 md:h-auto md:aspect-video w-full max-w-[600px] mx-auto">
        {/* <Image
          src="/assets/pd-logo.png"
          alt="pd-logo.png"
          width={451}
          height={413}
        ></Image> */}
      <Canvas className="w-full h-full" camera={{ position: [0, 0, 3], fov: 130 }}>
        <OrthographicCamera
          makeDefault
          position={[0, 5, 120]}
          zoom={40}
          near={0.1}
          far={1000}
        />
        <OrbitControls enableZoom={false} />
        <Environment preset="forest" />
        <PDLogo />
      </Canvas>
      </div>
      <div className="flex items-center justify-center sm:px-22">
        <Image
          src="/assets/pd-banner.png"
          alt="pd-banner.png"
          width={1002}
          height={164}
        ></Image>
      </div>
      <div className="flex flex-col items-center gap-6">
        <p className="sm:text-lg text-xs font-bold">
          where great minds compile.
        </p>
        <Link href="/join">
          <Button
            className="group relative px-10 py-4 text-2xl tracking-[1.5px]
                      bg-primary text-black rounded-[10px] border-0
                      shadow-[0_10px_0_0_rgb(34,197,94)] transition-all duration-300 ease-out cursor-pointer
                      hover:bg-white hover:shadow-[0_7px_0_0_rgb(34,197,94)]
                      active:bg-white active:shadow-[0_0px_0_0_rgb(34,197,94)] active:translate-y-[5px] active:duration-200
                      focus-visible:ring-2 focus-visible:ring-pd-dark-grey focus-visible:ring-offset-2">
            <span className="relative z-10 flex items-center gap-2 justify-center">
              Join
              <ChevronRight />
            </span>
          </Button>
        </Link>
      </div>
      <div className="flex flex-col mt-12 pb-10 md:mx-20">
        <p className="font-bold md:text-xl text-center">
          Programmer's Den - The computer technology-focused college
          organization preparing students for industry practices in Design
          and Development
        </p>
      </div>
    </div>
  )
}

export default HomeHero