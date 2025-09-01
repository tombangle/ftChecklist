import { ChecklistTemplate } from '../types/checklist';
import { lakePumpModificationPart1 } from './lakePumpModification';
import { lakePumpModificationPart2 } from './lakePumpModificationPart2';
import { lakePumpModificationPart3 } from './lakePumpModificationPart3';
import { lakePumpModificationPart4 } from './lakePumpModificationPart4';

// Combine all parts into a single comprehensive template
export const lakePumpModificationTemplate: ChecklistTemplate = {
  id: 'lake-pump-modification',
  title: 'Lake Pump Systems - Modification/Alteration',
  description: 'Comprehensive checklist for lake pump system modifications and alterations',
  serviceTypeId: 'lake-pump',
  serviceType: 'Modification/Alteration',
  sections: [
    ...lakePumpModificationPart1.sections,
    ...lakePumpModificationPart2.sections,
    ...lakePumpModificationPart3.sections,
    ...lakePumpModificationPart4.sections
  ]
};