"use client";

import DynamicHero from "@/components/common/hero";
import { CheckIcon } from "@/components/common/CheckIcon";
import { Sidebar } from "@/app/aviation/airfield-lighting/page";
import { offshoreHelidecksData } from "@/data/aviation/offshore-helidecks-data";
import Image from "next/image";
import React from "react";

function Body({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-[14px] leading-[1.78] text-[#636363] ${className}`}>
      {children}
    </p>
  );
}
function Heading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-[28px] 2xl:text-[35px] font-medium leading-tight tracking-wide text-black ${className}`}
    >
      {children}
    </h2>
  );
}
function Tick({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2 text-[14px] leading-relaxed text-[#636363]">
      <CheckIcon  />
      <span>{children}</span>
    </li>
  );
}
function MainContent() {
  const {
    overview,
    engineering,
    capability,
    exRated,
    operationalReadiness,
    cta,
  } = offshoreHelidecksData;
  return (
    <div className="min-w-0 max-w-240 flex-1">
      <section id="section-0" className="mb-10">
        <div className="relative h-64 overflow-hidden rounded-2xl bg-gray-100 sm:h-80">
          <Image
            src={overview.image.src}
            alt={overview.image.alt}
            fill
            priority
            sizes="(min-width: 1280px) 60vw, 90vw"
            className="object-cover"
          />
        </div>
        <div className="mt-10">
          <h1 className="mt-4 text-[28px] 2xl:text-[35px] font-medium leading-tight tracking-wide text-black">
            {overview.title}
          </h1>
          {overview.paragraphs.map((paragraph) => (
            <Body key={paragraph} className="mt-2">
              {paragraph}
            </Body>
          ))}
        </div>
      </section>
      <section id="section-1" className="mb-10 scroll-mt-8">
        <Heading>{engineering.title}</Heading>
        {engineering.paragraphs.map((paragraph) => (
          <Body key={paragraph} className="mt-2">
            {paragraph}
          </Body>
        ))}
      </section>
      <section id="section-2" className="mb-14 scroll-mt-8">
        <Heading>{capability.title}</Heading>
        <div className="mt-4 grid gap-x-10 gap-y-3 sm:grid-cols-2">
          {capability.columns.map((column, index) => (
            <ul key={index} className="space-y-3">
              {column.map((item) => (
                <Tick key={item}>{item}</Tick>
              ))}
            </ul>
          ))}
        </div>
      </section>
      <section
        id="section-3"
        className="mb-14 grid items-stretch gap-8 xl:grid-cols-2 scroll-mt-8"
      >
        <div className="relative min-h-70 overflow-hidden rounded-[10px] bg-gray-100">
          <Image
            src={exRated.image.src}
            alt={exRated.image.alt}
            fill
            sizes="(min-width: 1280px) 30vw, 90vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <Heading>{exRated.title}</Heading>
          {exRated.paragraphs.map((paragraph) => (
            <Body key={paragraph} className="mt-5">
              {paragraph}
            </Body>
          ))}
        </div>
      </section>
      <section
        id="section-4"
        className="mb-10 grid items-stretch gap-8 xl:grid-cols-2 scroll-mt-8"
      >
        <div className="order-2 flex flex-col justify-center xl:order-1">
          <Heading>{operationalReadiness.title}</Heading>
          {operationalReadiness.paragraphs.map((paragraph) => (
            <Body key={paragraph} className="mt-5">
              {paragraph}
            </Body>
          ))}
        </div>
        <div className="relative order-1 min-h-70 overflow-hidden rounded-[10px] bg-gray-100 xl:order-2">
          <Image
            src={operationalReadiness.image.src}
            alt={operationalReadiness.image.alt}
            fill
            sizes="(min-width: 1280px) 30vw, 90vw"
            className="object-cover"
          />
        </div>
      </section>
      <section className="mb-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <Heading className="md:max-w-[400px]">{cta.title}</Heading>
        <a
          href={cta.href}
          className="inline-flex shrink-0 w-fit items-center justify-center rounded-md bg-[linear-gradient(93deg,#168DCA_-24.15%,#0F2453_134.7%)] px-5 md:px-8 py-3 md:py-4 text-xs md:text-[14px] font-medium text-white transition-opacity hover:opacity-90"
        >
          {cta.label}
        </a>
      </section>
    </div>
  );
}
export default function OffshoreHelidecksPage() {
  const { hero, sidebar } = offshoreHelidecksData;
  return (
    <div>
      <DynamicHero
        title={hero.title}
        breadcrumbs={hero.breadcrumbs}
        backgroundImage={hero.backgroundImage}
      />
      <main className="min-h-screen bg-white">
        <div className="mx-auto w-[90%] py-8 2xl:max-w-360">
          <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-5">
            <Sidebar
              title={sidebar.title}
              groups={[{ items: sidebar.items }]}
            />
            <MainContent />
          </div>
        </div>
      </main>
    </div>
  );
}
