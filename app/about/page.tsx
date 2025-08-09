import React from 'react'
import { technologies } from '@/data/technologies'
import Navbar from '@/components/global/navbar'
import { ImageCarousel } from '@/components/ui/ImageCarousel'
import { teamMembers } from '@/data/teamMembers'
import TeamMemberCard from '@/components/ui/TeamMemberCard'
import { TeamMemberCircles } from '@/components/ui/TeamMemberCircles'
import { UsersRound } from 'lucide-react'
import Image from 'next/image'

export default function About() {

	// TEAM MEMBERS
	const topMembers = teamMembers.slice(0, 2);
	const otherMembers = teamMembers.slice(2);


	return (
		/* Dont add bg-color here */
		<div className='relative min-h-screen '>
			<div className='inset-0 absolute'>
				<Navbar />
			</div>
			{/* Panel 1 */}
			<div className='min-h-screen  flex flex-col overflow-hidden items-center justify-around text-slate-100 relative p-24'>

				{/* BACKGROUND IMAGES [TODO: PARALLAX MOVEMENT] */}
				<div className='absolute inset-0 bg-[#1b1b1b] z-[-1]'>
					<img className='size-26 absolute top-40 left-10 ' src="/assets/circle-green.png" alt="Green circle" />
					<img className='size-24 absolute top-1/2 right-10' src="/assets/circle-purple.png" alt="Purple circle" />
					<img className='left-20  absolute bottom-0' src="/assets/shape-1.png" alt="Abstract shape 1" />
					{/* <img className='size-24 ' src="/assets/shape-2.png" /> */}
					{/* MISSING PNG  */}
					<img className='size-76 absolute bottom-[-2rem] right-[3rem] ' src="/assets/circle-green.png" alt="Green circle" />
					<img className='size-56 rotate-150 absolute bottom-[-5rem] left-[-5rem]' src="/assets/circle-purple.png" alt="Purple circle" />
				</div>
				{/* CTA */}
				<div className='flex items-center justify-center gap-8 my-12'>
					<img src="/assets/about-pics/about-hero-img.png" alt="" />
					<div className='border-gray-800 border p-6 rounded-2xl max-w-2xl bg-black/60'>
						<h1 className='text-6xl font-bold'>ONLY THE <span className='text-[#43DAA1]'>BEST
							<br /> </span>AMONG THE REST</h1>
						<h3 className='text-2xl font-bold my-2'>Elite Programmers from BSIT, BSIS and BSCS</h3>
						<p className='text-lg'>
							We are the Programmers’ Den, an organization of Tarlac State University - College of Computer Studies that was founded in 2013.
						</p>
						<br />
						<p className='text-lg'>The organization focuses on design and programming-related activities, competitions, and development projects. Our goal is to enhance its member capabilities to learn, adapt, and perform in desired skillsets.</p>
					</div>
				</div>


				<div className='text-center'>

					{/* TECHNOLOGIES */}
					<div className='flex flex-row gap-3 bg-black/60 items-center justify-center p-6 rounded-2xl mb-6'>
						{technologies.map((tech) =>
						(
							<div key={tech.id} className='size-16 '>
								<img src={tech.src} alt={tech.alt} />
							</div>
						))}
					</div>
					<h3 className=''>UTILIZING THE LATEST TECHNOLOGIES BEYOND THE CLASSROOM</h3>
				</div>
			</div>

			{/* Panel 2 */}
			<div className='min-h-screen flex flex-col items-center justify-center relative'>
				<ImageCarousel />
				<h1 className='text-white text-9xl font-bold z-10'> TOGETHER, FOREVER</h1>
			</div >

			{/* Panel 3 */}
			<section className='p-12 bg-[#1b1b1b] text-slate-100 '>
				<div className='flex items-center justify-center border border-gray-700 rounded-4xl bg-black/50 p-6'>

					<div className='flex items-center justify-center'>
						<div >

							<img src="/assets/about-pics/about-pd-logo-1.png" className='mb-8	' />
							<img src="/assets/about-pics/about-pd-logo-2.png" className='' />
						</div>
						<img src="/assets/about-pics/about-pd-logo-3.png" alt="" />
					</div>
					<div className='max-w-3xl '>
						<p>
							It all started in 2013 when the founding members of the Programmers’ Den saw potential of having a skill focused student organization. Since then, we have been the top performers and competitors for the College of Computer Studies and even the University in IT and development.
						</p>
						<p>
							Since then, the organization has continued to grow into what it is today. Our team has proudly been improving with our never ending challenge to keep up with the latest technologies and programming languages.
						</p>
					</div>
				</div>
			</section>

			{/* TEAM MEMBERS*/}
			<div className='bg-[#1B1B1B]' >
				{/* Top 2 Members Grid */}
				<section className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mb-8">
					{topMembers.map((member) => (
						<TeamMemberCard key={member.id} member={member} />
					))}
				</section>

				{/* Remaining Members Grid */}
				<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
					{otherMembers.map((member) => (
						<TeamMemberCard key={member.id} member={member} />
					))}
				</section>
			</div >

			{/* PD OFFICERS*/}
			<div className='bg-[#1b1b1b] py-12'>
				<h1 className='text-[#4AEE98] text-3xl text-center font-bold'>PD Officers {new Date().getFullYear()} - {new Date().getFullYear() + 1}</h1>

				{/* TODO: FIND COMPONENT FOR ANIMATION OR MANUALLY MAKE IT */}
				<div className='flex flex-col items-center justify-center  my-6 overflow-hidden'>
					<TeamMemberCircles />
				</div>

			</div>

			{/* SEPARATOR */}
			<div className='flex items-center justify-center w-full bg-[#1b1b1b]'>
				<div className='bg-gradient-to-r to-[#73FFC5] from-[#2B5B3B] h-12 w-full'></div>

				<div className='flex flex-col items-center mx-8'>
					<h2 className='text-4xl font-bold text-[#43DAA1] whitespace-nowrap'>
						Our Impact
					</h2>
					<p className='text-lg text-gray-400 whitespace-nowrap'>
						Growing stronger every year
					</p>
				</div>

				<div className='bg-gradient-to-r to-[#2B5B3B] from-[#73FFC5] h-12 w-full'></div>
			</div>

			{/* PROGDEN STATUS */}
			<div className='bg-[#1b1b1b] flex flex-row justify-around items-center py-16'>
				<div className='flex items-center justify-center flex-col gap-2'>
					<UsersRound className='size-24 text-white' />
					{/* TODO: GET ACTIVE COUNT DYNAMIC COUNTING MEMBER*/}
					<p className='text-[#4AEE98] text-6xl font-bold'>100+</p>
					<p className='text-[#4AEE98] text-xl'>Active Members</p>
				</div>
				<div className='flex items-center justify-center flex-col gap-2'>
					<UsersRound className='size-24 text-white' />
					{/* TODO: GET DYNAMIC COUNTINGR*/}
					<p className='text-[#4AEE98] text-6xl font-bold'>50+</p>
					<p className='text-[#4AEE98] text-xl'>PROJECTS</p>
				</div>
				<div className='flex items-center justify-center flex-col gap-2'>
					<UsersRound className='size-24 text-white' />
					{/* TODO: GET DYNAMIC COUNTINGR*/}
					<p className='text-[#4AEE98] text-6xl font-bold'>13</p>
					<p className='text-[#4AEE98] text-xl'>Years of Excellence</p>
				</div>
			</div>

			{/* SIGN UP */}
			<div className='relative w-full py-16 overflow-hidden '>
				{/* Background Image */}
				<Image
					src="/assets/about-pics/signUpBg.png"
					alt="Sign Up Background"
					layout="fill"
					className='object-fill'
				/>
				{/* Content, positioned on top of the background */}
				<div className='relative z-10 flex flex-col items-center justify-center text-center '>
					<h1 className='text-6xl font-bold mb-8 text-white'>BE A PART OF OUR STORY</h1>
					<div className='flex gap-4'>
						<button className='rounded-full border-2 border-white px-8 py-3 font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300 text-white'>
							Membership Perks
						</button>
						<button className='rounded-full bg-[#43DAA1] px-8 py-3 font-semibold hover:bg-[#36b381] transition-colors duration-300'>
							Sign Up &gt;
						</button>
					</div>
				</div>
			</div>

			{/* WEBSITE CREATED BY:  */}
			<div className='bg-[#1b1b1b] text-white text-center py-24'>
				<h4 className='font-semibold text-3xl'>ProgDen Website created by: </h4>
				<p>
					King Paolo Franco, John Andrei Tacujan, Paula Joyce Ucol, Mark Louis Cadiente, Marc Jersey Castro,
					<br />
					Brigitte Tamondong, Jenny Jane Flores, Kyran Emmanuel Solomon, and Kharl Asuncion
				</p>
			</div>


		</div >
	)
}
