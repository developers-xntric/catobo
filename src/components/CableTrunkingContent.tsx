"use client";

import React from "react";
import { CheckIcon } from "@/components/common/CheckIcon";
import { ViewPDFLink } from "@/components/common/ViewPDFLink";
import { CableTrunkingData, ContentSection, NumberedCardData } from "@/data/types";

interface CableTrunkingContentProps {
    data: CableTrunkingData;
}

function NumberedCard({ number, title, subtitle, points }: NumberedCardData) {
    return (
        <div className="border border-[#E8E8E8] rounded-xl p-4">
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

export default function CableTrunkingContent({ data }: CableTrunkingContentProps) {
    return (
        <div className="flex-1 min-w-0 max-w-240">
            {data.sections.map((section, index) => {
                const isFirst = index === 0;
                const hasPdfLinks = section.pdfLinks && section.pdfLinks.length > 0;
                const hasTwoImages = section.images?.length === 2;

                return (
                    <section key={index} id={`section-${index}`} className={index === data.sections.length - 1 ? "mb-10" : "mb-16"}>
                        {section.badge && (
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-sm text-[#636363]">• {section.badge}</span>
                            </div>
                        )}

                        {isFirst ? (
                            <h1 className="text-[32px] font-medium text-black mb-5 leading-tight tracking-wide">
                                {section.title}
                            </h1>
                        ) : (
                            <h2 className="text-[28px] font-medium text-black mb-3 leading-tight tracking-wide">
                                {section.title}
                            </h2>
                        )}

                        {section.subtitle && !isFirst && (
                            <h3 className="text-[20px] font-medium text-black mb-4 tracking-wide">
                                {section.subtitle}
                            </h3>
                        )}

                        {section.points && (
                            <div className="space-y-3.5 mb-8">
                                {section.points.map((point, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckIcon />
                                        <span className="text-md text-[#636363] leading-relaxed">{point}</span>
                                    </div>
                                ))}
                                {hasPdfLinks && section.pdfLinks!.map((link, i) => (
                                    <div key={`pdf-${i}`} className="flex items-start gap-3">
                                        <CheckIcon />
                                        <span className="text-md text-[#636363] leading-relaxed">
                                            Technical Datasheet – <ViewPDFLink label={link.label} />
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-4">
                            {hasTwoImages && section.images!.map((img, i) => (
                                <div key={i} className={`rounded-xl overflow-hidden h-76${i === 1 ? " flex items-center justify-center" : ""}`}>
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className={`w-full h-full object-cover${img.className ? " " + img.className : ""}`}
                                    />
                                </div>
                            ))}
                        </div>

                        {section.subSections?.map((sub, si) => (
                            <div key={si} className="mt-8">
                                {sub.title && (
                                    <h3 className="text-[20px] font-medium text-black mb-2 tracking-wide">
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

                        {section.numberCards && (
                            <div className="space-y-4 mt-6">
                                {section.numberCards.map((card) => (
                                    <NumberedCard key={card.number} {...card} />
                                ))}
                            </div>
                        )}
                    </section>
                );
            })}
        </div>
    );
}
