"use client"

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
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from "@/components/ui/textarea"
import DelProjectButton from './DelProjectButton'
import { updateProject } from '@/lib/projects/updateProjects'

type EditProjectMenuProps = {
  project: any
}

const ProjectSchema = z.object({
  Title: z.string().min(2, { message: "Title is required" }),
  Image: z.any().optional(),
  Developers: z.string().min(2, { message: "Developers are required" }),
  Tags: z.string().min(2, { message: "Tags are required" }),
  YTLinks: z.union([z.url({ message: "Enter a valid YouTube URL" }), z.literal("")]).optional(),
  SiteURL: z.union([z.url({ message: "Enter a valid URL" }), z.literal("")]).optional(),
  PublishedDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "Date must be in YYYY-MM-DD format",
  }),
  Description: z.string().min(5, { message: "Description is required" }),
  MonthlyShowcase: z.boolean().optional(),
  FeaturedShowcase: z.boolean().optional(),
  CurrentShowcase: z.boolean().optional(),
  FeaturedOrder: z.string().optional()
})

const EditProjectMenu = ({ project }: EditProjectMenuProps) => {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof ProjectSchema>>({
    resolver: zodResolver(ProjectSchema),
    defaultValues: {
      Title: project?.title || "",
      Image: project?.image_url || "",
      Developers: project?.devs?.join(", ") || "",
      Tags: project?.tags?.join(", ") || "",
      YTLinks: project?.embed_link || "",
      SiteURL: project?.site_url || "",
      PublishedDate: project?.published_date || "",
      Description: project?.description || "",
      MonthlyShowcase: project?.is_monthly ?? false,
      FeaturedShowcase: project?.is_featured ?? false,
      CurrentShowcase: project?.is_showcase ?? false,
      FeaturedOrder: project?.featured_order || undefined,
    },
    mode: "onChange",
  })

  async function onSubmit(values: z.infer<typeof ProjectSchema>) {
    try {
      setLoading(true)

      const formData = new FormData()
      Object.entries(values).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value as any)
        }
      })

      if (typeof values.Image === "string") {
        formData.append("ImageURL", values.Image)
      }

      await updateProject(project.id, formData)

      toast.success("Project updated successfully!")
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
        <Button variant="secondary" size="sm" className="rounded-full px-4">
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl">
        <DialogHeader className="flex items-center">
          <DialogTitle className="text-primary font-bold">Edit Project</DialogTitle>
        </DialogHeader>

        <Card>
          <CardContent className="min-h-[70vh] max-h-[80vh] overflow-y-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                {/* General Info */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField control={form.control} name="Title" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold">
                        Title*
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field} />
                        </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}/>
                  <FormField control={form.control} name="PublishedDate" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold">
                        Published Date*
                        </FormLabel>
                      <FormControl>
                        <Input type="date"
                        {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}/>
                  <FormField control={form.control} name="Tags" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold">Tags*</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Gaming, WebDev" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}/>
                  <FormField control={form.control} name="Developers" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold">Developers*</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Alice, Bob" {...field} />
                        </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}/>
                </section>

                {/* Media */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField control={form.control} name="Image" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold">Project Image</FormLabel>
                      <FormControl>
                        <Input type="file" accept="image/*" onChange={(e) => field.onChange(e.target.files?.[0])}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}/>
                  <FormField control={form.control} name="YTLinks" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold">YouTube Link</FormLabel>
                        <FormControl>
                          <Input placeholder="https://youtube.com/embed/..." {...field} />
                        </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}/>
                  <FormField control={form.control} name="SiteURL" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold">Website URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://example.com" {...field} />
                        </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}/>
                </section>

                {/* Description */}
                <FormField control={form.control} name="Description" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary font-bold">Description*</FormLabel>
                    <FormControl>
                      <Textarea
                        className="min-h-[120px]" {...field} />
                      </FormControl>
                    <FormMessage />
                  </FormItem>
                )}/>

                {/* Showcase Options */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                   <FormField control={form.control} name="CurrentShowcase" render={({ field }) => (
                    <FormItem className="flex items-center justify-between rounded-md border p-3">
                      <FormLabel className="text-primary font-bold">Current Showcase</FormLabel>
                      <FormControl>
                        <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        />
                        </FormControl>
                    </FormItem>
                  )}/>
                  <FormField control={form.control} name="MonthlyShowcase" render={({ field }) => (
                    <FormItem className="flex items-center justify-between rounded-md border p-3">
                      <FormLabel className="text-primary font-bold">Monthly Showcase</FormLabel>
                      <FormControl>
                        <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange} />
                        </FormControl>
                    </FormItem>
                  )}/>
                  <FormField control={form.control} name="FeaturedShowcase" render={({ field }) => (
                    <FormItem className="flex items-center justify-between rounded-md border p-3">
                      <FormLabel className="text-primary font-bold">Featured Showcase</FormLabel>
                      <FormControl>
                        <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        />
                        </FormControl>
                    </FormItem>
                  )}/>
                </section>

                {/* Featured Order */}
                <FormField control={form.control} name="FeaturedOrder" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary font-bold">Featured Order</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder='e.g., 1, 2, 3...' {...field} />
                      </FormControl>
                    <FormMessage />
                  </FormItem>
                )}/>

                {/* Footer */}
                <DialogFooter className='flex flex-row items-center justify-end'>
                  <DelProjectButton id={project.id}   />

                  <Button type="submit" disabled={loading}>
                    {loading ? "Saving..." : "Save Changes"}
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
