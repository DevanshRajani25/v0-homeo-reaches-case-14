// Supports 25+ keyword categories with fuzzy matching and priority ordering

export type KeywordCategory =
  | "name"
  | "age"
  | "marital"
  | "occupation"
  | "address"
  | "location"
  | "sensation"
  | "aggravation"
  | "amelioration"
  | "concomitant"
  | "chief"
  | "family"
  | "past"
  | "appetite"
  | "tongue"
  | "desire"
  | "aversion"
  | "thirst"
  | "stool"
  | "urine"
  | "sweat"
  | "sleep"
  | "dreams"
  | "thermal"
  | "mental"

export interface KeywordMatch {
  category: KeywordCategory
  priority: number
  confidence: number
}

export interface DetectionResult {
  matches: KeywordMatch[]
  primaryMatch: KeywordMatch | null
  detectedText: string
}

// Normalize text for matching
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

// Check if keyword phrase matches in normalized text
export function matchesKeyword(keyword: string, normalizedText: string): boolean {
  if (keyword.includes("+")) {
    const tokens = keyword.split("+").map((t) => t.trim())
    return tokens.every((tok) => normalizedText.includes(tok))
  }
  return normalizedText.includes(keyword)
}

// Priority order for keyword categories
const PRIORITY_ORDER: Record<KeywordCategory, number> = {
  chief: 100,
  sensation: 90,
  aggravation: 85,
  amelioration: 85,
  concomitant: 80,
  location: 75,
  appetite: 60,
  sleep: 60,
  thermal: 60,
  mental: 60,
  thirst: 55,
  stool: 55,
  urine: 55,
  sweat: 55,
  dreams: 55,
  tongue: 50,
  desire: 50,
  aversion: 50,
  family: 40,
  past: 40,
  name: 30,
  age: 30,
  marital: 30,
  occupation: 30,
  address: 30,
}

// Master keyword list for all categories
export const MASTER_KEYWORDS: Record<KeywordCategory, string[]> = {
  name: [
    "name",
    "what+name",
    "what's+name",
    "who+you",
    "your+name",
    "tell+name",
    "may+i+know+name",
    "who+are+you",
    "introduce",
    "introduction",
    "identity",
  ],
  age: [
    "age",
    "your+age",
    "what+age",
    "how+old",
    "what's+age",
    "tell+age",
    "may+i+know+age",
    "years+old",
    "how+many+years",
    "current+age",
  ],
  marital: [
    "married",
    "marital+status",
    "single",
    "husband",
    "spouse",
    "your+marriage",
    "what+marital",
    "are+you+married",
    "marriage",
    "unmarried",
  ],
  occupation: [
    "occupation",
    "job",
    "work",
    "profession",
    "service",
    "what+do+you+do",
    "what+work",
    "what+is+your+job",
    "tell+job",
    "what+profession",
    "are+you+working",
    "where+you+work",
    "what+service",
    "your+occupation",
    "what+you+do+in+life",
  ],
  address: [
    "address",
    "house",
    "home",
    "where+live",
    "where+stay",
    "your+house",
    "residence",
    "location",
    "place",
    "where+from",
    "your+address",
    "living+place",
    "current+address",
    "home+address",
    "present+address",
  ],
  location: [
    "where+pain",
    "where+problem",
    "which+part+pain",
    "pain+area",
    "affected+part",
    "which+side",
    "complaint+location",
    "where+ache",
    "your+suffering",
    "which+place+hurt",
    "body+part+pain",
    "exact+pain+place",
    "where+trouble",
    "location+complaint",
    "site+pain",
  ],
  sensation: [
    "throbbing",
    "beating",
    "bursting",
    "pulsating",
    "hammering",
    "stabbing",
    "sharp+pain",
    "splitting",
    "headache+pain",
    "painful",
    "hurting",
    "pounding",
    "intense+headache",
    "ache+throbbing",
    "pressing",
  ],
  aggravation: [
    "when+worse",
    "worse",
    "worsen",
    "aggravation",
    "when+aggravation",
    "aggravated+with",
    "aggravates",
    "worse+with",
    "worsen+with",
    "triggers+pain",
    "pain+increases",
    "pain+worse",
    "hurts+more",
    "headache+worse",
    "pounding+increases",
    "throbbing+worse",
    "pain+aggravated",
    "gets+worse",
    "intense+headache",
    "pain+trigger",
  ],
  amelioration: [
    "when+good",
    "feel+good",
    "amelioration",
    "ameliorates",
    "ameliorates+with",
    "modalities",
    "relief",
    "eases",
    "improve",
    "lessen+pain",
    "headache+better",
    "relieved+with",
    "reduces+pain",
    "pain+eases",
    "pain+decreases",
    "rest",
    "quiet+place",
    "dark+room",
    "cold+compress",
    "calms+down",
  ],
  concomitant: [
    "any+other+complaint",
    "other+illness",
    "concomitant",
    "concomitant+complaint",
    "other+problem",
    "any+additional+symptom",
    "other+symptoms",
    "additional+complaint",
    "any+other+issue",
    "coexisting+problem",
    "associated+complaint",
    "also+suffer",
    "other+discomfort",
    "additional+symptom+present",
    "anything+else+wrong",
  ],
  chief: [
    "chief+complaint",
    "main+problem",
    "primary+issue",
    "main+complaint",
    "what+suffering",
    "problem",
    "complaint",
    "issue",
    "headache",
    "pain+head",
    "throbbing+headache",
    "forehead+pain",
    "temples+pain",
    "intense+headache",
    "worst+pain",
  ],
  family: [
    "family+history",
    "disease+in+family",
    "parents+health",
    "mother+illness",
    "father+illness",
    "sibling+health",
    "hereditary",
    "genetic+issue",
    "any+illness+in+family",
    "family+disease",
    "family+problem",
    "anyone+sick+home",
    "relatives+illness",
    "family+suffering",
    "runs+in+family",
  ],
  past: [
    "past+history",
    "illness+history",
    "medical+history",
    "previous+disease",
    "any+illness+before",
    "childhood+disease",
    "suffered+before",
    "old+health+issue",
    "disease+suffered",
    "previous+complaint",
    "any+treatment+before",
    "past+suffering",
    "earlier+illness",
    "history+of+sickness",
    "before+this+illness",
  ],
  appetite: [
    "appetite",
    "hunger",
    "eat",
    "ate",
    "how+eat",
    "food",
    "meal",
    "diet",
    "eating+habit",
    "like+to+eat",
    "what+you+eat",
    "hungry",
    "taste+for+food",
    "desire+to+eat",
    "craving",
  ],
  tongue: [
    "tongue",
    "show+tongue",
    "coated",
    "tongue+coated",
    "white+tongue",
    "red+tongue",
    "dry+tongue",
    "how+tongue",
    "see+tongue",
    "look+tongue",
    "tongue+feel",
    "burning+tongue",
    "inflamed+tongue",
    "rough+tongue",
    "tongue+colour",
  ],
  desire: [
    "desire",
    "any+desire",
    "craving",
    "cravings",
    "any+cravings",
    "food+like",
    "like+to+eat",
    "want+to+eat",
    "feel+like+eating",
    "particular+food",
    "any+favorite+food",
    "longing",
    "wish+to+eat",
    "special+desire",
    "taste+for",
  ],
  aversion: [
    "aversion",
    "aversions+from",
    "aversion+for",
    "don't+like",
    "doesn't+like",
    "dislike",
    "any+dislike",
    "what+don't+like",
    "not+fond+of",
    "don't+prefer",
    "hate+to+eat",
    "any+food+hate",
    "don't+enjoy",
    "refuse+to+eat",
    "strong+dislike",
  ],
  thirst: [
    "thirst",
    "how+drink",
    "thirsty",
    "how+thirsty",
    "water",
    "how+water",
    "drink",
    "how+drink",
    "need+water",
    "do+you+drink",
    "drinking+habit",
    "do+you+feel+thirsty",
    "amount+of+water",
    "glass+water",
    "frequency+drink",
  ],
  stool: [
    "stool",
    "how+stool",
    "how+passes",
    "passing+stool",
    "bowel",
    "motion",
    "motions",
    "how+bowel",
    "your+stool",
    "pass+stool",
    "loose+stool",
    "hard+stool",
    "constipation",
    "diarrhea",
    "frequency+stool",
  ],
  urine: [
    "urine",
    "how+urinates",
    "urination",
    "urinates",
    "passing+urine",
    "pass+urine",
    "how+urine",
    "your+urine",
    "pee",
    "passing+pee",
    "micturition",
    "frequency+urine",
    "burning+urine",
    "pain+urine",
    "urine+problem",
  ],
  sweat: [
    "sweat",
    "how+sweat",
    "sweaty",
    "odour",
    "smell",
    "perspiration",
    "any+sweat",
    "sweating",
    "how+perspiration",
    "sweat+much",
    "profuse+sweat",
    "sweat+problem",
    "excessive+sweating",
    "body+odour",
    "smelly+sweat",
  ],
  sleep: [
    "sleep",
    "sleep+cycle",
    "how+sleep",
    "any+sleep",
    "do+sleep",
    "sleeping",
    "sleep+well",
    "sleep+problem",
    "disturbed+sleep",
    "night+sleep",
    "day+sleep",
    "sleepiness",
    "can't+sleep",
    "difficulty+sleep",
    "sleep+pattern",
  ],
  dreams: [
    "dreams",
    "dreaming",
    "any+dream",
    "nightmare",
    "bad+dream",
    "dream+last+night",
    "sleep+dream",
    "dream+type",
    "dream+repeated",
    "frightening+dream",
    "pleasant+dream",
    "dream+remembered",
    "dreams+at+night",
    "dreams+during+sleep",
    "dream+situation",
  ],
  thermal: [
    "chill",
    "cold",
    "fever",
    "heat",
    "hot",
    "temperature",
    "warmth",
    "cold+body",
    "sweating+heat",
    "shivering",
    "body+temperature",
    "feel+cold",
    "feel+hot",
    "sensitive+to+heat",
    "sensitive+to+cold",
  ],
  mental: [
    "mental",
    "mental+state",
    "mind",
    "mood",
    "emotions",
    "restless",
    "anxious",
    "fear",
    "irritable",
    "angry",
    "sad",
    "grief",
    "confused",
    "panic",
    "nervous",
    "stress",
    "tension",
    "mood+swings",
  ],
}

// Detect keywords in user input
export function detectKeywords(userInput: string): DetectionResult {
  const normalized = normalize(userInput)
  const matches: KeywordMatch[] = []

  for (const [category, keywords] of Object.entries(MASTER_KEYWORDS)) {
    for (const keyword of keywords) {
      if (matchesKeyword(keyword, normalized)) {
        matches.push({
          category: category as KeywordCategory,
          priority: PRIORITY_ORDER[category as KeywordCategory],
          confidence: 0.9,
        })
        break // Only count once per category
      }
    }
  }

  // Sort by priority (descending)
  matches.sort((a, b) => b.priority - a.priority)

  return {
    matches,
    primaryMatch: matches[0] || null,
    detectedText: normalized,
  }
}

// Log detection for analytics
export function logDetection(caseId: number, userInput: string, result: DetectionResult, response: string) {
  const log = {
    timestamp: new Date().toISOString(),
    caseId,
    userInput,
    detectedCategories: result.matches.map((m) => m.category),
    primaryCategory: result.primaryMatch?.category || null,
    response,
  }

  // Store in localStorage for analytics (max 100 entries)
  const existing = JSON.parse(localStorage.getItem("hr_detection_logs") || "[]")
  const updated = [log, ...existing].slice(0, 100)
  localStorage.setItem("hr_detection_logs", JSON.stringify(updated))
}
