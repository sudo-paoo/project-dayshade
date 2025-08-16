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
		<div className='
            relative
            flex flex-col items-center justify-center
            p-6 rounded-2xl
            bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm
            w-56 h-88
            transition-all duration-300
            hover:shadow-2xl hover:border-white/20
        '>
			{/* Profile Picture with a sleek border */}
			<div className='relative w-32 h-32 rounded-full overflow-hidden mb-4 border-2  shadow-md'>
				<Image
					src={member.image}
					alt={member.name}
					fill
					style={{ objectFit: 'cover' }}
				/>
			</div>

			{/* Name and Title */}
			<h5 className='text-xl font-bold text-center tracking-wide'>{member.name}</h5>
			<p className='text-sm p-1 px-4 rounded-full text-center font-semibold bg-white/10  my-2'>{member.title}</p>

			{/* Social Icons with improved hover effects */}
			<div className='flex flex-row gap-4 text-gray-400 mt-4'>
				{member.socials.github && (
					<a href={member.socials.github} target="_blank" rel="noopener noreferrer" className='transition-colors duration-300 hover:text-[#43DAA1]'>
						<Github className='w-6 h-6' />
					</a>
				)}
				{member.socials.linkedin && (
					<a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className='transition-colors duration-300 hover:text-[#43DAA1]'>
						<Linkedin className='w-6 h-6' />
					</a>
				)}
				{member.socials.email && (
					<a href={`mailto:${member.socials.email}`} target="_blank" rel="noopener noreferrer" className='transition-colors duration-300 hover:text-[#43DAA1]'>
						<Mail className='w-6 h-6' />
					</a>
				)}
			</div>
		</div>
	);
}