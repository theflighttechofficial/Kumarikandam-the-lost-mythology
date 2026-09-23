export interface SeaLevelPeriod {
  id: string;
  label: string;
  yearsAgo: string;
  relativeSeaLevel: string;
  description: string;
  coastlineNote: string;
}

export const SEA_LEVEL_PERIODS: SeaLevelPeriod[] = [
  {
    id: 'sl-lgm',
    label: 'Last Glacial Maximum (LGM)',
    yearsAgo: '~20,000 years ago',
    relativeSeaLevel: '~120 m lower than today',
    description: 'Vast ice sheets locked up water worldwide. India and Sri Lanka were joined by a broad exposed shelf across the modern Palk Strait and Gulf of Mannar.',
    coastlineNote: 'The southern Indian coastline extended tens of kilometres further out than today, though nowhere near a continent-scale landmass.',
  },
  {
    id: 'sl-deglac-early',
    label: 'Early Deglaciation',
    yearsAgo: '~14,700 years ago',
    relativeSeaLevel: '~100 m lower',
    description: 'Meltwater Pulse 1A drives a rapid multi-metre jump in global sea level over a few centuries as ice sheets begin collapsing.',
    coastlineNote: 'Coastal plains that had been dry land for millennia begin flooding relatively quickly by geological standards, though still over centuries, not a single "day."',
  },
  {
    id: 'sl-holocene-early',
    label: 'Early Holocene',
    yearsAgo: '~11,000 years ago',
    relativeSeaLevel: '~60 m lower',
    description: 'Sea level rise continues rapidly as global ice sheets shrink. Large formerly-exposed shelves (like Sundaland and the Persian Gulf basin) shrink substantially.',
    coastlineNote: 'The India–Sri Lanka land connection narrows but likely still persists in places.',
  },
  {
    id: 'sl-holocene-mid',
    label: 'Mid-Holocene',
    yearsAgo: '~8,000 years ago',
    relativeSeaLevel: '~15–20 m lower',
    description: 'Rate of rise slows markedly as most land ice has already melted. Sea level approaches modern levels.',
    coastlineNote: 'The Palk Strait/Gulf of Mannar land bridge is largely submerged, matching the geological window many scholars associate with the oldest layers of "lost land" memory.',
  },
  {
    id: 'sl-holocene-late',
    label: 'Late Holocene Highstand',
    yearsAgo: '~6,000–4,000 years ago',
    relativeSeaLevel: 'Locally ~1–2 m higher than today in parts of the Indian Ocean',
    description: 'Many tropical coastlines briefly experienced sea levels slightly above modern levels before gradually falling back, due to ongoing glacial isostatic adjustment.',
    coastlineNote: 'This highstand — not a sudden catastrophe — likely eroded and reshaped low-lying settlements along the Tamil coast over centuries.',
  },
  {
    id: 'sl-historical',
    label: 'Historical Era',
    yearsAgo: '~2,500–1,000 years ago',
    relativeSeaLevel: 'Close to modern, with local fluctuation',
    description: 'Documented storm surges, tsunamis, and coastal erosion (e.g. at Poompuhar/Kaveripattinam) occur against a broadly stable sea level baseline.',
    coastlineNote: 'These are the events most plausibly echoed in Sangam-era poetic references to the sea "taking" Pandyan land — real, but local and episodic, not a sunken continent.',
  },
  {
    id: 'sl-modern',
    label: 'Modern',
    yearsAgo: 'Present day',
    relativeSeaLevel: 'Baseline (0 m)',
    description: 'Sea level is now rising again due to anthropogenic warming, at a measured, monitored rate — a very different process from any of the above.',
    coastlineNote: 'The present coastline is the reference frame against which all these earlier positions are measured.',
  },
];

export const SEA_LEVEL_DISCLAIMER =
  'This is a generalized paleogeographic visualization and should not be interpreted as a reconstruction of Kumari Kandam. It illustrates well-documented global and regional sea-level change, not the existence of a sunken continent or a specific lost civilization.';
