import { ChecklistItem } from '@/types/checklist';

export const lakePumpServicePart4Items: ChecklistItem[] = [
  // Plumbing & Valves
  { id: '37', title: 'Inspect all visible pipes, unions, and clamps for leaks, cracks, or UV damage', description: 'Comprehensive inspection of plumbing components', required: true, order: 37 },
  { id: '38', title: 'Exercise check/gate/ball/shutoff valves; confirm smooth operation and positive sealing', description: 'Test valve operation and sealing capability', required: true, order: 38 },
  { id: '39', title: 'Verify anti-siphon/backflow devices where required; test function if accessible', description: 'Test backflow prevention devices', required: true, order: 39 },
  { id: '40', title: 'Confirm manifold gauges read and return to zero; replace faulty gauges', description: 'Test gauge accuracy and replace if faulty', required: true, order: 40 },
  { id: '41', title: 'Add/adjust line weights/anchors to prevent pipe float or movement under flow', description: 'Ensure proper pipe anchoring and support', required: true, order: 41 },

  // System Testing & Calibration
  { id: '42', title: 'Prime (if required by design); open vent/flush port; purge air', description: 'Prime system and purge air from lines', required: true, order: 42 },
  { id: '43', title: 'Flow at shore test port: ____ gpm @ ____ psi (target/spec: ______)', description: 'Test and record flow rate and pressure at shore test port', required: true, order: 43 },
  { id: '44', title: 'Distribution points (zones/heads/taps) spot-check: ____ gpm/psi', description: 'Test flow and pressure at distribution points', required: true, order: 44 },
  { id: '45', title: 'Electrical under load: Voltage ____ V | Current ____ A (each leg if 3φ)', description: 'Record electrical readings under load conditions', required: true, order: 45 },
  { id: '46', title: 'Listen/feel for unusual noise or vibration; note any pressure pulsation', description: 'Check for abnormal operation sounds or vibrations', required: true, order: 46 },
  { id: '47', title: 'Pressure switch cut-in/cut-out measured: / psi (adjust if needed)', description: 'Verify and adjust pressure switch settings', required: true, order: 47 },
  { id: '48', title: 'If tanked system: tank precharge reset to ___ psi (2 psi below cut-in)', description: 'Set proper tank precharge pressure', required: false, order: 48 },
  { id: '49', title: 'VFD: confirm setpoint ___ psi, min/max Hz, acceleration/deceleration rates', description: 'Verify and calibrate VFD parameters if applicable', required: false, order: 49 }
];