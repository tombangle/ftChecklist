import { ChecklistItem } from '../types/checklist';

export const sewerPumpDuplexInstallationComplete: ChecklistItem[] = [
  {
    id: 'duplex-system-priming',
    text: 'Prime both pumps (if required) and activate system',
    category: 'System Testing',
    isCompleted: false,
    requiresPhoto: true,
    notes: ''
  },
  {
    id: 'duplex-alternating-operation',
    text: 'Verify pumps start/stop in alternating sequence',
    category: 'System Testing',
    isCompleted: false,
    requiresPhoto: true,
    notes: ''
  },
  {
    id: 'duplex-leak-inspection',
    text: 'Inspect all plumbing connections for leaks on both pump lines',
    category: 'System Testing',
    isCompleted: false,
    requiresPhoto: true,
    notes: ''
  },
  {
    id: 'duplex-backflow-verification',
    text: 'Verify check valves and backflow prevention on both pumps',
    category: 'System Testing',
    isCompleted: false,
    requiresPhoto: true,
    notes: ''
  },
  {
    id: 'duplex-flow-calibration',
    text: 'Measure flow rate and pressure for both pumps',
    category: 'Calibration',
    isCompleted: false,
    requiresPhoto: true,
    notes: ''
  },
  {
    id: 'duplex-control-settings',
    text: 'Adjust control panel settings for optimal dual pump operation',
    category: 'Calibration',
    isCompleted: false,
    requiresPhoto: true,
    notes: ''
  },
  {
    id: 'duplex-sensor-testing',
    text: 'Test all float switches and level sensors for accuracy',
    category: 'Sensor Testing',
    isCompleted: false,
    requiresPhoto: true,
    notes: ''
  },
  {
    id: 'duplex-alarm-testing',
    text: 'Test high water and pump failure alarms manually',
    category: 'Sensor Testing',
    isCompleted: false,
    requiresPhoto: true,
    notes: ''
  },
  {
    id: 'duplex-redundancy-test',
    text: 'Test system operation with one pump disabled (redundancy)',
    category: 'Safety Testing',
    isCompleted: false,
    requiresPhoto: true,
    notes: ''
  },
  {
    id: 'duplex-compliance-inspection',
    text: 'Conduct final inspection for code compliance and safety',
    category: 'Final Inspection',
    isCompleted: false,
    requiresPhoto: true,
    notes: ''
  }
];