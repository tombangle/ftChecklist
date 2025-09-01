import { ChecklistTemplate } from '@/types/checklist';

// Level 3 Final: Safety, Compliance, and Handover (Items 31-40)
export const sewerPumpInstallationComplete: ChecklistTemplate = {
  serviceTypeId: 'sewer-simplex',
  serviceType: 'Installation',
  items: [
    { id: '31', title: 'Trigger alarms manually to verify alert functionality', description: 'Test alarm systems manually to confirm they alert for high levels/pump failure', required: true, order: 31 },
    { id: '32', title: 'Conduct final safety and compliance inspection', description: 'Perform comprehensive inspection to ensure compliance with local codes', required: true, order: 32 },
    { id: '33', title: 'Verify proper grounding and electrical connections', description: 'Confirm all electrical grounding and connections meet safety standards', required: true, order: 33 },
    { id: '34', title: 'Verify ventilation system operation and adequacy', description: 'Test ventilation system to ensure proper gas management and air circulation', required: true, order: 34 },
    { id: '35', title: 'Document system performance and test results', description: 'Record all performance measurements, test results, and system parameters', required: true, order: 35 },
    { id: '36', title: 'Provide client overview of system operation', description: 'Train client on proper system operation, controls, and monitoring', required: true, order: 36 },
    { id: '37', title: 'Deliver maintenance instructions and schedule', description: 'Provide comprehensive maintenance instructions and recommended schedule', required: true, order: 37 },
    { id: '38', title: 'Provide as-built drawings and system diagrams', description: 'Deliver complete as-built documentation and system diagrams to client', required: true, order: 38 },
    { id: '39', title: 'Deliver warranty information and documentation', description: 'Provide all warranty documentation for equipment and installation work', required: true, order: 39 },
    { id: '40', title: 'Complete final system commissioning report', description: 'Prepare and deliver comprehensive commissioning report with all test data', required: true, order: 40 }
  ]
};