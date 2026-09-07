"use client";
import Image from "next/image";
import { useState } from "react";

const solutions = [
  ["DIFF – Deck Integrated Firefighting System", "Integrated firefighting systems designed specifically for helideck and heliport applications, providing rapid delivery of firefighting media across the designated landing area."],
  ["Firefighting Monitors", "Fixed or remotely operated firefighting monitors designed to provide high-capacity water/foam discharge and effective coverage of the landing area during an emergency."],
  ["Foam Fire Suppression Systems", "Foam-based systems designed to rapidly suppress aviation fuel fires and control fire hazards within the aircraft operating area."],
  ["Fire Pump & Water Supply Systems", "Complete fire pump packages, water storage and distribution systems designed to provide the required flow and pressure for firefighting operations."],
  ["Foam Trolleys & Mobile Firefighting Equipment", "Mobile firefighting units providing additional fire suppression capability and flexibility for heliport and vertiport operations."],
  ["Fire Hydrant & Hose Systems", "Fire hydrants, hose reels, hose cabinets and associated equipment strategically positioned for rapid emergency response."],
];

function SolutionCard({ title, description, wide = false }: { title: string; description: string; wide?: boolean }) {
  return (
    <article className={`rounded-[15px] bg-[#F3F3F3] px-4 py-4 ${wide ? "md:col-span-2" : ""}`}>
      <h3 className="font-raleway text-[18px] font-medium leading-[1.05] tracking-[0.02em] text-black xl:text-[22px]">{title}</h3>
      <p className="mt-3 text-[13px] leading-[1.35] text-[#636363] 2xl:text-[14px]">{description}</p>
    </article>
  );
}

export default function FirefightingSystemsBody() {
  const [activeSection, setActiveSection] = useState("overview");
  return (
    <main className="bg-white">
      <div className="mx-auto flex w-[90%] max-w-[1560px] flex-col gap-5 py-8 md:gap-8 md:py-8 lg:flex-row lg:items-start">
        <aside className="w-full shrink-0 rounded-[15px] bg-[#f3f3f3] p-5 lg:sticky lg:top-8 lg:w-[367px]">
          <h2 className="mb-5 font-raleway text-[20px] font-medium leading-[1.05] tracking-wide text-black md:text-[20px]">Heliport &amp; Vertiport Firefighting Systems</h2>          <nav className="space-y-3" aria-label="Firefighting page sections">
            {[
              ["overview", "Firefighting Solutions"],
              ["delivery", "Complete Fire Protection Delivery"],
              ["safety", "Designed for Aviation Safety"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={"#" + id}
                onClick={() => setActiveSection(id)}
                className={"flex min-h-[54px] items-center justify-between rounded-xl border border-transparent px-4 py-3.5 text-left text-[13px] transition-colors md:text-[14px] " + (activeSection === id ? "bg-linear-to-r from-[#168DCA] to-[#0F2453] text-white" : "bg-white text-black")}
                aria-current={activeSection === id ? "true" : undefined}
              >
                <span className={activeSection === id ? "text-white" : "text-[#1a1a1a]"}>{label}</span><svg className={`h-4 w-4 shrink-0 ${activeSection === id ? "text-white" : "text-black"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" /></svg>
              </a>
            ))}
          </nav>
        </aside>

        <div className="min-w-0 flex-1">
          <div id="overview" className="relative aspect-[8/5] md:aspect-[1164/352] w-full overflow-hidden rounded-[10px]">
            <Image src="/firefighting-overview.png" alt="Firefighting equipment on a helipad" fill sizes="(max-width: 1024px) 90vw, 1164px" className="object-cover" />
          </div>

          <h1 className="mt-5 font-raleway text-[24px] font-medium tracking-wide text-black md:text-[30px]">Firefighting Solutions</h1>

          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
            <SolutionCard title={solutions[0][0]} description={solutions[0][1]} />
            <SolutionCard title={solutions[1][0]} description={solutions[1][1]} />
            <SolutionCard title={solutions[2][0]} description={solutions[2][1]} />
            <SolutionCard title={solutions[3][0]} description={solutions[3][1]} />
            <SolutionCard title={solutions[4][0]} description={solutions[4][1]} />
            <SolutionCard title={solutions[5][0]} description={solutions[5][1]} />
            <SolutionCard wide title="Emergency Firefighting Equipment" description="Integrated firefighting systems designed specifically for helideck and heliport applications, providing rapid delivery of firefighting media across the designated landing area." />
          </div>

          <section id="delivery" className="mt-8 grid grid-cols-1 gap-6 md:mt-10 xl:grid-cols-[minmax(280px,501px)_1fr] md:gap-8">
            <div className="relative aspect-square 2xl:aspect-auto overflow-hidden rounded-[10px]">
              <Image src="/firefighting-delivery.png" alt="Firefighting monitor installation" fill sizes="(max-width: 768px) 90vw, 501px" className="object-cover" />
            </div>
            <div className="pt-1">
              <h2 className="font-raleway text-[24px] font-medium leading-[1.05] tracking-wide text-black md:text-[30px]">Complete Fire Protection Delivery</h2>
              <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-[13px] font-medium text-black md:text-[13px]">
                {["Design & Engineering", "Supply", "Installation", "Testing & Commissioning", "Certification", "Maintenance"].map((item, index) => (
                  <span key={item}>{item}{index < 5 ? " →" : ""}</span>
                ))}
              </div>
              <p className="mt-5 text-[14px] leading-[1.5] text-[#636363] md:text-[14px]">Catobo integrates firefighting systems with the overall heliport or vertiport infrastructure, coordinating firewater, foam systems, monitors, DIFF systems, drainage, electrical systems and other critical components.</p>
              <div id="safety" className="mt-6">
                <h3 className="font-raleway text-[20px] font-medium tracking-wide text-black md:text-[16px]">Designed for Aviation Safety</h3>
                <p className="mt-3 text-[14px] leading-[1.5] text-[#636363] md:text-[14px]">Our solutions are developed in accordance with applicable ICAO, GCAA, NFPA and project-specific requirements, depending on the facility and regulatory jurisdiction.</p>
                <p className="mt-3 text-[14px] leading-[1.5] text-[#636363] md:text-[14px]">From rapid fire detection to effective suppression — Catobo delivers integrated protection for the entire aviation operating area.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
