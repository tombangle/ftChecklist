import { ChecklistItem } from '../types/checklist';

export const lowYieldInstallationPart4: ChecklistItem[] = [
  {
    id: 'lyi-37',
    text: 'Land motor leads at control/VFD; connect pressure switch/CSV/VFD I/O as designed; bond/ground verified.',
    category: 'Final Terminations'
  },
  {
    id: 'lyi-38',
    text: 'Pumptec / Pumptec-Plus (Franklin): Set sensitivity/calibrate per motor HP; verify underload (dry-well) detection.',
    category: 'Pump Protection Programming'
  },
  {
    id: 'lyi-39',
    text: 'Pumptec-Plus: Set restart delay to match measured recovery (provisionally ___ min).',
    category: 'Pump Protection Programming'
  },
  {
    id: 'lyi-40',
    text: 'Pumptec: Confirm indicator behavior, wiring correct for 2- or 3-wire motor.',
    category: 'Pump Protection Programming'
  },
  {
    id: 'lyi-41',
    text: 'PumpSaver / 233P: With water flowing, enter CAL (learning) mode to capture normal load; device trips; set restart delay to ___ min.',
    category: 'Pump Protection Programming'
  },
  {
    id: 'lyi-42',
    text: 'PumpSaver: Enable rapid-cycle & voltage protections; note last-fault memory (if using Informer).',
    category: 'Pump Protection Programming'
  },
  {
    id: 'lyi-43',
    text: 'Coyote Protector: Set initial sensitivity LOW; set restart delay (5 min to 5 hr range) to provisional ___ min.',
    category: 'Pump Protection Programming'
  },
  {
    id: 'lyi-44',
    text: 'Coyote: Verify any jumpers (e.g., initial underload ignore) & re-program if changed.',
    category: 'Pump Protection Programming'
  },
  {
    id: 'lyi-45',
    text: 'VFD systems: Use built-in dry-run detect only if proven with your well; otherwise keep dedicated protector in series.',
    category: 'Pump Protection Programming'
  },
  {
    id: 'lyi-46',
    text: 'Open a high point/flush port; power ON; bleed air, achieve steady flow.',
    category: 'Controlled Startup & Purge'
  },
  {
    id: 'lyi-47',
    text: 'Check for leaks, vibration, abnormal sound/heat; correct before proceeding.',
    category: 'Controlled Startup & Purge'
  },
  {
    id: 'lyi-48',
    text: 'Establish controlled discharge (hose bib/test port) at target rate(s): ___ gpm.',
    category: 'Low-yield Verification & Tuning'
  }
];