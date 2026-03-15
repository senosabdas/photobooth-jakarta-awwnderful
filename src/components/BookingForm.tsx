'use client'

import { Calendar, Clock, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { trackFormSubmission } from '@/lib/analytics'

interface BookingFormProps {
  source?: string;
}

export default function BookingForm({ source = 'contact-form' }: BookingFormProps) {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    details: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send inquiry')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', date: '', details: '' })
      
      // Track successful form submission
      trackFormSubmission(source)
    } catch (error) {
      console.error('Error sending inquiry:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              {t.contact.subtitle}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-purple-200" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{t.contact.flexibleScheduling}</h3>
                  <p className="text-gray-200">{t.contact.flexibleSchedulingDesc}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-200" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{t.contact.durationOptions}</h3>
                  <p className="text-gray-200">{t.contact.durationOptionsDesc}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-200" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{t.contact.serviceAreas}</h3>
                  <p className="text-gray-200">{t.contact.serviceAreasDesc}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.contact.eventDate}
                </label>
                <input
                  type={formData.date ? "date" : "text"}
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  onFocus={(e) => {
                    e.target.type = 'date';
                    e.target.showPicker();
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 [color-scheme:light] text-gray-900"
                  placeholder="Pilih tanggal event"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.contact.eventDetails}
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900"
                  placeholder={t.contact.eventDetailsPlaceholder}
                  required
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg">
                  {t.contact.successMessage}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                  {t.contact.errorMessage}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>{t.contact.sending}</>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t.contact.sendInquiry}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 