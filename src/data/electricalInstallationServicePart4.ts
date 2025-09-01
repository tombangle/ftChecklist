import { ChecklistItem } from '../types/checklist';

export const electricalInstallationServicePart4Items: ChecklistItem[] = [
  // 6) Industrial Control Panels (ICPs) & Control Equipment (Article 409)
  {
    id: 'icp-1',
    text: 'Verify SCCR of the panel is marked per 409.110(4) and ≥ available fault current at the install point per 409.22(A)',
    category: 'Industrial Control Panels (ICPs) & Control Equipment (Article 409)',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'icp-2',
    text: 'If field-built or modified, determine/mark SCCR using an approved method (e.g., UL 508A Supplement SB) and document',
    category: 'Industrial Control Panels (ICPs) & Control Equipment (Article 409)',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },

  // Final inspection and testing
  {
    id: 'final-1',
    text: 'Perform final visual inspection of all installed equipment and connections',
    category: 'Final Inspection and Testing',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'final-2',
    text: 'Test all protective devices and verify proper operation',
    category: 'Final Inspection and Testing',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'final-3',
    text: 'Verify all required labels and markings are in place and legible',
    category: 'Final Inspection and Testing',
    isCompleted: false,
    requiresPhoto: true,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'final-4',
    text: 'Complete installation documentation and obtain required approvals',
    category: 'Final Inspection and Testing',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: true,
    notes: ''
  }
];