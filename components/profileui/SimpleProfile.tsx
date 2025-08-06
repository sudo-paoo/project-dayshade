import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  imageSrc: string;
  className?: string;
}

const SimpleProfile = ({ title, imageSrc, className }: Props) => {
  return (
    <>
      <div
        className={`flex min-h-25 max-w-50 flex-col items-center justify-start gap-y-3 p-2 ${className}`}
      >
        <div className="flex flex-shrink-0 w-12 h-12">
          <Image
            className="rounded-full object-cover"
            src={imageSrc}
            alt="Avatar"
            height={112}
            width={112}
          ></Image>
        </div>
        <div className="flex min-h-4 min-w-16 max-w-25 justify-center items-center">
          <p className="font-bold text-[0.6rem] text-center">{title}</p>
        </div>
      </div>
    </>
  );
};

export default SimpleProfile;
