import { ChecklistItem } from '../types/checklist';

export const electricalInstallationServicePart2Items: ChecklistItem[] = [
  // 2) Service Disconnecting Means & Service Equipment
  {
    id: 'service-1',
    text: 'Install service disconnect in a readily accessible location, outside or inside nearest point of entry per 230.70(A)(1); disconnect must open all ungrounded conductors',
    category: 'Service Disconnecting Means & Service Equipment',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'service-2',
    text: 'Follow maximum number of service disconnects rules 230.71 (2020/2023 revision; generally one disconnect unless using permitted grouped methods)',
    category: 'Service Disconnecting Means & Service Equipment',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'service-3',
    text: 'For one- and two-family dwellings, provide the exterior emergency disconnect per 230.85 and label it',
    category: 'Service Disconnecting Means & Service Equipment',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'service-4',
    text: 'Use only listed line-side splicing/connector devices on service conductors (230.46); protect SE cable where subject to damage (230.50)',
    category: 'Service Disconnecting Means & Service Equipment',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'service-5',
    text: 'Mark service equipment (non-dwelling) with Available Fault Current and date of calc per 110.24(A)',
    category: 'Service Disconnecting Means & Service Equipment',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },

  // 3) Service & Feeder Conductors, Raceways, and Burial
  {
    id: 'conductors-1',
    text: 'Choose wiring methods permitted for service-entrance conductors (230.43) and install per Chapter 3; respect burial cover min. depths per Table 300.5',
    category: 'Service & Feeder Conductors, Raceways, and Burial',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'conductors-2',
    text: 'Terminate conductors to the lowest temperature-rated device/terminal per 110.14(C); apply correction/adjustment to 90 °C column as allowed, but final ampacity cannot exceed the terminal\'s rating',
    category: 'Service & Feeder Conductors, Raceways, and Burial',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'conductors-3',
    text: 'For dwelling services/feeders 100–400 A, you may size per 310.12 (check local adoption)',
    category: 'Service & Feeder Conductors, Raceways, and Burial',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  }
];