import React from 'react';
import { ChecklistItem as ChecklistItemType } from '@/types/checklist';
import PhotoUpload from './PhotoUpload';

interface ChecklistItemProps {
  item: ChecklistItemType;
  isLocked: boolean;
  onToggle: (id: string) => void;
  onNotesChange: (id: string, notes: string) => void;
  onPhotosChange: (id: string, photos: string[]) => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ 
  item, 
  isLocked, 
  onToggle, 
  onNotesChange,
  onPhotosChange
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm border p-4 mb-3 
      ${isLocked ? 'opacity-50' : ''} 
      ${item.completed ? 'border-green-200 bg-green-50' : 'border-gray-200'}`}>
      
      <div className="flex items-start space-x-3">
        <button
          onClick={() => !isLocked && onToggle(item.id)}
          disabled={isLocked}
          className={`mt-1 w-6 h-6 rounded border-2 flex items-center justify-center
            ${isLocked ? 'cursor-not-allowed border-gray-300' : 'cursor-pointer'}
            ${item.completed ? 'bg-green-500 border-green-500' : 'border-gray-300 hover:border-green-400'}`}
        >
          {item.completed && (
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </button>

        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h3 className={`font-medium ${item.completed ? 'text-green-800' : 'text-gray-800'}`}>
              {item.order}. {item.title}
            </h3>
            {item.required && (
              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">Required</span>
            )}
          </div>
          
          {item.description && (
            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
          )}

          <textarea
            placeholder="Add notes..."
            value={item.notes}
            onChange={(e) => onNotesChange(item.id, e.target.value)}
            className="w-full mt-3 p-2 border border-gray-200 rounded text-sm resize-none"
            rows={2}
          />
          
          <PhotoUpload
            photos={item.photos}
            onPhotosChange={(photos) => onPhotosChange(item.id, photos)}
            maxPhotos={3}
          />
        </div>
      </div>
    </div>
  );
};

export default ChecklistItem;