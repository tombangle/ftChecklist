import { ChecklistItem } from '../types/checklist';

export const lowYieldInstallationChecklist: ChecklistItem[] = [
  {
    id: 'lyi-1',
    text: 'Customer / Site / WO # / Permits checked.',
    category: 'Pre-Installation Planning'
  },
  {
    id: 'lyi-2',
    text: 'Well data verified: total depth ___ ft, casing Ø ___, perforations zone ___ - ___ ft.',
    category: 'Pre-Installation Planning'
  },
  {
    id: 'lyi-3',
    text: 'Measured water levels: Static ___ ft btoc (time: ___), historic pumping level (if known): ___ ft.',
    category: 'Pre-Installation Planning'
  },
  {
    id: 'lyi-4',
    text: 'Sustainable yield target (from test or records): ___ gpm continuous / duty cycle: ___ on / ___ off.',
    category: 'Pre-Installation Planning'
  },
  {
    id: 'lyi-5',
    text: 'Pump selection matches target TDH and caps discharge at sustainable yield.',
    category: 'Pre-Installation Planning'
  },
  {
    id: 'lyi-6',
    text: 'Control strategy chosen: ☐ Pressure switch ☐ CSV ☐ VFD (+ transducer).',
    category: 'Pre-Installation Planning'
  },
  {
    id: 'lyi-7',
    text: 'Protection device to install: ☐ Pumptec / Pumptec-Plus ☐ PumpSaver (233P or equiv.) ☐ Coyote (1φ / 3φ).',
    category: 'Pre-Installation Planning'
  },
  {
    id: 'lyi-8',
    text: 'Low-yield aids considered (check if used): ☐ Flow restrictor/orifice ☐ Storage/cistern ☐ Timer lockout.',
    category: 'Pre-Installation Planning'
  },
  {
    id: 'lyi-9',
    text: 'Materials staged, compatibility checked (potable-rated wetted parts), sanitary kit ready.',
    category: 'Pre-Installation Planning'
  },
  {
    id: 'lyi-10',
    text: 'Safety plan & LOTO reviewed; utility locates cleared; tailboard done.',
    category: 'Pre-Installation Planning'
  },
  {
    id: 'lyi-11',
    text: 'Route from well to building/tank pad; maintain code depth (below frost) & drainage away from well.',
    category: 'Trench Layout & Excavation'
  },
  {
    id: 'lyi-12',
    text: 'Respect separations from other utilities; place warning tape plan.',
    category: 'Trench Layout & Excavation'
  }
];