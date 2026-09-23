import { ResearchNote } from '../types';

export interface NoteTemplate {
  id: string;
  title: string;
  tag: ResearchNote['tag'];
  skeleton: string;
}

export const NOTE_TEMPLATES: NoteTemplate[] = [
  { id: 'tmpl-lit', title: 'Literary Source Analysis', tag: 'Mythology', skeleton: '## Source\n\n## Date / Period\n\n## Key Passage or Claim\n\n## Context Within the Work\n\n## What It Does and Does Not Establish\n\n## Related Sources' },
  { id: 'tmpl-arch', title: 'Archaeological Evidence', tag: 'Science', skeleton: '## Site / Find\n\n## Location & Depth\n\n## Method Used\n\n## Dating Evidence\n\n## Interpretation(s) in the Literature\n\n## Confidence Level & Open Questions' },
  { id: 'tmpl-geo', title: 'Geological Evidence', tag: 'Tectonics', skeleton: '## Feature / Formation\n\n## Data Type (seismic/gravity/magnetic/zircon/etc.)\n\n## Source Study\n\n## What It Shows\n\n## Limits of Interpretation' },
  { id: 'tmpl-claim', title: 'Claim Verification', tag: 'Kumari Kandam', skeleton: '## Claim Being Checked\n\n## Original Source of Claim\n\n## Supporting Evidence Found\n\n## Contradicting Evidence Found\n\n## Verdict (Verified / Partially Supported / Unsupported)' },
  { id: 'tmpl-crit', title: 'Source Criticism', tag: 'General', skeleton: '## Source\n\n## Author & Date\n\n## Purpose & Audience\n\n## Primary or Secondary\n\n## Distance From the Event Described\n\n## Potential Limitations / Biases' },
  { id: 'tmpl-question', title: 'Research Question', tag: 'General', skeleton: '## Question\n\n## Why It Matters\n\n## What Would Answer It\n\n## Related Existing Evidence\n\n## Next Steps' },
  { id: 'tmpl-hyp', title: 'Hypothesis', tag: 'Science', skeleton: '## Hypothesis Statement\n\n## Assumptions\n\n## Predicted Evidence If True\n\n## Predicted Evidence If False\n\n## Current Status' },
  { id: 'tmpl-counter', title: 'Counterargument', tag: 'General', skeleton: '## Original Claim\n\n## Counterargument\n\n## Supporting Evidence for Counterargument\n\n## Strength of Counterargument\n\n## Remaining Uncertainty' },
  { id: 'tmpl-litreview', title: 'Literature Review', tag: 'General', skeleton: '## Topic\n\n## Sources Reviewed\n\n## Points of Agreement\n\n## Points of Disagreement\n\n## Gaps in Current Research' },
  { id: 'tmpl-field', title: 'Field Observation', tag: 'Science', skeleton: '## Location\n\n## Date of Observation\n\n## What Was Observed\n\n## Instruments / Methods Used\n\n## Preliminary Interpretation' },
  { id: 'tmpl-map', title: 'Map Analysis', tag: 'Biogeography', skeleton: '## Map / Reconstruction Referenced\n\n## Time Period Depicted\n\n## Data Basis (bathymetry/seismic/paleogeography/speculative)\n\n## What the Map Supports\n\n## What the Map Does Not Support' },
];
