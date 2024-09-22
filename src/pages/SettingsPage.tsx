import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("notification")

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="flex space-x-4">
        <Button
          variant={activeSection === "notification" ? "default" : "outline"}
          onClick={() => setActiveSection("notification")}
        >
          Notification Settings
        </Button>
        <Button
          variant={activeSection === "user" ? "default" : "outline"}
          onClick={() => setActiveSection("user")}
        >
          User Management
        </Button>
      </div>
      {activeSection === "notification" && <NotificationSettings />}
      {activeSection === "user" && <UserManagement />}
    </div>
  )
}

function NotificationSettings() {
  const [jobNotification, setJobNotification] = useState("all")
  const [opportunityCount, setOpportunityCount] = useState("0")
  const [selectedRoles, setSelectedRoles] = useState([])
  const [jobPostedNotification, setJobPostedNotification] = useState("all")

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Job Notification to Students</h3>
          <RadioGroup value={jobNotification} onValueChange={setJobNotification}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all">All Students</Label>
            </div>
            <p className="text-sm text-gray-500 ml-6">All students who register from your college on the Deco platform.</p>
            <div className="flex items-center space-x-2 mt-2">
              <RadioGroupItem value="matching" id="matching" />
              <Label htmlFor="matching">Matching Skills</Label>
            </div>
            <p className="text-sm text-gray-500 ml-6">A student's skills match with job skills across the course, branch, and semester</p>
            <div className="flex items-center space-x-2 mt-2">
              <RadioGroupItem value="group" id="group" />
              <Label htmlFor="group">Matching Job Group</Label>
            </div>
            <p className="text-sm text-gray-500 ml-6">A student who has shown interest in a job profile, irrespective of course, branch, or semester, that matches a job opportunity group.</p>
          </RadioGroup>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Opportunity Distribution</h3>
          <div className="flex items-center space-x-2">
            <span>I want</span>
            <Select onValueChange={(value) => console.log(value)}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select student status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="open">Open for opportunity</SelectItem>
                <SelectItem value="internship">On internship</SelectItem>
              </SelectContent>
            </Select>
            <span>Students Should be given</span>
            <Select value={opportunityCount} onValueChange={setOpportunityCount}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Select count" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 31 }, (_, i) => (
                  <SelectItem key={i} value={i.toString()}>{i}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span>opportunity in each semester.</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Daily Report</h3>
          <p className="mb-2">Send daily report to:</p>
          <div className="space-y-2">
            {["TPO", "HOD", "Principal"].map((role) => (
              <div key={role} className="flex items-center space-x-2">
                <Checkbox
                  id={role}
                  // @ts-ignore
                  checked={selectedRoles.includes(role)}
                  onCheckedChange={(checked) => {
                    setSelectedRoles(
                      // @ts-ignore
                      checked
                        ? [...selectedRoles, role]
                        : selectedRoles.filter((r) => r !== role)
                    )
                  }}
                />
                <label htmlFor={role}>{role}</label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Job Posted by Company</h3>
          <RadioGroup value={jobPostedNotification} onValueChange={setJobPostedNotification}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="allTpo" />
              <Label htmlFor="allTpo">All TPOs</Label>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <RadioGroupItem value="assigned" id="assignedTpo" />
              <Label htmlFor="assignedTpo">Only Assigned TPO</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  )
}

function UserManagement() {
  // Placeholder for User Management
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>User Management</CardTitle>
      </CardHeader>
      <CardContent>
        <p>User management content goes here.</p>
      </CardContent>
    </Card>
  )
}