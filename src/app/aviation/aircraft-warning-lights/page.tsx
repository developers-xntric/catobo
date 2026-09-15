"use client";

import DynamicHero from "@/components/common/hero";
import { CheckIcon } from "@/components/common/CheckIcon";
import Badge from "@/components/ui/badge";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Sidebar } from "@/app/aviation/airfield-lighting/page";
import React, { useState } from "react";

const menu = [
  { heading: "Low Intensity", items: ["HORIZON L-810 LED Obstruction Light"] },
  {
    heading: "Medium Intensity",
    items: [
      "FlashGuard 2000B",
      "FlashGuard 3000B",
      "Horizon 2000/2009/3000 AC Series",
      "HORIZON Tower Lighting Controller",
    ],
  },
  { heading: "High Intensity", items: ["Strobeguard SS-122/125"] },
];
const lightTypes = [
  [
    "Low-Intensity Obstruction Lights",
    "Type A • Type B • Type C",
    "Low-intensity systems for applications where lower levels of obstruction marking are appropriate.",
  ],
  [
    "Medium-Intensity Obstruction Lights",
    "Type A • Type B • Type C",
    "Medium-intensity systems for structures requiring greater conspicuity, with the applicable type and operating characteristics determined by the project requirements.",
  ],
  [
    "Dual Medium-Intensity Systems",
    "Type AB • Type AC",
    "Combined configurations designed to provide different lighting characteristics for daytime and night-time operation, where required.",
  ],
  [
    "High-Intensity Obstruction Lights",
    "Type A • Type B",
    "High-intensity systems for structures and applications requiring enhanced conspicuity. The final intensity, type, quantity, positioning, colour, flash characteristics, and operating configuration are established according to the applicable aviation standards and authority requirements. UAE GCAA regulations, for example, recognise low-, medium-, and high-intensity obstacle lighting and reference ICAO requirements for their application.",
  ],
];
const reliability = [
  [
    "Reliable Operation",
    "Systems designed for continuous and dependable performance.",
  ],
  [
    "Automatic Operation",
    "Automatic switching and operating sequences based on the defined aviation requirements.",
  ],
  [
    "Remote Monitoring & Control",
    "Remote status, fault indication, alarms, and control where required.",
  ],
  [
    "System Integration",
    "Interfaces with site electrical, BMS, SCADA, or other monitoring systems where applicable.",
  ],
  [
    "Environmental Performance",
    "Equipment and installation suited to demanding industrial and offshore environments.",
  ],
  [
    "Maintainability",
    "Systems designed with inspection, testing, servicing, and lifecycle support in mind.",
  ],
];
const environments = [
  [
    "High-Rise Buildings",
    "Structures where aviation obstruction marking is required within an urban environment.",
  ],
  [
    "Major Infrastructure",
    "Bridges, elevated structures, and infrastructure that may present an aviation obstacle.",
  ],
  [
    "Communication & Transmission Towers",
    "Tall structures requiring reliable and clearly visible obstruction lighting.",
  ],
  [
    "Offshore Platforms & Marine Structures",
    "Aircraft warning systems for harsh offshore environments.",
  ],
  [
    "Industrial Facilities",
    "Process structures, chimneys, stacks, towers, cranes, and other industrial assets.",
  ],
  [
    "Remote & Critical Infrastructure",
    "Reliable automation and remote monitoring for critical installations.",
  ],
];
function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[14px] md:leading-[1.78] text-[#636363]">{children}</p>
  );
}
function Heading({
  children,
  size = "section",
  className = "",
}: {
  children: React.ReactNode;
  size?: "hero" | "section";
  className?: string;
}) {
  const Tag = size === "hero" ? "h1" : "h2";
  const sizeClass =
    size === "hero"
      ? "text-[32px] 2xl:text-[45px]"
      : "text-[28px] 2xl:text-[35px]";
  return (
    <Tag
      className={
        sizeClass +
        " font-medium leading-tight tracking-wide text-black " +
        className
      }
    >
      {children}
    </Tag>
  );
}
function Card({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-[10px] bg-[#f3f3f3] p-5">
      <h3 className="text-[16px] font-medium text-black">{title}</h3>
      <p className="mt-2 text-[13px] leading-relaxed text-[#636363]">{text}</p>
    </article>
  );
}
function SideNav() {
  const [active, setActive] = useState(0);
  let number = 0;
  return (
    <aside className="w-full shrink-0 rounded-2xl bg-[#f3f3f3] p-5 lg:sticky lg:top-8 lg:w-90">
      {menu.map((group) => (
        <div key={group.heading} className="mb-5 last:mb-0">
          <h2 className="mb-2 px-1 text-[1.1rem] font-medium text-black">
            {group.heading}
          </h2>
          <div className="space-y-2">
            {group.items.map((item) => {
              const index = number++;
              return (
                <button
                  key={item}
                  onClick={() => {
                    setActive(index);
                    document
                      .getElementById("section-" + index)
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className={
                    "flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-left " +
                    (active === index
                      ? "border-transparent text-white shadow-md"
                      : "border-[#e8e8e8] bg-white text-black")
                  }
                  style={
                    active === index
                      ? {
                          background:
                            "linear-gradient(93deg,#168DCA -24.15%,#0F2453 134.7%)",
                        }
                      : {}
                  }
                >
                  <span className="pr-3 text-[13px] leading-snug">{item}</span>
                  <span aria-hidden="true">to</span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </aside>
  );
}
export default function AircraftWarningLightsPage() {
  return (
    <div>
      <DynamicHero
        title="Aircraft Warning Lights"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Aircraft Warning Lights" },
        ]}
        backgroundImage="/acs/aircraft-warning-hero.png"
      />
      <main className="bg-white">
        <div className="mx-auto flex w-[90%] flex-col items-start gap-8 py-8 2xl:max-w-360 lg:flex-row">
          <Sidebar
            title="Aircraft Warning Lights"
            groups={[
              {
                items: [
                  {
                    label: "HORIZON L-810 LED Obstruction Light",
                    hasArrow: true,
                    sectionId: "section-0",
                  },
                  {
                    label: "FlashGuard 2000B",
                    hasArrow: true,
                    sectionId: "section-1",
                  },
                  {
                    label: "FlashGuard 3000B",
                    hasArrow: true,
                    sectionId: "section-2",
                  },
                  {
                    label: "Horizon 2000/2009/3000 AC Series",
                    hasArrow: true,
                    sectionId: "section-3",
                  },
                  {
                    label: "HORIZON Tower Lighting Controller",
                    hasArrow: true,
                    sectionId: "section-4",
                  },
                  {
                    label: "Strobeguard SS-122/125",
                    hasArrow: true,
                    sectionId: "section-5",
                  },
                ],
              },
            ]}
          />
          <div className="min-w-0 max-w-240 flex-1">
            <section id="section-0" className="mb-14 grid gap-8 xl:grid-cols-2">
              <div className="relative min-h-80 overflow-hidden rounded-[10px]">
                <Image
                  src="/acs/aircraft-warning-low-intensity.png"
                  alt="Aircraft warning light installation"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <Badge text="Aircraft Warning Lights" variant="black" />
                <Heading className="mt-5">
                  Making Structures Visible. Keeping Airspace Safe.
                </Heading>
                <Body>
                  <span className="mt-4 block">
                    Aircraft warning lights are a critical element of aviation
                    safety, providing visual identification of structures that
                    may present a hazard to aircraft. Catobo delivers complete
                    aircraft warning lighting solutions for high-rise buildings,
                    towers, industrial facilities, infrastructure, offshore
                    installations, and other aviation-obstacle applications.
                  </span>
                  <span className="mt-4 block">
                    We combine aviation engineering, regulatory expertise,
                    system design, specialised equipment, and project execution
                    to take each solution from initial assessment and design
                    through authority approval, NOC, supply, installation,
                    commissioning, and long-term maintenance.
                  </span>
                </Body>
              </div>
            </section>
            <section id="section-1" className="mb-14">
              <Heading>
                The Right Obstruction Lighting for Every Application
              </Heading>
              <Body>
                <span className="mt-4 block">
                  Aircraft warning lighting is not a one-size-fits-all solution.
                  The appropriate system depends on the structure, height,
                  location, surrounding environment, aviation requirements, and
                  applicable authority regulations. Catobo assesses these
                  requirements and develops the appropriate lighting,
                  positioning, operating, and control configuration for each
                  project.
                </span>
              </Body>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {lightTypes.slice(0, 3).map(([title, type, text]) => (
                  <article
                    key={title}
                    className="rounded-[10px] bg-[#f3f3f3] p-5"
                  >
                    <h3 className="text-[20px] font-medium text-black">
                      {title}
                    </h3>
                    <p className="mt-1 text-[12px] font-medium text-black">
                      {type}
                    </p>
                    <p className="mt-3 text-[13px] leading-relaxed text-[#636363]">
                      {text}
                    </p>
                  </article>
                ))}
              </div>
              <div className="mt-3 rounded-[10px] bg-[#f3f3f3] p-5">
                <h3 className="text-[20px] font-medium text-black">
                  {lightTypes[3][0]}
                </h3>
                <p className="mt-1 text-[12px] font-medium text-black">
                  {lightTypes[3][1]}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-[#636363]">
                  {lightTypes[3][2]}
                </p>
              </div>
            </section>
            <section id="section-2" className="mb-14 grid gap-8 xl:grid-cols-2">
              <div>
                <Heading>More Than Warning Lights</Heading>
                <Body>
                  <span className="mt-4 block">
                    An aircraft warning system is only as reliable as the
                    complete system behind it. Catobo engineers the lighting,
                    control, automation, monitoring, and electrical interfaces
                    as one integrated aviation system, rather than treating the
                    warning light as an isolated product.
                  </span>
                  <span className="mt-4 block">
                    Our solutions can incorporate purpose-engineered control
                    panels, automatic operation, remote monitoring, remote
                    control, fault indication, local override, and integration
                    with BMS, SCADA, or other site control systems, where
                    required. The control philosophy is developed around the
                    project so that the system can operate automatically and
                    reliably with minimum dependence on manual intervention.
                  </span>
                </Body>
              </div>
              <div className="relative min-h-80 overflow-hidden rounded-[10px]">
                <Image
                  src="/acs/aircraft-warning-intro.png"
                  alt="Aircraft warning lighting system"
                  fill
                  className="object-cover"
                />
              </div>
            </section>
            <section id="section-3" className="mb-14">
              <Heading>Engineered for Reliable Operations</Heading>
              <Body>
                <span className="mt-4 block">
                  Aircraft warning systems are safety-critical infrastructure.
                  Catobo therefore focuses on the reliability of the complete
                  operating system, not simply the performance of an individual
                  light. Our engineering approach considers:
                </span>
              </Body>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {reliability.map(([title, text]) => (
                  <Card key={title} title={title} text={text} />
                ))}
              </div>
            </section>

            <div className="mb-14">
              <Heading>Assessment &amp; Design</Heading>
              <Body>
                <span className="mt-4 block">
                  We assess the structure, location, height, surrounding
                  environment, aviation requirements, and applicable regulatory
                  framework to establish the appropriate obstruction-lighting
                  strategy.
                </span>
              </Body>
            </div>

            <section id="section-4" className="mb-14 grid gap-8 xl:grid-cols-2">
              <div className="relative min-h-80 overflow-hidden rounded-[10px]">
                <Image
                  src="/acs/aircraft-warning-compliance.png"
                  alt="Aircraft warning light"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <Heading>
                  International &amp; Local Regulatory Compliance
                </Heading>
                <Body>
                  <span className="mt-4 block">
                    Our engineering approach considers the applicable
                    international aviation standards and local aviation
                    authority requirements, including:
                  </span>
                </Body>
                <ul className="mt-5 space-y-4">
                  {[
                    "ICAO standards and recommended practices for obstacle marking and lighting.",
                    "FAA AC 70/7460-1N - Obstruction Marking and Lighting",
                    "Local Civil Aviation Authority regulations and requirements, including UAE GCAA requirements where applicable. Current GCAA aerodrome regulations provide for low-, medium-, and high-intensity obstacle lighting and reference ICAO guidance.",
                    "Project- and location-specific aviation requirements, including authority conditions and aeronautical considerations.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[14px] leading-relaxed text-[#636363]"
                    >
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <section id="section-5" className="mb-14">
              <div className="mt-8 space-y-4">
                {[
                  [
                    "Authority Approval & NOC",
                    "We prepare and coordinate the required technical documentation and support the authority approval and NOC process, helping move the project from engineering design to approved implementation.",
                  ],
                  [
                    "Supply",
                    "Following approval, Catobo coordinates the supply of the selected aircraft warning lights, control panels, monitoring equipment, and associated system components.",
                  ],
                  [
                    "Installation",
                    "Our team executes the installation in accordance with the engineered design, approved requirements, and applicable aviation standards.",
                  ],
                  [
                    "Testing & Commissioning",
                    "The complete system is tested and commissioned, including lighting operation, automatic sequences, control panels, monitoring, alarms, and system interfaces, before handover.",
                  ],
                  [
                    "Maintenance & AMC",
                    "Our involvement continues beyond commissioning. Through Annual Maintenance Contracts (AMC), Catobo provides scheduled inspection, preventive maintenance, testing, fault identification, troubleshooting, and technical support to help maintain reliable operation throughout the system lifecycle.",
                  ],
                ].map(([title, text]) => (
                  <div key={title}>
                    <h3 className="text-[20px] font-medium text-black">
                      {title}
                    </h3>
                    <Body>
                      <span className="mt-2 block">{text}</span>
                    </Body>
                  </div>
                ))}
              </div>
            </section>
            <section id="section-6" className="mb-14">
              <Heading className="text-center">
                Built for Demanding Environments
              </Heading>
              <Body>
                <span className="mt-3 block text-center">
                  Catobo's aircraft warning lighting capability is suited to a
                  wide range of structures and operating environments:
                </span>
              </Body>
              <div className="mt-6 grid gap-3  md:gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {environments.map(([title, text], index) => (
                  <article
                    key={title}
                    className="overflow-hidden rounded-[10px]"
                  >
                    <div className="relative h-52">
                      <Image
                        src={`/acs/aircraft-warning-environment-${index + 1}.png`}
                        alt=""
                        fill
                        className="object-cover rounded-[10px]"
                      />
                    </div>
                    <div className="mt-3">
                      <h3 className="text-[18px] md:text-[20px] font-medium leading-snug text-black">
                        {title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-[#636363]">
                        {text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
            <section className="mb-14">
              <Heading>One Partner. From NOC to AMC.</Heading>
              <Body>
                <span className="mt-4 block">
                  With Catobo, aircraft warning lighting is not simply a product
                  supplied and installed. It is a complete aviation system
                  engineered, approved, delivered, commissioned, automated,
                  monitored, and maintained under one umbrella.
                </span>
                <span className="mt-4 block">
                  By bringing engineering, authority coordination, equipment,
                  controls, installation, and lifecycle support together, Catobo
                  provides one accountable partner for the complete aircraft
                  warning lighting lifecycle.
                </span>
              </Body>
              <div className="mt-7 flex flex-wrap items-center gap-2 text-[14px] font-medium text-black">
                {[
                  "Design",
                  "Regulatory Approval",
                  "NOC",
                  "Supply",
                  "Installation",
                  "Commissioning",
                  "Automation",
                  "Monitoring",
                  "AMC",
                ].map((item, index) => (
                  <React.Fragment key={item}>
                    <span>{item}</span>
                    {index < 8 && (
                      <ArrowRight
                        className="size-4 text-[#168dca]"
                        aria-hidden="true"
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </section>
            <section className="mb-5 grid gap-8 xl:grid-cols-2">
              <div className="relative min-h-80 overflow-hidden rounded-[10px]">
                <Image
                  src="/acs/aircraft-warning-more-than-lights.png"
                  alt="Aircraft warning lighting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <Heading>Visibility Where It Matters Most</Heading>
                <Body>
                  <span className="mt-4 block">
                    The objective is simple: make structures clearly
                    identifiable within the aviation environment. Achieving that
                    reliably requires more than selecting a light. It requires
                    understanding the aviation requirement, interpreting the
                    applicable regulations, engineering the system, securing
                    approval, delivering the installation, and maintaining it
                    throughout its operational life.
                  </span>
                  <span className="mt-4 block">
                    Catobo brings all of these capabilities together to deliver
                    aircraft warning systems engineered for aviation safety,
                    reliable operation, and long-term performance. Aircraft
                    Warning Lighting. Engineered for Aviation. Built for
                    Reliability.
                  </span>
                </Body>
                <a
                  href="/aviation/contact"
                  className="mt-6 w-fit rounded-md bg-[linear-gradient(93deg,#168DCA_-24.15%,#0F2453_134.7%)] px-5 md:px-8 py-3 text-[13px] md:text-[14px] font-medium text-white"
                >
                  Talk to Catobo
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
