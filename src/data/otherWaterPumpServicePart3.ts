import { ChecklistItem } from '../types/checklist';

export const otherWaterPumpServicePart3: ChecklistItem[] = [
  {
    id: 'owps-21',
    text: 'Bearings: temperature by touch/IR, noise/vibration; grease per OEM (avoid over-lube)',
    category: 'Pumps & Drives (mechanical)',
    isRequired: true
  },
  {
    id: 'owps-22',
    text: 'Impeller/channel check (where accessible): debris, wear, trim data on nameplate',
    category: 'Pumps & Drives (mechanical)',
    isRequired: true
  },
  {
    id: 'owps-23',
    text: 'Multi-pump sets: lead/lag rotation & alternation logic noted',
    category: 'Pumps & Drives (mechanical)',
    isRequired: true
  },
  {
    id: 'owps-24',
    text: 'If seal leak detected → plan seal kit replacement; verify seal flush/plan if fitted',
    category: 'Pumps & Drives (mechanical)',
    isRequired: true
  },
  {
    id: 'owps-25',
    text: 'Hold Point A — No active leaks; guards on; lubrication complete; mechanical concerns listed/photos saved',
    category: 'Pumps & Drives (mechanical)',
    isRequired: true,
    hasPhoto: true
  },
  {
    id: 'owps-26',
    text: 'Panel housekeeping: dry condensation, vacuum debris; check enclosure gaskets',
    category: 'Electrical & Controls',
    isRequired: true
  },
  {
    id: 'owps-27',
    text: 'Torque terminals to spec (document if policy requires); no insulation nicks; ferrules present',
    category: 'Electrical & Controls',
    isRequired: true
  },
  {
    id: 'owps-28',
    text: 'Grounding & bonding continuity verified; SPD (surge protection) present/OK',
    category: 'Electrical & Controls',
    isRequired: true
  },
  {
    id: 'owps-29',
    text: 'Motor checks: insulation ____ MΩ @ ____ V; compare to prior logs',
    category: 'Electrical & Controls',
    isRequired: true,
    hasInput: true,
    inputType: 'text'
  },
  {
    id: 'owps-30',
    text: 'Starters: contact wear, overload settings match motor FLA',
    category: 'Electrical & Controls',
    isRequired: true
  }
];