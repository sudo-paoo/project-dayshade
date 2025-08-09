// components/ui/team-member-card.tsx
import { Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import { TeamMember } from '@/data/teamMembers';

interface TeamMemberCardProps {
	member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
	return (
		<div className='flex flex-col items-center justify-center p-6 bg-[#2e2e2e] border border-gray-800 rounded-2xl w-72 h-80'>
			{/* Profile Picture with Placeholder */}
			<div className='relative w-28 h-28 rounded-full bg-gray-700 overflow-hidden mb-4'>
				<Image
					src={member.image}
					alt={member.name}
					fill
					style={{ objectFit: 'cover' }}
				/>
			</div>

			{/* Name and Title */}
			<h5 className='text-lg font-bold text-white'>{member.name}</h5>
			<p className='text-sm p-1 px-4 rounded-full text-center font-semibold bg-[#d9d9d9] text-gray-800 my-2'>{member.title}</p>

			{/* Social Icons */}
			<div className='flex flex-row gap-3 text-gray-400 mt-2'>
				{member.socials.github && (
					<a href={member.socials.github} target="_blank" rel="noopener noreferrer">
						<Github className='w-5 h-5 hover:text-[#43DAA1]' /> {/* DEPRACTED | FIND ICONS */}
					</a>
				)}
				{member.socials.linkedin && (
					<a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
						<Linkedin className='w-5 h-5 hover:text-[#43DAA1]' /> {/* DEPRACTED | FIND ICONS */}
					</a>
				)}
				{member.socials.email && (
					<a href={member.socials.email} target="_blank" rel="noopener noreferrer">
						<Mail className='w-5 h-5 hover:text-[#43DAA1]' />
					</a>
				)}
			</div>
		</div>
	);
}