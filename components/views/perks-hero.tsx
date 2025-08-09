import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

function PerksHero() {
  return (
    <>
      <div className='bg-pd-black flex flex-col lg:flex-row text-white w-full justify-between items-center p-8'>
        <div>
          <h1 className='text-xl lg:text-6xl font-bold uppercase'>Sign up for<br /> exclusive <br /> <span className='text-pd-green'>Membership perks</span></h1>
          <p>Join our community of passionate programmers and unlock amazing benefits</p>
        <Button className='mt-4 px-8 py-6 bg-gradient-to-r from-[#67FFAF] via-100% to-[#0D4D2C] rounded-full hover:bg-pd-green-dark cursor-pointer text-black font-bold text-xl'>Get Started</Button>
        </div>

        <Image
          src="/assets/perks-pics/perks-1.png"
          alt="Perks Hero Image"
          width={500}
          height={300}
        />
      </div>
    </>
  )
}

export default PerksHero