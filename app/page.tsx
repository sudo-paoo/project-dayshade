import { Separator } from "@/components/ui/separator";
import { GlassContainer } from "@/components/shared/glass-container";
import Image from "next/image";
import Button from "@/components/global/button";
import SimpleProfile from "@/components/profile-ui/SimpleProfile";
import MonthlyProjectShowcase from "@/components/projects-ui/MonthlyProjectShowcase";

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
      <div className="min-h-screen h-auto w-full pt-4 bg-black text-white container bg-[url('/assets/circles.png')] bg-cover">
        {/* Mobile View  of Home*/}
        {/* Opening Div*/}
        <GlassContainer className="md:hidden bg-black/60 flex flex-col m-3 p-2 items-center justify-between mask-b-from-95% mask-b-to-99%">
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
                {officerData.slice(9, 14).map((officer) => (
                  <SimpleProfile
                    key={officer.title}
                    title={officer.title}
                    imageSrc={officer.imgSrc}
                  ></SimpleProfile>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <Button variant="gradient" size="sm">
              Show Members
            </Button>
          </div>
          <div className="flex flex-col py-4 pb-10 mx-6">
            <p className="font-bold text-[0.6rem] text-center">
              Programmer's Den - The computer technology-focused college
              organization preparing students for industry practices in Design
              and Development
            </p>
          </div>
        </GlassContainer>
        {/* Monthly Project Showcase */}
        <div className="flex flex-col justify-center items-center h-auto w-full pb-8 bg-black bg-gradient-to-b from-black via-[var(--color-pd-dark-grey)] to-black">
          <MonthlyProjectShowcase></MonthlyProjectShowcase>

          <Button variant="gradient" size="sm">
            View All
          </Button>
        </div>
      </div>
    </>
  );
}
