import { ChecklistItem } from '../types/checklist';

export const electricalServiceComprehensiveItems: ChecklistItem[] = [
  // Job setup & documentation
  {
    id: 'es-setup-1',
    text: 'Review one-line, panel schedules, control diagrams, and O&M manuals',
    category: 'Job setup & documentation',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'es-setup-2',
    text: 'Verify equipment is listed/labeled and service will follow manufacturer\'s instructions (keep cut sheets/QR links handy) [NEC 110.3(B)]',
    category: 'Job setup & documentation',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },

  // Workspace, access, and lighting
  {
    id: 'es-workspace-1',
    text: 'Clear and maintain working space depth/width/headroom; ensure doors can open without blocking egress',
    category: 'Workspace, access, and lighting',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'es-workspace-2',
    text: 'Verify entrance/egress rules for large equipment; check personnel-door requirements where applicable',
    category: 'Workspace, access, and lighting',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'es-workspace-3',
    text: 'Confirm dedicated equipment space above/behind equipment is free of foreign systems or protected; provide illumination for the working space. References: 110.26(A) working space; 110.26(C)(2)-(3) egress & doors; 110.26(E) dedicated space; 110.26(D) illumination',
    category: 'Workspace, access, and lighting',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },

  // Code-required markings & labels
  {
    id: 'es-labels-1',
    text: 'Arc-flash hazard warning present on equipment likely to be serviced energized (switchboards/switchgear/panelboards/ICPs/MCCs/etc.) [110.16(A)]',
    category: 'Code-required markings & labels',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'es-labels-2',
    text: 'Field-applied hazard labels are durable and not handwritten (except allowed variable fields) [110.21(B)]',
    category: 'Code-required markings & labels',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'es-labels-3',
    text: 'Available fault current label on service equipment (non-dwelling) shows maximum AFC and date of calculation; durable marking [110.24(A)]',
    category: 'Code-required markings & labels',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'es-labels-4',
    text: 'If the system was modified, recalculate and update the AFC label [110.24(B)]',
    category: 'Code-required markings & labels',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'es-labels-5',
    text: 'Disconnects are legibly identified for purpose/source [110.22(A)]',
    category: 'Code-required markings & labels',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'es-labels-6',
    text: 'Panel circuit directory is present, permanent, accurate, and specific (no transient descriptors) [408.4(A)/2023 408.4]',
    category: 'Code-required markings & labels',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'es-labels-7',
    text: 'Industrial control panels have required nameplate info including SCCR [409.110(4)]',
    category: 'Code-required markings & labels',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },

  // De-energize, verify absence of voltage, and secure area
  {
    id: 'es-safety-1',
    text: 'Coordinate required outages. Open the disconnect/OCPD',
    category: 'De-energize, verify absence of voltage, and secure area',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: true,
    notes: ''
  },
  {
    id: 'es-safety-2',
    text: 'Test your meter, test for absence of voltage on all phases/neutral/ground, then re-test your meter',
    category: 'De-energize, verify absence of voltage, and secure area',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: true,
    notes: ''
  },
  {
    id: 'es-safety-3',
    text: 'Apply LOTO per your company policy. (Work practices come from NFPA 70E/OSHA, but you still must maintain the NEC working space and guarding requirements when panels are open.)',
    category: 'De-energize, verify absence of voltage, and secure area',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: true,
    notes: ''
  },

  // Mechanical condition & enclosure integrity
  {
    id: 'es-mechanical-1',
    text: 'Inspect for overheating, corrosion, moisture intrusion, dirt/rodents',
    category: 'Mechanical condition & enclosure integrity',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'es-mechanical-2',
    text: 'Close unused openings (dead-front blanks, KO\'s) with identified closures; no tape or makeshift covers [110.12(A), 408.7]',
    category: 'Mechanical condition & enclosure integrity',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'es-mechanical-3',
    text: 'Confirm guarding of live parts ≥50 V by approved enclosures/partitions or restricted access [110.27(A)]',
    category: 'Mechanical condition & enclosure integrity',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'es-mechanical-4',
    text: 'For service equipment, verify line-side barriering per current code location (moved from 408.3(A)(2) to 230.62) and that barriers are intact after service',
    category: 'Mechanical condition & enclosure integrity',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },

  // Conductors & terminations
  {
    id: 'es-conductors-1',
    text: 'Identify conductor material/stranding and terminal ratings; verify proper wire size/type',
    category: 'Conductors & terminations',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'es-conductors-2',
    text: 'Re-torque all terminations to the manufacturer\'s specified value using a calibrated torque tool when numeric torque is provided [110.14(D)] and per listing/labeling instructions [110.3(B)]. Record values if required by your quality program',
    category: 'Conductors & terminations',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: true,
    notes: ''
  },

  // Overcurrent protective devices (OCPDs) – inspection & settings
  {
    id: 'es-ocpd-1',
    text: 'Inspect breakers/fuses for damage, proper mounting, and clearances; clean contact areas as allowed by manufacturer',
    category: 'Overcurrent protective devices (OCPDs) – inspection & settings',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'es-ocpd-2',
    text: 'Verify panelboard overcurrent protection rating/location complies (within the panelboard or on its supply side, rating not greater than the panelboard) [408.36]',
    category: 'Overcurrent protective devices (OCPDs) – inspection & settings',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'es-ocpd-3',
    text: 'For circuits ≥1200 A, verify an arc-energy reduction method is provided and documented (240.87 for breakers; 240.67 for fuses). Note the method (e.g., ZSI, maintenance switch, differential relaying) and test indicators where applicable',
    category: 'Overcurrent protective devices (OCPDs) – inspection & settings',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },

  // Industrial control panels (Article 409) & machine controls
  {
    id: 'es-icp-1',
    text: 'Confirm the panel\'s SCCR marking is present [409.110(4)] and not less than the available fault current at its supply [409.22(A)]; retain AFC/SCCR documentation',
    category: 'Industrial control panels (Article 409) & machine controls',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'es-icp-2',
    text: 'Inspect control power transformers, secondary protection, and control-circuit devices; verify component ratings don\'t downgrade overall SCCR',
    category: 'Industrial control panels (Article 409) & machine controls',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'es-icp-3',
    text: 'Check tightness/condition of contactors, overload relays, terminals; clean or replace as needed',
    category: 'Industrial control panels (Article 409) & machine controls',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },

  // Motors, motor controllers, MCCs, and VFDs
  {
    id: 'es-motors-1',
    text: 'Verify disconnecting means for motor and controller are within sight or meet the lockable-open exception; confirm function and labeling [430.102, Article 100 "in sight from"]',
    category: 'Motors, motor controllers, MCCs, and VFDs',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'es-motors-2',
    text: 'Check overload protection sizing and condition per nameplate (typ. 115%/125% with exceptions) [430.32]; confirm short-circuit/ground-fault protection per Table 430.52 and standard size rules [430.52(C)(1), 240.6]',
    category: 'Motors, motor controllers, MCCs, and VFDs',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'es-motors-3',
    text: 'In MCCs and VFD cabinets, confirm bus/feeder terminations are torqued, ventilation is clear, filters are clean, and HOA/local-remote functions operate',
    category: 'Motors, motor controllers, MCCs, and VFDs',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },

  // Reassembly & Final
  {
    id: 'es-final-1',
    text: 'Reassemble equipment with all covers and barriers properly installed',
    category: 'Reassembly & Final',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'es-final-2',
    text: 'Restore power and verify proper operation of all systems',
    category: 'Reassembly & Final',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: true,
    notes: ''
  },
  {
    id: 'es-final-3',
    text: 'Complete service documentation and provide customer report',
    category: 'Reassembly & Final',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: true,
    notes: ''
  }
];