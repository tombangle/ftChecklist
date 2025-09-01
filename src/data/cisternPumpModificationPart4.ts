import { ChecklistItem } from '../types/checklist';

export const cisternPumpModificationPart4: ChecklistItem[] = [
  {
    id: 'cpm-plumb-8',
    text: 'Add/relocate drain/flush and sample ports; include service unions at all devices',
    category: 'Plumbing Alterations',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-plumb-9',
    text: 'Install/upgrade filters or backwash tees; note micron rating & ΔP taps if applicable',
    category: 'Plumbing Alterations',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-plumb-10',
    text: 'Add or resize pressure tank (if switching to pressure-switch control); provide relief valve',
    category: 'Plumbing Alterations',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-plumb-11',
    text: 'Support & restraint: pipe hangers, expansion allowances, anti-vibration as needed',
    category: 'Plumbing Alterations',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  // Pressure & Leak Test
  {
    id: 'cpm-test-1',
    text: 'Hydro/air test to ___ psi for ___ min; record start/finish; Pass/Repair → re-test',
    category: 'Pressure Testing',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: true,
    notes: ''
  },
  {
    id: 'cpm-test-2',
    text: 'Flush lines to clear cuttings before tying into sensitive equipment',
    category: 'Pressure Testing',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-qc-1',
    text: 'Hold Point M1 — Plumbing QC: All seals/boots watertight; valves oriented/labeled; unions accessible; test report & photos saved',
    category: 'Quality Control',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: true,
    notes: ''
  },
  // Electrical & Automation Alterations - Power & Bonding
  {
    id: 'cpm-elec-1',
    text: 'Verify circuit ampacity to new motor FLA/inrush; OCPD ___ A; conductor size checked for voltage drop',
    category: 'Electrical Alterations',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-elec-2',
    text: 'Conduit routing adjusted; IP glands installed; drip loops; equipment ground & bonding jumpers verified',
    category: 'Electrical Alterations',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  // Controls & Instrumentation
  {
    id: 'cpm-elec-3',
    text: 'Pressure switch changes: tubing secure, contacts clean; provisional cut-in/out set ___ psi',
    category: 'Electrical Alterations',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  }
];