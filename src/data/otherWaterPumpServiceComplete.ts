import { ChecklistItem } from '../types/checklist';

export const otherWaterPumpServiceComplete: ChecklistItem[] = [
  {
    id: 'owps-41',
    text: 'Inspect valves/actuators; set timers; sample effluent clarity/odor (carbon)',
    category: 'Treatment Modules',
    isRequired: false
  },
  {
    id: 'owps-42',
    text: 'Softeners: Brine tank salt level/bridging; clean injector; check brine draw',
    category: 'Treatment Modules',
    isRequired: false
  },
  {
    id: 'owps-43',
    text: 'Hardness: influent ____ gpg | effluent ____ gpg (target ≤ ____ gpg)',
    category: 'Treatment Modules',
    isRequired: false,
    hasInput: true,
    inputType: 'text'
  },
  {
    id: 'owps-44',
    text: 'Regeneration settings: capacity, reserve, time; cycle test',
    category: 'Treatment Modules',
    isRequired: false
  },
  {
    id: 'owps-45',
    text: 'UV Disinfection: UV intensity reading ____% (above trip threshold?)',
    category: 'Treatment Modules',
    isRequired: false,
    hasInput: true,
    inputType: 'number'
  },
  {
    id: 'owps-46',
    text: 'Clean sleeve; inspect O-rings; replace lamp if hours exceeded; verify alarm interlock',
    category: 'Treatment Modules',
    isRequired: false
  },
  {
    id: 'owps-47',
    text: 'RO: Record permeate flow ____ gpm | reject ____ gpm | recovery ____%',
    category: 'Treatment Modules',
    isRequired: false,
    hasInput: true,
    inputType: 'text'
  },
  {
    id: 'owps-48',
    text: 'Feed/Permeate TDS: ____ / ____ mg/L; % rejection ____%',
    category: 'Treatment Modules',
    isRequired: false,
    hasInput: true,
    inputType: 'text'
  },
  {
    id: 'owps-49',
    text: 'Pre-filter ΔP; pump amps; check antiscalant tank level & dose',
    category: 'Treatment Modules',
    isRequired: false
  },
  {
    id: 'owps-50',
    text: 'Sanitize & flush per SOP if bio-fouling observed',
    category: 'Treatment Modules',
    isRequired: false
  },
  {
    id: 'owps-51',
    text: 'Chemical Feed: Inspect pumps: tubing/head wear, leaks; stroke rate & length settings recorded',
    category: 'Treatment Modules',
    isRequired: false
  },
  {
    id: 'owps-52',
    text: 'Calibrate feed: draw ____ mL in ____ s → ____ mL/min (target ____); update setpoint',
    category: 'Treatment Modules',
    isRequired: false,
    hasInput: true,
    inputType: 'text'
  },
  {
    id: 'owps-53',
    text: 'Check day tank: labeling, secondary containment, vent, mixer operation (if present)',
    category: 'Treatment Modules',
    isRequired: false
  }
];