import { ChecklistTemplate } from '@/types/checklist';

export const checklistTemplates: ChecklistTemplate[] = [
  {
    serviceTypeId: 'well-pump',
    serviceType: 'Installation',
    items: [
      { id: '1', title: 'Lay out trench path from well to building', description: 'Plan and mark the trench route from well to building', required: true, order: 1 },
      { id: '2', title: 'Excavate to required code depth (below frost line); provide proper slope', description: 'Dig trench to proper depth and slope according to local codes', required: true, order: 2 },
      { id: '3', title: 'Verify clearance from other utilities per locate', description: 'Ensure proper clearance from existing utilities as marked by locate services', required: true, order: 3 },
      { id: '4', title: 'Inspect/clean casing; remove debris/obstructions', description: 'Clean well casing and remove any debris or obstructions', required: true, order: 4 },
      { id: '5', title: 'Fit and install pitless adapter for watertight, frost-proof connection; verify alignment', description: 'Install pitless adapter ensuring proper watertight and frost-proof connection', required: true, order: 5 },
      { id: '6', title: 'Bed pipe on sand/gravel; route from pitless to building/pressure tank location', description: 'Properly bed waterline pipe and route from pitless adapter to building', required: true, order: 6 },
      { id: '7', title: 'Install unions and shut-off valve(s) at accessible points for maintenance', description: 'Install unions and shut-off valves at accessible maintenance points', required: true, order: 7 },
      { id: '8', title: 'Make all solvent-welds/compressions per manufacturer; cap open ends', description: 'Complete all pipe connections per manufacturer specs and cap open ends', required: true, order: 8 },
      { id: '9', title: 'Install conduit alongside waterline, maintaining required separation per local code', description: 'Install electrical conduit with proper separation from waterline per code', required: true, order: 9 },
      { id: '10', title: 'Set long-radius sweeps for smooth cable pulls; glue/seal for watertightness', description: 'Install conduit sweeps for smooth cable pulls and seal for watertightness', required: true, order: 10 },
      { id: '11', title: 'Pull in a draw wire (fish tape / pull string) for later cable', description: 'Install draw wire or pull string in conduit for future cable installation', required: true, order: 11 },
      { id: '12', title: 'Bring waterline and conduit above grade at building/control panel; cap/seal to keep debris out', description: 'Bring utilities above grade and cap/seal to prevent debris entry', required: true, order: 12 },
      { id: '13', title: 'Label stubs', description: 'Properly label all utility stub-ups for identification', required: true, order: 13 },
      { id: '14', title: 'Backfill in compacted lifts to prevent settlement', description: 'Backfill trench in compacted lifts to prevent future settlement', required: true, order: 14 },
      { id: '15', title: 'Install detectable warning tape at required depth over utilities', description: 'Install warning tape at proper depth above buried utilities', required: true, order: 15 },
      { id: '16', title: 'Restore grade and maintain drainage away from well head', description: 'Restore proper grade and ensure drainage flows away from well head', required: true, order: 16 },
      { id: '17', title: 'Mount control box on stable, protected surface (wall/pole)', description: 'Mount electrical control box on stable, protected surface', required: true, order: 17 },
      { id: '18', title: 'Install J-boxes/pull boxes where needed; secure all conduits; ensure watertight entries', description: 'Install junction boxes and secure conduits with watertight entries', required: true, order: 18 },
      { id: '19', title: 'Place tank level and accessible', description: 'Position pressure tank level and in accessible location', required: true, order: 19 },
      { id: '20', title: 'Install: pressure gauge, pressure relief valve, and drain valve at tank assembly', description: 'Install required gauges and valves at pressure tank assembly', required: true, order: 20 },
      { id: '21', title: 'Verify service clearances', description: 'Ensure proper service clearances around pressure tank', required: true, order: 21 },
      { id: '22', title: 'Connect trench waterline to tank or building inlet; include union/quick-connects', description: 'Connect waterline to tank or building with unions/quick-connects', required: true, order: 22 },
      { id: '23', title: 'Support piping to avoid mechanical stress on fittings', description: 'Properly support piping to prevent stress on fittings', required: true, order: 23 },
      { id: '24', title: 'Pull submersible-rated cable through conduit to control box; leave service slack', description: 'Install submersible cable with proper service slack', required: true, order: 24 },
      { id: '25', title: 'Continuity check and insulation check of conductors', description: 'Test cable continuity and insulation integrity', required: true, order: 25 },
      { id: '26', title: 'Dress conductors; protect ends', description: 'Properly dress and protect cable conductor ends', required: true, order: 26 },
      { id: '27', title: 'Pressure-test plumbing to verify leak-free rough-in (record PSI and duration)', description: 'Pressure test plumbing system and record test results', required: true, order: 27 },
      { id: '28', title: 'Visually inspect conduit runs and terminations for code compliance', description: 'Inspect all conduit runs and terminations for code compliance', required: true, order: 28 },
      { id: '29', title: 'Assemble pump to drop pipe with proper threaded/compression fittings; torque per spec', description: 'Assemble pump to drop pipe with proper fittings and torque specifications', required: true, order: 29 },
      { id: '30', title: 'Install torque arrestor near pump', description: 'Install torque arrestor device near the pump assembly', required: true, order: 30 },
      { id: '31', title: 'Attach safety rope to pump and plan secure anchor at well cap', description: 'Attach safety rope to pump with secure anchor point at well cap', required: true, order: 31 },
      { id: '32', title: 'Splice motor leads to submersible cable using waterproof splices and heat-shrink; verify strain relief', description: 'Make waterproof electrical connections with proper strain relief', required: true, order: 32 },
      { id: '33', title: 'Secure cable along drop pipe at intervals; leave controlled slack for thermal/motion', description: 'Secure cable to drop pipe with controlled slack for thermal expansion', required: true, order: 33 },
      { id: '34', title: 'Set hoist/winch; maintain vertical control; avoid cable chafe', description: 'Set up hoisting equipment with vertical control and cable protection', required: true, order: 34 },
      { id: '35', title: 'Lower assembly smoothly to design set depth', description: 'Lower pump assembly smoothly to specified design depth', required: true, order: 35 },
      { id: '36', title: 'Engage and secure drop pipe to pitless adapter; confirm positive engagement and seal', description: 'Connect drop pipe to pitless adapter with confirmed engagement and seal', required: true, order: 36 },
      { id: '37', title: 'Connect discharge from pitless to pressure tank inlet/plumbing manifold', description: 'Connect discharge piping from pitless adapter to pressure tank', required: true, order: 37 },
      { id: '38', title: 'Terminate conductors at control box per wiring diagram; verify equipment grounding/bonding', description: 'Terminate electrical conductors per wiring diagram with proper grounding', required: true, order: 38 },
      { id: '39', title: 'Connect control box to power supply; confirm correct voltage/phase; confirm overload protection present', description: 'Connect control box to power with voltage verification and overload protection', required: true, order: 39 },
      { id: '40', title: 'Set/confirm pressure switch cut-in / cut-out', description: 'Set and confirm pressure switch cut-in and cut-out settings', required: true, order: 40 },
      { id: '41', title: 'Start pump; bleed air; check operating pressure and flow meet design', description: 'Start pump, bleed air, and verify operating pressure and flow rates', required: true, order: 41 },
      { id: '42', title: 'Inspect for leaks at all joints/fittings during operation', description: 'Inspect all joints and fittings for leaks during system operation', required: true, order: 42 },
      { id: '43', title: 'Verify stable electrical performance (current/voltage in normal range)', description: 'Verify electrical performance with current and voltage in normal range', required: true, order: 43 },
      { id: '44', title: 'Full system walk-through; confirm compliance and operation', description: 'Complete full system inspection confirming compliance and operation', required: true, order: 44 },
      { id: '45', title: 'Provide operating instructions and maintenance guidelines to client', description: 'Provide client with operating instructions and maintenance guidelines', required: true, order: 45 }
    ]
  }
];
// Import service checklists
// Import service checklists
import { serviceChecklistTemplate, modificationChecklistTemplate, lowYieldServiceChecklistTemplate, lowYieldInstallationChecklistTemplate, cisternPumpServiceChecklistTemplate, cisternPumpModificationChecklistTemplate, otherWaterPumpServiceChecklistTemplate, sewerPumpInstallationChecklistTemplate, sewerPumpServiceChecklistTemplate, sewerPumpDuplexInstallationChecklistTemplate, sewerPumpDuplexServiceChecklistTemplate, electricalInstallationChecklistTemplate, electricalServiceChecklistTemplate, dirtworkInstallationChecklistTemplate, dirtworkServiceChecklistTemplate } from './serviceChecklists';
import { lakePumpInstallationTemplate } from './lakePumpInstallation';
import { lakePumpServiceTemplate } from './lakePumpService';
import { lakePumpModificationTemplate } from './lakePumpModificationComplete';
import { cisternPumpInstallationTemplate } from './cisternPumpInstallation';

// Export combined templates
// Export combined templates
export const allChecklistTemplates = [...checklistTemplates, serviceChecklistTemplate, modificationChecklistTemplate, lowYieldServiceChecklistTemplate, lowYieldInstallationChecklistTemplate, lakePumpInstallationTemplate, lakePumpServiceTemplate, lakePumpModificationTemplate, cisternPumpInstallationTemplate, cisternPumpServiceChecklistTemplate, cisternPumpModificationChecklistTemplate, otherWaterPumpServiceChecklistTemplate, sewerPumpInstallationChecklistTemplate, sewerPumpServiceChecklistTemplate, sewerPumpDuplexInstallationChecklistTemplate, sewerPumpDuplexServiceChecklistTemplate, electricalInstallationChecklistTemplate, electricalServiceChecklistTemplate, dirtworkInstallationChecklistTemplate, dirtworkServiceChecklistTemplate];