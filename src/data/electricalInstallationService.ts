import { ChecklistItem } from '../types/checklist';

export const electricalInstallationServiceItems: ChecklistItem[] = [
  // 0) Plan, Calculate, and Stage
  {
    id: 'plan-1',
    text: 'One-line & scope confirmed (service size, voltage, phases, fault current at service and downstream equipment)',
    category: 'Plan, Calculate, and Stage',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'plan-2',
    text: 'Load calcs completed per Article 220 (choose standard or optional method; keep calc in job folder)',
    category: 'Plan, Calculate, and Stage',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'plan-3',
    text: 'Conductor ampacity basis chosen (Table 310.16) with temperature-limited by terminations per 110.14(C); if dwelling 1φ 120/240 V, you may apply 310.12 (100–400 A) as permitted',
    category: 'Plan, Calculate, and Stage',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'plan-4',
    text: 'Service conductor sizing meets 230.42 (≥125% continuous + 100% non-continuous before derating)',
    category: 'Plan, Calculate, and Stage',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'plan-5',
    text: 'Available Fault Current (AFC) determined at service and major panels; keep calc + date for labels',
    category: 'Plan, Calculate, and Stage',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },

  // 1) Location, Working Space & Mounting
  {
    id: 'location-1',
    text: 'Pick a location with required working space (depth, width, height) and egress; keep it clear and illuminated per 110.26(A),(C),(D)',
    category: 'Location, Working Space & Mounting',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'location-2',
    text: 'Provide Dedicated Equipment Space (no foreign systems) above/around switchboards, switchgear, panelboards, MCCs — now explicitly includes service equipment — per 110.26(E)',
    category: 'Location, Working Space & Mounting',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'location-3',
    text: 'If outdoors or damp/wet: enclosures listed weatherproof and entries arranged per 312.2; use fittings listed for wet locations',
    category: 'Location, Working Space & Mounting',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  }
];