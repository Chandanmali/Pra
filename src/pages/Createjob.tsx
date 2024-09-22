import React, { useState } from 'react'
import { X, MapPin, Building, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"

export default function CreateJobForm({ onClose }) {
  const [locationType, setLocationType] = useState('remote')
  const [paymentType, setPaymentType] = useState('exact')
  const [skills, setSkills] = useState([])
  const [deadline, setDeadline] = useState()

  const handleSkillInput = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      const skill = e.target.value.trim()
      if (skill && !skills.includes(skill)) {
        setSkills([...skills, skill])
        e.target.value = ''
      }
    }
  }

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove))
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Create Job</h2>
          <Button variant="ghost" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <form className="space-y-4">
          <div>
            <Label htmlFor="jobTitle">Job Title</Label>
            <Input id="jobTitle" placeholder="Enter job title" />
          </div>
          <div>
            <Label htmlFor="positionType">Position Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select position type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fullTime">Full Time</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="partTime">Part Time</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Location</Label>
            <RadioGroup className="flex space-x-4" value={locationType} onValueChange={setLocationType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="remote" id="remote" />
                <Label htmlFor="remote"><Globe className="w-4 h-4 inline mr-1" /> Remote</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="onsite" id="onsite" />
                <Label htmlFor="onsite"><Building className="w-4 h-4 inline mr-1" /> On-site</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hybrid" id="hybrid" />
                <Label htmlFor="hybrid"><MapPin className="w-4 h-4 inline mr-1" /> Hybrid</Label>
              </div>
            </RadioGroup>
            {(locationType === 'onsite' || locationType === 'hybrid') && (
              <Input className="mt-2" placeholder="Enter city name" />
            )}
          </div>
          <div>
            <Label htmlFor="jobDescription">Job Description</Label>
            <Textarea id="jobDescription" placeholder="Enter job description" className="h-32" />
          </div>
          <div>
            <Label htmlFor="skills">Skills</Label>
            <Input
              id="skills"
              placeholder="Type a skill and press Enter"
              onKeyDown={handleSkillInput}
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {skills.map((skill, index) => (
                <span key={index} className="bg-gray-200 px-2 py-1 rounded-full text-sm flex items-center">
                  {skill}
                  <button type="button" onClick={() => removeSkill(skill)} className="ml-1 text-gray-500 hover:text-gray-700">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
          <div>
            <Label>Payment</Label>
            <div className="flex items-center space-x-4 mb-2">
              <Switch id="exact" checked={paymentType === 'exact'} onCheckedChange={() => setPaymentType('exact')} />
              <Label htmlFor="exact">Exact</Label>
              <Switch id="range" checked={paymentType === 'range'} onCheckedChange={() => setPaymentType('range')} />
              <Label htmlFor="range">Range</Label>
              <Switch id="unpaid" checked={paymentType === 'unpaid'} onCheckedChange={() => setPaymentType('unpaid')} />
              <Label htmlFor="unpaid">Unpaid</Label>
            </div>
            {paymentType !== 'unpaid' && (
              <div className="flex space-x-2">
                <Input type="number" placeholder={paymentType === 'exact' ? 'Amount' : 'Min'} />
                {paymentType === 'range' && (
                  <Input type="number" placeholder="Max" />
                )}
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Per" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="month">Per Month</SelectItem>
                    <SelectItem value="year">Per Year</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="eur">EUR</SelectItem>
                    <SelectItem value="gbp">GBP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
          <div>
            <Label htmlFor="jobGroup">Job Group</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select job group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Application Deadline</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  {deadline ? format(deadline, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={deadline}
                  onSelect={setDeadline}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label htmlFor="hiringCompany">Hiring Company</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select company" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="company1">Company 1</SelectItem>
                <SelectItem value="company2">Company 2</SelectItem>
                <SelectItem value="company3">Company 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </div>
    </div>
  )
}