import { ChecklistTemplate } from '@/types/checklist';

export const cisternPumpInstallationTemplate: ChecklistTemplate = {
  id: 'cistern-pump-install',
  serviceTypeId: 'cistern-pump',
  serviceType: 'Installation',
  name: 'Cistern Pump Installation',
  description: 'Complete installation checklist for cistern pump systems',
  items: [
    { id: '1', title: 'Utility locates verified; dig box/shoring as required', description: 'A) Excavation & Subgrade', required: true, order: 1 },
    { id: '2', title: 'Excavate to plan; over-excavate for base', description: 'A) Excavation & Subgrade', required: true, order: 2 },
    { id: '3', title: 'Base: Sand/Pea gravel/Flowable fill | Thickness | Laser-level', description: 'A) Excavation & Subgrade', required: true, order: 3 },
    { id: '4', title: 'Confirm groundwater condition; plan anti-floatation if needed', description: 'A) Excavation & Subgrade', required: true, order: 4 },
    { id: '5', title: 'Inspect tank for cracks, gouges, inlet/outlet/boss integrity; verify gaskets & risers', description: 'B) Tank Receipt, Inspection, & Prep', required: true, order: 5 },
    { id: '6', title: 'Install risers/manways; confirm O-rings/lids watertight; fit screened vent & overflow', description: 'B) Tank Receipt, Inspection, & Prep', required: true, order: 6 },
    { id: '7', title: 'Fit inlet, outlet, drain, sample tap, level sensor ports per submittals', description: 'B) Tank Receipt, Inspection, & Prep', required: true, order: 7 },
    { id: '8', title: 'Rig with approved lift points; set on base; verify level', description: 'C) Tank Set & Alignment', required: true, order: 8 },
    { id: '9', title: 'Orientation: inlet/outlet directions correct; risers at grade plan', description: 'C) Tank Set & Alignment', required: true, order: 9 },
    { id: '10', title: 'Anti-floatation: Deadman anchors/Strap system/Ballast slab', description: 'D) Anti-Floatation', required: true, order: 10 },
    { id: '11', title: 'Partial fill tank with clean water to 1/3–1/2 before backfill', description: 'E) Backfill & Protection', required: true, order: 11 },
    { id: '12', title: 'Backfill in 6–12" lifts; compact to spec; protect fittings/risers', description: 'E) Backfill & Protection', required: true, order: 12 },
    { id: '13', title: 'Install suction assembly: foot valve, intake screen, anti-vortex plate', description: 'LEVEL 1 — Plumbing & Pump Setup', required: true, order: 13 },
    { id: '14', title: 'Install discharge/manifold at tank wall/utility room', description: 'LEVEL 1 — Plumbing & Pump Setup', required: true, order: 14 },
    { id: '15', title: 'Install pressure tank with isolation valve, drain, gauge, relief valve', description: 'LEVEL 1 — Plumbing & Pump Setup', required: true, order: 15 },
    { id: '16', title: 'Leak & pressure test plumbing system', description: 'LEVEL 1 — Plumbing & Pump Setup', required: true, order: 16 },
    { id: '17', title: 'Install dedicated circuit sized for motor FLA & starting method', description: 'LEVEL 2 — Electrical & Automation', required: true, order: 17 },
    { id: '18', title: 'Install control panel with proper clearances and labeling', description: 'LEVEL 2 — Electrical & Automation', required: true, order: 18 },
    { id: '19', title: 'Install level control: floats/pressure transducer/ultrasonic', description: 'LEVEL 2 — Electrical & Automation', required: true, order: 19 },
    { id: '20', title: 'Install motor & cable with submersible splice kit', description: 'LEVEL 2 — Electrical & Automation', required: true, order: 20 },
    
    // LEVEL 3 — Commissioning & Finalization
    { id: '21', title: 'Cistern cleaned (if new) and disinfected per SOP; contact time met', description: 'A) Pre-Start & Disinfection', required: true, order: 21 },
    { id: '22', title: 'Open sample/flush port; confirm clear water; close all drains', description: 'A) Pre-Start & Disinfection', required: true, order: 22 },
    { id: '23', title: 'Remove LOTO; power on controls; prime per pump type', description: 'B) Controlled Start-Up', required: true, order: 23 },
    { id: '24', title: 'Start pump; bleed air; inspect for leaks, vibration, noise', description: 'B) Controlled Start-Up', required: true, order: 24 },
    { id: '25', title: 'Record initial readings: Flow/pressure/voltage/current', description: 'B) Controlled Start-Up', required: true, order: 25 },
    { id: '26', title: 'Pressure switch final cut-in/cut-out; set tank precharge', description: 'C) Calibration', required: true, order: 26 },
    { id: '27', title: 'VFD: confirm target pressure; tune PID; verify sleep/wake', description: 'C) Calibration', required: true, order: 27 },
    { id: '28', title: 'Float/level logic: LOW stops pump; HIGH alarm triggers', description: 'C) Calibration', required: true, order: 28 },
    { id: '29', title: 'Protection: dry-run/under-load proven; restart delay set', description: 'C) Calibration', required: true, order: 29 },
    { id: '30', title: 'Run at multiple demand points; verify flows/pressures meet design', description: 'D) Functional Tests', required: true, order: 30 },
    { id: '31', title: 'Cycle test (≥3 cycles); record run/rest time; no rapid cycling', description: 'D) Functional Tests', required: true, order: 31 },
    { id: '32', title: 'Filter differential pressure check; confirm bypass/backwash', description: 'D) Functional Tests', required: true, order: 32 },
    { id: '33', title: 'Check backflow/air gap compliance on fill/overflow', description: 'D) Functional Tests', required: true, order: 33 },
    { id: '34', title: 'Penetrations sealed; risers at grade; lids secured', description: 'E) Final Inspection & Site Finish', required: true, order: 34 },
    { id: '35', title: 'Frost/UV protection installed; signage/labels applied', description: 'E) Final Inspection & Site Finish', required: true, order: 35 },
    { id: '36', title: 'Area restored; debris removed; photo set completed', description: 'E) Final Inspection & Site Finish', required: true, order: 36 },
    
    // Documentation & Handover
    { id: '37', title: 'Site plan (cistern location, depths, penetrations)', description: 'As-Built Package', required: true, order: 37 },
    { id: '38', title: 'P&ID / manifold diagram with valve numbers & service unions', description: 'As-Built Package', required: true, order: 38 },
    { id: '39', title: 'Panel schedules, wiring diagram, VFD & switch settings', description: 'As-Built Package', required: true, order: 39 },
    { id: '40', title: 'Commissioning log (flows, pressures, volts/amps, tank precharge)', description: 'As-Built Package', required: true, order: 40 },
    { id: '41', title: 'Maintenance schedule (screen/filter service, annual checks)', description: 'As-Built Package', required: true, order: 41 },
    { id: '42', title: 'Customer walkthrough of operation, alarms, and seasonal care', description: 'Training & Sign-Offs', required: true, order: 42 },
    { id: '43', title: 'Spare parts list provided (cartridges, seals)', description: 'Training & Sign-Offs', required: true, order: 43 }
  ]
};