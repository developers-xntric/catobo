"use client";

import React from "react";

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 shrink-0 mt-0.5"
      viewBox="0 0 20 20"
      fill="none"
    >
      <circle cx="10" cy="10" r="10" fill="#168DCA" opacity="0.12" />
      <circle cx="10" cy="10" r="8" fill="none" stroke="#168DCA" strokeWidth="1.5" />
      <path
        d="M6.5 10.5L9 13L13.5 8"
        stroke="#168DCA"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ViewPDFLink({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="text-[#1475AF] text-sm font-medium hover:underline"
      onClick={(e) => e.preventDefault()}
    >
      {label}
    </a>
  );
}

export default function MainContent() {
  return (
    <div className="flex-1 min-w-0">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#636363] mb-4">
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span>Lightning Protection Systems</span>
      </div>

      {/* ─── Section 1: Franklin France ─── */}
      <section className="mb-10">
        <h1 className="text-[26px] font-bold text-[#000000] mb-3 leading-tight">
          Franklin France
        </h1>

        {/* PDF Links */}
        <div className="space-y-2 mb-5">
          <div className="flex items-center gap-2">
            <CheckIcon />
            <span className="text-sm text-[#636363]">
              Early Streamer Emission System-Active 2D –{" "}
              <ViewPDFLink label="View PDF" />
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon />
            <span className="text-sm text-[#636363]">
              Early Streamer Emission System-Active 4D –{" "}
              <ViewPDFLink label="View PDF" />
            </span>
          </div>
        </div>

        {/* Two image grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded overflow-hidden bg-gray-100 aspect-4/3">
            <img
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80"
              alt="Lightning protection installation worker"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded overflow-hidden bg-gray-100 aspect-4/3">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
              alt="Lightning rod system"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─── Section 2: Lightning Protection System / Earthing ─── */}
      <section className="mb-10">
        <h2 className="text-[22px] font-bold text-[#000000] mb-3 leading-tight">
          Lightning Protection System/Earthing
        </h2>

        <p className="text-sm text-[#636363] leading-relaxed mb-5">
          Lightning protection needs vary according to each specific facility. The requirements of telecom
          structures, buildings, power utility substations, transmission and distribution systems and grounding and
          bonding requirements can all vary greatly. In all cases, the purpose of a high-quality lightning protection
          system is to:
        </p>

        {/* Two image grid */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="rounded overflow-hidden bg-gray-100 aspect-4/3">
            <img
              src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80"
              alt="Grounding cables installation"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded overflow-hidden bg-gray-100 aspect-4/3">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
              alt="Electrical panel technician"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bullet points */}
        <div className="space-y-2.5 mb-4">
          {[
            "Secure critical infrastructure and assets.",
            "Provide protection in the event of unintentional contact between live conductors and bonded/grounded parts",
            "Ensure maximum safety from lightning",
          ].map((point, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckIcon />
              <span className="text-sm text-[#636363] leading-snug">{point}</span>
            </div>
          ))}
        </div>

        <p className="text-sm text-[#636363] leading-relaxed">
          Nvent ERICO has the experts, experience and technology options to select and design the ideal lightning
          protection solution for your application from the ground up.
        </p>
      </section>

      {/* ─── Section 3: Surge Protection Devices ─── */}
      <section className="mb-6">
        <h2 className="text-[22px] font-bold text-[#000000] mb-3 leading-tight">
          Surge Protection Devices
        </h2>

        <p className="text-sm text-[#636363] leading-relaxed mb-3">
          Modern industry relies heavily on electronic automation to increase productivity, ensure safety and
          provide economic benefits. However, power circuits are often severely polluted with electrical
          disturbances from switching of electrical loads, electrical noise and even the occasional induced impulse.
          Since the safety and economic consequences of temporary or permanent failure of industrial equipment
          cannot be tolerated, protection devices should be installed on critical power circuits.
        </p>

        <p className="text-sm text-[#636363] leading-relaxed mb-3">
          Nvent ERICO offers a complete line of surge protection devices that can be coordinated into an effectively
          staged electrical protection plan.
        </p>

        <p className="text-sm text-[#636363] leading-relaxed mb-5">
          Nvent ERICO offers power surge protection solutions in a coordinated approach where the first stage of
          defense is the installation of primary protection devices at the mains supply service entrance, followed by
          secondary protection at distribution branch panels and where necessary, at point-of-use applications.
        </p>

        {/* Three product image grid */}
        <div className="grid grid-cols-3 gap-4">
          {[
            {
              src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
              alt: "Surge protection device red",
            },
            {
              src: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=400&q=80",
              alt: "Surge protection device blue",
            },
            {
              src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80",
              alt: "Surge protection device green",
            },
          ].map((img, i) => (
            <div key={i} className="rounded overflow-hidden bg-gray-100 aspect-square">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
