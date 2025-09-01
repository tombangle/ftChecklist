import { ChecklistItem } from '@/types/checklist';

export const lakePumpServicePart2Items: ChecklistItem[] = [
  // Lockout/Tagout & Prep
  { id: '14', title: 'De-energize at breaker/disconnect; apply LOTO; verify zero-energy with meter', description: 'Implement lockout/tagout procedures and verify zero energy state', required: true, order: 14 },
  { id: '15', title: 'Close isolation valves as needed; depressurize system to 0 psi; catch pans down', description: 'Isolate system and depressurize for safe maintenance', required: true, order: 15 },
  { id: '16', title: 'Stage clean tools, service buckets, spare clamps/gaskets, waterproof splice kits (if needed)', description: 'Prepare and stage all necessary tools and materials', required: true, order: 16 },
  { id: '17', title: 'Maintain sanitary handling of wetted components; keep caps/plugs clean', description: 'Ensure sanitary handling procedures for water system components', required: true, order: 17 },

  // Intake Screen & Filter Maintenance
  { id: '18', title: 'Inspect intake screen area from surface; note debris, vegetation, silt accumulation', description: 'Visual inspection of intake screen area from surface', required: true, order: 18 },
  { id: '19', title: 'Remove debris, algae, and sediment from intake screen', description: 'Clean intake screen of all debris and biological growth', required: true, order: 19 },
  { id: '20', title: 'Inspect mesh/pore condition; replace if torn, brittle, or deformed', description: 'Inspect screen mesh condition and replace if damaged', required: true, order: 20 },
  { id: '21', title: 'Remove, clean, or replace cartridges/screens at shore manifold', description: 'Service inline filters and strainers at shore manifold', required: true, order: 21 },
  { id: '22', title: 'Inspect O-rings/gaskets; lubricate food-grade and re-seat', description: 'Inspect and service sealing components', required: true, order: 22 },
  { id: '23', title: 'Clearance above lakebed maintained (to minimize silt ingestion)', description: 'Verify proper intake elevation above lakebed', required: true, order: 23 },
  { id: '24', title: 'Minimum submergence maintained (to prevent vortex/air entrainment)', description: 'Confirm adequate submergence depth for proper operation', required: true, order: 24 },
  { id: '25', title: 'Ensure anti-chafe sleeves and weights are intact and spaced regularly', description: 'Inspect and maintain cable/pipe protection and anchoring', required: true, order: 25 }
];