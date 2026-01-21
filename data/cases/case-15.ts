import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 15,
  patientName: "Amit Verma",
  age: 32,
  intro: "Doctor, they told me my hand bone is fractured… the pain and swelling are terrible.",
  image: "/images/cases/case-15.jpg",
  defaultResponse: "Please ask more clearly.",
  keywords: [
    {
      keywords: ["fracture", "bone", "x-ray"],
      response: "Doctor, they told me it’s a fracture in my hand… I feel so helpless 😣.",
    },
    { keywords: ["pain", "severe", "sharp"], response: "The pain is so sharp, I can’t even move my hand 😖." },
    { keywords: ["swelling", "bruising"], response: "My hand is swollen and looks bruised… it scares me 😢." },
    {
      keywords: ["movement", "work", "holding objects"],
      response: "I can’t even hold things properly… it makes me frustrated 😔.",
    },
    { keywords: ["rest", "elevation"], response: "If I rest and keep my hand up, I feel a little better 🙏." },
  ],
  vitals: {
    stats: [
      { label: "Temp", value: "99°F" },
      { label: "Pulse", value: "88/min" },
      { label: "BP", value: "118/74 mmHg" },
      { label: "RR", value: "20/min" },
    ],
  },
  diagnosis: {
    provisional: "Fracture 5th metacarpal",
    correct: ["symphytum"],
    correctText: "✅ Correct.",
    wrongText: "❌ Incorrect. The correct remedy is Symphytum.",
    remedyInfo:
      "Symphytum – fractures and bone injuries; relieves pain and supports healing/union; pain from the lightest touch/pressure.",
  },
  quiz: [
    {
      question: "Main complaint:",
      options: ["Headache", "Fracture of hand", "Cough", "Abdominal pain"],
      correctIndex: 1,
    },
    {
      question: "Fracture location:",
      options: ["Right leg", "Right little finger (metacarpal)", "Left arm", "Skull"],
      correctIndex: 1,
    },
    {
      question: "Pain worse:",
      options: ["Touch and movement", "Sleeping", "Eating food", "Drinking water"],
      correctIndex: 0,
    },
    {
      question: "Gives relief:",
      options: ["Loud music", "Keeping hand elevated", "Walking fast", "Talking to friends"],
      correctIndex: 1,
    },
    {
      question: "Most suitable remedy:",
      options: ["Pulsatilla", "Carbo Veg", "Symphytum", "Belladonna"],
      correctIndex: 2,
    },
  ],
}

export default def
