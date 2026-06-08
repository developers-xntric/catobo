"use client";

import React from "react";
import { CheckIcon } from "@/components/common/CheckIcon";
import { ViewPDFLink } from "@/components/common/ViewPDFLink";
import { LightningProtectionData, ContentSection } from "@/data/types";

interface MainContentProps {
    data?: LightningProtectionData;
}

const defaultSections: ContentSection[] = [
    {
        title: "Franklin France",
        points: [
            "Early Streamer Emission System-Active 2D",
            "Early Streamer Emission System-Active 4D",
        ],
        pdfLinks: [
            { label: "View PDF" },
            { label: "View PDF" },
        ],
        images: [
            { src: "/slps/1.png", alt: "Lightning protection installation worker" },
            { src: "/slps/2.png", alt: "Lightning rod system", className: "mix-blend-multiply" },
        ],
    },
    {
        title: "Lightning Protection System/Earthing",
        description: "Lightning protection needs vary according to each specific facility. The requirements of telecom structures, buildings, power utility substations, transmission and distribution systems and grounding and bonding requirements can all vary greatly. In all cases, the purpose of a high-quality lightning protection system is to:",
        points: [
            "Secure critical infrastructure and assets",
            "Provide protection in the event of unintentional contact between live conductors and bonded/grounded parts",
            "Ensure maximum safety from lightning",
        ],
        paragraphs: [
            "Nvent ERICO has the experts, experience and technology options to select and design the ideal lightning protection solution for your application from the ground up.",
        ],
        images: [
            { src: "/slps/3.png", alt: "Grounding cables installation" },
            { src: "/slps/4.png", alt: "Electrical panel technician" },
        ],
    },
    {
        title: "Surge Protection Devices",
        paragraphs: [
            "Modern industry relies heavily on electronic automation to increase productivity, ensure safety and provide economic benefits. However, power circuits are often severely polluted with electrical disturbances from switching of electrical loads, electrical noise and even the occasional induced impulse. Since the safety and economic consequences of temporary or permanent failure of industrial equipment cannot be tolerated, protection devices should be installed on critical power circuits.",
            "Nvent ERICO offers a complete line of surge protection devices that can be coordinated into an effectively staged electrical protection plan.",
            "Nvent ERICO offers power surge protection solutions in a coordinated approach where the first stage of defense is the installation of primary protection devices at the mains supply service entrance, followed by secondary protection at distribution branch panels and where necessary, at point-of-use applications.",
        ],
        images: [
            { src: "/slps/5.png", alt: "Surge protection device left" },
            { src: "/slps/6.png", alt: "Surge protection device center" },
            { src: "/slps/7.png", alt: "Surge protection device right" },
        ],
    },
];

function renderSection(section: ContentSection, index: number) {
    const Heading = index === 0 ? "h1" : "h2";
    const headingClass = index === 0
        ? "text-[32px] font-medium text-black mb-5 leading-tight tracking-wide"
        : "text-[28px] font-medium text-black mb-4 leading-tight tracking-wide";

    const hasTwoImages = section.images?.length === 2;
    const hasThreeImages = section.images?.length === 3;

    return (
        <section key={index} id={`section-${index}`} className={index === 0 ? "mb-14" : "mb-14"}>
            {section.badge && (
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-[#636363]">• {section.badge}</span>
                </div>
            )}

            <Heading className={headingClass}>
                {section.title}
            </Heading>

            {section.subtitle && (
                <h3 className="text-[20px] font-medium text-black mb-4 tracking-wide">
                    {section.subtitle}
                </h3>
            )}

            {section.description && (
                <p className="text-md text-[#636363] leading-[1.7] mb-6">
                    {section.description}
                </p>
            )}

            {/* Two-image grid — placed before points when description is present (section 2 pattern) */}
            {hasTwoImages && section.description && (
                <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-2 mb-6">
                    {section.images!.map((img, i) => (
                        <div key={i} className="rounded-xl overflow-hidden bg-gray-100 h-76">
                            <img
                                src={img.src}
                                alt={img.alt}
                                className={`w-full h-full object-cover${img.className ? " " + img.className : ""}`}
                            />
                        </div>
                    ))}
                </div>
            )}

            {section.paragraphs && (
                <div className="space-y-5 mb-8">
                    {section.paragraphs.map((p, i) => (
                        <p key={i} className="text-md text-[#636363] leading-[1.7]">
                            {p}
                        </p>
                    ))}
                </div>
            )}

            {section.points && (
                <div className="space-y-3.5 mb-6">
                    {section.points.map((point, i) => {
                        const pdfLink = section.pdfLinks && section.pdfLinks[i];
                        return (
                            <div key={i} className="flex items-start gap-3">
                                <CheckIcon />
                                <span className="text-md text-[#636363] leading-relaxed">
                                    {point}{pdfLink ? <> – <ViewPDFLink label={pdfLink.label} /></> : ""}
                                </span>
                            </div>
                        );
                    })}
                    {section.pdfLinks && section.pdfLinks.length > (section.points?.length || 0) && (
                        section.pdfLinks.slice(section.points?.length || 0).map((link, i) => (
                            <div key={i + (section.points?.length || 0)} className="flex items-start gap-3">
                                <CheckIcon />
                                <span className="text-md text-[#636363] leading-relaxed">
                                    <ViewPDFLink label={link.label} />
                                </span>
                            </div>
                        ))
                    )}
                </div>
            )}

            {/* Two-image grid without description — placed after points (section 1 pattern) */}
            {hasTwoImages && !section.description && (
                <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-4">
                    {section.images!.map((img, i) => (
                        <div key={i} className={`rounded-xl overflow-hidden h-76${i === 1 ? " flex items-center justify-center" : ""}`}>
                            <img
                                src={img.src}
                                alt={img.alt}
                                className={`w-full h-full object-cover${img.className ? " " + img.className : ""}`}
                            />
                        </div>
                    ))}
                </div>
            )}

            {/* Three-image grid */}
            {hasThreeImages && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {section.images!.map((img, i) => (
                        <div key={i} className="rounded-xl overflow-hidden bg-[#EFEFEF] flex items-center justify-center">
                            <img
                                src={img.src}
                                alt={img.alt}
                                className={`w-full h-full object-cover mix-blend-multiply opacity-90${img.className ? " " + img.className : ""}${i === 1 ? " hue-rotate-180" : ""}${i === 2 ? " hue-rotate-90" : ""}`}
                            />
                        </div>
                    ))}
                </div>
            )}

            {section.subSections?.map((sub, i) => (
                <div key={i} className="mt-8">
                    {sub.title && (
                        <h3 className="text-[20px] font-medium text-black mb-4 tracking-wide">
                            {sub.title}
                        </h3>
                    )}
                    {sub.description && (
                        <p className="text-md text-[#636363] mb-4">{sub.description}</p>
                    )}
                    {sub.points && (
                        <div className="space-y-3.5 mb-8">
                            {sub.points.map((point, j) => (
                                <div key={j} className="flex items-start gap-3">
                                    <CheckIcon />
                                    <span className="text-md text-[#636363] leading-relaxed">{point}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            {section.numberCards?.map((card) => (
                <div key={card.number} className="border border-[#E8E8E8] rounded-xl mb-4 p-4">
                    <h4 className="text-[18px] font-medium text-black mb-2 tracking-wide">
                        {card.number}. {card.title}
                    </h4>
                    {card.subtitle && (
                        <p className="text-sm text-[#636363] mb-3">{card.subtitle}</p>
                    )}
                    <div className="space-y-2">
                        {card.points.map((point, i) => (
                            <p key={i} className="text-sm text-[#636363] leading-relaxed">
                                {point}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default function MainContent({ data }: MainContentProps) {
    const d = data;

    if (!d) {
        return (
            <div className="flex-1 min-w-0 max-w-240">
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-[#E8E8E8] rounded-md mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#168DCA]"></span>
                    <span className="text-[13px] font-medium text-black tracking-wide">
                        Lightning Protection Systems
                    </span>
                </div>
                {defaultSections.map((section, index) => renderSection(section, index))}
            </div>
        );
    }

    return (
        <div className="flex-1 min-w-0 max-w-240">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-[#E8E8E8] rounded-md mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#168DCA]"></span>
                <span className="text-[13px] font-medium text-black tracking-wide">
                    {d.hero.title}
                </span>
            </div>

            {d.sections.map((section, index) => renderSection(section, index))}
        </div>
    );
}
