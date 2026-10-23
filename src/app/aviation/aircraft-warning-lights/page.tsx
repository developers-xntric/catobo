"use client";

import DynamicHero from "@/components/common/hero";
import { CheckIcon } from "@/components/common/CheckIcon";
import Badge from "@/components/ui/badge";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Sidebar } from "@/app/aviation/airfield-lighting/page";
import React, { useEffect, useState } from "react";

const menu = [
  { heading: "Low Intensity", items: ["Making Structures Visible. Keeping Airspace Safe."] },
  {
    heading: "Medium Intensity",
    items: [
      "The Right Obstruction Lighting for Every Application",
      "More Than Warning Lights",
      "Engineered for Reliable Operations",
      "Assessment & Design",
    ],
  },
  { heading: "High Intensity", items: ["International & Local Regulatory Compliance"] },
];
const lightTypes = [
  [
    "Low-Intensity Obstruction Lights",
    "Type A. Type B. Type C",
    "Low-intensity systems for applications where lower levels of obstruction marking are appropriate.",
  ],
  [
    "Medium-Intensity Obstruction Lights",
    "Type A. Type B. Type C",
    "Medium-intensity systems for structures requiring greater conspicuity, with the applicable type and operating characteristics determined by the project requirements.",
  ],
  [
    "Dual Medium-Intensity Systems",
    "Type AB. Type AC",
    "Combined configurations designed to provide different lighting characteristics for daytime and night-time operation, where required.",
  ],
  [
    "High-Intensity Obstruction Lights",
    "Type A. Type B",
    "High-intensity systems for structures requiring enhanced conspicuity, configured to meet applicable aviation standards and authority requirements.",
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
function EnvironmentCard({
  title,
  text,
  index,
}: {
  title: string;
  text: string;
  index: number;
}) {
  return (
    <article className="overflow-hidden rounded-[10px]">
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
  const [activeReliabilityIndex, setActiveReliabilityIndex] = useState(0);
  const [activeEnvironmentIndex, setActiveEnvironmentIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveReliabilityIndex((current) => (current + 1) % reliability.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveEnvironmentIndex((current) => (current + 1) % environments.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <div>
      <DynamicHero
        title="Aircraft Warning Lights"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Aircraft Warning Lights" },
        ]}
        backgroundImage="/acs/aircraft-hero.png"
      />
      <main className="bg-white">
        <div className="mx-auto w-[90%] py-10 md:py-16 2xl:max-w-350">
          <div className="min-w-0 w-full">
            <section id="overview" className="mb-16 scroll-mt-8 grid items-center gap-8 xl:grid-cols-2 xl:gap-[33px] md:py-10">
              <div className="relative h-60 md:h-90 xl:h-[120%] overflow-hidden rounded-[10px]">
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
                <Heading className="mt5">
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
            <section id="applications" className="mb-16 scroll-mt-8">
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
              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {lightTypes.map(([title, type, text], index) => (
                  <article
                    key={title}
                    className={`rounded-[10px] p-5 ${index === 1 || index === 3 ? "bg-[linear-gradient(125deg,#168DCA,#0F2453)] text-white" : "bg-[#f3f3f3] text-black"}`}
                  >
                    <h3 className="text-[20px] font-medium">
                      {title}
                    </h3>
                    <p className={`mt-1 text-[12px] font-medium ${index === 1 || index === 3 ? "text-white" : "text-black"}`}>
                      {type}
                    </p>
                    <p className={`mt-3 text-[13px] leading-relaxed ${index === 1 || index === 3 ? "text-white" : "text-[#636363]"}`}>                      {text}
                    </p>
                  </article>
                ))}
              </div>
            </section>
            <section id="integrated-systems" className="mb-16 scroll-mt-8 grid items-center gap-8 xl:grid-cols-2 xl:gap-[33px]">
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
                    required.
                  </span>
                  <span className="mt-4 block">
                    The control philosophy is developed around the
                    project so that the system can operate automatically and
                    reliably with minimum dependence on manual intervention.
                  </span>
                </Body>
              </div>
              <div className="relative min-h-60 md:min-h-100 overflow-hidden rounded-[10px]">
                <Image
                  src="/acs/aircraft-warning-intro.png"
                  alt="Aircraft warning lighting system"
                  fill
                  className="object-cover"
                />
              </div>
            </section>
            <section id="reliable-operations" className="mb-16 scroll-mt-8 text-center">
              <Heading>Engineered for Reliable Operations</Heading>
              <Body>
                <span className="mt-4 block">
                  Aircraft warning systems are safety-critical infrastructure.
                  Catobo therefore focuses on the reliability of the complete
                  operating system, not simply the performance of an individual
                  light. Our engineering approach considers:
                </span>
              </Body>
              <div className="mt-6 text-left md:hidden">
                <div key={reliability[activeReliabilityIndex][0]} className="animate-fadeIn">
                  <Card
                    title={reliability[activeReliabilityIndex][0]}
                    text={reliability[activeReliabilityIndex][1]}
                  />
                </div>
              </div>
              <div className="mt-5 flex justify-center gap-2 md:hidden" aria-label="Reliable operations carousel slides">
                {reliability.map(([title], index) => (
                  <button
                    key={title}
                    type="button"
                    aria-label={`Show ${title}`}
                    aria-current={activeReliabilityIndex === index}
                    onClick={() => setActiveReliabilityIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${activeReliabilityIndex === index ? "w-7 bg-[#168DCA]" : "w-2.5 bg-[#d5d5d5] hover:bg-[#a6a6a6]"}`}
                  />
                ))}
              </div>
              <div className="mt-6 hidden gap-3 text-left md:grid md:grid-cols-2 xl:grid-cols-3">
                {reliability.map(([title, text]) => (
                  <Card key={title} title={title} text={text} />
                ))}
              </div>
            </section>

            <section id="assessment-design" className="mb-14 scroll-mt-8">
              <Heading>Assessment &amp; Design</Heading>
              <Body>
                <span className="mt-4 block">
                  We assess the structure, location, height, surrounding
                  environment, aviation requirements, and applicable regulatory
                  framework to establish the appropriate obstruction-lighting
                  strategy.
                </span>
              </Body>
            </section>

            <section id="compliance" className="mb-16 scroll-mt-8 grid items-center gap-8 xl:grid-cols-2 xl:gap-[33px]">
              <div className="relative min-h-60 md:min-h-110 overflow-hidden rounded-[10px]">
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
            <section id="compliance" className="mb-14">
              <div className="mt-8 space-y-5">
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
                  <div key={title} className="grid gap-2 md:grid-cols-[300px_1fr] md:gap-8">
                    <h3 className="text-[20px] font-medium">
                      {title}
                    </h3>
                    <Body>
                      <span className="block">{text}</span>
                    </Body>
                  </div>
                ))}
              </div>
            </section>
            <section id="environments" className="mb-16 scroll-mt-8">
              <Heading className="text-center">
                Built for Demanding Environments
              </Heading>
              <Body>
                <span className="mt-3 block text-center">
                  Catobo&apos;s aircraft warning lighting capability is suited to a
                  wide range of structures and operating environments:
                </span>
              </Body>
              <div className="mt-6 md:hidden">
                <div key={environments[activeEnvironmentIndex][0]} className="animate-fadeIn">
                  <EnvironmentCard
                    title={environments[activeEnvironmentIndex][0]}
                    text={environments[activeEnvironmentIndex][1]}
                    index={activeEnvironmentIndex}
                  />
                </div>
              </div>
              <div className="mt-5 flex justify-center gap-2 md:hidden" aria-label="Demanding environments carousel slides">
                {environments.map(([title], index) => (
                  <button
                    key={title}
                    type="button"
                    aria-label={`Show ${title}`}
                    aria-current={activeEnvironmentIndex === index}
                    onClick={() => setActiveEnvironmentIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${activeEnvironmentIndex === index ? "w-7 bg-[#168DCA]" : "w-2.5 bg-[#d5d5d5] hover:bg-[#a6a6a6]"}`}
                  />
                ))}
              </div>
              <div className="mt-6 hidden gap-3 md:grid md:grid-cols-2 md:gap-6 xl:grid-cols-3">
                {environments.map(([title, text], index) => (
                  <EnvironmentCard key={title} title={title} text={text} index={index} />
                ))}
              </div>
            </section>
            <section id="partner" className="mb-16 scroll-mt-8 grid items-start gap-8 xl:grid-cols-2 xl:gap-[33px]">
              <div>
                <Heading>One Partner. From NOC to AMC.</Heading>
                <div className="mt-4 md:mt-7 flex flex-wrap items-center gap-2 text-[14px] font-medium text-black">
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
              </div>
              <Body>
                <span className="md:mt-4 block xl:mt-0">
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
            </section>            <section className="mb-5 grid items-center gap-8 xl:grid-cols-2 xl:gap-[33px]">
              <div className="relative min-h-64 md:min-h-100 overflow-hidden rounded-[10px]">
                <Image
                  src="/acs/aircraft-warning-more-than-lights.png"
                  alt="Aircraft warning lighting"
                  fill
                  className="md:object-cover"
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
