import { ChecklistItem } from '../types/checklist';

export const otherWaterPumpServicePart1: ChecklistItem[] = [
  {
    id: 'owps-1',
    text: 'Customer / Site / WO # / System type & purpose:',
    category: 'Job Header, Safety & Site Controls',
    isRequired: true,
    hasInput: true,
    inputType: 'text'
  },
  {
    id: 'owps-2',
    text: 'Last service date / recent issues / prior readings reviewed',
    category: 'Job Header, Safety & Site Controls',
    isRequired: true
  },
  {
    id: 'owps-3',
    text: 'Photos: equipment room, pump(s), panel(s), gauges/meters, tanks, chemical area',
    category: 'Job Header, Safety & Site Controls',
    isRequired: true,
    hasPhoto: true
  },
  {
    id: 'owps-4',
    text: 'Tailboard/JSA: PPE, LOTO plan, slips/falls, sharp edges, rotating equipment, electrical hazards',
    category: 'Job Header, Safety & Site Controls',
    isRequired: true
  },
  {
    id: 'owps-5',
    text: 'Chemicals present? Review SDS; stage spill kit, neutralizers, eyewash path',
    category: 'Job Header, Safety & Site Controls',
    isRequired: true
  },
  {
    id: 'owps-6',
    text: 'Confined Space? No entry without permit, continuous monitoring, retrieval, attendant',
    category: 'Job Header, Safety & Site Controls',
    isRequired: true
  },
  {
    id: 'owps-7',
    text: 'GFCI test at receptacles; ensure dry footing for panel work; ventilation on',
    category: 'Job Header, Safety & Site Controls',
    isRequired: true
  },
  {
    id: 'owps-8',
    text: 'Visual sweep: leaks, corrosion, salt creep, scale, rust streaks, wet floors',
    category: 'Initial Assessment & Baseline',
    isRequired: true
  },
  {
    id: 'owps-9',
    text: 'Supports & restraints intact; no pipe "walk" or vibration rubs',
    category: 'Initial Assessment & Baseline',
    isRequired: true
  },
  {
    id: 'owps-10',
    text: 'Electrical visual: condensation, rusted lugs, burnt marks, compromised glands/conduit',
    category: 'Initial Assessment & Baseline',
    isRequired: true
  }
];