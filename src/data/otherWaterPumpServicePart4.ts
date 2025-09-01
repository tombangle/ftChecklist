import { ChecklistItem } from '../types/checklist';

export const otherWaterPumpServicePart4: ChecklistItem[] = [
  {
    id: 'owps-31',
    text: 'VFD: alarm history, heatsink/fan clean, parameter backup completed',
    category: 'Electrical & Controls',
    isRequired: true
  },
  {
    id: 'owps-32',
    text: 'Sensors/IO: pressure transducer reading plausible; flow switch closes; tank level/float status',
    category: 'Electrical & Controls',
    isRequired: true
  },
  {
    id: 'owps-33',
    text: 'Hold Point B — Connections secure; protection settings plausible; IO verified; backups saved',
    category: 'Electrical & Controls',
    isRequired: true
  },
  {
    id: 'owps-34',
    text: 'Inspect all visible pipework; tighten/repair weeps; add supports where needed',
    category: 'Plumbing, Valves & Gauges',
    isRequired: true
  },
  {
    id: 'owps-35',
    text: 'Exercise & test: isolation valves, check valves (close-off test if possible), PRVs, relief valves',
    category: 'Plumbing, Valves & Gauges',
    isRequired: true
  },
  {
    id: 'owps-36',
    text: 'Gauges readable & zero correctly; replace failed/pegged gauges',
    category: 'Plumbing, Valves & Gauges',
    isRequired: true
  },
  {
    id: 'owps-37',
    text: 'Flush low-points and trapped air; confirm air release valves functional (if fitted)',
    category: 'Plumbing, Valves & Gauges',
    isRequired: true
  },
  {
    id: 'owps-38',
    text: 'Cartridge/Bag Filters: Measure ΔP (in–out): ____ → ____ psi; replace if ΔP > spec',
    category: 'Treatment Modules',
    isRequired: false,
    hasInput: true,
    inputType: 'text'
  },
  {
    id: 'owps-39',
    text: 'Replace cartridges/bags; inspect O-rings, lube food-grade; sanitize housings; purge air',
    category: 'Treatment Modules',
    isRequired: false
  },
  {
    id: 'owps-40',
    text: 'Media Filters: Check ΔP ____ psi; backwash/rinse per SOP; verify flow & clear sight-glass',
    category: 'Treatment Modules',
    isRequired: false,
    hasInput: true,
    inputType: 'number'
  }
];