import { ChecklistItem } from '../types/checklist';

export const sewerPumpDuplexServicePart2Items: ChecklistItem[] = [
  // Preliminary Inspections - Piping and Control Panel
  {
    id: 'spds-inspect-5',
    text: 'Inspect discharge and vent pipes for leaks, blockages, or damage',
    category: 'Preliminary Inspections',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: true
  },
  {
    id: 'spds-inspect-6',
    text: 'Ensure check valves and shutoff valves are functional and not stuck',
    category: 'Preliminary Inspections',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: false
  },
  {
    id: 'spds-inspect-7',
    text: 'Check for loose, corroded, or damaged electrical connections',
    category: 'Preliminary Inspections',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: true
  },
  {
    id: 'spds-inspect-8',
    text: 'Verify proper grounding of control panel and components',
    category: 'Preliminary Inspections',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: false
  },
  {
    id: 'spds-inspect-9',
    text: 'Check status of over-temperature and seal failure alarms',
    category: 'Preliminary Inspections',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: false
  },
  // Pump-Specific Maintenance
  {
    id: 'spds-pump-1',
    text: 'Remove first pump from wet well for inspection and cleaning',
    category: 'Pump-Specific Maintenance',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: true
  },
  {
    id: 'spds-pump-2',
    text: 'Remove second pump from wet well for inspection and cleaning',
    category: 'Pump-Specific Maintenance',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: true
  },
  {
    id: 'spds-pump-3',
    text: 'Clean impellers on both pumps and check for cracks, wear, or deformities',
    category: 'Pump-Specific Maintenance',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: true
  }
];