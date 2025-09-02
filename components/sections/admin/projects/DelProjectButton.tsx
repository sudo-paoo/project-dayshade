'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { toast } from "sonner"

type DeleteProps = {
  id: string
}

const DelProjectButton = ({ id }: DeleteProps) => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleConfirm() {
    try {
      setLoading(true)

      const res = await fetch(`/api/DELETEProjects/${id}`, {
        method: 'DELETE',
      })

      const data = await res.json()

      if (data.success) {
        console.log('Project deleted')
        toast.success("Project deleted successfully!")
      } else {
        console.error('Delete failed:', data.error)
        toast.error("Delete failed")
      }
    } catch (error) {
      console.error('Error deleting project:', error)
      toast.error("Something went wrong.")
    } finally {
      setLoading(false)
      setOpen(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="destructive"
          size="icon"
          className="flex items-center gap-2"
        >
          <Trash className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the
            project and remove it from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleConfirm}
            disabled={loading}
          >
            {loading ? 'Deleting...' : 'Yes, delete it'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DelProjectButton
