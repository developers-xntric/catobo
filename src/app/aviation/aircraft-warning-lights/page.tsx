"use client";

import DynamicHero from "@/components/common/hero";
import Badge from "@/components/ui/badge";
import { CheckIcon } from "@/components/common/CheckIcon";
import React, { useState } from "react";

// ==========================================
// SHARED UI COMPONENTS
// ==========================================

interface CheckItemProps {
  label: string;
  value?: string;
}

function CheckItem({ label, value }: CheckItemProps) {
  if (value) {
    return (
      <div className="flex items-start gap-3">
        <CheckIcon />
        <div>
          <p className="text-[13.5px] font-semibold text-[#1a1a1a]">{label}</p>
          <p className="text-[13px] text-[#636363] leading-snug">{value}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-start gap-3">
      <CheckIcon />
      <span className="text-[14px] text-[#636363] leading-relaxed">
        {label}
      </span>
    </div>
  );
}

// ==========================================
// SIDEBAR COMPONENT
// ==========================================

interface SidebarItem {
  label: string;
  hasArrow?: boolean;
}

interface SidebarGroup {
  heading: string;
  items: SidebarItem[];
}

interface SidebarProps {
  title: string;
  groups: SidebarGroup[];
}

export function Sidebar({ title, groups }: SidebarProps) {
  // flatten all items for active tracking
  const allItems = groups.flatMap((g) => g.items);
  const [active, setActive] = useState(0);

  let globalIdx = 0;

  return (
    <div className="w-full lg:w-90 lg:shrink-0 bg-[#F3F3F3] p-5 rounded-2xl lg:sticky lg:top-8">
      <div className="mb-4 px-1">
        <h2 className="text-[1.25rem] text-black font-medium tracking-wide">
          {title}
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        {groups.map((group, gi) => {
          return (
            <div key={gi}>
              {/* Group heading */}
              <p className="text-[0.82rem] font-semibold text-[#1a1a1a] uppercase tracking-widest mb-2.5 px-1">
                {group.heading}
              </p>

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
                      className={`w-full text-left flex items-center justify-between px-4 py-3.5 rounded-xl border transition-all ${
                        isActive
                          ? "border-transparent shadow-md"
                          : "border-[#E8E8E8] hover:border-gray-300"
                      }`}
                      style={{
                        background: isActive
                          ? "linear-gradient(93deg, #168DCA -24.15%, #0F2453 134.7%)"
                          : "#fff",
                      }}
                    >
                      <span
                        className={`text-[0.875rem] leading-snug font-normal tracking-wide pr-3 ${
                          isActive ? "text-white" : "text-[#1a1a1a]"
                        }`}
                      >
                        {item.label}
                      </span>
                      {item.hasArrow && (
                        <svg
                          className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-black"}`}
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
          );
        })}
      </div>
    </div>
  );
}

// ==========================================
// REUSABLE IMAGE GRID
// ==========================================

function ImageGrid({
  left,
  right,
  rightContain = false,
}: {
  left: string;
  right: string;
  rightContain?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-3">
      <div className="rounded-xl overflow-hidden bg-gray-100 h-70">
        <img src={left} alt="" className="w-full h-full object-cover" />
      </div>
      <div
        className={`rounded-xl overflow-hidden h-70 ${rightContain ? "" : "bg-gray-100"}`}
      >
        <img
          src={right}
          alt=""
          className={`w-full h-full ${rightContain ? "object-fill mix-blend-multiply" : "object-cover"}`}
        />
      </div>
    </div>
  );
}

// ==========================================
// MAIN CONTENT
// ==========================================

function MainContent() {
  return (
    <div className="flex-1 min-w-0 max-w-240">
      {/* ─── Section 1: HORIZON™ L-810 LED Obstruction Light ─── */}
      <section id="section-0" className="mb-16">
        <Badge text="Low Intensity" variant="black" />
        <h1 className="text-[30px] font-medium text-black mb-4 leading-tight tracking-wide">
          HORIZON™ L-810 LED Obstruction Light
        </h1>
        <p className="text-[14px] text-[#636363] leading-[1.75] mb-7">
          The Hughey &amp; Phillips L-810 Obstruction Light provides an LED
          based solution to the FAA L-810 style of steady burning lights. The
          L-810 LED is currently available in both single and double
          configurations operating at 120V, 240V, 265VAC and also in a range of
          9-48 VDC. Both configurations are available as original equipment or
          as a direct replacement to the existing socket/lamp/lens on H&amp;P
          L-810 Incandescent OB2x Series obstruction lights.
        </p>

        {/* Spec check items */}
        <div className="space-y-4 mb-8">
          <CheckItem
            label="FAA Type:"
            value="L-810 Steady Burn Obstruction Light"
          />
          <CheckItem
            label="ICAO Type:"
            value="Low Intensity Type B Obstacle Light"
          />
          <CheckItem label="Certified to:" value="FAA AC 150/5345-43" />
          <CheckItem
            label="Compliant to:"
            value="Transport Canada CAR 621.19, ICAO Annex 14, USAF AFMAN 32-1076"
          />
        </div>

        <ImageGrid left="/acs/1.png" right="/acs/2.png" rightContain />

        {/* Features */}
        <h3 className="text-[22px] font-medium text-black mt-8 mb-4 tracking-wide">
          Features:
        </h3>
        <div className="space-y-3">
          {[
            "LED based obstruction lights last over 15 times longer than an incandescent light",
            "Approximately 94% less power than 116 Watt standard incandescent lamp",
            "4 Watt Power Consumption (AC version) / 3.4 Watts (DC Version)",
            'Available in both side and bottom conduit hubs at ¾" and 1" NPT',
            "Weather resistant lamp assembly & housing",
            "Self-contained wiring compartment on double units eliminates additional boxes",
            "Operates as a steady burn or flashing light",
            "Resistant to shock and vibration",
            "Direct replacement for existing incandescent fixtures",
          ].map((f, i) => (
            <CheckItem key={i} label={f} />
          ))}
        </div>
      </section>

      {/* ─── Section 2: FlashGuard® 2000B ─── */}
      <section id="section-1" className="mb-16">
        <Badge text="Medium Intensity" variant="black" />
        <h2 className="text-[28px] font-medium text-black mb-4 leading-tight tracking-wide">
          FlashGuard® 2000B
        </h2>
        <div className="space-y-3.5 mb-7 text-[14px] text-[#636363] leading-[1.75]">
          <p>
            The Flashguard 2000B Medium Intensity White Lighting System combines
            a daytime white strobe light and a nighttime white flashing light
            into a single flashhead. The system is also available as a red
            flashhead which can be used at night in place of red incandescent
            lighting, for much longer light source life. The flashhead is
            powered and controlled by a power supply that can be mounted
            remotely at the base of the structure. The power supply constantly
            monitors the operation of the system, and provides alarm contact
            closure upon any failure.
          </p>
          <p>
            The system automatically switches between day, twilight, and night
            intensities by the use of a calibrated photocell. Flashguard® 2000B
            flashheads incorporate a light blocking strip that minimizes ground
            scatter light, resulting in a community friendly lighting system.
          </p>
        </div>

        <ImageGrid left="/acs/3.png" right="/acs/4.png" rightContain />

        <h3 className="text-[22px] font-medium text-black mt-8 mb-4 tracking-wide">
          Application:
        </h3>
        <p className="text-[14px] text-[#636363] leading-[1.75] mb-6">
          Medium Intensity obstruction lighting systems are typically used on
          structures between 150' (45M) and 500' (150M) above ground level to
          provide aviation safety. The use of a medium intensity white strobe
          during the daytime typically eliminates the need to paint the
          structure with aviation orange and white stripes. The use of a white
          flashing strobe at night provides an 'eye catching' light for low
          flying aviators. Hughey &amp; Phillips' medium intensity obstruction
          lights are designed for lighting tall structures such as
          communication, television and radio towers, chimneys, cooling towers,
          tall buildings, catenary river crossings and bridges. This light is
          compatible with Enhanced Flight Vision Systems that use IR energy
          emissions for imaging, including NVG goggles.
        </p>

        <div className="space-y-4">
          <CheckItem
            label="FAA Type:"
            value="L-864 (Red) or L-865 (White) Medium Intensity Lighting"
          />
          <CheckItem
            label="ICAO Type:"
            value="Medium Intensity Obstacle Light"
          />
          <CheckItem
            label="Certified to:"
            value="FAA Advisory Circular 150/5345-43"
          />
          <CheckItem
            label="Compliant to:"
            value="ICAO Annex 14, MIL-C-7989, DGAC of Mexico, CAR 621.19"
          />
        </div>
      </section>

      {/* ─── Section 3: FlashGuard® 3000B ─── */}
      <section id="section-2" className="mb-16">
        <Badge text="Medium Intensity" variant="black" />
        <h2 className="text-[28px] font-medium text-black mb-4 leading-tight tracking-wide">
          FlashGuard® 3000B
        </h2>
        <p className="text-[14px] text-[#636363] leading-[1.75] mb-7">
          The Flashguard® 3000B Medium Intensity Dual Lighting System combines a
          daytime white strobe light and a nighttime red flashing strobe into a
          single flashhead, eliminating the need for two separate lighting
          systems. The flashhead is powered and controlled by a power supply
          that can be mounted remotely at the base of the structure. The power
          supply constantly monitors the operation of the system, and provides
          alarm contact closure upon any failure. The system automatically
          switches between day and night intensities by the use of a calibrated
          photocell. Flashguard® 3000B flashheads incorporate a light blocking
          strip that minimizes ground scatter light, resulting in a "community
          friendly" lighting system.
        </p>

        <ImageGrid left="/acs/5.png" right="/acs/6.png" rightContain />

        <h3 className="text-[22px] font-medium text-black mt-8 mb-4 tracking-wide">
          Application:
        </h3>
        <p className="text-[14px] text-[#636363] leading-[1.75]">
          Medium intensity obstruction lighting systems are typically used on
          structures between 150'(45M) and 500' (150M) above ground level to
          provide aviation safety. The use of a medium intensity white strobe
          during the daytime typically eliminates the need to paint the
          structure with aviation orange and white stripes. The use of a red
          flashing beacon at night provides a "community friendly" light. Hughey
          &amp; Phillips' medium intensity obstruction lights are designed for
          lighting tall structures such as communication, television and radio
          towers, chimneys, cooling towers, tall buildings, catenary river
          crossings and bridges. This light is compatible with Enhanced Flight
          Vision Systems that use IR energy emissions for imaging, including NVG
          goggles.
        </p>
      </section>

      {/* ─── Section 4: Horizon™ 2000/2009/3000 AC Series ─── */}
      <section id="section-3" className="mb-16">
        <Badge text="Medium Intensity" variant="black" />
        <h2 className="text-[28px] font-medium text-black mb-4 leading-tight tracking-wide">
          Horizon™ 2000/2009/3000 AC Series
        </h2>
        <p className="text-[14px] text-[#636363] leading-[1.75] mb-7">
          The Horizon™ Dual Medium Intensity LED Strobe System provides daytime
          white and nighttime red lights in one unit. Its self-contained power
          supply, with available GPS sync and day/night sensor, simplifies
          wiring but also accepts external signals if desired. Advanced features
          include advanced LED modules, cutting edge optics, individual LED
          monitoring/bypass, and active lightning protection. The unit also
          monitors the system and provides a NO or NC alarm contact upon any
          system failure.
        </p>

        <ImageGrid left="/acs/7.png" right="/acs/8.png" rightContain />

        <h3 className="text-[22px] font-medium text-black mt-8 mb-4 tracking-wide">
          Application:
        </h3>
        <p className="text-[14px] text-[#636363] leading-[1.75] mb-6">
          Medium intensity obstruction lighting systems are typically used on
          structures between 150' (45m) and 500' (150m) above ground level to
          provide aviation safety. The use of a medium intensity white strobe
          during the daytime typically eliminates the need to paint the
          structure with aviation orange and white stripes. The use of a red
          flashing beacon at night provides a "community friendly" light. Hughey
          &amp; Phillips medium intensity obstruction lights are designed for
          lighting tall structures such as communication, television and radio
          towers, wind turbines, smokestacks, cooling towers, tall buildings,
          catenary river crossings and bridges.
        </p>

        <div className="space-y-4">
          <CheckItem
            label="FAA Type:"
            value="LB64, LB65 or L-864/865 Medium Intensity Lighting"
          />
          <CheckItem
            label="ICAO Type:"
            value="Type A/B Medium Intensity Obstacle light"
          />
          <CheckItem
            label="Certified to:"
            value="FAA Advisory Circular 150/5345-43"
          />
          <CheckItem
            label="Compliant to:"
            value="ICAO Annex 14, MIL-C-7989, DGAC of Mexico, CAR 621.19"
          />
        </div>
      </section>

      {/* ─── Section 5: HORIZON™ Tower Lighting Controller ─── */}
      <section id="section-4" className="mb-16">
        <Badge text="Medium Intensity" variant="black" />
        <h2 className="text-[28px] font-medium text-black mb-5 leading-tight tracking-wide">
          HORIZON™ Tower Lighting Controller
        </h2>

        <h3 className="text-[20px] font-medium text-black mb-3 tracking-wide">
          Application:
        </h3>
        <p className="text-[14px] text-[#636363] leading-[1.75] mb-8">
          The SMART-CON HORIZON™ Controller is designed to operate a FAA Type
          A1, D1 or F1 lighting system. The SAMRT-CON is available in different
          input/output voltage configurations – AC/AC, DC/DC, or AC/DC. All
          models have a NEMA 4 outdoor housing. A calibrated switched-leg
          photocell is used for automatic day/ night switching. Fault Codes are
          generated for quick analysis of system condition. Comprehensive status
          indicators and alarm contacts for easy connection to remote monitoring
          systems.
        </p>

        {/* Sub-section: 70 Series */}
        <h3 className="text-[20px] font-medium text-black mb-4 tracking-wide">
          70 Series LED Control System
        </h3>

        <ImageGrid left="/acs/9.png" right="/acs/10.png" />

        <h3 className="text-[20px] font-medium text-black mt-8 mb-3 tracking-wide">
          Application:
        </h3>
        <p className="text-[14px] text-[#636363] leading-[1.75] mb-5">
          The 70 Series lighting controls combine the finest in digital
          circuitry with rugged electromechanical hardware to yield the
          industry's most comprehensive obstruction lighting controls. Standard
          models are available for all common FAA and ICAO applications. The 70
          Series modular design allows for custom controls for almost any
          combination of flashing HORIZON™ beacons and sidelights. All models
          include a NEMA 4 outdoor housing and a calibrated photocell for
          automatic day/night switching. Optional Stainless Steel housing is
          available upon request. A photocell override switch is standard on all
          systems, facilitation troubleshooting or maintenance. All controls
          provide comprehensive status indicators and alarm contacts for easy
          connection to remote monitoring systems.
        </p>

        <div className="flex flex-wrap gap-x-12 gap-y-4">
          <CheckItem label="FAA AC 150/5345-43," />
          <CheckItem label="ICAO Annex 14, CAR 621.19" />
        </div>

        {/* Sub-section: 9LC */}
        <h3 className="text-[20px] font-medium text-black mt-10 mb-4 tracking-wide">
          9LC Control System
        </h3>

        <ImageGrid left="/acs/11.png" right="/acs/12.png" />

        <h3 className="text-[20px] font-medium text-black mt-8 mb-3 tracking-wide">
          Application:
        </h3>
        <p className="text-[14px] text-[#636363] leading-[1.75]">
          9LC series lighting controls combine the finest in digital circuitry
          with rugged electromechanical hardware to yield the industry's most
          comprehensive obstruction lighting controls. Standard models are
          available for all common FAA and ICAO applications. The 9LC's modular
          design allows for custom controls for almost any combination of
          flashing red beacons and sidelights. All models include a NEMA 4
          outdoor housing and a calibrated photocell for automatic day/night
          switching. A photocell override switch is standard on all systems,
          facilitation troubleshooting or maintenance. All controls provide
          comprehensive status indicators and alarm contacts for easy connection
          to remote monitoring systems.
        </p>
      </section>

      {/* ─── Section 6: High Intensity – Strobeguard® SS-122/125 ─── */}
      <section id="section-5" className="mb-10">
        <Badge text="High Intensity" variant="black" />
        <h2 className="text-[28px] font-medium text-black mb-4 leading-tight tracking-wide">
          Strobeguard® SS-122/125
        </h2>
        <p className="text-[14px] text-[#636363] leading-[1.75] mb-7">
          The Strobeguard® SS-122/125 High Intensity White Strobe Systems are
          designed and certified to meet FAA Advisory Circular 150/5345-51B.
          Each system includes a flashhead and a solid-state power supply. The
          flashhead may be mounted remotely at the base of the structure or at
          the top of the structure adjacent to the flashhead. Systems are
          available with either a 1,500 W/s or 2,000 W/s output. High intensity
          obstruction lighting is used on structures over 500' (152M) above
          ground level to provide aviation safety.
        </p>

        <ImageGrid left="/acs/13.png" right="/acs/14.png" rightContain />

        <h3 className="text-[22px] font-medium text-black mt-8 mb-4 tracking-wide">
          SS-125 Obstruction Strobe Light:
        </h3>
        <p className="text-[14px] text-[#636363] leading-[1.75] mb-6">
          The StrobeGuard SS-125 is a single enclosure obstruction light
          designed to meet or exceed the requirements of Advisory Circular
          150/5345-43. The enclosures are fabricated from 304L stainless steel.
          All plug-in printed circuit boards are protected with a coating which
          meets the physical and electrical requirements of MIL-I-46058B. The
          SS-125 is supplied with a lightning arrestor capable of withstanding
          repeated 10,000 ampere current surges. Operated with the SS-122
          Controller, the system is completely self-activating for monitoring
          and identifying any malfunctioning light and is equipped to initiate a
          remote alarm. The number of SS-125 obstruction lights used on an
          installation depends upon the type of obstruction and its height.
        </p>

        <div className="space-y-4">
          <CheckItem label="" value="FAA Type: L-856 High Intensity Lighting" />
          <CheckItem
            label=""
            value="ICAO Type: Type A High Intensity Obstacle Light"
          />
          <CheckItem
            label=""
            value="Compliant for use with: ICAO Annex 14, Canadian Aviation Regulation 621.19, ICAO Annex 14, MIL-C-7989, DGAC of Mexico, FAA Advisory Circular AC 150/5345-43E"
          />
        </div>

        <h3 className="text-[22px] font-medium text-black mt-8 mb-4 tracking-wide">
          SS-122 Controller
        </h3>
        <p className="text-[14px] text-[#636363] leading-[1.75] mb-6">
          StrobeGuard® Controllers contain the flash interval and timing
          circuits, intensity selection controls, and monitoring receivers with
          status indicators required to operate the SS-125 strobe light. The
          controller is of modular construction with solid state circuitry for
          long life and ease of maintenance. StrobeGuard® controllers are
          designed to operate up to 32 obstruction lights at distances up to
          4700 feet. Each controller is equipped with the necessary manually
          operated controls to test all modes of operation. Digital monitor
          lamps are provided and illuminate when a flashhead or power supply is
          not operating as required. Each monitor lamp is operated in a coded
          mode indicating the location of the flashhead/power supply which is
          malfunctioning.
        </p>
      </section>
    </div>
  );
}

// ==========================================
// MAIN PAGE EXPORT
// ==========================================

export default function SolutionAviationObstructionLighting() {
  const sidebarGroups: SidebarGroup[] = [
    {
      heading: "Low Intensity",
      items: [
        { label: "HORIZON™ L-810 LED\nObstruction Light", hasArrow: true },
      ],
    },
    {
      heading: "Medium Intensity",
      items: [
        { label: "FlashGuard® 2000B", hasArrow: true },
        { label: "FlashGuard® 3000B", hasArrow: true },
        { label: "Horizon™ 2000/2009/3000\nAC Series", hasArrow: true },
        { label: "HORIZON™ Tower Lighting\nController", hasArrow: true },
      ],
    },
    {
      heading: "High Intensity",
      items: [{ label: "Strobeguard® SS-122/125", hasArrow: true }],
    },
  ];

  return (
    <div>
      <DynamicHero
        title={"Aircraft Warning Lights"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Aircraft Warning Lights" },
        ]}
        backgroundImage="/acs.png"
      />
      <main className="min-h-screen bg-white">
        <div className="2xl:max-w-360 w-[90%] mx-auto py-8">
          <div className="flex flex-col lg:flex-row gap-5 items-start">
            <Sidebar
              title=""
              groups={sidebarGroups}
            />
            <MainContent />
          </div>
        </div>
      </main>
    </div>
  );
}
