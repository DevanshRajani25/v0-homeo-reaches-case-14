/**
 * CASE 16 - RUHI (PULSATILLA NIGRICANS)
 * PCOD (Polycystic Ovarian Disease)
 * Patient: Mild, soft, emotional, tearful, seeks reassurance, changeable mood
 * Remedy: PULSATILLA NIGRICANS - Irregular delayed menses, better by consolation & fresh air
 */

export function detectAndRespond(question: string): string {
  const q = question.toLowerCase().trim()

  // PRIORITY 1: CASUAL GREETING RULES (ONLY single word, no other logic)
  // Rule 1: Single word starting with h/H
  if (q.length === 1 && /^h/i.test(q)) {
    return "Hello doctor.. (soft smile, gentle tone)"
  }

  // Rule 2: Single word starting with o/O
  if (q.length === 1 && /^o/i.test(q)) {
    return "Okk doctor.. (nods slowly, calm face)"
  }

  // All keyword responses - exact as specified
  const keywordResponses: Record<string, string[]> = {
    // NAME
    name: [
      "My name is Ruhi doctor… (soft voice, slight smile) I feel shy talking about my problem.",
      "Ruhi… (looks down, emotional eyes)",
    ],
    // AGE
    age: [
      "I'm 23 years old doctor… (gentle tone)",
      "23 doctor… (nods slowly, calm expression)",
    ],
    // OCCUPATION
    occupation: [
      "I'm a student doctor… (worried face) studies stress me a lot.",
      "College student… (soft sigh) stress affects my periods.",
    ],
    // MARITAL STATUS
    marriage: [
      "No doctor, I'm not married… (shy smile).",
      "Single… (gentle reply).",
    ],
    // ADDRESS
    address: [
      "I live in Surat doctor… (soft tone).",
      "Surat… (polite nod).",
    ],
    // CHIEF COMPLAINT
    complaint: [
      "My periods are very irregular doctor… (sad face) sometimes they stop for months.",
      "I have PCOD doctor… (tearful eyes) cycles are disturbed.",
    ],
    // LOCATION
    location: [
      "Pain is in lower abdomen doctor… (places hand gently).",
      "Below stomach region… (uneasy expression).",
    ],
    // SENSATION
    sensation: [
      "It feels dull and heavy doctor… (mild discomfort on face).",
      "Sometimes dragging pain… (sad smile).",
    ],
    // AGGRAVATION
    aggravation: [
      "Stress makes it worse doctor… (anxious look).",
      "Before periods symptoms increase… (emotional face).",
    ],
    // AMELIORATION
    amelioration: [
      "I feel better when someone talks kindly doctor… (eyes soften).",
      "Fresh air helps me doctor… (relaxed face).",
    ],
    // CONCOMITANT
    concomitant: [
      "I gain weight easily doctor… (worried expression).",
      "My mood keeps changing… (tearful eyes).",
    ],
    // ONSET
    onset: [
      "It started gradually doctor… (thinking) about 2 years back.",
      "Slow onset… (nods softly).",
    ],
    // DURATION
    duration: [
      "Periods delay for 2–3 months doctor… (sad tone).",
      "Long time problem… (hopeless look).",
    ],
    // PROGRESSION
    progression: [
      "Yes doctor, it is increasing… (concerned face).",
      "Symptoms are getting worse… (low confidence).",
    ],
    // HISTORY OF PRESENT ILLNESS
    history: [
      "No major illness before doctor… (soft reply) PCOD is my main issue.",
    ],
    // FAMILY HISTORY
    family: [
      "My mother had similar cycle problem doctor… (gentle voice).",
    ],
    // APPETITE
    appetite: [
      "Appetite keeps changing doctor… (uncertain expression).",
      "Sometimes more, sometimes less… (shrugs gently).",
    ],
    // THIRST
    thirst: [
      "I'm not very thirsty doctor… (soft smile).",
      "I drink little water… (gentle tone).",
    ],
    // TONGUE
    tongue: [
      "Tongue looks normal doctor… (neutral face).",
    ],
    // URINE
    urine: [
      "Urine is normal doctor… (calm reply).",
    ],
    // STOOL
    stool: [
      "Sometimes constipated doctor… (uneasy smile).",
      "Not regular daily… (mild concern).",
    ],
    // DESIRE
    desire: [
      "I crave sweets doctor… (soft smile).",
    ],
    // AVERSION
    aversion: [
      "I don't like oily food doctor… (gentle refusal).",
    ],
    // SWEAT
    sweat: [
      "Normal sweating doctor… (neutral).",
    ],
    // SLEEP
    sleep: [
      "Sleep is disturbed doctor… (tired eyes) I keep thinking.",
      "Late sleep… (sad smile).",
    ],
    // DREAMS
    dream: [
      "I get emotional dreams doctor… (soft voice).",
    ],
    // THERMALS
    thermal: [
      "I feel better in open air doctor… (relaxed).",
      "Heat makes me uncomfortable… (slight irritation).",
    ],
    // MENTAL GENERALS
    mental: [
      "I become very emotional doctor… (tearful eyes) small things affect me.",
      "I feel better when someone comforts me… (hopeful look).",
    ],
  }

  // PRIORITY 2: Natural language keyword detection from user input
  const keywordPatterns = [
    // NAME
    { patterns: [/\bname\b/, /what.*name/, /who.*you/], category: "name" },
    // AGE
    { patterns: [/\bage\b/, /how.*old/, /\byears\b.*old/], category: "age" },
    // OCCUPATION
    { patterns: [/occupation/, /what.*do/, /\bdoing\b/, /\bdo\b/, /work|student/], category: "occupation" },
    // MARITAL STATUS
    { patterns: [/marri/, /married/, /single/, /spouse/], category: "marriage" },
    // ADDRESS
    { patterns: [/address/, /where.*live/, /living/, /\bcity\b/, /\btown\b/], category: "address" },
    // CHIEF COMPLAINT
    { patterns: [/main.*complaint/, /\bcomplaint\b/, /chief/, /problem|pcod|period|mense/], category: "complaint" },
    // LOCATION
    { patterns: [/where.*pain/, /which.*side/, /location.*pain/, /where.*exactly/], category: "location" },
    // SENSATION
    { patterns: [/sensation/, /how.*feel/, /how.*pain/, /how.*sensation/], category: "sensation" },
    // AGGRAVATION
    { patterns: [/aggravat/, /worse/, /worsen/, /modality/, /when.*worse/], category: "aggravation" },
    // AMELIORATION
    { patterns: [/ameliorat/, /relief/, /\bbetter\b/, /improve/, /when.*relief/], category: "amelioration" },
    // CONCOMITANT
    { patterns: [/concomitant/, /any.*other.*complain/, /other.*symptom|weight|mood/], category: "concomitant" },
    // ONSET
    { patterns: [/onset/, /when.*start/, /when.*began/, /began/], category: "onset" },
    // DURATION
    { patterns: [/duration/, /how.*long/, /many.*day/, /much.*time|month/], category: "duration" },
    // PROGRESSION
    { patterns: [/progression/, /how.*increas/, /progressive/, /worsening/], category: "progression" },
    // HISTORY
    { patterns: [/\bhistory\b/, /any.*history/, /\bpast\b/, /before/], category: "history" },
    // FAMILY
    { patterns: [/family/, /parents/, /partner/, /sibling|mother/], category: "family" },
    // APPETITE
    { patterns: [/appetite/, /hunger/, /\beat\b/, /eating/, /meal/], category: "appetite" },
    // THIRST
    { patterns: [/thirst/, /thirsty/, /water/, /drink/], category: "thirst" },
    // TONGUE
    { patterns: [/tongue/], category: "tongue" },
    // URINE
    { patterns: [/urine/, /urinate/, /pass.*urine/], category: "urine" },
    // STOOL
    { patterns: [/stool/, /bowel/, /constipat/], category: "stool" },
    // DESIRE
    { patterns: [/desire/, /craving/, /like.*eat/, /fancy|sweet/], category: "desire" },
    // AVERSION
    { patterns: [/aversion/, /dislike/, /don't.*like/, /hate|oily/], category: "aversion" },
    // SWEAT
    { patterns: [/sweat/, /perspir/, /moisture/], category: "sweat" },
    // SLEEP
    { patterns: [/\bsleep\b/, /sleeping/, /sleep.*problem/, /rest/], category: "sleep" },
    // DREAMS
    { patterns: [/\bdream/, /dreaming/, /nightmare/], category: "dream" },
    // THERMALS
    { patterns: [/thermal/, /cold/, /\bheat\b/, /fever/, /chilly/], category: "thermal" },
    // MENTAL
    {
      patterns: [
        /mental/, /mentall/, /anger/, /angry/, /irritable/, /irritat/,
        /anxiety/, /anxious/, /mood/, /mind/, /fear|sad|emotional/,
      ],
      category: "mental",
    },
  ]

  // Check each pattern against user input
  for (const { patterns, category } of keywordPatterns) {
    for (const pattern of patterns) {
      if (pattern.test(q)) {
        const responses = keywordResponses[category]
        if (responses && responses.length > 0) {
          return responses[Math.floor(Math.random() * responses.length)]
        }
      }
    }
  }

  // PRIORITY 3: Core PCOD/period-related terms
  if (/pcod|period|mense|cycle|hormone|ovarian/.test(q)) {
    const pccodResponses = [
      "My periods are very irregular doctor… (sad face) sometimes they stop for months.",
      "I have PCOD doctor… (tearful eyes) cycles are disturbed.",
    ]
    return pccodResponses[Math.floor(Math.random() * pccodResponses.length)]
  }

  // PRIORITY 4: System never fails - fallback responses
  const allResponses: string[] = []
  for (const responseList of Object.values(keywordResponses)) {
    allResponses.push(...responseList)
  }

  if (allResponses.length > 0) {
    return allResponses[Math.floor(Math.random() * allResponses.length)]
  }

  // Final fallback
  return "Please ask me more clearly doctor… I prefer gentle conversations."
}
