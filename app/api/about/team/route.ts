//TODO: integrate 
// {AppSettings}/about/stats/route

import { NextResponse } from 'next/server';
import { aboutUsData } from '../../data';
import { TeamMember } from '@/types/index';

export async function POST(request:Request)
{
	const newMember: TeamMember = await request.json();

	try
	{	
		// input validation
		if(!newMember.name || !newMember.title || !newMember.image)
		{
			return NextResponse.json({message: 'Missing required fieilds (name, title, image).'},
				{status:400});
		}

		/* POST OPERATION */
		const nextId = aboutUsData.team.length > 0 ? Math.max(...aboutUsData.team.map(m => m.id)) + 1: 1; // increment the ID, if no ID then default to 1
		newMember.id = nextId;

		aboutUsData.team.push(newMember);

		return NextResponse.json({message: 'Team member added', data: newMember}, {status: 201});
	}	
	catch (error)
	{
		/* TODO: ADD SONNER */
		console.error(error);
		return NextResponse.json({ message: 'Internal server error', error: (error as Error).message }, { status: 500 });
	}
}