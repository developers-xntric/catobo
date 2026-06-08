"use client";

import { CheckIcon } from "@/components/common/CheckIcon";
import DynamicHero from "@/components/common/hero";
import ProcessTimeline from "@/components/Timeline";
import React, { useState } from "react";

function CheckItem({ label }: { label: string }) {
    return (
        <div className="flex items-start gap-3">
            <CheckIcon />
            <span className="text-[14px] text-[#636363] leading-relaxed">{label}</span>
        </div>
    );
}

function BodyText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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

            <div className="flex flex-col gap-4">
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
                ))}
            </div>
        </div>
    );
}

// ==========================================
// EQUAL IMAGE GRID (50/50 split)
// ==========================================

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

// Left-heavy image grid (image left, text right) — for Installation section
function ImageTextRow({ src, children }: { src: string; children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-7 items-start">
            <div className="rounded-xl overflow-hidden bg-gray-100 h-70">
                <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
            <div>{children}</div>
        </div>
    );
}

// ==========================================
// MAIN CONTENT
// ==========================================

function MainContent() {
    return (
        <div className="flex-1 min-w-0 max-w-240">

            {/* ─── Section 1: Overview ─── */}
            <section id="section-0" className="mb-14">
                <SectionHeading size="h1" className="mb-4">
                    Advanced Fire Protection For Aviation Safety-Critical Environments
                </SectionHeading>

                <BodyText className="mb-3">
                    Catoba designs and delivers specialized firefighting systems for heliports and vertiports, ensuring rapid
                    fire suppression, operational safety, and compliance with aviation fire safety standards. Our solutions are
                    engineered to respond instantly during critical incidents, protecting lives, aircraft, and infrastructure.
                </BodyText>
                <BodyText className="mb-7">
                    We provide integrated firefighting systems that align seamlessly with helipad layouts, lighting systems,
                    and emergency response plans.
                </BodyText>

                <ImageGridEqual
                    left="/hpfs/1.png"
                    right="/hpfs/2.png"
                />
            </section>

            {/* ─── Section 2: Purpose-Built Firefighting Solutions ─── */}
            <section id="section-1" className="mb-14">
                <SectionHeading size="h2" className="mb-3">
                    Purpose-Built Firefighting Solutions
                </SectionHeading>

                <BodyText className="mb-4">
                    Fire risks in helicopter and vertical aviation operations require dedicated, aviation-specific firefighting
                    systems. Catoba's solutions are designed to manage fuel fires, hot surface ignition, and emergency spill
                    scenarios with speed and reliability.
                </BodyText>

                <p className="text-[13.5px] font-semibold text-[#1a1a1a] mb-3">
                    Our Firefighting Solutions Support:
                </p>

                <div className="space-y-3 mb-10">
                    {[
                        "Rooftop and ground-level heliports",
                        "Vertiports and advanced air mobility facilities",
                        "Temporary and permanent aviation installations",
                        "High-risk and high-traffic operational environments",
                    ].map((item, i) => (
                        <CheckItem key={i} label={item} />
                    ))}
                </div>

                {/* Standards, Compliance & Reliability — ProcessTimeline */}
                <div id="section-2">
                    <ProcessTimeline
                        title="Standards, Compliance & Reliability"
                        columns={4}
                        subtitle="Catoba ensures that all firefighting systems are designed in accordance with recognized aviation and fire safety standards. Our compliance-driven approach helps streamline authority approvals and ensures long-term system reliability."
                        steps={[
                            { number: "01", title: "Aviation Authority Firefighting Requirements" },
                            { number: "02", title: "International Aviation Safety Guidelines" },
                            { number: "03", title: "Fire Safety And Emergency Response Standards" },
                            { number: "04", title: "Environmental And Operational Safety Norms" },
                        ]}
                    />
                </div>
            </section>

            {/* ─── Section 3: Installation, Testing & Commissioning ─── */}
            <section className="mb-14">
                <ImageTextRow src="/hpfs/3.png">
                    <SectionHeading size="h2" className="mb-3">
                        Installation, Testing &amp; Commissioning
                    </SectionHeading>
                    <BodyText className="mb-4">
                        Beyond design, Catoba supports system installation coordination, testing, and commissioning to ensure full
                        operational readiness.
                    </BodyText>

                    <p className="text-[13.5px] font-semibold text-[#1a1a1a] mb-3">
                        Our Support Includes:
                    </p>

                    <div className="space-y-3">
                        {[
                            "Installation supervision and coordination",
                            "Functional testing and system verification",
                            "Performance validation under operational conditions",
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

// ==========================================
// MAIN PAGE EXPORT
// ==========================================

export default function SolutionHeliportFirefightingSystems() {
    const sidebarGroups: SidebarGroup[] = [
        {
            items: [
                { label: "Overview", hasArrow: true },
                { label: "Firefighting Solutions", hasArrow: true },
                { label: "Compliance & Reliability", hasArrow: true },
            ],
        },
    ];

    return (
        <div>
            <DynamicHero
                title={"Heliport & Vertiport Firefighting Systems"}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Heliport & Vertiport Firefighting Systems" },
                ]}
                backgroundImage="/hpfs.png"
            />

            <main className="min-h-screen bg-white">
                <div className="2xl:max-w-360 w-[90%] mx-auto py-8">
                    <div className="flex flex-col lg:flex-row gap-5 items-start">
                        <Sidebar
                            title="Heliport & Vertiport Firefighting Systems"
                            groups={sidebarGroups}
                        />
                        <MainContent />
                    </div>
                </div>
            </main>
        </div>
    );
}