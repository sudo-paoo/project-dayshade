//TODO: integrate 
// {AppSettings}/about/stats/route

import { NextResponse } from 'next/server';
import { aboutUsData } from '../../../data';
import { Technology } from '@/types/index';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body: Partial<Technology> = await request.json();
    const techId = parseInt(id, 10);

    const techIndex = aboutUsData.technologies.findIndex(t => t.id === techId);
    if (techIndex === -1) {
      return NextResponse.json({ message: 'Technology not found' }, { status: 404 });
    }

    // UPDATE OPERATION
    // REPLACE WITH await updateStatsInDatabase(body) or the updateFunction name
    aboutUsData.technologies[techIndex] = { ...aboutUsData.technologies[techIndex], ...body };

    return NextResponse.json({ message: 'Technology updated', data: aboutUsData.technologies[techIndex] });
  } catch (error) {
    console.error('Error updating technology:', error);
    return NextResponse.json({ message: 'Internal server error', error: (error as Error).message }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const techId = parseInt(id, 10);

    const techIndex = aboutUsData.technologies.findIndex(t => t.id === techId);
    if (techIndex === -1) {
      return NextResponse.json({ message: 'Technology not found' }, { status: 404 });
    }

    // DELETE OPERATION
    // REPLACE WITH await updateStatsInDatabase(body) or the updateFunction name
    aboutUsData.technologies.splice(techIndex, 1);

    return NextResponse.json({ message: 'Technology deleted' });
  } catch (error) {
    console.error('Error deleting technology:', error);
    return NextResponse.json({ message: 'Internal server error', error: (error as Error).message }, { status: 500 });
  }
}
