'use client'

import React from 'react'
import { Label } from "@/components/ui/label";
import { Switch } from '@/components/ui/switch';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Star, Film, Users, Trophy } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <section>
      {/* Header */}
      <header className="flex items-center justify-between p-4">
        <div className="flex flex-col gap-2">
          <Label className="text-2xl font-bold" htmlFor="dashboard">
            Dashboard
          </Label>
          <p className="text-muted-foreground">Manage the Page</p>
        </div>

        <div className="flex items-center gap-4">
          <Label className="text-lg">Recruitment</Label>
          <div className="flex items-center gap-2 rounded-md p-3 bg-card border">
            <Switch id="recruitment" />
            <Label htmlFor="recruitment">Active/Not Active</Label>
          </div>
        </div>
      </header>

      {/* Main Cards */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4">

        {/* Featured Projects */}
        <Card>
          <CardHeader className="flex flex-row justify-between items-start">
            <div className="flex gap-2 items-center">
              <Star size={28} className="text-yellow-500" />
              <div>
                <CardTitle className="text-xl">Featured Projects</CardTitle>
                <CardDescription>Manage highlighted projects on the main page</CardDescription>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">10</span>
              <span className="text-xs text-muted-foreground">total</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2 rounded-md p-3 bg-card border">
              <p className="text-md text-muted-foreground">Project #1 <span className="font-medium">Dev Name</span></p>
              <p className="text-md text-muted-foreground">Project #2 <span className="font-medium">Dev Name</span></p>
              <p className="text-md text-muted-foreground">Project #3 <span className="font-medium">Dev Name</span></p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="outline" size="sm">View All</Button>
          </CardFooter>
        </Card>

        {/* Project Showcase */}
        <Card>
          <CardHeader className="flex flex-row justify-between items-start">
            <div className="flex gap-2 items-center">
              <Film size={28} className="text-purple-500" />
              <div>
                <CardTitle className="text-xl">Project Showcase</CardTitle>
                <CardDescription>Highlight current showcase</CardDescription>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">5</span>
              <span className="text-xs text-muted-foreground">showcases</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2 rounded-md p-3 bg-card border">
              <span className="font-light">Active Showcase</span>
              <Label className="text-2xl font-bold">Spooky Sprout!</Label>
              <span className="font-light">Dev Names</span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="outline" size="sm">Manage</Button>
          </CardFooter>
        </Card>

        {/* Active Members */}
        <Card>
          <CardHeader className="flex flex-row justify-between items-start">
            <div className="flex gap-2 items-center">
              <Users size={28} className="text-blue-500" />
              <div>
                <CardTitle className="text-xl">Active Members</CardTitle>
                <CardDescription>Community participation</CardDescription>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">98</span>
              <span className="text-xs text-muted-foreground">members</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 rounded-md p-3 bg-card border">
              <Label className="text-lg font-light">
                Pending Applications: <span className="font-medium">10</span>
              </Label>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="outline" size="sm">Review Applications</Button>
          </CardFooter>
        </Card>

        {/* Leaderboards */}
        <Card>
          <CardHeader className="flex flex-row justify-between items-start">
            <div className="flex gap-2 items-center">
              <Trophy size={28} className="text-green-500" />
              <div>
                <CardTitle className="text-xl">Leaderboards</CardTitle>
                <CardDescription>Latest rankings</CardDescription>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm text-muted-foreground">Aug 18, 2025</span>
              <span className="text-xs text-muted-foreground">last update</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2 rounded-md p-3 bg-card border">
              <p className="text-md text-muted-foreground">1. John Doe <span className="font-medium">2500</span></p>
              <p className="text-md text-muted-foreground">2. Jane Doe <span className="font-medium">2300</span></p>
              <p className="text-md text-muted-foreground">3. Sam Smith <span className="font-medium">2100</span></p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="outline" size="sm">Manage Board</Button>
          </CardFooter>
        </Card>

      </main>
    </section>
  )
}

export default AdminDashboard
