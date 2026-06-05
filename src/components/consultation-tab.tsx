'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface TabContent {
  id: string
  title: string
  subTitle: string
  description: string
  image: string
  primaryBtnText: string
  secondaryBtnText: string
}

const tabsData: TabContent[] = [
  {
    id: 'aviation',
    title: 'Aviation Consultation & Firefighting Design',
    subTitle: ' ',
    description:
      'Expert consultation and engineering design services tailored for helicopters, vertiports, and airfield environments. We ensure safety, compliance, and operational efficiency.',
    image: '/aviation-consultant.png',
    primaryBtnText: 'Explore More',
    secondaryBtnText: 'Book Your Consultation',
  },
  {
    id: 'medical',
    title: 'Helipad & VertiPad Construction',
    subTitle: '',
    description:
      'Specialized lighting systems designed for medical facilities and surgical environments. Our solutions provide optimal illumination for critical procedures with precision and reliability.',
    image: '/aviation-consultant.png',
    primaryBtnText: 'Learn More',
    secondaryBtnText: 'Request Quote',
  },
  {
    id: 'report',
    title: 'Heliport & Vertiport Lighting Systems',
    subTitle: '',
    description:
      'Comprehensive reporting and support services to keep your lighting systems running at peak performance. We provide detailed analytics and continuous monitoring.',
    image: '/aviation-consultant.png',
    primaryBtnText: 'View Reports',
    secondaryBtnText: 'Get Support',
  },
  {
    id: 'transport',
    title: 'Heliport & Vertiport Firefighting Systems',
    subTitle: '',
    description:
      'End-to-end support and transport solutions for all your lighting equipment needs. We ensure safe delivery and professional installation at your location.',
    image: '/aviation-consultant.png',
    primaryBtnText: 'Schedule Delivery',
    secondaryBtnText: 'Contact Us',
  },
  {
    id: 'AirfieldLightingSystems',
    title: 'Airfield Lighting Systems',
    subTitle: '',
    description:
      'Expert consultation and engineering design services tailored for helicopters, vertiports, and airfield environments. We ensure safety, compliance, and operational efficiency.',
    image: '/aviation-consultant.png',
    primaryBtnText: 'Explore More',
    secondaryBtnText: 'Book Your Consultation',
  },
  {
    id: 'AircraftWarningLights',
    title: 'Aircraft Warning Lights',
    subTitle: '',
    description:
      'Specialized lighting systems designed for medical facilities and surgical environments. Our solutions provide optimal illumination for critical procedures with precision and reliability.',
    image: '/aviation-consultant.png',
    primaryBtnText: 'Learn More',
    secondaryBtnText: 'Request Quote',
  },
  {
    id: 'PortableHelipadAndVertiPad',
    title: 'Portable Helipad & VertiPad',
    subTitle: '',
    description:
      'Comprehensive reporting and support services to keep your lighting systems running at peak performance. We provide detailed analytics and continuous monitoring.',
    image: '/aviation-consultant.png',
    primaryBtnText: 'View Reports',
    secondaryBtnText: 'Get Support',
  },
  {
    id: 'PortableLightingSolutions',
    title: 'Portable Lighting Solutions',
    subTitle: '',
    description:
      'End-to-end support and transport solutions for all your lighting equipment needs. We ensure safe delivery and professional installation at your location.',
    image: '/aviation-consultant.png',
    primaryBtnText: 'Schedule Delivery',
    secondaryBtnText: 'Contact Us',
  },
]

export default function ConsultationTabs() {
  const [activeTab, setActiveTab] = useState('aviation')
  const currentTab = tabsData.find((tab) => tab.id === activeTab)!

  return (
    <div className=" ">
      <div className=" mx-auto">
        {/* Tabs Navigation */}
        <div className="mb-6 grid grid-cols-2 sm:grid-cols-4 border border-[#168DCA]">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`border border-[#168DCA] px-12 py-3 text-center text-sm font-light transition-colors sm:text-base ${
                activeTab === tab.id
                  ? 'text-white'
                  : 'bg-white text-[#168DCA] hover:bg-gray-200'
              }`}
              style={activeTab === tab.id ? { background: 'var(--New-button, linear-gradient(93deg, #168DCA -24.15%, #0F2453 134.7%))' } : {}}
            >
              <div className="font-medium ">{tab.title}{tab.subTitle}</div>
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="overflow-hidden rounded-xl">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="flex items-stretch">
              <img
                src={currentTab.image}
                alt={currentTab.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 space-y-3  md:space-y-6">
              <h2 className="text-[20px] md:text-3xl lg:text-[40px] font-medium leading-[1.2] text-[#000000]">
                {currentTab.title}
              </h2>

              <p className="text-base md:text-lg text-[#7C7E86] tracking-normal">
                {currentTab.description}
              </p>

              {/* Buttons */}
              <div className=" flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button
                  className="px-6 py-2 text-white sm:px-8"
                  style={{ background: 'var(--New-button, linear-gradient(93deg, #168DCA -24.15%, #0F2453 134.7%))' }}
                >
                  {currentTab.primaryBtnText}
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-blue-600 px-6 py-2 text-blue-600 hover:bg-blue-50 sm:px-8"
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
