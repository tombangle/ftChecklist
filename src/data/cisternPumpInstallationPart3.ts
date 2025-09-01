import { ChecklistSection } from '@/types/checklist';

export const cisternPumpInstallationPart3: ChecklistSection[] = [
  {
    id: 'discharge-section',
    title: 'B) Discharge/Manifold (at tank wall/utility room)',
    description: '',
    items: [
      {
        id: 'discharge-1',
        text: 'Penetrations: sleeve & seal; watertight boots/glands installed.',
        category: 'B) Discharge/Manifold'
      },
      {
        id: 'discharge-2',
        text: 'Piping material per spec (NSF-61/372 where potable). Size: ____".',
        category: 'B) Discharge/Manifold',
        hasTextField: true
      },
      {
        id: 'discharge-3',
        text: 'Install components in order (typical): Pump → Check valve → Isolation valve → Pressure gauge port → Filter(s) → Pressure tank tee → Distribution manifold.',
        category: 'B) Discharge/Manifold'
      },
      {
        id: 'discharge-4',
        text: 'Add drain/backflush ports and sample tap; unions at service points.',
        category: 'B) Discharge/Manifold'
      },
      {
        id: 'pressure-1',
        text: 'Size ____ gal; isolation valve, drain, gauge, relief valve; level & accessible.',
        category: 'C) Pressure Tank (if used)',
        hasTextField: true
      },
      {
        id: 'pressure-2',
        text: 'Precharge set preliminary to (cut-in – 2 psi) = ____ psi.',
        category: 'C) Pressure Tank (if used)',
        hasTextField: true
      },
      {
        id: 'test-1',
        text: 'Test at ___ psi for ___ min; record start/finish; ☐ Pass ☐ Repair & re-test.',
        category: 'D) Leak & Pressure Test (plumbing)',
        hasTextField: true
      },
      {
        id: 'test-2',
        text: 'Flush lines to clear cuttings before connecting sensitive equipment.',
        category: 'D) Leak & Pressure Test (plumbing)'
      },
      {
        id: 'hold-l1-1',
        text: 'Supports/straps correct, expansion/settlement allowances, valves oriented/accessible.',
        category: 'Hold Point L1 — Plumbing QC'
      },
      {
        id: 'hold-l1-2',
        text: 'Test report filed; photos captured.',
        category: 'Hold Point L1 — Plumbing QC'
      }
    ]
  }
];