export interface ChecklistItem {
  id: string;
  title?: string;
  text?: string;
  description?: string;
  completed: boolean;
  required?: boolean;
  notes: string;
  photos: string[];
  order?: number;
  type?: 'checkbox' | 'text' | 'photo' | 'signature';
}

export interface ChecklistSection {
  title: string;
  items: Omit<ChecklistItem, 'completed' | 'notes' | 'photos'>[];
}

export interface ServiceType {
  id: string;
  name: string;
  icon: string;
  color: string;
  category: 'water' | 'sewer' | 'electrical' | 'installation' | 'other' | 'planning';
}

export interface ChecklistTemplate {
  id?: string;
  title?: string;
  description?: string;
  serviceTypeId: string;
  serviceType?: string;
  items?: Omit<ChecklistItem, 'completed' | 'notes' | 'photos'>[];
  sections?: ChecklistSection[];
}

export interface CompletedChecklist {
  id: string;
  serviceType: ServiceType;
  items: ChecklistItem[];
  technicianName: string;
  completedAt: Date;
  customerInfo?: string;
  signature?: string;
}