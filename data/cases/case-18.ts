import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 18,
  patientName: "Anil Sharma",
  age: 32,
  intro: "Doctor, I got a deep cut on my left hand with a sharp tool — it’s bleeding and burning a lot.",
  image: "/images/cases/case-18.jpg",
  defaultResponse: "Please ask more clearly.",
  keywords: [
    {
      keywords: ["cut", "injury", "wound"],
      response: "It was such a deep cut, doctor… I’m really scared looking at it 😢.",
    },
    { keywords: ["pain", "burning"], response: "The pain is burning and unbearable, I can’t even move my hand 😖." },
    { keywords: ["blood", "bleeding"], response: "So much blood is coming out… I feel weak and nervous 😰." },
    {
      keywords: ["healing", "stitches", "infection"],
      response: "Doctor, will this wound heal? I’m afraid of infection 😟.",
    },
    { keywords: ["work", "job"], response: "How will I do my work with this injury… I feel helpless 😞." },
  ],
  vitals: {
    stats: [
      { label: "Temp", value: "99°F" },
      { label: "Pulse", value: "96/min" },
      { label: "BP", value: "110/70 mmHg" },
      { label: "RR", value: "20/min" },
    ],
  },
  diagnosis: {
    provisional: "Incised wound (left hand)",
    correct: ["calendula"],
    correctText: "✅ Correct.",
    wrongText: "❌ Incorrect. The correct remedy is Calendula.",
    remedyInfo:
      "Calendula – wounds, cuts, lacerations; promotes healthy healing and prevents infection; raw, painful wounds with fear of infection.",
  },
  quiz: [
    {
      question: "Main complaint:",
      options: ["Cough", "Deep cut injury on hand", "Stomach pain", "Headache"],
      correctIndex: 1,
    },
    {
      question: "Main sensation:",
      options: ["Burning & severe pain", "Numbness only", "No pain", "Itching"],
      correctIndex: 0,
    },
    {
      question: "Associated complaint:",
      options: ["Fear of infection", "Fever", "Constipation", "Long-term appetite loss"],
      correctIndex: 0,
    },
    {
      question: "Major worry:",
      options: ["Hair fall", "Will wound heal or get infected", "Cold weather", "Weight gain"],
      correctIndex: 1,
    },
    { question: "Most suitable remedy:", options: ["Arnica", "Calendula", "Pulsatilla", "Bryonia"], correctIndex: 1 },
  ],
}

export default def
