//TODO: integrate 
// {AppSettings}/about/stats/route

import { NextResponse } from 'next/server';
import { aboutUsData } from '../../../data';
import { TeamMember } from '@/types/index';

// Handles updating a team member by ID
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body: Partial<TeamMember> = await request.json();
    const memberId = parseInt(id, 10);

    const memberIndex = aboutUsData.team.findIndex(m => m.id === memberId);
    if (memberIndex === -1) {
      return NextResponse.json({ message: 'Team member not found' }, { status: 404 });
    }
    
    // UPDATE OPERATION
	// REPLACE WITH await updateStatsInDatabase(body) or the updateFunction name
	  aboutUsData.team[memberIndex] = { ...aboutUsData.team[memberIndex], ...body };

    return NextResponse.json({ message: 'Team member updated', data: aboutUsData.team[memberIndex] });

  } catch (error) {
    console.error('Error updating team member:', error);
    return NextResponse.json({ message: 'Internal server error', error: (error as Error).message }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const memberId = parseInt(id, 10);

    const memberIndex = aboutUsData.team.findIndex(m => m.id === memberId);
    if (memberIndex === -1) {
      return NextResponse.json({ message: 'Team member not found' }, { status: 404 });
    }

    // DELETE OPERATION
    // REPLACE WITH await updateStatsInDatabase(body) or the updateFunction name
	aboutUsData.team.splice(memberIndex, 1);

    return NextResponse.json({ message: 'Team member deleted' });

  } catch (error) {
    console.error('Error deleting team member:', error);
    return NextResponse.json({ message: 'Internal server error', error: (error as Error).message }, { status: 500 });
  }
}
