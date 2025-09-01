import { ChecklistTemplate } from '@/types/checklist';
import { lowYieldServiceExtendedItems } from './lowYieldServiceExtended';
import { lowYieldInstallationChecklist } from './lowYieldInstallation';
import { lowYieldInstallationPart2 } from './lowYieldInstallationPart2';
import { lowYieldInstallationPart3 } from './lowYieldInstallationPart3';
import { lowYieldInstallationPart4 } from './lowYieldInstallationPart4';
import { cisternPumpServiceTemplate } from './cisternPumpService';
import { cisternPumpServicePart2 } from './cisternPumpServicePart2';
import { cisternPumpServicePart3 } from './cisternPumpServicePart3';
import { cisternPumpModificationPart1 } from './cisternPumpModification';
import { cisternPumpModificationPart2 } from './cisternPumpModificationPart2';
import { cisternPumpModificationPart3 } from './cisternPumpModificationPart3';
import { cisternPumpModificationPart4 } from './cisternPumpModificationPart4';
import { cisternPumpModificationComplete } from './cisternPumpModificationComplete';
import { otherWaterPumpServicePart1 } from './otherWaterPumpService';
import { otherWaterPumpServicePart2 } from './otherWaterPumpServicePart2';
import { otherWaterPumpServicePart3 } from './otherWaterPumpServicePart3';
import { otherWaterPumpServicePart4 } from './otherWaterPumpServicePart4';
import { otherWaterPumpServiceComplete } from './otherWaterPumpServiceComplete';
import { sewerPumpInstallationPart1 } from './sewerPumpInstallation';
import { sewerPumpInstallationPart2 } from './sewerPumpInstallationPart2';
import { sewerPumpInstallationPart3 } from './sewerPumpInstallationPart3';
import { sewerPumpInstallationComplete } from './sewerPumpInstallationComplete';
import { sewerPumpServicePart1 } from './sewerPumpService';
import { sewerPumpServicePart2 } from './sewerPumpServicePart2';
import { sewerPumpServicePart3 } from './sewerPumpServicePart3';
import { sewerPumpServicePart4 } from './sewerPumpServiceComplete';
import { sewerPumpDuplexInstallationPart1 } from './sewerPumpDuplexInstallation';
import { sewerPumpDuplexInstallationPart2 } from './sewerPumpDuplexInstallationPart2';
import { sewerPumpDuplexInstallationPart3 } from './sewerPumpDuplexInstallationPart3';
import { sewerPumpDuplexInstallationComplete } from './sewerPumpDuplexInstallationComplete';
import { sewerPumpDuplexServiceItems } from './sewerPumpDuplexService';
import { sewerPumpDuplexServicePart2Items } from './sewerPumpDuplexServicePart2';
import { sewerPumpDuplexServicePart3Items } from './sewerPumpDuplexServicePart3';
import { sewerPumpDuplexServiceCompleteItems } from './sewerPumpDuplexServiceComplete';
import { sewerPumpDuplexServicePart4Items } from './sewerPumpDuplexServicePart4';
import { electricalInstallationItems } from './electricalInstallation';
import { electricalInstallationPart2Items } from './electricalInstallationPart2';
import { electricalInstallationPart3Items } from './electricalInstallationPart3';
import { electricalInstallationCompleteItems } from './electricalInstallationComplete';
import { electricalInstallationServiceItems } from './electricalInstallationService';
import { electricalInstallationServicePart2Items } from './electricalInstallationServicePart2';
import { electricalInstallationServicePart3Items } from './electricalInstallationServicePart3';
import { electricalInstallationServicePart4Items } from './electricalInstallationServicePart4';
import { electricalServiceComprehensiveItems } from './electricalServiceComprehensive';
import { dirtworkInstallationItems } from './dirtworkInstallation';
import { dirtworkInstallationPart2Items } from './dirtworkInstallationPart2';
import { dirtworkInstallationPart3Items } from './dirtworkInstallationPart3';
import { dirtworkInstallationPart4Items } from './dirtworkInstallationPart4';
import { dirtworkServiceItems } from './dirtworkService';
import { dirtworkServicePart2Items } from './dirtworkServicePart2';
import { dirtworkServicePart3Items } from './dirtworkServicePart3';
import { dirtworkServicePart4Items } from './dirtworkServicePart4';
import { dirtworkServicePart5Items } from './dirtworkServicePart5';
export const serviceChecklistTemplate: ChecklistTemplate = {
  serviceTypeId: 'well-pump',
  serviceType: 'Service',
  items: [
    { id: 's1', title: 'Work Order #:', description: 'Record work order number for tracking', required: true, order: 1 },
    { id: 's2', title: 'System Type (submersible / jet / booster):', description: 'Identify and record system type', required: true, order: 2 },
    { id: 's3', title: 'Pump model / HP / V / Phase:', description: 'Record pump specifications', required: true, order: 3 },
    { id: 's4', title: 'Pressure settings (current cut-in / cut-out):', description: 'Document current pressure switch settings', required: true, order: 4 },
    { id: 's5', title: 'Reported symptoms since last service (customer notes):', description: 'Document customer-reported issues', required: true, order: 5 },
    { id: 's6', title: 'With system isolated and safe, check mounting hardware, seals, and visible joints for looseness or leakage', description: 'Visual inspection of pump mounting and connections', required: true, order: 6 },
    { id: 's7', title: 'If safe to run briefly, observe startup and running for abnormal noise, vibration, slow response, or heat rise. Record observations', description: 'Operational assessment of pump performance', required: true, order: 7 },
    { id: 's8', title: 'Inspect impeller for damage/debris/wear; verify shaft spins freely without excessive play', description: 'Physical inspection of pump impeller and shaft', required: false, order: 8 },
    { id: 's9', title: 'Inspect motor leads/splices, insulation integrity, and bonding/grounding before reassembly', description: 'Electrical inspection if pump is pulled', required: false, order: 9 },
    { id: 's10', title: 'Check air charge with power off and pressure drained; set to 2 PSI below cut-in. Record measured value and setpoint', description: 'Pressure tank air charge maintenance', required: true, order: 10 },
    { id: 's11', title: 'Inspect tank exterior for rust, dents, or damage; tap test for waterlogging where applicable', description: 'Physical inspection of pressure tank condition', required: true, order: 11 },
    { id: 's12', title: 'Verify bladder/diaphragm condition (if applicable)', description: 'Check internal tank components', required: true, order: 12 },
    { id: 's13', title: 'Trace discharge and suction lines; check all visible pipes for leaks, cracks, corrosion; tighten/repair as needed', description: 'Comprehensive plumbing system inspection', required: true, order: 13 },
    { id: 's14', title: 'Exercise and test check/shutoff/gate valves; clean or replace if sticking or leaking', description: 'Valve operation and maintenance', required: true, order: 14 },
    { id: 's15', title: 'Confirm there are no restrictions in flow path (screens, strainers, filters, tees)', description: 'Flow path obstruction check', required: true, order: 15 },
    { id: 's16', title: 'Open control panel: remove dust/debris; look for discoloration/overheat marks, loose terminals, or damaged components', description: 'Electrical control panel inspection and cleaning', required: true, order: 16 },
    { id: 's17', title: 'Pressure switch: clean contacts, confirm responsiveness; adjust cut-in / cut-out if needed (record settings)', description: 'Pressure switch maintenance and calibration', required: true, order: 17 },
    { id: 's18', title: 'Verify alarms & sensors (low/high pressure, level, flow, transducers) operate and are calibrated', description: 'Safety system and sensor verification', required: true, order: 18 },
    { id: 's19', title: 'Remove debris/sediment from pump housing/impeller, well casing/cover, and intake/plumbing screens or filters', description: 'System cleaning and debris removal', required: true, order: 19 },
    { id: 's20', title: 'Lubricate bearings/seals/moving parts per manufacturer; avoid over-lubrication', description: 'Lubrication maintenance per specifications', required: true, order: 20 },
    { id: 's21', title: 'Flow & pressure: measure discharge pressure and system flow; compare to design/previous service records', description: 'Performance measurement and comparison', required: true, order: 21 },
    { id: 's22', title: 'Cycling behavior: verify accurate cut-in / cut-out; ensure minimum run time ≥ 1 minute (≥ 2 minutes for larger motors) to reduce heat and short-cycling', description: 'Pump cycling performance verification', required: true, order: 22 },
    { id: 's23', title: 'Electrical load: record voltage and amperage under load; confirm within motor nameplate limits', description: 'Electrical performance measurement', required: true, order: 23 },
    { id: 's24', title: 'Alarms/sensors live check: trigger and confirm annunciation and recovery', description: 'Live testing of safety systems', required: true, order: 24 },
    { id: 's25', title: 'Flow: ____ gpm | Steady pressure: ____ psi | Cut-in/Cut-out: / psi', description: 'Record measured flow and pressure values', required: true, order: 25 },
    { id: 's26', title: 'Voltage (run): ____ V | Current (run): ____ A (per leg if multi-phase)', description: 'Record electrical measurements', required: true, order: 26 },
    { id: 's27', title: 'Cycle time: ____ sec run / ____ sec rest (note short-cycle if present)', description: 'Record pump cycle timing', required: true, order: 27 },
    { id: 's28', title: 'Recheck system integrity after work: securement, alignment, leak-free, no abnormal vibration', description: 'Final system integrity verification', required: true, order: 28 },
    { id: 's29', title: 'Document all tasks performed, measurements, adjustments; list any recommended repairs/upgrades', description: 'Complete service documentation', required: true, order: 29 },
    { id: 's30', title: 'Provide a clear service report and educate the customer on findings, settings, and routine care/next visit timing', description: 'Customer communication and education', required: true, order: 30 },
    { id: 's31', title: 'Restore power and start gradually; watch first cycles closely', description: 'Controlled system restart', required: true, order: 31 },
    { id: 's32', title: 'Verify pressure switch, alarms, and controls function as intended on live cycles', description: 'Live system verification', required: true, order: 32 },
    { id: 's33', title: 'Allow a few full cycles under normal demand; confirm stable performance', description: 'Extended operation verification', required: true, order: 33 },
    { id: 's34', title: 'Pressure gauge; multimeter; pipe wrenches/pliers; lubricants/sealants; cleaning brushes/rags; common replacement parts (valves, seals, filters); OEM manuals', description: 'Tool and parts inventory check', required: true, order: 34 },
    { id: 's35', title: 'Notes on defects corrected today:', description: 'Document repairs completed during service', required: true, order: 35 },
    { id: 's36', title: 'Recommended follow-ups (priority / timeline):', description: 'Document recommended future actions', required: true, order: 36 },
    { id: 's37', title: 'Photos captured (before/after, panel, tank gauge, meter readings):', description: 'Document photographic evidence', required: true, order: 37 }
  ]
};

export const modificationChecklistTemplate: ChecklistTemplate = {
  serviceTypeId: 'well-pump',
  serviceType: 'Modification/Alteration',
  items: [
    { id: 'm1', title: 'Customer / Site / WO #:', description: 'Record customer information and work order number', required: true, order: 1 },
    { id: 'm2', title: 'Existing system type: ☐ Submersible ☐ Jet/Booster ☐ Other', description: 'Identify current system configuration', required: true, order: 2 },
    { id: 'm3', title: 'Stated problem / requested change:', description: 'Document customer requirements and issues', required: true, order: 3 },
    { id: 'm4', title: 'Defined scope of work (SOW) and change order signed:', description: 'Confirm approved work scope and authorization', required: true, order: 4 },
    { id: 'm5', title: 'Cutover window agreed (start/end) & rollback plan defined:', description: 'Establish work timeline and contingency plan', required: true, order: 5 },
    { id: 'm6', title: 'Permits/inspections required: ☐ Trench ☐ Electrical ☐ Final', description: 'Verify required permits and inspections', required: true, order: 6 },
    { id: 'm7', title: 'Utilities located & cleared (ticket # / time):', description: 'Confirm utility locates and clearances', required: true, order: 7 },
    { id: 'm8', title: 'Crew / roles / special tools reserved', description: 'Verify crew assignments and equipment availability', required: true, order: 8 },
    { id: 'm9', title: 'Tailboard safety talk; PPE on; LOTO plan reviewed', description: 'Complete safety briefing and lockout procedures', required: true, order: 9 },
    { id: 'm10', title: 'Verify wellhead sanitary protection (keep caps/covers clean; no open fittings)', description: 'Maintain sanitary conditions at wellhead', required: true, order: 10 },
    { id: 'm11', title: 'Backflow/cross-connection safeguards in place (bypass or isolation valves)', description: 'Ensure water quality protection measures', required: true, order: 11 },
    { id: 'm12', title: 'Electrical LOTO: verify de-energized before opening any panels or pulling parts', description: 'Confirm electrical lockout and safety', required: true, order: 12 },
    { id: 'm13', title: 'Confined/overhead lift plan if pulling pump or heavy tanks', description: 'Safety planning for heavy lifting operations', required: false, order: 13 },
    { id: 'm14', title: 'Visual: leaks, corrosion, damaged fittings, chafe points, loose supports', description: 'Comprehensive visual inspection of existing system', required: true, order: 14 },
    { id: 'm15', title: 'Static pressure ___ psi | Cut-in/Cut-out / psi', description: 'Record current pressure readings', required: true, order: 15 },
    { id: 'm16', title: 'Steady flow at hose bib ___ gpm @ ___ psi (note restriction points)', description: 'Measure and record flow performance', required: true, order: 16 },
    { id: 'm17', title: 'Voltage (run) ___ V | Current (run) ___ A (per leg if multi-phase)', description: 'Record electrical measurements', required: true, order: 17 },
    { id: 'm18', title: 'Cycle time ___ sec run / ___ sec rest (note short-cycling)', description: 'Document pump cycling behavior', required: true, order: 18 },
    { id: 'm19', title: 'Tank precharge (power off, drain pressure): ___ psi (should be ~2 psi below cut-in)', description: 'Check and record tank precharge pressure', required: true, order: 19 },
    { id: 'm20', title: 'Photos of existing layout, wiring, labels, setpoints, equipment nameplates', description: 'Document existing system configuration', required: true, order: 20 },
    { id: 'm21', title: 'Verify component models: pump/motor HP & V/phase, control box/VFD, tank size', description: 'Record all equipment specifications', required: true, order: 21 },
    { id: 'm22', title: 'Recalculate TDH if pipe lengths/elevations/valves are changing; confirm pump fit', description: 'Engineering verification of pump sizing', required: true, order: 22 },
    { id: 'm23', title: 'Wire sizing/voltage drop verified for any extended runs or HP changes', description: 'Electrical system capacity verification', required: true, order: 23 },
    { id: 'm24', title: 'Tank sizing/drawdown adequate for revised cycling targets (≥1 min run typical)', description: 'Verify tank capacity for system modifications', required: true, order: 24 },
    { id: 'm25', title: 'Control strategy chosen: ☐ Pressure switch ☐ CSV ☐ VFD ☐ Other', description: 'Select appropriate control strategy for modifications', required: true, order: 25 },
    { id: 'm26', title: 'Materials staged & inspected (compatible, potable-rated where required)', description: 'Verify all materials are staged and meet specifications', required: true, order: 26 },
    { id: 'm27', title: 'Sanitary kit ready: disinfectant, clean caps, sterile plugs, food-grade lube (if used)', description: 'Prepare sanitary protection materials', required: true, order: 27 },
    { id: 'm28', title: 'Notify customer; confirm downtime window; set up temp water if promised', description: 'Customer notification and temporary water setup', required: true, order: 28 },
    { id: 'm29', title: 'Power OFF & LOTO tagged at source', description: 'Electrical lockout and tagging procedures', required: true, order: 29 },
    { id: 'm30', title: 'Close/lock isolation valves; drain system pressure safely', description: 'System isolation and pressure relief', required: true, order: 30 },
    { id: 'm31', title: 'Protect floors/walls; set catch pans; cap/plug open lines immediately', description: 'Work area protection and contamination prevention', required: true, order: 31 },
    { id: 'm32', title: 'Remove/relocate old components (valves, fittings, tank, switch, VFD/CSV, piping)', description: 'Removal of existing components as needed', required: false, order: 32 },
    { id: 'm33', title: 'If pulling pump: protect cable/splices; maintain sanitary practices; secure drop pipe', description: 'Pump removal procedures if required', required: false, order: 33 },
    { id: 'm34', title: 'Dispose of parts per policy; retain customer-owned components if requested', description: 'Proper disposal and component retention', required: true, order: 34 },
    { id: 'm35', title: 'Lay out revised routing; maintain slopes/clearances; avoid chafe and trap legs', description: 'Plan and implement revised plumbing routing', required: true, order: 35 },
    { id: 'm36', title: 'Install/relocate: unions, check valve(s), isolation & drain valves, PRV, gauges', description: 'Install new plumbing components', required: true, order: 36 },
    { id: 'm37', title: 'Set new/relocated pressure tank on level base; provide service clearances', description: 'Pressure tank installation with proper clearances', required: true, order: 37 },
    { id: 'm38', title: 'Make solvent/compression/press connections per spec; support all runs', description: 'Complete plumbing connections per specifications', required: true, order: 38 },
    { id: 'm39', title: 'Pressure test rough-in: ___ psi for ___ min — ☐ Pass ☐ Fail (note fixes)', description: 'Pressure test new plumbing installation', required: true, order: 39 },
    { id: 'm40', title: 'Conduit runs installed/relocated; required separation from water lines maintained', description: 'Electrical conduit installation with proper separation', required: true, order: 40 },
    { id: 'm41', title: 'Pull submersible-rated cable; dress and protect; verify insulation integrity', description: 'Cable installation with integrity verification', required: true, order: 41 },
    { id: 'm42', title: 'Mount/relocate control box/VFD/CSV; provide drip loops and strain relief', description: 'Control equipment mounting with proper protection', required: true, order: 42 },
    { id: 'm43', title: 'Terminate grounding/bonding conductors to spec; verify continuity', description: 'Grounding and bonding installation verification', required: true, order: 43 },
    { id: 'm44', title: 'Panel housekeeping: tighten lugs, replace heat-stressed components if found', description: 'Electrical panel maintenance and component replacement', required: true, order: 44 },
    { id: 'm45', title: 'Pump set depth changed to ___ ft (document); safety rope & torque arrestor set', description: 'Pump depth adjustment with safety measures', required: false, order: 45 },
    { id: 'm46', title: 'Pitless adapter inspected, sealed, and re-engaged; verify watertight', description: 'Pitless adapter maintenance and verification', required: true, order: 46 },
    { id: 'm47', title: 'Pressure switch set preliminary cut-in/cut-out / psi (final in commissioning)', description: 'Preliminary pressure switch settings', required: true, order: 47 },
    { id: 'm48', title: 'CSV set to ___ psi (if used) per target flow and tank size', description: 'Constant speed valve setup if applicable', required: false, order: 48 },
    { id: 'm49', title: 'VFD parameters (if used): motor data entered (HP, V/phase, FLA); min/max Hz; accel/decel; sleep/wake; pressure PID target ___ psi; protection limits set', description: 'Variable frequency drive programming', required: false, order: 49 },
    { id: 'm50', title: 'Complete plumbing tie-ins; verify union access and drain points', description: 'Final plumbing connections and access verification', required: true, order: 50 },
    { id: 'm51', title: 'Complete electrical terminations; torque to spec; covers installed', description: 'Final electrical connections and cover installation', required: true, order: 51 },
    { id: 'm52', title: 'Disinfect any components exposed to atmosphere (per local protocol)', description: 'System disinfection per local requirements', required: true, order: 52 },
    { id: 'm53', title: 'Slowly re-pressurize; bleed air at high points/fixtures; monitor for leaks', description: 'System refill and air bleeding procedures', required: true, order: 53 },
    { id: 'm54', title: 'Correct any weeps/drips; re-torque and re-test. Leak-free: ☐ Yes', description: 'Leak correction and final verification', required: true, order: 54 },
    { id: 'm55', title: 'Power ON; observe first start: abnormal noise/vibration/over-amp? ☐ No', description: 'Initial system startup and observation', required: true, order: 55 },
    { id: 'm56', title: 'Set final pressure targets: Pressure switch cut-in/cut-out / psi (2 psi precharge offset verified)', description: 'Final pressure switch calibration', required: true, order: 56 },
    { id: 'm57', title: 'CSV or VFD pressure setpoint ___ psi; min flow protections validated', description: 'Final control system calibration and protection validation', required: false, order: 57 },
    { id: 'm58', title: 'Record electrical under load: ___ V | ___ A (per leg) | Performance meets design: ☐ Yes', description: 'Final electrical measurements and performance verification', required: true, order: 58 }
  ]
};

export const lowYieldServiceChecklistTemplate: ChecklistTemplate = {
  serviceTypeId: 'well-pump',
  serviceType: 'Low Yield Well Service',
  items: [
    { id: 'lys1', title: 'Well ID: depth ___ ft | casing Ø ___ | last service date:', description: 'Record well identification and basic parameters', required: true, order: 1 },
    { id: 'lys2', title: 'Pump model / HP / V / phase:', description: 'Record pump specifications', required: true, order: 2 },
    { id: 'lys3', title: 'Controls present: ☐ Pressure switch ☐ CSV ☐ VFD ☐ Pumptec ☐ PumpSaver ☐ Coyote ☐ Other', description: 'Identify all control devices present', required: true, order: 3 },
    { id: 'lys4', title: 'Reported symptoms (run-dry, nuisance trips, short-cycling, air, sand, low pressure, etc.)', description: 'Document customer-reported issues', required: true, order: 4 },
    { id: 'lys5', title: 'Lockout/Tagout at source; verify de-energized before opening panels', description: 'Safety lockout procedures', required: true, order: 5 },
    { id: 'lys6', title: 'PPE on; keep wellhead sanitary (no uncapped openings; clean tools)', description: 'Personal protective equipment and sanitary practices', required: true, order: 6 },
    { id: 'lys7', title: 'Protect surfaces; place catch pans; have potable-system disinfectant ready', description: 'Work area protection and contamination prevention', required: true, order: 7 },
    { id: 'lys8', title: 'Visuals: leaks, corrosion, chafe points on drop cable/conduit, loose supports', description: 'Visual inspection of system components', required: true, order: 8 },
    { id: 'lys9', title: 'Static water level (SWL) with pump off: ____ ft btoc (record method & time)', description: 'Measure static water level before pumping begins', required: true, order: 9 },
    { id: 'lys10', title: 'Tank precharge with system at zero pressure: ___ psi (target ≈ 2 psi below cut-in)', description: 'Check and record tank precharge pressure', required: true, order: 10 },
    { id: 'lys11', title: 'Electrical at idle (line): ___ V (record L-L/L-G if applicable)', description: 'Record electrical measurements at idle', required: true, order: 11 },
    { id: 'lys12', title: 'Panel photos: nameplates, device LEDs, setpoints', description: 'Document panel configuration with photos', required: true, order: 12 },
    { id: 'lys13', title: 'Set controlled discharge (hose bib/test tap) to target rate (0.5–3 gpm typical)', description: 'Establish controlled test flow rate', required: true, order: 13 },
    { id: 'lys14', title: 'Start pump and log drawdown: depth to water at 1, 2, 5, 10, 20, 30 min', description: 'Conduct drawdown test with time intervals', required: true, order: 14 },
    { id: 'lys15', title: 'If well nears pump intake level or protection trips, stop the test', description: 'Safety protocol for drawdown testing', required: true, order: 15 },
    { id: 'lys16', title: 'Recovery test: measure water-level rebound at 1, 2, 5, 10, 20, 30 min', description: 'Conduct recovery test after pump shutdown', required: true, order: 16 },
    { id: 'lys17', title: 'Record sustainable flow (gpm) that avoids excessive drawdown', description: 'Determine sustainable pumping rate', required: true, order: 17 },
    { id: 'lys18', title: 'Pressure tank & piping: tighten/repair leaks; exercise isolation/check valves', description: 'General service checks on tank and piping', required: true, order: 18 },
    { id: 'lys19', title: 'Pressure switch: inspect contacts; record current cut-in/cut-out ___ / ___ psi', description: 'Pressure switch inspection and settings', required: true, order: 19 },
    { id: 'lys20', title: 'Electrical under load: Voltage ___ V | Current ___ A (per leg)', description: 'Record electrical measurements under load', required: true, order: 20 },
    { id: 'lys21', title: 'Franklin Pumptec: Note indicator lights & last condition (underload vs overload)', description: 'Pumptec device status inspection', required: false, order: 21 },
    { id: 'lys22', title: 'Pumptec-Plus restart delay: set timer for well recovery (1, 2, 4, 16, 32, 64 min)', description: 'Configure Pumptec restart delay timing', required: false, order: 22 },
    { id: 'lys23', title: 'QD Pumptec calibration: verify/adjust sensitivity for underload trip (~25%)', description: 'Calibrate Pumptec sensitivity settings', required: false, order: 23 },
    { id: 'lys24', title: 'Confirm Pumptec sized for Franklin 2- & 3-wire motors (1/3–1.5 HP typical)', description: 'Verify Pumptec compatibility with motor', required: false, order: 24 },
    ...lowYieldServiceExtendedItems
  ]
};

// Combine all Low Yield Installation checklist parts
const allLowYieldInstallationItems = [
  ...(lowYieldInstallationChecklist || []).map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: true,
    order: index + 1
  })),
  ...(lowYieldInstallationPart2 || []).map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: true,
    order: index + 13
  })),
  ...(lowYieldInstallationPart3 || []).map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: true,
    order: index + 25
  })),
  ...(lowYieldInstallationPart4 || []).map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: true,
    order: index + 37
  }))
];

export const lowYieldInstallationChecklistTemplate: ChecklistTemplate = {
  serviceTypeId: 'well-pump',
  serviceType: 'Low Yield Well Installation',
  items: allLowYieldInstallationItems
};

// Combine all Cistern Pump Service checklist parts
const allCisternPumpServiceItems = [
  ...cisternPumpServiceTemplate.items,
  ...cisternPumpServicePart2,
  ...cisternPumpServicePart3
];

export const cisternPumpServiceChecklistTemplate: ChecklistTemplate = {
  serviceTypeId: 'cistern-pump',
  serviceType: 'Service',
  items: allCisternPumpServiceItems
};

// Combine all Cistern Pump Modification checklist parts
const allCisternPumpModificationItems = [
  ...cisternPumpModificationPart1.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: true,
    order: index + 1
  })),
  ...cisternPumpModificationPart2.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: true,
    order: index + 11
  })),
  ...cisternPumpModificationPart3.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: true,
    order: index + 21
  })),
  ...cisternPumpModificationPart4.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: true,
    order: index + 31
  })),
  ...cisternPumpModificationComplete.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: true,
    order: index + 41
  }))
];

export const cisternPumpModificationChecklistTemplate: ChecklistTemplate = {
  serviceTypeId: 'cistern-pump',
  serviceType: 'Modification/Alteration',
  items: allCisternPumpModificationItems
};

// Combine all Other Water Pump Service checklist parts
const allOtherWaterPumpServiceItems = [
  ...otherWaterPumpServicePart1.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: item.isRequired || true,
    order: index + 1
  })),
  ...otherWaterPumpServicePart2.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: item.isRequired || true,
    order: index + 11
  })),
  ...otherWaterPumpServicePart3.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: item.isRequired || true,
    order: index + 21
  })),
  ...otherWaterPumpServicePart4.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: item.isRequired || true,
    order: index + 31
  })),
  ...otherWaterPumpServiceComplete.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: item.isRequired || false,
    order: index + 41
  }))
];

export const otherWaterPumpServiceChecklistTemplate: ChecklistTemplate = {
  serviceTypeId: 'other-water-pump',
  serviceType: 'Service',
  items: allOtherWaterPumpServiceItems
};

// Combine all Sewer Pump Installation checklist parts
const allSewerPumpInstallationItems = [
  ...sewerPumpInstallationPart1.items,
  ...sewerPumpInstallationPart2.items,
  ...sewerPumpInstallationPart3.items,
  ...sewerPumpInstallationComplete.items
];

export const sewerPumpInstallationChecklistTemplate: ChecklistTemplate = {
  serviceTypeId: 'sewer-simplex',
  serviceType: 'Installation',
  items: allSewerPumpInstallationItems
};
const allSewerPumpServiceItems = [
  ...sewerPumpServicePart1.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: true,
    order: index + 1
  })),
  ...sewerPumpServicePart2.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: true,
    order: index + 9
  })),
  ...sewerPumpServicePart3.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: true,
    order: index + 17
  })),
  ...sewerPumpServicePart4.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: true,
    order: index + 25
  }))
];

export const sewerPumpServiceChecklistTemplate: ChecklistTemplate = {
  serviceTypeId: 'sewer-simplex',
  serviceType: 'Service',
  items: allSewerPumpServiceItems
};

// Combine all Sewer Pump Duplex Installation checklist parts
const allSewerPumpDuplexInstallationItems = [
  ...sewerPumpDuplexInstallationPart1.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: true,
    order: index + 1
  })),
  ...sewerPumpDuplexInstallationPart2.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: true,
    order: index + 11
  })),
  ...sewerPumpDuplexInstallationPart3.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: true,
    order: index + 21
  })),
  ...sewerPumpDuplexInstallationComplete.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: true,
    order: index + 31
  }))
];

export const sewerPumpDuplexInstallationChecklistTemplate: ChecklistTemplate = {
  serviceTypeId: 'sewer-duplex',
  serviceType: 'Installation',
  items: allSewerPumpDuplexInstallationItems
};

// Combine all Sewer Pump Duplex Service checklist parts
const allSewerPumpDuplexServiceItems = [
  ...sewerPumpDuplexServiceItems.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: true,
    order: index + 1
  })),
  ...sewerPumpDuplexServicePart2Items.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: true,
    order: index + 9
  })),
  ...sewerPumpDuplexServicePart3Items.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: true,
    order: index + 17
  })),
  ...sewerPumpDuplexServiceCompleteItems.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: true,
    order: index + 25
  })),
  ...sewerPumpDuplexServicePart4Items.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: true,
    order: index + 33
  }))
];

export const sewerPumpDuplexServiceChecklistTemplate: ChecklistTemplate = {
  serviceTypeId: 'sewer-duplex',
  serviceType: 'Service',
  items: allSewerPumpDuplexServiceItems
};

// Combine all Electrical Installation checklist parts
const allElectricalInstallationItems = [
  ...electricalInstallationItems.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: item.isRequired || true,
    order: index + 1
  })),
  ...electricalInstallationPart2Items.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: item.isRequired || true,
    order: index + 9
  })),
  ...electricalInstallationPart3Items.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: item.isRequired || true,
    order: index + 17
  })),
  ...electricalInstallationCompleteItems.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: item.isRequired || true,
    order: index + 26
  }))
];

export const electricalInstallationChecklistTemplate: ChecklistTemplate = {
  serviceTypeId: 'electrical-service',
  serviceType: 'Installation',
  items: allElectricalInstallationItems
};

// Combine all Electrical Installation Service checklist parts
const allElectricalInstallationServiceItems = [
  ...electricalInstallationServiceItems.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: item.isRequired || true,
    order: index + 1
  })),
  ...electricalInstallationServicePart2Items.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: item.isRequired || true,
    order: index + 4
  })),
  ...electricalInstallationServicePart3Items.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: item.isRequired || true,
    order: index + 13
  })),
  ...electricalInstallationServicePart4Items.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: item.isRequired || true,
    order: index + 22
  }))
];

export const electricalServiceChecklistTemplate: ChecklistTemplate = {
  serviceTypeId: 'electrical-service',
  serviceType: 'Service',
  items: electricalServiceComprehensiveItems.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: item.isRequired || true,
    order: index + 1
  }))
};

// Combine all Dirtwork Installation checklist parts
const allDirtworkInstallationItems = [
  ...dirtworkInstallationItems.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: item.isRequired || true,
    order: index + 1
  })),
  ...dirtworkInstallationPart2Items.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: item.isRequired || true,
    order: index + 11
  })),
  ...dirtworkInstallationPart3Items.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: item.isRequired || true,
    order: index + 21
  })),
  ...dirtworkInstallationPart4Items.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: item.isRequired || true,
    order: index + 31
  }))
];

export const dirtworkInstallationChecklistTemplate: ChecklistTemplate = {
  serviceTypeId: 'dirtwork-service',
  serviceType: 'Installation',
  items: allDirtworkInstallationItems
};

// Combine all Dirtwork Service checklist parts
const allDirtworkServiceItems = [
  ...dirtworkServiceItems.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: item.isRequired || true,
    order: index + 1
  })),
  ...dirtworkServicePart2Items.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: item.isRequired || true,
    order: index + 11
  })),
  ...dirtworkServicePart3Items.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: item.isRequired || true,
    order: index + 21
  })),
  ...dirtworkServicePart4Items.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: item.isRequired || true,
    order: index + 31
  })),
  ...dirtworkServicePart5Items.map((item, index) => ({
    id: item.id,
    title: item.text,
    description: item.category,
    required: item.isRequired || true,
    order: index + 41
  }))
];

export const dirtworkServiceChecklistTemplate: ChecklistTemplate = {
  serviceTypeId: 'dirtwork-service',
  serviceType: 'Service',
  items: allDirtworkServiceItems
};