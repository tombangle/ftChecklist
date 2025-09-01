import { ChecklistItem } from '../types/checklist';

export const cisternPumpModificationPart1: ChecklistItem[] = [
  // Job Header, Scope & Planning
  {
    id: 'cpm-header-1',
    text: 'Customer / Site / WO # / Reason for modification documented',
    category: 'Job Header & Planning',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-header-2',
    text: 'Defined SOW and signed change order (include inclusions/exclusions)',
    category: 'Job Header & Planning',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: true,
    notes: ''
  },
  {
    id: 'cpm-header-3',
    text: 'Rollback plan documented (how to return to original configuration)',
    category: 'Job Header & Planning',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-header-4',
    text: 'Cutover window defined (start/end), customer impact notified, temp-water plan',
    category: 'Job Header & Planning',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-header-5',
    text: 'Codes/permits verified: Plumbing, Electrical, Health Dept, Backflow, Excavation, Confined Space',
    category: 'Job Header & Planning',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-header-6',
    text: 'Design targets confirmed: peak flow ___ gpm, delivery pressure ___ psi, storage ___ gal',
    category: 'Job Header & Planning',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-header-7',
    text: 'Pump/control strategy post-mod: Submersible/External booster/Duplex/Pressure switch/VFD',
    category: 'Job Header & Planning',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-header-8',
    text: 'WBS task assignment: Lead/Plumbing/Electrical-Controls/Commissioning/Safety-CS',
    category: 'Job Header & Planning',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-header-9',
    text: 'Materials & tools staged (by level), spare consumables on hand',
    category: 'Job Header & Planning',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  },
  {
    id: 'cpm-header-10',
    text: 'Risk & safety plan: Tailboard/JSA, weather/groundwater check, spill kit, egress ladder(s)',
    category: 'Job Header & Planning',
    isCompleted: false,
    requiresPhoto: false,
    requiresSignature: false,
    notes: ''
  }
];