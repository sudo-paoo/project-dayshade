import { Separator } from "@/components/ui/separator";
import { GlassContainer } from "@/components/shared/glass-container";
import Image from "next/image";
import Button from "@/components/global/button";
import { FeatherIcon } from "lucide-react";
import officerDataJson from "@/data/officer.json";
import { Officers } from "@/type/zod/officer";
import Link from "next/link";

const officerData: Officers = officerDataJson;

export default function Page() {
  return (
    <>
      <div className="min-h-screen pt-4 bg-black text-white bg-[url('/assets/circles.png')] bg-cover">
        {/* Hero Div*/}
        <GlassContainer className="bg-black/50 flex flex-col m-4 sm:mx-5 mx-6 p-2 items-center justify-between mask-b-from-90% mask-b-to-100%">
          <div className="flex items-center justify-center p-4 max-w-[280px]">
            <Image
              src="/assets/pd-logo.png"
              alt="pd-logo.png"
              width={451}
              height={413}
            ></Image>
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
                className="inline-block md:hidden sm:py-3 sm:px-8 sm:text-md py-2 px-8 text-sm "
                variant="default"
              >
                Join
              </Button>
              <Button
                className="hidden md:inline-block py-1 px-18 rounded-lg"
                variant="glass"
              >
                <p className="bg-gradient-to-r from-[var(--color-pd-green)] to-[#2C8A58] bg-clip-text text-transparent text-2xl">
                  JOIN
                </p>
              </Button>
            </Link>
          </div>
          <div className="flex flex-col mt-12 pb-10 md:mx-20 mx-4 ">
            <p className="font-bold sm:text-base text-[0.6rem] text-center">
              Programmer's Den - The computer technology-focused college
              organization preparing students for industry practices in Design
              and Development
            </p>
          </div>
        </GlassContainer>
        {/* Sample Background for Transition */}
        {/* Projects Section */}
        <div className=" min-h-80 flex flex-col relative top-[-30px] justify-center items-center h-auto w-full py-8 bg-black bg-gradient-to-b from-black via-[#252323] to-black mask-y-from-90% mask-y-to-100%">
          {/* Monthly Project Showcase */}
          <div className="flex flex-col justify-center items-center pb-8">
            {/* <MonthlyProjectShowcase></MonthlyProjectShowcase> */}
          </div>
          {/* Featured Project */}
          <div className="flex flex-col justify-center items-center pb-8">
            {/* <FeaturedProject></FeaturedProject> */}
          </div>
        </div>
        <GlassContainer variant="default">
          <div></div>
        </GlassContainer>
      </div>
    </>
  );
}
