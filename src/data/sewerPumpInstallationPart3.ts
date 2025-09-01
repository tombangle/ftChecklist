import { ChecklistTemplate } from '@/types/checklist';

// Level 2 Continued & Level 3: System Testing and Commissioning (Items 21-35)
export const sewerPumpInstallationPart3: ChecklistTemplate = {
  serviceTypeId: 'sewer-simplex',
  serviceType: 'Installation',
  items: [
    { id: '21', title: 'Ground all electrical components for safety', description: 'Ensure proper grounding of all electrical components per code requirements', required: true, order: 21 },
    { id: '22', title: 'Mount control panel in accessible, protected location', description: 'Install control panel in location that is accessible and protected from elements', required: true, order: 22 },
    { id: '23', title: 'Wire control panel for pump, switches, and alarms', description: 'Complete control panel wiring for pump operation, monitoring, and alarms', required: true, order: 23 },
    { id: '24', title: 'Prime pump (if required) and activate system', description: 'Prime pump if necessary and perform initial system activation', required: true, order: 24 },
    { id: '25', title: 'Verify pump starts/stops based on float switch signals', description: 'Test that pump responds correctly to float switch or sensor signals', required: true, order: 25 },
    { id: '26', title: 'Inspect all plumbing connections for leaks', description: 'Check all plumbing connections and joints for leaks during operation', required: true, order: 26 },
    { id: '27', title: 'Verify check valve and backflow prevention function', description: 'Test check valve operation and backflow prevention systems', required: true, order: 27 },
    { id: '28', title: 'Measure flow rate and pressure vs design specifications', description: 'Verify flow rate and pressure meet design specifications and requirements', required: true, order: 28 },
    { id: '29', title: 'Adjust control panel settings for optimal performance', description: 'Set cut-in/cut-out pressures and timing for optimal system performance', required: true, order: 29 },
    { id: '30', title: 'Test float switches and level sensors accuracy', description: 'Verify float switches and level sensors provide accurate water level detection', required: true, order: 30 }
  ]
};