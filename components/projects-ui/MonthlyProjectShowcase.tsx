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
// Sample of names, later fetch from database
const names = [
  "Ethan James Miller",
  "Olivia Rose Carter",
  "Mason David Wright",
  "Ava Grace Davis",
  "Noah William Wilson",
];
// Sample date
const dateNow = new Date();

const MonthlyProjectShowcase = ({
  projectName = "Project Name",
  imgSrc = "/assets/600x400.png",
  devNames = names,
  date = dateNow,
  description = "Description of the project showcase",
}: Props) => {
  const joinedNames = devNames.join(", ");
  return (
    <div className="flex flex-col justify-center items-center gap-2 pb-6">
      <GlassContainer
        variant="card"
        className="rounded-full text-center text-[var(--color-pd-green)] text-lg font-black italic m-4 px-7"
      >
        <p>Monthly Project Showcase</p>
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
      <div className="flex text-center max-w-65">
        <p className="text-[0.5rem]">
          {joinedNames} ({" "}
          {date.toLocaleDateString("en-PH", { year: "numeric", month: "long" })}{" "}
          )
        </p>
      </div>
      {/*  Project Description*/}
      <div className="flex">
        <p className="text-[0.6rem] font-bold">{description}</p>
      </div>
    </div>
  );
};

export default MonthlyProjectShowcase;
