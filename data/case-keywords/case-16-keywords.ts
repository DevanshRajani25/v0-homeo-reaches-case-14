/**
 * CASE 16 - RUHI (PULSATILLA NIGRICANS)
 * PCOD (Polycystic Ovarian Disease)
 * 
 * STRICT RESPONSE CONTROL:
 * - Patient responds ONLY with predefined keyword → response mappings
 * - No AI-generated answers or paraphrasing
 * - No generic assistant fallbacks
 * - Strict keyword matching with symptom priority
 * - Fixed fallback: "I don't notice anything specific about that."
 * - Maintains PULSATILLA personality (mild, emotional, soft, tearful)
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

  // ===== PRIORITY 2: STRICT KEYWORD PATTERN DETECTION =====
  // Maps user keywords to exact response categories
  const detectionPatterns = [
    // NAME
    { keywords: [/\bname\b/, /what\s+.*\bname/, /who\s+are\s+you/], category: "name" },
    // AGE
    { keywords: [/\bage\b/, /how\s+old/, /years\s+old/], category: "age" },
    // OCCUPATION
    { keywords: [/occupation/, /what\s+.*do/, /student/, /work/], category: "occupation" },
    // MARITAL STATUS
    { keywords: [/marri/, /married/, /single/], category: "marriage" },
    // ADDRESS
    { keywords: [/address/, /where.*live/, /living/], category: "address" },
    // CHIEF COMPLAINT
    { keywords: [/complaint/, /problem/, /pcod/, /period/, /mense/, /cycle/], category: "complaint" },
    // LOCATION
    { keywords: [/where.*pain/, /which.*side/, /location.*pain/], category: "location" },
    // SENSATION
    { keywords: [/sensation/, /how.*feel/, /how.*pain/], category: "sensation" },
    // AGGRAVATION
    { keywords: [/aggravat/, /worse/, /worsen/], category: "aggravation" },
    // AMELIORATION
    { keywords: [/ameliorat/, /relief/, /better/, /help/], category: "amelioration" },
    // CONCOMITANT
    { keywords: [/concomitant/, /other.*symptom/, /weight/, /mood/], category: "concomitant" },
    // ONSET
    { keywords: [/onset/, /when.*start/, /when.*began/], category: "onset" },
    // DURATION
    { keywords: [/duration/, /how.*long/, /how.*many/], category: "duration" },
    // PROGRESSION
    { keywords: [/progression/, /how.*increas/, /worsening/], category: "progression" },
    // HISTORY
    { keywords: [/history/, /past/], category: "history" },
    // FAMILY
    { keywords: [/family/, /parents/, /mother/], category: "family" },
    // APPETITE
    { keywords: [/appetite/, /hunger/, /eat/, /meal/], category: "appetite" },
    // THIRST
    { keywords: [/thirst/, /thirsty/, /water/, /drink/], category: "thirst" },
    // TONGUE
    { keywords: [/tongue/], category: "tongue" },
    // URINE
    { keywords: [/urine/, /urinate/], category: "urine" },
    // STOOL
    { keywords: [/stool/, /bowel/, /constipat/], category: "stool" },
    // DESIRE
    { keywords: [/desire/, /craving/, /sweet/], category: "desire" },
    // AVERSION
    { keywords: [/aversion/, /dislike/, /don't.*like/], category: "aversion" },
    // SWEAT
    { keywords: [/sweat/, /perspir/], category: "sweat" },
    // SLEEP
    { keywords: [/sleep/, /sleeping/, /rest/], category: "sleep" },
    // DREAMS
    { keywords: [/dream/, /dreaming/], category: "dream" },
    // THERMALS
    { keywords: [/thermal/, /cold/, /heat/, /fever/], category: "thermal" },
    // MENTAL GENERALS
    {
      keywords: [/mental/, /anger/, /angry/, /irritable/, /anxiety/, /mood/, /fear/, /sad/, /emotional/],
      category: "mental",
    },
  ]

  // ===== STRICT KEYWORD DETECTION: Match detected keywords =====
  for (const { keywords: patterns, category } of detectionPatterns) {
    for (const pattern of patterns) {
      if (pattern.test(q)) {
        const responses = keywordResponses[category]
        if (responses && responses.length > 0) {
          // Return random response from matched category (alternating responses)
          return responses[Math.floor(Math.random() * responses.length)]
        }
      }
    }
  }

  // ===== NO KEYWORD MATCH: Return fixed fallback =====
  // Strict rule: Do NOT generate, do NOT ask to rephrase, do NOT provide AI assistant response
  return "I don't notice anything specific about that."
}
