import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 20,
  patientName: "Raj Vagha",
  age: 23,
  intro: "Doctor, I noticed a curvature… I feel very ashamed and anxious about my future.",
  image: "/images/cases/case-20.jpg",
  defaultResponse: "Please ask more clearly.",
  keywords: [
    { keywords: ["curvature", "bent", "deformity"], response: "My penis looks bent… I feel very ashamed 😔." },
    {
      keywords: ["pain", "tightness", "erection"],
      response: "It feels tight and painful whenever I get an erection 😖.",
    },
    {
      keywords: ["sex", "relationship", "marriage"],
      response: "Doctor, how will I get married or face my partner like this? I feel hopeless 😟.",
    },
    {
      keywords: ["healing", "normal", "cure"],
      response: "Will I ever be normal again, doctor? Please tell me honestly 😢.",
    },
    { keywords: ["confidence", "shame"], response: "I don’t feel confident… I avoid talking to friends about it 😞." },
  ],
  vitals: {
    stats: [
      { label: "Temp", value: "98.6°F" },
      { label: "Pulse", value: "84/min" },
      { label: "BP", value: "112/72 mmHg" },
      { label: "RR", value: "20/min" },
    ],
  },
  diagnosis: {
    provisional: "Penile curvature (Peyronie-like picture)",
    correct: ["thuja"],
    correctText: "✅ Correct.",
    wrongText: "❌ Incorrect. The correct remedy is Thuja.",
    remedyInfo:
      "Thuja – abnormal growths/deformities & genital complaints; useful in curvature and low confidence due to private issues; helps confidence and physical improvement.",
  },
  quiz: [
    {
      question: "Main complaint:",
      options: ["Cough", "Curvature of penis", "Stomach pain", "Headache"],
      correctIndex: 1,
    },
    {
      question: "Problem worse:",
      options: ["During erection", "During sleep", "During eating", "During walking"],
      correctIndex: 0,
    },
    {
      question: "Associated mental complaint:",
      options: ["Fear of infection", "Lack of confidence & shame", "Headache at night", "Anger with family"],
      correctIndex: 1,
    },
    {
      question: "Major worry:",
      options: ["Hair fall", "Marriage & future relationship", "Cold weather", "Weight gain"],
      correctIndex: 1,
    },
    { question: "Most suitable remedy:", options: ["Arnica", "Thuja", "Pulsatilla", "Bryonia"], correctIndex: 1 },
  ],
}

export default def
