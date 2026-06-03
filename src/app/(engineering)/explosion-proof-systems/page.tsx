"use client";

import DynamicHero from "@/components/common/hero";
import React, { useState } from "react";
// Assuming you have these components in your project:
// import DynamicHero from '@/components/common/hero';

// ==========================================
// SHARED UI COMPONENTS
// ==========================================

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

function ViewPDFLink({ label }: { label: string }) {
    return (
        <a
            href="#"
            className="text-[#168DCA] font-semibold underline underline-offset-2 hover:text-[#116a9a] transition-colors"
            onClick={(e) => e.preventDefault()}
        >
            {label}
        </a>
    );
}

// ==========================================
// DYNAMIC SIDEBAR COMPONENT
// ==========================================

interface SidebarItem {
    label: string;
    hasArrow?: boolean;
}

interface SidebarProps {
    title: string;
    items: SidebarItem[];
}

export function Sidebar({ title, items }: SidebarProps) {
    const [active, setActive] = useState(0);

    return (
        <div className="w-90 shrink-0 bg-[#F3F3F3] p-5 rounded-2xl sticky top-8">
            {/* Header */}
            <div className="mb-4 px-1">
                <h2 className="text-[1.35rem] text-black font-medium tracking-wide">
                    {title}
                </h2>
            </div>

            {/* Nav Items */}
            <div className="flex flex-col gap-3">
                {items.map((item, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`w-full text-left flex items-center justify-between px-5 py-4 rounded-xl border transition-all ${active === i ? "border-transparent shadow-md" : "border-[#E8E8E8] hover:border-gray-300"
                            }`}
                        style={{
                            background:
                                active === i
                                    ? "linear-gradient(93deg, #168DCA -24.15%, #0F2453 134.7%)"
                                    : "#fff",
                        }}
                    >
                        <span
                            className={`text-[0.95rem] leading-snug font-normal font-raleway tracking-wide pr-4 whitespace-pre-line ${active === i ? "text-white" : "text-[#1a1a1a]"
                                }`}
                        >
                            {item.label}
                        </span>
                        {item.hasArrow && (
                            <svg
                                className={`w-4.5 h-4.5 shrink-0 ${active === i ? "text-white" : "text-black"}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                            </svg>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}

// ==========================================
// MAIN CONTENT COMPONENT
// ==========================================

function MainContent() {
    return (
        <div className="flex-1 min-w-0 max-w-240">

            {/* ─── Section 1: Industrial Products ─── */}
            <section className="mb-16">
                <h1 className="text-[32px] font-medium text-black mb-5 leading-tight tracking-wide">
                    Industrial Products / Explosion Proof Systems
                </h1>

                <div className="space-y-5 mb-8">
                    <p className="text-md text-[#636363] leading-[1.7]">
                        Catoba supply high quality, heavy-duty industrial power connectors, power units and automatic plug-in
                        systems for applications worldwide. Technologies that help customers improve safety, reduce
                        environmental impact and operate more efficiently. Our connectors are used in many heavy industries
                        for all kinds of electrification purposes.
                    </p>
                    <p className="text-md text-[#636363] leading-[1.7]">
                        Our connectors feature a variety of cutting-edge technologies that ensure optimal performance
                        throughout products lifetime. These features include electrical interlocking of pilot contacts, lamellar,
                        Multi-Way Technology, and Push & Pull systems. All connectors are IP 66 protected, and have a standard
                        maximum operating temperature of 80°C – which can be extended to withstand temperatures of up to
                        400°C
                    </p>
                </div>

                {/* Image Grid (5:3 ratio) */}
                <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-4 mb-8">
                    <div className="rounded-xl overflow-hidden bg-gray-100 h-76">
                        <img
                            src="/eps/1.png" // Replace with your actual path
                            alt="Industrial shipping containers"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="rounded-xl overflow-hidden bg-[#EFEFEF] h-76 flex items-center justify-center">
                        <img
                            src="/eps/2.png" // Replace with your actual path
                            alt="Connector schematic"
                            className="w-full h-full object-contain mix-blend-multiply p-4"
                        />
                    </div>
                </div>

                {/* Features List */}
                <h3 className="text-[24px] font-medium text-black mb-4 tracking-wide">
                    Features:
                </h3>
                <div className="space-y-3.5">
                    {[
                        "High quality and durable (Marine grade aluminium or copper)",
                        "Dust, dirt and waterproof resulting in low maintenance (IP66, IP67)",
                        "Safe to use (Ergonomic design, IEC 60079)",
                        "Unlikely to freeze or melt (-40-80C, option up to 400C)",
                        "Multi-way technology (Extra tight connection between male and female poles)",
                        "Plugs / Socket outlets 16-32-63-125 amps.",
                        "Reefer Points",
                        "Plugs / Sockets outlets 200-250-320-400 amps",
                        "Atex certified plugs / sockets , lighting and small devices.",
                        "Ex-Light fittings – Portable, Pendant , Flood-lights ,Signals",
                        "Ex-Terminal boxes , Junction boxes , Control Stations ,Glands",
                        "Ex-Connectors , Socket outlets",
                    ].map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckIcon />
                            <span className="text-md text-[#636363] leading-relaxed">{point}</span>
                        </div>
                    ))}
                    <div className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-md text-[#636363] leading-relaxed">
                            Isolator Switches – <ViewPDFLink label="View Isolator Switches PDF" />
                        </span>
                    </div>
                </div>
            </section>

            {/* ─── Section 2: Thermoplastic Range ─── */}
            <section className="mb-16">
                <h2 className="text-[28px] font-medium text-black mb-6 leading-tight tracking-wide">
                    Thermoplastic Range
                </h2>

                <div className="space-y-3.5 mb-6">
                    {[
                        "Conformity to IEC/EN 60947-3",
                        "Wide Range from 16A to 100A",
                        "Lockable Switch Full rated AC3 – AC23A switching category",
                        "Robust and wide enclosure",
                    ].map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckIcon />
                            <span className="text-md text-[#636363] leading-relaxed">{point}</span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-4">
                    <div className="rounded-xl overflow-hidden bg-gray-100 h-76">
                        <img src="/eps/3.png" alt="Electrical maintenance" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-xl overflow-hidden bg-[#EFEFEF] h-76">
                        <img src="/eps/4.png" alt="Thermoplastic isolator" className="w-full h-full object-cover mix-blend-multiply" />
                    </div>
                </div>
            </section>

            {/* ─── Section 3: Metal Clad Range ─── */}
            <section className="mb-16">
                <h2 className="text-[28px] font-medium text-black mb-6 leading-tight tracking-wide">
                    Metal Clad Range
                </h2>

                <div className="space-y-3.5 mb-6">
                    {[
                        "Conformity to EN 60947-3 EN60529",
                        "Wide Range from 16A to 125A",
                        "die cast aluminium alloy",
                        "Full rated AC23A switching category",
                        "Modular Construction",
                        "Padlock able and door interlocked",
                    ].map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckIcon />
                            <span className="text-md text-[#636363] leading-relaxed">{point}</span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-4">
                    <div className="rounded-xl overflow-hidden bg-gray-100 h-76">
                        <img src="/eps/5.png" alt="Industrial panel" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-xl overflow-hidden bg-[#EFEFEF] h-76 flex items-center justify-center p-8">
                        <img src="/eps/6.png" alt="Metal clad plugs" className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                </div>
            </section>

            {/* ─── Section 4: Fire Rated Range ─── */}
            <section className="mb-16">
                <h2 className="text-[28px] font-medium text-black mb-6 leading-tight tracking-wide">
                    Fire Rated Range
                </h2>

                <div className="space-y-3.5 mb-6">
                    {[
                        "Fire rated F400 isolator switch in aluminium alloy.",
                        "Conformity to EN 60947-3 / EN12101-3 (400°C for 120 minutes)",
                        "Wide Range from 16A to 200A",
                        "High visibility handle",
                        "Full rated AC3-AC23A category",
                        "Customisable entry flanges",
                    ].map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckIcon />
                            <span className="text-md text-[#636363] leading-relaxed">{point}</span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-4">
                    <div className="rounded-xl overflow-hidden bg-gray-100 h-76">
                        <img src="/eps/7.png" alt="Wire installation" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-xl overflow-hidden bg-gray-100 h-76">
                        <img src="/eps/8.png" alt="Fire rated switch" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            {/* ─── Section 5: Switch Fuses & Switch Disconnectors ─── */}
            <section className="mb-10">
                <h2 className="text-[28px] font-medium text-black mb-6 leading-tight tracking-wide">
                    Switch Fuses & Switch Disconnectors
                </h2>

                <div className="space-y-3.5 mb-6">
                    {[
                        "Switch Disconnector or Fused Switch Disconnector in Mild Steel.",
                        "Conformity to IEC60947-3",
                        "Robust and wide IP65 Enclosures",
                        "Fully rated to AC-23A category",
                        "Pad lockable and interlocked door",
                        "In Steel or GRP Enclosure Options.",
                        "Wide Range 32A – 630A",
                    ].map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckIcon />
                            <span className="text-md text-[#636363] leading-relaxed">{point}</span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-4">
                    <div className="rounded-xl overflow-hidden bg-gray-100 h-76">
                        <img src="/eps/9.png" alt="Industrial site" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-xl overflow-hidden bg-[#EFEFEF] h-76 flex items-center justify-center p-6">
                        <img src="/eps/10.png" alt="Switch disconnectors" className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                </div>
            </section>

        </div>
    );
}

// ==========================================
// MAIN PAGE EXPORT
// ==========================================

export default function SolutionExplosionProofSystems() {
    const sidebarData = [
        { label: "Industrial Products", hasArrow: true },
        { label: "Thermoplastic Range", hasArrow: true },
        { label: "Metal Clad Range", hasArrow: true },
        { label: "Fire Rated Range", hasArrow: true },
        { label: "Switch Fuses & Switch\nDisconnectors", hasArrow: true },
    ];

    return (
        <div>
            {/* Uncomment and use your DynamicHero once integrated */}
            <DynamicHero
                title={"Industrial Products / Explosion Proof Systems"}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Industrial Products / Explosion Proof Systems" },
                ]}
                backgroundImage={"/explosion-proof-bg.png"}
            />


            <main className="min-h-screen bg-white">
                <div className="2xl:max-w-360 w-[90%] mx-auto py-8">
                    <div className="flex flex-col lg:flex-row gap-5 items-start">

                        {/* Reusable Dynamic Sidebar */}
                        <Sidebar title="Explosion Proof Systems" items={sidebarData} />

                        {/* Page Specific Content */}
                        <MainContent />

                    </div>
                </div>
            </main>
        </div>
    );
}