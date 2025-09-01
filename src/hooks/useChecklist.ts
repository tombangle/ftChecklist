import { useState, useEffect } from 'react';
import { ServiceType, ChecklistItem, ChecklistTemplate } from '@/types/checklist';
import { allChecklistTemplates } from '@/data/checklists';

interface ChecklistState {
  items: ChecklistItem[];
  technicianName: string;
  customerInfo: string;
}

export const useChecklist = (serviceType: ServiceType, selectedServiceType?: string) => {
  const [items, setItems] = useState<ChecklistItem[]>([]);
  const [technicianName, setTechnicianName] = useState('');
  const [customerInfo, setCustomerInfo] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  // Generate unique storage key
  const getStorageKey = () => {
    return `checklist_${serviceType.id}_${selectedServiceType || 'default'}`;
  };


  // Load saved data from localStorage
  const loadSavedData = () => {
    try {
      const storageKey = getStorageKey();
      const savedData = localStorage.getItem(storageKey);
      if (savedData) {
        const parsed: ChecklistState = JSON.parse(savedData);
        setItems(parsed.items || []);
        setTechnicianName(parsed.technicianName || '');
        setCustomerInfo(parsed.customerInfo || '');
        return true;
      }
    } catch (error) {
      console.warn('Failed to load saved checklist data:', error);
    }
    return false;
  };

  // Save data to localStorage with visual feedback
  const saveData = async (newItems?: ChecklistItem[], newTechName?: string, newCustomerInfo?: string) => {
    setIsSaving(true);
    try {
      const storageKey = getStorageKey();
      const dataToSave: ChecklistState = {
        items: newItems || items,
        technicianName: newTechName !== undefined ? newTechName : technicianName,
        customerInfo: newCustomerInfo !== undefined ? newCustomerInfo : customerInfo
      };
      localStorage.setItem(storageKey, JSON.stringify(dataToSave));
      setLastSaved(new Date());
    } catch (error) {
      console.warn('Failed to save checklist data:', error);
    } finally {
      setTimeout(() => setIsSaving(false), 300); // Show saving indicator briefly
    }
  };

  // Manual save function
  const manualSave = () => {
    saveData();
  };

  // Clear saved data
  const clearSavedData = () => {
    try {
      const storageKey = getStorageKey();
      localStorage.removeItem(storageKey);
    } catch (error) {
      console.warn('Failed to clear saved data:', error);
    }
  };

  useEffect(() => {
    // Try to load saved data first
    if (loadSavedData()) {
      return;
    }

    // If no saved data, initialize with template
    const template = allChecklistTemplates.find(t => 
      t.serviceTypeId === serviceType.id && 
      (!selectedServiceType || t.serviceType === selectedServiceType)
    );
    
    if (template) {
      let checklistItems: ChecklistItem[] = [];
      
      if (template.items) {
        checklistItems = template.items.map((item, index) => ({
          ...item,
          title: item.title || item.text || '',
          completed: false,
          required: item.required !== false,
          notes: '',
          photos: [],
          order: item.order || index + 1
        }));
      } else if (template.sections) {
        checklistItems = template.sections.flatMap((section, sectionIndex) => 
          section.items.map((item, itemIndex) => ({
            ...item,
            title: item.title || item.text || '',
            completed: false,
            required: item.required !== false,
            notes: '',
            photos: [],
            order: (sectionIndex * 100) + itemIndex + 1
          }))
        );
      }
      
      setItems(checklistItems);
    } else {
      const defaultItems: ChecklistItem[] = [
        { id: '1', title: 'Initial Safety Check', description: 'Verify work area safety', required: true, order: 1, completed: false, notes: '', photos: [] },
        { id: '2', title: 'Equipment Inspection', description: 'Inspect all equipment', required: true, order: 2, completed: false, notes: '', photos: [] },
        { id: '3', title: 'Service Execution', description: 'Perform required service', required: true, order: 3, completed: false, notes: '', photos: [] },
        { id: '4', title: 'Quality Check', description: 'Verify service completion', required: true, order: 4, completed: false, notes: '', photos: [] },
        { id: '5', title: 'Documentation', description: 'Complete service records', required: true, order: 5, completed: false, notes: '', photos: [] }
      ];
      setItems(defaultItems);
    }
  }, [serviceType, selectedServiceType]);

  // Auto-save when data changes
  useEffect(() => {
    if (items.length > 0 || technicianName || customerInfo) {
      const timeoutId = setTimeout(() => {
        saveData();
      }, 500); // Debounce saves
      
      return () => clearTimeout(timeoutId);
    }
  }, [items, technicianName, customerInfo]);

  const toggleItem = (id: string) => {
    const newItems = items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(newItems);
  };

  const updateNotes = (id: string, notes: string) => {
    const newItems = items.map(item => 
      item.id === id ? { ...item, notes } : item
    );
    setItems(newItems);
  };

  const updatePhotos = (id: string, photos: string[]) => {
    const newItems = items.map(item => 
      item.id === id ? { ...item, photos } : item
    );
    setItems(newItems);
  };

  const setTechnicianNameWithSave = (name: string) => {
    setTechnicianName(name);
  };

  const setCustomerInfoWithSave = (info: string) => {
    setCustomerInfo(info);
  };

  const getNextIncompleteIndex = () => {
    if (!items || items.length === 0) return -1;
    return items.findIndex(item => item.required && !item.completed);
  };

  const isCompleted = () => {
    if (!items || items.length === 0) return false;
    return items.filter(item => item.required).every(item => item.completed);
  };

  const getProgress = () => {
    if (!items || items.length === 0) return 0;
    const requiredItems = items.filter(item => item.required);
    const completedRequired = requiredItems.filter(item => item.completed);
    return requiredItems.length > 0 ? (completedRequired.length / requiredItems.length) * 100 : 0;
  };

  return {
    items,
    technicianName,
    setTechnicianName: setTechnicianNameWithSave,
    customerInfo,
    setCustomerInfo: setCustomerInfoWithSave,
    toggleItem,
    updateNotes,
    updatePhotos,
    getNextIncompleteIndex,
    isCompleted,
    getProgress,
    clearSavedData,
    manualSave,
    isSaving,
    lastSaved
  };
};