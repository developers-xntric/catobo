"use client";

import { CheckIcon } from "@/components/common/CheckIcon";
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
    if (size === "h1") return <h1 className={`text-[28px] ${base}`}>{children}</h1>;
    if (size === "h3") return <h3 className={`text-[16px] ${base}`}>{children}</h3>;
    return <h2 className={`text-[22px] ${base}`}>{children}</h2>;
}

// FEATURE CARD ICONS

function IconLED() {
    return (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="#168DCA" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="16" cy="13" r="6" />
            <path d="M16 19v4M12 23h8M16 3v2M5.5 5.5l1.4 1.4M3 13H5M5.5 20.5l1.4-1.4M26.5 5.5l-1.4 1.4M29 13h-2M26.5 20.5l-1.4-1.4" />
        </svg>
    );
}

function IconBattery() {
    return (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="#168DCA" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="10" width="22" height="12" rx="2" />
            <path d="M25 14v4" />
            <path d="M29 14v4" />
            <path d="M10 16h6M13 13v6" />
        </svg>
    );
}

function IconShield() {
    return (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="#168DCA" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 3l11 4v8c0 6.6-4.7 12.8-11 14.5C9.7 27.8 5 21.6 5 15V7l11-4z" />
            <polyline points="11 16 14.5 19.5 21 13" />
        </svg>
    );
}

// FEATURE CARD (3-col, border style matching design)

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="border border-[#E8E8E8] rounded-2xl p-5 bg-white flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F3F3F3] flex items-center justify-center">
                {icon}
            </div>
            <p className="text-[14px] font-semibold text-[#1a1a1a] leading-snug tracking-wide">
                {title}
            </p>
            <BodyText>{description}</BodyText>
        </div>
    );
}

// PROCESS TIMELINE

interface Step {
    number: string;
    title: string;
}

interface ProcessTimelineProps {
    title: string;
    columns?: number;
    steps: Step[];
    subtitle?: string;
}

export function ProcessTimeline({
    title,
    columns = 4,
    steps,
    subtitle,
}: ProcessTimelineProps) {
    return (
        <div className="bg-[#EEF4F8] rounded-2xl p-7 w-full">
            <SectionHeading size="h2" className="mb-2">
                {title}
            </SectionHeading>
            {subtitle && <BodyText className="mb-2">{subtitle}</BodyText>}
            <div
                className="grid gap-5 mt-6"
                style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
            >
                {steps.map((step) => (
                    <div key={step.number} className="flex flex-col items-start gap-3">
                        <div
                            className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                            style={{
                                background: "linear-gradient(135deg, #168DCA 0%, #0F2453 100%)",
                            }}
                        >
                            <span className="text-white font-semibold text-[15px] tracking-wide">
                                {step.number}
                            </span>
                        </div>
                        <p className="text-[13px] text-[#1a1a1a] font-normal leading-snug">
                            {step.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// SIDEBAR

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
                                            className={`text-[0.875rem] leading-snug font-normal tracking-wide pr-3 whitespace-pre-line ${isActive ? "text-white" : "text-[#1a1a1a]"
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
                ))}
            </div>
        </div>
    );
}

// MAIN CONTENT

function MainContent() {
    return (
        <div className="flex-1 min-w-0 max-w-240">

            {/* ─── Section 1: Overview ─── */}
            <section className="mb-12">
                <SectionHeading size="h1" className="mb-4">
                    Reliable. Rapid. Ready For Every Operation.
                </SectionHeading>

                <BodyText className="mb-3">
                    When permanent power infrastructure isn't available or time is critical, Catoba's Portable Lighting
                    Solutions deliver dependable, compliant, and high-performance illumination for aviation and emergency
                    environments. Designed for fast deployment and harsh conditions, our portable systems ensure
                    uninterrupted operations when it matters most.
                </BodyText>

                <BodyText className="mb-6">
                    Catoba's portable lighting systems are engineered for temporary, emergency, and expedited aviation
                    operations. Whether supporting emergency response, temporary helicopter ops, or airfield setups, our
                    solutions combine durability, visibility, and operational efficiency in one compact system.
                </BodyText>

                {/* 2×2 check grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                    {[
                        "Temporary helipads and vertipads",
                        "Portable runway and taxiway lighting",
                        "Emergency and medevac operations",
                        "Rapid-deployment aviation environments",
                    ].map((item, i) => (
                        <CheckItem key={i} label={item} />
                    ))}
                </div>

                {/* Equal 50/50 image grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl overflow-hidden bg-gray-100 h-52">
                        <img src="/portable-lighting/1.png" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-xl overflow-hidden bg-gray-100 h-52">
                        <img src="/portable-lighting/2.png" alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            {/* ─── Section 2: Key Features That Set It Apart ─── */}
            <section className="mb-12">
                <SectionHeading size="h2" className="mb-5">
                    Key Features That Set It Apart
                </SectionHeading>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <FeatureCard
                        icon={<IconLED />}
                        title="High-Intensity LED Performance"
                        description="Ultra high-intensity LEDs provide exceptional visibility with improved power consumption, delivering long operational life and reduced maintenance requirements."
                    />
                    <FeatureCard
                        icon={<IconBattery />}
                        title="Fully Portable & Self-Powered"
                        description="Built-in rechargeable lithium-ion batteries enable completely independent operation; no external power or cabling required."
                    />
                    <FeatureCard
                        icon={<IconShield />}
                        title="Rugged, Weather-Proof Design"
                        description="Manufactured with hard-anodised aluminium housing and sealed construction, the system is resistant to corrosion, shock, UV exposure, and extreme environmental conditions."
                    />
                </div>
            </section>

            {/* ─── Section 3: Smart Control & Operational Flexibility ─── */}
            <section className="mb-12">
                <SectionHeading size="h2" className="mb-2">
                    Smart Control &amp; Operational Flexibility
                </SectionHeading>

                <p className="text-[13.5px] font-semibold text-[#1a1a1a] mb-2">
                    Simple On-Site Operation
                </p>

                <BodyText className="mb-5">
                    Intuitive controls allow quick activation and immediate deployment, minimizing setup time during critical
                    operations.
                </BodyText>

                <div className="space-y-3">
                    {[
                        "Wireless remote operation for centralized control",
                        "Air-to-ground radio control for aviation coordination",
                        "Automatic dusk-to-dawn operation with photocell support",
                        "Night-vision compatible infrared lighting options",
                    ].map((item, i) => (
                        <CheckItem key={i} label={item} />
                    ))}
                </div>
            </section>

            {/* ─── Section 4: Applications (ProcessTimeline) ─── */}
            <section className="mb-12">
                <ProcessTimeline
                    title="Applications"
                    columns={4}
                    steps={[
                        { number: "01", title: "Touchdown And Lift-Off Areas (TLOF)" },
                        { number: "02", title: "Final Approach And Take-Off Areas (FATO)" },
                        { number: "03", title: "Runway And Taxiway Edge Lighting" },
                        { number: "04", title: "Threshold And Approach Lighting" },
                    ]}
                />
            </section>

            {/* ─── Section 5: Why Choose Catobo — Image LEFT | Text RIGHT ─── */}
            <section className="mb-10">
                <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-8 items-center">
                    {/* Left – image */}
                    <div className="rounded-xl overflow-hidden bg-gray-100 h-52">
                        <img
                            src="/portable-lighting/3.png"
                            alt="Aerial helipad view"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right – text */}
                    <div>
                        <SectionHeading size="h2" className="mb-5">
                            Why Choose Catobo Portable Lighting?
                        </SectionHeading>

                        <div className="space-y-3 mb-7">
                            {[
                                "Fast deployment with zero infrastructure dependency",
                                "Proven performance in demanding environments",
                                "Aviation-grade reliability and compliance",
                                "Scalable solutions for temporary or emergency use",
                            ].map((item, i) => (
                                <CheckItem key={i} label={item} />
                            ))}
                        </div>

                        {/* CTA Button */}
                        <button
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white text-[14px] font-medium tracking-wide transition-opacity hover:opacity-90 active:opacity-80"
                            style={{
                                background: "linear-gradient(93deg, #22A1D8 0.43%, #025094 98.09%)",
                            }}
                        >
                            Talk to an Expert
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}

// MAIN PAGE EXPORT

export default function SolutionPortableLighting() {
    const sidebarGroups: SidebarGroup[] = [
        {
            items: [
                { label: "Overview", hasArrow: true },
                { label: "Key Features", hasArrow: true },
                { label: "Smart Control", hasArrow: true },
                { label: "Applications", hasArrow: true },
            ],
        },
    ];

    return (
        <div>
            <main className="min-h-screen bg-white">
                <div className="2xl:max-w-360 w-[90%] mx-auto py-8">
                    <div className="flex flex-col lg:flex-row gap-5 items-start">
                        <Sidebar
                            title="Portable Lighting Solutions"
                            groups={sidebarGroups}
                        />
                        <MainContent />
                    </div>
                </div>
            </main>
        </div>
    );
}