/**
 * CASE 16 — RUHI (PULSATILLA NIGRICANS)
 * PCOD (Polycystic Ovarian Disease)
 * 
 * ✅ STRICT RESPONSE ENGINE
 * - Patient responds ONLY with predefined keyword → response mappings
 * - No AI generation, no paraphrasing, no assistant fallbacks
 * - Fixed fallback only: "I don't notice anything specific about that."
 * - Responses maintain Pulsatilla personality: soft, emotional, gentle, shy, comfort-seeking
 */

export function detectAndRespond(question: string): string {
  const q = question.toLowerCase().trim()

  // ========== STEP 1: CASUAL GREETING RULE (TOP PRIORITY) ==========
  // Single word starting with h/H
  if (q.length === 1 && /^h/.test(q)) {
    return "Hello doctor.. (soft smile, gentle tone)"
  }

  // Single word starting with o/O
  if (q.length === 1 && /^o/.test(q)) {
    return "Okk doctor.. (nods slowly, calm face)"
  }

  // ========== RESPONSE MAPPINGS ==========
  const responses: Record<string, string[]> = {
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

  // ========== STEP 2: KEYWORD MATCHING RULE ==========
  const keywordPatterns: Array<{ patterns: RegExp[]; category: string }> = [
    { patterns: [/\bname\b/, /what.*name/, /who.*you/], category: "name" },
    { patterns: [/\bage\b/, /how.*old/, /years.*old/], category: "age" },
    { patterns: [/occupation/, /what.*do/, /doing/, /\bdo\b/, /student/], category: "occupation" },
    { patterns: [/marri/, /married/, /single/, /spouse/], category: "marriage" },
    { patterns: [/address/, /where.*live/, /living/], category: "address" },
    { patterns: [/complaint/, /complain/, /chief/, /problem/, /pcod/, /period/, /mense/, /cycle/], category: "complaint" },
    { patterns: [/where.*pain/, /which.*side/, /location.*pain/, /where.*exact/], category: "location" },
    { patterns: [/sensation/, /how.*feel/, /how.*pain/], category: "sensation" },
    { patterns: [/aggravat/, /\bworse\b/, /worsen/, /modality/], category: "aggravation" },
    { patterns: [/ameliorat/, /relief/, /\bbetter\b/, /improve/], category: "amelioration" },
    { patterns: [/concomitant/, /other.*symptom/, /weight/, /\bmood\b/], category: "concomitant" },
    { patterns: [/onset/, /when.*start/, /when.*began/], category: "onset" },
    { patterns: [/duration/, /how.*long/, /how.*many/, /how.*much.*time/], category: "duration" },
    { patterns: [/progression/, /how.*increas/, /progressive/, /worsening/], category: "progression" },
    { patterns: [/\bhistory\b/, /\bpast\b/, /before/], category: "history" },
    { patterns: [/family/, /parents/, /mother/, /father/], category: "family" },
    { patterns: [/appetite/, /hunger/, /\beat\b/, /eating/, /meal/], category: "appetite" },
    { patterns: [/thirst/, /thirsty/, /\bwater\b/, /\bdrink\b/], category: "thirst" },
    { patterns: [/\btongue\b/], category: "tongue" },
    { patterns: [/urine/, /urinate/, /pass.*urine/], category: "urine" },
    { patterns: [/stool/, /bowel/, /constipat/], category: "stool" },
    { patterns: [/desire/, /craving/, /sweet/], category: "desire" },
    { patterns: [/aversion/, /dislike/, /don't.*like/], category: "aversion" },
    { patterns: [/sweat/, /perspir/], category: "sweat" },
    { patterns: [/\bsleep\b/, /sleeping/, /rest/], category: "sleep" },
    { patterns: [/\bdream/, /dreaming/], category: "dream" },
    { patterns: [/thermal/, /cold/, /\bheat\b/, /fever/, /chilly/], category: "thermal" },
    {
      patterns: [
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
      ],
      category: "mental",
    },
  ]

  // Match keywords and return response
  for (const { patterns, category } of keywordPatterns) {
    for (const pattern of patterns) {
      if (pattern.test(q)) {
        const categoryResponses = responses[category]
        if (categoryResponses && categoryResponses.length > 0) {
          // Rotate randomly between available responses
          return categoryResponses[Math.floor(Math.random() * categoryResponses.length)]
        }
      }
    }
  }

  // ========== STEP 3: NO KEYWORD MATCHES — FIXED FALLBACK ONLY ==========
  return "I don't notice anything specific about that."
}
