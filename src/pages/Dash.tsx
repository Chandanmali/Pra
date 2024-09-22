import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Percent, DollarSign, Building, Users, PieChart, TrendingUp, ThumbsUp, RefreshCcw } from "lucide-react"

const metrics = [
  { name: "Placement Rate", value: "85%", icon: Percent },
  { name: "Average Salary Package", value: "$75,000", icon: DollarSign },
  { name: "Highest Salary Package", value: "$150,000", icon: DollarSign },
  { name: "Companies Participating", value: "120", icon: Building },
  { name: "Job Offers per Student", value: "2.3", icon: Users },
  { name: "Sector-wise Distribution", value: "View Chart", icon: PieChart },
  { name: "Placement Conversion Rate", value: "70%", icon: TrendingUp },
  { name: "Offer Acceptance Rate", value: "92%", icon: ThumbsUp },
  { name: "Repeat Recruiter Rate", value: "75%", icon: RefreshCcw },
]

export default function DashboardMetrics() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((metric) => (
          <Card key={metric.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.name}
              </CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}