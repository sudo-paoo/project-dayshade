// app/api/about/technologies/route.ts

import { NextResponse } from 'next/server';
import { aboutUsData } from '../../data';
import { Technology } from '@/types/index';

// Handles creating a new technology
export async function POST(request: Request) {
  try {
    const newTech: Technology = await request.json();

    // Basic input validation
    if (!newTech.name || !newTech.icon) {
      return NextResponse.json({ message: 'Missing required fields (name, icon).' }, { status: 400 });
    }

    // CREATE OPERATION
    // REPLACE WITH await updateStatsInDatabase(body) or the updateFunction name
    aboutUsData.technologies.push(newTech);

    return NextResponse.json({ message: 'Technology created', data: newTech }, { status: 201 });
  } catch (error) {
    console.error('Error creating technology:', error);
    return NextResponse.json({ message: 'Internal server error', error: (error as Error).message }, { status: 500 });
  }
}
