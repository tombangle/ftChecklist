import { ChecklistItem } from '@/types/checklist';

export const lakePumpServicePart3Items: ChecklistItem[] = [
  // Pump Maintenance
  { id: '26', title: 'External check (accessible): housing corrosion, cracks, weeps at joints, cable strain relief', description: 'External inspection of accessible pump components', required: true, order: 26 },
  { id: '27', title: 'Inspect impeller/diffusers for wear, sand scoring, or obstructions; clean or replace', description: 'Inspect and service impeller and diffuser components if pump is pulled', required: false, order: 27 },
  { id: '28', title: 'Check shaft play and rotation; verify no binding', description: 'Check pump shaft condition and rotation', required: false, order: 28 },
  { id: '29', title: 'Inspect and re-terminate submersible splices with waterproof heat-shrink if needed', description: 'Service electrical splices if pump is pulled for maintenance', required: false, order: 29 },

  // Motor & Electrical Components
  { id: '30', title: 'Open shore control panel (still LOTO): blow out dust; dry any condensation; inspect for heat/fault marks', description: 'Clean and inspect control panel interior', required: true, order: 30 },
  { id: '31', title: 'Tighten & torque accessible terminals to spec (no over-torque)', description: 'Service electrical terminals to proper torque specifications', required: true, order: 31 },
  { id: '32', title: 'Grounding/bonding continuity check; verify intact EGC path and bonding jumpers', description: 'Test grounding and bonding system continuity', required: true, order: 32 },
  { id: '33', title: 'Insulation test: motor leads to ground ____ MΩ @ ____ V test', description: 'Perform motor insulation resistance test and record results', required: true, order: 33 },
  { id: '34', title: 'Pressure switch: contact pitting, tubing condition; diaphragm leaks', description: 'Inspect pressure switch components and connections', required: true, order: 34 },
  { id: '35', title: 'VFD: check alarms/history, fan/filter cleanliness, condensate, gland seals', description: 'Service VFD components if applicable', required: false, order: 35 },
  { id: '36', title: 'Glands/conduit: verify IP-rated fittings are tight; add dielectric grease where appropriate', description: 'Service conduit glands and fittings', required: true, order: 36 }
];