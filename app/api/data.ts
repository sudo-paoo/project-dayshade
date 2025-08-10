// THIS IS ONLY A MOCK DATABASE TO HOLD THE DATA IN MEMORY.
// REPLACE THIS WITH ACTUAL DATABASE CALLS.

import { AboutUsData } from "@/types";
import { teamMembers } from "@/data/teamMembers";
import { technologies } from "@/data/technologies";

export const aboutUsData: AboutUsData ={
	stats: 
	{
		activeMembers: 100,
		projectsCount: 50,
		yearsOfExcellence: 13,
	},
	team: teamMembers,
	technologies: technologies
}
