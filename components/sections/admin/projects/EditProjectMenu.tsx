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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from '@/components/ui/checkbox'


type EditProjectMenuProps = {
  project: any
}

const ProjectSchema = z.object({
  Title: z.string().min(2, { message: "Title is required" }),
  Developers: z.string().min(2, { message: "Developers are required" }),
  Tags: z.string().min(2, { message: "Tags are required" }),
  YTLinks: z.string().url({ message: "Enter a valid YouTube URL" }),
  PublishedDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "PublishedDate must be in YYYY-MM-DD format",
  }),
  Description: z.string().min(5, { message: "Description is required" }),
  MonthlyShowcase: z.boolean().optional(),
  FeaturedShowcase: z.boolean().optional(),
  FeaturedOrder: z.enum(["1", "2", "3"]).optional(),
})

const EditProjectMenu = ({ project }: EditProjectMenuProps) => {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof ProjectSchema>>({
    resolver: zodResolver(ProjectSchema),
    defaultValues: {
      Title: project?.title || "",
      Developers: project?.devs?.join(", ") || "",
      Tags: project?.tags?.join(", ") || "",
      YTLinks: project?.embed_link || "",
      PublishedDate: project?.published_date || "",
      Description: project?.description || "",
      MonthlyShowcase: project?.MonthlyShowcase ?? false,
      FeaturedShowcase: project?.FeaturedShowcase ?? false,
      FeaturedOrder: project?.FeaturedOrder ? project.FeaturedOrder.toString() : undefined,
    },
    mode: "onChange",
  })


  async function onSubmit(values: z.infer<typeof ProjectSchema>) {
    try {
      setLoading(true)

      const payload = {
        title: values.Title,
        devs: values.Developers.split(",").map((d) => d.trim()),
        tags: values.Tags.split(",").map((t) => t.trim()),
        embed_link: values.YTLinks,
        published_date: values.PublishedDate,
        description: values.Description,
        is_monthly: values.MonthlyShowcase ?? false,
        is_featured: values.FeaturedShowcase ?? false,
        featured_order: values.FeaturedOrder,
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

                {/* Tags */}
                <FormField
                  control={form.control}
                  name="Tags"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold">Tags*</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Gaming, WebDev" {...field} />
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

                {/* Monthly Showcase */}
                <FormField
                  control={form.control}
                  name="MonthlyShowcase"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between">
                      <FormLabel className="text-primary font-bold">Monthly Showcase</FormLabel>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Featured Showcase */}
                <FormField
                  control={form.control}
                  name="FeaturedShowcase"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between">
                      <FormLabel className="text-primary font-bold">Featured Showcase</FormLabel>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Featured Order */}
                <FormField
                  control={form.control}
                  name="FeaturedOrder"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between">
                      <FormLabel className="text-primary font-bold">Featured Order</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(val) => field.onChange(val)}
                          value={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select order (1, 2, 3)" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                          </SelectContent>
                        </Select>
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
