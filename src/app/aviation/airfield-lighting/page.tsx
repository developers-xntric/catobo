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

function BodyText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <p className={`text-[14px] text-[#636363] leading-[1.78] ${className}`}>{children}</p>
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

export function Sidebar({ title, groups }: { title: string; groups: SidebarGroup[] }) {
    const [active, setActive] = useState(0);
    let globalIdx = 0;

    return (
        <div className="w-90 shrink-0 bg-[#F3F3F3] p-5 rounded-2xl sticky top-8">
            <div className="mb-4 px-1">
                <h2 className="text-[1.1rem] text-black font-medium tracking-wide leading-snug">{title}</h2>
            </div>
            <div className="flex flex-col gap-4">
                {groups.map((group, gi) => (
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
                                        className={`w-full text-left flex items-center justify-between px-4 py-3.5 rounded-xl border transition-all ${isActive ? "border-transparent shadow-md" : "border-[#E8E8E8] hover:border-gray-300"
                                            }`}
                                        style={{
                                            background: isActive
                                                ? "linear-gradient(93deg, #168DCA -24.15%, #0F2453 134.7%)"
                                                : "#fff",
                                        }}
                                    >
                                        <span className={`text-[0.875rem] leading-snug font-normal tracking-wide pr-3 ${isActive ? "text-white" : "text-[#1a1a1a]"}`}>
                                            {item.label}
                                        </span>
                                        {item.hasArrow && (
                                            <svg
                                                className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-black"}`}
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
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

            {/* ─── Section 1: Airfield Lighting ─── */}
            <section className="mb-14">
                <p className="text-[12px] text-[#636363] mb-3">• Airfield Lighting System</p>
                <h1 className="text-[30px] font-medium text-black mb-4 leading-tight tracking-wide">
                    Airfield Lighting
                </h1>

                <BodyText className="mb-8">
                    Catobo has signed up with certified Airfield Lighting Equipment and Airfield Lighting Control &amp; Monitoring
                    System (ALCMS) manufacturer to promote their product lines in MENA region and India. This is part of
                    Catobo's vision to complete our Aviation Portfolio.{" "}
                    We conduct Training to the end-user's maintenance team and provide Annual maintenance contract as
                    well when required.
                </BodyText>

                {/* Image grid — 5:3 */}
                <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-4 mb-8">
                    <div className="rounded-xl overflow-hidden bg-gray-100 h-70">
                        <img src="/al/1.png" alt="Airfield runway lighting" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-xl overflow-hidden bg-[#EFEFEF] h-70 flex items-center justify-center p-4">
                        <img src="/al/2.png" alt="Airfield lighting diagram" className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                </div>

                {/* 2-column check grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
                    {[
                        ["Approach", "Guidance Signs"],
                        ["Runway", "Power"],
                        ["Taxiway", "Mounting"],
                        ["Specialty Tools", ""],
                    ].map(([left, right], i) => (
                        <React.Fragment key={i}>
                            <CheckItem label={left} />
                            {right ? <CheckItem label={right} /> : <div />}
                        </React.Fragment>
                    ))}
                </div>
            </section>

            {/* ─── Section 2: ALCMS ─── */}
            <section className="mb-10">
                <p className="text-[12px] text-[#636363] mb-3">• ALCMS System</p>
                <h2 className="text-[28px] font-medium text-black mb-5 leading-tight tracking-wide">
                    ALCMS
                </h2>

                {/* 2-column check grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
                    {[
                        ["Certified FAA L821/L821E", "Interface Devices"],
                        ["Monitoring Modules", "Runway Incursions & Detection"],
                    ].map(([left, right], i) => (
                        <React.Fragment key={i}>
                            <CheckItem label={left} />
                            <CheckItem label={right} />
                        </React.Fragment>
                    ))}
                </div>
            </section>

        </div>
    );
}

// MAIN PAGE EXPORT

export default function SolutionAirfieldLighting() {
    const sidebarGroups: SidebarGroup[] = [
        {
            items: [{ label: "Airfield Lighting", hasArrow: true }],
        },
        {
            heading: "ALCMS",
            items: [{ label: "Certified FAA L821/L821E", hasArrow: true }],
        },
    ];

    return (
        <div>
            <main className="min-h-screen bg-white">
                <div className="2xl:max-w-360 w-[90%] mx-auto py-8">
                    <div className="flex flex-col lg:flex-row gap-5 items-start">
                        <Sidebar title="Airfield Lighting System" groups={sidebarGroups} />
                        <MainContent />
                    </div>
                </div>
            </main>
        </div>
    );
}