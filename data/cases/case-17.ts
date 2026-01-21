import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 17,
  patientName: "Himmat Wala",
  age: 32,
  intro: "Doctor, there’s a very painful, red swelling on my jaw — it feels like it will burst.",
  image: "/images/cases/case-17.jpg",
  defaultResponse: "Please ask more clearly.",
  keywords: [
    { keywords: ["pain", "hurt", "severe"], response: "The pain is unbearable, I feel like shouting 😣." },
    {
      keywords: ["redness", "swelling", "lump"],
      response: "This swelling has become so red and hot, it worries me 😟.",
    },
    { keywords: ["pus", "burst", "abscess"], response: "It feels like it will burst anytime, I’m scared 😰." },
    { keywords: ["fever", "weakness"], response: "I feel weak with slight fever because of this swelling 😔." },
    {
      keywords: ["irritation", "angry", "cant tolerate"],
      response: "I get so irritated, even small things make me angry now 😡.",
    },
  ],
  vitals: {
    stats: [
      { label: "Temp", value: "100.4°F" },
      { label: "Pulse", value: "88/min" },
      { label: "BP", value: "118/78 mmHg" },
      { label: "RR", value: "20/min" },
    ],
  },
  diagnosis: {
    provisional: "Acute abscess/boil (jaw)",
    correct: ["heparsulph", "hepar sulph", "hepar-sulph"],
    correctText: "✅ Correct.",
    wrongText: "❌ Incorrect. The correct remedy is Hepar sulph.",
    remedyInfo:
      "Hepar sulph – painful, pus-forming abscesses/boils; extreme sensitivity to touch and cold air; irritable, impatient; ‘will burst’ sensation.",
  },
  quiz: [
    {
      question: "Main complaint:",
      options: ["Headache", "Painful swelling on jaw", "Stomach ache", "Cough"],
      correctIndex: 1,
    },
    {
      question: "Swelling description:",
      options: ["Hard, painless", "Red, throbbing, very painful", "Ulcer with bleeding", "Sudden and fleeting"],
      correctIndex: 1,
    },
    {
      question: "Associated issue:",
      options: ["Disturbed sleep due to pain", "Diarrhea", "Hair loss", "Breathing difficulty"],
      correctIndex: 0,
    },
    {
      question: "Temperament:",
      options: ["Calm & cheerful", "Very irritable & impatient", "Fearful of ghosts", "Shy & reserved"],
      correctIndex: 1,
    },
    {
      question: "Most suitable remedy:",
      options: ["Conium", "Hepar sulph", "Pulsatilla", "Nux vomica"],
      correctIndex: 1,
    },
  ],
}

export default def
