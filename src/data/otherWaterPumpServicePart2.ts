import { ChecklistItem } from '../types/checklist';

export const otherWaterPumpServicePart2: ChecklistItem[] = [
  {
    id: 'owps-11',
    text: 'Customer interview: low flow/pressure, noise, cycling, alarms, air bursts, taste/odor',
    category: 'Initial Assessment & Baseline',
    isRequired: true,
    hasInput: true,
    inputType: 'textarea'
  },
  {
    id: 'owps-12',
    text: 'Static pressure ____ psi (location)',
    category: 'Initial Assessment & Baseline',
    isRequired: true,
    hasInput: true,
    inputType: 'number'
  },
  {
    id: 'owps-13',
    text: 'Line voltage (idle) ____ V (L–L / L–G)',
    category: 'Initial Assessment & Baseline',
    isRequired: true,
    hasInput: true,
    inputType: 'number'
  },
  {
    id: 'owps-14',
    text: 'Ambient room temp ____ °F; ventilation status',
    category: 'Initial Assessment & Baseline',
    isRequired: true,
    hasInput: true,
    inputType: 'number'
  },
  {
    id: 'owps-15',
    text: 'Notify occupants; initiate temporary water/bypass if required',
    category: 'Isolation, De-energize & Safe Drain-Down',
    isRequired: true
  },
  {
    id: 'owps-16',
    text: 'Power OFF & LOTO at main disconnect/breaker; verify zero energy with meter',
    category: 'Isolation, De-energize & Safe Drain-Down',
    isRequired: true
  },
  {
    id: 'owps-17',
    text: 'Close isolation valves; depressurize to 0 psi at drain/flush port; capture discharge',
    category: 'Isolation, De-energize & Safe Drain-Down',
    isRequired: true
  },
  {
    id: 'owps-18',
    text: 'Sanitary handling for wetted parts; plug/cap open lines immediately',
    category: 'Isolation, De-energize & Safe Drain-Down',
    isRequired: true
  },
  {
    id: 'owps-19',
    text: 'External inspection: casings, flanges, seals, weep holes, mounting bolts, baseplate grout',
    category: 'Pumps & Drives (mechanical)',
    isRequired: true
  },
  {
    id: 'owps-20',
    text: 'Couplings/guards: alignment indicators; guard secure; elastomer wear',
    category: 'Pumps & Drives (mechanical)',
    isRequired: true
  }
];