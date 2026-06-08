"use client";

import { CheckIcon } from "@/components/common/CheckIcon";
import DynamicHero from "@/components/common/hero";
import React, { useState } from "react";

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
                className={`grid gap-5 mt-6 grid-cols-1 sm:grid-cols-2 ${columns >= 4 ? "lg:grid-cols-4" : columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}
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

// ==========================================
// MAIN CONTENT
// ==========================================

function MainContent() {
    return (
        <div className="flex-1 min-w-0 max-w-240">

            {/* ─── Section 1: Hero text ─── */}
            <section id="section-0" className="mb-12">
                <SectionHeading size="h1" className="mb-4">
                    Engineering Safe, Compliant, And Operationally Ready Aviation Facilities
                </SectionHeading>

                <BodyText className="mb-3">
                    Catoba provides specialized aviation consultation and firefighting system design services to support the
                    planning, development, and certification of helipads, vertipads, heliports, and airfield facilities. Our
                    expertise ensures that every aviation asset is designed to meet operational, safety, and regulatory
                    requirements from concept to execution.
                </BodyText>
                <BodyText>
                    With deep technical knowledge and hands-on project experience, we help clients navigate complex
                    aviation standards while delivering practical, cost-effective solutions.
                </BodyText>
            </section>

            {/* ─── Section 2: Aviation Design & Technical Consultation
              Layout: IMAGE LEFT (larger) | TEXT RIGHT ─── */}
            <section id="section-1" className="mb-14">
                <div className="grid grid-cols-1 md:grid-cols-[5fr_6fr] gap-8 items-start">
                    {/* Left – image */}
                    <div className="rounded-xl overflow-hidden bg-gray-100 h-100">
                        <img
                            src="/cd/1.png"
                            alt="Aviation runway at dusk"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right – text */}
                    <div className="pt-1">
                        <SectionHeading size="h2" className="mb-3">
                            Aviation Design &amp; Technical Consultation
                        </SectionHeading>

                        <BodyText className="mb-4">
                            Our consultation services focus on creating aviation facilities that are safe, efficient, and fully
                            compliant with international standards. We work closely with stakeholders, consultants, and
                            authorities to ensure seamless project execution.
                        </BodyText>

                        <p className="text-[13.5px] font-semibold text-[#1a1a1a] mb-3">
                            Our Consultation Services Include:
                        </p>

                        <div className="space-y-3">
                            {[
                                "Site evaluation and feasibility assessment",
                                "Helipad, vertipad, and heliport layout planning",
                                "Compliance review with aviation safety standards",
                                "Technical documentation and approval support",
                            ].map((item, i) => (
                                <CheckItem key={i} label={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Section 3: Firefighting System Design For Aviation Facilities
              Layout: TEXT LEFT | IMAGE RIGHT (smaller) ─── */}
            <section id="section-2" className="mb-14">
                <div className="grid grid-cols-1 md:grid-cols-[6fr_5fr] gap-8 items-start">
                    {/* Left – text */}
                    <div className="pt-1">
                        <SectionHeading size="h2" className="mb-3">
                            Firefighting System Design For Aviation Facilities
                        </SectionHeading>

                        <BodyText className="mb-4">
                            Fire protection is a critical component of aviation infrastructure. Catoba designs firefighting systems
                            specifically engineered for aviation environments, ensuring rapid response, reliability, and compliance
                            with global safety codes. Our firefighting designs are tailored to the operational needs of each
                            facility and integrated seamlessly into the overall aviation system.
                        </BodyText>

                        <p className="text-[13.5px] font-semibold text-[#1a1a1a] mb-3">
                            Design Scope Includes:
                        </p>

                        <div className="space-y-3">
                            {[
                                "Helipad and vertipad firefighting system design",
                                "Fixed and portable firefighting solutions",
                                "Drainage and spill containment planning",
                                "Integration with lighting and control systems",
                            ].map((item, i) => (
                                <CheckItem key={i} label={item} />
                            ))}
                        </div>
                    </div>

                    {/* Right – image */}
                    <div className="rounded-xl overflow-hidden bg-gray-100 h-100">
                        <img
                            src="/cd/2.png"
                            alt="Airport runway at sunset"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* ─── Section 4: Standards, Compliance & Safety Assurance (ProcessTimeline) ─── */}
            <section id="section-3" className="mb-10">
                <ProcessTimeline
                    title="Standards, Compliance & Safety Assurance"
                    columns={4}
                    subtitle="All designs are developed in line with recognised international aviation and fire safety standards. Our team ensures that systems are optimized for performance while meeting regulatory approval requirements."
                    steps={[
                        { number: "01", title: "ICAO Guidelines" },
                        { number: "02", title: "Aviation Authority Firefighting Requirements" },
                        { number: "03", title: "Fire Safety And Emergency Response Standards" },
                        { number: "04", title: "Environmental And Operational Safety Norms" },
                    ]}
                />
            </section>

        </div>
    );
}

// MAIN PAGE EXPORT

export default function SolutionAviationConsultationPage2() {
    const sidebarGroups: SidebarGroup[] = [
        {
            items: [
                { label: "Industrial Products", hasArrow: true },
                { label: "Aviation Design & Technical\nConsultation", hasArrow: true },
                { label: "Firefighting System Design\nFor Aviation Facilities", hasArrow: true },
                { label: "Compliance & Safety", hasArrow: true },
            ],
        },
    ];

    return (
        <div>
            <DynamicHero
                title={"Aviation Consultation & Firefighting Design"}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Aviation Consultation & Firefighting Design" },
                ]}
                backgroundImage="/cd.png"
            />
            <main className="min-h-screen bg-white">
                <div className="2xl:max-w-360 w-[90%] mx-auto py-8">
                    <div className="flex flex-col lg:flex-row gap-5 items-start">
                        <Sidebar
                            title="Aviation Consultation & Firefighting Design"
                            groups={sidebarGroups}
                        />
                        <MainContent />
                    </div>
                </div>
            </main>
        </div>
    );
}