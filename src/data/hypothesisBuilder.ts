export type LandmassSize = 'Small' | 'Medium' | 'Giant';
export type Location = 'South India' | 'Madagascar' | 'Indian Ocean' | 'Antarctica region';
export type EvidenceType = 'Literature' | 'Geology' | 'Archaeology' | 'Biogeography';
export type TimePeriod = '10,000 years' | '50,000 years' | '1 million years' | '100 million years';

export interface HypothesisInput {
  size: LandmassSize;
  location: Location;
  evidenceTypes: EvidenceType[];
  period: TimePeriod;
}

export interface HypothesisAssessment {
  geologicalCompatibility: string;
  literaryCompatibility: string;
  archaeologicalRequirements: string;
  requiredEvidence: string[];
  majorContradictions: string[];
  unresolvedQuestions: string[];
}

export function assessHypothesis(input: HypothesisInput): HypothesisAssessment {
  const { size, location, evidenceTypes, period } = input;
  const contradictions: string[] = [];
  const requiredEvidence: string[] = [];
  const unresolved: string[] = [];

  // Geological compatibility
  let geological = '';
  if (size === 'Giant' && (period === '10,000 years' || period === '50,000 years')) {
    geological = 'Low compatibility: a giant continental landmass could not form or fully submerge within this short a timeframe by known plate tectonic rates (a few cm/year).';
    contradictions.push('Plate tectonic rates are far too slow to grow or sink a giant continent within tens of thousands of years.');
  } else if (size === 'Giant' && period === '1 million years') {
    geological = 'Low-moderate compatibility: still very fast for continental-scale creation/destruction, though closer to plausible tectonic timescales for smaller crustal changes.';
  } else if (size === 'Giant' && period === '100 million years') {
    geological = 'Higher compatibility: consistent with the real breakup of Gondwana and formation of microcontinents like Mauritia over tens of millions of years.';
  } else if (size === 'Small' || size === 'Medium') {
    geological = 'Regional coastal or shelf-level land change of this size is broadly consistent with known sea-level and subsidence processes, especially over longer periods.';
  }
  if (location === 'Indian Ocean' && size !== 'Small') {
    requiredEvidence.push('Direct seismic/gravity confirmation of continental crust beneath the claimed footprint (currently only found for the small Mauritia fragment).');
  }

  // Literary compatibility
  let literary = '';
  if (location === 'South India' && (evidenceTypes.includes('Literature'))) {
    literary = 'High compatibility: Sangam-era and later Tamil literary references to land lost to the sea directly discuss the South Indian coast.';
  } else {
    literary = 'Low-moderate compatibility: the Tamil literary tradition specifically centers South India; applying it to other locations requires additional, currently unsupported inference.';
  }

  // Archaeological requirements
  const archaeological = size === 'Giant'
    ? 'Would require large-scale, continuous settlement and artifact evidence across the entire submerged footprint - not yet found.'
    : 'Would require localized coastal settlement evidence, which is partially present (contested) near Poompuhar and similar sites.';

  requiredEvidence.push('Radiocarbon or OSL dating tying any submerged structure to a specific historical period.');
  if (evidenceTypes.includes('Biogeography')) {
    requiredEvidence.push('Biogeographic distribution patterns better explained by a land bridge than by plate tectonics and ocean dispersal.');
    contradictions.push('Modern biogeography is well explained by plate tectonics and dispersal, reducing the need for a land-bridge hypothesis.');
  }
  if (evidenceTypes.includes('Geology')) {
    requiredEvidence.push('Continental (not oceanic) crust confirmed by seismic/gravity surveys across the claimed area.');
  }
  if (evidenceTypes.includes('Archaeology')) {
    requiredEvidence.push('Systematic, dated excavation of submerged structures beyond isolated, shallow coastal finds.');
  }

  unresolved.push('How would a hypothesized submergence event align, chronologically, with the geological record?');
  unresolved.push('What distinguishes literary/cultural memory of coastal change from a literal claim of continental-scale submergence?');
  if (size === 'Giant') {
    unresolved.push('Why has no continental crust been detected across most of the claimed footprint by modern geophysics?');
  }

  return {
    geologicalCompatibility: geological,
    literaryCompatibility: literary,
    archaeologicalRequirements: archaeological,
    requiredEvidence,
    majorContradictions: contradictions.length ? contradictions : ['No direct contradictions flagged for this specific combination, but this does not itself constitute confirmation.'],
    unresolvedQuestions: unresolved,
  };
}
