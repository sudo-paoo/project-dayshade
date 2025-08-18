'use client'

import React from 'react'
import {Label} from "@/components/ui/label";
import { Switch } from '@/components/ui/switch';
import {Card, CardContent} from "@/components/ui/card";


const page = () => {
  return (
    <section>
      <header className="flex items-center justify-between p-4">
        {/* The Label stuff */}
        <div className="flex flex-col gap-2">
            <Label className='text-2xl font-bold' htmlFor="dashboard">
              Dashboard
            </Label>
            <p>Manage the Page</p>
        </div>

        {/* Recruitment button thing */}
        <div className='flex items-center gap-4'>
          <Label className='text-lg'>Recruitment</Label>
          <div className='flex items-center gap-2 border-1 rounded-md p-4 bg-card'>
            <Switch id="recruitment" />
            <Label htmlFor="recruitment">Active/Not Active</Label>
          </div>
        </div>
      </header>

    </section>
  )
}

export default page