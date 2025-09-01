import { ChecklistItem } from '../types/checklist';

export const sewerPumpServicePart2: ChecklistItem[] = [
  // Cleaning the System
  {
    id: 'sps-clean-1',
    text: 'Remove accumulated grease, sludge, and debris using wet/dry vacuum or pump-out equipment',
    category: 'Cleaning',
    isCompleted: false,
    notes: '',
    photoRequired: true,
    signatureRequired: false
  },
  {
    id: 'sps-clean-2',
    text: 'Use pressure washer or hose to clean wet well walls and bottom',
    category: 'Cleaning',
    isCompleted: false,
    notes: '',
    photoRequired: false,
    signatureRequired: false
  },
  {
    id: 'sps-clean-3',
    text: 'Remove pump from wet well and clean impeller and housing to remove buildup/clogs',
    category: 'Cleaning',
    isCompleted: false,
    notes: '',
    photoRequired: true,
    signatureRequired: false
  },
  {
    id: 'sps-clean-4',
    text: 'Inspect and clean pump suction intake to ensure unobstructed flow',
    category: 'Cleaning',
    isCompleted: false,
    notes: '',
    photoRequired: false,
    signatureRequired: false
  },
  {
    id: 'sps-clean-5',
    text: 'Clean float switches to ensure free movement without grease or debris impedance',
    category: 'Cleaning',
    isCompleted: false,
    notes: '',
    photoRequired: false,
    signatureRequired: false
  },
  // Component Maintenance
  {
    id: 'sps-maint-1',
    text: 'Inspect impeller for cracks, wear, or clogs and replace if damaged',
    category: 'Maintenance',
    isCompleted: false,
    notes: '',
    photoRequired: true,
    signatureRequired: false
  },
  {
    id: 'sps-maint-2',
    text: 'Check mechanical seals for leaks and replace if necessary',
    category: 'Maintenance',
    isCompleted: false,
    notes: '',
    photoRequired: false,
    signatureRequired: false
  },
  {
    id: 'sps-maint-3',
    text: 'Lubricate bearings and moving parts per manufacturer specifications',
    category: 'Maintenance',
    isCompleted: false,
    notes: '',
    photoRequired: false,
    signatureRequired: false
  }
];