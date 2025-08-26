// components/ui/team-member-card.tsx
import { Github,  Mail } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import { TeamMember } from '@/data/teamMembers';
import { MagicCard } from '@/components/magicui/magic-card';

interface TeamMemberCardProps {
	member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
	return (
		<MagicCard className='rounded-2xl'>
			<div className='flex items-center text-muted justify-between  h-88 flex-col p-6 '>{/*  // pag inalis text-muted nagiging black sa pd officer hovering*/}
				<div className='relative  size-32 rounded-full overflow-hidden mb-4 border-2 shadow-md  object-cover'>
					<Image
						src={member.image}
						alt={member.name}
						fill
					/>
				</div>
				<h5 className='text-xl font-bold text-center tracking-wide'>{member.name}</h5>
				<p className='text-sm p-1 px-4 rounded-full text-center font-semibold bg-white/10 my-2'>{member.title}</p>
				<div className='flex flex-row gap-4 items-center justify-center text-primary  mt-4'>
					{member.socials.github && (
						<a href={member.socials.github} target="_blank" rel="noopener noreferrer" className='transition-colors duration-300 hover:text-secondary'>
							<Github className='w-6 h-6' />
						</a>
					)}
					{member.socials.email && (
						<a href={`mailto:${member.socials.email}`} target="_blank" rel="noopener noreferrer" className='transition-colors duration-300 hover:text-secondary'>
							<Mail className='w-6 h-6' />
						</a>
					)}
				</div>
			</div>
		</MagicCard>
	);
}