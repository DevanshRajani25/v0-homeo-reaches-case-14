export function detectAndRespond(question: string): string {
  const q = question.toLowerCase().trim()

  // Rule 1: Single-word casual greeting (h or H)
  if (q.length === 1 && /^h/i.test(q)) {
    return "Hello doctor.."
  }

  // Rule 2: Single-word casual greeting (o or O)
  if (q.length === 1 && /^o/i.test(q)) {
    return "Okk doctor.."
  }

  // Comprehensive keyword-response mapping with alternating responses
  const responses: Record<string, string[]> = {
    // Name
    name: [
      "My name is Suresh doctor. Speaks slowly, holds chest. Please ask briefly, talking increases my cough.",
      "Suresh Mehta. Irritated expression. Even small conversation disturbs me.",
    ],
    // Age
    age: [
      "I'm 38 years old doctor. Serious tone. I just want rest.",
      "38 doctor. Nods, avoids movement. Movement worsens everything.",
    ],
    // Occupation
    occupation: [
      "I'm an accountant doctor. Annoyed. Sitting long hours with cough is painful.",
      "Office work doctor. Frowns. Concentration is disturbed.",
    ],
    // Marital Status
    marriage: [
      "Yes doctor, married. Slightly irritated. Everyone keeps asking questions.",
      "Married. Dry reply. I prefer to be left alone.",
    ],
    // Address
    address: [
      "I live in Surat doctor. Low voice. Climate change affects me.",
      "Surat. Serious face. Please continue.",
    ],
    // Chief Complaint
    complaint: [
      "Dry cough with chest pain doctor. Presses chest. Every cough hurts.",
      "Persistent dry cough. Irritated. Pain increases on coughing.",
    ],
    // Location of Pain
    location: [
      "Pain is in the chest doctor. Holds chest firmly. Especially while coughing.",
      "Inside chest. Avoids deep breath. Movement increases pain.",
    ],
    // Sensation
    sensation: [
      "It feels stitching pain doctor. Grimaces. Like something is tearing.",
      "Sharp pain with cough. Annoyed. Very uncomfortable.",
    ],
    // Aggravation (Worse)
    aggravation: [
      "Movement makes it worse doctor. Stays still. Even turning increases pain.",
      "Talking worsens cough. Irritated. I prefer silence.",
    ],
    // Amelioration (Better)
    amelioration: [
      "Rest gives relief doctor. Relaxes slightly. Lying still helps.",
      "Pressing the chest helps doctor. Hand on chest. Movement is bad.",
    ],
    // Concomitant Symptoms
    concomitant: [
      "I feel very irritable doctor. Short replies. Don't like disturbance.",
      "Dry mouth and thirst doctor. Serious. Want left alone.",
    ],
    // Onset
    onset: [
      "It started gradually doctor. Thinking. Worsened with time.",
      "Slow onset. Nods. Became persistent.",
    ],
    // Duration
    duration: [
      "Around 2-3 months doctor. Tired. Not improving.",
      "Many weeks. Annoyed. Same problem.",
    ],
    // Progression
    progression: [
      "Yes doctor, it is increasing. Concerned. Pain is more now.",
      "Definitely worsening. Serious. Especially with activity.",
    ],
    // History of Present Illness
    history: [
      "No major illness before doctor. Irritated. This cough is the main issue now.",
    ],
    // Family History
    family: [
      "No significant family illness doctor. Brief reply.",
    ],
    // Appetite
    appetite: [
      "Appetite is normal doctor. Plain tone. No interest in food.",
      "Normal hunger. Indifferent. Eating doesn't matter.",
    ],
    // Thirst
    thirst: [
      "I feel very thirsty doctor. Firm. Drink large quantities.",
      "Excess thirst. Serious. Prefer cold water.",
    ],
    // Tongue
    tongue: [
      "Tongue looks dry doctor. Brief.",
    ],
    // Urine
    urine: [
      "Urine is normal doctor. Short answer.",
    ],
    // Stool
    stool: [
      "Stool is dry doctor. Brief reply.",
      "Sometimes constipated. Annoyed.",
    ],
    // Desire (Food/Drink Cravings)
    desire: [
      "No special cravings doctor. Indifferent.",
    ],
    // Aversion
    aversion: [
      "Don't like disturbance or talking doctor. Irritated.",
    ],
    // Sweat
    sweat: [
      "Normal sweating doctor. Neutral.",
    ],
    // Sleep
    sleep: [
      "Sleep disturbed doctor. Irritated. Cough wakes me.",
      "Poor sleep. Tired. Pain disturbs rest.",
    ],
    // Dreams
    dream: [
      "No particular dreams doctor. Short reply.",
    ],
    // Thermal Preference
    thermal: [
      "I feel more comfortable in cool air doctor. Neutral.",
      "Heat worsens discomfort. Serious.",
    ],
    // Mental State
    mental: [
      "I get irritated easily doctor. Stern face. Don't like being questioned.",
      "I want silence and rest. Firm tone. Disturbance annoys me.",
    ],
    // Cough-specific
    cough: [
      "Persistent dry cough with chest pain doctor. Every cough causes sharp pain.",
      "This painful cough has been with me for months doctor. Makes me very irritable.",
    ],
  }

  // Priority 1: Exact single-keyword matches first
  for (const [category, responseList] of Object.entries(responses)) {
    if (q === category || q.split(/\s+/).includes(category)) {
      return responseList[Math.floor(Math.random() * responseList.length)]
    }
  }

  // Priority 2: Complex pattern matching with comprehensive coverage
  const patterns = [
    // Name patterns
    { regex: /name|who|you|identity|introduce/, key: "name" },
    // Age patterns
    { regex: /age|old|years|how.*old|years.*old/, key: "age" },
    // Occupation patterns
    { regex: /occupation|work|job|what.*do|do.*you|doing|profession/, key: "occupation" },
    // Marriage patterns
    { regex: /marri|wed|single|spouse|partner|wife|husband/, key: "marriage" },
    // Address patterns
    { regex: /address|live|where.*live|location|city|town|place/, key: "address" },
    // Chief Complaint patterns
    { regex: /main|chief|complaint|problem|issue|concern/, key: "complaint" },
    // Location patterns
    { regex: /where.*pain|location.*pain|which.*side|side.*pain|pain.*where/, key: "location" },
    // Sensation patterns
    { regex: /sensation|feel|how.*feel|how.*pain|how.*it.*feel|pain.*like/, key: "sensation" },
    // Aggravation patterns
    { regex: /worse|worsen|aggravat|modality|when.*worse|make.*worse|motion/, key: "aggravation" },
    // Amelioration patterns
    { regex: /relief|better|ameliorat|improve|when.*better|help/, key: "amelioration" },
    // Concomitant patterns
    { regex: /concomit|other.*symptom|any.*other|other.*complain/, key: "concomitant" },
    // Onset patterns
    { regex: /onset|when.*start|when.*began|started|begin/, key: "onset" },
    // Duration patterns
    { regex: /duration|how.*long|long.*time|how.*days|many.*week|many.*month/, key: "duration" },
    // Progression patterns
    { regex: /progress|increas|how.*increas|worsening/, key: "progression" },
    // History patterns
    { regex: /history|past.*illness|prior.*illness|any.*history|before/, key: "history" },
    // Family patterns
    { regex: /family|parents|sibling|mother|father|relative/, key: "family" },
    // Appetite patterns
    { regex: /appetite|hunger|eat|food|meal|eating/, key: "appetite" },
    // Thirst patterns
    { regex: /thirst|thirsty|water|drink|fluid/, key: "thirst" },
    // Tongue patterns
    { regex: /tongue/, key: "tongue" },
    // Urine patterns
    { regex: /urine|urinate|pass.*urine|micturition/, key: "urine" },
    // Stool patterns
    { regex: /stool|bowel|constipat|feces/, key: "stool" },
    // Desire patterns
    { regex: /desire|craving|like.*eat|fancy/, key: "desire" },
    // Aversion patterns
    { regex: /aversion|dislike|don't.*like|hate|avoid/, key: "aversion" },
    // Sweat patterns
    { regex: /sweat|perspir|moisture/, key: "sweat" },
    // Sleep patterns
    { regex: /sleep|sleeping|rest|insomnia|sleep.*problem|cannot.*sleep/, key: "sleep" },
    // Dream patterns
    { regex: /dream|dreaming|nightmare/, key: "dream" },
    // Thermal patterns
    { regex: /thermal|cold|heat|fever|chilly|temperature/, key: "thermal" },
    // Mental patterns
    { regex: /mental|anger|irritable|irritat|anxiety|anxious|mood|mind|fear|sad|emotion/, key: "mental" },
    // Cough patterns
    { regex: /cough|dry|painful|pain|thorax|chest/, key: "cough" },
  ]

  for (const { regex, key } of patterns) {
    if (regex.test(q)) {
      const responseList = responses[key]
      if (responseList && responseList.length > 0) {
        return responseList[Math.floor(Math.random() * responseList.length)]
      }
    }
  }

  // Fallback: Return random response from any category to ensure system never fails
  const allResponses: string[] = []
  for (const responseList of Object.values(responses)) {
    allResponses.push(...responseList)
  }
  if (allResponses.length > 0) {
    return allResponses[Math.floor(Math.random() * allResponses.length)]
  }

  // Final fallback with patient-appropriate response
  return "Please ask me more clearly doctor. I prefer brief conversations."
}
