import React from 'react';
import { ServiceType } from '@/types/checklist';

interface ServiceCardProps {
  service: ServiceType;
  onClick: (service: ServiceType) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'water': return 'border-orange-200 hover:border-orange-400 hover:shadow-orange-100';
      case 'sewer': return 'border-orange-200 hover:border-orange-400 hover:shadow-orange-100';
      case 'electrical': return 'border-orange-200 hover:border-orange-400 hover:shadow-orange-100';
      case 'installation': return 'border-orange-200 hover:border-orange-400 hover:shadow-orange-100';
      default: return 'border-gray-200 hover:border-orange-300 hover:shadow-orange-100';
    }
  };

  return (
    <div
      onClick={() => onClick(service)}
      className={`bg-white rounded-lg shadow-md border-2 ${getCategoryColor(service.category)} 
        hover:shadow-lg transition-all duration-200 cursor-pointer p-4 sm:p-6`}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${service.color} 
          flex items-center justify-center shadow-lg`}>
          <img 
            src={service.icon} 
            alt={service.name}
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
        </div>
        <h3 className="font-semibold text-gray-800 text-sm sm:text-base leading-tight">
          {service.name}
        </h3>
      </div>
    </div>
  );
};

export default ServiceCard;