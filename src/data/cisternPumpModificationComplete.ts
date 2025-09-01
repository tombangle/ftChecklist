import { ChecklistItem } from '../types/checklist';

export const cisternPumpModificationComplete: ChecklistItem[] = [
  {
    id: 'cpm-vfd-1',
    text: 'VFD conversion or re-tune: Enter motor data; set min/max Hz, accel/decel',
    category: 'VFD Configuration',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-vfd-2',
    text: 'Set PID target ___ psi; sleep/wake thresholds; anti-short-cycle/time delays',
    category: 'VFD Configuration',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-vfd-3',
    text: 'Enable/verify dry-run or under-load protection settings',
    category: 'VFD Configuration',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-sensors-1',
    text: 'Level sensors: float elevations verified; transducer calibration at empty/full points',
    category: 'Sensors & Alarms',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-alarms-1',
    text: 'Alarms updated: low-level, high-level, leak, door/tamper — function test and log',
    category: 'Sensors & Alarms',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-labels-1',
    text: 'Update labels/tags: circuit IDs, valve functions, alarm points, emergency contacts',
    category: 'Documentation',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-qc-2',
    text: 'Hold Point M2 — Electrical QC: All connections secure, settings verified, controls responsive, labels legible',
    category: 'Quality Control',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: true,
    notes: ''
  },
  {
    id: 'cpm-commission-1',
    text: 'System commissioning: Energize, fill, prime, and test all functions per modified configuration',
    category: 'Commissioning',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-commission-2',
    text: 'Performance verification: Flow ___ gpm @ ___ psi meets design targets',
    category: 'Commissioning',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-final-1',
    text: 'Final inspection: All work complete per SOW, site cleaned, materials removed',
    category: 'Final Inspection',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-handover-1',
    text: 'Customer training: Operation, maintenance schedule, emergency procedures, warranty terms',
    category: 'Customer Handover',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: true,
    notes: ''
  },
  {
    id: 'cpm-docs-1',
    text: 'Documentation package: As-built drawings, test reports, warranty cards, O&M manual',
    category: 'Documentation',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: true,
    notes: ''
  }
];