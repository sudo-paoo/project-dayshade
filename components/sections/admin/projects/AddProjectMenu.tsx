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
import {Card, CardContent} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import { Checkbox } from '@/components/ui/checkbox'
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { toast } from 'sonner'

const ProjectSchema = z.object({
  Title: z.string().min(2, { message: "Title is required" }),
  Developers: z.string().min(2, { message: "Developers are required" }),
  YTLinks: z.string().url({ message: "Enter a valid YouTube URL" }),
  Year: z.string().min(4, { message: "Enter a valid year" }),
  Month: z.string().min(2, { message: "Month is required" }),
  Description: z.string().min(5, { message: "Description is required" }),
})

const AddProjectMenu = () => {
  const [open, setOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<z.infer<typeof ProjectSchema>>({
    resolver: zodResolver(ProjectSchema),
  })

  function onSubmit(values: z.infer<typeof ProjectSchema>) {
    console.log(values)

    toast.success("Project added successfully!")

    reset()
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
        <DialogHeader className='flex items-center'>
          <DialogTitle className='text-primary font-bold'>ADD PROJECT</DialogTitle>
        </DialogHeader>

        <Card>
            <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div>
                    <Label className='text-primary font-bold'>Title*</Label>
                    <Input {...register("Title")} />
                    {errors.Title && <p className="text-red-500 text-sm">{errors.Title.message}</p>}
                </div>

                <div>
                    <Label className='text-primary font-bold'>Developers*</Label>
                    <Input {...register("Developers")} />
                    {errors.Developers && <p className="text-red-500 text-sm">{errors.Developers.message}</p>}
                </div>

                <div>
                    <Label className='text-primary font-bold'>YT Embed Link*</Label>
                    <Input {...register("YTLinks")} />
                    {errors.YTLinks && <p className="text-red-500 text-sm">{errors.YTLinks.message}</p>}
                </div>

                <div className="flex gap-4">
                    <div className="flex-1">
                    <Label className='text-primary font-bold'>Year</Label>
                    <Input {...register("Year")} />
                    {errors.Year && <p className="text-red-500 text-sm">{errors.Year.message}</p>}
                    </div>
                    <div className="flex-1">
                    <Label className='text-primary font-bold'>Month</Label>
                    <Input {...register("Month")} />
                    {errors.Month && <p className="text-red-500 text-sm">{errors.Month.message}</p>}
                    </div>
                </div>

                <div>
                    <Label className='text-primary font-bold'>Description*</Label>
                    <Input {...register("Description")} />
                    {errors.Description && <p className="text-red-500 text-sm">{errors.Description.message}</p>}
                </div>

                <div className='flex justify-end'>
                    <Label className='text-primary font-bold'>Monthly Showcase <Checkbox /></Label>
                </div>

                <DialogFooter>
                    <Button type="submit" disabled={!isValid}>
                    Add Project
                    </Button>
                </DialogFooter>
                </form>
            </CardContent>
        </Card>

      </DialogContent>
    </Dialog>
  )
}

export default AddProjectMenu
