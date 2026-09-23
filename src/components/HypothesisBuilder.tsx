import { useState } from 'react';
import { FlaskConical } from 'lucide-react';
import {
  assessHypothesis,
  EvidenceType,
  HypothesisAssessment,
  LandmassSize,
  Location,
  TimePeriod,
} from '../data/hypothesisBuilder';

const SIZES: LandmassSize[] = ['Small', 'Medium', 'Giant'];
const LOCATIONS: Location[] = ['South India', 'Madagascar', 'Indian Ocean', 'Antarctica region'];
const EVIDENCE_TYPES: EvidenceType[] = ['Literature', 'Geology', 'Archaeology', 'Biogeography'];
const PERIODS: TimePeriod[] = ['10,000 years', '50,000 years', '1 million years', '100 million years'];

function Pill({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 text-xs font-carto uppercase tracking-wider rounded border transition-colors ${
        active ? 'bg-[#2B211A] text-[#FAF6EE] border-[#9A7B45]' : 'bg-[#241B15] text-[#CDBB96]/70 border-[#463429]'
      }`}
    >
      {children}
    </button>
  );
}

export function HypothesisBuilder() {
  const [size, setSize] = useState<LandmassSize>('Medium');
  const [location, setLocation] = useState<Location>('South India');
  const [evidenceTypes, setEvidenceTypes] = useState<EvidenceType[]>(['Literature']);
  const [period, setPeriod] = useState<TimePeriod>('10,000 years');
  const [result, setResult] = useState<HypothesisAssessment | null>(null);

  const toggleEvidence = (e: EvidenceType) => {
    setEvidenceTypes((prev) => (prev.includes(e) ? prev.filter((x) => x !== e) : [...prev, e]));
  };

  return (
    <section id="hypothesis-builder" className="py-20 bg-[#1A1511] border-b border-[#463429]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-carto font-bold tracking-widest uppercase text-[#9A7B45] mb-2">
            <FlaskConical className="w-4 h-4" />
            <span>Build Your Own Hypothesis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E6D7B9] tracking-wide">Hypothesis Builder</h2>
          <p className="mt-2 text-base text-[#CDBB96] font-serif max-w-2xl leading-relaxed">
            An educational simulation, not a conclusion engine. Choose parameters and get a rule-based compatibility assessment.
          </p>
        </div>

        <div className="space-y-5 mb-6">
          <div>
            <div className="text-xs font-carto uppercase tracking-wider text-[#9A7B45] mb-2">Landmass Size</div>
            <div className="flex flex-wrap gap-2">{SIZES.map((s) => <Pill key={s} active={size === s} onClick={() => setSize(s)}>{s}</Pill>)}</div>
          </div>
          <div>
            <div className="text-xs font-carto uppercase tracking-wider text-[#9A7B45] mb-2">Location</div>
            <div className="flex flex-wrap gap-2">{LOCATIONS.map((l) => <Pill key={l} active={location === l} onClick={() => setLocation(l)}>{l}</Pill>)}</div>
          </div>
          <div>
            <div className="text-xs font-carto uppercase tracking-wider text-[#9A7B45] mb-2">Evidence Type(s)</div>
            <div className="flex flex-wrap gap-2">{EVIDENCE_TYPES.map((e) => <Pill key={e} active={evidenceTypes.includes(e)} onClick={() => toggleEvidence(e)}>{e}</Pill>)}</div>
          </div>
          <div>
            <div className="text-xs font-carto uppercase tracking-wider text-[#9A7B45] mb-2">Time Period</div>
            <div className="flex flex-wrap gap-2">{PERIODS.map((p) => <Pill key={p} active={period === p} onClick={() => setPeriod(p)}>{p}</Pill>)}</div>
          </div>
          <button
            onClick={() => setResult(assessHypothesis({ size, location, evidenceTypes, period }))}
            className="px-5 py-2.5 text-xs font-bold font-carto uppercase tracking-wider rounded bg-[#2B211A] hover:bg-[#342820] text-[#FAF6EE] border border-[#9A7B45]"
          >
            Generate Assessment
          </button>
        </div>

        {result && (
          <div className="p-5 rounded border border-[#463429] bg-[#241B15] space-y-4">
            <div><span className="text-[#9A7B45] font-bold text-xs font-carto uppercase">Geological Compatibility: </span><span className="text-sm font-serif text-[#CDBB96]">{result.geologicalCompatibility}</span></div>
            <div><span className="text-[#9A7B45] font-bold text-xs font-carto uppercase">Literary Compatibility: </span><span className="text-sm font-serif text-[#CDBB96]">{result.literaryCompatibility}</span></div>
            <div><span className="text-[#9A7B45] font-bold text-xs font-carto uppercase">Archaeological Requirements: </span><span className="text-sm font-serif text-[#CDBB96]">{result.archaeologicalRequirements}</span></div>
            <div>
              <div className="text-[#9A7B45] font-bold text-xs font-carto uppercase mb-1">Required Evidence</div>
              <ul className="list-disc list-inside text-sm font-serif text-[#CDBB96] space-y-1">{result.requiredEvidence.map((r, i) => <li key={i}>{r}</li>)}</ul>
            </div>
            <div>
              <div className="text-[#8B5E4A] font-bold text-xs font-carto uppercase mb-1">Major Contradictions</div>
              <ul className="list-disc list-inside text-sm font-serif text-[#CDBB96] space-y-1">{result.majorContradictions.map((r, i) => <li key={i}>{r}</li>)}</ul>
            </div>
            <div>
              <div className="text-[#53665C] font-bold text-xs font-carto uppercase mb-1">Unresolved Questions</div>
              <ul className="list-disc list-inside text-sm font-serif text-[#CDBB96] space-y-1">{result.unresolvedQuestions.map((r, i) => <li key={i}>{r}</li>)}</ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
