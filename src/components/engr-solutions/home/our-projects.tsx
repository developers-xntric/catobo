"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GradButton from "@/components/ui/grad-button";
import { ContactCtaButton } from "@/components/ContactCtaButton";
import { HomeData } from "@/data/types";

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

export default function OurProjects({ data }: { data: HomeData['projects'] }) {
    const { badge, title, description, items: projects, categories, buttonHre } = data;
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
                                {badge}
                            </span>
                        </div>
                        <h2 className="text-[22px] md:text-[30px] lg:text-[35px] font-medium leading-[1.2] text-balance text-white">
                            {title}
                        </h2>
                    </div>

                    {/* right */}
                    <div className="lg:w-[45%] lg:pt-4">
                        <p className="text-[14px] md:text-[15px] leading-relaxed text-[#7C8192] mb-6">
                            {description}
                        </p>
                        <GradButton href={buttonHre} size="md">
                            View All Projects
                        </GradButton>
                    </div>
                </div>

                {/* ═══════════ ROW 2 — Cards carousel ═══════════ */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-7">
                    {/* ── Card 1: Project Image ── */}
                    <div
                        key={`img-${activeIndex}`}
                        className="relative rounded-xl overflow-hidden min-h-[220px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px] group animate-fadeIn"
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
                        className="relative rounded-xl bg-[#FFFFFF] p-6 md:p-7 flex flex-col justify-between min-h-[220px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px] animate-fadeIn"
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

                    {/* ── Mobile nav arrows + marquee after card 2 ── */}
                    <div className="flex items-center gap-3 md:hidden">
                        <button
                            onClick={goPrev}
                            className="shrink-0 w-10 h-10 rounded-full border border-[#fff] bg-[#151515] flex items-center justify-center text-[#fff] hover:border-white/40 transition-colors duration-200"
                            aria-label="Previous project"
                        >
                            <ChevronLeft />
                        </button>
                        <div className="flex-1 overflow-hidden relative">
                            <div
                                aria-hidden
                                className="pointer-events-none absolute left-0 top-0 h-full w-12 z-10"
                                style={{
                                    background:
                                        "linear-gradient(to right, #151515 0%, transparent 100%)",
                                }}
                            />
                            <div
                                aria-hidden
                                className="pointer-events-none absolute right-0 top-0 h-full w-12 z-10"
                                style={{
                                    background:
                                        "linear-gradient(to left, #151515 0%, transparent 100%)",
                                }}
                            />
                            <div className="category-marquee-track flex items-center gap-6 whitespace-nowrap py-2">
                                {[...categories, ...categories, ...categories].map((cat, i) => (
                                    <span
                                        key={`${cat}-${i}`}
                                        className={`text-[14px] transition-colors duration-200 cursor-pointer select-none shrink-0 ${cat === project.category
                                            ? "text-[#168DCA] font-medium"
                                            : "text-[#fff]"
                                        }`}
                                    >
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={goNext}
                            className="shrink-0 w-10 h-10 rounded-full border border-[#fff] bg-[#151515] flex items-center justify-center text-[#fff] hover:border-white/40 transition-colors duration-200"
                            aria-label="Next project"
                        >
                            <ChevronRight />
                        </button>
                    </div>

                    {/* ── Card 3: Map card (static — does not change on slide) ── */}
                    <div
                        className="relative rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] p-6 md:p-7 flex flex-col justify-between min-h-[220px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px] overflow-hidden"
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
                    <div className="hidden lg:flex lg:col-span-2 items-center gap-4">
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

                            <div className="category-marquee-track flex items-center gap-6 md:gap-10 whitespace-nowrap py-2">
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
                        <ContactCtaButton
                            className="inline-flex w-full items-center justify-center gap-2 px-6 py-2.5 rounded-[13px] border border-[#fff] text-sm text-[#fff] hover:text-white hover:border-white/40 transition-all duration-200 whitespace-nowrap "
                        >
                            Request a Strategy Call
                        </ContactCtaButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
