import { ChecklistTemplate } from '../types/checklist';

export const lakePumpModificationPart2: ChecklistTemplate = {
  id: 'lake-pump-modification-2',
  title: 'LEVEL 1 — In-Water & Subgrade Alterations',
  description: 'Prepare the lakebed, routes, and anchors for the revised configuration',
  sections: [
    {
      title: '1.1 Site Prep & Debris Removal',
      items: [
        { id: 'mark-work-zone', text: 'Mark work zone; set safety buoys/flags for boaters', type: 'checkbox' },
        { id: 'clear-debris', text: 'Clear vegetation/debris; vacuum/scoop silt where manifold will sit', type: 'checkbox' },
        { id: 'level-pad', text: 'Level/prepare pad (pavers/skids) sized for manifold footprint', type: 'checkbox' }
      ]
    },
    {
      title: '1.2 Routing Changes (pipes & conduit)',
      items: [
        { id: 'layout-route', text: 'Lay out revised route from manifold to shore entry', type: 'checkbox' },
        { id: 'excavate-trench', text: 'Excavate or regrade shore trench as needed; maintain smooth bends', type: 'checkbox' },
        { id: 'add-weights', text: 'Add/relocate weights/anchors on submerged lines to prevent float', type: 'checkbox' },
        { id: 'pull-string', text: 'Pull draw string(s); cap conduit ends to keep dry/clean', type: 'checkbox' }
      ]
    },
    {
      title: '1.3 Anchor System Re-Work',
      items: [
        { id: 'place-anchors', text: 'Place/move anchors (blocks/eco-weights) per new layout; inspect hardware', type: 'checkbox' },
        { id: 'fit-chains', text: 'Fit chains/straps/shackles with anti-chafe sleeves; check corrosion resistance', type: 'checkbox' },
        { id: 'marker-buoys', text: 'Drop temporary marker buoys on each anchor to verify alignment', type: 'checkbox' }
      ]
    },
    {
      title: '1.4 Intake Screen & Elevation Changes',
      items: [
        { id: 'remove-screen', text: 'Remove, clean, and inspect screen (mesh integrity, damage, fouling)', type: 'checkbox' },
        { id: 'replace-screen', text: 'Replace/upgrade screen if torn/brittle; confirm correct mesh', type: 'checkbox' },
        { id: 'reset-elevation', text: 'Re-set intake elevation: maintain bottom clearance & minimum submergence', type: 'checkbox' },
        { id: 'anti-vortex', text: 'Add anti-vortex plate or guard if near surface or high draw conditions', type: 'checkbox' }
      ]
    }
  ]
};