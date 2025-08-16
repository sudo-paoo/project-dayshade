
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

export default function About() {
  const topMembers = teamMembers.slice(0, 2);
  const otherMembers = teamMembers.slice(2);

  const stats = {
    activeMembers: 50,
    projectsCount: 25,
    yearsOfExcellence: 11
  };

  return (
    <div className="relative ">

      {/* Panel 1 */}
      <div className="min-h-screen  flex flex-col overflow-hidden items-center justify-around relative py-24">
        <div className="absolute inset-0  z-[-1]">
          <Image
            className="size-26 absolute top-40 left-10 "
            src="/assets/circle-green.png"
            alt="Green circle"
            width={104}
            height={104}
          />
          <Image
            className="size-24 absolute top-1/2 right-10"
            src="/assets/circle-purple.png"
            alt="Purple circle"
            width={96}
            height={96}
          />
          <Image
            className="left-20  absolute bottom-0"
            src="/assets/shape-1.png"
            alt="Abstract shape 1"
            width={96}
            height={96}
          />
          {/* MISSING PNG  */}
          <Image
            className="size-76 absolute bottom-[-2rem] right-[3rem] "
            src="/assets/circle-green.png"
            alt="Green circle"
            width={304}
            height={304}
          />
          <Image
            className="size-56 rotate-150 absolute bottom-[-5rem] left-[-5rem]"
            src="/assets/circle-purple.png"
            alt="Purple circle"
            width={224}
            height={224}
          />
        </div>
        {/* CTA */}
        <div
          className="flex items-center justify-center gap-8 my-12 flex-col sm:flex-row"
        >
          <Image
            src="/assets/about-pics/about-hero-img.png"
            alt="about-hero"
            className="w-3/4 sm:w-1/2"
            width={600}
            height={400}
          />
          <GlassContainer className="sm:max-w-2xl mx-6 p-">
            <h1 className="sm:text-6xl text-2xl font-bold text-center">
              ONLY THE{" "}
              <span className="text-primary">
                BEST
                <br />
              </span>
              AMONG THE REST
            </h1>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-center">
                Elite Programmers from BSIT, BSIS and BSCS
              </h3>
              <p className="sm:text-lg text-center">
                We are the Programmers' Den, an organization of Tarlac State
                University - College of Computer Studies that was founded in 2013.
              </p>
              <p className="sm:text-lg text-center">
                The organization focuses on design and programming-related
                activities, competitions, and development projects. Our goal is to
                enhance its member capabilities to learn, adapt, and perform in
                desired skillsets.
              </p>
            </div>
          </GlassContainer>
        </div>

        <div className="text-center">
          {/* TECHNOLOGIES */}
          <GlassContainer className="mx-6 mb-6">
            <Card className="bg-transparent border-0 shadow-none">

              <CardContent>
                <div className="flex flex-row gap-3 items-center justify-center">
                  {technologies.map((tech) => (
                    <div key={tech.id}>
                      <Image
                        className="size-8 sm:size-16"
                        src={tech.icon}
                        alt={tech.alt}
                        width={64}
                        height={64}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </GlassContainer>
          <h3 className="text-sm">
            UTILIZING THE LATEST TECHNOLOGIES BEYOND THE CLASSROOM
          </h3>
        </div>
      </div>

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

      {/* Panel 3 */}
      <section className="p-12">
        <GlassContainer>
          <Card className="bg-transparent border-0 shadow-none">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
                <div className="flex items-center justify-center">
                  <div>
                    <Image
                      src="/assets/about-pics/about-pd-logo-1.png"
                      className="mb-8"
                      width={200}
                      height={200}
                      alt="PD Logo 1"
                    />
                    <Image
                      src="/assets/about-pics/about-pd-logo-2.png"
                      width={200}
                      height={200}
                      alt="PD Logo 2"
                    />
                  </div>
                  <Image
                    src="/assets/about-pics/about-pd-logo-3.png"
                    alt="PD Logo 3"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="max-w-3xl space-y-4">
                  <p className="text-lg">
                    It all started in 2013 when the founding members of the
                    Programmers' Den saw potential of having a skill focused student
                    organization. Since then, we have been the top performers and
                    competitors for the College of Computer Studies and even the
                    University in IT and development.
                  </p>
                  <p className="text-lg">
                    Since then, the organization has continued to grow into what it is
                    today. Our team has proudly been improving with our never ending
                    challenge to keep up with the latest technologies and programming
                    languages.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </GlassContainer>
      </section>

      {/* TEAM MEMBERS */}
      <section className="py-12 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Meet the Team Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">
              Meet the Team
            </h2>
            <p className="text-xl">
              PD Officers {new Date().getFullYear()} - {new Date().getFullYear() + 1}
            </p>
          </div>


          {/* Button for Desktop Layout */}
          <div className="hidden lg:block absolute top-8 right-8">
            <Dialog >
              <DialogTitle></DialogTitle>
              <DialogTrigger asChild>
                <Button variant="default">Show Memberfs</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-[#414141]">

                <MembersModal />
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" variant="default"
                      className='font-semibold py-3 px-12 transition-all hover:bg-primary/90 duration-300 active:bg-primary/80'>
                      Confirm
                    </Button>

                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>


          {/* Button for Mobile Layout */}
          <div className="lg:hidden flex items-center justify-center my-12">
            <Dialog >
              <DialogTitle></DialogTitle>
              <DialogTrigger asChild>
                <Button variant="default">Show Memberfs</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-[#414141]">

                <MembersModal />
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" variant="default"
                      className='font-semibold py-3 px-12 transition-all hover:bg-primary/90 duration-300 active:bg-primary/80'>
                      Confirm
                    </Button>

                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>


          <div className=" lg:hidden items-center justify-center mx-auto flex">
            <div className="grid grid-cols-2 gap-6">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block space-y-8">
            <div className="grid grid-cols-4 gap-8">
              <div className="col-start-2 col-span-1">
                <TeamMemberCard member={topMembers[0]} />
              </div>
              <div className="col-start-3 col-span-1">
                <TeamMemberCard member={topMembers[1]} />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-8">
              {otherMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>




        </div>
      </section>

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

      {/* PROGDEN STATUS */}
      <div className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <GlassContainer className="m-6  bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm ransition-all duration-300 hover:shadow-2xl hover:border-white/20">
            <Card className="bg-transparent border-0 shadow-none">
              <CardContent className="flex items-center justify-center flex-col gap-4 p-4">
                <UsersRound className="size-24  " />
                <p className="text-primary text-6xl font-bold m-0">
                  {stats.activeMembers}+
                </p>
                <p className="text-primary text-xl m-0">
                  Active Members
                </p>
              </CardContent>
            </Card>
          </GlassContainer>

          <GlassContainer className="m-6  bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm ransition-all duration-300 hover:shadow-2xl hover:border-white/20">
            <Card className="bg-transparent border-0 shadow-none">
              <CardContent className="flex items-center justify-center flex-col gap-4 p-4">
                <SquareCode className="size-24 " />
                <p className="text-primary text-6xl font-bold m-0">
                  {stats.projectsCount}+
                </p>
                <p className="text-primary text-xl m-0">PROJECTS</p>
              </CardContent>
            </Card>
          </GlassContainer>

          <GlassContainer className="m-6  bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm ransition-all duration-300 hover:shadow-2xl hover:border-white/20">
            <Card className="bg-transparent border-0 shadow-none ">
              <CardContent className="flex items-center justify-center flex-col gap-4 p-4">
                <Medal className="size-24  " />
                <p className="text-primary text-6xl font-bold m-0">
                  {stats.yearsOfExcellence}
                </p>
                <p className="text-primary text-xl m-0">
                  Years of Excellence
                </p>
              </CardContent>
            </Card>
          </GlassContainer>
        </div>
      </div>

      {/* SIGN UP */}
      <div className="relative w-full py-16 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/assets/about-pics/signUpBg.png"
          alt="Sign Up Background"
          layout="fill"
          className="object-fill"
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-center ">
          <h1 className="text-6xl font-bold mb-8">
            BE A PART OF OUR STORY
          </h1>



          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-sm">
            <Button asChild variant="outline" size="lg" className="font-bold text-lg rounded-full p-6 w-full">
              <Link href="/perks">Membership Perks</Link>
            </Button>
            <Button asChild size="lg" className="font-bold text-lg rounded-full p-6 w-full">
              <Link href="/join">
                Sign Up <ChevronRight className="ml-2 size-5 " />
              </Link>
            </Button>
          </div>





        </div>
      </div>

      {/* WEBSITE CREATED BY:  */}
      <div className="text-center py-24 m-6">
        <GlassContainer className="max-w-4xl mx-auto">
          <Card className="bg-transparent border-0 shadow-none">
            <CardHeader>
              <CardTitle className="font-semibold sm:text-3xl text-2xl text-primary">
                ProgDen Website created by:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="px-6 text-lg">
                King Paolo Franco, John Andrei Tacujan, Paula Joyce Ucol, Mark Louis
                Cadiente, Marc Jersey Castro,
                <br />
                Brigitte Tamondong, Jenny Jane Flores, Kyran Emmanuel Solomon, and
                Kharl Asuncion
              </p>
            </CardContent>
          </Card>
        </GlassContainer>
      </div>



    </div >
  );
}
