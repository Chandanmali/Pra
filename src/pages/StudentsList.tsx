import  { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GraduationCap, Calendar, MoreVertical, Plus } from "lucide-react"
import AddStudentForm from '../pages/AddStudentForm'
import StudentDetails from '../pages/StudentDetails'
import JobSelectionModal from '../pages/JobSelectionModal'

const studentsData = [
  {
    id: 1,
    name: "John Doe",
    course: "B.Tech",
    branch: "Computer Science",
    semester: 6,
    addedDate: "2023-06-15",
    status: "Open for opportunity",
  },
  {
    id: 2,
    name: "Jane Smith",
    course: "M.Tech",
    branch: "Electronics",
    semester: 2,
    addedDate: "2023-06-14",
    status: "On internship",
  },
  // Add more student data as needed
]

const courses = ["B.Tech", "M.Tech", "B.E.", "M.E."]
const branches = ["Computer Science", "Electronics", "Mechanical", "Civil"]
const semesters = [1, 2, 3, 4, 5, 6, 7, 8]
const statuses = ["On internship", "Open for opportunity", "In recruitment process", "Placed", "Not Interested for work"]

export default function StudentsList() {
  const [showAddStudent, setShowAddStudent] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    course: "",
    branch: "",
    semester: "",
    status: "",
  })
  const [selectedStudents, setSelectedStudents] = useState([])
  const [showJobSelectionModal, setShowJobSelectionModal] = useState(false)
  const [jobSelectionType, setJobSelectionType] = useState("")
  const [selectedStudent, setSelectedStudent] = useState(null)

  const filteredStudents = studentsData.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filters.course === "" || student.course === filters.course) &&
    (filters.branch === "" || student.branch === filters.branch) &&
    (filters.semester === "" || student.semester === parseInt(filters.semester)) &&
    (filters.status === "" || student.status === filters.status)
  )

  // @ts-ignore
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  // @ts-ignore
  const handleStudentSelect = (studentId) => {
    // @ts-ignore
    setSelectedStudents(prev =>
      // @ts-ignore
      prev.includes(studentId)
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    )
  }

  // @ts-ignore
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      // @ts-ignore
      setSelectedStudents(filteredStudents.map(student => student.id))
    } else {
      setSelectedStudents([])
    }
  }

  const handleAddToJob = () => {
    setJobSelectionType("add")
    setShowJobSelectionModal(true)
  }

  const handleInviteForJob = () => {
    setJobSelectionType("invite")
    setShowJobSelectionModal(true)
  }

  // @ts-ignore
  const handleStudentClick = (student) => {
    setSelectedStudent(student)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Students</h1>
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64"
          />
          <Button onClick={() => setShowAddStudent(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Student
          </Button>
        </div>
      </div>
      <div className="flex space-x-2 items-center">
        <Select onValueChange={(value) => handleFilterChange("course", value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Course" />
          </SelectTrigger>
          <SelectContent>
            {courses.map(course => (
              <SelectItem key={course} value={course}>{course}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => handleFilterChange("branch", value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Branch" />
          </SelectTrigger>
          <SelectContent>
            {branches.map(branch => (
              <SelectItem key={branch} value={branch}>{branch}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => handleFilterChange("semester", value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Semester" />
          </SelectTrigger>
          <SelectContent>
            {semesters.map(semester => (
              <SelectItem key={semester} value={semester.toString()}>{semester}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => handleFilterChange("status", value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            {statuses.map(status => (
              <SelectItem key={status} value={status}>{status}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="selectAll"
            checked={selectedStudents.length === filteredStudents.length}
            onCheckedChange={handleSelectAll}
          />
          <label htmlFor="selectAll">Select All</label>
        </div>
        {selectedStudents.length > 0 && (
          <div className="space-x-2">
            <Button onClick={handleAddToJob}>Add to Job</Button>
            <Button onClick={handleInviteForJob}>Invite for Job</Button>
          </div>
        )}
      </div>
      {filteredStudents.map((student) => (
        <Card key={student.id} className="w-full cursor-pointer" onClick={() => handleStudentClick(student)}>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Checkbox
                // @ts-ignore
                  checked={selectedStudents.includes(student.id)}
                  onCheckedChange={() => handleStudentSelect(student.id)}
                  onClick={(e) => e.stopPropagation()}
                />
                <CardTitle className="text-xl font-bold">{student.name}</CardTitle>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0" onClick={(e) => e.stopPropagation()}>
                    <span className="sr-only">Open menu</span>
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <GraduationCap className="w-4 h-4 mr-2" />
                <span>{student.course} - {student.branch}</span>
              </div>
              <div className="flex items-center">
                <span>Semester: {student.semester}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Added on {student.addedDate}</span>
              </div>
              <div className="flex items-center justify-end">
                <Badge
                // @ts-ignore
                  variant={student.status === "Open for opportunity" ? "success" : "secondary"}
                  className={student.status === "Open for opportunity" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}
                >
                  {student.status}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      {showAddStudent && <AddStudentForm onClose={() => setShowAddStudent(false)} />}
      {showJobSelectionModal && (
        <JobSelectionModal
          onClose={() => setShowJobSelectionModal(false)}
          type={jobSelectionType}
          selectedStudents={selectedStudents}
        />
      )}
      {selectedStudent && (
        <StudentDetails
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}
    </div>
  )
}