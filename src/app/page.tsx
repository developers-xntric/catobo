"use client";

import React, { useState } from "react";
import Link from "next/link";
import Badge from "@/components/ui/badge";
import { ContactCtaButton } from "@/components/ContactCtaButton";
import HomeCollage from "@/components/home/HomeCollage";

const solutionCards = [
  {
    title: "Engineering Solutions",
    description:
      "Cable containment, lightning protection, and industrial safety systems built for reliability",
    href: "/engineering",
    cta: "Explore Engineering Solutions",
    image: "/engineering.png",
    titleSpacing: "md:mb-2",
    descriptionSpacing: "mb-6",
  },
  {
    title: "Aviation Solutions",
    description:
      "From high-rise rooftops to offshore platforms, Catobo delivers specialised aviation infrastructure for the most demanding operational environments. From concept and engineering to regulatory approvals, construction, certification, training, and long-term support, we bring the full project lifecycle together under one engineering partner combining specialist expertise, technical precision, and disciplined execution to deliver infrastructure built to perform when it matters most.",
    href: "/aviation",
    cta: "Explore Aviation Solutions",
    image: "/aviation2.png",
    titleSpacing: "md:mb-2",
    descriptionSpacing: "mb-6 md:mb-6",
  },
  {
    title: "Sustainability Solutions",
    description:
      "Fuel-saving, cooling, and renewable-energy systems for more efficient operations.",
    href: "/sustainability",
    cta: "Explore Sustainability Solutions",
    image: "/sustainability/card-sustainability.png",
    titleSpacing: "md:mb-4",
    descriptionSpacing: "mb-6 md:mb-8",
  },
] as const;

export default function Home() {
  const [isAviationDescriptionExpanded, setIsAviationDescriptionExpanded] = useState(false);
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
            <div
              key={card.href}
              className="relative h-100 md:h-150 rounded-3xl overflow-hidden group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url("${card.image}")` }}
              />
              <div className="relative z-10 h-full flex flex-col justify-end p-4 md:p-5 text-white">
                <h2
                  className={`text-3xl md:text-4xl font-medium md:mb-3 ${card.titleSpacing} tracking-wide`}
                >
                  {card.title}
                </h2>
                <p
                  className={`text-sm md:text-[16px] text-white! max-w-lg ${
                    card.href === "/aviation"
                      ? isAviationDescriptionExpanded
                        ? "mb-3"
                        : "line-clamp-2 mb-1"
                      : card.descriptionSpacing
                  }`}
                >
                  {card.description}
                </p>
                {card.href === "/aviation" && (
                  <button
                    type="button"
                    onClick={() => setIsAviationDescriptionExpanded((expanded) => !expanded)}
                    aria-expanded={isAviationDescriptionExpanded}
                    className="mb-6 w-fit text-sm font-medium text-white underline underline-offset-4 transition-opacity hover:opacity-80"
                  >
                    {isAviationDescriptionExpanded ? "Read less" : "Read more"}
                  </button>
                )}
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
              Engineering Infrastructure for a Smarter Future
            </h3>
            <h3 className="text-xl md:text-xl lg:text-[25px] font-medium leading-[1.2] text-[#0a0f1e] mb-4">
              Aviation. Engineering. Sustainability.
            </h3>
            <div className="flex flex-col gap-3">
              <p className="text-sm md:text-base secondary">
                Since 2007, Catobo has been engineering and delivering
                specialised infrastructure solutions from the UAE to the Middle
                East, Africa, and India.
              </p>
              <p className="text-sm md:text-base secondary">
                We work where precision matters, safety is critical, and
                performance cannot be compromised.
              </p>
              <p className="text-sm md:text-base secondary">
                From aviation infrastructure and specialised airfield systems to
                electrical engineering, protection systems, and sustainable
                technologies, we bring together engineering expertise, technical
                capability, and project execution to solve complex
                infrastructure challenges.
              </p>
              <p className="text-sm md:text-base secondary">
                Our work spans three core verticals — Aviation Solutions,
                Engineering Solutions, and Sustainability Solutions. Each is
                built on the same foundation: understanding the challenge,
                engineering the right solution, and delivering it with
                confidence.
              </p>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="flex flex-col justify-end gap-3">
            <p className="text-sm md:text-base secondary">
              We design and build helipads, vertipads, runways, aviation
              lighting, and safety systems. We engineer cable containment,
              earthing, lightning protection, electrical, and industrial
              infrastructure. And we develop sustainability-focused solutions
              that help infrastructure become more efficient, resilient, and
              future-ready.
            </p>
            <p className="text-sm md:text-base secondary">
              We work alongside clients, consultants, contractors, and project
              teams from concept and engineering through procurement,
              construction, testing, certification, and long-term maintenance.
              We bring the technical details together, manage the interfaces,
              and take ownership of the outcome.
            </p>
            <p className="text-sm md:text-base secondary font-bold">
              Built on Experience. Driven by Engineering.
            </p>
            <p className="text-sm md:text-base secondary">
              Over the years, Catobo has grown through projects that demand more
              than standard solutions. Our experience across diverse
              environments has taught us to engineer for the conditions that
              matter safety, reliability, compliance, maintainability, and
              long-term performance.
            </p>
            <p className="text-sm md:text-base secondary">
              Whether it is a helipad above a high-rise building or offshore
              platforms, a runway supporting critical operations, an electrical
              system protecting essential infrastructure, or a sustainable
              solution designed for the next generation, <b> Catobo engineers
              solutions that perform when it matters most.</b>
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
