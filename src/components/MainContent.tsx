"use client";

import React from "react";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4.5 h-4.5 shrink-0 mt-0.5 text-[#168DCA]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}

function ViewPDFLink({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="text-[#168DCA] font-semibold underline underline-offset-2 hover:text-[#116a9a] transition-colors"
      onClick={(e) => e.preventDefault()}
    >
      {label}
    </a>
  );
}

export default function MainContent() {
  return (
    <div className="flex-1 min-w-0 max-w-225">

      {/* Breadcrumb Pill */}
      <div className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-[#E8E8E8] rounded-md mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-[#168DCA]"></span>
        <span className="text-[13px] font-medium text-black tracking-wide">
          Lightning Protection Systems
        </span>
      </div>

      {/* ─── Section 1: Franklin France ─── */}
      <section className="mb-14">
        <h1 className="text-[32px] font-medium text-[#1A1A1A] mb-5 leading-tight tracking-tight">
          Franklin France
        </h1>

        {/* PDF Links */}
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3">
            <CheckIcon />
            <span className="text-md text-[#636363]">
              Early Streamer Emission System-Active 2D – <ViewPDFLink label="View PDF" />
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CheckIcon />
            <span className="text-md text-[#636363]">
              Early Streamer Emission System-Active 4D – <ViewPDFLink label="View PDF" />
            </span>
          </div>
        </div>

        {/* Two image grid (Asymmetrical 5:3 ratio) */}
        <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-4">
          <div className="rounded-xl overflow-hidden bg-gray-100 h-65">
            <img
              src="/slps/1.png"
              alt="Lightning protection installation worker"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden bg-[#EFEFEF] h-65 flex items-center justify-center">
            <img
              src="/slps/2.png"
              alt="Lightning rod system"
              className="w-full h-full mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      {/* ─── Section 2: Lightning Protection System / Earthing ─── */}
      <section className="mb-14">
        <h2 className="text-[28px] font-medium text-[#1A1A1A] mb-4 leading-tight tracking-tight">
          Lightning Protection System/Earthing
        </h2>

        <p className="text-md text-[#636363] leading-[1.7] mb-6">
          Lightning protection needs vary according to each specific facility. The requirements of telecom
          structures, buildings, power utility substations, transmission and distribution systems and grounding and
          bonding requirements can all vary greatly. In all cases, the purpose of a high-quality lightning protection
          system is to:
        </p>

        {/* Two image grid (Asymmetrical 5:3 ratio) */}
        <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-4 mb-6">
          <div className="rounded-xl overflow-hidden bg-gray-100 h-65">
            <img
              src="/slps/3.png"
              alt="Grounding cables installation"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden bg-gray-100 h-65">
            <img
              src="/slps/4.png"
              alt="Electrical panel technician"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bullet points */}
        <div className="space-y-3.5 mb-6">
          {[
            "Secure critical infrastructure and assets",
            "Provide protection in the event of unintentional contact between live conductors and bonded/grounded parts",
            "Ensure maximum safety from lightning",
          ].map((point, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckIcon />
              <span className="text-md text-[#636363] leading-relaxed">{point}</span>
            </div>
          ))}
        </div>

        <p className="text-md text-[#636363] leading-[1.7]">
          Nvent ERICO has the experts, experience and technology options to select and design the ideal lightning
          protection solution for your application from the ground up.
        </p>
      </section>

      {/* ─── Section 3: Surge Protection Devices ─── */}
      <section className="mb-10">
        <h2 className="text-[28px] font-medium text-[#1A1A1A] mb-4 leading-tight tracking-tight">
          Surge Protection Devices
        </h2>

        <div className="space-y-5 mb-8">
          <p className="text-md text-[#636363] leading-[1.7]">
            Modern industry relies heavily on electronic automation to increase productivity, ensure safety and
            provide economic benefits. However, power circuits are often severely polluted with electrical
            disturbances from switching of electrical loads, electrical noise and even the occasional induced impulse.
            Since the safety and economic consequences of temporary or permanent failure of industrial equipment
            cannot be tolerated, protection devices should be installed on critical power circuits.
          </p>

          <p className="text-md text-[#636363] leading-[1.7]">
            Nvent ERICO offers a complete line of surge protection devices that can be coordinated into an effectively
            staged electrical protection plan.
          </p>

          <p className="text-md text-[#636363] leading-[1.7]">
            Nvent ERICO offers power surge protection solutions in a coordinated approach where the first stage of
            defense is the installation of primary protection devices at the mains supply service entrance, followed by
            secondary protection at distribution branch panels and where necessary, at point-of-use applications.
          </p>
        </div>

        {/* Three product image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              src: "/slps/5.png",
              alt: "Surge protection device left",
            },
            {
              src: "/slps/6.png",
              alt: "Surge protection device center",
            },
            {
              src: "/slps/7.png",
              alt: "Surge protection device right",
            },
          ].map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden bg-[#EFEFEF] flex items-center justify-center">
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full h-full object-contain mix-blend-multiply opacity-90 ${i === 1 ? 'hue-rotate-180' : ''} ${i === 2 ? 'hue-rotate-90' : ''}`}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}