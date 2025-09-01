import { ChecklistTemplate } from '@/types/checklist';
import { lakePumpServicePart2Items } from './lakePumpServicePart2';
import { lakePumpServicePart3Items } from './lakePumpServicePart3';
import { lakePumpServicePart4Items } from './lakePumpServicePart4';

export const lakePumpServiceTemplate: ChecklistTemplate = {
  serviceTypeId: 'lake-pump',
  serviceType: 'Service',
  items: [
    // Job Header & Safety
    { id: '1', title: 'Customer / Site / WO # / Purpose (irrigation, domestic, fire, other)', description: 'Record customer information, site details, work order number, and system purpose', required: true, order: 1 },
    { id: '2', title: 'Pump model / HP / V / phase | Control method (pressure switch / VFD / timer)', description: 'Document pump specifications and control method', required: true, order: 2 },
    { id: '3', title: 'Lake conditions noted (water level, clarity, debris, ice/wave activity, boat traffic)', description: 'Assess and document current lake conditions', required: true, order: 3 },
    { id: '4', title: 'Photos: shoreline manifold, electrical panel, markers/buoys, intake area', description: 'Take documentation photos of key system components', required: true, order: 4 },
    { id: '5', title: 'Tailboard/JSA: PPE (PFD for water work), buddy plan, rescue/throw ring, electrical LOTO plan', description: 'Complete safety briefing and establish safety protocols', required: true, order: 5 },
    { id: '6', title: 'GFCI test at shore power source; confirm dry work area for panels', description: 'Test GFCI protection and ensure safe electrical work area', required: true, order: 6 },
    
    // Initial Assessment
    { id: '7', title: 'Visual sweep (shore & accessible lines): leaks, corrosion, cracked fittings, UV/heat damage, loose supports, pipe "float," anchor/weight condition', description: 'Conduct comprehensive visual inspection of accessible system components', required: true, order: 7 },
    { id: '8', title: 'Electrical visual: moisture/corrosion in panel, loose lugs, discoloration, damaged conduit, compromised glands', description: 'Visual inspection of electrical components for damage or deterioration', required: true, order: 8 },
    { id: '9', title: 'Customer interview: performance since last visit, low flow/pressure, air bursts, noise, trips, time-of-day issues', description: 'Interview customer about system performance and any issues', required: true, order: 9 },
    { id: '10', title: 'Static pressure (tank/manifold): ____ psi', description: 'Record baseline static pressure reading', required: true, order: 10 },
    { id: '11', title: 'Line voltage (idle): ____ V (record L–L/L–G if applicable)', description: 'Record baseline voltage readings', required: true, order: 11 },
    { id: '12', title: 'Ambient temp: ____ °F', description: 'Record ambient temperature', required: true, order: 12 },
    { id: '13', title: 'Lake level vs manifold elevation (if known): ____ ft', description: 'Record lake level relative to manifold elevation', required: true, order: 13 },
    
    // Add remaining items from other parts
    ...lakePumpServicePart2Items,
    ...lakePumpServicePart3Items,
    ...lakePumpServicePart4Items
  ]
};