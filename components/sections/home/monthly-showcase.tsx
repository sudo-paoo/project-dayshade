"use client"

import * as React from "react";
import { motion } from "framer-motion";

export function MonthlyShowcase() {
  const currentShowcase = {
      title: "ProgDen F4U-A1 Warthunder Custom Skin and Mascot",
      description:
        "Soar and conquer the skies with the custom ProgDen F4U-A1 Corsair War Thunder skin featuring our brand-new mascot. Custom skin on the F4U-A1 Corsair in the realistic and immersive game combat simulator War Thunder. Flying the classic and signature colors of Programmers Den delivered in a cinematic video.",
      is_monthly: true,
      is_featured: false,
      yt_id: "pt07ibtb8SM",
      published_date: new Date("2025-10-01"),
      tags: ["Custom Skin", "Game Design", "War Thunder Custom Skin"],
      devs: ["Mharl Vincent M. Aguilos", "Christian Kevin Y. Macale"],
  };

  const MotionGlassContainer = motion.div

  return (
    <section className="w-full h-full p-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-3xl lg:text-5xl italic font-bold text-pd-green">
            Monthly Project Showcase
          </h2>
        </div>
        {/* Project Card */}
        <div className="bg-pd-black rounded-2xl p-6 md:p-8 border border-gray-800">
          <div className="text-center">
            <h3 className="text-xl md:text-3xl font-bold mb-4">
              {currentShowcase.title}
            </h3>
          </div>
          {/* Project Youtube Embed */}
            <div className="relative w-full flex items-center justify-center mx-auto mb-6 rounded-lg overflow-hidden">
            <div className="md:w-[80%] h-[400px] md:h-[500px]">
              <iframe
              src={`https://www.youtube.com/embed/${currentShowcase.yt_id}`}
              title={currentShowcase.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              />
            </div>
            </div>
          {/* Credits */}
          <p className="text-white text-sm text-left mb-4 leading-relaxed">
            <span className="font-medium">Developer:</span>{" "}
            {currentShowcase.devs.join(", ")}
          </p>
          {/* Description */}
          <p className="text-white/90 mb-6 leading-relaxed text-left text-base md:text-lg lg:text-xl line-clamp-2">
            {currentShowcase.description}
          </p>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {currentShowcase.tags.map((tag) => (
              <span
                key={tag}
                className="bg-pd-purple/20 text-pd-purple px-3 py-1 rounded-full text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}