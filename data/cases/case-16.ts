import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 16,
  patientName: "",
  age: 0,
  intro: "",
  image: "/images/cases/case-16-abdominal-pain.jpg",
  defaultResponse: "",
  keywords: [],
  vitals: {
    stats: [],
    summary: [],
  },
  diagnosis: {
    provisional: "",
    correct: [],
    correctText: "",
    wrongText: "",
    remedyInfo: "",
  },
  quiz: [],
}

export default def
