'use client'

import React, { useState } from 'react'
import { Label } from "@/components/ui/label";
import { Switch } from '@/components/ui/switch';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Star, Film, Users, Trophy } from 'lucide-react';
import { useRouter } from 'next/navigation';

const AdminDashboard = () => {
  const router = useRouter();
  const [Active, isActive] = useState(false);

  // Mock data for dashboard cards
  const cards = [
    {
      id: 'featured-projects',
      icon: <Star size={28} className="text-yellow-500" />,
      title: 'Featured Projects',
      description: 'Manage highlighted projects on the main page',
      stat: { value: 10, label: 'total' },
      content: [
        { left: 'Project #1', right: 'Dev Name' },
        { left: 'Project #2', right: 'Dev Name' },
        { left: 'Project #3', right: 'Dev Name' },
      ],
      button: { label: 'View All', route: '/admin/project' },
    },
    {
      id: 'project-showcase',
      icon: <Film size={28} className="text-purple-500" />,
      title: 'Project Showcase',
      description: 'Highlight current showcase',
      stat: { value: 5, label: 'showcases' },
      showcase: {
        name: 'Spooky Sprout!',
        devs: 'Dev Names',
      },
      button: { label: 'Manage', route: '/admin/project' },
    },
    {
      id: 'active-members',
      icon: <Users size={28} className="text-blue-500" />,
      title: 'Active Members',
      description: 'Community participation',
      stat: { value: 98, label: 'members' },
      extra: {
        pending: 10,
        lastApp: 'Aug 15, 2025',
      },
      button: { label: 'Review Applications', route: '/admin/recruitment' },
    },
    {
      id: 'leaderboards',
      icon: <Trophy size={28} className="text-green-500" />,
      title: 'Leaderboards',
      description: 'Latest rankings',
      stat: { value: 'Aug 18, 2025', label: 'last update' },
      header: {left: 'Rank', right: 'Points'},
      content: [
        { left: '1. John Doe', right: '2500' },
        { left: '2. Jane Doe', right: '2300' },
        { left: '3. Sam Smith', right: '2100' },
      ],
      button: { label: 'Manage Board', route: '/admin/leaderboard' },
    },
  ];

  return (
    <section>
      {/* Header */}
      <header className="flex justify-between p-4">
        <div className="flex flex-col gap-2">
          <Label className="text-2xl font-bold" htmlFor="dashboard">
            Dashboard
          </Label>
          <p className="text-muted-foreground">Manage the Page</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <Label className="text-lg">Recruitment</Label>
          <div className="flex items-center gap-2 rounded-md p-3 bg-card border">
            <Switch
              id="recruitment"
              checked={Active}
              onCheckedChange={isActive}
            />
            <Label htmlFor="recruitment">
              {Active ? 'Active' : 'Not Active'}
            </Label>
          </div>
        </div>
      </header>

      {/* Main Cards */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
        {cards.map((card) => (
          <Card key={card.id}  >
            <CardHeader className="flex flex-row justify-between items-start">
              <div className="flex gap-2 items-center">
                {card.icon}
                <div>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">{card.stat.value}</span>
                <span className="text-xs text-muted-foreground">{card.stat.label}</span>
              </div>
            </CardHeader>

            <CardContent >

              {/* Content renderer depending on card type */}
              {card.content && (
                <div className="flex flex-col gap-2 rounded-md p-3 bg-card border">

                  {/* Card header for LeaderBoards */}
                  {card.header && (
                    <div className="flex justify-between text-sm text-muted-foreground font-medium">
                      <span>{card.header.left}</span>
                      <span>{card.header.right}</span>
                    </div>
                  )}

                  {/* Card Content for Featured Projects and LeaderBoard */}
                  {card.content.map((row, i) => (
                    <div key={i} className="flex justify-between text-md text-muted-foreground">
                      <span>{row.left}</span>
                      <span className="font-medium">{row.right}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Card Content for Project ShowCase */}
              {card.showcase && (
                <div className="flex flex-col gap-2 rounded-md p-3 bg-card border">
                  <span className="font-light">Active Showcase</span>
                  <Label className="text-2xl font-bold">{card.showcase.name}</Label>
                  <span className="font-light">{card.showcase.devs}</span>
                </div>
              )}

              {/* Card Content for Active Memebers */}
              {card.extra && (
                <div className="flex flex-col gap-2 rounded-md p-3 bg-card border">
                  <Label className="text-lg font-light">
                    Pending Applications: <span className="font-medium">{card.extra.pending}</span>
                  </Label>
                  <span className="font-medium text-sm">Last Application: {card.extra.lastApp}</span>
                </div>
              )}
            </CardContent>

            <CardFooter className="flex justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={() => router.push(card.button.route)}
              >
                {card.button.label}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </main>
    </section>
  )
}

export default AdminDashboard
