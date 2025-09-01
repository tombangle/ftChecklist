import { ChecklistItem } from '../types/checklist';

export const sewerPumpServicePart1: ChecklistItem[] = [
  // Safety Preparations
  {
    id: 'sps-safety-1',
    text: 'Disconnect power supply to pump and control panel',
    category: 'Safety',
    isCompleted: false,
    notes: '',
    photoRequired: false,
    signatureRequired: false
  },
  {
    id: 'sps-safety-2',
    text: 'Follow proper lockout/tagout procedures to prevent accidental activation',
    category: 'Safety',
    isCompleted: false,
    notes: '',
    photoRequired: false,
    signatureRequired: true
  },
  {
    id: 'sps-safety-3',
    text: 'Wear appropriate PPE (gloves, goggles, boots, mask) for sewage exposure protection',
    category: 'Safety',
    isCompleted: false,
    notes: '',
    photoRequired: false,
    signatureRequired: false
  },
  {
    id: 'sps-safety-4',
    text: 'Ensure area is well-ventilated to avoid hazardous gas buildup (methane, hydrogen sulfide)',
    category: 'Safety',
    isCompleted: false,
    notes: '',
    photoRequired: false,
    signatureRequired: false
  },
  // Initial Inspection
  {
    id: 'sps-inspect-1',
    text: 'Open access cover and inspect wet well for debris, grease, or sludge buildup',
    category: 'Inspection',
    isCompleted: false,
    notes: '',
    photoRequired: true,
    signatureRequired: false
  },
  {
    id: 'sps-inspect-2',
    text: 'Check pump housing, impeller, and seals for damage, corrosion, or leaks',
    category: 'Inspection',
    isCompleted: false,
    notes: '',
    photoRequired: true,
    signatureRequired: false
  },
  {
    id: 'sps-inspect-3',
    text: 'Inspect wiring and connections at control panel for wear, corrosion, loose terminals',
    category: 'Inspection',
    isCompleted: false,
    notes: '',
    photoRequired: false,
    signatureRequired: false
  },
  {
    id: 'sps-inspect-4',
    text: 'Test high-water alarm operation and response to water level changes',
    category: 'Inspection',
    isCompleted: false,
    notes: '',
    photoRequired: false,
    signatureRequired: false
  }
];