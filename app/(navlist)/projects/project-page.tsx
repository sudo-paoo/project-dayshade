"use client";

import { useState, useEffect } from "react";
import {
  motion,
  LazyMotion,
  domAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";
import MembersProjectView from "@/components/views/members-project-view";
import MonthlyProjectShowcase from "@/components/views/monthly-project-showcase";
import FeaturedProjectsView from "@/components/views/featured-projects-view";
import ArchiveProjectShowcaseView from "@/components/views/archive-project-showcase-view";

export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleImageError = (imageName: string) => {
    console.log(`Image ${imageName} failed to load, using fallback`);
    setImageErrors((prev) => ({ ...prev, [imageName]: true }));
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white text-xl font-light"
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative min-h-screen overflow-x-hidden bg-black">
        {/* Background Effects */}
        <div className="fixed inset-0">
          <div className="absolute inset-0 bg-[url(/assets/pattern.png)] bg-repeat opacity-[0.02]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pd-purple/5 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="h-[70vh] min-h-[600px] relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 text-center px-4"
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pd-green via-white to-pd-purple">
                  Our Projects
                </span>
              </h1>
              <p className="text-white/70 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
                Discover innovative solutions crafted by our talented community
              </p>
            </motion.div>
          </section>

          {/* Main Content */}
          <main>
            {/* Featured Section */}
            <section className="relative z-20 -mt-32">
              <FeaturedProjectsView
                imageErrors={imageErrors}
                handleImageError={handleImageError}
              />
            </section>

            {/* Monthly Showcase */}
            <section>
              <MonthlyProjectShowcase
                imageErrors={imageErrors}
                handleImageError={handleImageError}
              />
            </section>

            {/* Members Section */}
            <section>
              <MembersProjectView />
            </section>

            {/* Archive Section */}
            <section className="bg-gradient-to-b from-black via-pd-dark-grey/10 to-black">
              <ArchiveProjectShowcaseView
                imageErrors={imageErrors}
                handleImageError={handleImageError}
              />
            </section>
          </main>
        </div>
      </div>
    </LazyMotion>
  );
}
