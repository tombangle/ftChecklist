import { ChecklistTemplate } from '@/types/checklist';

// Level 2: Pump and Component Installation (Items 11-25)
export const sewerPumpInstallationPart2: ChecklistTemplate = {
  serviceTypeId: 'sewer-simplex',
  serviceType: 'Installation',
  items: [
    { id: '11', title: 'Position pump (submersible/dry-mounted) in wet well/dry pit', description: 'Position and place pump in designated location within wet well or dry pit', required: true, order: 11 },
    { id: '12', title: 'Attach pump securely to base/mounting system', description: 'Secure pump to mounting system to minimize vibrations and movement', required: true, order: 12 },
    { id: '13', title: 'Ensure proper impeller alignment and secure attachment', description: 'Verify impeller is properly aligned and securely attached to pump shaft', required: true, order: 13 },
    { id: '14', title: 'Verify impeller clearance for optimal performance', description: 'Check impeller clearance to optimize performance and prevent wear', required: true, order: 14 },
    { id: '15', title: 'Connect pump discharge port to outlet pipe', description: 'Connect pump discharge to outlet pipe with appropriate fittings', required: true, order: 15 },
    { id: '16', title: 'Install check valves to prevent backflow', description: 'Install check valves in discharge line to prevent backflow conditions', required: true, order: 16 },
    { id: '17', title: 'Install union fittings for maintenance access', description: 'Install union fittings to allow easy disconnection for maintenance', required: true, order: 17 },
    { id: '18', title: 'Add pressure gauges/flow meters for monitoring', description: 'Install pressure gauges or flow meters to monitor system performance', required: true, order: 18 },
    { id: '19', title: 'Connect motor to control panel with waterproof wiring', description: 'Install waterproof and insulated wiring from motor to control panel', required: true, order: 19 },
    { id: '20', title: 'Install float switches and level sensors', description: 'Install float switches, level sensors, and alarms for automated operation', required: true, order: 20 }
  ]
};