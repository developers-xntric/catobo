'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useContactPopup } from '@/contexts/ContactPopupContext'
import Link from 'next/link'

interface TabContent {
  id: string
  title: string
  subTitle: string
  description: string
  image: string
  primaryBtnText: string
  primaryBtnHref: string
  secondaryBtnText: string
}

const tabsData: TabContent[] = [
  {
    id: 'aviation',
    title: 'Aviation Consultation & Firefighting Design',
    subTitle: ' ',
    description:
      'Expert consultation and engineered fire-fighting system designs tailored for heliports, vertiports, and airfield environments. We ensure safety, compliance, and operational readiness from concept to execution.',
    image: '/aviation-consultant.png',
    primaryBtnText: 'Explore More',
    primaryBtnHref: '/aviation/consultation-design',
    secondaryBtnText: 'Book Your Consultation',
  },
  {
    id: 'medical',
    title: 'Helipad & VertiPad Construction',
    subTitle: '',
    description:
      'End-to-end construction of helipads and vertipads, engineered for structural integrity, load performance, and aviation safety. Built to meet operational demands and international standards.',
    image: '/aviation/helipad-vertiports.png',
    primaryBtnText: 'Explore More',
    primaryBtnHref: '/aviation/helipad-construction',
    secondaryBtnText: 'Book Your Consultation',
  },
  {
    id: 'report',
    title: 'Heliport & Vertiport Lighting Systems',
    subTitle: '',
    description:
      'High-performance lighting systems designed to enhance visibility, guidance, and safety during landing and take-off. Our solutions ensure reliable operation in all weather and light conditions.',
    image: '/aviation/heliport-lightning.png',
     primaryBtnText: 'Explore More',
    primaryBtnHref: '/aviation/helideck-and-helipad-lighting-systems',
    secondaryBtnText: 'Book Your Consultation',
  },
  {
    id: 'transport',
    title: 'Heliport & Vertiport Firefighting Systems',
    subTitle: '',
    description:
      'Advanced fire-fighting solutions engineered to protect aircraft, crew, and infrastructure. Designed for rapid response, compliance, and seamless integration with heliport operations.',
    image: '/aviation/firefighting.png',
    primaryBtnText: 'Explore More',
    primaryBtnHref: '/aviation/firefighting-systems',
    secondaryBtnText: 'Book Your Consultation',
  },
  {
    id: 'AirfieldLightingSystems',
    title: 'Airfield Lighting Systems',
    subTitle: '',
    description:
      'Precision airfield lighting solutions that support safe aircraft ground movement and runway operations. Engineered for durability, efficiency, and consistent performance in demanding environments.',
    image: '/aviation/AirfieldLightingSystems.png',
    primaryBtnText: 'Explore More',
    primaryBtnHref: '/aviation/helideck-and-helipad-lighting-systems',
    secondaryBtnText: 'Book Your Consultation',
  },
  {
    id: 'AircraftWarningLights',
    title: 'Aircraft Warning Lights',
    subTitle: '',
    description:
      'High-visibility aircraft warning lights for towers, buildings, and obstacles. Designed to ensure maximum visibility, regulatory compliance, and long-term reliability.',
    image: '/aviation/AircraftWarningLights.png',
   primaryBtnText: 'Explore More',
    primaryBtnHref: '/aviation/aircraft-warning-lights',
    secondaryBtnText: 'Book Your Consultation',
  },
  {
    id: 'PortableHelipadAndVertiPad',
    title: 'Portable Helipad & VertiPad',
    subTitle: '',
    description:
      'Flexible, rapid-deployment helipad and lighting systems for temporary or remote operations. Ideal for emergency response, offshore use, and mobile aviation requirements.',
    image: '/aviation/PortableHelipadAndVertiPad.png',
    primaryBtnText: 'Explore More',
    primaryBtnHref: '/aviation/portable-helipad',
    secondaryBtnText: 'Book Your Consultation',
  },
  {
    id: 'PortableLightingSolutions',
    title: 'Portable Lighting Solutions',
    subTitle: '',
    description:
      'Flexible, rapid-deployment helipad and lighting systems for temporary or remote operations. Ideal for emergency response, offshore use, and mobile aviation requirements.',
    image: '/aviation/PortableLightingSolutions.png',
    primaryBtnText: 'Explore More',
    primaryBtnHref: '/aviation/portable-lighting',
    secondaryBtnText: 'Book Your Consultation',
  },
]

export default function ConsultationTabs() {
  const [activeTab, setActiveTab] = useState('aviation')
  const currentTab = tabsData.find((tab) => tab.id === activeTab)!
  const { open } = useContactPopup()

  return (
    <div>
      <div className="mx-auto">
        {/* Tabs Navigation */}
        <div className="mb-6 grid grid-cols-2 sm:grid-cols-4 border border-[#168DCA]">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`border border-[#168DCA] px-2 sm:px-6 lg:px-12 py-3 text-center text-[11px] sm:text-sm lg:text-base font-light transition-colors whitespace-normal break-words ${activeTab === tab.id
                  ? 'text-white'
                  : 'bg-white text-[#168DCA] hover:bg-gray-200'
                }`}
              style={activeTab === tab.id ? { background: 'var(--New-button, linear-gradient(93deg, #168DCA -24.15%, #0F2453 134.7%))' } : {}}
            >
              <div className="font-medium">{tab.title}{tab.subTitle}</div>
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="overflow-hidden rounded-xl">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="flex items-stretch rounded-[10px] max-h-[200px] sm:max-h-[300px] md:max-h-[350px] lg:max-h-none">
              <img
                src={currentTab.image}
                alt={currentTab.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center md:px-8 py-6 sm:py-10 space-y-3 md:space-y-6">
              <h2 className="text-[18px] sm:text-xl md:text-3xl lg:text-[40px] font-medium leading-[1.2] text-[#000000]">
                {currentTab.title}
              </h2>

              <p className="text-[14px] sm:text-base md:text-lg text-[#7C7E86] tracking-normal">
                {currentTab.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link   href={currentTab.primaryBtnHref}>

                  <Button
                    className="w-full sm:w-auto px-6 py-2 text-white sm:px-8"
                    style={{ background: 'var(--New-button, linear-gradient(93deg, #168DCA -24.15%, #0F2453 134.7%))' }}
                  >
                    {currentTab.primaryBtnText}
                  </Button>

                </Link>
                <Button
                  onClick={open}
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-black px-6 py-2 text-black hover:bg-blue-50 sm:px-8"
                >
                  {currentTab.secondaryBtnText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
