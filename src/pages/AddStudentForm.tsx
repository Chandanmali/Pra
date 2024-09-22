//import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from 'lucide-react'

//@ts-ignore
export default function AddStudentForm({ onClose }) {
  //@ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Add Student</h2>
          <Button variant="ghost" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="studentName">Student Name</Label>
            <Input id="studentName" placeholder="Enter student name" required />
          </div>
          <div>
            <Label htmlFor="course">Course</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="B.Tech">B.Tech</SelectItem>
                <SelectItem value="M.Tech">M.Tech</SelectItem>
                <SelectItem value="B.E.">B.E.</SelectItem>
                <SelectItem value="M.E.">M.E.</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="branch">Branch</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select branch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Computer Science">Computer Science</SelectItem>
                <SelectItem value="Electronics">Electronics</SelectItem>
                <SelectItem value="Mechanical">Mechanical</SelectItem>
                <SelectItem value="Civil">Civil</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="semester">Semester</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select semester" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                  <SelectItem key={sem} value={sem.toString()}>{sem}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">Add Student</Button>
        </form>
      </div>
    </div>
  )
}