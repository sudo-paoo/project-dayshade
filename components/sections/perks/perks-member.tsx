"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { motion, LazyMotion, domAnimation } from "framer-motion";

function PerksMember() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="mx-auto">
        <Card className="w-full mt-12 overflow-hidden bg-gradient-to-br from-pd-purple/90 to-pd-purple/70 border-0 shadow-2xl relative">
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: "url(/assets/pattern.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative z-20 container px-4 md:px-6 py-16 flex flex-col space-y-8 text-center mx-auto"
          >
            <h2 className="text-4xl font-bold sm:text-6xl text-white tracking-tight">
              BECOME A MEMBER TODAY
            </h2>
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
          </motion.div>
        </Card>
      </div>
    </LazyMotion>
  );
}

export default PerksMember;
