import { ChecklistItem } from '../types/checklist';

export const cisternPumpModificationPart2: ChecklistItem[] = [
  // Confined Space Rule
  {
    id: 'cpm-cs-1',
    text: 'Confined Space Rule: No entry into cistern without permit, continuous air monitoring, retrieval system, and trained attendant',
    category: 'Safety & Site Controls',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: true,
    notes: ''
  },
  // Safety, Isolation & Site Controls
  {
    id: 'cpm-safety-1',
    text: 'Work zone established, cones/tape; finishes protected; absorbent & catch pans placed',
    category: 'Safety & Site Controls',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-safety-2',
    text: 'GFCI test at service receptacles; dry footing for panel work confirmed',
    category: 'Safety & Site Controls',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-safety-3',
    text: 'De-energize & LOTO at breaker/disconnect; meter-verify zero energy',
    category: 'Safety & Site Controls',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: true,
    notes: ''
  },
  {
    id: 'cpm-safety-4',
    text: 'Close isolation valves; depressurize to 0 psi; drain per SOP (capture & dispose properly)',
    category: 'Safety & Site Controls',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-safety-5',
    text: 'If tank will be opened: sanitize tools, use clean caps/plugs to protect potable paths',
    category: 'Safety & Site Controls',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  // Baseline Assessment
  {
    id: 'cpm-baseline-1',
    text: 'Visuals: cistern exterior (leaks/settlement), risers/lids/vent/overflow screens, manifold, supports',
    category: 'Baseline Assessment',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-baseline-2',
    text: 'Electrical panel: moisture/corrosion, gland integrity, conductor condition, torque tags',
    category: 'Baseline Assessment',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-baseline-3',
    text: 'Static pressure ___ psi | Cut-in/out ___ psi (if tanked)',
    category: 'Baseline Assessment',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-baseline-4',
    text: 'Flow at test port ___ gpm @ ___ psi',
    category: 'Baseline Assessment',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  }
];