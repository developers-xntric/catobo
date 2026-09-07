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
    title: 'Aviation Consultation',
    subTitle: ' ',
    description:
      'Every successful aviation project starts with the right planning. Catobo provides expert consultation for helipads, vertiports, and aviation infrastructure from concept through operational approval. Our team carries out feasibility studies, OLS assessments, regulatory compliance reviews, and authority coordination. We help clients make informed decisions while minimizing risks and delays. From the first idea to certification, we are your trusted aviation partner',
    image: '/consultation.png',
    primaryBtnText: 'Explore More',
    primaryBtnHref: '/aviation/consultation',
    secondaryBtnText: 'Book Your Consultation',
  },
  {
    id: 'medical',
    title: 'Heliport & Vertiport Construction',
    subTitle: '',
    description:
      'Catobo delivers complete turnkey heliport and vertiport construction solutions for Hospitals, Airports, Government, Military, Offshore, and Commercial Facilities. Our expertise covers both ground-level helipads and elevated aluminium helidecks, providing the most suitable solution for each application. Our services include Design, Engineering, Civil Works, Structural Works, Aluminium Helideck Systems, Lighting, Firefighting Systems, Electrical Infrastructure, Testing, Commissioning, and Certification. We do undertake Annual Maintenance Contracts to ensure the operational readiness of Heliports and Vertiports systems at all times. Every project is designed and constructed in compliance with applicable aviation standards and operational requirements. From concept and authority approvals to final certification and handover, Catobo provides a single point of responsibility for the complete project lifecycle.',
    image: '/vertipads-construction.png',
    primaryBtnText: 'Explore More',
    primaryBtnHref: '/aviation/heliport-vertiport-construction',
    secondaryBtnText: 'Book Your Consultation',
  },
  {
    id: 'report',
    title: 'Heliport & Vertiport Lighting Systems',
    subTitle: '',
    description:
      'Safe helicopter operations depend on reliable visual guidance. Catobo designs, supplies, installs, and commissions complete heliport and vertiport lighting systems, including perimeter lights, floodlights, illuminated wind cones, approach lighting, HAPI systems, and control panels. Our lighting solutions are selected for long service life, low maintenance, and dependable performance. Every installation is designed to meet international aviation standards and operational requirements.',
    image: '/vertiport-lighting-systems.png',
     primaryBtnText: 'Explore More',
    primaryBtnHref: '/aviation/helideck-and-helipad-lighting-systems',
    secondaryBtnText: 'Book Your Consultation',
  },
  {
    id: 'transport',
    title: 'Heliport & Vertiport Firefighting Systems',
    subTitle: '',
    description:
      'Fire protection is a critical part of every heliport and vertiport. Catobo delivers integrated firefighting systems designed to meet aviation safety requirements and authority regulations. Our solutions include foam systems (Trolley type and DIFF type), extinguishers, hydrants, monitors, emergency equipment, and associated infrastructure. Each system is engineered to provide rapid response while ensuring reliability and compliance. We also support testing, commissioning, and operational readiness.',
    image: '/vertiport-firefighting.png',
    primaryBtnText: 'Explore More',
    primaryBtnHref: '/aviation/firefighting-systems',
    secondaryBtnText: 'Book Your Consultation',
  },
  {
    id: 'AirfieldLightingSystems',
    title: 'Airfield Lighting Systems',
    subTitle: '',
    description:
      'Catobo delivers complete airfield lighting solutions for airports, military airbases, private airfields, and aviation facilities. Our expertise includes runway, taxiway, apron, and approach lighting systems, together with control and monitoring solutions. Every system is engineered to provide maximum reliability, operational efficiency, and regulatory compliance. From design and supply to installation, testing, commissioning, and maintenance, we offer complete lifecycle support. Our turnkey approach ensures safe and efficient aircraft operations in all conditions.',
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
      'Catobo supplies ICAO and FAA-compliant aircraft warning lights for buildings, towers, bridges, cranes, wind turbines, and other tall structures. Our product range includes low, medium, and high-intensity LED obstruction lighting systems with intelligent monitoring and control options. These solutions improve aviation safety while providing reliable long-term performance and low maintenance. We also provide complete installation, commissioning, and maintenance support for obstruction lighting systems. We do undertake Annual Maintenance Contracts to ensure the operational readiness of systems at all times.',
    image: '/aviation/AircraftWarningLights.png',
   primaryBtnText: 'Explore More',
    primaryBtnHref: '/aviation/aircraft-warning-lights',
    secondaryBtnText: 'Book Your Consultation',
  },
  {
    id: 'PortableHelipadAndVertiPad',
    title: 'Portable Helipads & Lighting Solutions',
    subTitle: '',
    description:
      'Catobo supplies portable helipads and temporary lighting systems for emergency response, military operations, remote sites, oil & gas, and temporary aviation facilities. These solutions are designed for rapid deployment, easy transportation, and reliable operation in demanding environments. Lightweight yet durable construction ensures quick installation with minimal site preparation. Portable lighting systems provide safe day and night helicopter operations wherever they are needed. They are ideal for both planned and emergency missions.',
    image: '/aviation/PortableHelipadAndVertiPad.png',
    primaryBtnText: 'Explore More',
    primaryBtnHref: '/aviation/portable-helipad-lighting-solutions',
    secondaryBtnText: 'Book Your Consultation',
  },
  {
    id: 'ModularFloatingSolutions',
    title: 'Modular Floating Solutions',
    subTitle: '',
    description:
      'Catobo provides complete floating heliport solutions for offshore, marine, and waterfront applications. Our systems are engineered to deliver stable and safe helicopter operations in challenging environments. From structural design and mooring systems to lighting, firefighting, and safety equipment, every component is integrated into a complete solution. We work closely with clients to develop customized floating heliports for their operational needs. Every project is designed with safety, durability, and compliance in mind.',
    image: '/modular-floating.png',
    primaryBtnText: 'Explore More',
    primaryBtnHref: '/aviation/modular-floating-solutions',
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
        <div className="mb-6 grid grid-cols-2 sm:grid-cols-4 border border-[#168DCA] ">
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
        <div className="overflow-hidden rounded-xl mb-12">
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
              <h2 className="text-[20px]  md:text-3xl lg:text-[40px] font-medium leading-[1.2] text-[#000000]">
                {currentTab.title}
              </h2>

              <p className="text-[14px] sm:text-base 2xl:text-lg text-[#7C7E86] tracking-normal">
                {currentTab.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link   href={currentTab.primaryBtnHref}>

                  <Button
                    className="w-full sm:w-auto px-6 py-5 text-white sm:px-8"
                    style={{ background: 'var(--New-button, linear-gradient(93deg, #168DCA -24.15%, #0F2453 134.7%))' }}
                  >
                    {currentTab.primaryBtnText}
                  </Button>

                </Link>
                <Button
                  onClick={open}
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-black px-6 py-5 text-black hover:bg-blue-50 sm:px-8"
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
