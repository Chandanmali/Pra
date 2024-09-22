//import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

interface CompanySearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  setShowAddCompany: (show: boolean) => void;
}

export default function CompanySearch({ searchTerm, setSearchTerm, setShowAddCompany }: CompanySearchProps) {
  return (
    <div className="flex items-center space-x-2">
      <Input
        type="text"
        placeholder="Search companies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-64"
      />
      <Button onClick={() => setShowAddCompany(true)}>
        <Plus className="w-4 h-4 mr-2" />
        Add Company
      </Button>
    </div>
  );
}