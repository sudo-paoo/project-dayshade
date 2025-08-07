import React from "react";
import { GlassContainer } from "../shared/glass-container";
import Image from "next/image";

interface Props {
  projectName: string;
  imgSrc: string;
  devNames: string[];
  date: Date;
  description: string;
}
// Project info object will be fetched from database

const FeaturedProject = ({
  projectName = "Project Name",
  imgSrc = "/assets/600x400.png",
  description = "Description of the project showcase",
}: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 pb-6">
      <GlassContainer
        variant="card"
        className="rounded-full text-center min-w-70 text-[var(--color-pd-green)] text-lg font-black italic m-4 px-7"
      >
        <p>Featured Project</p>
      </GlassContainer>
      <div className="flex flex-col justify-center items-center text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#BB86DC] to-[var(--color-pd-purple)]">
        <p>{projectName}</p>
      </div>
      <div className="relative flex aspect-video min-w-58">
        <Image
          className="rounded-2xl"
          src={imgSrc}
          alt="Project Image"
          fill
        ></Image>
      </div>
      <div className="flex text-center max-w-65"></div>
      {/*  Project Description*/}
      <div className="flex">
        <p className="text-[0.6rem] font-bold">{description}</p>
      </div>
    </div>
  );
};

export default FeaturedProject;
