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
  YTLinks: z.url({ message: "Enter a valid YouTube URL" }),
  PublishedDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
      message: "PublishedDate must be in YYYY-MM-DD format",
    }),
  Tags: z.string().min(2, {message: "Tags are required"}),
  Description: z.string().min(5, { message: "Description is required" }),
  Image: z.any().optional(),
})

const AddProjectMenu = () => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof ProjectSchema>>({
    resolver: zodResolver(ProjectSchema),
    defaultValues: {
      Title: "",
      Developers: "",
      YTLinks: "",
      PublishedDate: "",
      Tags: "",
      Description: "",
      Image: ""
    },
    mode: "onChange",
  })

  async function onSubmit(values: any) {
  try {
    setLoading(true);

    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    const res = await fetch("/api/POSTProjects", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const error = await res.json();
      console.error(error);
      toast.error("Failed to save project.");
      return;
    }

    const result = await res.json();
    console.log("Inserted:", result);
    toast.success("Project added successfully!");
    form.reset();
    setOpen(false);
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong.");
  } finally {
    setLoading(false);
  }
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
                  name="Image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold">Project Image</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => field.onChange(e.target.files?.[0])}
                        />
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
                  name="Tags"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold">Tags*</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Tags" {...field} />
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

                <FormField
                  control={form.control}
                  name="PublishedDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-bold">PublishedDate*</FormLabel>
                      <FormControl>
                        <Input type="date" placeholder="e.g. 2024-11-01" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                  <Button type="submit" disabled={!form.formState.isValid || loading}>
                    {loading ? "Saving..." : "Add Project"}
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
