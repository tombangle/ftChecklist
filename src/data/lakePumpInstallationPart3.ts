import { ChecklistItem } from '@/types/checklist';

export const lakePumpInstallationPart3: ChecklistItem[] = [
  // Intake & Discharge Connections
  { id: '36', title: 'Connect intake line(s) from manifold to submersible pump suction (include union/service joint).', description: 'Connect intake lines from manifold to pump suction with service joints', required: true, order: 36 },
  { id: '37', title: 'Connect discharge from pump outlet to shore system (distribution/irrigation/tank).', description: 'Connect pump discharge to shore distribution system', required: true, order: 37 },
  { id: '38', title: 'Install: isolation valves, unions, check valve(s), pressure/flush ports at shore manifold.', description: 'Install valves, unions, and check valves at shore manifold', required: true, order: 38 },
  { id: '39', title: 'Tighten clamps/couplings; verify all joints are watertight; add anti-vibration supports.', description: 'Tighten all connections and verify watertight joints with vibration supports', required: true, order: 39 },
  
  // Electrical Connections
  { id: '40', title: 'Route submersible pump cable through conduit to shore control box; maintain drip loops and strain relief.', description: 'Route pump cable with proper drip loops and strain relief', required: true, order: 40 },
  { id: '41', title: 'Terminate with IP68 glands; confirm bonding/grounding continuity.', description: 'Terminate cable with IP68 glands and verify grounding continuity', required: true, order: 41 },
  { id: '42', title: 'Controls installed & labeled: ☐ Pressure switch ☐ Transducer to VFD ☐ Run-dry interlock.', description: 'Install and label control components', required: true, order: 42 },
  { id: '43', title: 'Verify GFCI protection and correct breaker/fuse sizing for motor FLA and cable ampacity.', description: 'Verify GFCI protection and proper breaker/fuse sizing', required: true, order: 43 },
  
  // System Protection (optional but recommended)
  { id: '44', title: 'Install pump protection device (e.g., Pump Saver/Pumptec/Coyote) per motor/voltage:', description: 'Install pump protection device per motor specifications', required: false, order: 44 },
  { id: '45', title: 'Land current/voltage sensors correctly; set restart delay for recovery time (start with 5–30 min typical).', description: 'Install sensors and set restart delay for system recovery', required: false, order: 45 },
  { id: '46', title: 'Calibrate/learn "normal" operating parameters; test protection response.', description: 'Calibrate normal operating parameters and test protection response', required: false, order: 46 },
  
  // System Testing & Commissioning
  { id: '47', title: 'Perform initial system startup; check rotation (if 3-phase); verify proper pump operation.', description: 'Perform initial startup and verify pump operation', required: true, order: 47 },
  { id: '48', title: 'Test all control functions: start/stop, pressure control, protection devices.', description: 'Test all control functions and protection devices', required: true, order: 48 },
  { id: '49', title: 'Measure and record operating parameters: flow rate, pressure, current, voltage.', description: 'Measure and record all operating parameters', required: true, order: 49 },
  { id: '50', title: 'Verify system meets design specifications for flow and pressure.', description: 'Verify system meets design flow and pressure specifications', required: true, order: 50 },
  { id: '51', title: 'Check for leaks at all connections during operation; repair as needed.', description: 'Inspect for leaks during operation and repair as needed', required: true, order: 51 },
  { id: '52', title: 'Complete system documentation and provide to customer with operation/maintenance instructions.', description: 'Complete documentation and provide operation instructions to customer', required: true, order: 52 }
];