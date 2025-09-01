import { ServiceType } from '@/types/checklist';

export const serviceTypes: ServiceType[] = [
  {
    id: 'well-pump',
    name: 'Well Pump Systems',
    icon: 'https://d64gsuwffb70l.cloudfront.net/68b3bc91a7748e7081899a82_1756609728600_1b1c93cb.webp',
    color: 'bg-blue-500',
    category: 'water'
  },
  {
    id: 'lake-pump',
    name: 'Lake Pump Systems',
    icon: 'https://d64gsuwffb70l.cloudfront.net/68b3bc91a7748e7081899a82_1756609730351_f58147ec.webp',
    color: 'bg-blue-600',
    category: 'water'
  },
  {
    id: 'cistern-pump',
    name: 'Cistern Pump Systems',
    icon: 'https://d64gsuwffb70l.cloudfront.net/68b3bc91a7748e7081899a82_1756609732059_3c168e6b.webp',
    color: 'bg-blue-700',
    category: 'water'
  },
  {
    id: 'other-water-pump',
    name: 'Other Water Pump Systems',
    icon: 'https://d64gsuwffb70l.cloudfront.net/68b3bc91a7748e7081899a82_1756609734164_55ec12a8.webp',
    color: 'bg-blue-800',
    category: 'water'
  },
  {
    id: 'sewer-simplex',
    name: 'Sewer Pump Systems (Simplex)',
    icon: 'https://d64gsuwffb70l.cloudfront.net/68b3bc91a7748e7081899a82_1756609735783_45333043.webp',
    color: 'bg-orange-500',
    category: 'sewer'
  },
  {
    id: 'sewer-duplex',
    name: 'Sewer Pump Systems (Duplex)',
    icon: 'https://d64gsuwffb70l.cloudfront.net/68b3bc91a7748e7081899a82_1756609737495_ee40d90f.webp',
    color: 'bg-orange-600',
    category: 'sewer'
  },
  {
    id: 'electrical-service',
    name: 'Electrical Service',
    icon: 'https://d64gsuwffb70l.cloudfront.net/68b3bc91a7748e7081899a82_1756609737495_ee40d90f.webp',
    color: 'bg-yellow-600',
    category: 'electrical'
  },
  {
    id: 'wbs-planning',
    name: 'WBS Planning Checklist',
    icon: 'https://d64gsuwffb70l.cloudfront.net/68b3bc91a7748e7081899a82_1756609737495_ee40d90f.webp',
    color: 'bg-purple-600',
    category: 'planning'
  }
];