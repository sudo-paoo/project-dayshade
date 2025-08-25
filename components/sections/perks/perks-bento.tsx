"use client";

import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion, LazyMotion, domAnimation } from "framer-motion";

const MotionCard = motion(Card);

function PerksBento() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 max-w-7xl mx-auto">
      {/* join competitions card */}
      <MotionCard
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="col-span-1 lg:col-span-2 overflow-hidden bg-gradient-to-br from-background/95 to-background/50 border border-foreground/10 shadow-2xl"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12 gap-8">
          <div className="w-full lg:w-[60%]">
            <h2 className="text-pd-green text-3xl lg:text-5xl font-bold tracking-tight mb-6">
              Join Competitions and Events
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Get offered more opportunities to participate in competitions and
              experience your college-life attending both National and
              International events.
              <br />
              <br />
              As a member of the elite programmers, the College puts its faith
              in your skills.
            </p>
          </div>

          <div className="relative w-full lg:w-[40%]">
            <div className="absolute inset-0 bg-gradient-to-r from-pd-green/20 to-pd-purple/20 rounded-3xl blur-3xl" />
            <Image
              src="/assets/perks-pics/perks-2.png"
              alt="Competitions and Events"
              width={400}
              height={400}
              className="relative rounded-3xl transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </MotionCard>

      {/* merch card */}
      <MotionCard
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="col-span-1 overflow-hidden bg-gradient-to-br from-background/95 to-background/50 border border-foreground/10 shadow-2xl"
      >
        <div className="flex flex-col  p-8 gap-6 mx-auto">
          <h2 className="bg-gradient-to-r from-pd-purple to-pd-green bg-clip-text text-transparent text-2xl lg:text-4xl font-bold tracking-tight text-center">
            Exclusive Merchandise
          </h2>
          <div className="relative w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-pd-purple/20 to-pd-green/20 rounded-3xl blur-3xl" />
            <Image
              src="/assets/perks-pics/perks-4.png"
              alt="Exclusive Merchandise"
              width={500}
              height={400}
              className="relative rounded-3xl transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </MotionCard>

      {/* portfolio card */}
      <MotionCard
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="col-span-1 overflow-hidden bg-gradient-to-br from-background/95 to-background/50 border border-foreground/10 shadow-2xl"
      >
        <div className="flex flex-col  p-8 gap-6 mx-auto">
          <h2 className="bg-gradient-to-r from-pd-green to-pd-purple bg-clip-text text-transparent text-2xl lg:text-4xl font-bold tracking-tight text-center">
            Build Your Portfolio
          </h2>
          <div className="relative w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-pd-green/20 to-pd-purple/20 rounded-3xl blur-3xl" />
            <Image
              src="/assets/perks-pics/perks-3.png"
              alt="Build Your Portfolio"
              width={500}
              height={400}
              className="relative rounded-3xl transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </MotionCard>

      {/* team sessions card */}
      <MotionCard
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="col-span-1 lg:col-span-2 overflow-hidden bg-gradient-to-br from-background/95 to-background/50 border border-foreground/10 shadow-2xl"
      >
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between p-8 lg:p-12 gap-8">
          <div className="w-full lg:w-[50%]">
            <h2 className="text-pd-green text-3xl lg:text-5xl font-bold tracking-tight mb-6">
              Monthly Team Sessions
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Learn more in the realm of Web and App development, Game
              Development, and Multimedia with our Monthly Team Sessions!
            </p>
          </div>

          <div className="relative w-full lg:w-[50%]">
            <div className="absolute inset-0 bg-gradient-to-r from-pd-purple/20 to-pd-green/20 rounded-3xl blur-3xl" />
            <Image
              src="/assets/perks-pics/perks-5.png"
              alt="Monthly Team Sessions"
              width={500}
              height={400}
              className="relative rounded-3xl transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </MotionCard>
    </div>
  );
}

export default PerksBento;
