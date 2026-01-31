import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 16,
  patientName: "Ruhi",
  age: 23,
  intro: "Doctor, my periods are very irregular… I'm emotionally stressed about it.",
  image: "/images/cases/case-16-abdominal-pain.jpg",
  defaultResponse: "Please ask me more clearly doctor… I prefer gentle conversations.",
  keywords: [
    {
      keywords: ["period", "menses", "pcod", "cycle"],
      response: "My periods are very irregular doctor… (sad face) sometimes they stop for months.",
    },
    {
      keywords: ["weight", "gain", "obesity"],
      response: "I gain weight easily doctor… (worried expression) despite trying to control it.",
    },
    {
      keywords: ["mood", "emotional", "stress", "anxiety"],
      response: "I become very emotional doctor… (tearful eyes) small things affect me.",
    },
    {
      keywords: ["pain", "cramps", "discomfort"],
      response: "It feels dull and heavy doctor… (mild discomfort on face) sometimes dragging pain.",
    },
    {
      keywords: ["better", "relief", "help", "comfort"],
      response: "I feel better when someone talks kindly doctor… (eyes soften) fresh air helps too.",
    },
  ],
  vitals: {
    stats: [
      { label: "BP", value: "110/70 mmHg" },
      { label: "Pulse", value: "76/min" },
      { label: "Temp", value: "98.2°F" },
      { label: "RR", value: "18/min" },
    ],
    summary: ["Mild, emotional, seeks reassurance", "Abdominal exam: Mild pelvic tenderness, hormonal imbalance signs"],
  },
  diagnosis: {
    provisional: "Polycystic Ovarian Disease (PCOD)",
    correct: ["pulsatilla"],
    correctText: "✅ Correct. PULSATILLA NIGRICANS is indicated.",
    wrongText: "❌ Incorrect. The correct remedy is PULSATILLA NIGRICANS.",
    remedyInfo:
      "PULSATILLA NIGRICANS – Irregular delayed menses, hormonal imbalance, mild emotional nature, thirstless, better by consolation and fresh air, suitable for changeable mood patients.",
  },
  quiz: [
    {
      question: "Mental nature of patient:",
      options: ["Aggressive", "Reserved", "Emotional", "Fearful"],
      correctIndex: 2,
    },
    {
      question: "Thirst in this case:",
      options: ["Excessive", "Normal", "Thirstless", "Increased at night"],
      correctIndex: 2,
    },
    {
      question: "Best modality:",
      options: ["Warm room", "Rest alone", "Consolation", "Pressure"],
      correctIndex: 2,
    },
    {
      question: "Menstrual pattern:",
      options: ["Regular", "Profuse", "Irregular delayed", "Painful scanty"],
      correctIndex: 2,
    },
    {
      question: "Most suitable remedy:",
      options: ["Sepia", "Nat mur", "Pulsatilla", "Calcarea"],
      correctIndex: 2,
    },
  ],
}

export default def
