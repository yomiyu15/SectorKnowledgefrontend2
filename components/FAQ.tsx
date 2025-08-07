"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FAQItem {
  id: number
  question: string
  answer: string
}

export default function FAQ() {
  const [faqs, setFaqs] = useState<FAQItem[]>([])
  const [openItems, setOpenItems] = useState<number[]>([])

  useEffect(() => {
    fetchFAQs()
  }, [])

  const fetchFAQs = async () => {
    try {
      const response = await fetch("https://backend-service-1wqi.onrender.com/api/faqs")
      if (response.ok) {
        const data = await response.json()
        setFaqs(data)
      }
    } catch (error) {
      console.error("Error fetching FAQs:", error)
      // Fallback FAQs
      setFaqs([
        {
          id: 1,
          question: "How do I access the product catalog?",
          answer:
            'Click the "Get Started" button on the homepage to access our comprehensive product catalog with detailed documentation.',
        },
        {
          id: 2,
          question: "Are the product documents updated regularly?",
          answer:
            "Yes, our product documentation is updated regularly to reflect the latest features, terms, and conditions.",
        },
        {
          id: 3,
          question: "Can I download the product information?",
          answer: "Yes, all product documents are available in PDF format and can be downloaded for offline viewing.",
        },
      ])
    }
  }

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#fff7ed] to-[#f8fafc]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-[#0084bd] mb-3 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-500">Find answers to common questions about our products and services.</p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.id} className={`rounded-2xl shadow-lg border border-orange-100 bg-white transition-all duration-300 ${openItems.includes(faq.id) ? 'ring-2 ring-orange-400' : ''}`}>
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-lg font-semibold text-gray-800 rounded-2xl focus:outline-none hover:bg-orange-50 transition-colors"
                onClick={() => toggleItem(faq.id)}
                aria-expanded={openItems.includes(faq.id)}
              >
                <span>{faq.question}</span>
                <span className={`ml-4 transition-transform duration-300 ${openItems.includes(faq.id) ? 'rotate-180 text-orange-500' : 'text-orange-400'}`}>
                  {openItems.includes(faq.id) ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </span>
              </button>
              {openItems.includes(faq.id) && (
                <div className="px-6 pb-5 text-gray-700 text-base animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
