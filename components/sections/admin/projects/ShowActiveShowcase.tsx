'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Label } from "@/components/ui/label"
import { toast } from 'sonner'
import { getMonthly } from '@/lib/projects/getMonthly'

const ShowActiveShowcase = () => {
  const [showcase, setShowcase] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProjects() {
      try {
         const data = await getMonthly();
        setShowcase(data);
      } catch (error) {
        console.error(error)
        toast.error("Something went wrong.")
      } finally {
        setLoading(false)
      }
    }
    loadProjects()
  }, [])

  if (loading) return <p>Loading...</p>

  const total = showcase.length
  // ✅ sort by published_date (or created_at if you have it)
  const sorted = [...showcase].sort(
    (a, b) => new Date(b.published_date).getTime() - new Date(a.published_date).getTime()
  )
  const latest = sorted[0] // take only most recent

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex justify-between items-center">
          <span>
            Active Showcase
            <span className="text-sm text-muted-foreground"> — Monthly Picks</span>
          </span>
          <span className="text-sm text-muted-foreground">
            Total: {total}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {latest ? (
          <div key={latest.id} className="flex flex-col items-start gap-1">
            <Label className="text-2xl font-bold">{latest.title}</Label>
            <span className="text-sm text-muted-foreground">
              By: {latest.devs?.join(", ")}
            </span>
            <span className="text-xs text-muted-foreground">
              Published: {latest.published_date}
            </span>
          </div>
        ) : (
          <p>No showcase projects available.</p>
        )}
      </CardContent>
    </Card>
  )
}

export default ShowActiveShowcase
