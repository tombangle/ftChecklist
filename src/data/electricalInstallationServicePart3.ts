import { ChecklistItem } from '../types/checklist';

export const electricalInstallationServicePart3Items: ChecklistItem[] = [
  // 4) Grounding & Bonding the Service
  {
    id: 'grounding-1',
    text: 'Bond all service metal parts (raceways, enclosures, meter cabinets, etc.) per 250.92; use bonding jumpers and listed fittings where required',
    category: 'Grounding & Bonding the Service',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'grounding-2',
    text: 'Grounding Electrode System: identify electrodes per 250.52 and install/connect per 250.53',
    category: 'Grounding & Bonding the Service',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'grounding-3',
    text: 'Size the Grounding Electrode Conductor (GEC) from Table 250.66; apply special minimums (e.g., 4 AWG Cu to CEE) and protect/secure the GEC per 250.64(B)',
    category: 'Grounding & Bonding the Service',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'grounding-4',
    text: 'Provide Intersystem Bonding Termination (IBT) at service or meter equipment per 250.94',
    category: 'Grounding & Bonding the Service',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },

  // 5) Panelboards / Switchboards (Load Side of Service)
  {
    id: 'panels-1',
    text: 'Use cabinets/enclosures per Article 312; mount panelboards in identified enclosures with dead-fronts and grounding bar terminations per 408.37–.40',
    category: 'Panelboards / Switchboards (Load Side of Service)',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'panels-2',
    text: 'Provide required overcurrent protection to panelboards per 408.36 (OCPD rating ≤ panelboard rating; location within or on the supply side as permitted)',
    category: 'Panelboards / Switchboards (Load Side of Service)',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'panels-3',
    text: 'Install service barriers in service panelboards/switchboards/switchgear per 408.3(A)(2)',
    category: 'Panelboards / Switchboards (Load Side of Service)',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'panels-4',
    text: 'Create accurate circuit directory/identification per 408.4(A) (no transient descriptions)',
    category: 'Panelboards / Switchboards (Load Side of Service)',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'panels-5',
    text: 'Apply arc-flash hazard warning labels where required (other-than-dwelling equipment likely to be serviced energized 110.16(A); additional rules for ≥1000 A service/feeder equipment 110.16(B))',
    category: 'Panelboards / Switchboards (Load Side of Service)',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  }
];