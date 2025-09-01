import React, { useState } from 'react';
import { ServiceType } from '@/types/checklist';
import { serviceTypes } from '@/data/serviceTypes';
import { additionalServiceTypes } from '@/data/serviceTypes2';
import ServiceCard from './ServiceCard';
import ChecklistView from './ChecklistView';

const AppLayout: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [completedChecklists, setCompletedChecklists] = useState<any[]>([]);

  const allServiceTypes = [...serviceTypes, ...additionalServiceTypes];

  const handleServiceSelect = (service: ServiceType) => {
    setSelectedService(service);
  };

  const handleBack = () => {
    setSelectedService(null);
  };

  const handleComplete = (checklistData: any) => {
    setCompletedChecklists(prev => [...prev, checklistData]);
    // In a real app, this would generate and email the PDF
    alert(`Service report for ${checklistData.serviceType.name} has been completed and would be emailed to ${checklistData.email}`);
    setSelectedService(null);
  };

  if (selectedService) {
    return (
      <ChecklistView
        serviceType={selectedService}
        onBack={handleBack}
        onComplete={handleComplete}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-orange-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center">
            <div className="inline-block w-full max-w-2xl mx-auto py-[5%]">
              <img 
                src="https://d64gsuwffb70l.cloudfront.net/68163cb84ec074a1d731179e_1756692504621_92139b4d.png"
                alt="PumpLine Logo"
                className="block w-full h-auto object-contain"
              />
            </div>
            <p className="text-lg text-orange-100 max-w-3xl mx-auto">
              Professional pump system service and installation checklists for field technicians
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions for Technicians */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Digital Checklists</h3>
            <p className="text-sm text-gray-600">Complete service checklists with photos and notes</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">PDF Reports</h3>
            <p className="text-sm text-gray-600">Auto-generate professional service reports</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Email Delivery</h3>
            <p className="text-sm text-gray-600">Send reports directly to customers and office</p>
          </div>
        </div>
      </div>

      {/* Service Selection */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Select Service Type</h2>
          <p className="text-gray-600">Choose the type of service you're performing</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {allServiceTypes && allServiceTypes.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={handleServiceSelect}
            />
          ))}
        </div>

        {/* Stats */}
        {completedChecklists.length > 0 && (
          <div className="mt-12 bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">{completedChecklists.length}</div>
              <div className="text-gray-600">Completed Services Today</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppLayout;