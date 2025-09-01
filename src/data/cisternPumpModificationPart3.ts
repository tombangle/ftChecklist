import { ChecklistItem } from '../types/checklist';

export const cisternPumpModificationPart3: ChecklistItem[] = [
  {
    id: 'cpm-baseline-5',
    text: 'Line voltage idle/run ___ V | Current run ___ A (per leg if 3φ)',
    category: 'Baseline Assessment',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-baseline-6',
    text: 'Photos: panel (including settings), manifold/valves, penetrations, risers, site overview',
    category: 'Baseline Assessment',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-baseline-7',
    text: 'Configuration capture: existing wiring/parameter backup (download VFD), float elevations, timer schedules',
    category: 'Baseline Assessment',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  // Plumbing & Tank-Side Alterations - Isolate & Dismantle
  {
    id: 'cpm-plumb-1',
    text: 'Close upstream/downstream valves; drain to 0 psi; verify no residual pressure',
    category: 'Plumbing Alterations',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-plumb-2',
    text: 'Tag and mark all lines/ports (number valves, arrows for flow, photo capture)',
    category: 'Plumbing Alterations',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-plumb-3',
    text: 'Disconnect unions/couplings; protect open lines with clean caps',
    category: 'Plumbing Alterations',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  // Penetrations & Cistern Interfaces
  {
    id: 'cpm-plumb-4',
    text: 'Add/relocate wall penetrations using sleeves/boots; ensure watertight seals',
    category: 'Plumbing Alterations',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-plumb-5',
    text: 'Inspect/replace riser gaskets; verify vent & overflow screens are intact and sized',
    category: 'Plumbing Alterations',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-plumb-6',
    text: 'If adding anti-floatation or seismic restraints, install per detail; record torque',
    category: 'Plumbing Alterations',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  // Manifold Rework & Components
  {
    id: 'cpm-plumb-7',
    text: 'Lay out revised order: Pump → Check → Isolation → Gauge port → Filters → Pressure tank tee → Distribution',
    category: 'Plumbing Alterations',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  }
];