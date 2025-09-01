import { ChecklistSection } from '@/types/checklist';

export const cisternPumpInstallationPart4: ChecklistSection[] = [
  {
    id: 'level-2',
    title: 'LEVEL 2 — Electrical & Automation Installation',
    description: 'Power, controls, sensors, and automation wired, protected, and labeled.',
    items: [
      {
        id: 'power-1',
        text: 'Dedicated circuit sized for motor FLA & starting method; OCPD/breaker ____ A.',
        category: 'A) Power & Bonding',
        hasTextField: true
      },
      {
        id: 'power-2',
        text: 'Conduit runs dry & supported; drip loops; NEMA/IP rating appropriate.',
        category: 'A) Power & Bonding'
      },
      {
        id: 'power-3',
        text: 'Equipment grounding conductor sized & landed; bonding jumpers across dielectric unions if present.',
        category: 'A) Power & Bonding'
      },
      {
        id: 'power-4',
        text: 'GFCI/AFCI per code where required.',
        category: 'A) Power & Bonding'
      },
      {
        id: 'controls-1',
        text: 'Control panel mounted; clearances maintained; labeling applied.',
        category: 'B) Controls & Instrumentation'
      },
      {
        id: 'controls-2',
        text: 'Level control: ☐ Float(s) (LOW/STOP, HIGH/ALARM) ☐ Pressure transducer ☐ Ultrasonic ☐ Other.',
        category: 'B) Controls & Instrumentation'
      },
      {
        id: 'controls-3',
        text: 'Wire floats/sensors to terminal designations; test with simulator or manual actuations.',
        category: 'B) Controls & Instrumentation'
      },
      {
        id: 'controls-4',
        text: 'Run-dry protection: ☐ Pressure switch lockout ☐ Under-load relay ☐ VFD dry-run detect.',
        category: 'B) Controls & Instrumentation'
      },
      {
        id: 'controls-5',
        text: 'Pressure switch: tubing & contacts checked; cut-in/out prelim set / psi.',
        category: 'B) Controls & Instrumentation',
        hasTextField: true
      },
      {
        id: 'controls-6',
        text: 'VFD (if used): motor data, min/max Hz, accel/decel, PID target ___ psi, sleep/wake thresholds.',
        category: 'B) Controls & Instrumentation',
        hasTextField: true
      }
    ]
  }
];