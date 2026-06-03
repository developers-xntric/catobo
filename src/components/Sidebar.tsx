"use client";
import { useState } from "react";

interface SidebarItem {
  label: string;
  active?: boolean;
  hasArrow?: boolean;
}

const sidebarItems: SidebarItem[] = [
  {
    label: "Lightning Protection Systems",
    hasArrow: true,
  },
  {
    label: "Lightning Protection System/\nEarthing",
    hasArrow: true,
  },
  {
    label: "Surge Protection Devices",
    hasArrow: true,
  },
];

export default function Sidebar() {
  const [active, setActive] = useState(0);

  return (
    <div className="w-90 shrink-0 bg-[#F3F3F3] p-5 rounded-2xl">
      {/* Header */}
      <div className="mb-4 px-1">
        <h2 className="text-[1.35rem] text-black font-medium tracking-wide">
          Lightning Protection
        </h2>
      </div>

      {/* Nav Items */}
      <div className="flex flex-col gap-3">
        {sidebarItems.map((item, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-full text-left flex items-center justify-between px-5 py-4 rounded-xl border transition-all ${active === i ? "border-transparent shadow-md" : "border-[#E8E8E8] hover:border-gray-300"
              }`}
            style={{
              background:
                active === i
                  ? "linear-gradient(93deg, #168DCA -24.15%, #0F2453 134.7%)"
                  : "#fff",
            }}
          >
            <span
              className={`text-[0.95rem] leading-snug font-normal font-raleway tracking-wide pr-4 whitespace-pre-line ${active === i ? "text-white" : "text-[#1a1a1a]"
                }`}
            >
              {item.label}
            </span>
            {item.hasArrow && (
              <svg
                className={`w-4.5 h-4.5 shrink-0 ${active === i ? "text-white" : "text-black"
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
        ))}
      </div>
    </div>
  );
}