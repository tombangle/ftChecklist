import { ChecklistTemplate } from '../types/checklist';

export const lakePumpModificationPart3: ChecklistTemplate = {
  id: 'lake-pump-modification-3',
  title: 'LEVEL 2 — Manifold Assembly & Mounting Alterations',
  description: 'Modify, rebuild, and re-seat the manifold in its final position',
  sections: [
    {
      title: '2.1 Isolate & Dismantle',
      items: [
        { id: 'close-valves', text: 'Close isolation valves; depressurize to 0 psi; catch pans down', type: 'checkbox' },
        { id: 'disconnect-unions', text: 'Disconnect unions/clamps at shore manifold and at manifold assembly', type: 'checkbox' },
        { id: 'tag-components', text: 'Tag components to avoid cross-connection errors', type: 'checkbox' }
      ]
    },
    {
      title: '2.2 Bench Modifications (shore)',
      items: [
        { id: 'add-ports', text: 'Add/remove ports, tees, or backwash/flush provisions as designed', type: 'checkbox' },
        { id: 'install-valves', text: 'Install/replace check valves, isolation valves, and service unions', type: 'checkbox' },
        { id: 'replace-gaskets', text: 'Replace gaskets/O-rings; apply correct sealant/clamp torque; mark torques', type: 'checkbox' },
        { id: 'pressure-check', text: 'Low-pressure pre-check if practical (air/water) for leaks', type: 'checkbox' }
      ]
    },
    {
      title: '2.3 Deployment & Seating',
      items: [
        { id: 'transport-manifold', text: 'Transport via floats/boat/crane; control with slings/guide lines', type: 'checkbox' },
        { id: 'lower-gently', text: 'Lower gently; land level on prepared anchors/pad', type: 'checkbox' },
        { id: 'secure-anchors', text: 'Secure to anchors (straps/chains/bolts); tension evenly; confirm no wobble/shift', type: 'checkbox' },
        { id: 'install-markers', text: 'Install permanent buoys/markers for manifold and line routes (log GPS points)', type: 'checkbox' }
      ]
    }
  ]
};