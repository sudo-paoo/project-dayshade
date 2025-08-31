'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { toast } from 'sonner'
import { Card, CardContent } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

type EditProjectMenuProps = {
  project: any
}

// ✅ Schema aligned with DB
const ProjectSchema = z.object({
  Title: z.string().min(2, { message: "Title is required" }),
  Developers: z.string().min(2, { message: "Developers are required" }),
  YTLinks: z.string().url({ message: "Enter a valid YouTube URL" }),
  PublishedDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "PublishedDate must be in YYYY-MM-DD format",
  }),
  Description: z.string().min(5, { message: "Description is required" }),
  is_monthly: z.boolean().optional(),
})

const EditProjectMenu = ({ project }: EditProjectMenuProps) => {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof ProjectSchema>>({
    resolver: zodResolver(ProjectSchema),
    defaultValues: {
      Title: project?.title || "",
      Developers: project?.devs?.join(", ") || "", // ✅ join array into string for input
      YTLinks: project?.embed_link || "",
      PublishedDate: project?.published_date || "",
      Description: project?.description || "",
      is_monthly: project?.is_monthly ?? false,
    },
    mode: "onChange",
  })

  async function onSubmit(values: z.infer<typeof ProjectSchema>) {
    try {
      setLoading(true)

      const payload = {
        title: values.Title,
        devs: values.Developers.split(",").map((d) => d.trim()), // ✅ convert string -> array
        embed_link: values.YTLinks,
        published_date: values.PublishedDate,
        description: values.Description,
        is_monthly: values.is_monthly ?? false,
      }

      const res = await fetch(`/api/UPDATEProjects/${project.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const error = await res.json()
        console.error(error)
        toast.error("Failed to save project.")
        return
      }

      toast.success("Project updated successfully!")
      form.reset(values)
      setOpen(false)
    } catch (error) {
      console.error(error)
      toast.error("Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          size="sm"
          className="rounded-full px-4"
        >
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader className="flex items-center">
          <DialogTitle className="text-primary font-bold">EDIT PROJECT</DialogTitle>
        </DialogHeader>

        <Card>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                {/* Title */}
                <FormField
                  control={form.control}
                  name="Title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold">Title*</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter project title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Developers */}
                <FormField
                  control={form.control}
                  name="Developers"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold">Developers*</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Alice, Bob" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* YouTube Link */}
                <FormField
                  control={form.control}
                  name="YTLinks"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold">YT Embed Link*</FormLabel>
                      <FormControl>
                        <Input placeholder="https://youtube.com/embed/..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Published Date */}
                <FormField
                  control={form.control}
                  name="PublishedDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold">Published Date*</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Description */}
                <FormField
                  control={form.control}
                  name="Description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold">Description*</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter project description" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <DialogFooter>
                  <Button type="submit" disabled={loading}>
                    {loading ? "Saving..." : "Edit Project"}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  )
}

export default EditProjectMenu
