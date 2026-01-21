/* Remedy info page (Result & Explanation) */
"use client"

import { useEffect, useMemo, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { CaseDefinition } from "@/types/case"
import { loadCaseByNumber } from "@/data/case-registry"
import { HomeoBackdrop } from "@/components/homeo-backdrop"

export default function RemedyPage() {
  const params = useParams()
  const router = useRouter()
  const id = Number(params?.id)
  const [activeCase, setActiveCase] = useState<CaseDefinition | null>(null)
  const [correct, setCorrect] = useState<boolean | null>(null)
  const [showWhy, setShowWhy] = useState(false)

  useEffect(() => {
    let mounted = true
    async function run() {
      if (id >= 3 && id <= 20) {
        const loaded = await loadCaseByNumber(id)
        if (!mounted) return
        setActiveCase(loaded)
      }
    }
    run()
    const cached = sessionStorage.getItem(`hr_case_${id}_diag`)
    if (cached) {
      try {
        const obj = JSON.parse(cached)
        setCorrect(Boolean(obj?.correct))
      } catch {}
    }
    return () => {
      mounted = false
    }
  }, [id])

  const remedyInfo = useMemo(() => {
    if (id === 1)
      return "Belladonna suits sudden, violent congestion: throbbing headache, red hot face, dry heat; worse light/noise/touch/jar; relief in dark quiet room with rest or cool applications."
    if (id === 2)
      return `About Ledum palustre:
- Ledum palustre is a great remedy for bruises, puncture wounds, and insect bites.
- It suits people who prefer cold, whose pains get worse by warmth or touch, and better by cold applications.
- It's often called the 'Arnica of the cold type' — calm, cool, yet deeply sore.`
    if (id === 5)
      return `About Ignatia Amara:
- Ignatia Amara is the premier remedy for grief, sadness, and emotional distress.
- Suited for sensitive, emotional individuals who suffer silently and prefer to be alone.
- Key features: contradictory symptoms (laughing and crying together), sighing, sobbing, worse from consolation.
- Mental state: depression, tearfulness, feelings of hopelessness, but lack courage for extreme actions.
- Modalities: worse from consolation and sympathy; better when busy or distracted.`
    return activeCase?.diagnosis?.remedyInfo || "Selected remedy matches the totality and modalities for this case."
  }, [id, activeCase])

  return (
    <main className="min-h-screen relative p-6">
      <HomeoBackdrop theme="mint" className="absolute inset-0 -z-10" />
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/90 rounded-3xl shadow-xl card-float">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-3xl font-extrabold text-indigo-700 text-center">Result & Explanation</h2>

            {id === 2 ? (
              correct ? (
                <p className="text-green-700 text-lg font-semibold">
                  ✅ Correct, this medicine is perfect for my case.
                </p>
              ) : (
                <p className="text-red-600 text-lg font-semibold">
                  ❌ No doctor, that medicine doesn't suit me. The right medicine is Ledum palustre.
                </p>
              )
            ) : correct ? (
              <p className="text-green-700 text-lg font-semibold">✅ Correct! Good remedy selection.</p>
            ) : (
              <p className="text-red-600 text-lg font-semibold">❌ Incorrect. See why and retry.</p>
            )}

            <div>
              <Button variant="outline" onClick={() => setShowWhy((s) => !s)} className="btn-bounce rounded-full">
                {showWhy ? "Hide Why" : "See Why"}
              </Button>
              {showWhy && <div className="mt-3 p-4 rounded-xl bg-indigo-50 border text-gray-800">{remedyInfo}</div>}
            </div>

            <div className="flex justify-center gap-3">
              <Button
                onClick={() => {
                  // clear correctness to retry
                  const cached = sessionStorage.getItem(`hr_case_${id}_diag`)
                  if (cached) {
                    try {
                      const obj = JSON.parse(cached)
                      obj.correct = null
                      sessionStorage.setItem(`hr_case_${id}_diag`, JSON.stringify(obj))
                    } catch {}
                  }
                  router.push(`/cases/${id}/diagnosis`)
                }}
                variant="outline"
                className="btn-bounce rounded-full px-6"
              >
                <ArrowLeft className="mr-2 w-4 h-4" /> Retry Diagnosis
              </Button>
              <Button
                onClick={() => router.push(`/cases/${id}/quiz`)}
                className="btn-bounce rounded-full px-8 text-white bg-gradient-to-r from-sky-500 to-indigo-500"
              >
                Start Quiz <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
