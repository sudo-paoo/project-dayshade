//TODO: integrate 
// {AppSettings}/about/stats/route

import { NextResponse } from 'next/server';
import { aboutUsData } from '../../data';
import { Stats } from '@/types/index';

export async function PATCH(request:Request) 
{
	try
	{
		const body: Partial<Stats> = await request.json();
		const {activeMembers, projectsCount, yearsOfExcellence} = body;


		// Input validation
		if (activeMembers !== undefined && (typeof activeMembers !== 'number' || isNaN(activeMembers) || activeMembers < 0)) {
			/* TODO: ADD SONNER */
			return NextResponse.json({ message: 'Invalid value for activeMembers. Must be a non-negative number.' }, { status: 400 });
		  }
		  if (projectsCount !== undefined && (typeof projectsCount !== 'number' || isNaN(projectsCount) || projectsCount < 0)) {
			  /* TODO: ADD SONNER */
			return NextResponse.json({ message: 'Invalid value for projectsCount. Must be a non-negative number.' }, { status: 400 });
		  }
		  if (yearsOfExcellence !== undefined && (typeof yearsOfExcellence !== 'number' || isNaN(yearsOfExcellence) || yearsOfExcellence < 0)) {
			  /* TODO: ADD SONNER */
			return NextResponse.json({ message: 'Invalid value for yearsOfExcellence. Must be a non-negative number.' }, { status: 400 });
		  }


		  /* UPDATE OPERATION */
		  aboutUsData.stats = {...aboutUsData.stats, ...body};
		  
		  // REPLACE WITH await updateStatsInDatabase(body) or the updateFunction name

		  /* TODO: ADD SONNER */
		  return NextResponse.json({message: 'Stats updated succesfully', data: aboutUsData.stats});
	}
	catch (error)
	{
		/* TODO: ADD SONNER */
		console.error(error);
		return NextResponse.json({ message: 'Internal server error', error: (error as Error).message }, { status: 500 });
	}
}