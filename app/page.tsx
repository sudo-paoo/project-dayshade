import { Separator } from "@/components/ui/separator";
import { GlassContainer } from "@/components/shared/glass-container";
import Image from "next/image";
import Button from "@/components/button";
import SimpleProfile from "@/components/profileui/SimpleProfile";

const officerData = [
  {
    title: "President",
    imgSrc: "/assets/about-pics/carousel-1.png",
  },
  {
    title: "Executive Secretary",
    imgSrc: "/assets/about-pics/carousel-1.png",
  },
  {
    title: "Vice President of Development",
    imgSrc: "/assets/about-pics/carousel-1.png",
  },
  {
    title: "Vice President of Comp. Prog.",
    imgSrc: "/assets/about-pics/carousel-1.png",
  },
  {
    title: "Vice President of Multimedia",
    imgSrc: "/assets/about-pics/carousel-1.png",
  },
  {
    title: "Head of Development",
    imgSrc: "/assets/about-pics/carousel-1.png",
  },
  {
    title: "Head of Human Resources",
    imgSrc: "/assets/about-pics/carousel-1.png",
  },
  {
    title: "Head of Recruitment",
    imgSrc: "/assets/about-pics/carousel-1.png",
  },
  {
    title: "Head of Communication",
    imgSrc: "/assets/about-pics/carousel-1.png",
  },
  {
    title: "Head of Finances",
    imgSrc: "/assets/about-pics/carousel-1.png",
  },
  {
    title: "Secretary of Finances",
    imgSrc: "/assets/about-pics/carousel-1.png",
  },
  {
    title: "Audit",
    imgSrc: "/assets/about-pics/carousel-1.png",
  },
  {
    title: "Social Media Manager",
    imgSrc: "/assets/about-pics/carousel-1.png",
  },
];

export default function Page() {
  return (
    <>
      <div className="min-h-screen h-auto w-full bg-black text-white container mx-auto px-4 py-4 bg-[url('/assets/circles.png')] bg-cover">
        {/* Mobile View  of Home*/}
        {/* Opening Div*/}
        <GlassContainer className="md:hidden flex flex-col m-3 p-2 items-center justify-between">
          <div className="flex items-center justify-center p-4">
            <Image
              src="/assets/pd-logo.png"
              alt="pd-logo.png"
              width={160}
              height={160}
            ></Image>
          </div>
          <div className=" flex items-center justify-center">
            <Image
              src="/assets/pd-banner.png"
              alt="pd-banner.png"
              width={400}
              height={200}
            ></Image>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="text-xs font-bold">where great minds compile.</p>
            <Button variant="default" size="sm">
              Join
            </Button>
          </div>
          {/* Officers */}
          <div className="flex flex-col justify-center items-center p-4 gap-4 max-w-full">
            <div className="flex mt-6 font-bold">
              <p className="text-lg"> PD Officers 2025-2026</p>
            </div>
            <div className="flex flex-wrap items-center justify-center">
              {/* First Row */}
              <div className="flex basis-full items-center justify-center">
                {officerData.slice(0, 2).map((officer) => (
                  <SimpleProfile
                    key={officer.title}
                    title={officer.title}
                    imageSrc={officer.imgSrc}
                  ></SimpleProfile>
                ))}
              </div>
              {/* Second Row */}
              <div className="flex basis-full items-center justify-center mx-7">
                {officerData.slice(2, 5).map((officer) => (
                  <SimpleProfile
                    key={officer.title}
                    title={officer.title}
                    imageSrc={officer.imgSrc}
                  ></SimpleProfile>
                ))}
              </div>
              {/* Third Row */}
              <div className="flex basis-full items-center justify-center">
                {officerData.slice(5, 9).map((officer) => (
                  <SimpleProfile
                    key={officer.title}
                    title={officer.title}
                    imageSrc={officer.imgSrc}
                  ></SimpleProfile>
                ))}
              </div>
              {/* Fourth Row */}
              <div className="flex basis-full items-center justify-center">
                {officerData.slice(5, 9).map((officer) => (
                  <SimpleProfile
                    key={officer.title}
                    title={officer.title}
                    imageSrc={officer.imgSrc}
                  ></SimpleProfile>
                ))}
              </div>
            </div>
          </div>
        </GlassContainer>
      </div>
    </>
  );
}
