import { ChecklistTemplate } from '../types/checklist';

export const lakePumpModificationBaseline: ChecklistTemplate = {
  id: 'lake-pump-modification-baseline',
  title: 'Lake Pump Systems - Baseline Readings',
  description: 'Baseline readings and documentation',
  sections: [
    {
      title: 'Baseline Readings (system at rest / then brief live)',
      items: [
        { id: 'static-pressure', text: 'Static pressure ___ psi | Cut-in/Cut-out ___ psi (if tanked)', type: 'text' },
        { id: 'flow-rate', text: 'Flow @ test port ___ gpm @ ___ psi', type: 'text' },
        { id: 'voltage-current', text: 'Line voltage (idle/run) ___ V | Current (run) ___ A (per leg if 3φ)', type: 'text' },
        { id: 'baseline-photos', text: 'Photos: intake, manifold, shore manifold/valving, panel screens/settings', type: 'photo' },
        { id: 'controller-params', text: 'Record existing controller/VFD parameters and timer schedules', type: 'text' }
      ]
    }
  ]
};