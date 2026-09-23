export interface PandyanEntry {
  id: string;
  subject: string;
  relevance: string;
}

export const PANDYAN_TRADITION: PandyanEntry[] = [
  {
    id: 'pt-patron-of-sangams',
    subject: 'Pandyan kings as patrons of all three legendary Sangams',
    relevance: 'Tradition credits a continuous Pandyan dynasty with sponsoring poetic academies across thousands of legendary years, blending real historical Pandyan rulers of the Sangam era with a much older, unverifiable legendary king-list.',
  },
  {
    id: 'pt-capital-moves',
    subject: 'Successive Pandyan capital relocations (Then Madurai → Kapatapuram → Madurai)',
    relevance: 'The tradition of the capital repeatedly moving north as the sea claimed land is central to the Kumari Kandam narrative; only the final Madurai is historically and archaeologically attested.',
  },
  {
    id: 'pt-madurai-historicity',
    subject: 'Historical Madurai as a real Pandyan capital',
    relevance: 'Madurai is well attested archaeologically and in Greco-Roman trade accounts (e.g., the Periplus of the Erythraean Sea) as a real, continuously inhabited political and cultural center — unlike its legendary predecessors.',
  },
  {
    id: 'pt-velvikkudi-plates',
    subject: 'Velvikkudi copper plates',
    relevance: 'A genuine early medieval Pandyan copper-plate inscription (c. 8th century CE) that traces a royal genealogy; historians treat its early sections as legendary/genealogical convention rather than verified fact, illustrating how real inscriptions can still contain traditional embellishment.',
  },
  {
    id: 'pt-periplus-reference',
    subject: 'Pandyan kingdom in the Periplus of the Erythraean Sea (1st century CE)',
    relevance: 'An independent Greco-Roman merchant account describing the "Kingdom of Pandion," corroborating the historical existence of a Pandyan polity engaged in Indian Ocean trade during the Sangam era.',
  },
  {
    id: 'pt-megasthenes-reference',
    subject: 'Pandyan kingdom mentioned by Megasthenes (via later classical sources)',
    relevance: 'Further early external corroboration of a historical Pandyan polity in far south India, independent of Tamil literary sources.',
  },
  {
    id: 'pt-sangam-legend-vs-inscriptions',
    subject: 'Divergence between inscriptional/epigraphic Pandyan chronology and the legendary Sangam king-lists',
    relevance: 'Epigraphists (e.g., K.A. Nilakanta Sastri) note that verified Pandyan inscriptions only reliably reconstruct a chronology from roughly the early centuries CE onward, sharply diverging from the vastly longer spans claimed in the Sangam legend.',
  },
];
