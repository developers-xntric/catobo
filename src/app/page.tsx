
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Badge from '@/components/ui/badge';
import { ContactCtaButton } from '@/components/ContactCtaButton';

export default function Home() {
  // Custom gradient defined from your prompt
  const brandGradient = {
    background: 'linear-gradient(93deg, #168DCA -24.15%, #0F2453 134.7%)',
  };

  return (
    <div className="min-h-screen bg-[#F3F3F3] flex flex-col font-sans">

      {/* Top Section: Hero Cards */}
      <section className="w-full max-w-360 mx-auto p-4 md:p-4 grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Aviation Solutions Card */}
        <div className="relative h-100 md:h-150 rounded-3xl overflow-hidden group">
          {/* Background Image (Replace with your actual image path or Next/Image) */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: 'url("/aviation.png")' }}
          />

          {/* Card Content */}
          <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10 text-white">
            <h2 className="text-2xl md:text-4xl font-medium mb-3 md:mb-4 tracking-wide">
              Aviation Solutions
            </h2>
            <p className="text-sm md:text-[16px] text-white! max-w-lg mb-6 md:mb-8">
              Helipads, lighting, firefighting, and aviation safety systems engineered for compliance and performance
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/aviation"
                style={brandGradient}
                className="px-6 py-2.5 rounded text-sm font-medium text-white shadow-lg hover:opacity-90 transition-opacity inline-block"
              >
                Explore Aviation Solutions
              </Link>
              <ContactCtaButton className="px-6 py-2.5 rounded text-sm font-medium text-white border border-white hover:bg-white/10 transition-colors">
                Book Your Consultation
              </ContactCtaButton>
            </div>
          </div>
        </div>

        {/* Engineering Solutions Card */}
        <div className="relative h-100 md:h-150 rounded-3xl overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: 'url("/engineering.png")' }}
          />
          {/* Blue-ish dark overlay to match the second card's tone */}

          {/* Card Content */}
          <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10 text-white">
            <h2 className="text-2xl md:text-4xl font-medium mb-3 md:mb-4 tracking-wide">
              Engineering Solutions
            </h2>
            <p className="text-sm md:text-[16px] text-white! max-w-lg mb-6 md:mb-8">
              Cable containment, lightning protection, and industrial safety systems built for reliability
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/engineering"
                style={brandGradient}
                className="px-6 py-2.5 rounded text-sm font-medium text-white shadow-lg hover:opacity-90 transition-opacity inline-block"
              >
                Explore Engineering Solutions
              </Link>
              <ContactCtaButton className="px-6 py-2.5 rounded text-sm font-medium text-white border border-white hover:bg-white/10 transition-colors">
                Book Your Consultation
              </ContactCtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Section: Text Content & Bottom Images */}
      <section className="2xl:max-w-340 mx-auto px-4 md:px-8 py-12 md:py-16 bg-white grow">

        {/* Top Text Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-10">

          {/* Left Text Column */}
          <div>
            <Badge text='Partner with Precision' variant='black' />
            <h3 className="text-2xl md:text-3xl lg:text-[40px] font-medium leading-[1.2] text-[#0a0f1e] mb-4">
              Engineering Solutions Built On Expertise And Trust
            </h3>
            <p className="text-sm md:text-base secondary">
              Catobo&apos;s portfolio includes aviation lighting and safety systems, helipad and vertipad solutions, airfield lighting, aircraft warning lights, cable containment systems, lightning protection, and industrial safety products. Every solution is engineered for precision, durability, and seamless integration.
            </p>
          </div>

          {/* Right Text Column */}
          <div className="flex flex-col justify-end gap-6">
            <p className="text-sm md:text-base secondary">
              Catobo is an engineering and technical solutions group delivering integrated systems for aviation, construction, and industrial infrastructure. Company started in 2007 of operational experience, we enable organizations to enhance safety, productivity, and long-term sustainability through reliable, compliant, and performance-driven solutions.
            </p>
            <p className="text-sm md:text-base secondary">
              Our strength lies in combining deep engineering knowledge, a structured management approach, and a strong global network. This allows us to design, supply, and support systems that meet the highest technical and operational standards across safety-critical environments.
            </p>
          </div>
        </div>

        {/* Bottom Image Grid (Logo + Helicopter) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

          {/* Left: Logo Box (Takes up ~4 columns) */}
          <div className="md:col-span-4 rounded-2xl flex items-center justify-center min-h-40 md:min-h-70">
            {/* Placeholder for the complex 'C' SVG wireframe logo */}
            <Image src={"/bottom.png"} alt="Main Page Bottom blue Image" width={1500} height={1500} className="h-full w-full" />
          </div>

          {/* Right: Helicopter Image (Takes up ~8 columns) */}
          <div className="md:col-span-8 rounded-2xl overflow-hidden min-h-40 md:min-h-70 relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("/heli-main.png")' }}
            />
          </div>
        </div>

      </section>

      <section className="p-3 text-center" style={{ background: 'linear-gradient(93deg, #168DCA -24.15%, #0F2453 134.7%)' }}  >
        <p className="text-white">Copyright © 2026 All Rights Reserved.</p>
        </section>
      

    </div>
  );
}
