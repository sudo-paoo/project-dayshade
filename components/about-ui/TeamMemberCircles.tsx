'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import TeamMemberCard from './TeamMemberCard';
import { teamMembers, TeamMember } from '@/data/teamMembers';

export const TeamMemberCircles = () => {
	const [hoveredMember, setHoveredMember] = useState<TeamMember | null>(null);

	return (
		<div className='relative flex flex-col items-center '>
			<div className='flex flex-row items-start justify-center gap-2'>

				{/* TODO: CAROUSEL */}
				{teamMembers.map((member) => (
					<div
						key={member.id}
						className='relative flex flex-col items-center justify-start p-2'
						onMouseEnter={() => setHoveredMember(member)}
						onMouseLeave={() => setHoveredMember(null)}
					>
						<div className='size-24 rounded-full bg-gray-800 border-2 border-gray-600 overflow-hidden relative'>
							<Image
								src={member.image}
								alt={member.name}
								fill
								style={{ objectFit: 'cover' }}
							/>
						</div>

						<p className='text-sm text-gray-400 mt-2 text-center w-24 h-10 flex items-center justify-center whitespace-normal'>
							{member.title}
						</p>
					</div>
				))}
			</div>

			{/* TODO: FRAMER MOTION ANIMATION*/}
			{hoveredMember && (
				<div className='fixed z-20 top-1/2'>
					<TeamMemberCard member={hoveredMember} />
				</div>
			)}
		</div>
	);
};