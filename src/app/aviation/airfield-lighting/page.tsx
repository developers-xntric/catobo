"use client";

import { CheckIcon } from "@/components/common/CheckIcon";
import DynamicHero from "@/components/common/hero";
import Badge from "@/components/ui/badge";
import React, { useState } from "react";

function CheckItem({ label }: { label: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckIcon />
      <span className="text-[14px] leading-relaxed text-[#636363]">
        {label}
      </span>
    </div>
  );
}

function BodyText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-[14px] leading-[1.78] text-[#636363] ${className}`}>
      {children}
    </p>
  );
}

function SectionHeading({
  children,
  size = "h2",
  className = "",
}: {
  children: React.ReactNode;
  size?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const base = `font-medium leading-tight tracking-wide text-black ${className}`;
  if (size === "h1")
    return (
      <h1 className={`text-[28px] 2xl:text-[35px] ${base}`}>{children}</h1>
    );
  if (size === "h3")
    return <h3 className={`text-[16px] ${base}`}>{children}</h3>;
  return <h2 className={`text-[28px] 2xl:text-[35px] ${base}`}>{children}</h2>;
}

interface SidebarItem {
  label: string;
  hasArrow?: boolean;
}

interface SidebarGroup {
  heading?: string;
  items: SidebarItem[];
}

export function Sidebar({
  title,
  groups,
}: {
  title: string;
  groups: SidebarGroup[];
}) {
  const [active, setActive] = useState(0);
  let globalIdx = 0;

  return (
    <div className="w-full shrink-0 rounded-2xl bg-[#F3F3F3] p-5 lg:sticky lg:top-8 lg:w-90">
      <div className="mb-4 px-1">
        <h2 className="text-[1.1rem] font-medium leading-snug tracking-wide text-black">
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        {groups.map((group, gi) => (
          <div key={gi}>
            {group.heading && (
              <p className="mb-2 px-1 text-[0.75rem] font-semibold uppercase tracking-widest text-[#1a1a1a]">
                {group.heading}
              </p>
            )}
            <div className="flex flex-col gap-2">
              {group.items.map((item) => {
                const idx = globalIdx++;
                const isActive = active === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setActive(idx);
                      document
                        .getElementById(`section-${idx}`)
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }}
                    className={`flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-left transition-all ${isActive ? "border-transparent shadow-md" : "border-[#E8E8E8] hover:border-gray-300"}`}
                    style={{
                      background: isActive
                        ? "linear-gradient(93deg, #168DCA -24.15%, #0F2453 134.7%)"
                        : "#fff",
                    }}
                  >
                    <span
                      className={`pr-3 text-[0.875rem] font-normal leading-snug tracking-wide ${isActive ? "text-white" : "text-[#1a1a1a]"}`}
                    >
                      {item.label}
                    </span>
                    {item.hasArrow && (
                      <svg
                        className={`h-4 w-4 shrink-0 ${isActive ? "text-white" : "text-black"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M7 7h10v10"
                        />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SolutionCard({
  icon,
  title,
  items,
}: {
  icon: string;
  title: string;
  items: string[];
}) {
  return (
    <article className="rounded-2xl bg-[#F3F3F3] p-5">
      <div
        aria-hidden="true"
        className="mb-4 h-9 w-9 bg-[linear-gradient(135deg,#168DCA_0%,#0F2453_100%)] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]"
        style={{ WebkitMaskImage: `url(${icon})`, maskImage: `url(${icon})` }}
      />
      <h3 className="text-[16px] font-medium leading-snug text-black">
        {title}
      </h3>
      <div className="mt-4 space-y-2.5">
        {items.map((item) => (
          <CheckItem key={item} label={item} />
        ))}
      </div>
    </article>
  );
}

function MainContent() {
  return (
    <div className="min-w-0 max-w-240 flex-1">
      <section id="section-0" className="mb-14">
        <div className="grid items-center gap-7 xl:grid-cols-[1.02fr_1fr]">
          <div className="h-64 overflow-hidden rounded-2xl bg-gray-100 sm:h-80">
            <img
              src="/airfield-lighting/intro.png"
              alt="Airfield lighting infrastructure"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <Badge text="Airfield Lighting System" variant="black" />
            <SectionHeading size="h1" className="mt-4">
              Reliable Lighting Systems For Safe And Efficient Aircraft
              Operations
            </SectionHeading>
            <BodyText className="mt-5">
              Catobo provides complete airfield lighting solutions for runways,
              taxiways and associated aviation infrastructure. Our solutions are
              designed to support safe aircraft movement and ground operations
              in accordance with applicable aviation standards and project
              requirements.
            </BodyText>
          </div>
        </div>
      </section>

      <section id="section-1" className="mb-14">
        <SectionHeading>Our Airfield Lighting Solutions</SectionHeading>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <SolutionCard
            icon="/airfield-lighting/guidance.png"
            title="Runway Lighting Systems"
            items={[
              "Runway edge lights",
              "Runway centreline lighting",
              "Runway threshold/end lights",
              "Approach lighting systems",
            ]}
          />
          <SolutionCard
            icon="/airfield-lighting/runway.png"
            title="Taxiway Lighting Systems"
            items={[
              "Taxiway edge lights",
              "Taxiway centerline lights",
              "Stop bars",
              "Runway guard lights",
            ]}
          />
          <SolutionCard
            icon="/airfield-lighting/approach.png"
            title="Approach & Navigation Lighting"
            items={[
              "Approach lighting systems",
              "PAPI systems",
              "Visual navigation aids",
              "Obstruction lighting",
            ]}
          />
          <SolutionCard
            icon="/airfield-lighting/taxiway.png"
            title="Airfield Guidance & Control"
            items={[
              "Constant Current Regulators (CCR)",
              "Lighting control and monitoring systems",
              "Airfield lighting control panels",
              "Cable and ducting systems",
              "Isolation transformers",
            ]}
          />
        </div>
      </section>

      <section id="section-2" className="mb-10">
        <SectionHeading>Turnkey Airfield Lighting</SectionHeading>
        <BodyText className="mt-5">
          From design and engineering through installation, testing,
          commissioning and certification, Catobo can deliver complete airfield
          lighting systems tailored to the operational requirements of each
          site.
        </BodyText>
        <div className="mt-4 flex flex-wrap items-center gap-x-2 md:gap-x-3 gap-y-2 text-[12px] md:text-[13px] font-medium text-[#000]">
          {[
            "Design & Engineering",
            "Supply",
            "Installation",
            "Testing & Commissioning",
            "Certification",
            "Maintenance",
          ].map((item, index, items) => (
            <React.Fragment key={item}>
              <span>{item}</span>
              {index < items.length - 1 && <span aria-hidden="true">→</span>}
            </React.Fragment>
          ))}
        </div>
        <SectionHeading size="h3" className="mt-4">
          Built for Aviation
        </SectionHeading>
        <BodyText className="mt-3">
          Our airfield lighting solutions can be developed in accordance with
          applicable ICAO, FAA, GCAA and project-specific requirements,
          depending on the location and operational requirements of the
          facility.
        </BodyText>
      </section>
    </div>
  );
}

export default function SolutionAirfieldLighting() {
  const sidebarGroups: SidebarGroup[] = [
    {
      items: [
        { label: "Overview", hasArrow: true },
        { label: "Airfield Lighting Solutions", hasArrow: true },
        { label: "Turnkey Airfield Lighting", hasArrow: true },
      ],
    },
  ];

  return (
    <div>
      <DynamicHero
        title={"Airfield Lighting"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Airfield Lighting" },
        ]}
        backgroundImage="/al.png"
      />
      <main className="min-h-screen bg-white">
        <div className="mx-auto w-[90%] py-8 2xl:max-w-360">
          <div className="flex flex-col items-start gap-5 lg:flex-row">
            <Sidebar title="Airfield Lighting System" groups={sidebarGroups} />
            <MainContent />
          </div>
        </div>
      </main>
    </div>
  );
}
