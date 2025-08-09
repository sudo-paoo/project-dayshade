import React from 'react'
import PerksHero from '@/components/views/perks-hero'
import PerksBento from '@/components/views/perks-bento'


function PerksPage() {
  return (
    <div className='container flex flex-col items-center justify-center bg-pd-dark-grey relative min-h-screen'>
      <div className='absolute inset-0 bg-[url(/assets/pattern.png)] bg-cover bg-center opacity-15 z-0'></div>
      <div className='relative z-10 w-full flex flex-col items-center justify-center'>
        <PerksHero />
        <PerksBento />
      </div>
    </div>
  )
}

export default PerksPage