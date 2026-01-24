export function detectAndRespond(question: string): string {
  const q = question.toLowerCase().trim()

  // Casual greeting rules
  if (q.length === 1) {
    if (q.match(/^h/i)) {
      return "Hello doctor.."
    }
    if (q.match(/^o/i)) {
      return "Okk doctor.."
    }
  }

  // Comprehensive keyword-response mapping
  const responses: Record<string, string[]> = {
    name: [
      "My name is Suresh doctor. Speaks slowly, holds chest. Please ask briefly, talking increases my cough.",
      "Suresh Mehta. Irritated expression. Even small conversation disturbs me.",
    ],
    age: [
      "I'm 38 years old doctor. Serious tone. I just want rest.",
      "38 doctor. Nods, avoids movement. Movement worsens everything.",
    ],
    occupation: [
      "I'm an accountant doctor. Annoyed. Sitting long hours with cough is painful.",
      "Office work doctor. Frowns. Concentration is disturbed.",
    ],
    marriage: [
      "Yes doctor, married. Slightly irritated. Everyone keeps asking questions.",
      "Married. Dry reply. I prefer to be left alone.",
    ],
    address: [
      "I live in Surat doctor. Low voice. Climate change affects me.",
      "Surat. Serious face. Please continue.",
    ],
    complaint: [
      "Dry cough with chest pain doctor. Presses chest. Every cough hurts.",
      "Persistent dry cough. Irritated. Pain increases on coughing.",
    ],
    location: [
      "Pain is in the chest doctor. Holds chest firmly. Especially while coughing.",
      "Inside chest. Avoids deep breath. Movement increases pain.",
    ],
    sensation: [
      "It feels stitching pain doctor. Grimaces. Like something is tearing.",
      "Sharp pain with cough. Annoyed. Very uncomfortable.",
    ],
    aggravation: [
      "Movement makes it worse doctor. Stays still. Even turning increases pain.",
      "Talking worsens cough. Irritated. I prefer silence.",
    ],
    amelioration: [
      "Rest gives relief doctor. Relaxes slightly. Lying still helps.",
      "Pressing the chest helps doctor. Hand on chest. Movement is bad.",
    ],
    concomitant: [
      "I feel very irritable doctor. Short replies. Don't like disturbance.",
      "Dry mouth and thirst doctor. Serious. Want left alone.",
    ],
    onset: [
      "It started gradually doctor. Thinking. Worsened with time.",
      "Slow onset. Nods. Became persistent.",
    ],
    duration: [
      "Around 2-3 months doctor. Tired. Not improving.",
      "Many weeks. Annoyed. Same problem.",
    ],
    progression: [
      "Yes doctor, it is increasing. Concerned. Pain is more now.",
      "Definitely worsening. Serious. Especially with activity.",
    ],
    history: [
      "No major illness before doctor. Irritated. This cough is the main issue now.",
    ],
    family: [
      "No significant family illness doctor. Brief reply.",
    ],
    appetite: [
      "Appetite is normal doctor. Plain tone. No interest in food.",
      "Normal hunger. Indifferent. Eating doesn't matter.",
    ],
    thirst: [
      "I feel very thirsty doctor. Firm. Drink large quantities.",
      "Excess thirst. Serious. Prefer cold water.",
    ],
    tongue: [
      "Tongue looks dry doctor. Brief.",
    ],
    urine: [
      "Urine is normal doctor. Short answer.",
    ],
    stool: [
      "Stool is dry doctor. Brief reply.",
      "Sometimes constipated. Annoyed.",
    ],
    desire: [
      "No special cravings doctor. Indifferent.",
    ],
    aversion: [
      "Don't like disturbance or talking doctor. Irritated.",
    ],
    sweat: [
      "Normal sweating doctor. Neutral.",
    ],
    sleep: [
      "Sleep disturbed doctor. Irritated. Cough wakes me.",
      "Poor sleep. Tired. Pain disturbs rest.",
    ],
    dream: [
      "No particular dreams doctor. Short reply.",
    ],
    thermal: [
      "I feel more comfortable in cool air doctor. Neutral.",
      "Heat worsens discomfort. Serious.",
    ],
    mental: [
      "I get irritated easily doctor. Stern face. Don't like being questioned.",
      "I want silence and rest. Firm tone. Disturbance annoys me.",
    ],
    cough: [
      "Persistent dry cough with chest pain doctor. Every cough causes sharp pain.",
      "This painful cough has been with me for months doctor. Makes me very irritable.",
    ],
  }

  // Check each keyword category
  for (const [category, responseList] of Object.entries(responses)) {
    if (q.includes(category)) {
      return responseList[Math.floor(Math.random() * responseList.length)]
    }
  }

  // Multi-keyword checks
  if (q.match(/what.*do|occupation|do you/)) {
    return responses.occupation[0]
  }
  if (q.match(/how.*old|age|years/)) {
    return responses.age[0]
  }
  if (q.match(/married|marriage|single/)) {
    return responses.marriage[0]
  }
  if (q.match(/where.*live|address|location/)) {
    return responses.address[0]
  }
  if (q.match(/main.*complaint|chief.*complaint|complaint/)) {
    return responses.complaint[0]
  }
  if (q.match(/where.*pain|which.*side|pain.*location/)) {
    return responses.location[0]
  }
  if (q.match(/sensation|how.*feel|how.*pain/)) {
    return responses.sensation[0]
  }
  if (q.match(/worse|aggravate|worsens|modality/)) {
    return responses.aggravation[0]
  }
  if (q.match(/relief|better|ameliorat/)) {
    return responses.amelioration[0]
  }
  if (q.match(/other.*complaint|concomitant|other.*symptom/)) {
    return responses.concomitant[0]
  }
  if (q.match(/when.*start|onset|when.*began/)) {
    return responses.onset[0]
  }
  if (q.match(/how.*long|duration|many.*days/)) {
    return responses.duration[0]
  }
  if (q.match(/progress|increasing|how.*increase/)) {
    return responses.progression[0]
  }
  if (q.match(/past.*illness|history|any.*history/)) {
    return responses.history[0]
  }
  if (q.match(/family.*history|parents|family/)) {
    return responses.family[0]
  }
  if (q.match(/appetite|hunger|eat|food|meal/)) {
    return responses.appetite[0]
  }
  if (q.match(/thirst|thirsty|water|drink/)) {
    return responses.thirst[0]
  }
  if (q.match(/tongue/)) {
    return responses.tongue[0]
  }
  if (q.match(/urine|urinate|pass.*urine/)) {
    return responses.urine[0]
  }
  if (q.match(/stool|bowel|constipat/)) {
    return responses.stool[0]
  }
  if (q.match(/desire|craving|like.*eat/)) {
    return responses.desire[0]
  }
  if (q.match(/aversion|dislike|don't.*like/)) {
    return responses.aversion[0]
  }
  if (q.match(/sweat|perspir/)) {
    return responses.sweat[0]
  }
  if (q.match(/sleep|sleeping|sleep.*problem/)) {
    return responses.sleep[0]
  }
  if (q.match(/dream|dreaming/)) {
    return responses.dream[0]
  }
  if (q.match(/thermal|cold|heat|fever|chilly/)) {
    return responses.thermal[0]
  }
  if (q.match(/mental|anger|irritable|anxiety|anxious|mood|mind|fear|sad/)) {
    return responses.mental[0]
  }
  if (q.match(/cough|dry|painful/)) {
    return responses.cough[0]
  }

  // Fallback: Return random response from any category
  const allResponses: string[] = []
  for (const responseList of Object.values(responses)) {
    allResponses.push(...responseList)
  }
  if (allResponses.length > 0) {
    return allResponses[Math.floor(Math.random() * allResponses.length)]
  }

  return "Please ask me more clearly doctor. I prefer brief conversations."
}
