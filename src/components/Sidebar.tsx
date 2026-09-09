"use client";
import { useState } from "react";

interface SidebarItem {
    label: string;
    hasArrow?: boolean;
    subItems?: SidebarItem[];
}

interface SidebarProps {
    title?: string;
    items?: SidebarItem[];
    sectionIds?: string[];
}

const defaultItems: SidebarItem[] = [
    { label: "Lightning Protection Systems", hasArrow: true },
    { label: "Lightning Protection System/\nEarthing", hasArrow: true },
    { label: "Surge Protection Devices", hasArrow: true },
];

export function Sidebar({ title = "Lightning Protection", items = defaultItems, sectionIds }: SidebarProps) {
    const [active, setActive] = useState(0);

    return (
        <div className="w-full lg:w-90 lg:shrink-0 bg-[#F3F3F3] p-5 rounded-2xl lg:sticky lg:top-8">
            <div className="mb-4 px-1">
                <h2 className="text-[1.35rem] text-black font-medium tracking-wide">
                    {title}
                </h2>
            </div>

            <div className="flex flex-col gap-3">
                {items.map((item, i) => (
                    <div key={i}>
                        <button
                            onClick={() => {
                                setActive(i);
                                document.getElementById(sectionIds?.[i] ?? `section-${i}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
                            }}
                            className={`w-full text-left flex items-center justify-between px-4 py-3 2xl:px-5 2xl:py-4 rounded-xl border transition-all ${active === i
                                ? "border-transparent shadow-md"
                                : "border-[#E8E8E8] hover:border-gray-300"
                                }`}
                            style={{
                                background:
                                    active === i
                                        ? "linear-gradient(93deg, #168DCA -24.15%, #0F2453 134.7%)"
                                        : "#fff",
                            }}
                        >
                            <span
                                className={`text-[12px] md:text-[0.95rem] leading-snug font-normal font-raleway tracking-wide pr-4 whitespace-pre-line ${active === i ? "text-white" : "text-[#1a1a1a]"
                                    }`}
                            >
                                {item.label}
                            </span>
                            {item.hasArrow && (
                                <svg
                                    className={`w-4.5 h-4.5 shrink-0 ${active === i ? "text-white" : "text-black"}`}
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

                        {item.subItems && active === i && (
                            <div className="mt-2 ml-4 flex flex-col gap-2">
                                {item.subItems.map((sub, j) => (
                                    <button
                                        key={j}
                                        className="w-full text-left flex items-center justify-between px-4 py-3 rounded-xl border border-[#E8E8E8] bg-white hover:border-gray-300 transition-all"
                                    >
                                        <span className="text-[0.875rem] text-[#1a1a1a] font-normal tracking-wide pr-3">
                                            {sub.label}
                                        </span>
                                        {sub.hasArrow && (
                                            <svg
                                                className="w-4 h-4 shrink-0 text-black"
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
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
