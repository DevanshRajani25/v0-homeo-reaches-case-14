import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 19,
  patientName: "Mother of Aarav (4 years)",
  age: "Child",
  intro: "Doctor, his eye turned red with sticky yellow discharge since yesterday.",
  image: "/images/cases/case-19.jpg",
  defaultResponse: "Please ask more clearly.",
  keywords: [
    { keywords: ["eye", "redness", "swelling"], response: "His eye is so red and swollen, it looks painful 😢." },
    {
      keywords: ["discharge", "sticky", "pus"],
      response: "Every morning the yellow sticky discharge closes his eyelids… I feel helpless 😞.",
    },
    { keywords: ["pain", "burning", "itching"], response: "He keeps crying and rubbing the eye, saying it burns 😖." },
    {
      keywords: ["infection", "healing"],
      response: "Doctor, will this infection go away soon? I’m scared it might spread 😟.",
    },
    { keywords: ["child", "small", "worried"], response: "He is so small… I get very anxious seeing him suffer 😔." },
  ],
  vitals: {
    stats: [
      { label: "Temp", value: "99.5°F" },
      { label: "Pulse", value: "92/min" },
      { label: "BP", value: "100/65 mmHg" },
      { label: "RR", value: "22/min" },
    ],
  },
  diagnosis: {
    provisional: "Acute conjunctivitis (child)",
    correct: ["euphrasia"],
    correctText: "✅ Correct.",
    wrongText: "❌ Incorrect. The correct remedy is Euphrasia.",
    remedyInfo:
      "Euphrasia – eye infections with redness, burning, watery and sticky discharge; eyelids stick in the morning; relieves irritation.",
  },
  quiz: [
    {
      question: "Main complaint:",
      options: ["Ear pain", "Red eye with sticky discharge", "Stomach pain", "Headache"],
      correctIndex: 1,
    },
    {
      question: "Eye sensation:",
      options: ["Burning & irritation", "Numbness only", "No pain", "Skin itching only"],
      correctIndex: 0,
    },
    {
      question: "Morning eyelids:",
      options: ["Normal", "Stuck together due to sticky discharge", "Leg swelling", "Skin rash"],
      correctIndex: 1,
    },
    {
      question: "Mother’s worry:",
      options: ["Hair fall", "Will infection heal or spread", "Child not eating chocolate", "Weight gain"],
      correctIndex: 1,
    },
    { question: "Most suitable remedy:", options: ["Arnica", "Euphrasia", "Pulsatilla", "Bryonia"], correctIndex: 1 },
  ],
}

export default def
