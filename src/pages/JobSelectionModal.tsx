import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X } from 'lucide-react'

const jobListings = [
  { id: 1, title: "Frontend Developer", company: "TechCorp Inc." },
  { id: 2, title: "Backend Engineer", company: "DataSys Solutions" },
  { id: 3, title: "UX Designer", company: "CreativeTech" },
  // Add more job listings as needed
]

export default function JobSelectionModal({ onClose, type, selectedStudents }) {
  const handleJobSelect = (jobId) => {
    // Handle job selection logic here
    console.log(`Selected job ${jobId} for ${type === 'add' ? 'adding' : 'inviting'} ${selectedStudents.length} students`)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex justify-between items-center">
          <CardTitle>{type === 'add' ? 'Add to Job' : 'Invite for Job'}</CardTitle>
          <Button variant="ghost" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px]">
            {jobListings.map((job) => (
              <Button
                key={job.id}
                variant="ghost"
                className="w-full justify-start text-left mb-2"
                onClick={() => handleJobSelect(job.id)}
              >
                <div>
                  <div className="font-semibold">{job.title}</div>
                  <div className="text-sm text-gray-500">{job.company}</div>
                </div>
              </Button>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}