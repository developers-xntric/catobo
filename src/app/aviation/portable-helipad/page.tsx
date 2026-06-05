"use client";

import { CheckIcon } from "@/components/common/CheckIcon";
import DynamicHero from "@/components/common/hero";
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
    if (size === "h1") return <h1 className={`text-[30px] ${base}`}>{children}</h1>;
    if (size === "h3") return <h3 className={`text-[18px] ${base}`}>{children}</h3>;
    return <h2 className={`text-[24px] ${base}`}>{children}</h2>;
}

// FEATURE CARD ICONS (SVG outlines)

function IconModular() {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#168DCA" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="11" height="11" rx="2" />
            <rect x="18" y="3" width="11" height="11" rx="2" />
            <rect x="3" y="18" width="11" height="11" rx="2" />
            <rect x="18" y="18" width="11" height="11" rx="2" />
        </svg>
    );
}

function IconLoad() {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#168DCA" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 24l8-16 8 16" />
            <path d="M10.5 19h11" />
            <circle cx="16" cy="6" r="2" />
        </svg>
    );
}

function IconInstall() {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#168DCA" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="16" cy="16" r="12" />
            <path d="M16 10v6l4 2" />
        </svg>
    );
}

function IconWeather() {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#168DCA" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 20a6 6 0 10-11.8-1H8a4 4 0 000 8h14a4 4 0 000-8h-.2" />
            <path d="M16 4v3M8.2 8.2l2.1 2.1M4 16h3M24.8 8.2l-2.1 2.1M28 16h-3" />
        </svg>
    );
}

function IconSafe() {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#168DCA" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 3l11 4v8c0 6.6-4.7 12.8-11 14.5C9.7 27.8 5 21.6 5 15V7l11-4z" />
            <polyline points="11 16 14.5 19.5 21 13" />
        </svg>
    );
}

function IconTile() {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#168DCA" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="26" height="26" rx="2" />
            <line x1="3" y1="16" x2="29" y2="16" />
            <line x1="16" y1="3" x2="16" y2="29" />
        </svg>
    );
}

// ==========================================
// FEATURE CARD COMPONENT
// ==========================================

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    bullets: string[];
}

function FeatureCard({ icon, title, bullets }: FeatureCardProps) {
    return (
        <div className="bg-[#F3F3F3] rounded-2xl p-5 flex flex-col gap-3">
            {/* Icon */}
            <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm">
                {icon}
            </div>
            {/* Title */}
            <p className="text-[14px] font-semibold text-[#1a1a1a] leading-snug tracking-wide">
                {title}
            </p>
            {/* Bullets */}
            <ul className="space-y-1.5">
                {bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-[#636363] leading-snug">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#168DCA] shrink-0" />
                        {b}
                    </li>
                ))}
            </ul>
        </div>
    );
}

// ==========================================
// PROCESS TIMELINE COMPONENT
// ==========================================

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

// ==========================================
// EQUAL IMAGE GRID
// ==========================================

function ImageGridEqual({ left, right }: { left: string; right: string }) {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="rounded-xl col-span-2 overflow-hidden bg-gray-100 h-72">
                <img src={left} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden bg-gray-100 h-72">
                <img src={right} alt="" className="w-full h-full object-contain" />
            </div>
        </div>
    );
}

// ==========================================
// MAIN CONTENT
// ==========================================

function MainContent() {
    const featureCards: FeatureCardProps[] = [
        {
            icon: <IconModular />,
            title: "Modular & Scalable Design",
            bullets: [
                "Interlocking tiles bolted together to form larger sections",
                "Configurable layouts to achieve required helipad dimensions",
                "Easily expandable or reconfigurable as operational needs change",
            ],
        },
        {
            icon: <IconLoad />,
            title: "High Load-Bearing Capacity",
            bullets: [
                "Engineered to support heavy helicopter loads",
                "Tested for high point-load resistance with minimal deflection",
                "Suitable for repeated take-off and landing operations",
            ],
        },
        {
            icon: <IconInstall />,
            title: "Rapid Installation",
            bullets: [
                "Sections can be pre-assembled off-site",
                "Manual handling possible without heavy lifting equipment",
                "Quick deployment on soil, sand, gravel, or uneven terrain",
            ],
        },
        {
            icon: <IconWeather />,
            title: "Anti-Slip & Weather Resistant",
            bullets: [
                "Vehicle-grade, anti-slip surface",
                "UV-stabilized material for long-term outdoor exposure",
                "Designed to perform in extreme environmental conditions",
            ],
        },
        {
            icon: <IconSafe />,
            title: "Safe Access & Ground Stability",
            bullets: [
                "Integrated anchoring points to secure the helipad to the ground",
                "Optional rubber ramps for smooth on/off access",
                "Prevents surface damage and ground penetration",
            ],
        },
        {
            icon: <IconTile />,
            title: "Tile-Based Construction",
            bullets: [
                "Individual tiles connected to form large sections",
                "Sections combined to create a full helipad area",
                "Lightweight yet structurally robust",
            ],
        },
    ];

    return (
        <div className="flex-1 min-w-0 max-w-240">

            {/* ─── Section 1: Overview ─── */}
            <section className="mb-12">
                <SectionHeading size="h1" className="mb-4">
                    Rapid-Deploy Helipad Systems For Temporary &amp; Emergency Operations
                </SectionHeading>

                <BodyText className="mb-6">
                    Catobo's Portable Helipad and VertiPad solutions are engineered for rapid deployment where permanent
                    infrastructure is not feasible. Designed for emergency response, temporary operations, and remote
                    locations, these systems deliver high load capacity, operational safety, and compliance without
                    permanent civil works.
                </BodyText>

                {/* Overview sub-heading */}
                <p className="text-[15px] font-semibold text-[#1a1a1a] mb-2">Overview</p>
                <BodyText className="mb-3">
                    Our portable helipad systems use a modular, heavy-duty flooring structure that can be quickly
                    assembled to create stable, load-bearing landing areas for helicopters. The system is ideal for medical
                    evacuation, disaster response, construction sites, events, and temporary aviation operations.
                </BodyText>
                <BodyText className="mb-8">
                    Each solution is designed for speed, strength, and flexibility, allowing teams to deploy, relocate, or
                    dismantle the helipad with minimal manpower and tools.
                </BodyText>

                <ImageGridEqual
                    left="/ph/1.png"
                    right="/ph/2.png"
                />
            </section>

            {/* ─── Section 2: Key Features — 3×2 card grid ─── */}
            <section className="mb-14">
                <SectionHeading size="h2" className="mb-6">
                    Key Features
                </SectionHeading>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {featureCards.map((card, i) => (
                        <FeatureCard key={i} {...card} />
                    ))}
                </div>
            </section>

            {/* ─── Section 3: Applications (ProcessTimeline) ─── */}
            <section className="mb-14">
                <ProcessTimeline
                    title="Applications"
                    columns={4}
                    steps={[
                        { number: "01", title: "Emergency Medical Evacuation (MEDEVAC)" },
                        { number: "02", title: "Temporary Helipads For Construction And Infrastructure Projects" },
                        { number: "03", title: "Disaster Response And Relief Operations" },
                        { number: "04", title: "Remote And Off-Grid Aviation Operations" },
                    ]}
                />
            </section>

            {/* ─── Section 4: Why Choose Catobo — Image LEFT | Text RIGHT ─── */}
            <section className="mb-10">
                <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-8 items-center">
                    {/* Left – image */}
                    <div className="rounded-xl overflow-hidden bg-gray-100 h-90">
                        <img
                            src="/ph/3.png"
                            alt="Aerial view of helipad"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right – text */}
                    <div>
                        <SectionHeading size="h2" className="mb-5">
                            Why Choose Catobo Portable Helipad Solutions
                        </SectionHeading>

                        <div className="space-y-3 mb-7">
                            {[
                                "Proven modular engineering",
                                "High load performance with rapid deployment",
                                "Minimal site preparation required",
                                "Flexible, reusable, and cost-effective",
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

export default function SolutionPortableHelipad() {
    const sidebarGroups: SidebarGroup[] = [
        {
            items: [
                { label: "Overview", hasArrow: true },
                { label: "Key Features", hasArrow: true },
                { label: "Applications", hasArrow: true },
            ],
        },
    ];

    return (
        <div>
            <DynamicHero
                title={"Portable Helipad & VertiPad Solutions"}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Portable Helipad & VertiPad Solutions" },
                ]}
                backgroundImage="/ph.png"
            />
            <main className="min-h-screen bg-white">
                <div className="2xl:max-w-360 w-[90%] mx-auto py-8">
                    <div className="flex flex-col lg:flex-row gap-5 items-start">
                        <Sidebar
                            title="Portable Helipad & VertiPad Solutions"
                            groups={sidebarGroups}
                        />
                        <MainContent />
                    </div>
                </div>
            </main>
        </div>
    );
}