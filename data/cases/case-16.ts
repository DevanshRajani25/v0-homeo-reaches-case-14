import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 16,
  patientName: "Rama Tiwari",
  age: 46,
  intro: "Doctor, this lump near my ear keeps growing… I’m very worried.",
  image: "/images/cases/case-16.jpg",
  defaultResponse: "Please ask more clearly.",
  keywords: [
    {
      keywords: ["swelling", "lump", "tumor"],
      response: "Doctor, this lump near my ear keeps growing… I’m really scared 😟.",
    },
    { keywords: ["pain", "painless"], response: "It doesn’t hurt, but I’m worried why it’s still increasing 😔." },
    {
      keywords: ["chewing", "eating", "mouth"],
      response: "I can eat normally, but I keep thinking if it will get worse 😣.",
    },
    { keywords: ["surgery", "operation"], response: "Everyone says I may need surgery… I feel nervous 😰." },
    {
      keywords: ["appearance", "face", "embarrassed"],
      response: "This swelling makes me feel so embarrassed… I don’t like going out 😢.",
    },
  ],
  vitals: {
    stats: [
      { label: "Temp", value: "98.6°F" },
      { label: "Pulse", value: "80/min" },
      { label: "BP", value: "120/78 mmHg" },
      { label: "RR", value: "18/min" },
    ],
    summary: ["Firm, well-defined swelling in right parotid region, non-tender; ear lobe displaced upward."],
  },
  diagnosis: {
    provisional: "Parotid region glandular swelling",
    correct: ["conium"],
    correctText: "✅ Correct.",
    wrongText: "❌ Incorrect. The correct remedy is Conium.",
    remedyInfo:
      "Conium – slow-growing, painless glandular indurations (parotid/breast/thyroid); hard lumps; suited to anxious, shy patients.",
  },
  quiz: [
    {
      question: "Main complaint:",
      options: ["Headache", "Swelling in parotid region", "Abdominal pain", "Cough"],
      correctIndex: 1,
    },
    {
      question: "Swelling described as:",
      options: ["Painless, slow-growing", "Very painful and red", "Ulcerated and bleeding", "Sudden, fleeting"],
      correctIndex: 0,
    },
    {
      question: "Associated sign:",
      options: ["Ear lobe pushed up", "Loss of appetite", "Breathing difficulty", "Loose stools"],
      correctIndex: 0,
    },
    {
      question: "Major worry:",
      options: ["Hair loss", "Swelling becoming cancerous", "Fever", "Cold weather"],
      correctIndex: 1,
    },
    {
      question: "Most suitable remedy:",
      options: ["Belladonna", "Conium", "Pulsatilla", "Arsenicum"],
      correctIndex: 1,
    },
  ],
}

export default def
