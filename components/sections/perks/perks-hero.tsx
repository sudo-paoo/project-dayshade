import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function PerksHero() {
  return (
    <>
      <div className='bg-pd-black flex flex-col-reverse md:flex-row text-white w-full justify-between items-center'>
        <div className='p-4 md:pl-8'>
          <h1 className='text-xl lg:text-5xl font-bold uppercase'>Sign up for<br /> exclusive <br /> <span className='text-pd-green'>Membership perks</span></h1>
          <p>Join our community of passionate programmers and unlock amazing benefits</p>
          <Link href="/join" className='mt-4 w-max flex justify-center items-center px-4 md:px-16 py-2 bg-primary rounded-full text-black font-bold text-xl hover:bg-gradient-to-l hover:from-[rgb(18,198,176)] hover:to-[rgb(90,227,153)] transition-colors duration-300'>
              Get Started
          </Link>
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