//import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building, MapPin, Calendar, MoreVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface CompanyProps {
  company: {
    id: number;
    name: string;
    industry: string;
    location: string;
    addedBy: string;
    addedDate: string;
    status: string;
  };
}

export default function CompanyCard({ company }: CompanyProps) {
  return (
    <Card key={company.id} className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold">{company.name}</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
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
            <Building className="w-4 h-4 mr-2" />
            <span>{company.industry}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{company.location}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Added on {company.addedDate}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Added by {company.addedBy}</span>
            <Badge
            // @ts-ignore
              variant={company.status === "Active" ? "success" : "warning"}
              className={company.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}
            >
              {company.status}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}