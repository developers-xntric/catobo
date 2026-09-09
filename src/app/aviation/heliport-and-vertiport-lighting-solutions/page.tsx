"use client";

import DynamicHero from "@/components/common/hero";
import Badge from "@/components/ui/badge";
import { Sidebar } from "@/app/aviation/airfield-lighting/page";
import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";

type SolutionCardProps = {
  icon: string;
  title: string;
  description: string;
};

function BodyText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[14px] leading-[1.78] text-[#636363] ${className}`}>{children}</p>;
}

function SectionHeading({ children, size = "h2", className = "" }: { children: React.ReactNode; size?: "h1" | "h2" | "h3"; className?: string }) {
  const sizeClass = size === "h1" ? "text-[28px] 2xl:text-[35px]" : size === "h3" ? "text-[16px]" : "text-[28px] 2xl:text-[35px]";
  const Tag = size === "h1" ? "h1" : size === "h3" ? "h3" : "h2";
  return <Tag className={`${sizeClass} font-medium leading-tight tracking-wide text-black ${className}`}>{children}</Tag>;
}

function SolutionCard({ icon, title, description }: SolutionCardProps) {
  return (
    <article className="rounded-2xl bg-[#F3F3F3] p-4 md:p-5">
      <div
        aria-hidden="true"
        className="mb-4 h-12 w-12 bg-[linear-gradient(135deg,#168DCA_0%,#0F2453_100%)] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]"
        style={{ WebkitMaskImage: `url(${icon})`, maskImage: `url(${icon})` }}
      />
      <h3 className="text-[18px] md:text-[16px] lg:text-[18px] font-medium  text-black">{title}</h3>
      <p className="mt-2 text-[12px] md:text-[13px] 2xl:text-[14px] text-[#636363]">{description}</p>
    </article>
  );
}

function MainContent() {
  return (
    <div className="min-w-0 max-w-240 flex-1">
      <section id="section-0" className="mb-14">
        <div className="grid items-stretch gap-7 xl:grid-cols-[1.02fr_1fr]">
          <div className="relative order-2 min-h-[320px] overflow-hidden rounded-[8px] lg:rounded-2xl bg-gray-100 xl:order-1 xl:min-h-full">
            <Image src="/hvls/figma-intro.png" alt="Heliport and vertiport lighting infrastructure" fill className="object-cover" priority sizes="(min-width: 1280px) 48vw, 90vw" />
          </div>
          <div className="order-1 xl:order-2">
            <Badge text="Heliport & Vertiport Lighting Solutions" variant="black" />
            <SectionHeading size="h1" className="mt-4">
              Precision Lighting for Safe Aircraft Operations
            </SectionHeading>
            <BodyText className="mt-5">
              Catobo provides integrated heliport and vertiport lighting solutions designed to support safe aircraft operations during day, night and reduced-visibility conditions. Our systems can be configured for permanent, temporary, elevated, rooftop and surface-level facilities in accordance with applicable aviation requirements.
            </BodyText>
            <BodyText className="mt-3">
              From lighting supply and installation to testing, commissioning and maintenance, Catobo provides turnkey lighting solutions tailored to the operational requirements of each facility.
            </BodyText>
          </div>
        </div>
      </section>

      <section id="section-1" className="mb-14">
        <SectionHeading>Our Lighting Solutions</SectionHeading>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <SolutionCard icon="/hvls/figma-icon-01.png" title="Flush-Mounted Perimeter Lights" description={"Recessed LED perimeter lights installed flush with the helipad surface to provide clear and continuous visual definition of the FATO/TLOF perimeter. Their low-profile design minimizes protrusion above the deck or pavement, making them particularly suitable for elevated helidecks and areas where surface clearance is important. Available in aviation-specified colours and configurations to suit project requirements."} />
          <SolutionCard icon="/hvls/figma-icon-02.png" title="Surface-Mounted Perimeter Lights" description={"Robust surface-mounted LED fittings designed to clearly define the perimeter of the landing area where recessed installation is not practical. These lights provide reliable visual guidance while offering straightforward installation, inspection and maintenance access. They are suitable for ground-level, rooftop and elevated heliport applications."} />
          <SolutionCard icon="/hvls/figma-icon-03.png" title="H & Circle Lighting" description={"Illuminated “H” and aiming circle systems provide clear visual identification of the designated landing area. The illuminated markings assist pilots in identifying and aligning with the landing position, particularly during night and reduced-visibility operations. Systems can be configured to suit the helipad layout and applicable aviation requirements."} />
          <SolutionCard icon="/hvls/figma-icon-04.png" title="Floodlights" description={"High-performance LED floodlights provide controlled illumination of the FATO/TLOF and surrounding operational area, helping pilots identify the condition of the landing surface and detect potential objects or obstructions. The lighting is designed to provide effective surface illumination while minimizing glare and unwanted light to approaching pilots. Cranton's floodlight range is specifically intended for heliport applications and can be used on surface, elevated and large-platform helipads."} />
          <SolutionCard icon="/hvls/figma-icon-05.png" title="Wind Direction Indicators" description={"Illuminated wind cones/wind direction indicators provide pilots with immediate visual information about wind direction and an indication of wind conditions. For night operations, internally or externally illuminated configurations can provide clear visibility of the windsock. Systems can also incorporate additional equipment such as obstruction lights and other aviation lighting components."} />
          <SolutionCard icon="/hvls/figma-icon-06.png" title="Heliport Identification Beacons" description={"High-visibility identification beacons provide long-range visual identification of a heliport where additional guidance is required or where surrounding lighting may make the facility difficult to identify. LED beacon systems can provide the required visual identification pattern while offering low power consumption and long service life."} />
          <SolutionCard icon="/hvls/figma-icon-07.png" title="Obstruction Lights" description={"Aviation obstruction lighting is used to clearly mark structures, obstacles and other potential hazards around heliports, vertiports and associated infrastructure. Catobo can provide LED, low-intensity and solar-powered obstruction lighting solutions, with options for monitoring and fault indication where required."} />
          <SolutionCard icon="/hvls/figma-icon-08.png" title="Approach & Guidance Lighting" description={"Approach and guidance lighting systems provide pilots with additional visual references during the approach and landing phase, assisting with alignment, orientation and identification of the landing area. Catobo can integrate approach lighting with other heliport visual aids, including HAPI (Helicopter Approach Path Indicator) systems, to provide visual approach-path guidance where required."} />
          <SolutionCard icon="/hvls/figma-icon-09.png" title="Explosion Proof Aviation Lighting" description={"Catobo provides explosion-proof and hazardous-area certified aviation lighting solutions for offshore heliports and helidecks, designed for environments where flammable gases or vapours may be present. Solutions are selected according to the applicable hazardous-area classification, environmental conditions and aviation requirements, providing reliable performance in demanding offshore environments."} />
          <SolutionCard icon="/hvls/figma-icon-10.png" title="Status & Warning Lights" description={"Specialized aviation status and warning lights provide clear visual indication of system status, operational conditions, restricted areas or other conditions requiring pilot awareness. These systems can be integrated with the heliport lighting control and monitoring system to provide clear operational feedback."} />
          <div className="sm:col-span-2">
          <SolutionCard icon="/hvls/figma-icon-11.png" title="Portable Aviation Lighting" description={"Self-powered and rapidly deployable lighting systems provide flexible lighting for temporary helipads, emergency landing areas, remote locations and operational sites where permanent electrical infrastructure is unavailable or impractical. Battery, solar and other self-contained configurations can be provided depending on the application."} />
          </div>
        </div>
      </section>

      <section id="section-2" className="mb-10">
        <SectionHeading>Complete Lighting Solutions</SectionHeading>
        <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2 text-[12px] font-medium text-black md:gap-x-3 md:text-[13px]">
          {["Design & Engineering", "Lighting Supply", "Installation", "Testing & Commissioning", "Certification", "Maintenance"].map((item, index, items) => (
            <React.Fragment key={item}>
              <span>{item}</span>
              {index < items.length - 1 && <ArrowRight className="h-4 w-4 text-[#168DCA]" aria-hidden="true" />}
            </React.Fragment>
          ))}
        </div>
        <div className="mt-3 space-y-4">
          <BodyText>
            Catobo can provide complete heliport and vertiport lighting packages, including light fittings, control panels, cabling, cable containment, isolation and protection systems, lighting controllers, control and monitoring systems, and associated electrical infrastructure.
          </BodyText>
          <BodyText>
            Our turnkey approach allows the lighting system to be coordinated with the overall heliport, vertiport or helideck design, from initial engineering through installation and final commissioning.
          </BodyText>
        </div>
        <div id="section-3" className="mt-6 scroll-mt-8">
          <div className="grid items-center gap-8 xl:grid-cols-[1.02fr_1fr]">
            <div className="h-64 overflow-hidden rounded-2xl bg-gray-100 sm:h-80">
              <Image src="/hvls/figma-future.png" alt="Aviation lighting installation" width={900} height={650} className="h-full w-full object-cover" />
            </div>
            <div>
              <SectionHeading size="h3">Built for the Future of Aviation</SectionHeading>
              <div className="mt-3 space-y-4">
                <BodyText>
                  Our lighting solutions can be designed for heliports, vertiports, rooftop helipads, elevated platforms, offshore helidecks, temporary landing sites and remote aviation facilities.
                </BodyText>
                <BodyText>
                  Whether the requirement is a permanent aviation facility, an offshore helideck or a rapidly deployable landing area, Catobo provides lighting systems tailored to the operational, environmental and regulatory requirements of each project.
                </BodyText>
                <BodyText>Safe visibility. Precise guidance. Reliable aviation lighting.</BodyText>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function SolutionHeliportVertiportLighting() {
  const sidebarGroups = [{ items: [
    { label: "Overview", hasArrow: true },
    { label: "Lighting Solutions", hasArrow: true },
    { label: "Complete Lighting Solutions", hasArrow: true },
    { label: "the Future of Aviation", hasArrow: true },
  ] }];

  return (
    <div>
      <DynamicHero
        title="Heliport & Vertiport Lighting Systems"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Heliport & Vertiport Lighting Systems" }]}
        backgroundImage="/hvls.png"
      />
      <main className="min-h-screen bg-white">
        <div className="mx-auto w-[90%] py-8 2xl:max-w-360">
          <div className="flex flex-col items-start gap-12 md:gap-5 lg:flex-row">
            <Sidebar title="Portable Lighting Solutions" groups={sidebarGroups} />
            <MainContent />
          </div>
        </div>
      </main>
    </div>
  );
}
