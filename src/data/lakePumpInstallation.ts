import { ChecklistTemplate } from '@/types/checklist';
import { lakePumpInstallationPart2 } from './lakePumpInstallationPart2';
import { lakePumpInstallationPart3 } from './lakePumpInstallationPart3';

export const lakePumpInstallationTemplate: ChecklistTemplate = {
  serviceTypeId: 'lake-pump',
  serviceType: 'Installation',
  items: [
    // Job Header, Plan, & Safety (complete before any work)
    { id: '1', title: 'Customer / Site / WO # / Permit(s) / Environmental clearance:', description: 'Record customer information, site details, work order number, permits, and environmental clearances', required: true, order: 1 },
    { id: '2', title: 'Purpose: ☐ Irrigation ☐ Domestic supply ☐ Fire protection ☐ Other:', description: 'Identify the purpose of the lake pump system installation', required: true, order: 2 },
    { id: '3', title: 'Pump data (model/HP/V/phase), control method: ☐ Pressure switch ☐ VFD ☐ Other:', description: 'Record pump specifications and control method', required: true, order: 3 },
    { id: '4', title: 'Design flow target ____ gpm @ ____ psi | Pipe sizes/materials:', description: 'Document design flow targets and pipe specifications', required: true, order: 4 },
    { id: '5', title: 'Seasonal water levels (current depth at manifold location ____ ft; min seasonal depth ____ ft).', description: 'Record current and minimum seasonal water depths', required: true, order: 5 },
    { id: '6', title: 'Crew roles assigned; tailboard/JSA done; rescue plan for in-water work.', description: 'Assign crew roles, complete safety briefing, and establish rescue plan', required: true, order: 6 },
    { id: '7', title: 'Lockout/Tagout plan for electrical; GFCI-protected temp power available for testing.', description: 'Establish LOTO plan and ensure GFCI-protected temporary power', required: true, order: 7 },
    { id: '8', title: 'Environmental protection staged (silt socks, spill kit); wildlife/fisheries constraints reviewed.', description: 'Stage environmental protection equipment and review constraints', required: true, order: 8 },
    { id: '9', title: 'Tools/materials staged & inspected (IP68 glands, clamps, anchors, buoys, screens, weights, straps, shackles, torque gear).', description: 'Stage and inspect all required tools and materials', required: true, order: 9 },
    
    // In-Water Site Preparation
    { id: '10', title: 'Mark work zone; deploy safety markers; confirm boat traffic control.', description: 'Mark work zone and deploy safety markers with boat traffic control', required: true, order: 10 },
    { id: '11', title: 'Clear debris/vegetation from the set area (hand rakes/underwater tools).', description: 'Clear debris and vegetation from installation area', required: true, order: 11 },
    { id: '12', title: 'Level the lakebed or create a stable pad (pavers/skids) sized for manifold footprint.', description: 'Level lakebed or create stable pad for manifold installation', required: true, order: 12 },
    { id: '13', title: 'Verify final manifold elevation allows minimum submergence above screens and clearance from bottom.', description: 'Verify proper manifold elevation for submergence and bottom clearance', required: true, order: 13 },
    { id: '14', title: 'Confirm ice/freeboard clearance for seasonal changes.', description: 'Verify adequate clearance for seasonal ice and water level changes', required: true, order: 14 },
    
    // Trenching & Pipe/Cable Routing
    { id: '15', title: 'Lay out trench(s) and shore entry point; confirm depths below frost and away from hazards.', description: 'Layout trenches and shore entry with proper depth and hazard avoidance', required: true, order: 15 },
    { id: '16', title: 'Excavate trench(s) for discharge and any conduit; maintain smooth bends.', description: 'Excavate trenches with smooth bends for discharge and conduit', required: true, order: 16 },
    { id: '17', title: 'Place bedding; lay pipes along route; anchor/weight submerged sections to prevent float/movement.', description: 'Install pipe bedding and anchor submerged sections', required: true, order: 17 },
    { id: '18', title: 'Pull draw string(s) in conduit from shore to water access point; cap ends to keep dry/clean.', description: 'Install draw strings in conduit and cap ends for protection', required: true, order: 18 },
    
    // Combine with additional parts
    ...lakePumpInstallationPart2,
    ...lakePumpInstallationPart3
  ]
};
