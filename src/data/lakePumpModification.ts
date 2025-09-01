import { ChecklistTemplate } from '../types/checklist';

export const lakePumpModificationPart1: ChecklistTemplate = {
  id: 'lake-pump-modification-1',
  title: 'Lake Pump Systems - Modification/Alteration (Part 1)',
  description: 'Job Header, Safety, and Baseline Assessment',
  sections: [
    {
      title: 'Job Header & Scope (complete before work starts)',
      items: [
        { id: 'customer-site-wo', text: 'Customer / Site / WO #:', type: 'text' },
        { id: 'requested-changes', text: 'Requested change(s) / Problem statement:', type: 'text' },
        { id: 'scope-of-work', text: 'Defined Scope of Work (SOW) + change order signed', type: 'checkbox' },
        { id: 'cutover-window', text: 'Cutover window agreed: start ___ / end ___ | Rollback plan in place', type: 'text' },
        { id: 'permits-reviewed', text: 'Permits / shoreline or environmental constraints reviewed', type: 'checkbox' },
        { id: 'water-safety-plan', text: 'Water safety plan (PFDs, throw ring, boat traffic control) & rescue plan set', type: 'checkbox' },
        { id: 'weather-forecast', text: 'Weather/wave forecast checked | Lake level today ___ ft vs typical ___ ft', type: 'text' },
        { id: 'crew-tools', text: 'Crew / roles / special tools reserved (boat, crane, lift bags, diver, etc.)', type: 'checkbox' }
      ]
    },
    {
      title: '1) Safety, LOTO, Temporary Ops',
      items: [
        { id: 'tailboard-jsa', text: 'Tailboard / JSA; PPE (PFD for water work, gloves, eye/ear, footwear)', type: 'checkbox' },
        { id: 'spill-kit', text: 'Spill kit / silt control staged; exclusion markers for work zone', type: 'checkbox' },
        { id: 'loto-verify', text: 'De-energize & Lockout/Tagout at source; verify zero energy with meter', type: 'checkbox' },
        { id: 'gfci-check', text: 'GFCI check on shore power; dry footing for panel work', type: 'checkbox' },
        { id: 'temporary-bypass', text: 'Temporary water/bypass plan (if needed) explained to customer', type: 'checkbox' }
      ]
    },
    {
      title: '2) Baseline Assessment (document before altering)',
      items: [
        { id: 'visual-inspection', text: 'Visuals: leaks, corrosion, UV damage, cracked fittings, loose supports', type: 'checkbox' },
        { id: 'intake-condition', text: 'Intake: current screen condition, elevation above bottom ___ in, submergence ___ in', type: 'text' },
        { id: 'anchor-integrity', text: 'Anchors/weights: integrity, spacing, any line "float" or chafe points', type: 'checkbox' },
        { id: 'electrical-panel', text: 'Electrical panel: moisture, heat marks, loose lugs, gland condition', type: 'checkbox' }
      ]
    }
  ]
};