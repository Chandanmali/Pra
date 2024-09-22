import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MapPin, Building, Calendar, MoreVertical } from "lucide-react"

const jobListings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    posted: "2023-06-15",
    status: "Approved",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataSys Solutions",
    location: "New York, NY",
    type: "Full-time",
    posted: "2023-06-14",
    status: "Pending",
  },
  {
    id: 3,
    title: "UX Designer",
    company: "CreativeTech",
    location: "Remote",
    type: "Contract",
    posted: "2023-06-13",
    status: "Approved",
  },
  {
    id: 4,
    title: "DevOps Specialist",
    company: "CloudNine Systems",
    location: "Seattle, WA",
    type: "Full-time",
    posted: "2023-06-12",
    status: "Pending",
  },
  {
    id: 5,
    title: "Mobile App Developer",
    company: "AppWorks Inc.",
    location: "Austin, TX",
    type: "Part-time",
    posted: "2023-06-11",
    status: "Approved",
  },
]

export default function Dashboard() {
  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-6">Job Listings</h1>
      <div className="space-y-4">
        {jobListings.map((job) => (
          <Card key={job.id} className="w-full">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="space-y-1">
                  <CardTitle className="text-xl font-bold">{job.title}</CardTitle>
                  <Badge variant={job.type === "Full-time" ? "default" : "secondary"}>
                    {job.type}
                  </Badge>
                </div>
                <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Building className="w-4 h-4 mr-2" />
                    <span>{job.company}</span>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>View Applicants</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{job.posted}</span>
                  </div>
                  <Badge 
                  // @ts-ignore
                    variant={job.status === "Approved" ? "success" : "warning"}
                    className={job.status === "Approved" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}
                  >
                    {job.status}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
