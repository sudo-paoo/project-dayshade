
import React from "react";
import { technologies } from "@/data/technologies";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { teamMembers } from "@/data/teamMembers";
import TeamMemberCard from "@/components/about-ui/TeamMemberCard";
import { TeamMemberCircles } from "@/components/about-ui/TeamMemberCircles";
import { ChevronRight, Code, FileCode, Medal, SquareCode, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GlassContainer } from "@/components/shared/glass-container";
import { Button } from "@/components/ui/button";
import MembersModal from "@/components/about-ui/MembersModal";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import HeroSection from "@/components/about-ui/HeroSection";
import ProgdenStory from "@/components/about-ui/ProgdenStory";
import TeamSection from "@/components/about-ui/TeamSection";
import ProgdenStats from "@/components/about-ui/ProgdenStats";
import SignUp from "@/components/about-ui/SignUp";

export default function About() {

  return (
    <div className="relative ">

      <HeroSection />

      {/* Panel 2 */}
      <div className="min-h-screen flex flex-col items-center justify-center relative">
        <ImageCarousel />
        <Image
          src="/assets/about-pics/about-pd-logo-3.png"
          alt="pd logo"
          className="sm:size-128"
          width={512}
          height={512}
        />
        <h1 className=" sm:text-9xl text-4xl font-bold z-10">
          TOGETHER, FOREVER
        </h1>
      </div>

      <ProgdenStory />

      <TeamSection />

      {/* PD OFFICERS*/}
      <div className=" py-12">
        <h1 className="text-primary text-3xl text-center font-bold">
          PD Officers {new Date().getFullYear()} -{" "}
          {new Date().getFullYear() + 1}
        </h1>
        <div className="flex flex-col items-center justify-center  my-6 ">
          <TeamMemberCircles />
        </div>
      </div>



      {/* SEPARATOR */}
      <div className="flex items-center justify-center w-full ">
        <div className="bg-gradient-to-r to-[#73FFC5] from-[#2B5B3B] h-12 w-full"></div>

        <div className="flex flex-col items-center mx-8">
          <h2 className="text-4xl font-bold text-[#43DAA1] whitespace-nowrap">
            Our Impact
          </h2>
          <p className="text-lg text-gray-400 whitespace-nowrap">
            Growing stronger every year
          </p>
        </div>

        <div className="bg-gradient-to-r to-[#2B5B3B] from-[#73FFC5] h-12 w-full"></div>
      </div>

      <ProgdenStats />

      <SignUp />



    </div >
  );
}
