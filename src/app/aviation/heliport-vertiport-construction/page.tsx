"use client";

import DynamicHero from "@/components/common/hero";
import { CheckIcon } from "@/components/common/CheckIcon";
import ProcessTimeline from "@/components/Timeline";
import React from "react";

const services = [
  "Design & Build Solutions",
  "Civil & Structural Construction",
  "Ground, Rooftop & Elevated Heliports",
  "Structural Design Coordination & Load Analysis",
  "Earthworks & Foundation Construction",
  "Drainage & Water Management Systems",
  "Surface Finishes & Anti-Skid Coatings",
  "Helipad Markings & Operational Zoning",
  "Aviation Lighting Systems",
  "Firefighting Systems",
  "Electrical & Control Infrastructure",
  "Earthing & Lightning Protection",
  "Testing, Commissioning & Operational Handover",
];
const standards = [
  "ICAO Annex 14, Volume II – Heliports",
  "ICAO Doc 9261 – Heliport Manual",
  "FAA AC 150/5390-2D – Heliport Design",
  "NFPA 418 – Heliports",
  "CAP 437 (where applicable)",
  "Applicable Civil Aviation Authority Regulations",
];
const quality = [
  "Material Inspection & Verification",
  "Construction Quality Control",
  "Structural & Load Verification",
  "Installation Inspections",
  "Functional Testing & Commissioning",
  "Documentation for Authority Approvals",
  "Certification Support & Operational Readiness",
];

const BodyText = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p className={`text-[12.5px] leading-relaxed text-[#636363] ${className}`}>
    {children}
  </p>
);
const MainText = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={`text-[14px] md:text-[16px] leading-relaxed text-[#636363] ${className}`}
  >
    {children}
  </p>
);
export function SectionHeading({
  children,
  size = "h2",
  className = "",
}: {
  children: React.ReactNode;
  size?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const base = `font-medium text-black leading-tight tracking-wide ${className}`;
  if (size === "h1")
    return <h1 className={`text-[28px] ${base}`}>{children}</h1>;
  if (size === "h3")
    return <h3 className={`text-[16px] ${base}`}>{children}</h3>;
  return <h2 className={`text-[28px] 2xl:text-[35px] ${base}`}>{children}</h2>;
}
const List = ({ items }: { items: string[] }) => (
  <div className="space-y-2">
    {items.map((item) => (
      <div
        key={item}
        className="flex items-start gap-2 text-[13px] leading-5 text-[#636363] md:text-[14px]"
      >
        <span className=" flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#168dca] text-[8px] text-[#168dca]">
          ✓
        </span>
        {item}
      </div>
    ))}
  </div>
);
const Photo = ({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <img
    src={src}
    alt={alt}
    className={`h-full w-full rounded-md object-cover ${className}`}
  />
);
const ThemeIcon = ({ src }: { src: string }) => (
  <span
    aria-hidden="true"
    className="mb-2 block h-12 w-12 bg-gradient-to-br from-[#168dca] to-[#0f2453]"
    style={{
      maskImage: `url(${src})`,
      WebkitMaskImage: `url(${src})`,
      maskRepeat: "no-repeat",
      WebkitMaskRepeat: "no-repeat",
      maskPosition: "center",
      WebkitMaskPosition: "center",
      maskSize: "contain",
      WebkitMaskSize: "contain",
    }}
  />
);

export default function HeliportVertiportConstructionPage() {
  return (
    <div>
      <DynamicHero
        title="Heliport & Vertiport Construction"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Heliport & Vertiport Construction" },
        ]}
        backgroundImage="/hvc/hero-bg.png"
      />
      <main className="2xl:max-w-350 mx-auto w-[90%] space-y-12 py-8 md:space-y-16 md:py-12">
        <section className="space-y-3">
          <SectionHeading>
            Engineered Construction for Safe and Reliable Aviation Operations
          </SectionHeading>
          <MainText className="mb-3">
            Catobo delivers complete Design &amp; Build solutions for heliports,
            helidecks, and vertiports across the Middle East, Africa, and India.
            From initial engineering and authority coordination to construction,
            certification, and operational handover, we manage every stage of
            the project lifecycle. Every facility is engineered for structural
            integrity, operational safety, and long-term performance while
            complying with international aviation standards.
          </MainText>
          <MainText className="mb-3">
            Whether it&apos;s a hospital rooftop, airport, offshore platform,
            military base, commercial development, or an Advanced Air Mobility
            (AAM) facility, Catobo provides turnkey construction solutions
            tailored to each project&apos;s operational requirements.
          </MainText>
          <div className="mb-8 mt-5 grid gap-2 overflow-hidden sm:grid-cols-2">
            <Photo
              src="/hvc/intro-ground.png"
              alt="Ground heliport construction"
              className="h-auto"
            />
            <Photo
              src="/hvc/intro-elevated.png"
              alt="Elevated heliport construction"
              className="h-auto"
            />
          </div>
          <div className="mt-8 block grid items-stretch gap-2 md:grid-cols-2">
            <div className="rounded-md bg-[#f3f3f3] p-3">
              <ThemeIcon src="/hvc/aam-1.png" />
              <h3 className="text-[16px] font-medium text-black">
                Complete Construction Solutions
              </h3>
              <BodyText className="mt-1">
                Our integrated construction services cover every aspect of
                aviation infrastructure, providing clients with a single point
                of responsibility throughout the project.
              </BodyText>
            </div>
            <div className="rounded-md bg-[#f3f3f3] p-3">
              <ThemeIcon src="/hvc/aam-2.png" />
              <h3 className="text-[16px] font-medium text-black">
                Ground Helipads
              </h3>
              <BodyText className="mt-1">
                Construction of concrete, interlocks or asphalt heliports
                designed for heavy helicopter operations, including earthworks,
                pavements, lighting infrastructure, drainage, firefighting
                systems, and operational markings.
              </BodyText>
            </div>
          </div>
          <div className=" mt-3 rounded-md bg-[#f3f3f3] p-3">
            <ThemeIcon src="/hvc/aam-3.png" />
            <h3 className="text-[16px] font-medium text-black">
              Elevated Aluminium Helidecks
            </h3>
            <BodyText className="mt-1">
              Catobo specializes in the design, supply, and installation of
              modular aluminium helidecks for hospitals, offshore facilities,
              commercial buildings, military installations, and industrial
              sites. Lightweight, corrosion-resistant, and structurally
              efficient, aluminium helidecks reduce dead loads while providing
              exceptional durability and low maintenance. Complete systems
              include aluminium deck panels, supporting structures, safety nets,
              perimeter safety equipment, integrated lighting, firefighting
              systems, and access platforms.
            </BodyText>
          </div>
        </section>
        <section>
          <SectionHeading>
            Vertiports &amp; Advanced Air Mobility (AAM)
          </SectionHeading>
          <p className="mt-2 text-[14px] md:text-[16px] leading-relaxed text-[#636363]">
            Future-ready infrastructure engineered for eVTOL aircraft and
            next-generation urban air mobility, with scalable designs to
            accommodate evolving operational requirements.
          </p>
          <p className="mt-3 text-[12px] font-medium text-black">
            Our turnkey construction services include:
          </p>
          <div className="mt-2 grid gap-x-8 sm:grid-cols-2">
            <List items={services.slice(0, 7)} />
            <List items={services.slice(7)} />
          </div>
        </section>
        <section className="grid items-stretch gap-6 md:grid-cols-2 md:items-stretch">
          <div className="h-full self-stretch order-2 md:order-1">
            <Photo src="/hvc/closing.png" alt="Heliport perimeter safety net" />
          </div>
          <div className="order-1 md:order-2">
            <SectionHeading>Perimeter Safety Nets</SectionHeading>
            <p className="mt-3 text-[14px] md:text-[16px] leading-relaxed text-[#636363]">
              Catobo can design, supply and install safety netting to meet your needs. Material of safety netting frames are galvanized and SS316 wire rope mesh with ferrules. Our Safety Net produce a safe and effective hammock effect that absorbs the kinetic energy of falling objects or persons without fear of re-bounce. This proven design is strong as well as long lasting and is designed to withstand the harshest environmental conditions. The benefits of balanced strength and fail-safe structure of our safety Net come into effect especially when the net is damaged: even several cuts will not affect its ability to safely stop and contain a falling person. This results in market-leading safety and reliability, so you can always be sure that your operations run safely and smoothly.
            </p>
          </div>
        </section>
        <section>
          <ProcessTimeline
            title="Built for Compliance"
            subtitle="Every project is designed and constructed in accordance with recognised aviation standards and local authority requirements, ensuring a smooth certification process and safe operational performance."
            columns={3}
            steps={[
              { number: "01", title: "ICAO Annex 14, Volume II – Heliports" },
              { number: "02", title: "ICAO Doc 9261 – Heliport Manual" },
              { number: "03", title: "FAA AC 150/5390-2D – Heliport Design" },
              { number: "04", title: "NFPA 418 – Heliports" },
              { number: "05", title: "CAP 437 (where applicable)" },
              {
                number: "06",
                title: "Applicable Civil Aviation Authority Regulations",
              },
            ]}
          />
        </section>
        <section className="grid items-stretch gap-6 md:grid-cols-2 md:items-stretch">
          <div>
            <SectionHeading>Quality Assurance</SectionHeading>
            <p className="mt-3 text-[14px] md:text-[16px] leading-relaxed text-[#636363]">
              Quality is integrated into every stage of construction. From
              material selection to final commissioning, Catobo follows rigorous
              inspection and testing procedures to ensure every aviation
              facility is delivered to the highest standards.
            </p>
            <p className="mt-3 text-[12px] font-medium text-black">
              Our Quality Process Includes:
            </p>
            <div className="mt-2">
              <List items={quality} />
            </div>
          </div>
          <div className="h-full min-h-[280px]">
            <Photo src="/hvc/quality.png" alt="Heliport quality assurance" />
          </div>
        </section>
        <section>
          <SectionHeading>Turnkey Delivery</SectionHeading>
          <p className="mt-3  text-[14px] md:text-[16px] leading-relaxed text-[#636363]">
            Catobo serves as your single-source partner for aviation
            infrastructure. By combining engineering expertise, construction
            capability, authority coordination, and certification support, we
            simplify complex aviation projects while ensuring every facility is
            safe, compliant, and ready for operation.
          </p>
          <p className="mt-4 text-[12px] text-[#636363]">
            From Design &amp; Build to Certification—Catobo delivers aviation
            infrastructure built to perform.
          </p>
          <div className="mt-4 grid items-stretch gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {[
              [
                "/hvc/turnkey-1.svg",
                "Turnkey Design & Build",
                "From concept and engineering to construction, certification, and operational handover.",
              ],
              [
                "/hvc/turnkey-2.svg",
                "Ground & Elevated Solutions",
                "Specialists in concrete helipads, asphalt heliports, rooftop facilities, and modular aluminium helidecks.",
              ],
              [
                "/hvc/turnkey-3.svg",
                "Integrated Aviation Systems",
                "Complete lighting, firefighting, electrical, earthing, drainage, and safety systems under one contract.",
              ],
              [
                "/hvc/turnkey-4.svg",
                "Built to International Standards",
                "Designed and constructed in accordance with ICAO, FAA, NFPA, CAP 437, and local aviation authority requirements.",
              ],
              [
                "/hvc/turnkey-5.svg",
                "Certification Ready",
                "Comprehensive testing, commissioning, documentation, and authority support for a smooth certification process.",
              ],
            ].map(([icon, title, description]) => (
              <div
                key={title}
                className="flex h-full flex-col rounded-md bg-[#f3f3f3] p-3"
              >
                <img
                  src={icon}
                  alt=""
                  className="mb-3 h-7 w-7 object-contain"
                />
                <h3 className="text-[15px] md:text-[13px] 2xl:text-[15px] font-medium leading-5 text-black">
                  {title}
                </h3>
                <p className="mt-2 text-[12px] md:text-[10px] 2xl:text-[12px] leading-[1.45] text-[#636363]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="grid gap-6 xl:grid-cols-2 md:items-start">
          <div>
            <SectionHeading>
              Catobo Is One Of The Few Aviation Infrastructure Companies
            </SectionHeading>
            <p className="mt-3 text-[14px] md:text-[16px] leading-relaxed text-[#636363]">
              Catobo is one of the few aviation infrastructure companies that
              delivers the complete project lifecycle under a single umbrella.
              From initial consultation, feasibility studies, and engineering
              design to procurement, supply, construction, installation,
              testing, commissioning, certification support, and long-term
              maintenance, every stage is managed by one experienced team. This
              integrated approach eliminates the need to coordinate multiple
              contractors, reduces project risks, streamlines communication, and
              ensures consistent quality throughout the project.
            </p>
          </div>
          <div className="h-56 md:h-72">
            <Photo src="/hvc/perimeter.png" alt="Completed heliport facility" />
          </div>
        </section>
      </main>
    </div>
  );
}
