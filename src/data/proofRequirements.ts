export interface ProofItem {
  id: string;
  category: 'Geological' | 'Archaeological' | 'Paleoenvironmental' | 'Chronological';
  requirement: string;
  currentlyObserved: boolean;
  note: string;
}

export const PROOF_REQUIREMENTS: ProofItem[] = [
  { id: 'pr-01', category: 'Geological', requirement: 'Continental (not oceanic) crust beneath the claimed area', currentlyObserved: false, note: 'Seismic and gravity data show oceanic crust across most of the claimed Kumari Kandam region.' },
  { id: 'pr-02', category: 'Geological', requirement: 'Crustal thickness consistent with a continent (~30-40km)', currentlyObserved: false, note: 'Regional crust is largely oceanic-thickness (~7-10km), except isolated microcontinental fragments like Mauritia.' },
  { id: 'pr-03', category: 'Geological', requirement: 'Seismic structure matching continental basement', currentlyObserved: false, note: 'No continuous continental seismic signature spans the claimed landmass.' },
  { id: 'pr-04', category: 'Geological', requirement: 'Gravity anomalies consistent with buried continental crust', currentlyObserved: true, note: 'Localized anomalies exist (e.g., near Mauritius/Mauritia) but only for small, isolated fragments, not a giant continent.' },
  { id: 'pr-05', category: 'Geological', requirement: 'Magnetic signatures consistent with continental rock', currentlyObserved: true, note: 'Again, only in isolated microcontinental fragments, not a continuous large landmass.' },
  { id: 'pr-06', category: 'Geological', requirement: 'Ancient zircons indicating continental crust', currentlyObserved: true, note: 'Zircons of continental age found in Mauritius beach sand; supports a small buried fragment (Mauritia), not a giant continent.' },
  { id: 'pr-07', category: 'Geological', requirement: 'Recovered continental rock samples from the seafloor', currentlyObserved: false, note: 'No large-scale continental rock recovery across the claimed Kumari Kandam footprint.' },
  { id: 'pr-08', category: 'Archaeological', requirement: 'Submerged large-scale settlements matching a continental civilization', currentlyObserved: false, note: 'Only scattered, small-scale, contested submerged structures near the coast have been surveyed.' },
  { id: 'pr-09', category: 'Archaeological', requirement: 'Tools and artifacts recovered from the claimed landmass', currentlyObserved: false, note: 'No systematic recovery of an ancient toolkit from the deep submerged area.' },
  { id: 'pr-10', category: 'Archaeological', requirement: 'Pottery sequences tying the region to a specific culture and era', currentlyObserved: false, note: 'No pottery sequence has been recovered from the deep claimed landmass.' },
  { id: 'pr-11', category: 'Archaeological', requirement: 'Architectural structures (foundations, walls, streets)', currentlyObserved: false, note: 'Coastal structures near Poompuhar/Mahabalipuram exist but are shallow, limited, and debated - not continental-scale.' },
  { id: 'pr-12', category: 'Archaeological', requirement: 'Burial sites or cemeteries', currentlyObserved: false, note: 'None documented within the deep submerged claim area.' },
  { id: 'pr-13', category: 'Archaeological', requirement: 'Continuous cultural layers showing occupation over time', currentlyObserved: false, note: 'No stratified occupation sequence has been recovered offshore at continental scale.' },
  { id: 'pr-14', category: 'Paleoenvironmental', requirement: 'Terrestrial pollen assemblages in core samples from the claimed area', currentlyObserved: false, note: 'Deep-sea cores in the region show marine, not terrestrial, depositional signatures for the relevant time depth.' },
  { id: 'pr-15', category: 'Paleoenvironmental', requirement: 'Freshwater sediment layers', currentlyObserved: false, note: 'No freshwater lacustrine or riverine sediment sequences identified at the claimed continental depths.' },
  { id: 'pr-16', category: 'Paleoenvironmental', requirement: 'Terrestrial fauna remains (land animal fossils)', currentlyObserved: false, note: 'No land-animal fossil record recovered from the deep claimed area.' },
  { id: 'pr-17', category: 'Paleoenvironmental', requirement: 'Ancient soils (paleosols)', currentlyObserved: false, note: 'No paleosol horizons documented within the claimed submerged footprint.' },
  { id: 'pr-18', category: 'Chronological', requirement: 'Reliable absolute dating tying submergence to a specific era', currentlyObserved: false, note: 'No agreed absolute dating links a "sinking event" to a specific date matching the literary narrative.' },
  { id: 'pr-19', category: 'Chronological', requirement: 'Stratigraphic continuity between claimed land surface and present seabed', currentlyObserved: false, note: 'No unbroken stratigraphic sequence has been documented connecting a former land surface to today\'s seafloor across the claimed area.' },
];
