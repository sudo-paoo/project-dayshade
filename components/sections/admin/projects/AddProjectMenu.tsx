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
import { Card, CardContent } from "@/components/ui/card"
import { zodResolver } from "@hookform/resolvers/zod"
import { Checkbox } from '@/components/ui/checkbox'
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { toast } from 'sonner'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const ProjectSchema = z.object({
  Title: z.string().min(2, { message: "Title is required" }),
  Developers: z.string().min(2, { message: "Developers are required" }),
  YTLinks: z.string().url({ message: "Enter a valid YouTube URL" }),
  Year: z.string().min(4, { message: "Enter a valid year" }),
  Month: z.string().min(2, { message: "Month is required" }),
  Description: z.string().min(5, { message: "Description is required" }),
  MonthlyShowcase: z.boolean().optional(),
})

const AddProjectMenu = () => {
  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof ProjectSchema>>({
    resolver: zodResolver(ProjectSchema),
    defaultValues: {
      Title: "",
      Developers: "",
      YTLinks: "",
      Year: "",
      Month: "",
      Description: "",
      MonthlyShowcase: false,
    },
    mode: "onChange",
  })

  function onSubmit(values: z.infer<typeof ProjectSchema>) {
    console.log(values)
    toast.success("Project added successfully!")
    form.reset()
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="rounded-xl">
          Add Project +
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader className="flex items-center">
          <DialogTitle className="text-primary font-bold">
            ADD PROJECT
          </DialogTitle>
        </DialogHeader>

        <Card>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
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

                <FormField
                  control={form.control}
                  name="Developers"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold">Developers*</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter developer names" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="YTLinks"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold">YT Embed Link*</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter YouTube embed link" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="Year"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="text-primary font-bold">Year*</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. 2025" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="Month"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="text-primary font-bold">Month*</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. August" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

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

                <FormField
                  control={form.control}
                  name="MonthlyShowcase"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-end gap-2">
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

                <DialogFooter>
                  <Button type="submit" disabled={!form.formState.isValid}>
                    Add Project
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

export default AddProjectMenu
