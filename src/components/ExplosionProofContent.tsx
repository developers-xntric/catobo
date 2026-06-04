"use client";

import React from "react";
import { CheckIcon } from "@/components/common/CheckIcon";
import { ViewPDFLink } from "@/components/common/ViewPDFLink";
import { ExplosionProofData, ContentSection } from "@/data/types";

interface ExplosionProofContentProps {
    data: ExplosionProofData;
}

function renderSection(section: ContentSection, index: number, isLast: boolean) {
    const isFirst = index === 0;
    const hasTwoImages = section.images?.length === 2;
    const sectionClass = isLast ? "mb-10" : "mb-16";

    return (
        <section key={index} className={sectionClass}>
            {isFirst ? (
                <h1 className="text-[32px] font-medium text-black mb-5 leading-tight tracking-wide">
                    {section.title}
                </h1>
            ) : (
                <h2 className="text-[28px] font-medium text-black mb-6 leading-tight tracking-wide">
                    {section.title}
                </h2>
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

            {isFirst && (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-4 mb-8">
                        {section.images && section.images.length >= 1 && (
                            <div className="rounded-xl overflow-hidden bg-gray-100 h-76">
                                <img
                                    src={section.images[0].src}
                                    alt={section.images[0].alt}
                                    className={`w-full h-full object-cover${section.images[0].className ? " " + section.images[0].className : ""}`}
                                />
                            </div>
                        )}
                        {section.images && section.images.length >= 2 && (
                            <div className="rounded-xl overflow-hidden bg-[#EFEFEF] h-76 flex items-center justify-center">
                                <img
                                    src={section.images[1].src}
                                    alt={section.images[1].alt}
                                    className={`w-full h-full object-cover${section.images[1].className ? " " + section.images[1].className : ""}`}
                                />
                            </div>
                        )}
                    </div>

                    {section.points && (
                        <>
                            <h3 className="text-[24px] font-medium text-black mb-4 tracking-wide">
                                Features:
                            </h3>
                            <div className="space-y-3.5">
                                {section.points.map((point, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckIcon />
                                        <span className="text-md text-[#636363] leading-relaxed">{point}</span>
                                    </div>
                                ))}
                                {section.pdfLinks && section.pdfLinks.map((link, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckIcon />
                                        <span className="text-md text-[#636363] leading-relaxed">
                                            Isolator Switches – <ViewPDFLink label={link.label} />
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </>
            )}

            {!isFirst && section.points && (
                <div className="space-y-3.5 mb-6">
                    {section.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckIcon />
                            <span className="text-md text-[#636363] leading-relaxed">{point}</span>
                        </div>
                    ))}
                </div>
            )}

            {hasTwoImages && !isFirst && (
                <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-4">
                    {section.images!.map((img, i) => {
                        const hasBlend = img.className?.includes("mix-blend-multiply");
                        return (
                            <div
                                key={i}
                                className={`rounded-xl overflow-hidden h-76${hasBlend ? " bg-[#EFEFEF] flex items-center justify-center" : " bg-gray-100"}${i === 1 && !hasBlend ? " bg-gray-100" : ""}`}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className={`w-full h-full object-cover${img.className ? " " + img.className : ""}`}
                                />
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
}

export default function ExplosionProofContent({ data }: ExplosionProofContentProps) {
    return (
        <div className="flex-1 min-w-0 max-w-240">
            {data.sections.map((section, index) => renderSection(section, index, index === data.sections.length - 1))}
        </div>
    );
}
