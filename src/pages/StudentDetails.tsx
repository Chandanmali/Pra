import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { X, FileText } from 'lucide-react'

export default function StudentDetails({ student, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl h-[90vh]">
        <CardHeader className="flex justify-between items-center">
          <CardTitle>{student.name}</CardTitle>
          <Button variant="ghost" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[calc(90vh-100px)]">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                <p>Course: {student.course}</p>
                <p>Branch: {student.branch}</p>
                <p>Semester: {student.semester}</p>
                <p>Added Date: {student.addedDate}</p>
                <Badge className="mt-2">{student.status}</Badge>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Skills</h3>
                <p>JavaScript, React, Node.js, Python</p>
                <h3 className="text-lg font-semibold mt-4 mb-2">Projects</h3>
                <p>E-commerce website, Weather app, Chat application</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Resume</h3>
              <div className="border rounded p-4 flex items-center justify-center h-[500px]">
                <div className="text-center">
                  <FileText className="h-16 w-16 mx-auto mb-2" />
                  <p>Resume.pdf</p>
                  <Button className="mt-2">View Resume</Button>
                </div>
              </div>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}