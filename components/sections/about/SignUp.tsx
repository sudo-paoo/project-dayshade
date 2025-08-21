'use client'

import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Button } from "@/components/ui/button";
import { GlassContainer } from '@/components/shared/glass-container'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'

export default function SignUp() {
	return (
		<div>
			{/* SIGN UP */}
			<div className="relative w-full py-16 overflow-hidden">
				{/* Background Image */}
				<Image
					src="/assets/about-pics/signUpBg.png"
					alt="Sign Up Background"
					layout="fill"
					className="object-fill"
				/>
				<div className="relative z-10 flex flex-col items-center justify-center text-center ">
					<motion.h1
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							type: 'spring',
							stiffness: 260,
							damping: 20,
							duration: 1,
						}}
						viewport={{ once: true }}

						className="text-6xl font-bold mb-8">
						BE A PART OF OUR STORY
					</motion.h1>

					<motion.div
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							type: 'spring',
							stiffness: 260,
							damping: 20,
							duration: 1,
							delay: 0.2
						}}
						viewport={{ once: true }}
						className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-sm">
						<Button asChild variant="outline" size="lg" className="font-bold text-lg rounded-full p-6 w-full">
							<Link href="/perks">Membership Perks</Link>
						</Button>
						<Button asChild size="lg" className="font-bold text-lg rounded-full p-6 w-full">
							<Link href="/join">
								Sign Up <ChevronRight className="ml-2 size-5 " />
							</Link>
						</Button>
					</motion.div>





				</div>
			</div>

			{/* WEBSITE CREATED BY:  */}
			<motion.div

				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					type: 'spring',
					stiffness: 260,
					damping: 20,
					duration: 1,
					delay: 0.2
				}}
				viewport={{ once: true }}
				className="text-center py-24 m-6">
				<GlassContainer className="max-w-4xl mx-auto">
					<Card className="bg-transparent border-0 shadow-none">
						<CardHeader>
							<CardTitle className="font-semibold sm:text-3xl text-2xl text-primary">
								ProgDen Website created by:
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="px-6 text-lg">
								King Paolo Franco, John Andrei Tacujan, Paula Joyce Ucol, Mark Louis
								Cadiente, Marc Jersey Castro,
								<br />
								Brigitte Tamondong, Jenny Jane Flores, Kyran Emmanuel Solomon, and
								Kharl Asuncion
							</p>
						</CardContent>
					</Card>
				</GlassContainer>
			</motion.div>
		</div >
	)
}
