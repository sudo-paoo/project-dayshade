"use client"

import Link from "next/link"
import { GlassContainer } from "@/components/shared/glass-container"
import {
  Code,
  Palette,
  Smartphone,
  Gamepad2,
  Briefcase,
  Users,
  Brain,
  Info,
  ArrowRight
} from "lucide-react";
import SocialLinksSection from "./social-links";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, LazyMotion, domAnimation } from "framer-motion";

const MotionCard = motion(Card);

export default function ConnectWithUsSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-8xl rounded-xl p-4 sm:p-8 space-y-8">
        {/* Social links section */}
        <SocialLinksSection />

        {/* Work with us section */}
        <div className="text-center">
          <h2 className="text-white text-4xl sm:text-5xl font-bold">Work with us!</h2>
          <p className="text-gray-300 text-lg mt-2">All Red Hawks are welcome!</p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <MotionCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg p-6 flex flex-col items-center text-center bg-gradient-to-br from-background/95 to-background/50 border border-foreground/10 shadow-2xl transform transition-transform duration-300 hover:scale-105">
            <div className="bg-purple-800/50 p-3 rounded-full">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-white text-lg font-semibold">Competitive Programming Team</h3>
          </MotionCard>
          <MotionCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg p-6 flex flex-col items-center text-center bg-gradient-to-br from-background/95 to-background/50 border border-foreground/10 shadow-2xl transform transition-transform duration-300 hover:scale-105">
            <div className="bg-purple-800/50 p-3 rounded-full">
              <Palette className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-white text-lg font-semibold">Multimedia Team</h3>
          </MotionCard>
          <MotionCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg p-6 flex flex-col items-center text-center bg-gradient-to-br from-background/95 to-background/50 border border-foreground/10 shadow-2xl transform transition-transform duration-300 hover:scale-105">
            <div className="bg-purple-800/50 p-3 rounded-full">
              <Smartphone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-white text-lg font-semibold">Web and App Development Team</h3>
          </MotionCard>
          <MotionCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg p-6 flex flex-col items-center text-center bg-gradient-to-br from-background/95 to-background/50 border border-foreground/10 shadow-2xl transform transition-transform duration-300 hover:scale-105">
            <div className="bg-purple-800/50 p-3 rounded-full">
              <Gamepad2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-white text-lg font-semibold">Game Development Team</h3>
          </MotionCard>
        </div>

        {/* Detailed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <MotionCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg p-6 flex flex-col items-center text-center bg-gradient-to-br from-background/95 to-background/50 border border-foreground/10 shadow-2xl transform transition-transform duration-300 hover:scale-105">
            <div className="bg-purple-800/50 p-3 rounded-full">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-white text-lg font-semibold">GET INDUSTRY EXPERIENCE</h3>
            <p className="text-gray-300 text-sm">
              Learn how professionals in the industry work and prepare yourself as Programmers Den operates under
              industry standards.
            </p>
          </MotionCard>
          <MotionCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg p-6 flex flex-col items-center text-center bg-gradient-to-br from-background/95 to-background/50 border border-foreground/10 shadow-2xl transform transition-transform duration-300 hover:scale-105">
            <div className="bg-purple-800/50 p-3 rounded-full">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-white text-lg font-semibold">COLLABORATE WITH SENIOR PROGRAMMERS</h3>
            <p className="text-gray-300 text-sm">
              Get trained by your mentors and learn to manage projects with other skilled members.
            </p>
          </MotionCard>
          <MotionCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg p-6 flex flex-col items-center text-center bg-gradient-to-br from-background/95 to-background/50 border border-foreground/10 shadow-2xl transform transition-transform duration-300 hover:scale-105">
            <div className="bg-purple-800/50 p-3 rounded-full">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-white text-lg font-semibold">USE AI TECHNOLOGY</h3>
            <p className="text-gray-300 text-sm">
              We see AI as a tool to improve and innovate. Learn how to use modern technologies like AI to become a
              better programmer.
            </p>
          </MotionCard>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-w-[200px] bg-transparent border-white border-2 text-white hover:bg-white hover:text-pd-purple font-bold text-lg"
          >
            <Link href="/about">
              <Info className="mr-2 h-5 w-5" />
              About us
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="min-w-[200px] bg-white font-bold text-lg group"
          >
            <Link href="/join">
              Sign Up
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}