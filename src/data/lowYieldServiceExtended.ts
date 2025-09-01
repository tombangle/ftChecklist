import { ChecklistTemplate } from '@/types/checklist';

// Extended Low Yield Well Service checklist with all remaining items
export const lowYieldServiceExtendedItems = [
  { id: 'lys25', title: 'PumpSaver: Confirm protections enabled (dry-well/underload, dead-head, jammed impeller, rapid cycle)', description: 'Verify PumpSaver protection settings', required: false, order: 25 },
  { id: 'lys26', title: 'PumpSaver calibration: turn RESTART DELAY/CAL knob to CAL while pumping', description: 'Calibrate PumpSaver while system is running', required: false, order: 26 },
  { id: 'lys27', title: 'PumpSaver restart delay: set desired delay for dry-well recovery time', description: 'Configure PumpSaver restart timing', required: false, order: 27 },
  { id: 'lys28', title: 'PumpSaver Informer tool: view last faults, trip points, run time (if available)', description: 'Use diagnostic tool to review PumpSaver history', required: false, order: 28 },
  { id: 'lys29', title: 'Coyote Protector: verify model and connections; set SENSITIVITY to LOW initially', description: 'Initial Coyote pump protector setup', required: false, order: 29 },
  { id: 'lys30', title: 'Coyote calibration: run at maximum flow to calibrate sensitivity', description: 'Calibrate Coyote protector at maximum flow', required: false, order: 30 },
  { id: 'lys31', title: 'Coyote restart delay: set appropriate recovery time (5 minutes to 5 hours)', description: 'Configure Coyote restart delay timing', required: false, order: 31 },
  { id: 'lys32', title: 'Coyote 3-phase: note jumpers (J1 adds 5-min underload ignore); re-program after changes', description: 'Configure 3-phase Coyote jumper settings', required: false, order: 32 },
  { id: 'lys33', title: 'CSV ecosystems: confirm low-amperage trip strategy and restart timer', description: 'Verify CSV dry-well protection settings', required: false, order: 33 },
  { id: 'lys34', title: 'DO NOT intentionally run the well dry for testing', description: 'Safety warning for protection testing', required: true, order: 34 },
  { id: 'lys35', title: 'Use device calibration/test modes to simulate trips safely', description: 'Safe testing procedures for protection devices', required: true, order: 35 },
  { id: 'lys36', title: 'Confirm actual restart time matches device setting (use stopwatch)', description: 'Verify restart timing accuracy', required: true, order: 36 },
  { id: 'lys37', title: 'After restart: ensure flow/pressure return to normal without rapid cycling', description: 'Verify normal operation after protection reset', required: true, order: 37 },
  { id: 'lys38', title: 'Set pressure switch/VFD/CSV setpoint for minimum run time vs well recovery', description: 'Optimize control settings for low-yield conditions', required: true, order: 38 },
  { id: 'lys39', title: 'Add/verify flow-restrictor or storage buffer to cap draw below sustainable yield', description: 'Implement flow control measures if needed', required: false, order: 39 },
  { id: 'lys40', title: 'Align restart delay with measured recovery curve from diagnostic test', description: 'Match protection timing to actual well recovery', required: true, order: 40 }
];