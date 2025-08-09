//TODO: integrate 
// {AppSettings}/about/route 

import { NextResponse } from "next/server";
import { aboutUsData } from "../data";

export async function GET()
{
	// REPLACE: const data = await getFromDatabase();
	try
	{
		return NextResponse.json(aboutUsData);
	}
	catch (error)
	{
		/* TODO: ADD SONNER */
		console.error(error);
		return NextResponse.json({ message: 'Internal server error', error: (error as Error).message }, { status: 500 });
	}
}
  
