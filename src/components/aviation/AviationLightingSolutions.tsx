"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/badge";
import { ContactCtaButton } from "@/components/ContactCtaButton";
import { tabsData } from "@/components/consultation-tab";

export default function AviationLightingSolutions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = tabsData[activeIndex];

  return (
    <section id="aviation-solutions" className=" py-10 ">
      <div className="">
        <div className="overflow-hidden rounded-[20px] bg-linear-to-tr to-[#168dca] from-[#0f2453] p-5 text-white md:p-9 lg:grid  lg:grid-cols-[minmax(260px,.92fr)_minmax(280px,1fr)_minmax(300px,.98fr)] lg:gap-10 ">
          <div className="flex flex-col">
            <Badge
              text="Solutions"
              className="md:mb-5 border-white/10 [&>span:first-child]:bg-white"
            />
            <h2 className="max-w-115 font-medium leading-[1.2] tracking-wide text-[20px] md:text-2xl lg:text-[30px]">
              Complete Aviation Lighting Solutions for High-Risk Environments
            </h2>
            <div className="  mt-2 md:mt-4 md:mt-7 grid md:gap-1">
              {tabsData.map((solution, index) => (
                <button
                  key={solution.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`w-full rounded-md px-1 py-2 text-left text-base leading-snug transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:text-lg ${activeIndex === index ? "font-medium text-white" : "font-light text-white/60 hover:text-white"}`}
                  aria-pressed={activeIndex === index}
                >
                  {solution.title}
                </button>
              ))}
            </div>
          </div>

          <div className="relative mt-8 min-h-75 overflow-hidden rounded-xl lg:mt-0 lg:min-h-[575px]">
            <Image
              src={active.image}
              alt={active.title}
              fill
              sizes="(max-width: 1023px) 90vw, 32vw"
              className="object-cover object-center"
            />
          </div>

          <div className="mt-8 flex min-w-0 flex-col lg:mt-0">
            <h3 className="font-(family-name:--font-raleway) text-2xl font-medium tracking-wide md:text-3xl">
              {active.title}
            </h3>
            <p className="mt-5 text-sm  text-[#D8D8D8] md:text-[15px] lg:text-[14.5px]">
              {active.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 lg:mt-auto">
              <Link
                href={active.primaryBtnHref}
                className="inline-flex items-center justify-center rounded bg-white px-6 py-3 text-sm font-medium text-[#1578b2] transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {active.primaryBtnText}
              </Link>
              <ContactCtaButton className="rounded border border-white px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                {active.secondaryBtnText}
              </ContactCtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
