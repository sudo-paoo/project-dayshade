import React from 'react';
import HomeHero from '@/components/sections/home/home-hero';

export default function Page() {
  return (
    <>
      <div className="min-h-screen pt-4 bg-black text-white bg-[url('/assets/circles.png')] bg-cover">
        {/* Hero Div*/}
        <HomeHero />
        {/* Sample Background for Transition */}
        {/* Projects Section */}
        <div className=" min-h-80 flex flex-col relative top-[-30px] justify-center items-center h-auto w-full py-8 bg-black bg-gradient-to-b from-black via-[#252323] to-black mask-y-from-90% mask-y-to-100%"></div>
      </div>
    </>
  );
}
