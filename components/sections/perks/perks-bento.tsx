import React from 'react'
import Image from 'next/image'
import { GlassContainer } from '../../shared/glass-container'

function PerksBento() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 lg:p-36 lg:pb-12'>
      {/* join compe card */}
      <GlassContainer className='col-span-1 lg:col-span-2 flex flex-col lg:flex-row items-center justify-between p-4 lg:p-8 text-white'>
        <div className='w-full lg:w-[60%] py-4 lg:py-0'>
          <h1 className='text-pd-green text-2xl lg:text-4xl font-bold uppercase text-center'>Join Competitions and Events</h1>
          <p className='text-wrap text-xl lg:text-2xl'>Get offered more opportunities to participate in competitions and experience your college-life attending both National and International events.
          <br /> <br />
          As a member of the elite programmers, the College puts its faith in your skills.</p>
        </div>

        <Image
          src="/assets/perks-pics/perks-2.png"
          alt="Perks Bento Image"
          width={400}
          height={400}
        />
      </GlassContainer>

      {/* merch card */}
      <GlassContainer className='col-span-1'>
        <div className='flex flex-col items-center justify-center p-4 lg:p-8 text-white gap-8'>
          <h1 className='text-pd-purple text-2xl lg:text-4xl font-bold uppercase text-center'>Enjoy exclusive merchandise</h1>
          <Image
            src="/assets/perks-pics/perks-4.png"
            alt="Perks Bento Image"
            width={500}
            height={400}
          />
        </div>
      </GlassContainer>


      {/* portfolio card */}
      <GlassContainer className='col-span-1'>
          <div className='flex flex-col-reverse items-center justify-center p-4 lg:p-8 text-white gap-8'>
            <h1 className='text-pd-purple text-2xl lg:text-4xl font-bold uppercase text-center'>Build your work portfolio</h1>
            <Image
              src="/assets/perks-pics/perks-3.png"
              alt="Perks Bento Image"
              width={500}
              height={400}
            />
          </div>
      </GlassContainer>

      {/* team sessions card */}
      <GlassContainer className='col-span-1 lg:col-span-2 flex flex-col lg:flex-row-reverse items-center justify-between p-4 lg:p-8 text-white gap-8'>
        <div className='w-full lg:w-[50%]'>
          <h1 className='text-pd-green text-2xl lg:text-4xl font-bold uppercase text-center'>Learn more with monthly team sessions</h1>
          <p className='text-xl lg:text-2xl'>Learn more in the realm of Web and App development, Game Development, and Multimedia with our Monthly Team Sessions!</p>
        </div>
        <Image
          src="/assets/perks-pics/perks-5.png"
          alt="Perks Bento Image"
          width={500}
          height={400}
        />
      </GlassContainer>
    </div>
  )
}

export default PerksBento