"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";

function PerksHero() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="bg-card">
        <div className="flex flex-col-reverse md:flex-row text-foreground justify-center items-center gap-8 lg:gap-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6 max-w-xl w-full md:w-1/2 py-4 px-6 md:px-0"
          >
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Sign up for exclusive{" "}
              <span className="bg-gradient-to-r from-pd-green to-pd-purple bg-clip-text text-transparent">
                Membership perks
              </span>
            </h1>
            <p className="text-lg mb-2 text-muted-foreground">
              Join our community of passionate programmers and unlock amazing
              benefits
            </p>
            <Button asChild size="lg" className="w-fit group">
              <Link href="/join">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full md:w-1/2 flex justify-end"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pd-green/20 to-pd-purple/20 rounded-3xl blur-3xl" />
            <Image
              src="/assets/perks-pics/perks-1.png"
              alt="Perks Hero Image"
              width={500}
              height={300}
              className="relative shadow-2xl w-full object-contain md:max-w-[500px]"
              priority
            />
          </motion.div>
        </div>
      </div>
    </LazyMotion>
  );
}

export default PerksHero;
