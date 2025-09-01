import { ChecklistSection } from '@/types/checklist';

export const cisternPumpInstallationPart2: ChecklistSection[] = [
  {
    id: 'backfill-section',
    title: 'E) Backfill & Protection',
    description: '',
    items: [
      {
        id: 'backfill-1',
        text: 'Partial fill tank with clean water to 1/3–1/2 before backfill.',
        category: 'E) Backfill & Protection'
      },
      {
        id: 'backfill-2',
        text: 'Backfill in 6–12" lifts; compact to spec; protect fittings/risers; mark caution tape above service lines.',
        category: 'E) Backfill & Protection'
      },
      {
        id: 'backfill-3',
        text: 'Thermal protection: ☐ Insulation board ☐ Depth below frost ☐ Heat trace (if specified).',
        category: 'E) Backfill & Protection'
      },
      {
        id: 'hold-p1-1',
        text: 'Tank level, connections tight, vent/overflow screened, anti-floatation installed.',
        category: 'Hold Point P1 — Pre-Cover Inspection'
      },
      {
        id: 'hold-p1-2',
        text: 'Photos; inspector sign-off __________ Date ______.',
        category: 'Hold Point P1 — Pre-Cover Inspection',
        hasTextField: true
      }
    ]
  },
  {
    id: 'level-1',
    title: 'LEVEL 1 — Plumbing & Pump Setup',
    description: 'Complete suction/discharge piping, pump installation, and hydraulic appurtenances.',
    items: [
      {
        id: 'suction-1',
        text: 'Install suction assembly: foot valve (if specified), intake screen, anti-vortex plate (if needed).',
        category: 'A) Suction/Intake (inside cistern)'
      },
      {
        id: 'suction-2',
        text: 'Elevation: ____" above tank bottom (sediment clearance).',
        category: 'A) Suction/Intake (inside cistern)',
        hasTextField: true
      },
      {
        id: 'suction-3',
        text: 'Flexible drop (for submersible) or suction standpipe (for external booster) supported & serviceable.',
        category: 'A) Suction/Intake (inside cistern)'
      },
      {
        id: 'suction-4',
        text: 'Union/service disconnect provided before penetrations.',
        category: 'A) Suction/Intake (inside cistern)'
      }
    ]
  }
];