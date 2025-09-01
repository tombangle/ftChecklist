import React from 'react';
import { Save, Check, Clock } from 'lucide-react';

interface SaveIndicatorProps {
  isSaving: boolean;
  lastSaved: Date | null;
}

export const SaveIndicator: React.FC<SaveIndicatorProps> = ({ isSaving, lastSaved }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (isSaving) {
    return (
      <div className="flex items-center gap-2 text-blue-600 text-sm">
        <Save className="h-4 w-4 animate-pulse" />
        <span>Saving...</span>
      </div>
    );
  }

  if (lastSaved) {
    return (
      <div className="flex items-center gap-2 text-green-600 text-sm">
        <Check className="h-4 w-4" />
        <span>Saved at {formatTime(lastSaved)}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-gray-500 text-sm">
      <Clock className="h-4 w-4" />
      <span>Auto-save enabled</span>
    </div>
  );
};