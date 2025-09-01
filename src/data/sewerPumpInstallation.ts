import { ChecklistTemplate } from '@/types/checklist';

// Level 1: Excavation and Infrastructure Preparation (Items 1-15)
export const sewerPumpInstallationPart1: ChecklistTemplate = {
  serviceTypeId: 'sewer-simplex',
  serviceType: 'Installation',
  items: [
    { id: '1', title: 'Site survey and permit verification', description: 'Verify permits, locate utilities, and survey installation site', required: true, order: 1 },
    { id: '2', title: 'Excavate area for wet well/dry pit/sump basin', description: 'Excavate to required dimensions and depth for the wet well or dry pit structure', required: true, order: 2 },
    { id: '3', title: 'Prepare stable foundation with compacted gravel or concrete', description: 'Create stable foundation base with proper compaction to prevent settling', required: true, order: 3 },
    { id: '4', title: 'Place wet well or dry pit structure into excavation', description: 'Position and place the wet well or dry pit structure in prepared excavation', required: true, order: 4 },
    { id: '5', title: 'Secure structure with backfill and ensure proper leveling', description: 'Backfill around structure and verify level to avoid settling issues', required: true, order: 5 },
    { id: '6', title: 'Connect inlet pipe to wet well/pit from wastewater source', description: 'Install and connect inlet piping to receive wastewater from source', required: true, order: 6 },
    { id: '7', title: 'Install outlet pipe to main sewer line/treatment facility', description: 'Connect outlet pipe leading to main sewer line or treatment facility', required: true, order: 7 },
    { id: '8', title: 'Install ventilation system for gas management', description: 'Install ventilation to manage methane and hydrogen sulfide gases', required: true, order: 8 },
    { id: '9', title: 'Ensure adequate drainage around pit/wet well', description: 'Provide proper drainage around structure to prevent flooding', required: true, order: 9 },
    { id: '10', title: 'Lay electrical conduit from control panel to wet well/pit', description: 'Install conduit from control panel location to protect electrical wiring', required: true, order: 10 }
  ]
};