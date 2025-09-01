import { ChecklistItem } from '../types/checklist';

export const sewerPumpDuplexServicePart4Items: ChecklistItem[] = [
  // System Testing
  {
    id: 'spds-test-1',
    text: 'Restore power supply to control panel and both pumps',
    category: 'System Testing',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: false
  },
  {
    id: 'spds-test-2',
    text: 'Add water to wet well to simulate normal operation',
    category: 'System Testing',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: false
  },
  {
    id: 'spds-test-3',
    text: 'Observe both pumps performance during cycling',
    category: 'System Testing',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: false
  },
  {
    id: 'spds-test-4',
    text: 'Verify alternator switches between pumps after each cycle',
    category: 'System Testing',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: false
  },
  {
    id: 'spds-test-5',
    text: 'Monitor alarms for proper functionality during testing',
    category: 'System Testing',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: false
  },
  {
    id: 'spds-test-6',
    text: 'Test backup pump operation in case primary pump fails',
    category: 'System Testing',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: false
  },
  // Documentation and Reporting
  {
    id: 'spds-doc-1',
    text: 'Document all inspection findings, cleaning activities, and repairs',
    category: 'Documentation and Reporting',
    isRequired: true,
    requiresSignature: true,
    requiresPhoto: false
  },
  {
    id: 'spds-doc-2',
    text: 'Record flow rates, pressures, and pump cycle times',
    category: 'Documentation and Reporting',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: false
  },
  {
    id: 'spds-doc-3',
    text: 'Provide customer with detailed service report and recommendations',
    category: 'Documentation and Reporting',
    isRequired: true,
    requiresSignature: true,
    requiresPhoto: false
  }
];