import { ChecklistItem } from '@/types/checklist';

export const cisternPumpServicePart2: ChecklistItem[] = [
  // Pump Maintenance
  { id: 'cps29', title: 'External check: housing corrosion, cracks, leaks, cable strain relief, mounting/security', description: 'External pump inspection without removal', required: true, order: 29 },
  { id: 'cps30', title: 'Impeller/diffuser (if pulled): clean debris/sand; inspect for wear/scoring; replace if out of spec', description: 'Impeller and diffuser inspection if pump is pulled', required: false, order: 30 },
  { id: 'cps31', title: 'Shaft/bearing play (if accessible): within tolerance; spin is smooth, no rub', description: 'Shaft and bearing inspection if accessible', required: false, order: 31 },
  { id: 'cps32', title: 'Seals: evidence of leakage at weep holes or oil chamber (if applicable) → replace per OEM', description: 'Seal inspection and replacement as needed', required: true, order: 32 },
  { id: 'cps33', title: 'Re-assemble with new gaskets/O-rings; use potable-safe lubricant where specified', description: 'Reassemble pump with new seals and proper lubricants', required: false, order: 33 },
  { id: 'cps34', title: 'Submersible splices (if opened): re-terminate with waterproof heat-shrink kit; staggered, strain-relieved', description: 'Properly terminate submersible cable splices', required: false, order: 34 },

  // Electrical & Control System
  { id: 'cps35', title: 'Panel housekeeping: dry out condensation, remove debris, verify gasket integrity', description: 'Clean and maintain electrical panel', required: true, order: 35 },
  { id: 'cps36', title: 'Tighten/torque terminals to spec (document values if policy requires)', description: 'Tighten electrical connections to specification', required: true, order: 36 },
  { id: 'cps37', title: 'Grounding/bonding: continuity verified; bonding jumpers across dielectric unions present', description: 'Verify grounding and bonding system integrity', required: true, order: 37 },
  { id: 'cps38', title: 'Motor checks (if policy permits): insulation test ____ MΩ @ ____ V; compare with prior records', description: 'Perform motor insulation testing if permitted', required: false, order: 38 },
  { id: 'cps39', title: 'Pressure switch: inspect tubing, diaphragm; clean contacts; prelim set ____ / ____ psi', description: 'Pressure switch maintenance and preliminary settings', required: true, order: 39 },
  { id: 'cps40', title: 'VFD (if used): review alarms/history; fan/filter clean; parameters backed up', description: 'VFD maintenance and parameter backup', required: false, order: 40 },
  { id: 'cps41', title: 'Timers/relays: test manual/auto, confirm time schedules', description: 'Test timer and relay operations', required: true, order: 41 },
  { id: 'cps42', title: 'Level devices: float(s) elevations verified; transducer readings plausible at empty/full', description: 'Verify level sensing device calibration', required: true, order: 42 },
  { id: 'cps43', title: 'Alarms: low-level, high-level, leak, door/tamper — function test and log', description: 'Test all alarm functions and document results', required: true, order: 43 },
  { id: 'cps44', title: 'Cable glands: IP rating maintained; drip loops present; no jacket nicks', description: 'Inspect cable glands and protection', required: true, order: 44 },
  { id: 'cps45', title: 'Hold Point C — Electrical QC: All connections secure, readings acceptable, controls responsive, labels legible', description: 'Electrical quality control checkpoint', required: true, order: 45 },

  // Plumbing, Valves, and Pressure Tank
  { id: 'cps46', title: 'Inspect pipes/fittings for leaks, cracks, misalignment; add supports where needed', description: 'Comprehensive plumbing system inspection', required: true, order: 46 },
  { id: 'cps47', title: 'Exercise & test: shutoff valves, check valves, backflow preventers (permitted checks)', description: 'Test valve operations and backflow prevention', required: true, order: 47 },
  { id: 'cps48', title: 'Gauge accuracy: compare system gauge to calibrated test gauge; replace if >5% error', description: 'Verify pressure gauge accuracy', required: true, order: 48 },
  { id: 'cps49', title: 'Pressure tank (if present): precharge ____ psi (cut-in – 2); tap test for waterlogging', description: 'Pressure tank maintenance and testing', required: false, order: 49 },
  { id: 'cps50', title: 'Filters/strainers: clean or replace cartridges; note differential pressure before/after', description: 'Filter maintenance and differential pressure recording', required: true, order: 50 },
  { id: 'cps51', title: 'Unions/couplings: tighten to stop weeps; replace gaskets if persistent leaks', description: 'Tighten connections and replace gaskets as needed', required: true, order: 51 },
  { id: 'cps52', title: 'Thermal expansion/freeze protection: insulation intact, heat trace functional (if installed)', description: 'Verify thermal protection systems', required: true, order: 52 }
];