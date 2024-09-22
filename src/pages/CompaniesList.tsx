import React, { useState } from 'react';
import CompanyCard from '../pages/CompanyCard';
import CompanySearch from '../pages/CompanySearch';
import AddCompanyForm from '../pages/AddCompanyForm';

const companiesData = [
  { id: 1, name: 'TechCorp Inc.', industry: 'Technology', location: 'San Francisco, CA', addedBy: 'John Doe', addedDate: '2023-06-15', status: 'Active' },
  { id: 2, name: 'DataSys Solutions', industry: 'Data Analytics', location: 'New York, NY', addedBy: 'Jane Smith', addedDate: '2023-06-14', status: 'Pending' },
  // Add more company data as needed
];

export default function CompaniesList() {
  const [showAddCompany, setShowAddCompany] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCompanies = companiesData.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Companies</h1>
        <CompanySearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} setShowAddCompany={setShowAddCompany} />
      </div>
      {filteredCompanies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
      {showAddCompany && <AddCompanyForm onClose={() => setShowAddCompany(false)} />}
    </div>
  );
}