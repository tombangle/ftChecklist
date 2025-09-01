import { ChecklistTemplate } from '@/types/checklist';

export const cisternPumpServiceTemplate: ChecklistTemplate = {
  id: 'cistern-pump-service',
  serviceTypeId: 'cistern-pump',
  serviceType: 'Service',
  name: 'Cistern Pump Service & Maintenance',
  items: [
    // Job Header, Safety, and Site Controls
    { id: 'cps1', title: 'Customer / Site / WO # / Purpose (domestic, irrigation, fire standby, etc.)', description: 'Record customer information and system purpose', required: true, order: 1 },
    { id: 'cps2', title: 'Last service date / known issues / recent work orders reviewed', description: 'Review service history and known issues', required: true, order: 2 },
    { id: 'cps3', title: 'Photos: cistern exterior, risers/lids, panel, manifold/valves, gauges', description: 'Document initial system condition with photos', required: true, order: 3 },
    { id: 'cps4', title: 'Tailboard/JSA: PPE, LOTO plan, slip/trip hazards, bio/chemical exposure plan', description: 'Complete safety briefing and hazard assessment', required: true, order: 4 },
    { id: 'cps5', title: 'Confined Space Rule: No one enters the cistern without a permit, air monitoring, retrieval, and an attendant', description: 'Establish confined space safety protocols', required: true, order: 5 },
    { id: 'cps6', title: 'Spill kit & absorbents staged; wet/dry vac and catch pans staged', description: 'Stage spill response and containment equipment', required: true, order: 6 },
    { id: 'cps7', title: 'GFCI test at service receptacles; ensure dry footing for panel work', description: 'Test electrical safety and establish safe work area', required: true, order: 7 },
    
    // Initial Inspection & Baseline
    { id: 'cps8', title: 'Visual (tank & site): leaks, damp soil, settling, lid/riser damage, vent/overflow screens present', description: 'Visual inspection of cistern and site conditions', required: true, order: 8 },
    { id: 'cps9', title: 'Visual (plumbing): corrosion, UV cracking, unsupported spans, weeps at unions/couplings', description: 'Visual inspection of plumbing system', required: true, order: 9 },
    { id: 'cps10', title: 'Visual (electrical): moisture in panel, rusted lugs, damaged conduit/glands, rodent activity', description: 'Visual inspection of electrical system', required: true, order: 10 },
    { id: 'cps11', title: 'Customer interview: pressure/flow complaints, pump short cycling, air spurts, alarm events, power issues', description: 'Interview customer about system performance issues', required: true, order: 11 },
    { id: 'cps12', title: 'Static system pressure: ____ psi', description: 'Record static system pressure at rest', required: true, order: 12 },
    { id: 'cps13', title: 'Line voltage (idle): ____ V (record L–L/L–G if applicable)', description: 'Record electrical voltage measurements', required: true, order: 13 },
    { id: 'cps14', title: 'Ambient temp: ____ °F', description: 'Record ambient temperature', required: true, order: 14 },
    { id: 'cps15', title: 'Decide if temporary water/bypass is needed; inform customer', description: 'Assess need for temporary water service', required: true, order: 15 },
    
    // Isolate, De-energize, and Safe Drain-Down
    { id: 'cps16', title: 'Power OFF at disconnect/breaker; apply LOTO; verify de-energized with meter', description: 'Complete electrical lockout and verification', required: true, order: 16 },
    { id: 'cps17', title: 'Close isolation valves; depressurize to 0 psi at drain/flush port; capture discharge', description: 'Isolate and depressurize system safely', required: true, order: 17 },
    { id: 'cps18', title: 'If opening wetted parts, sanitize tools and caps; prevent contaminants entering potable paths', description: 'Maintain sanitary conditions during service', required: true, order: 18 },
    
    // Cistern Maintenance - Cleaning
    { id: 'cps19', title: 'Inspect water clarity with light; assess sediment/algae level', description: 'Assess water quality and contamination levels', required: true, order: 19 },
    { id: 'cps20', title: 'Pump down to service level or fully drain (per scope) into safe discharge', description: 'Drain cistern to appropriate level for service', required: true, order: 20 },
    { id: 'cps21', title: 'Remove sediment via wand/vac or approved non-entry methods through riser', description: 'Clean sediment using non-entry methods', required: true, order: 21 },
    { id: 'cps22', title: 'Skim floating debris; clean riser throats and gasket grooves', description: 'Remove floating debris and clean access points', required: true, order: 22 },
    { id: 'cps23', title: 'If disinfection is in scope, dose and contact-time per your SOP/local code, then flush clear', description: 'Perform disinfection if required by scope', required: false, order: 23 },
    
    // Structural & Appurtenances
    { id: 'cps24', title: 'Exterior: check for cracks, settlement, seepage along penetrations', description: 'Inspect cistern exterior structural condition', required: true, order: 24 },
    { id: 'cps25', title: 'Interior (visual via camera/mirror/light): look for spalling, exposed fibers/rebar (no entry)', description: 'Visual interior inspection without entry', required: true, order: 25 },
    { id: 'cps26', title: 'Inlet & overflow: confirm clear, screened, and directed to appropriate discharge', description: 'Inspect inlet and overflow systems', required: true, order: 26 },
    { id: 'cps27', title: 'Vent: confirm bug screen intact, weather cap present, no blockages', description: 'Inspect ventilation system', required: true, order: 27 },
    { id: 'cps28', title: 'Lids/risers: gasket integrity, fasteners, child-safety features, lock hasps', description: 'Inspect access lids and safety features', required: true, order: 28 }
  ]
};