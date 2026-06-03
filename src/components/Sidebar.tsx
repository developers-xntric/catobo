"use client";
import { useState } from "react";

interface SidebarItem {
  label: string;
  active?: boolean;
  hasArrow?: boolean;
  children?: SidebarItem[];
}

const sidebarItems: SidebarItem[] = [
  {
    label: "Lightning Protection Systems",
    active: true,
    hasArrow: true,
  },
  {
    label: "Lightning Protection System/ Earthing",
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
    <div className="w-55 shrink-0">
      {/* Header */}
      <div className="bg-[#1a1a2e] px-4 py-3 mb-0">
        <span className="text-white text-sm font-semibold">Lightning Protection</span>
      </div>

      {/* Nav Items */}
      <div className="border border-gray-200">
        {sidebarItems.map((item, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="w-full text-left flex items-center justify-between px-4 py-2.5 border-b border-gray-200 last:border-b-0 group transition-all"
            style={{
              background:
                active === i
                  ? "linear-gradient(93deg, #168DCA -24.15%, #0F2453 134.7%)"
                  : "#fff",
            }}
          >
            <span
              className={`text-xs leading-tight font-medium ${
                active === i ? "text-white" : "text-[#636363]"
              }`}
            >
              {item.label}
            </span>
            {item.hasArrow && (
              <svg
                className={`w-4 h-4 shrink-0 ml-2 ${
                  active === i ? "text-white" : "text-[#636363]"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
