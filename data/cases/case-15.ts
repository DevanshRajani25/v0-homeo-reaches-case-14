import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 15,
  patientName: "Arun Kumar",
  age: 28,
  intro: "Doctor, I have been coughing for a week now and it's getting worse.",
  image: "/images/cases/case-15-cough.jpg",
  defaultResponse: "Please ask more clearly.",
  keywords: [
    {
      keywords: ["cough", "coughing"],
      response: "Doctor, this cough started a week ago and it won't stop. It's quite bothersome.",
    },
    { keywords: ["pain", "chest", "ache"], response: "My chest feels sore and it hurts when I cough hard." },
    { keywords: ["sleep", "night", "sleeping"], response: "I can't sleep properly because the cough wakes me up at night." },
    {
      keywords: ["worse", "aggravates", "morning"],
      response: "It's worse in the morning when I wake up. I cough a lot then.",
    },
    { keywords: ["relief", "better", "warm"], response: "Warm liquids help a bit, and rest seems to ease it." },
  ],
  vitals: {
    stats: [
      { label: "Temp", value: "99.5°F" },
      { label: "Pulse", value: "82/min" },
      { label: "BP", value: "120/76 mmHg" },
      { label: "RR", value: "22/min" },
    ],
  },
  diagnosis: {
    provisional: "Acute cough / Bronchitis",
    correct: ["bryonia", "phosphorus", "drosera"],
    correctText: "✅ Correct. Common remedies for acute cough.",
    wrongText: "❌ Incorrect. Consider remedies like Bryonia, Phosphorus, or Drosera for cough.",
    remedyInfo:
      "Bryonia – dry, painful cough worse from motion; Phosphorus – cough with chest pain; Drosera – spasmodic, whooping cough.",
  },
  quiz: [
    {
      question: "Main complaint:",
      options: ["Cough for a week", "Fracture", "Eye pain", "Sore throat"],
      correctIndex: 0,
    },
    {
      question: "Cough worse:",
      options: ["Morning", "Evening", "After meals", "During exercise"],
      correctIndex: 0,
    },
    {
      question: "Associated symptom:",
      options: ["Chest soreness", "Leg pain", "Headache", "Fever"],
      correctIndex: 0,
    },
    {
      question: "Sleep affected:",
      options: ["Yes, wakes up at night", "No", "Sleeps too much", "No change"],
      correctIndex: 0,
    },
    {
      question: "Most suitable remedy:",
      options: ["Arnica", "Bryonia", "Hepar sulph", "Aconite"],
      correctIndex: 1,
    },
  ],
}

export default def
