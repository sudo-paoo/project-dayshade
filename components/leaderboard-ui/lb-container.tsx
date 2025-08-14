import React, { ReactNode } from "react";
import { GlassContainer } from "../shared/glass-container";

type Props = {
  className?: string;
  topText?: { content: string; align: "left" | "right" };
  children: ReactNode;
};

// utilize className later when necessary

const LeaderboardsContainer = ({ className, topText, children }: Props) => {
  return (
    <GlassContainer className="rounded-none">
      <div className="my-5 md:my-10 lg:my-18 lb-content-width">
        <p
          className={`text-sm md:text-xl mt-4 md:mt-0 mb-2 ${
            topText?.align === "right" ? "flex justify-end" : ""
          }`}
        >
          {topText?.content}
        </p>
        <GlassContainer className={`rounded-4xl p-3 md:p-5 ${className}`}>
          {children}
        </GlassContainer>
      </div>
    </GlassContainer>
  );
};

export default LeaderboardsContainer;
