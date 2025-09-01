import { ChecklistItem } from '../types/checklist';

export const sewerPumpDuplexServicePart3Items: ChecklistItem[] = [
  // Pump-Specific Maintenance (continued)
  {
    id: 'spds-pump-4',
    text: 'Replace damaged or excessively worn impellers',
    category: 'Pump-Specific Maintenance',
    isRequired: false,
    requiresSignature: false,
    requiresPhoto: true
  },
  {
    id: 'spds-pump-5',
    text: 'Inspect mechanical seals on both pumps for leaks or wear',
    category: 'Pump-Specific Maintenance',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: true
  },
  {
    id: 'spds-pump-6',
    text: 'Replace mechanical seals if necessary',
    category: 'Pump-Specific Maintenance',
    isRequired: false,
    requiresSignature: false,
    requiresPhoto: true
  },
  {
    id: 'spds-pump-7',
    text: 'Check bearings for noise, play, or damage on both pumps',
    category: 'Pump-Specific Maintenance',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: false
  },
  {
    id: 'spds-pump-8',
    text: 'Lubricate bearings per manufacturer recommendations',
    category: 'Pump-Specific Maintenance',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: false
  },
  {
    id: 'spds-pump-9',
    text: 'Clean pump housings to remove grease, sludge, or mineral buildup',
    category: 'Pump-Specific Maintenance',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: true
  },
  {
    id: 'spds-pump-10',
    text: 'Measure motor windings resistance using multimeter (both motors)',
    category: 'Pump-Specific Maintenance',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: false
  },
  {
    id: 'spds-pump-11',
    text: 'Test electrical insulation integrity (megohm test) on both motors',
    category: 'Pump-Specific Maintenance',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: false
  }
];