/**
 * CASE 16 - RUHI (PULSATILLA NIGRICANS)
 * PCOD (Polycystic Ovarian Disease)
 * Patient: Mild, soft, emotional, tearful, seeks reassurance, changeable mood
 * Remedy: PULSATILLA NIGRICANS - Irregular delayed menses, better by consolation & fresh air, thirstless
 * 
 * SYSTEM: Robust keyword detection with natural language processing
 * - Handles casual greetings (h/H, o/O)
 * - Detects keywords from natural user language
 * - Maps to appropriate PULSATILLA responses
 * - Never fails to respond
 */

export function detectAndRespond(question: string): string {
  const q = question.toLowerCase().trim()

  // ===== PRIORITY 1: CASUAL GREETING RULES (single word only) =====
  // Rule 1: Single word starting with h/H
  if (q.length === 1 && /^h/i.test(q)) {
    return "Hello doctor.. (soft smile, gentle tone)"
  }

  // Rule 2: Single word starting with o/O
  if (q.length === 1 && /^o/i.test(q)) {
    return "Okk doctor.. (nods slowly, calm face)"
  }

  // ===== ALL KEYWORD RESPONSES (as specified) =====
  const keywordResponses: Record<string, string[]> = {
    name: [
      "My name is Ruhi doctor… (soft voice, slight smile) I feel shy talking about my problem.",
      "Ruhi… (looks down, emotional eyes)",
    ],
    age: [
      "I'm 23 years old doctor… (gentle tone)",
      "23 doctor… (nods slowly, calm expression)",
    ],
    occupation: [
      "I'm a student doctor… (worried face) studies stress me a lot.",
      "College student… (soft sigh) stress affects my periods.",
    ],
    marriage: [
      "No doctor, I'm not married… (shy smile).",
      "Single… (gentle reply).",
    ],
    address: [
      "I live in Surat doctor… (soft tone).",
      "Surat… (polite nod).",
    ],
    complaint: [
      "My periods are very irregular doctor… (sad face) sometimes they stop for months.",
      "I have PCOD doctor… (tearful eyes) cycles are disturbed.",
    ],
    location: [
      "Pain is in lower abdomen doctor… (places hand gently).",
      "Below stomach region… (uneasy expression).",
    ],
    sensation: [
      "It feels dull and heavy doctor… (mild discomfort on face).",
      "Sometimes dragging pain… (sad smile).",
    ],
    aggravation: [
      "Stress makes it worse doctor… (anxious look).",
      "Before periods symptoms increase… (emotional face).",
    ],
    amelioration: [
      "I feel better when someone talks kindly doctor… (eyes soften).",
      "Fresh air helps me doctor… (relaxed face).",
    ],
    concomitant: [
      "I gain weight easily doctor… (worried expression).",
      "My mood keeps changing… (tearful eyes).",
    ],
    onset: [
      "It started gradually doctor… (thinking) about 2 years back.",
      "Slow onset… (nods softly).",
    ],
    duration: [
      "Periods delay for 2–3 months doctor… (sad tone).",
      "Long time problem… (hopeless look).",
    ],
    progression: [
      "Yes doctor, it is increasing… (concerned face).",
      "Symptoms are getting worse… (low confidence).",
    ],
    history: [
      "No major illness before doctor… (soft reply) PCOD is my main issue.",
    ],
    family: [
      "My mother had similar cycle problem doctor… (gentle voice).",
    ],
    appetite: [
      "Appetite keeps changing doctor… (uncertain expression).",
      "Sometimes more, sometimes less… (shrugs gently).",
    ],
    thirst: [
      "I'm not very thirsty doctor… (soft smile).",
      "I drink little water… (gentle tone).",
    ],
    tongue: [
      "Tongue looks normal doctor… (neutral face).",
    ],
    urine: [
      "Urine is normal doctor… (calm reply).",
    ],
    stool: [
      "Sometimes constipated doctor… (uneasy smile).",
      "Not regular daily… (mild concern).",
    ],
    desire: [
      "I crave sweets doctor… (soft smile).",
    ],
    aversion: [
      "I don't like oily food doctor… (gentle refusal).",
    ],
    sweat: [
      "Normal sweating doctor… (neutral).",
    ],
    sleep: [
      "Sleep is disturbed doctor… (tired eyes) I keep thinking.",
      "Late sleep… (sad smile).",
    ],
    dream: [
      "I get emotional dreams doctor… (soft voice).",
    ],
    thermal: [
      "I feel better in open air doctor… (relaxed).",
      "Heat makes me uncomfortable… (slight irritation).",
    ],
    mental: [
      "I become very emotional doctor… (tearful eyes) small things affect me.",
      "I feel better when someone comforts me… (hopeful look).",
    ],
  }

  // ===== PRIORITY 2: ROBUST KEYWORD PATTERN DETECTION =====
  const detectionPatterns = [
    // NAME - Keywords: name, what+name
    {
      keywords: [/\bname\b/, /what\s+.*\bname/, /who\s+are\s+you/, /who.*you\s+are/],
      category: "name",
    },
    // AGE - Keywords: age, how+old+you
    {
      keywords: [/\bage\b/, /how\s+old\s+are?\s+you/, /how\s+.*\s+years/, /years\s+old/],
      category: "age",
    },
    // OCCUPATION - Keywords: occupation, what+do, doing, do
    {
      keywords: [
        /\boccupation\b/,
        /what\s+.*\bdo\b.*you/,
        /what\s+.*\bdoing\b/,
        /\bdo\b.*you/,
        /work/,
        /student/,
        /studying/,
      ],
      category: "occupation",
    },
    // MARITAL STATUS - Keywords: marriage, married, single
    {
      keywords: [/marri/, /married/, /single/, /spouse/, /husband/, /wife/],
      category: "marriage",
    },
    // ADDRESS - Keywords: address, where+live, living
    {
      keywords: [/\baddress\b/, /where\s+.*\blive\b/, /living/, /\bcity\b/, /\btown\b/, /location/],
      category: "address",
    },
    // CHIEF COMPLAINT - Keywords: main+complain, complaint, chief+complaint
    {
      keywords: [
        /main\s+.*\bcomplain/,
        /\bcomplaint\b/,
        /chief\s+.*\bcomplain/,
        /problem/,
        /pcod/,
        /period/,
        /mense/,
        /cycle/,
        /issue/,
      ],
      category: "complaint",
    },
    // LOCATION - Keywords: where+pain, which+side, location+pain
    {
      keywords: [/where\s+.*\bpain/, /which\s+.*\bside/, /location\s+.*\bpain/, /where.*exact/],
      category: "location",
    },
    // SENSATION - Keywords: sensation, how+sensation, how+feel, how+pain
    {
      keywords: [/\bsensation\b/, /how\s+.*\bsensation/, /how\s+.*\bfeel/, /how\s+.*\bpain/],
      category: "sensation",
    },
    // AGGRAVATION - Keywords: aggravation, aggravates, worse, worsen
    {
      keywords: [/\baggravat/, /\bworse\b/, /worsen/, /modality/, /when\s+.*\bworse/, /make.*worse/],
      category: "aggravation",
    },
    // AMELIORATION - Keywords: amelioration, ameliorates, relief, better
    {
      keywords: [/\bameliorat/, /\brelief\b/, /\bbetter\b/, /improve/, /when\s+.*\brelief/, /help/],
      category: "amelioration",
    },
    // CONCOMITANT - Keywords: concomitant, any+other+complaint, other
    {
      keywords: [/\bconcomitant\b/, /any\s+.*\bother/, /other\s+.*\bsymptom/, /weight/, /mood/],
      category: "concomitant",
    },
    // ONSET - Keywords: onset, when+start, when+started, when+begins
    {
      keywords: [/\bonset\b/, /when\s+.*\bstart/, /when\s+.*\bbegan/, /began/, /begin/],
      category: "onset",
    },
    // DURATION - Keywords: duration, how+long, how+many+days, how+much+time
    {
      keywords: [/\bduration\b/, /how\s+.*\blong/, /how\s+many\s+.*\bday/, /how\s+.*\bmonth/, /how\s+much\s+time/],
      category: "duration",
    },
    // PROGRESSION - Keywords: progression, how+increase, how+progressive
    {
      keywords: [/\bprogression\b/, /how\s+.*\bincreas/, /progressive/, /worsening/, /getting\s+worse/],
      category: "progression",
    },
    // HISTORY OF PRESENT ILLNESS - Keywords: history, any+history, past, in+past
    {
      keywords: [/\bhistory\b/, /any\s+.*\bhistory/, /\bpast\b/, /in\s+.*\bpast/, /before/],
      category: "history",
    },
    // FAMILY HISTORY - Keywords: family, parents, partner, family+history
    {
      keywords: [/\bfamily\b/, /parents/, /partner/, /sibling/, /mother/, /father/],
      category: "family",
    },
    // APPETITE - Keywords: appetite, hunger, eat, eating, meal
    {
      keywords: [/\bappetite\b/, /\bhunger\b/, /\beat\b/, /eating/, /meal/, /food/],
      category: "appetite",
    },
    // THIRST - Keywords: thirst, thirsty, water, water+drink
    {
      keywords: [/\bthirst\b/, /thirsty/, /\bwater\b/, /\bdrink\b/, /fluid/],
      category: "thirst",
    },
    // TONGUE - Keywords: tongue
    {
      keywords: [/\btongue\b/],
      category: "tongue",
    },
    // URINE - Keywords: urine, urinate, urinates, pass+urine
    {
      keywords: [/\burine\b/, /urinate/, /pass\s+.*\burine/],
      category: "urine",
    },
    // STOOL - Keywords: stool, bowel, constipation
    {
      keywords: [/\bstool\b/, /\bbowel\b/, /constipat/],
      category: "stool",
    },
    // DESIRE - Keywords: desire, craving, food+like, like+eat
    {
      keywords: [/\bdesire\b/, /craving/, /like\s+.*\beat/, /fancy/, /sweet/],
      category: "desire",
    },
    // AVERSION - Keywords: aversion, dislike, don't+like
    {
      keywords: [/\baversion\b/, /dislike/, /don't\s+.*\blike/, /hate/, /oily/],
      category: "aversion",
    },
    // SWEAT - Keywords: sweat, perspiration, how+sweat
    {
      keywords: [/\bsweat\b/, /perspir/, /moisture/],
      category: "sweat",
    },
    // SLEEP - Keywords: sleep, sleeping, sleep+problem
    {
      keywords: [/\bsleep\b/, /sleeping/, /sleep\s+.*\bproblem/, /rest/, /insomnia/],
      category: "sleep",
    },
    // DREAMS - Keywords: dream, dreams, dreaming
    {
      keywords: [/\bdream/, /dreaming/, /nightmare/],
      category: "dream",
    },
    // THERMALS - Keywords: thermal, cold, heat, fever, chilly
    {
      keywords: [/thermal/, /\bcold\b/, /\bheat\b/, /fever/, /chilly/],
      category: "thermal",
    },
    // MENTAL GENERALS - Extensive keywords
    {
      keywords: [
        /mental/,
        /\banger\b/,
        /angry/,
        /irritable/,
        /irritat/,
        /\banxiety\b/,
        /anxious/,
        /\bmood\b/,
        /\bmind\b/,
        /fear/,
        /\bsad\b/,
        /emotional/,
        /comfort/,
        /console/,
      ],
      category: "mental",
    },
  ]

  // ===== DETECTION: Try all patterns =====
  for (const { keywords: patterns, category } of detectionPatterns) {
    for (const pattern of patterns) {
      if (pattern.test(q)) {
        const responses = keywordResponses[category]
        if (responses && responses.length > 0) {
          return responses[Math.floor(Math.random() * responses.length)]
        }
      }
    }
  }

  // ===== PRIORITY 3: CORE PCOD/PERIOD TERMS (fallback) =====
  if (/pcod|period|mense|cycle|hormone|ovarian|gynec/.test(q)) {
    const pcoodResponses = [
      "My periods are very irregular doctor… (sad face) sometimes they stop for months.",
      "I have PCOD doctor… (tearful eyes) cycles are disturbed.",
    ]
    return pcoodResponses[Math.floor(Math.random() * pcoodResponses.length)]
  }

  // ===== PRIORITY 4: SYSTEM NEVER FAILS - All responses =====
  const allResponses: string[] = []
  for (const responseList of Object.values(keywordResponses)) {
    allResponses.push(...responseList)
  }

  if (allResponses.length > 0) {
    return allResponses[Math.floor(Math.random() * allResponses.length)]
  }

  // ===== FINAL FALLBACK =====
  return "Please ask me more clearly doctor… I prefer gentle conversations."
}
