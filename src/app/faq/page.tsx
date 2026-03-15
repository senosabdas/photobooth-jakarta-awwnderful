'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Head from 'next/head'
import { redirect } from 'next/navigation'

// FAQ data structure
interface FAQItem {
  question: string
  answer: string
}

interface FAQCategory {
  title: string
  items: FAQItem[]
}

const faqData: FAQCategory[] = [
  {
    title: "Booking & Pricing",
    items: [
      {
        question: "How far in advance should I book your services?",
        answer: "We recommend booking at least 2-3 months in advance for regular events and 4-6 months for peak season events (like weddings in June-September). However, we can sometimes accommodate last-minute bookings depending on availability."
      },
      {
        question: "What is included in your standard package?",
        answer: "Our standard package includes 4 hours of photo booth service, unlimited prints, digital copies, professional attendant, props, custom backdrop, and online gallery access. We can customize packages to meet your specific needs."
      },
      {
        question: "Do you require a deposit to secure the booking?",
        answer: "Yes, we require a 50% deposit to secure your date. The remaining balance is due 7 days before the event. We accept various payment methods including bank transfer and credit cards."
      }
    ]
  },
  {
    title: "Photobooth Equipment & Setup",
    items: [
      {
        question: "How much space do you need for setup?",
        answer: "Space requirements vary by booth type. Our standard setup needs approximately 3x3 meters, while our 360° booth requires 4x4 meters. We'll provide detailed space requirements when you book."
      },
      {
        question: "Do you need power supply?",
        answer: "Yes, we need access to a standard power outlet within 5 meters of the setup location. Our equipment runs on standard 220V power supply."
      },
      {
        question: "How long does setup and teardown take?",
        answer: "We typically arrive 1-1.5 hours before the event for setup and require 30-45 minutes for teardown. This ensures everything is perfect when your event begins."
      },
      {
        question: "Will there be an attendant present?",
        answer: "Yes, a professional attendant will be present throughout the event to assist guests, ensure smooth operation, and maintain the prop station."
      },
      {
        question: "What happens if there's a technical issue?",
        answer: "Our equipment is thoroughly tested before each event. In the rare case of technical issues, our attendants are trained to resolve them quickly. We also have backup equipment available."
      },
      {
        question: "Can we extend the rental time during the event?",
        answer: "Yes, you can extend the rental time during the event if the schedule permits. Additional hours are prorated based on your package rate."
      },
      {
        question: "What types of photos can guests take?",
        answer: "Guests can take single shots, photo strips, boomerangs, GIFs, and videos depending on the booth type. All photos can be instantly shared via email, SMS, or QR code."
      },
      {
        question: "Can we customize the photo layout and design?",
        answer: "Yes! We offer full customization of photo templates, including your event details, logos, and custom designs. We'll work with you to create the perfect layout."
      },
      {
        question: "How long do guests have access to their photos?",
        answer: "All photos are available in our online gallery for 30 days after the event. You'll receive a USB drive with all high-resolution images within 7 days after the event."
      }
    ]
  },
  {
    title: "Decoration",
    items: [
      {
        question: "How much space do you need for setup?",
        answer: "Space requirements vary by booth type. Our standard setup needs approximately 3x3 meters, while our 360° booth requires 4x4 meters. We'll provide detailed space requirements when you book."
      },
      {
        question: "Do you need power supply?",
        answer: "Yes, we need access to a standard power outlet within 5 meters of the setup location. Our equipment runs on standard 220V power supply."
      },
      {
        question: "How long does setup and teardown take?",
        answer: "We typically arrive 1-1.5 hours before the event for setup and require 30-45 minutes for teardown. This ensures everything is perfect when your event begins."
      }
    ]
  },
  {
    title: "Event Documentations",
    items: [
      {
        question: "What types of photos can guests take?",
        answer: "Guests can take single shots, photo strips, boomerangs, GIFs, and videos depending on the booth type. All photos can be instantly shared via email, SMS, or QR code."
      },
      {
        question: "Can we customize the photo layout and design?",
        answer: "Yes! We offer full customization of photo templates, including your event details, logos, and custom designs. We'll work with you to create the perfect layout."
      },
      {
        question: "How long do guests have access to their photos?",
        answer: "All photos are available in our online gallery for 30 days after the event. You'll receive a USB drive with all high-resolution images within 7 days after the event."
      }
    ]
  },
  {
    title: "Event Day Experience",
    items: [
      {
        question: "Will there be an attendant present?",
        answer: "Yes, a professional attendant will be present throughout the event to assist guests, ensure smooth operation, and maintain the prop station."
      },
      {
        question: "What happens if there's a technical issue?",
        answer: "Our equipment is thoroughly tested before each event. In the rare case of technical issues, our attendants are trained to resolve them quickly. We also have backup equipment available."
      },
      {
        question: "Can we extend the rental time during the event?",
        answer: "Yes, you can extend the rental time during the event if the schedule permits. Additional hours are prorated based on your package rate."
      }
    ]
  }
]

function FAQSection({ category }: { category: FAQCategory }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white-900 mb-4">{category.title}</h2>
      <div className="space-y-4">
        {category.items.map((item, index) => (
          <div
            key={index}
            className="border border-white-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex items-center justify-between focus:outline-none"
            >
              <span className="font-medium text-gray-900">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-gray-600">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function FAQPage() {
  // This page should be redirected by middleware to /id/faq
  redirect('/id/faq')
  
  const [searchQuery, setSearchQuery] = useState("")
  
  // Filter FAQ data based on search query
  const filteredFaqData = faqData.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0)

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.flatMap(category => 
      category.items.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    )
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white-400 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white-600">
              Find answers to common questions about our services
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-12">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>

          {/* FAQ Sections */}
          {filteredFaqData.length > 0 ? (
            filteredFaqData.map((category, index) => (
              <FAQSection key={index} category={category} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No questions found matching your search.</p>
            </div>
          )}

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-white-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-white-600 mb-8">
              We're here to help. Contact us for more information.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
    </>
  )
} 