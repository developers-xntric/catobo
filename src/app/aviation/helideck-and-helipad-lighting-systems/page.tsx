"use client";

import DynamicHero from "@/components/common/hero";
import React, { useState } from "react";

function CheckIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4.5 h-4.5 shrink-0 mt-0.5 text-[#168DCA]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
    );
}

interface CheckItemProps {
    label: string;
    subItems?: string[];
}

function CheckItem({ label, subItems }: CheckItemProps) {
    return (
        <div className="flex items-start gap-3">
            <CheckIcon />
            <div>
                <span className="text-[14px] text-[#636363] leading-relaxed">{label}</span>
                {subItems && subItems.length > 0 && (
                    <ul className="mt-1 ml-2 space-y-0.5 list-disc list-inside">
                        {subItems.map((s, i) => (
                            <li key={i} className="text-[13.5px] text-[#636363] leading-relaxed list-none before:content-['•'] before:mr-1.5">
                                {s}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

function SectionTag({ label }: { label: string }) {
    return <p className="text-[12px] text-[#636363] mb-3">• {label}</p>;
}

function SectionHeading({ children, size = "h2" }: { children: React.ReactNode; size?: "h1" | "h2" | "h3" }) {
    const cls = "font-medium text-black leading-tight tracking-wide mb-4";
    if (size === "h1") return <h1 className={`text-[30px] ${cls}`}>{children}</h1>;
    if (size === "h3") return <h3 className={`text-[20px] ${cls}`}>{children}</h3>;
    return <h2 className={`text-[26px] ${cls}`}>{children}</h2>;
}

function BodyText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <p className={`text-[14px] text-[#636363] leading-[1.78] ${className}`}>{children}</p>
    );
}

function ImageGrid({
    left,
    right,
    rightContain = false,
    height = "h-64",
}: {
    left: string;
    right: string;
    rightContain?: boolean;
    height?: string;
}) {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-4 ${height}`}>
            <div className="rounded-xl overflow-hidden bg-gray-100 h-full">
                <img src={left} alt="" className="w-full h-full object-cover" />
            </div>
            <div
                className={`rounded-xl overflow-hidden h-full ${rightContain ? "flex items-center justify-center" : "bg-gray-100"
                    }`}
            >
                <img
                    src={right}
                    alt=""
                    className={`w-full h-full ${rightContain ? "object-contain mix-blend-multiply" : "object-cover"}`}
                />
            </div>
        </div>
    );
}

// ==========================================
// SIDEBAR
// ==========================================

interface SidebarItem {
    label: string;
    hasArrow?: boolean;
}

interface SidebarGroup {
    heading?: string;
    items: SidebarItem[];
}

interface SidebarProps {
    title: string;
    groups: SidebarGroup[];
}

export function Sidebar({ title, groups }: SidebarProps) {
    const [active, setActive] = useState(0);
    let globalIdx = 0;

    return (
        <div className="w-90 shrink-0 bg-[#F3F3F3] p-5 rounded-2xl sticky top-8">
            <div className="mb-4 px-1">
                <h2 className="text-[1.15rem] text-black font-medium tracking-wide leading-snug">
                    {title}
                </h2>
            </div>

            <div className="flex flex-col gap-4">
                {groups.map((group, gi) => {
                    return (
                        <div key={gi}>
                            {group.heading && (
                                <p className="text-[0.75rem] font-semibold text-[#1a1a1a] uppercase tracking-widest mb-2 px-1">
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
                                            onClick={() => setActive(idx)}
                                            className={`w-full text-left flex items-center justify-between px-4 py-3.5 rounded-xl border transition-all ${isActive
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
                                                className={`text-[0.855rem] leading-snug font-normal tracking-wide pr-3 whitespace-pre-line ${isActive ? "text-white" : "text-[#1a1a1a]"
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
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
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
// MAIN CONTENT
// ==========================================

function MainContent() {
    return (
        <div className="flex-1 min-w-0 max-w-240">

            {/* ─── Section 1: HELI-150 – Design Of The Aluminium Heliport & Vertiport ─── */}
            <section className="mb-16">
                <SectionTag label="Helideck & Helipad Lighting Systems" />
                <SectionHeading size="h1">Design Of The Aluminium Heliport &amp; Vertiport</SectionHeading>

                <div className="space-y-3 mb-7">
                    {[
                        "Marine grade aluminum tested in every climate worldwide",
                        "6082 -T6 Extrusion is available",
                        "Tongue and groove connection",
                        "Solid surface with built in non-slip",
                        "Any shape is available",
                        "Can support any size helicopter",
                        "Fuel & Waterproof",
                    ].map((f, i) => <CheckItem key={i} label={f} />)}
                </div>

                <ImageGrid left="/hvls/1.png" right="/hvls/2.png" height="h-64" />
            </section>

            {/* ─── Section 2: HELI-30 ─── */}
            <section className="mb-16">
                <SectionHeading size="h2">HELI - 30</SectionHeading>

                <div className="space-y-3 mb-7">
                    <CheckItem
                        label="A strong, safe, reusable helicopter landing platform for unprepared areas"
                        subItems={["Military", "Emergency(Hospitals, Police, Coast Guard)"]}
                    />
                    <CheckItem label="Low environmental impact, aluminum is 95% recyclable" />
                    <CheckItem label="Suitable for helicopters in excess of 11,500kg maximum take-off weight" />
                    <CheckItem label="Fast installation with little or no site preparation" />
                    <CheckItem label="Practically maintenance free, durable and permanently relocatable." />
                    <CheckItem label="Helomat is light only 29 kg/sqmm. but fully stable under rotor wash" />
                    <CheckItem label="Supports static loads of 33,000kg+" />
                    <CheckItem label="Helomat panels are 38mm thick, 305mm wide and can be manufactured up to 14m in length" />
                </div>

                <ImageGrid left="/hvls/3.png" right="/hvls/4.png" height="h-64" />
            </section>

            {/* ─── Section 3: HELI 30 - Portable ─── */}
            <section className="mb-16">
                <SectionHeading size="h2">HELI 30 - Portable</SectionHeading>

                <div className="space-y-3 mb-7">
                    <CheckItem
                        label="Assemble Anywhere"
                        subItems={["Emergency", "Military Operation"]}
                    />
                    <CheckItem label="All Aluminum Design" />
                    <CheckItem
                        label="Standard sizes"
                        subItems={["6m x 6m", "9m x 9m"]}
                    />
                    <CheckItem label="Lands up to 6,800kg" />
                    <CheckItem label="2 Hour assembly" />
                    <CheckItem label="Adjustable Legs for any location" />
                    <CheckItem label="Stairs, lights etc can be added" />
                    <CheckItem label="Helideck Safety Net" />
                </div>

                <ImageGrid left="/hvls/5.png" right="/hvls/6.png" height="h-64" />
            </section>

            {/* ─── Section 4: Landing Nets ─── */}
            <section className="mb-16">
                <SectionHeading size="h2">Landing Nets</SectionHeading>

                <div className="space-y-3.5 mb-7">
                    <BodyText>
                        Frictape Landing Net is a market leader for a reason. It is known to retain its form and tension in all
                        conditions and has a superior estimated lifetime of up to five years – this results in not only best safety in
                        the industry but also lowest total cost over life. The net's low-profile knotless design and unique non-stretch
                        material – developed and manufactured in-house by Frictape – provide total safety for demanding operations,
                        with minimal need for maintenance.
                    </BodyText>
                    <BodyText>
                        As the only nets in the world, our nets have a proven friction coefficient of over 0,65. The low knotless
                        structure – less than 2,5 cm high – ensures safe and effortless walking on the deck. In addition to this, the
                        material is electrostatically safe and non-flammable.
                    </BodyText>
                </div>

                <ImageGrid left="/hvls/7.png" right="/hvls/8.png" height="h-64" />
            </section>

            {/* ─── Section 5: Perimeter Safety Nets ─── */}
            <section className="mb-16">
                <SectionHeading size="h2">Perimeter Safety Nets</SectionHeading>

                <div className="space-y-3.5 mb-6">
                    <BodyText>
                        Catoba can design, supply and install safety netting to meet your needs. Material of safety netting frames
                        are galvanized and SS316 wire rope mesh with ferrules. Our Safety Net produce a safe and effective
                        hammock effect that absorbs the kinetic energy of falling objects or persons without fear of re-bounce.
                        This proven design is strong as well as long lasting and is designed to withstand the harshest environmental
                        conditions. The benefits of balanced strength and fail-safe structure of our Safety Net come into effect
                        especially when the net is damaged: even several cuts will not affect its ability to safely stop and contain a
                        falling person. This results in market-leading safety and reliability, so you can always be sure that your
                        operations run safely and smoothly.
                    </BodyText>
                </div>

                <div className="mb-5">
                    <CheckItem label="Helipad & Helideck Lighting & Controllers" />
                </div>

                <ImageGrid left="/hvls/9.png" right="/hvls/10.png" height="h-64" />
            </section>

            {/* ─── Section 7: FATO & TLOF Lights – Surface Mounted Helipad Light ─── */}
            <section className="mb-16">
                <SectionTag label="FATO & TLOF lights" />
                <SectionHeading size="h2">Surface Mounted Helipad Light:</SectionHeading>

                <BodyText className="mb-7">
                    Perimeter lights are one of the most important safety features on the helipad. They are used to Mark and
                    illuminate the FATO and TLOF, and they help the pilot locate the pad and safely land During night
                    operations and inclement weather conditions. Ground mounted perimeter lights attach directly to the
                    surface with the attachment hardware.
                </BodyText>

                <ImageGrid left="/hvls/11.png" right="/hvls/12.png" rightContain height="h-64" />
                <br />
                <SectionHeading size="h3">Key Features:</SectionHeading>
                <div className="space-y-3 mt-4">
                    {[
                        "Low power consumption @ 15W Full Brightness.",
                        "IP 67 Rated.",
                        "High Strength cast aluminium alloy body.",
                        "Integrated LED light source with an expectancy lifespan of 100,000 hours.",
                        "Clear Glass lens with good impact resistance, high temperature resistance and excellent light beam transmission.",
                        "The LED driver, connector and the wiring is housed in an IP rated box and attached to the bottom of the light for waterproof.",
                        "Universal voltage range from 85 to 265VAC, 50/60Hz.",
                        "NVG Compatible",
                        "Optional IR LED (Available on request)",
                        "Variable Light Intensity 10%,30% and 100% (Available on request)",
                    ].map((f, i) => <CheckItem key={i} label={f} />)}
                </div>
            </section>

            {/* ─── Section 8: Flush Mounted Helipad Light ─── */}
            <section className="mb-16">
                <SectionHeading size="h2">Flush Mounted Helipad Light</SectionHeading>

                <BodyText className="mb-7">
                    As an alternative to elevated lights, Flush Mounted FATO/TLOF Helipad lights are an exceptional choice for
                    locations where elevated lights are not suitable or can cause interference to passing helicopter and
                    maintenance vehicles. Heliport FATO/TLOF Light is used for day/ night operations. The omnidirectional
                    beam pattern can be used as heliport/helipad TLOF/FATO within the heliport area.
                </BodyText>

                <ImageGrid left="/hvls/13.png" right="/hvls/14.png" rightContain height="h-64" />
                <br />
                <SectionHeading size="h3">Key Features:</SectionHeading>
                <div className="space-y-3 mt-4">
                    {[
                        "Very low power consumption.",
                        "IP 66 Rated.",
                        "Integrated LED light source with an expectancy lifespan of 100,000 hours.",
                        "Clear Glass lens with good impact resistance, high temperature resistance and excellent light beam transmission.",
                        "LED technology for extended life and energy efficiency",
                        "The LED driver, connector and the wiring is housed in an IP rated box and attached to the bottom of the light for waterproof.",
                        "Operating voltage range from 85 to 265VAC, 50/60Hz.",
                        "NVG Compatible",
                        "Optional IR LED (Available on request)",
                        "Variable Light Intensity 10%,30% and 100% (Available on request)",
                    ].map((f, i) => <CheckItem key={i} label={f} />)}
                </div>
            </section>

            {/* ─── Section 9: Floodlights Ex & Non Ex – Hooded Floodlights ─── */}
            <section className="mb-16">
                <SectionTag label="Floodlights Ex & Non Ex" />
                <SectionHeading size="h2">Hooded Floodlights</SectionHeading>

                <BodyText className="mb-7">
                    The heavy-duty hooded surface floodlight illuminates the deck and protects the pilot from glare while
                    landing on the pad. The fixture is housed in a weather tight, aluminium casting and powder coated yellow
                    for high visibility. There are four mounting holes for easy installation on any surface.
                </BodyText>

                <ImageGrid left="/hvls/15.png" right="/hvls/16.png" rightContain height="h-64" />
                <br />
                <SectionHeading size="h3">Key Features:</SectionHeading>
                <div className="space-y-3 mt-4 mb-8">
                    {[
                        "50,000+ hour rated LED's for extended life",
                        "High visibility Yellow powder coat suitable for the harshest environment",
                        "Pre-wired for quick and easy installations",
                    ].map((f, i) => <CheckItem key={i} label={f} />)}
                </div>

                <SectionHeading size="h3">Compliances:</SectionHeading>
                <div className="space-y-3 mt-4">
                    {[
                        "FAA AC 150/5390-2 Heliport Design",
                        "FAA Engineering Brief 67",
                        "Transport Canada TP14371, AGA 7.17",
                        "ICAO Annex 14, Volume II",
                        "Helipad & Helideck Safety & Other Equipment's",
                    ].map((f, i) => <CheckItem key={i} label={f} />)}
                </div>
            </section>

            {/* ─── Section 10: Helipad Fire Fighting Equipment ─── */}
            <section className="mb-16">
                <SectionHeading size="h2">Helipad Fire Fighting Equipment</SectionHeading>

                <p className="text-[11px] font-semibold text-[#1a1a1a] uppercase tracking-widest mb-3">
                    Introduction To Our DIFF System
                </p>

                <BodyText className="mb-7">
                    DIFF System is primarily used as a firefighting system for helipad / helideck. Based on the system
                    configuration, DIFFS can be set to operate automatically or manually. On system activation; a valve
                    operates – allowing water to flow through a water turbine foam pump, in-line foam inductor or a ratio
                    controller, thereby discharging a correct admixture of foam/water solution (i.e. 1% or 3%) through an
                    array of nozzles installed on the helipad / helideck, thus providing an effective spray distribution covering
                    the entire deck surface. DIFF system is designed to meet performance criteria as per applicable standards
                    such as NFPA-418, UK-CAA–CAP437, CAP-1264, HSAC-RP161, ICAO, NORSOK etc. Our product have been
                    developed to meet or exceed the objectives set forth in applicable standards and regulations, which are
                    tested and approved by various certification agencies. DIFF Systems are available with self-contained
                    skids suitable for normally unmanned installations. Water only DIFFS are available when installed with
                    passive fire-retardant type aluminium helidecks.
                </BodyText>

                <ImageGrid left="/hvls/17.png" right="/hvls/18.png" height="h-64" />
            </section>

            {/* ─── Section 11: Oil/Water Separator ─── */}
            <section className="mb-16">
                <SectionHeading size="h2">Oil/Water Separator</SectionHeading>

                <BodyText className="mb-6">
                    If you have a helipad on an occupied building you will likely need a Fuel Water Separator to comply with
                    NFPA and International standards. Containment of all runoff on the helipad is required and FEC Heliports
                    manufactures a single tank design that makes for a simple solution. Our standard Fuel Water Separator is
                    a gravity fed design that is connected to a helipad containment gutter. The tank has two sides, one for
                    separation (400 gallons water) and one for containment (300 gallons) and includes a heater and a high
                    level indicator. This welded steel design has a protective coating for the harshest environments and has a
                    single input and output for inexpensive hook up by the mechanical contractors.
                </BodyText>

                <div className="space-y-3 mb-7">
                    <CheckItem label="Fuelling Systems" />
                    <CheckItem label="Storm Water" />
                </div>

                <ImageGrid left="/hvls/19.png" right="/hvls/20.png" height="h-64" />
            </section>

            {/* ─── Section 12: Emergency Crash Rescue ─── */}
            <section className="mb-16">
                <SectionHeading size="h2">
                    Emergency Crash Rescue ICAO/CAP437 Compliant H1/H2 &amp; H3 Category
                </SectionHeading>

                <div className="space-y-5 mb-7">
                    <CheckItem
                        label="ICAO Annex 14 Vol II –Heliports"
                        subItems={[
                            "– 6.9 Rescue Equipment",
                            '"Rescue Equipment commensurate with the level of helicopter operations should be provided. At an elevated heliport the rescue equipment should be stored adjacent to the helideck"',
                        ]}
                    />
                    <CheckItem
                        label='Health Building Note 15 –03: Hospital Helipads. Chapter 5.25 –Rescue Equipment–For both H1 and H2, each RFSS crew member must have one harness knife and sheath and a pair of fire-resistant gloves. One of each of the following items of rescue equipment must also be available'
                    />
                </div>

                <ImageGrid left="/hvls/21.png" right="/hvls/22.png" height="h-64" />
            </section>

            {/* ─── Section 13: Wind Direction Indicator ─── */}
            <section className="mb-16">
                <SectionHeading size="h2">Wind Direction Indicator</SectionHeading>

                <BodyText className="mb-7">
                    According to ICAO annex 14 requirement, every helipad area must have at least one wind cone.
                    Installation position must be not interfered by objects around the helipad and rotor downwash by
                    helicopter and make sure pilot can recognize wind cone at 200 meters clearly.
                </BodyText>

                <ImageGrid left="/hvls/23.png" right="/hvls/24.png" rightContain height="h-64" />
                <br />
                <SectionHeading size="h3">Key Features:</SectionHeading>
                <div className="space-y-3 mt-4">
                    {[
                        "50,000+ hour rated LED's for extended life",
                        "Marine grade coating for harsh environment. (Tiltable Option)",
                        "Special type lowering mechanism for maintenance of wind cone and replacement of windsock. (Tiltable Option)",
                        "Available in 304 stainless steel or 316 optional for very corrosive environment.",
                        "3 meters to 6 meters pole in height available.",
                        "3 Different sizes of windsocks are available",
                    ].map((f, i) => <CheckItem key={i} label={f} />)}
                </div>
            </section>

            {/* ─── Section 14: Value Added Services ─── */}
            <section className="mb-10">
                <SectionHeading size="h2">Value Added Services</SectionHeading>

                <div className="space-y-3 mb-7">
                    <CheckItem label="Helipad & Helideck Painting" />
                    <CheckItem label="Installation, Testing & Commissioning" />
                    <CheckItem label="Annual Maintenance" />
                </div>

                <ImageGrid left="/hvls/25.png" right="/hvls/26.png" height="h-64" />
            </section>

        </div>
    );
}

// ==========================================
// MAIN PAGE EXPORT
// ==========================================

export default function SolutionHeliportVertiportLighting() {
    const sidebarGroups: SidebarGroup[] = [
        {
            items: [
                { label: "HELI - 150", hasArrow: true },
                { label: "HELI - 30", hasArrow: true },
                { label: "HELI 30 - Portable", hasArrow: true },
                { label: "Landing Nets", hasArrow: true },
                { label: "Perimeter Safety Nets", hasArrow: true },
            ],
        },
        {
            heading: "FATO & TLOF Lights",
            items: [
                { label: "Surface Mounted Helipad Light:", hasArrow: true },
                { label: "Flush Mounted Helipad Light", hasArrow: true },
            ],
        },
        {
            heading: "Floodlights Ex & Non Ex",
            items: [
                { label: "Hooded Floodlights", hasArrow: true },
                { label: "Helipad Fire Fighting\nEquipment", hasArrow: true },
                { label: "Oil/Water Separator", hasArrow: true },
                { label: "Emergency Crash Rescue\nICAO/CAP437 Compliant H1/\nH2 & H3 Category", hasArrow: true },
                { label: "Wind Direction Indicator", hasArrow: true },
                { label: "Value Added Services", hasArrow: true },
            ],
        },
    ];

    return (
        <div>
            <DynamicHero
                title={"Heliport & Vertiport Lighting Systems"}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Heliport & Vertiport Lighting Systems" },
                ]}
                backgroundImage="/hvls.png"
            />

            <main className="min-h-screen bg-white">
                <div className="2xl:max-w-360 w-[90%] mx-auto py-8">
                    <div className="flex flex-col lg:flex-row gap-5 items-start">
                        <Sidebar title="Heliport & Vertiport Lighting" groups={sidebarGroups} />
                        <MainContent />
                    </div>
                </div>
            </main>
        </div>
    );
}