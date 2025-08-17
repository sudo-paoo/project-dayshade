'use client'

import { technologies } from '@/data/technologies'
import React from 'react'
import { GlassContainer } from '../shared/glass-container'
import { Card, CardContent } from '../ui/card'
import Image from "next/image";

import { animate, motion, scale } from 'framer-motion'

export default function HeroSection() {
	return (
		<div


			className="min-h-screen  flex flex-col overflow-hidden items-center justify-around relative py-24">
			<div className="absolute inset-0  z-[-1]">
				<Image
					className="size-26 absolute top-40 left-10 "
					src="/assets/circle-green.png"
					alt="Green circle"
					width={104}
					height={104}
				/>
				<Image
					className="size-24 absolute top-1/2 right-10"
					src="/assets/circle-purple.png"
					alt="Purple circle"
					width={96}
					height={96}
				/>
				<Image
					className="left-20  absolute bottom-0"
					src="/assets/shape-1.png"
					alt="Abstract shape 1"
					width={96}
					height={96}
				/>
				{/* MISSING PNG  */}
				<Image
					className="size-76 absolute bottom-[-2rem] right-[3rem] "
					src="/assets/circle-green.png"
					alt="Green circle"
					width={304}
					height={304}
				/>
				<Image
					className="size-56 rotate-150 absolute bottom-[-5rem] left-[-5rem]"
					src="/assets/circle-purple.png"
					alt="Purple circle"
					width={224}
					height={224}
				/>
			</div>
			{/* CTA */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}

				className="flex items-center justify-center gap-8 my-12 flex-col sm:flex-row"
			>
				<Image
					src="/assets/about-pics/about-hero-img.png"
					alt="about-hero"
					className="w-3/4 sm:w-1/2"
					width={600}
					height={400}
				/>
				<GlassContainer className="sm:max-w-2xl mx-6 p-">
					<h1 className="sm:text-6xl text-2xl font-bold text-center">
						ONLY THE{" "}
						<span className="text-primary">
							BEST
							<br />
						</span>
						AMONG THE REST
					</h1>
					<div className="space-y-4">
						<h3 className="text-2xl font-bold text-center">
							Elite Programmers from BSIT, BSIS and BSCS
						</h3>
						<p className="sm:text-lg text-center">
							We are the Programmers' Den, an organization of Tarlac State
							University - College of Computer Studies that was founded in 2013.
						</p>
						<p className="sm:text-lg text-center">
							The organization focuses on design and programming-related
							activities, competitions, and development projects. Our goal is to
							enhance its member capabilities to learn, adapt, and perform in
							desired skillsets.
						</p>
					</div>
				</GlassContainer>
			</motion.div>

			<div className="text-center">
				{/* TECHNOLOGIES */}
				<GlassContainer className="mx-6 mb-6">
					<Card className="bg-transparent border-0 shadow-none">

						<CardContent>
							<div className="flex flex-row gap-3 items-center justify-center">
								{technologies.map((tech, index) => (
									<motion.div key={tech.id}
										initial={{ scale: 0, opacity: 0 }}
										whileInView={{ scale: 1, opacity: 1 }}
										viewport={{ amount: 0.7, once: false }}
										transition={{
											type: "spring",
											stiffness: 260,
											damping: 20,
											delay: index * 0.1,
											duration: 2
										}}
									>
										<Image
											className="size-8 sm:size-16"
											src={tech.icon}
											alt={tech.alt}
											width={64}
											height={64}
										/>
									</motion.div>
								))}
							</div>
						</CardContent>
					</Card>
				</GlassContainer>
				<h3 className="text-sm">
					UTILIZING THE LATEST TECHNOLOGIES BEYOND THE CLASSROOM
				</h3>
			</div>


		</div >
	)
}
