import React, { useState, useEffect } from 'react';
import { ServiceType, CompletedChecklist } from '@/types/checklist';
import { useChecklist } from '@/hooks/useChecklist';
import { generatePDFReport, emailReport } from '@/utils/pdfGenerator';
import ChecklistItem from './ChecklistItem';
import SignatureCapture from './SignatureCapture';
import { SaveIndicator } from './SaveIndicator';
import { Button } from '@/components/ui/button';
import { Save, Trash2 } from 'lucide-react';
interface ChecklistViewProps {
  serviceType: ServiceType;
  onBack: () => void;
  onComplete: (data: any) => void;
}

interface AdditionalFields {
  selectedServiceType: string;
  signature: string;
  selectedWBS: string;
  email: string;
  wellId: string;
  casingDiameter: string;
  depth: string;
  pumpModel: string;
  hp: string;
  voltage: string;
  phase: string;
  tdh: string;
  targetFlow: string;
}

const ChecklistView: React.FC<ChecklistViewProps> = ({ serviceType, onBack, onComplete }) => {
  const [selectedServiceType, setSelectedServiceType] = useState('');
  
  const {
    items,
    technicianName,
    setTechnicianName,
    customerInfo,
    setCustomerInfo,
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
  } = useChecklist(serviceType, selectedServiceType);

  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [signature, setSignature] = useState('');
  const [selectedWBS, setSelectedWBS] = useState('');

  // Well pump specific fields
  const [wellId, setWellId] = useState('');
  const [casingDiameter, setCasingDiameter] = useState('');
  const [depth, setDepth] = useState('');
  const [pumpModel, setPumpModel] = useState('');
  const [hp, setHp] = useState('');
  const [voltage, setVoltage] = useState('');
  const [phase, setPhase] = useState('');
  const [tdh, setTdh] = useState('');
  const [targetFlow, setTargetFlow] = useState('');

  // Generate unique storage key for additional fields
  const getAdditionalFieldsKey = () => {
    return `checklist_additional_${serviceType.id}_${selectedServiceType || 'default'}`;
  };

  // Load additional fields from localStorage
  const loadAdditionalFields = () => {
    try {
      const storageKey = getAdditionalFieldsKey();
      const savedData = localStorage.getItem(storageKey);
      if (savedData) {
        const parsed: AdditionalFields = JSON.parse(savedData);
        setSelectedServiceType(parsed.selectedServiceType || '');
        setSignature(parsed.signature || '');
        setSelectedWBS(parsed.selectedWBS || '');
        setEmail(parsed.email || '');
        setWellId(parsed.wellId || '');
        setCasingDiameter(parsed.casingDiameter || '');
        setDepth(parsed.depth || '');
        setPumpModel(parsed.pumpModel || '');
        setHp(parsed.hp || '');
        setVoltage(parsed.voltage || '');
        setPhase(parsed.phase || '');
        setTdh(parsed.tdh || '');
        setTargetFlow(parsed.targetFlow || '');
      }
    } catch (error) {
      console.warn('Failed to load additional fields:', error);
    }
  };

  // Save additional fields to localStorage
  const saveAdditionalFields = () => {
    try {
      const storageKey = getAdditionalFieldsKey();
      const dataToSave: AdditionalFields = {
        selectedServiceType,
        signature,
        selectedWBS,
        email,
        wellId,
        casingDiameter,
        depth,
        pumpModel,
        hp,
        voltage,
        phase,
        tdh,
        targetFlow
      };
      localStorage.setItem(storageKey, JSON.stringify(dataToSave));
    } catch (error) {
      console.warn('Failed to save additional fields:', error);
    }
  };

  // Load additional fields on component mount
  useEffect(() => {
    loadAdditionalFields();
  }, []);

  // Auto-save additional fields when they change
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      saveAdditionalFields();
    }, 500); // Debounce saves
    
    return () => clearTimeout(timeoutId);
  }, [selectedServiceType, signature, selectedWBS, email, wellId, casingDiameter, depth, pumpModel, hp, voltage, phase, tdh, targetFlow]);

  const wbsOptions = [
    '4.1.2 Well Pump System Installation',
    '4.1.3.3 Hand Pump System Installation', 
    '4.1.7.1 Standard Lake Manifold',
    '4.1.7.2 Wet Well w/ Drain Rock',
    '4.1.7.3 Wet Well w/ Siphon',
    '4.1.7.4 Well Pump On a Dock',
    '4.1.7.5 Shallow Well Jet Pump',
    '4.1.11.1 Standard Cistern System',
    '4.1.11.2 Pressurized Feed Cistern',
    '4.1.11.3 Multiple Tank Cistern System',
    '4.2.2 Standard Wastewater Pump System',
    '4.2.2.1 Simplex Sewer in Riser',
    '4.2.2.2 Simplex Sewer in Concrete Tank',
    '4.2.2.3 Simplex Sewer in Concrete Tank #2'
  ];
  // Handle manual clear all data
  const handleClearData = () => {
    if (confirm('Are you sure you want to clear all saved data? This action cannot be undone.')) {
      clearSavedData();
      try {
        const additionalFieldsKey = getAdditionalFieldsKey();
        localStorage.removeItem(additionalFieldsKey);
      } catch (error) {
        console.warn('Failed to clear additional fields:', error);
      }
      // Reset all form fields
      setSelectedServiceType('');
      setSignature('');
      setSelectedWBS('');
      setEmail('');
      setWellId('');
      setCasingDiameter('');
      setDepth('');
      setPumpModel('');
      setHp('');
      setVoltage('');
      setPhase('');
      setTdh('');
      setTargetFlow('');
    }
  };

  const handleComplete = () => {
    if (isCompleted()) {
      setShowEmailForm(true);
    }
  };

  const handleEmailSubmit = async () => {
    const completedChecklist: CompletedChecklist = {
      id: Date.now().toString(),
      serviceType,
      items,
      technicianName,
      completedAt: new Date(),
      customerInfo,
      signature
    };
    
    const report = generatePDFReport(completedChecklist);
    const success = await emailReport(email, report, serviceType.name);
    
    if (success) {
      // Clear all saved data after successful email submission
      clearSavedData();
      try {
        const additionalFieldsKey = getAdditionalFieldsKey();
        localStorage.removeItem(additionalFieldsKey);
      } catch (error) {
        console.warn('Failed to clear additional fields:', error);
      }
      onComplete(completedChecklist);
    }
  };

  const nextIncompleteIndex = getNextIncompleteIndex();
  const progress = getProgress();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-orange-600 text-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={onBack}
              className="flex items-center text-orange-200 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </button>
            <div className="text-right">
              <div className="text-sm text-orange-200">{Math.round(progress)}% Complete</div>
            </div>
          </div>
          
          <h1 className="text-xl font-bold text-white">{serviceType.name}</h1>
          <div className="w-full bg-white/20 rounded-full h-2 mt-2">
            <div 
              className="bg-orange-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Save/Clear Controls */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <div className="flex items-center justify-between">
            <SaveIndicator isSaving={isSaving} lastSaved={lastSaved} />
            <div className="flex gap-2">
              <Button
                onClick={manualSave}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Save className="h-4 w-4" />
                Save Now
              </Button>
              <Button
                onClick={handleClearData}
                variant="outline"
                size="sm"
                className="flex items-center gap-2 text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
                Clear All
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <h2 className="font-semibold text-gray-800 mb-3">Service Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Technician Name"
              value={technicianName}
              onChange={(e) => setTechnicianName(e.target.value)}
              className="w-full p-2 border border-gray-200 rounded"
            />
            <input
              type="text"
              placeholder="Customer/Location Info"
              value={customerInfo}
              onChange={(e) => setCustomerInfo(e.target.value)}
              className="w-full p-2 border border-gray-200 rounded"
            />
          </div>
          
          {/* Well Pump Systems specific fields */}
          {serviceType.id === 'well-pump' && (
            <div className="mt-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Well ID"
                  value={wellId}
                  onChange={(e) => setWellId(e.target.value)}
                  className="w-full p-2 border border-gray-200 rounded"
                />
                <input
                  type="text"
                  placeholder="Casing Ø"
                  value={casingDiameter}
                  onChange={(e) => setCasingDiameter(e.target.value)}
                  className="w-full p-2 border border-gray-200 rounded"
                />
                <input
                  type="text"
                  placeholder="Depth"
                  value={depth}
                  onChange={(e) => setDepth(e.target.value)}
                  className="w-full p-2 border border-gray-200 rounded"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <input
                  type="text"
                  placeholder="Planned Pump Model"
                  value={pumpModel}
                  onChange={(e) => setPumpModel(e.target.value)}
                  className="w-full p-2 border border-gray-200 rounded"
                />
                <input
                  type="text"
                  placeholder="HP"
                  value={hp}
                  onChange={(e) => setHp(e.target.value)}
                  className="w-full p-2 border border-gray-200 rounded"
                />
                <input
                  type="text"
                  placeholder="Voltage"
                  value={voltage}
                  onChange={(e) => setVoltage(e.target.value)}
                  className="w-full p-2 border border-gray-200 rounded"
                />
                <input
                  type="text"
                  placeholder="Phase"
                  value={phase}
                  onChange={(e) => setPhase(e.target.value)}
                  className="w-full p-2 border border-gray-200 rounded"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Planned Total Dynamic Head (TDH)"
                  value={tdh}
                  onChange={(e) => setTdh(e.target.value)}
                  className="w-full p-2 border border-gray-200 rounded"
                />
                <input
                  type="text"
                  placeholder="Target Flow"
                  value={targetFlow}
                  onChange={(e) => setTargetFlow(e.target.value)}
                  className="w-full p-2 border border-gray-200 rounded"
                />
              </div>
            </div>
          )}
        </div>
        {/* Service Type Dropdown - Show for all checklists */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <h2 className="font-semibold text-gray-800 mb-3">Service Type</h2>
          <select
            value={selectedServiceType}
            onChange={(e) => setSelectedServiceType(e.target.value)}
            className="w-full p-2 border border-gray-200 rounded"
          >
            <option value="">Select Service Type...</option>
            <option value="Installation">Installation</option>
            <option value="Service">Service</option>
            <option value="Modification/Alteration">Modification/Alteration</option>
            {serviceType.id === 'well-pump' && (
              <>
                <option value="Low Yield Well Service">Low Yield Well Service</option>
                <option value="Low Yield Well Installation">Low Yield Well Installation</option>
              </>
            )}
          </select>
        </div>

        {/* WBS Selection Dropdown - Only show for WBS Planning Checklist */}
        {serviceType.id === 'wbs-planning' && (
          <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
            <h2 className="font-semibold text-gray-800 mb-3">WBS Selection</h2>
            <select
              value={selectedWBS}
              onChange={(e) => setSelectedWBS(e.target.value)}
              className="w-full p-2 border border-gray-200 rounded"
            >
              <option value="">Select WBS Item...</option>
              {wbsOptions && wbsOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
        )}

        {/* Checklist Items - Hide until service type is selected (except for WBS Planning) */}
        {/* Checklist Items - Show only for Well Pump Systems, Lake Pump Systems, Cistern Pump Systems, Other Water Pump Systems, and Sewer Pump Systems when service type is selected, or for WBS Planning */}
        {(serviceType.id === 'wbs-planning' || 
          (serviceType.id === 'well-pump' && (selectedServiceType === 'Installation' || selectedServiceType === 'Service' || selectedServiceType === 'Modification/Alteration' || selectedServiceType === 'Low Yield Well Service' || selectedServiceType === 'Low Yield Well Installation')) ||
          (serviceType.id === 'lake-pump' && (selectedServiceType === 'Installation' || selectedServiceType === 'Service' || selectedServiceType === 'Modification/Alteration')) ||
          (serviceType.id === 'cistern-pump' && (selectedServiceType === 'Installation' || selectedServiceType === 'Service' || selectedServiceType === 'Modification/Alteration')) ||
          (serviceType.id === 'other-water-pump' && (selectedServiceType === 'Installation' || selectedServiceType === 'Service' || selectedServiceType === 'Modification/Alteration')) ||
          (serviceType.id === 'sewer-simplex' && (selectedServiceType === 'Installation' || selectedServiceType === 'Service' || selectedServiceType === 'Modification/Alteration')) ||
          (serviceType.id === 'sewer-duplex' && (selectedServiceType === 'Installation' || selectedServiceType === 'Service' || selectedServiceType === 'Modification/Alteration')) ||
          (serviceType.id === 'electrical-service' && (selectedServiceType === 'Installation' || selectedServiceType === 'Service' || selectedServiceType === 'Modification/Alteration')) ||
          (serviceType.id === 'dirtwork-service' && (selectedServiceType === 'Installation' || selectedServiceType === 'Service' || selectedServiceType === 'Modification/Alteration'))) && (
          <div className="space-y-1">
            {items && items.map((item, index) => (
              <ChecklistItem
                key={item.id}
                item={item}
                isLocked={item.required && index > nextIncompleteIndex}
                onToggle={toggleItem}
                onNotesChange={updateNotes}
                onPhotosChange={updatePhotos}
              />
            ))}
          </div>
        )}

         {serviceType.id !== 'wbs-planning' && 
          (serviceType.id !== 'well-pump' || (selectedServiceType !== 'Installation' && selectedServiceType !== 'Service' && selectedServiceType !== 'Modification/Alteration' && selectedServiceType !== 'Low Yield Well Service' && selectedServiceType !== 'Low Yield Well Installation')) &&
          (serviceType.id !== 'lake-pump' || (selectedServiceType !== 'Installation' && selectedServiceType !== 'Service' && selectedServiceType !== 'Modification/Alteration')) &&
          (serviceType.id !== 'cistern-pump' || (selectedServiceType !== 'Installation' && selectedServiceType !== 'Service' && selectedServiceType !== 'Modification/Alteration')) &&
          (serviceType.id !== 'other-water-pump' || (selectedServiceType !== 'Installation' && selectedServiceType !== 'Service' && selectedServiceType !== 'Modification/Alteration')) &&
           (serviceType.id !== 'sewer-simplex' || (selectedServiceType !== 'Installation' && selectedServiceType !== 'Service' && selectedServiceType !== 'Modification/Alteration')) &&
           (serviceType.id !== 'sewer-duplex' || (selectedServiceType !== 'Installation' && selectedServiceType !== 'Service' && selectedServiceType !== 'Modification/Alteration')) &&
           (serviceType.id !== 'electrical-service' || (selectedServiceType !== 'Installation' && selectedServiceType !== 'Service' && selectedServiceType !== 'Modification/Alteration')) &&
           (serviceType.id !== 'dirtwork-service' || (selectedServiceType !== 'Installation' && selectedServiceType !== 'Service' && selectedServiceType !== 'Modification/Alteration')) && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <div className="text-blue-600 mb-2">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
             <h3 className="text-lg font-medium text-blue-800 mb-1">
               {(serviceType.id === 'well-pump' || serviceType.id === 'lake-pump' || serviceType.id === 'cistern-pump' || serviceType.id === 'other-water-pump' || serviceType.id === 'sewer-simplex' || serviceType.id === 'sewer-duplex' || serviceType.id === 'electrical-service' || serviceType.id === 'dirtwork-service') ? 'Select Service Type' : 'No Checklist Available'}
             </h3>
              <p className="text-blue-600">
                 {(serviceType.id === 'well-pump' || serviceType.id === 'lake-pump' || serviceType.id === 'cistern-pump' || serviceType.id === 'other-water-pump' || serviceType.id === 'sewer-simplex' || serviceType.id === 'sewer-duplex' || serviceType.id === 'electrical-service' || serviceType.id === 'dirtwork-service')
                  ? 'Please select a service type from the dropdown to view the appropriate checklist.' 
                  : 'This service type does not have a checklist available.'}
              </p>

           </div>
        )}

        {/* Signature Section - Show when checklist is completed */}
        {isCompleted() && !showEmailForm && (
          <div className="mt-6 bg-white rounded-lg shadow-sm border p-4">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Technician Certification</h3>
              <p className="text-sm text-gray-600 mb-4">
                By signing below, I certify that I have completed all required checklist items to the best of my ability and in accordance with company standards.
              </p>
            </div>
            <SignatureCapture
              signature={signature}
              onSignatureChange={setSignature}
            />
          </div>
        )}

        {/* Complete Button */}
        {isCompleted() && !showEmailForm && (
          <div className="mt-6 text-center">
            <button
              onClick={handleComplete}
              disabled={!signature}
              className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
               Complete & Email Report
            </button>
          </div>
        )}


        {/* Email Form */}
        {showEmailForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h3 className="text-lg font-semibold mb-4">Email Report</h3>
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded mb-4"
              />
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowEmailForm(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleEmailSubmit}
                  disabled={!email}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white py-2 rounded transition-colors"
                >
                  Send Report
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChecklistView;