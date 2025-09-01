import { ChecklistItem } from '@/types/checklist';

export const lakePumpInstallationPart2: ChecklistItem[] = [
  // Anchoring System Setup
  { id: '19', title: 'Position anchors (e.g., concrete blocks/eco-weights) at planned manifold corners.', description: 'Position anchors at planned manifold corner locations', required: true, order: 19 },
  { id: '20', title: 'Install anchor hardware (chains/straps/shackles); verify capacity and corrosion protection.', description: 'Install anchor hardware with verified capacity and corrosion protection', required: true, order: 20 },
  { id: '21', title: 'Place temporary marker buoys at anchors; verify alignment with planned manifold orientation.', description: 'Place marker buoys and verify alignment with manifold orientation', required: true, order: 21 },
  
  // Pre-Position Manifold Components
  { id: '22', title: 'On shore: assemble/inspect intake pipes and intake screens/filters (serviceable, correct mesh).', description: 'Assemble and inspect intake pipes and screens on shore', required: true, order: 22 },
  { id: '23', title: 'Stage manifold body, fasteners, gaskets, clamps, anti-seize, and tools at launch point.', description: 'Stage all manifold components and tools at launch point', required: true, order: 23 },
  { id: '24', title: 'Dry-fit connections; confirm all mating faces are clean and true; bag/seal components until deployment.', description: 'Dry-fit connections and seal components until deployment', required: true, order: 24 },
  
  // Manifold Assembly (shore)
  { id: '25', title: 'Connect manifold body ports (label suction/intake, discharge, spares).', description: 'Connect and label manifold body ports', required: true, order: 25 },
  { id: '26', title: 'Attach intake screens to intake branches; verify all seals, O-rings, and gaskets are correct.', description: 'Attach intake screens and verify all seals and gaskets', required: true, order: 26 },
  { id: '27', title: 'Install check valves/strainers/backwash tees as designed (service unions included).', description: 'Install check valves, strainers, and backwash tees with service unions', required: true, order: 27 },
  { id: '28', title: 'Tighten to spec; mark torques; pressure pre-check on shore if possible (low air/water).', description: 'Tighten to specification, mark torques, and perform pressure pre-check', required: true, order: 28 },
  
  // Deployment to Water
  { id: '29', title: 'Fit temporary floats/slings; move assembly via boat or crane to install location.', description: 'Fit temporary floats and move assembly to installation location', required: true, order: 29 },
  { id: '30', title: 'Lower slowly, keeping manifold level; maintain control lines to prevent swing/chafe.', description: 'Lower manifold slowly while maintaining level and control', required: true, order: 30 },
  
  // Anchoring the Manifold
  { id: '31', title: 'Land manifold onto prepared anchors/skids; check level and orientation.', description: 'Land manifold on anchors and verify level and orientation', required: true, order: 31 },
  { id: '32', title: 'Secure to anchors (straps/chains/bolts); tension evenly; add anti-chafe sleeves where needed.', description: 'Secure manifold to anchors with even tension and anti-chafe protection', required: true, order: 32 },
  { id: '33', title: 'Confirm stability: gently move flow through manifold (if possible) and check for shift.', description: 'Confirm manifold stability by checking for movement during flow', required: true, order: 33 },
  
  // Buoys & Route Markers
  { id: '34', title: 'Attach service buoys/markers to manifold or anchor points for visibility and future maintenance.', description: 'Attach service buoys for visibility and maintenance access', required: true, order: 34 },
  { id: '35', title: 'Place route markers along pipeline from manifold to shore to protect from prop/anchor damage; record GPS points.', description: 'Place route markers and record GPS coordinates for protection', required: true, order: 35 }
];