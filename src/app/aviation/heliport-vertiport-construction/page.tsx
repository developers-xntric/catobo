"use client";

import { CheckIcon } from "@/components/common/CheckIcon";
import DynamicHero from "@/components/common/hero";
import ProcessTimeline from "@/components/Timeline";
import React, { useState } from "react";

// SHARED UI COMPONENTS

function CheckItem({ label }: { label: string }) {
    return (
        <div className="flex items-start gap-3">
            <CheckIcon />
            <span className="text-[14px] text-[#636363] leading-relaxed">{label}</span>
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
        <p className={`text-[14px] text-[#636363] leading-[1.78] ${className}`}>
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
    const base = `font-medium text-black leading-tight tracking-wide ${className}`;
    if (size === "h1") return <h1 className={`text-[24px] ${base}`}>{children}</h1>;
    if (size === "h3") return <h3 className={`text-[18px] ${base}`}>{children}</h3>;
    return <h2 className={`text-[24px] ${base}`}>{children}</h2>;
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
        <div className="w-full lg:w-90 lg:shrink-0 bg-[#F3F3F3] p-5 rounded-2xl lg:sticky lg:top-8">
            <div className="mb-4 px-1">
                <h2 className="text-[1.1rem] text-black font-medium tracking-wide leading-snug">
                    {title}
                </h2>
            </div>

            <div className="flex flex-col gap-2">
                {groups.map((group, gi) => (
                    <div key={gi}>
                        {group.heading && (
                            <p className="text-[0.72rem] font-semibold text-[#1a1a1a] uppercase tracking-widest mb-2 px-1">
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
                                            document.getElementById(`section-${idx}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
                                        }}
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
                                            className={`text-[0.875rem] leading-snug font-normal tracking-wide pr-3 whitespace-pre-line ${isActive ? "text-white" : "text-[#1a1a1a]"
                                                }`}
                                        >
                                            {item.label}
                                        </span>
                                        {item.hasArrow && (
                                            <svg
                                                className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-black"
                                                    }`}
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

// IMAGE GRID — Equal 50/50

function ImageGridEqual({ left, right }: { left: string; right: string }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden bg-gray-100 h-70 sm:h-100">
                <img src={left} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden bg-gray-100 h-70 sm:h-100">
                <img src={right} alt="" className="w-full h-full object-cover" />
            </div>
        </div>
    );
}

// Image LEFT + Content RIGHT
function ImageTextRow({
    src,
    children,
}: {
    src: string;
    children: React.ReactNode;
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-7 items-start">
            <div className="rounded-xl overflow-hidden bg-gray-100 h-76">
                <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
            <div>{children}</div>
        </div>
    );
}

// MAIN CONTENT

function MainContent() {
    return (
        <div className="flex-1 min-w-0 max-w-240">

            {/* ─── Section 1: Industrial Products / Overview ─── */}
            <section id="section-0" className="mb-14">
                <SectionHeading size="h1" className="mb-4">
                    Engineered Construction For Safe And Reliable Aviation Operations
                </SectionHeading>

                <BodyText className="mb-3">
                    Catoba provides end-to-end helipad and vertipad construction services designed to meet operational,
                    structural, and aviation safety requirements. Our construction solutions support both permanent and
                    temporary aviation facilities, ensuring safe landings, long-term durability, and compliance with
                    international aviation standards.
                </BodyText>
                <BodyText className="mb-8">
                    From concept development to final execution, we deliver construction solutions that are efficient, precise,
                    and built to perform in demanding operational environments.
                </BodyText>

                <ImageGridEqual
                    left="/hvc/1.png"
                    right="/hvc/2.png"
                />
            </section>

            {/* ─── Section 2: Comprehensive Construction Solutions ─── */}
            <section id="section-1" className="mb-14">
                <SectionHeading size="h2" className="mb-3">
                    Comprehensive Construction Solutions
                </SectionHeading>

                <BodyText className="mb-5">
                    Our helipad and vertipad construction services are designed to support a wide range of aviation
                    applications, including rooftop, ground-level, and elevated installations. We work closely with project
                    stakeholders to ensure seamless integration with the surrounding infrastructure.
                </BodyText>

                <div className="space-y-3 mb-10">
                    {[
                        "Structural design coordination and load analysis",
                        "Ground, rooftop, and elevated helipad construction",
                        "Surface finishing and anti-skid treatments",
                        "Drainage and water management systems",
                        "Safety markings and operational zoning",
                    ].map((item, i) => (
                        <CheckItem key={i} label={item} />
                    ))}
                </div>

                {/* ProcessTimeline — Built For Performance & Safety */}
                <ProcessTimeline
                    title="Built For Performance & Safety"
                    columns={4}
                    subtitle="Every helipad and vertipad is constructed with a strong focus on safety, stability, and long-term operational performance. Our approach ensures that the facility can withstand repeated aircraft operations while maintaining structural integrity."
                    steps={[
                        { number: "01", title: "High Load-Bearing Capacity" },
                        { number: "02", title: "Anti-Slip And Weather-Resistant Surfaces" },
                        { number: "03", title: "Resistance To Vibration And Rotor Wash" },
                        { number: "04", title: "Durable Materials For Extended Service Life" },
                    ]}
                />
            </section>

            {/* ─── Section 3: Compliance & Quality Assurance ─── */}
            <section id="section-2" className="mb-14">
                <ImageTextRow src="/hvc/3.png">
                    <SectionHeading size="h2" className="mb-3">
                        Compliance &amp; Quality Assurance
                    </SectionHeading>
                    <BodyText className="mb-4">
                        All construction activities are carried out in line with recognised aviation and safety standards. Our
                        quality-driven processes ensure that each facility is approval-ready and operationally compliant.
                    </BodyText>

                    <p className="text-[13.5px] font-semibold text-[#1a1a1a] mb-3">
                        Our Quality Approach Includes:
                    </p>

                    <div className="space-y-3">
                        {[
                            "Adherence to aviation authority guidelines",
                            "Strict quality control during construction",
                            "Inspection and testing support",
                            "Documentation for certification and approvals",
                        ].map((item, i) => (
                            <CheckItem key={i} label={item} />
                        ))}
                    </div>
                </ImageTextRow>
            </section>

        </div>
    );
}

// MAIN PAGE EXPORT

export default function SolutionAviationConsultationFirefighting() {
    const sidebarGroups: SidebarGroup[] = [
        {
            items: [
                { label: "Industrial Products / Overview", hasArrow: true },
                { label: "Comprehensive Construction\nSolutions", hasArrow: true },
                { label: "Compliance & Quality\nAssurance", hasArrow: true },
            ],
        },
    ];

    return (
        <div>
            <DynamicHero
                title={"Heliport & Vertiport Construction "}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Heliport & Vertiport Construction " },
                ]}
                backgroundImage="/hvc.png"
            />
            <main className="min-h-screen bg-white">
                <div className="2xl:max-w-360 w-[90%] mx-auto py-8">
                    <div className="flex flex-col lg:flex-row gap-5 items-start">
                        <Sidebar
                            title="Helipad & VertiPad Construction"
                            groups={sidebarGroups}
                        />
                        <MainContent />
                    </div>
                </div>
            </main>
        </div>
    );
}