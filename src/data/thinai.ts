export interface ThinaiEntry {
  id: string;
  name: string;
  tamil: string;
  environment: string;
  associatedEmotion: string;
  flora?: string[];
  fauna?: string[];
  occupation: string[];
  literaryReferences?: string[];
}

export const THINAI: ThinaiEntry[] = [
  {
    id: 'thinai-kurinji',
    name: 'Kurinji',
    tamil: 'குறிஞ்சி',
    environment: 'Mountainous / hill country',
    associatedEmotion: 'Union of lovers (punartal) — first meeting and passion',
    flora: ['Kurinji flower (Strobilanthes kunthiana)', 'bamboo', 'jackfruit'],
    fauna: ['elephants', 'monkeys', 'peacocks'],
    occupation: ['hill cultivation', 'honey gathering', 'hunting'],
    literaryReferences: ['Akananuru', 'Kalithokai hill-country poems'],
  },
  {
    id: 'thinai-mullai',
    name: 'Mullai',
    tamil: 'முல்லை',
    environment: 'Forest and pastoral woodland',
    associatedEmotion: 'Patient waiting (irutal) — waiting for a lover\'s return',
    flora: ['Mullai (jasmine) creeper', 'kaya tree'],
    fauna: ['cattle', 'deer'],
    occupation: ['cattle herding', 'shifting cultivation'],
    literaryReferences: ['Akananuru mullai-thinai poems', 'Pattuppattu pastoral idylls'],
  },
  {
    id: 'thinai-marutham',
    name: 'Marutham',
    tamil: 'மருதம்',
    environment: 'Riverine agricultural plains',
    associatedEmotion: 'Lovers\' quarrel and estrangement (utal) — infidelity, jealousy, reconciliation',
    flora: ['Marutham tree (Arjuna/Terminalia)', 'paddy'],
    fauna: ['water buffalo', 'fish', 'waterfowl'],
    occupation: ['settled agriculture', 'irrigation farming'],
    literaryReferences: ['Akananuru marutham poems', 'Paripadal river descriptions'],
  },
  {
    id: 'thinai-neithal',
    name: 'Neithal',
    tamil: 'நெய்தல்',
    environment: 'Coastal / seashore',
    associatedEmotion: 'Anxious longing (irangal) — pining and worry over separation, often tied to seafaring',
    flora: ['Neithal (blue water-lily)', 'screwpine (thazhai)'],
    fauna: ['fish', 'crabs', 'seabirds'],
    occupation: ['fishing', 'salt-making', 'pearl diving', 'maritime trade'],
    literaryReferences: ['Pattinappalai (coastal Puhar)', 'Akananuru neithal poems'],
  },
  {
    id: 'thinai-paalai',
    name: 'Paalai',
    tamil: 'பாலை',
    environment: 'Arid wasteland / desert-margin (considered a derived, not a distinct geographic, thinai — arising when kurinji or mullai lands turn arid in summer)',
    associatedEmotion: 'Separation (pirivu) — lovers parted by hardship, migration, or a husband\'s journey for wealth',
    flora: ['Palai tree (Wrightia)', 'thorny scrub'],
    fauna: ['wolves', 'vultures'],
    occupation: ['perilous travel', 'banditry (in poetic depiction)', 'seasonal migration'],
    literaryReferences: ['Akananuru palai-thinai poems', 'Purananuru journey poems'],
  },
];
