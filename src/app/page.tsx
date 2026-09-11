import React from "react";
import Link from "next/link";
import Badge from "@/components/ui/badge";
import { ContactCtaButton } from "@/components/ContactCtaButton";
import HomeCollage from "@/components/home/HomeCollage";

const solutionCards = [
  {
    title: "Engineering Solutions",
    description: "Cable containment, lightning protection, and industrial safety systems built for reliability",
    href: "/engineering",
    cta: "Explore Engineering Solutions",
    image: "/engineering.png",
    titleSpacing: "md:mb-2",
    descriptionSpacing: "mb-6",
  },
  {
    title: "Aviation Solutions",
    description: "Your Trusted Partner for Turnkey Helipad Solutions From Design and Approvals to Construction, Lighting, Firefighting, Certification, Training, and Maintenance.",
    href: "/aviation",
    cta: "Explore Aviation Solutions",
    image: "/aviation2.png",
    titleSpacing: "md:mb-2",
    descriptionSpacing: "mb-6 md:mb-6",
  },
  {
    title: "Sustainability Solutions",
    description: "Fuel-saving, cooling, and renewable-energy systems for more efficient operations.",
    href: "/sustainability",
    cta: "Explore Sustainability Solutions",
    image: "/sustainability/card-sustainability.png",
    titleSpacing: "md:mb-4",
    descriptionSpacing: "mb-6 md:mb-8",
  },
] as const;

export default function Home() {
  // Custom gradient defined from your prompt
  const brandGradient = {
    background: "linear-gradient(93deg, #168DCA -24.15%, #0F2453 134.7%)",
  };

  return (
    <div className="min-h-screen  flex flex-col font-sans">
      <div className="w-full bg-[#F3F3F3]">
        {/* Top Section: Hero Cards */}
        <section className="w-full max-w-360 mx-auto px-5 md:pb-16 pt-4 pb-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 bg-[#F3F3F3]">
          {solutionCards.map((card) => (
            <div key={card.href} className="relative h-100 md:h-150 rounded-3xl overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url("${card.image}")` }}
              />
              <div className="relative z-10 h-full flex flex-col justify-end p-4 md:p-5 text-white">
                <h2 className={`text-3xl md:text-4xl font-medium md:mb-3 ${card.titleSpacing} tracking-wide`}>
                  {card.title}
                </h2>
                <p className={`text-sm md:text-[16px] text-white! max-w-lg ${card.descriptionSpacing}`}>
                  {card.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={card.href}
                    style={brandGradient}
                    className="px-6 py-2.5 rounded text-sm font-medium text-white shadow-lg hover:opacity-90 transition-opacity inline-block"
                  >
                    {card.cta}
                  </Link>
                  <ContactCtaButton className="px-6 py-2.5 rounded text-sm font-medium text-white border border-white hover:bg-white/10 transition-colors">
                    Book Your Consultation
                  </ContactCtaButton>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Middle Section: Text Content & Bottom Images */}
      <section className="2xl:max-w-340 w-[90%] mx-auto  md:px-8 pt-12 md:pt-16 bg-white grow">
        {/* Top Text Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-10">
          {/* Left Text Column */}
          <div>
            <Badge text="About Catobo" variant="black" />
            <h3 className="text-2xl md:text-3xl lg:text-[40px] font-medium leading-[1.2] text-[#0a0f1e] mb-4">
              Engineering Solutions Built On Expertise And Trust
            </h3>
            <p className="text-sm md:text-base secondary">
              Catobo is an engineering and technical solutions company delivering integrated Aviation Solutions and Engineering Solutions across the Middle East, Africa, and India. We help clients deliver safer, smarter, and more reliable infrastructure through innovative engineering and turnkey project execution.on.
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
