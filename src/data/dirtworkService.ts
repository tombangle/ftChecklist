export const dirtworkServiceItems = [
  // Pre-Dispatch (before you roll)
  { id: 'dws1', text: 'Work order received with scope, location (GPS/address), drawings/photos', category: 'Pre-Dispatch Planning', isRequired: true, requiresPhoto: false, requiresSignature: false },
  { id: 'dws2', text: 'Contact on site confirmed (owner/GC/utility) + access instructions', category: 'Pre-Dispatch Planning', isRequired: true, requiresPhoto: false, requiresSignature: false },
  { id: 'dws3', text: 'Determine service type: Emergency leak / Scheduled repair / Investigation/locate assist / Other', category: 'Pre-Dispatch Planning', isRequired: true, requiresPhoto: false, requiresSignature: false },
  { id: 'dws4', text: 'Equipment matched to task: Mini-ex / Backhoe / Vac truck / Skid/attachments / Pumps / Sawcut trailer', category: 'Equipment Planning', isRequired: true, requiresPhoto: false, requiresSignature: false },
  { id: 'dws5', text: 'Materials staged (best estimate): backfill, bedding, pipe/fittings, plates, cold mix/hot mix, geotextile, saw blades', category: 'Material Planning', isRequired: true, requiresPhoto: false, requiresSignature: false },
  { id: 'dws6', text: 'Traffic control plan (TTCP) & devices loaded (cones/signs/flaggers as needed)', category: 'Traffic Control', isRequired: true, requiresPhoto: false, requiresSignature: false },
  { id: 'dws7', text: 'SWPPP/erosion controls & spill kit loaded (silt socks, wattles, absorbents)', category: 'Environmental Controls', isRequired: true, requiresPhoto: false, requiresSignature: false },
  
  // Utility Locates & Permissions (never skip)
  { id: 'dws8', text: 'White-line the dig area; submit 811/One-Call ticket. Record Ticket # and valid through date', category: 'Utility Locates', isRequired: true, requiresPhoto: true, requiresSignature: false },
  { id: 'dws9', text: 'Verify marks on site; request re-mark if faded/wrong; extend ticket if work window shifts', category: 'Utility Locates', isRequired: true, requiresPhoto: true, requiresSignature: false },
  { id: 'dws10', text: 'Ask owner for private utilities (irrigation, site power, lighting, data, propane, wells, septic)', category: 'Private Utilities', isRequired: true, requiresPhoto: false, requiresSignature: false }
];