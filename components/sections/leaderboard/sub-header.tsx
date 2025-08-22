import { GlassContainer } from "@/components/shared/glass-container";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

const SubHeader = () => {
  return (
    <GlassContainer className="pb-9 pt-8 lb-glass-plus">
      <div className={`space-y-2 lb-content-width`}>
        <span className="flex items-center">
          <Image
            src="/assets/pd-logo.png"
            alt="PD Logo"
            width={52}
            height={35}
            className="rounded-lg"
          />
          <X className="text-red-700" />
          <Image
            src="/assets/csc-logo.png"
            alt="CSC Logo"
            width={52}
            height={35}
            className="rounded-lg"
          />
        </span>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-[#791212] bg-clip-text text-transparent">
          QuiCCStions Overdrive
        </h1>
        <p className="md:text-lg">Check who’s winning the race!</p>
      </div>
    </GlassContainer>
  );
};

export default SubHeader;
