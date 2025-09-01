import { ChecklistSection } from '@/types/checklist';

export const cisternPumpInstallationComplete: ChecklistSection[] = [
  {
    id: 'motor-section',
    title: 'C) Motor & Cable',
    description: '',
    items: [
      {
        id: 'motor-1',
        text: 'Submersible splice kit (heat-shrink/waterproof) installed; staggered & strain-relieved.',
        category: 'C) Motor & Cable'
      },
      {
        id: 'motor-2',
        text: 'Megger (if policy permits): motor to ground ____ MΩ @ ____ V.',
        category: 'C) Motor & Cable',
        hasTextField: true
      },
      {
        id: 'motor-3',
        text: 'Rotation verified for external pumps (brief jog).',
        category: 'C) Motor & Cable'
      },
      {
        id: 'panel-1',
        text: 'Terminal torque values recorded; ferrules used; wire ID complete; spare fuses available.',
        category: 'D) Panel QA'
      },
      {
        id: 'panel-2',
        text: 'Moisture control: panel heater/desiccant (if required); weathertight glands.',
        category: 'D) Panel QA'
      },
      {
        id: 'hold-l2-1',
        text: 'Continuity & insulation checks documented; I/O verified; labels/photos complete.',
        category: 'Hold Point L2 — Electrical QC'
      }
    ]
  }
];