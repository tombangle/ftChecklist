import { ChecklistItem } from '../types/checklist';
import { electricalInstallationServiceItems } from './electricalInstallationService';
import { electricalInstallationServicePart2Items } from './electricalInstallationServicePart2';
import { electricalInstallationServicePart3Items } from './electricalInstallationServicePart3';
import { electricalInstallationServicePart4Items } from './electricalInstallationServicePart4';

export const electricalInstallationCompleteItems: ChecklistItem[] = [
  ...electricalInstallationServiceItems,
  ...electricalInstallationServicePart2Items,
  ...electricalInstallationServicePart3Items,
  ...electricalInstallationServicePart4Items
];