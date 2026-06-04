"use client";

import DynamicHero from "@/components/common/hero";
import React, { useState } from "react";

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
// NUMBERED CARD COMPONENT (for Floor Trunking sub-items)
// ==========================================

interface NumberedCardProps {
    number: number;
    title: string;
    subtitle?: string;
    points: string[];
}

function NumberedCard({ number, title, subtitle, points }: NumberedCardProps) {
    return (
        <div className="border border-[#E8E8E8] rounded-xl p-6">
            <h4 className="text-[18px] font-medium text-black mb-2 tracking-wide">
                {number}. {title}
            </h4>
            {subtitle && (
                <p className="text-sm text-[#636363] mb-3">{subtitle}</p>
            )}
            <div className="space-y-2">
                {points.map((point, i) => (
                    <p key={i} className="text-sm text-[#636363] leading-relaxed">
                        {point}
                    </p>
                ))}
            </div>
        </div>
    );
}

// ==========================================
// DYNAMIC SIDEBAR COMPONENT
// ==========================================

interface SidebarItem {
    label: string;
    hasArrow?: boolean;
    subItems?: SidebarItem[];
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
                    <div key={i}>
                        <button
                            onClick={() => setActive(i)}
                            className={`w-full text-left flex items-center justify-between px-5 py-4 rounded-xl border transition-all ${active === i
                                ? "border-transparent shadow-md"
                                : "border-[#E8E8E8] hover:border-gray-300"
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
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M7 17L17 7M7 7h10v10"
                                    />
                                </svg>
                            )}
                        </button>

                        {/* Sub-items (e.g. under Floor Trunking) */}
                        {item.subItems && active === i && (
                            <div className="mt-2 ml-4 flex flex-col gap-2">
                                {item.subItems.map((sub, j) => (
                                    <button
                                        key={j}
                                        className="w-full text-left flex items-center justify-between px-4 py-3 rounded-xl border border-[#E8E8E8] bg-white hover:border-gray-300 transition-all"
                                    >
                                        <span className="text-[0.875rem] text-[#1a1a1a] font-normal tracking-wide pr-3">
                                            {sub.label}
                                        </span>
                                        {sub.hasArrow && (
                                            <svg
                                                className="w-4 h-4 shrink-0 text-black"
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
                                ))}
                            </div>
                        )}
                    </div>
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

            {/* ─── Section 1: Cable Trunking Systems ─── */}
            <section className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-[#636363]">• Cable Trunking</span>
                </div>

                <h1 className="text-[32px] font-medium text-black mb-5 leading-tight tracking-wide">
                    Cable Trunking Systems
                </h1>

                <div className="space-y-3.5 mb-8">
                    {[
                        "Cold rolled steel sheet to JIS G3141 SPCC SD/Hot-Rolled steel sheet to JIS G3131 SPHC, Hot-dip galvanized BS EN ISO 1461 (BS 729) after fabrication.",
                        "Cold rolled steel sheet to JIS G3141 SPCC SD/ Epoxy Powder Coat with minimum film thickness 45um after fabrication.",
                        "Electro-galvanized steel sheet to JIS G3313 SECC equivalent to BS EN 101152 with Epoxy Polyester Powder Coating with minimum film thickness 45um after fabrication.",
                        "Pre-galvanized zinc coated steel JIS G3302 equivalent to BS EN 10142 (BS 2989) with a minimum coating designation of G275. (BS EN 10142 supersedes BS2989).",
                        "Stainless Steel Sheet to SUS 304, SUS, 316. AISI type 304 or AISI Type 316.",
                        "Aluminium to AA5052-H32, 1100-H14, 3003-H14, 5052-H32, 6061-T6.",
                    ].map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckIcon />
                            <span className="text-md text-[#636363] leading-relaxed">{point}</span>
                        </div>
                    ))}
                </div>

                {/* Image Grid (5:3 ratio) */}
                <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-4">
                    <div className="rounded-xl overflow-hidden bg-gray-100 h-76">
                        <img
                            src="/cable-trunking/1.png"
                            alt="Cable trunking systems"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="rounded-xl overflow-hidden bg-[#EFEFEF] h-76 flex items-center justify-center">
                        <img
                            src="/cable-trunking/2.png"
                            alt="Cable trunking product"
                            className="w-full h-full object-contain mix-blend-multiply p-4"
                        />
                    </div>
                </div>
            </section>

            {/* ─── Section 2: Perforated Cable Tray – Material & Finishes ─── */}
            <section className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-[#636363]">• Perforated Cable Tray</span>
                </div>

                <h2 className="text-[28px] font-medium text-black mb-3 leading-tight tracking-wide">
                    Material &amp; Finishes
                </h2>

                <div className="space-y-3.5 mb-8">
                    {[
                        "Cold rolled steel to JIS G3141 SPCC SD/Hot-Rolled steel sheet to JIS G3141 SPHC, Hot-dip Galvanized BS EN ISO 1461 (BS 729) after fabrication.",
                        "Cold rolled steel sheet to JIS G3141 SPCC SD/Epoxy Powder Coated with minimum film thickness 45um after fabrication.",
                        "Stainless Steel sheet to SUS 304, SUS, 316. AISI Type 304 or AISI Type 316.",
                    ].map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckIcon />
                            <span className="text-md text-[#636363] leading-relaxed">{point}</span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-4">
                    <div className="rounded-xl overflow-hidden bg-gray-100 h-76">
                        <img
                            src="/cable-trunking/3.png"
                            alt="Perforated cable tray"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="rounded-xl overflow-hidden bg-[#EFEFEF] h-76 flex items-center justify-center">
                        <img
                            src="/cable-trunking/4.png"
                            alt="Cable ladder"
                            className="w-full h-full object-contain mix-blend-multiply p-4"
                        />
                    </div>
                </div>
            </section>

            {/* ─── Section 3: Cable Ladder Systems – Material & Finishes ─── */}
            <section className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-[#636363]">• Cable Ladder Systems</span>
                </div>

                <h2 className="text-[28px] font-medium text-black mb-3 leading-tight tracking-wide">
                    Material &amp; Finishes
                </h2>

                {/* (Same finishes as perforated tray – reuse) */}
                <div className="space-y-3.5 mb-8">
                    {[
                        "Cold rolled steel to JIS G3141 SPCC SD/Hot-Rolled steel sheet to JIS G3141 SPHC, Hot-dip Galvanized BS EN ISO 1461 (BS 729) after fabrication.",
                        "Cold rolled steel sheet to JIS G3141 SPCC SD/Epoxy Powder Coated with minimum film thickness 45um after fabrication.",
                        "Stainless Steel sheet to SUS 304, SUS, 316. AISI Type 304 or AISI Type 316.",
                    ].map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckIcon />
                            <span className="text-md text-[#636363] leading-relaxed">{point}</span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-4">
                    <div className="rounded-xl overflow-hidden bg-gray-100 h-76">
                        <img
                            src="/cable-trunking/5.png"
                            alt="Cable ladder system"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="rounded-xl overflow-hidden bg-[#EFEFEF] h-76 flex items-center justify-center p-6">
                        <img
                            src="/cable-trunking/6.png"
                            alt="Cable ladder product"
                            className="w-full h-full object-contain mix-blend-multiply"
                        />
                    </div>
                </div>
            </section>

            {/* ─── Section 4: Rigid Flexible Conduits – Material & Finishes ─── */}
            <section className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-[#636363]">• Rigid Flexible Conduits</span>
                </div>

                <h2 className="text-[28px] font-medium text-black mb-3 leading-tight tracking-wide">
                    Material &amp; Finishes
                </h2>

                <div className="space-y-3.5 mb-8">
                    {[
                        "Made of high quality mild steel strips with superior bending and forming properties.",
                        "Manufactured by cold forming and high frequency welding.",
                        "Internal surface is galvanised for easier wire pulling and pushing.",
                        "Threaded on both end to be fitted with galvanized couplers.",
                        "Easier to cut, thread, bend and pull wire.",
                        "Dimensionally accurate. Uniform quality in every aspect.",
                    ].map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckIcon />
                            <span className="text-md text-[#636363] leading-relaxed">{point}</span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-4">
                    <div className="rounded-xl overflow-hidden bg-gray-100 h-76">
                        <img
                            src="/cable-trunking/7.png"
                            alt="Rigid flexible conduits"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="rounded-xl overflow-hidden bg-[#EFEFEF] h-76 flex items-center justify-center p-6">
                        <img
                            src="/cable-trunking/8.png"
                            alt="Conduit product"
                            className="w-full h-full object-contain mix-blend-multiply"
                        />
                    </div>
                </div>
            </section>

            {/* ─── Section 5: Floor Trunking Systems – Flush Floor Trunking ─── */}
            <section className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-[#636363]">• Floor Trunking Systems</span>
                </div>

                <h2 className="text-[28px] font-medium text-black mb-3 leading-tight tracking-wide">
                    Flush Floor Trunking
                </h2>

                <h3 className="text-[20px] font-medium text-black mb-4 tracking-wide">
                    Material &amp; Finishes
                </h3>

                <div className="space-y-3.5 mb-6">
                    {[
                        "Cold rolled steel sheet to JIS G3141 SPCC SD/Hot-Rolled steel sheet to JIS G3131 SPHC, Hot-dip galvanized BS EN ISO 1461 (BS 729) after fabrication.",
                        "Pre-galvanized zinc coated steel JIS G3302 equivalent to BS EN 10142 (BS 2989) with a minimum coating designation of G275. (BS EN 10142 supersedes BS2989).",
                        "Stainless steel sheet to SUS 304, SUS, 316. AISI type 304 or AISI type 316.",
                    ].map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckIcon />
                            <span className="text-md text-[#636363] leading-relaxed">{point}</span>
                        </div>
                    ))}
                </div>

                <h3 className="text-[20px] font-medium text-black mb-2 tracking-wide">
                    Service Outlet Box
                </h3>
                <p className="text-md text-[#636363] mb-4">
                    Raised Floor Box Consists Of The Following Components:
                </p>

                <div className="space-y-3.5 mb-8">
                    {[
                        "Basic Outlet Frame.",
                        "Polyamide Frame and confine with 2.5mm steel sheet in fill.",
                        "Epoxy-Polyester Powder Coated service and Data outlet Panel.",
                    ].map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckIcon />
                            <span className="text-md text-[#636363] leading-relaxed">{point}</span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-4 mb-10">
                    <div className="rounded-xl overflow-hidden bg-gray-100 h-76">
                        <img
                            src="/cable-trunking/9.png"
                            alt="Flush floor trunking installation"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="rounded-xl overflow-hidden bg-[#EFEFEF] h-76 flex items-center justify-center p-6">
                        <img
                            src="/cable-trunking/10.png"
                            alt="Flush floor trunking product"
                            className="w-full h-full object-contain mix-blend-multiply"
                        />
                    </div>
                </div>

                {/* Numbered Cards */}
                <div className="space-y-4">
                    <NumberedCard
                        number={1}
                        title="Raised Floor Outlet Box"
                        subtitle="Consists Of 1 Unit Non-Combustible Metal Frame"
                        points={[
                            "Box Base – Manufactured From Pre-Galvanized Zinc Coated Steel Sheet To JIS G3302 Equivalent To BS EN 10142 (BS EN 10142 Supersedes BS2989) With Suitable Knockout For Conduit Connection.",
                        ]}
                    />
                    <NumberedCard
                        number={2}
                        title="Frame And Trap With Steel Lid Affix"
                        points={[
                            "Frame And Portable Lid Interleaves With 2.5mm Strengthen Steel Sheet With 7mm Carpet Recess. Trap Is Fully Overturned Without Removing The Frame Thus Makes Cable Way Be Available In Four Directions (Optionally).",
                            "Light Grey Colour Frame And Needed Parts Are Moulded From Engineering Plastics (Nylon 66) That Provide Mechanical Strength, Impact And Fire Resistance.",
                        ]}
                    />
                    <NumberedCard
                        number={3}
                        title="Epoxy-Polyester Powder Coated Service Outlet Box"
                        points={[
                            "Standard Services Outlet Panels Will Be Provided For Each Set Of Raised Floor Outlet Box Sold.",
                            "Service Outlet Panels Suitable For Powder, Voices And Data Are Fabricated From Cold-Rolled Steel Sheet With Epoxy – Polyester Powder Coated And Additional Service Outlet Panels Are Also Available Upon Request.",
                        ]}
                    />
                </div>
            </section>

            {/* ─── Section 6: Strut Support Systems – Wiremesh Cable Tray Systems ─── */}
            <section className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-[#636363]">• Strut Support Systems</span>
                </div>

                <h2 className="text-[28px] font-medium text-black mb-3 leading-tight tracking-wide">
                    Wiremesh Cable Tray Systems
                </h2>

                <div className="space-y-3.5 mb-8">
                    {[
                        "Manufactured from low carbon steel wire with superior mechanical properties.",
                        "Hot-dip galvanized to BS EN ISO 1461 or zinc electroplated for corrosion resistance.",
                        "Modular design for rapid installation and flexible routing.",
                        "Available in standard widths: 50mm, 100mm, 150mm, 200mm, 300mm, 400mm, 500mm, 600mm.",
                        "Compatible with standard cable management accessories and support brackets.",
                        "Wiremesh construction allows free airflow for optimal cable cooling.",
                    ].map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckIcon />
                            <span className="text-md text-[#636363] leading-relaxed">{point}</span>
                        </div>
                    ))}
                    <div className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-md text-[#636363] leading-relaxed">
                            Technical Datasheet – <ViewPDFLink label="View Wiremesh Cable Tray PDF" />
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-4">
                    <div className="rounded-xl overflow-hidden bg-gray-100 h-76">
                        <img
                            src="/cable-trunking/11.png"
                            alt="Wiremesh cable tray installation"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="rounded-xl overflow-hidden bg-[#EFEFEF] h-76 flex items-center justify-center p-6">
                        <img
                            src="/cable-trunking/12.png"
                            alt="Wiremesh cable tray product"
                            className="w-full h-full object-contain mix-blend-multiply"
                        />
                    </div>
                </div>
            </section>

        </div>
    );
}

// ==========================================
// MAIN PAGE EXPORT
// ==========================================

export default function SolutionCableTrunking() {
    const sidebarData: SidebarItem[] = [
        {
            label: "Cable Trunking Systems",
            hasArrow: true,
        },
        {
            label: "Perforated Cable Tray",
            hasArrow: false,
            subItems: [{ label: "Material & Finishes", hasArrow: true }],
        },
        {
            label: "Cable Ladder Systems",
            hasArrow: false,
            subItems: [{ label: "Material & Finishes", hasArrow: true }],
        },
        {
            label: "Rigid Flexible Conduits",
            hasArrow: false,
            subItems: [{ label: "Material & Finishes", hasArrow: true }],
        },
        {
            label: "Floor Trunking Systems",
            hasArrow: false,
            subItems: [{ label: "Flush Floor Trunking", hasArrow: true }],
        },
        {
            label: "Strut Support Systems",
            hasArrow: false,
            subItems: [{ label: "Wiremesh Cable Tray Systems", hasArrow: true }],
        },
    ];

    return (
        <div>
            {/* DynamicHero integrated */}
            <DynamicHero
                title={"Cable Trunking"}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Cable Trunking" },
                ]}
                backgroundImage={"/cable-trunking-bg.png"}
            />

            <main className="min-h-screen bg-white">
                <div className="2xl:max-w-360 w-[90%] mx-auto py-8">
                    <div className="flex flex-col lg:flex-row gap-5 items-start">

                        {/* Reusable Dynamic Sidebar */}
                        <Sidebar title="Cable Trunking" items={sidebarData} />

                        {/* Page Specific Content */}
                        <MainContent />

                    </div>
                </div>
            </main>
        </div>
    );
}