'use client'

import { Camera, Download, Printer, Gift, Star, Clock } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'



const getFeatures = (t: any) => [
  {
    icon: Camera,
    title: t.features.highQuality,
    description: t.features.highQualityDesc
  },
  {
    icon: Download,
    title: t.features.instantDigital,
    description: t.features.instantDigitalDesc
  },
  {
    icon: Printer,
    title: t.features.unlimitedPrints,
    description: t.features.unlimitedPrintsDesc
  },
  {
    icon: Gift,
    title: t.features.funProps,
    description: t.features.funPropsDesc
  },
  {
    icon: Star,
    title: t.features.customBranding,
    description: t.features.customBrandingDesc
  },
  {
    icon: Clock,
    title: t.features.quickSetup,
    description: t.features.quickSetupDesc
  }
]

export default function FeaturesCard() {
  const { t } = useLanguage()
  const features = getFeatures(t)
  
  return (
    <div className="relative pt-40">
      {/* Top gradient transition from services section */}
      <div 
        className="absolute top-0 left-0 right-0 h-80 w-full bg-gradient-to-b from-gray-900 via-[rgba(17,24,39,0.8)] to-[rgba(88,28,135,0.95)] z-10"
        style={{
          maskImage: 'linear-gradient(to bottom, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)'
        }}
      />

      <section id="features" className="relative py-32 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.features.title}
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-purple-200" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}