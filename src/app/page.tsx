import React from "react";
import Link from "next/link";
import Badge from "@/components/ui/badge";
import { ContactCtaButton } from "@/components/ContactCtaButton";
import HomeCollage from "@/components/home/HomeCollage";

export default function Home() {
  // Custom gradient defined from your prompt
  const brandGradient = {
    background: "linear-gradient(93deg, #168DCA -24.15%, #0F2453 134.7%)",
  };

  return (
    <div className="min-h-screen  flex flex-col font-sans">
      <div className="w-full bg-[#F3F3F3]">
        {/* Top Section: Hero Cards */}
        <section className="w-full max-w-360 mx-auto px-5 md:pb-6 pt-4 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-4  bg-[#F3F3F3]">
          {/* Engineering Solutions Card */}
          <div className="relative h-100 md:h-150 rounded-3xl overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: 'url("/engineering.png")' }}
            />
            {/* Blue-ish dark overlay to match the second card's tone */}

            {/* Card Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-4 md:p-10 text-white">
              <h2 className="text-2xl md:text-4xl font-medium mb-3 md:mb-4 tracking-wide">
                Engineering Solutions
              </h2>
              <p className="text-sm md:text-[16px] text-white! max-w-lg mb-6 md:mb-8">
                Cable containment, lightning protection, and industrial safety
                systems built for reliability
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/engineering"
                  style={brandGradient}
                  className="px-3 py-2.5 rounded text-sm font-medium text-white shadow-lg hover:opacity-90 transition-opacity inline-block"
                >
                  Explore Engineering Solutions
                </Link>
                <ContactCtaButton className="px-6 py-2.5 rounded text-sm font-medium text-white border border-white hover:bg-white/10 transition-colors">
                  Book Your Consultation
                </ContactCtaButton>
              </div>
            </div>
          </div>

          {/* Aviation Solutions Card */}
          <div className="relative h-100 md:h-150 rounded-3xl overflow-hidden group">
            {/* Background Image (Replace with your actual image path or Next/Image) */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: 'url("/aviation.png")' }}
            />

            {/* Card Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-4 md:p-10 text-white">
              <h2 className="text-2xl md:text-4xl font-medium mb-3 md:mb-4 tracking-wide">
                Aviation Solutions
              </h2>
              <p className="text-sm md:text-[16px] text-white! max-w-lg mb-6 md:mb-8">
                Your Trusted Partner for Turnkey Helipad Solutions From Design
                and Approvals to Construction, Lighting, Firefighting,
                Certification, Training, and Maintenance.
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
        </section>
      </div>

      {/* Middle Section: Text Content & Bottom Images */}
      <section className="2xl:max-w-340 w-[90%] mx-auto  md:px-8 pt-12 md:pt-16 bg-white grow">
        {/* Top Text Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-10">
          {/* Left Text Column */}
          <div>
            <Badge text="Partner with Precision" variant="black" />
            <h3 className="text-2xl md:text-3xl lg:text-[40px] font-medium leading-[1.2] text-[#0a0f1e] mb-4">
              Engineering Solutions Built On Expertise And Trust
            </h3>
            <p className="text-sm md:text-base secondary">
              Catobo&apos;s portfolio includes aviation lighting and safety
              systems, helipad and vertipad solutions, airfield lighting,
              aircraft warning lights, cable containment systems, lightning
              protection, and industrial safety products. Every solution is
              engineered for precision, durability, and seamless integration.
            </p>
          </div>

          {/* Right Text Column */}
          <div className="flex flex-col justify-end gap-6">
            <p className="text-sm md:text-base secondary">
              Our portfolio includes helipads and vertipads, aviation lighting
              and safety systems, airfield lighting, aircraft warning lights,
              cable containment systems, lightning protection, earthing systems,
              industrial electrical infrastructure, and safety solutions. From
              concept and design to installation, certification, and
              maintenance, every solution is engineered for precision,
              durability, compliance, and long-term performance
            </p>
            <p className="text-sm md:text-base secondary">
              Established in 2007, Catobo has built a reputation for delivering
              high-quality engineering solutions for aviation, construction, and
              industrial sectors. With extensive regional experience, a strong
              engineering team, and a trusted global partner network, we provide
              complete turnkey solutions that meet the highest international
              standards
            </p>
            <p className="text-sm md:text-base secondary">
              Whether it's a fully certified helipad, an aviation lighting
              system, or critical engineering infrastructure, Catobo is your
              single-source partner for design, supply, installation, testing,
              certification, and lifetime support.
            </p>
          </div>
        </div>

      </section>

      <HomeCollage />

      <section
        className="p-3 text-center"
        style={{
          background: "linear-gradient(93deg, #168DCA -24.15%, #0F2453 134.7%)",
        }}
      >
        <p className="text-white text-sm md:text-[16px]">
          Copyright © 2026 All Rights Reserved.
        </p>
      </section>
    </div>
  );
}
