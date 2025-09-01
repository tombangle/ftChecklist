import { ChecklistItem } from '../types/checklist';

export const sewerPumpDuplexServiceCompleteItems: ChecklistItem[] = [
  // Control System Maintenance
  {
    id: 'spds-control-1',
    text: 'Inspect and test relays, switches, and circuit breakers',
    category: 'Control System Maintenance',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: false
  },
  {
    id: 'spds-control-2',
    text: 'Verify pump alternation functions correctly to balance usage',
    category: 'Control System Maintenance',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: false
  },
  {
    id: 'spds-control-3',
    text: 'Test high-water, over-temperature, and seal failure alarms',
    category: 'Control System Maintenance',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: false
  },
  {
    id: 'spds-control-4',
    text: 'Inspect and clean pressure sensors and float switches',
    category: 'Control System Maintenance',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: true
  },
  // Wet Well and Effluent Management
  {
    id: 'spds-well-1',
    text: 'Remove accumulated solids and sludge from wet well using vacuum/pump',
    category: 'Wet Well Management',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: true
  },
  {
    id: 'spds-well-2',
    text: 'Pressure wash wet well walls to remove grease and biofilm',
    category: 'Wet Well Management',
    isRequired: true,
    requiresSignature: false,
    requiresPhoto: true
  },
  {
    id: 'spds-well-3',
    text: 'Remove and clean effluent filter (if present)',
    category: 'Wet Well Management',
    isRequired: false,
    requiresSignature: false,
    requiresPhoto: true
  },
  {
    id: 'spds-well-4',
    text: 'Inspect effluent filter for cracks, wear, or damage',
    category: 'Wet Well Management',
    isRequired: false,
    requiresSignature: false,
    requiresPhoto: true
  }
];