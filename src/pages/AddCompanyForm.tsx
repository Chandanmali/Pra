import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AddCompanyFormProps {
  onClose: () => void;
}

export default function AddCompanyForm({ onClose }: AddCompanyFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input placeholder="Company Name" required />
      <Input placeholder="Industry" required />
      <Input placeholder="Location" required />
      <Button type="submit">Add Company</Button>
      <Button variant="outline" onClick={onClose}>
        Cancel
      </Button>
    </form>
  );
}