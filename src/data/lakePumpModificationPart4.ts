import { ChecklistTemplate } from '../types/checklist';

export const lakePumpModificationPart4: ChecklistTemplate = {
  id: 'lake-pump-modification-4',
  title: 'LEVEL 3 — Connections, Electrical & Commissioning',
  description: 'Tie in, test, tune, and document the altered system',
  sections: [
    {
      title: '3.1 Plumbing Tie-Ins',
      items: [
        { id: 'connect-intake', text: 'Connect intake(s) manifold → pump suction (union/service joint included)', type: 'checkbox' },
        { id: 'connect-discharge', text: 'Connect pump discharge → shore manifold/distribution', type: 'checkbox' },
        { id: 'install-verify-valves', text: 'Install/verify: isolation valves, check valves, drain/flush ports, pressure gauge ports', type: 'checkbox' },
        { id: 'pressure-test', text: 'Pressure test rough-in: ___ psi for ___ min ☐ Pass ☐ Fixes made → re-test', type: 'text' }
      ]
    },
    {
      title: '3.2 Electrical & Controls',
      items: [
        { id: 'route-cable', text: 'Route/secure submersible cable; add strain relief & drip loops; IP-rated glands', type: 'checkbox' },
        { id: 'verify-bonding', text: 'Verify bonding/grounding continuity to equipment ground', type: 'checkbox' },
        { id: 'controller-type', text: 'Controller type: ☐ Pressure switch ☐ VFD ☐ Timer — update wiring as designed', type: 'checkbox' },
        { id: 'program-settings', text: 'Program/confirm: Pressure switch cut-in/out target ___ psi', type: 'text' },
        { id: 'vfd-settings', text: 'VFD: setpoint ___ psi | min/max Hz | accel/decel | sleep/wake | dry-run detect', type: 'text' }
      ]
    }
  ]
};