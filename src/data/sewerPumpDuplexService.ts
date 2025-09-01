import { ChecklistItem } from '../types/checklist';

export const sewerPumpDuplexServiceItems: ChecklistItem[] = [
  // Safety Preparations
  {
    id: 'spds-safety-1',
    text: 'Disconnect power supply to control panel and both pumps',
    category: 'Safety Preparations',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: false
  },
  {
    id: 'spds-safety-2',
    text: 'Follow lockout/tagout procedures to prevent accidental activation',
    category: 'Safety Preparations',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: false
  },
  {
    id: 'spds-safety-3',
    text: 'Wear appropriate PPE (gloves, goggles, boots, protective gear)',
    category: 'Safety Preparations',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: false
  },
  {
    id: 'spds-safety-4',
    text: 'Ensure adequate ventilation to prevent exposure to methane/hydrogen sulfide',
    category: 'Safety Preparations',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: false
  },
  // Preliminary Inspections - Wet Well
  {
    id: 'spds-inspect-1',
    text: 'Open access hatch and inspect wet well for grease buildup and debris',
    category: 'Preliminary Inspections',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: true
  },
  {
    id: 'spds-inspect-2',
    text: 'Check for excessive sludge accumulation or foreign objects',
    category: 'Preliminary Inspections',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: true
  },
  {
    id: 'spds-inspect-3',
    text: 'Visually inspect both pumps for corrosion, wear, or physical damage',
    category: 'Preliminary Inspections',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: true
  },
  {
    id: 'spds-inspect-4',
    text: 'Check both pump impellers for clogging or damage',
    category: 'Preliminary Inspections',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: true
  }
];