"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GradButton from "@/components/ui/grad-button";

/* ─── project data ─── */
const projects = [
    {
        image: "/engr-solutions/project-image.png",
        title: "Vertiport & Heliport Lighting & Safety System",
        description:
            "Delivered a state-of-the-art helipad lighting system designed for maximum safety, reliability, and operational efficiency. The project included perimeter and touchdown lighting, integrated safety beacons, and a control & monitoring system to ensure continuous compliance with international aviation standards. Engineered to withstand challenging conditions, this installation highlights Catobo's expertise in end-to-end aviation solutions.",
        link: "/projects/vertiport-heliport",
        category: "Aviation",
    },
    {
        image: "/engr-solutions/project-image.png",
        title: "Airfield Ground Lighting System",
        description:
            "Designed and installed a comprehensive airfield ground lighting system for a major international airport, ensuring full compliance with ICAO standards. The project encompassed runway edge and centerline lighting, taxiway guidance systems, and approach lighting with advanced CCR control. Built to perform under extreme conditions, this installation demonstrates Catobo's capability in large-scale aviation infrastructure.",
        link: "/projects/airfield-lighting",
        category: "Construction",
    },
    {
        image: "/engr-solutions/project-image.png",
        title: "Lightning Protection & Earthing Systems",
        description:
            "Engineered a complete lightning protection and earthing solution for a healthcare facility, safeguarding critical medical equipment and patient safety. The installation included external LPS, surge protection devices, and a comprehensive earthing network designed to meet IEC 62305 standards. This project underscores Catobo's precision in delivering safety-critical infrastructure.",
        link: "/projects/lightning-protection",
        category: "Healthcare",
    },
];

const categories = [
    "Aviation",
    "Construction",
    "Defense & Military",
    "Healthcare",
    "Oil & Gas",
    "Transportation",
    "Telecommunications",
    "Energy",
];

/* ─── arrow svg ─── */
const ArrowIcon = () => (
    <svg
        width="14"
        height="14"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12.0497 4.10513L1.70026 14.4545L0 12.7543L10.3482 2.40489H1.22769V0H14.4545V13.2268H12.0497V4.10513Z"
            fill="currentColor"
        />
    </svg>
);

/* ─── chevron left / right ─── */
const ChevronLeft = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m15 18-6-6 6-6" />
    </svg>
);

const ChevronRight = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m9 18 6-6-6-6" />
    </svg>
);

export default function OurProjects() {
    const [activeIndex, setActiveIndex] = useState(0);

    const goPrev = () =>
        setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    const goNext = () =>
        setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

    const project = projects[activeIndex];

    return (
        <section className="relative w-full bg-[#151515] overflow-hidden">
            {/* ── grid overlay ── */}
            <div
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative z-10 2xl:max-w-350 w-[90%] mx-auto py-16 md:py-20 lg:py-24">
                {/* ═══════════ ROW 1 — Badge + heading | para + CTA ═══════════ */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10">
                    {/* left */}
                    <div className="lg:w-[50%]">
                        <div className="flex items-center gap-2 mb-5 border border-[#2A2F3D] px-4 py-2 rounded-full w-fit">
                            <span className="w-2 h-2 rounded-full bg-[#168DCA]" />
                            <span className="text-xs text-white ">
                                Our Projects
                            </span>
                        </div>
                        <h2 className="text-[20px] md:text-[30px] lg:text-[35px] font-medium leading-[1.2] text-balance text-white">
                            Engineering Excellence In
                            <br className="hidden md:block" />
                            Every Project We Deliver
                        </h2>
                    </div>

                    {/* right */}
                    <div className="lg:w-[45%] lg:pt-4">
                        <p className="text-[14px] md:text-[15px] leading-relaxed text-[#7C8192] mb-6">
                            Showcasing our expertise in aviation, construction, and critical
                            infrastructure solutions. Explore how we deliver safety,
                            compliance, precision in every project.
                        </p>
                        <GradButton href="/projects" size="md">
                            View All Projects
                        </GradButton>
                    </div>
                </div>

                {/* ═══════════ ROW 2 — Cards carousel ═══════════ */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-7">
                    {/* ── Card 1: Project Image ── */}
                    <div
                        key={`img-${activeIndex}`}
                        className="relative rounded-xl overflow-hidden min-h-[320px] md:min-h-[380px] lg:min-h-[420px] group animate-fadeIn"
                    >
                        <Image
                            src={project.image}
                            alt="Project showcase"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                    </div>

                    {/* ── Card 2: Description card ── */}
                    <div
                        key={`desc-${activeIndex}`}
                        className="relative rounded-xl bg-[#FFFFFF] p-6 md:p-7 flex flex-col justify-between min-h-[320px] md:min-h-[380px] lg:min-h-[420px] animate-fadeIn"
                    >
                        <div>
                            <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-semibold leading-snug text-[#111] mb-4">
                                {project.title}
                            </h3>
                            <p className="text-[13px] md:text-[14px] leading-relaxed text-[#6D6D6D]">
                                {project.description}
                            </p>
                        </div>   

                        {/* gradient arrow button */}
                        <Link
                            href={project.link}
                            className="mt-6 w-11 h-11 rounded-full bg-linear-to-r from-[#0F2453] to-[#168DCA] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20"
                        >
                            <ArrowIcon />
                        </Link>
                    </div>

                    {/* ── Card 3: Map card (static — does not change on slide) ── */}
                    <div
                        className="relative rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] p-6 md:p-7 flex flex-col justify-between min-h-[320px] md:min-h-[380px] lg:min-h-[420px] overflow-hidden"
                    >
                        <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-semibold leading-snug text-white mb-4">
                            Delivering Safety And Innovation Across The Region
                        </h3>

                        {/* map visual */}
                        <div className="relative flex-1 min-h-[180px]">
                            <Image
                                src="/engr-solutions/map.png"
                                alt="Regions map"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* ═══════════ ROW 3 — Arrows + Marquee ticker + CTA (aligned under map card) ═══════════ */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
                    {/* Left column: arrows + marquee (spans first 2 cols) */}
                    <div className="lg:col-span-2 flex items-center gap-4">
                        {/* left arrow — navigates project slides */}
                        <button
                            onClick={goPrev}
                            className="shrink-0 w-10 h-10 rounded-full border border-[#fff] flex items-center justify-center text-[#fff]  hover:border-white/40 transition-colors duration-200"
                            aria-label="Previous project"
                        >
                            <ChevronLeft />
                        </button>

                        {/* infinite marquee ticker (CSS animation like hero logos) */}
                        <div className="flex-1 overflow-hidden relative">
                            {/* edge fades */}
                            <div
                                aria-hidden
                                className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10"
                                style={{
                                    background:
                                        "linear-gradient(to right, #151515 0%, transparent 100%)",
                                }}
                            />
                            <div
                                aria-hidden
                                className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10"
                                style={{
                                    background:
                                        "linear-gradient(to left, #151515 0%, transparent 100%)",
                                }}
                            />

                            <div className="category-marquee-track flex items-center gap-10 whitespace-nowrap py-2">
                                {[...categories, ...categories, ...categories].map((cat, i) => (
                                    <span
                                        key={`${cat}-${i}`}
                                        className={`text-[14px] md:text-[15px] transition-colors duration-200 cursor-pointer select-none shrink-0 ${cat === project.category
                                                ? "text-[#168DCA] font-medium"
                                                : "text-[#fff]"
                                            }`}
                                    >
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* right arrow — navigates project slides */}
                        <button
                            onClick={goNext}
                            className="shrink-0 w-10 h-10 rounded-full border border-[#fff] flex items-center justify-center text-[#fff]  hover:border-white/40 transition-colors duration-200"
                            aria-label="Next project"
                        >
                            <ChevronRight />
                        </button>
                    </div>

                    {/* Right column: Request a Strategy Call — aligned under map card */}
                    <div className="w-full">
                        <Link
                            href="/contact"
                            className="inline-flex w-full items-center justify-center gap-2 px-6 py-2.5 rounded-[13px] border border-[#fff] text-sm text-[#fff] hover:text-white hover:border-white/40 transition-all duration-200 whitespace-nowrap "
                        >
                            Request a Strategy Call
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
