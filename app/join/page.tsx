import React from "react";
import { JoinForm } from "@/components/join-ui/JoinForm";
import GradientBackground from "@/components/shared/GradientBackground";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GlassContainer } from "@/components/shared/glass-container";
import {
  CheckCheck,
  Presentation,
  Shirt,
  SquareUser,
  Trophy,
} from "lucide-react";

const youllGet = [
  {
    icon: <Trophy />,
    title: "More chances to join competitions",
    description: "Access to hackathons, coding challenges and more!",
  },
  {
    icon: <Presentation />,
    title: "Exclusive Sessions",
    description: "Access to ProgDen webinars and workshops",
  },
  {
    icon: <Shirt />,
    title: "Exclusive Merchandise",
    description: "Access to eye-catching merchandise",
  },
  {
    icon: <SquareUser />,
    title: "Real Projects",
    description: "Access to collaborate with seniors to build your portfolio!",
  },
];

const memberData = [
  {
    ActiveMember: "100",
    Projects: "50",
    YearsOfExcellence: "13",
  },
];

const page = () => {
  return (
    <GradientBackground>
      <section className="w-full max-w-7xl mx-auto grid md:grid-cols-2 h-ful gap-5">
        <div className="flex flex-col gap-8">
          <Card className="flex items-center gap-5 p-6 rounded-2xl shadow-lg bg-gradient-to-br from-[var(--color-pd-green)]/20 to-[var(--color-pd-purple)]/20 border border-white/10 hover:scale-[1.04] transition-transform duration-200 relative overflow-hidden">
            <h2 className="text-3xl font-extrabold text-[var(--color-pd-green)] mb-2 tracking-tight flex gap-2">
              <span className="inline-flex items-center">
                <CheckCheck />
              </span>
              What You'll Get
            </h2>
            <p className="text-base text-gray-300 mb-4">
              Unlock exclusive perks and become part of a thriving community.
            </p>
          </Card>
          <div className="grid sm:grid-cols-2 gap-6">
            {youllGet.map((item, index) => (
              <Card
                key={index}
                className="flex items-center gap-5 p-6 rounded-2xl shadow-lg bg-gradient-to-br from-[var(--color-pd-green)]/20 to-[var(--color-pd-purple)]/20 border border-white/10 hover:scale-[1.04] transition-transform duration-200 relative overflow-hidden"
              >
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-pd-green)] to-[var(--color-pd-purple)] text-white text-3xl shadow-md">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <CardTitle className="text-lg font-bold mb-1 text-[var(--color-pd-green)] drop-shadow">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-200">
                    {item.description}
                  </CardDescription>
                </div>
                <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-[var(--color-pd-green)] to-[var(--color-pd-purple)] opacity-30" />
              </Card>
            ))}
          </div>
          <Card className="mt-4 p-6 rounded-2xl shadow-lg bg-gradient-to-br from-[var(--color-pd-green)]/20 to-[var(--color-pd-purple)]/20 border border-white/10 flex flex-col items-center">
            <h3 className="text-xl font-bold text-center text-[var(--color-pd-purple)] mb-4 tracking-wide">
              Community Stats
            </h3>
            <div className="grid grid-cols-3 gap-6 w-full">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-extrabold text-[var(--color-pd-green)] ">
                  {memberData[0].ActiveMember}
                </span>
                <span className="text-xs text-gray-300 mt-1">
                  Active Members
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-extrabold text-[var(--color-pd-purple)] ">
                  {memberData[0].Projects}
                </span>
                <span className="text-xs text-gray-300 mt-1">Projects</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-extrabold text-yellow-400 ">
                  {memberData[0].YearsOfExcellence}
                </span>
                <span className="text-xs text-gray-300 mt-1">
                  Years of Excellence
                </span>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <span>
                  <SquareUser />
                </span>
                Join the Den
              </CardTitle>
              <CardDescription>
                Fill out the form to become a member
              </CardDescription>
            </CardHeader>
            <CardContent>
              <JoinForm />
            </CardContent>
            <CardFooter className="text-xs">
              By submitting through the form, you agree to the following. In
              compliance with Data Privacy Act 0f 2012, it's implementing rules
              and regulations, and other issuance of the National Privacy
              Commission, you authorize the organization(Programmers' Den) to
              collect your data for accomplishing the said activity
            </CardFooter>
          </Card>
        </div>
      </section>
    </GradientBackground>
  );
};

export default page;
