import React from 'react'
import PerksHero from '@/components/sections/perks/perks-hero'
import PerksBento from '@/components/sections/perks/perks-bento'
import PerksWorkHard from '@/components/sections/perks/perks-work-hard'
import PerksMember from '@/components/sections/perks/perks-member'

export default function PerksPage() {
  return (
    <div className='container-fluid pt-12 md:pt-16 flex flex-col items-center justify-center bg-pd-dark-grey relative min-h-screen overflow-hidden'>
      <div className='absolute inset-0 bg-[url(/assets/pattern.png)] bg-cover bg-center opacity-15 z-0'></div>
      {/* Star 1 */}
      <div 
        className="absolute -right-10 top-20 w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] bg-[url('/assets/star-1.png')] bg-contain bg-no-repeat bg-center opacity-80 z-0"
      ></div>
      
      {/* Star 2 */}
      <div 
        className="absolute -left-40 top-1/2 transform -translate-y-1/2 w-[350px] h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-[url('/assets/star-2.png')] bg-contain bg-no-repeat bg-center opacity-70 z-0"
      ></div>
      
      {/* Circle */}
      <div 
        className="absolute -right-20 bottom-20 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-[url('/assets/circle-purple.png')] bg-contain bg-no-repeat bg-center opacity-75 z-0 blur-xs"
      ></div>
      
      <div className='relative z-10 w-full flex flex-col items-center justify-center'>
        <PerksHero />
        <PerksBento />
        <PerksWorkHard />
        <PerksMember />
      </div>
    </div>
  )
}