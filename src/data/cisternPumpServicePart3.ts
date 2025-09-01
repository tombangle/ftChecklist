import { ChecklistItem } from '@/types/checklist';

export const cisternPumpServicePart3: ChecklistItem[] = [
  // System Commissioning & Testing
  { id: 'cps53', title: 'Remove LOTO; restore power; observe startup sequence for abnormal conditions', description: 'Restore power and observe initial startup', required: true, order: 53 },
  { id: 'cps54', title: 'Prime pump (if required); bleed air from high points; verify steady flow', description: 'Prime system and remove air from lines', required: true, order: 54 },
  { id: 'cps55', title: 'Initial readings under load: Flow ____ gpm @ ____ psi | Voltage ____ V | Current ____ A', description: 'Record initial performance measurements', required: true, order: 55 },
  { id: 'cps56', title: 'Pressure switch final calibration: cut-in ____ psi / cut-out ____ psi', description: 'Final pressure switch calibration', required: true, order: 56 },
  { id: 'cps57', title: 'VFD final settings (if used): target pressure ____ psi; PID tuned (no hunting); sleep/wake verified', description: 'Final VFD calibration and testing', required: false, order: 57 },
  { id: 'cps58', title: 'Level control verification: LOW stops pump; HIGH alarm triggers; manual overrides tested', description: 'Test level control logic and alarms', required: true, order: 58 },
  { id: 'cps59', title: 'Protection systems test: dry-run/under-load protection verified; restart delay ____ min', description: 'Test pump protection systems and timing', required: true, order: 59 },
  { id: 'cps60', title: 'Cycle test (≥3 cycles): record run time ____ sec / rest time ____ sec; no rapid cycling', description: 'Perform cycle testing to verify proper operation', required: true, order: 60 },
  { id: 'cps61', title: 'Multiple demand test: verify flows/pressures meet design at various demand points', description: 'Test system performance at multiple flow rates', required: true, order: 61 },
  { id: 'cps62', title: 'Filter performance: check differential pressure; confirm bypass/backwash procedures', description: 'Verify filter performance and maintenance procedures', required: true, order: 62 },
  { id: 'cps63', title: 'Backflow/air gap compliance: verify on fill/overflow connections', description: 'Confirm backflow prevention compliance', required: true, order: 63 },

  // Final Inspection & Documentation
  { id: 'cps64', title: 'Leak check: all connections, fittings, and penetrations leak-free', description: 'Final comprehensive leak inspection', required: true, order: 64 },
  { id: 'cps65', title: 'Electrical values within nameplate: voltage, current, and power factor acceptable', description: 'Verify electrical performance within specifications', required: true, order: 65 },
  { id: 'cps66', title: 'System stability: setpoint maintained, no nuisance trips or alarms', description: 'Confirm system operates stably without false alarms', required: true, order: 66 },
  { id: 'cps67', title: 'Water quality: runs clear at fixtures (if connected); no taste/odor issues', description: 'Verify water quality at point of use', required: true, order: 67 },
  { id: 'cps68', title: 'Site restoration: penetrations sealed, area cleaned, debris removed', description: 'Complete site cleanup and restoration', required: true, order: 68 },
  { id: 'cps69', title: 'Signage/labels: panel labels, valve tags, setpoint labels applied and legible', description: 'Apply and verify all required labeling', required: true, order: 69 },
  { id: 'cps70', title: 'Photo set completed: before/after, final settings, gauge readings', description: 'Complete photographic documentation', required: true, order: 70 },

  // Service Documentation & Customer Training
  { id: 'cps71', title: 'Service report: document all tasks performed, measurements, adjustments made', description: 'Complete comprehensive service documentation', required: true, order: 71 },
  { id: 'cps72', title: 'Recommended repairs/upgrades: list priority items with timeline', description: 'Document recommended future work', required: true, order: 72 },
  { id: 'cps73', title: 'Parts replaced: record model numbers, quantities, and disposal method', description: 'Document all parts replaced during service', required: true, order: 73 },
  { id: 'cps74', title: 'Settings record: pressure switches, VFD parameters, timer settings, alarm setpoints', description: 'Record all system settings and parameters', required: true, order: 74 },
  { id: 'cps75', title: 'Customer walkthrough: operation, alarms, seasonal care, emergency procedures', description: 'Train customer on system operation and maintenance', required: true, order: 75 },
  { id: 'cps76', title: 'Maintenance schedule provided: filter service, annual checks, disinfection cadence', description: 'Provide customer with maintenance schedule', required: true, order: 76 },
  { id: 'cps77', title: 'Spare parts list: cartridges, seals, fuses, and recommended inventory', description: 'Provide customer with spare parts recommendations', required: true, order: 77 },
  { id: 'cps78', title: 'Next service date scheduled: based on system condition and usage', description: 'Schedule next service appointment', required: true, order: 78 }
];