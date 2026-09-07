"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ContactCtaButton } from "@/components/ContactCtaButton";
import {
  consultationCompliance,
  consultationDeliverables,
  consultationIndustries,
  consultationServices,
  consultationStandards,
  consultationStandardsDescription,
  consultationWhyChoose,
  consultationPageContent,
  consultationImages,
} from "@/data/aviation/consultation-data";

export default function ConsultationDesignBody() {
  const [activeComplianceIndex, setActiveComplianceIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveComplianceIndex(
        (current) => (current + 1) % consultationCompliance.length,
      );
    }, 1500);

    return () => window.clearInterval(timer);
  }, []);

  const activeCompliance = consultationCompliance[activeComplianceIndex];
  return (
    <main className="bg-white">
      <div className="mx-auto w-[90%] 2xl:max-w-350 py-8 md:py-10">
        <section className="pb-10 md:pb-16">
          <h1 className="font-raleway text-[26px] font-medium tracking-wide text-black md:text-[35px]">
            {consultationPageContent.intro.title}
          </h1>
          <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-5">
            <div className="text-sm leading-6 text-[#636363] md:text-base md:leading-7">
              <p>{consultationPageContent.intro.paragraphs[0]}</p>
              <p className="mt-4">
                {consultationPageContent.intro.paragraphs[1]}
              </p>
            </div>
            <div className="border-l-0 pl-0 md:border-l md:border-[#e5e5e5] md:pl-10">
              <h2 className="font-raleway text-[24px] font-medium tracking-wide text-black md:text-[30px]">
                {consultationPageContent.whyChooseTitle}
              </h2>
              <ul className="mt-6 flex flex-col gap-4 text-sm text-[#636363] md:text-base">
                {consultationWhyChoose.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#168DCA] bg-transparent text-[9px] md:h-5 md:w-5 md:text-[11px] font-semibold leading-none text-[#168DCA]">
                      &#10003;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-10">
          <h2 className="font-raleway text-[26px] font-medium tracking-wide text-black md:text-[35px]">
            {consultationPageContent.servicesTitle}
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {consultationServices.map(([title, description], index) => (
              <article
                key={title}
                className="rounded-[10px] bg-[#f5f5f5] p-5 md:p-6"
              >
                <span
                  aria-hidden="true"
                  className="block h-9 w-9 bg-linear-to-br from-[#1578b2] to-[#0F2453]"
                  style={{
                    WebkitMaskImage:
                      "url(" +
                      consultationImages.serviceIconPrefix +
                      (index + 1) +
                      ".png)",
                    maskImage:
                      "url(" +
                      consultationImages.serviceIconPrefix +
                      (index + 1) +
                      ".png)",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                  }}
                />
                <h3 className="mt-3 font-raleway text-[18px] font-medium leading-tight text-black">
                  {title}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.45] text-[#636363]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid items-stretch gap-8 py-8 md:grid-cols-2 md:gap-[33px] ">
          <div className="relative min-h-[320px] overflow-hidden rounded-[10px] md:min-h-0 md:h-full">
            <Image
              src={consultationImages.deliverables}
              alt="Aviation consultation project"
              fill
              sizes="(max-width: 768px) 90vw, 720px"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-raleway text-[26px] font-medium tracking-wide text-black md:text-[35px]">
              {consultationPageContent.deliverables.title}
            </h2>
            <p className="mt-3 text-sm text-[#636363] md:text-base">
              {consultationPageContent.deliverables.intro}
            </p>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-[#636363] md:text-base">
              {consultationDeliverables.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#168DCA] bg-transparent text-[9px] md:h-5 md:w-5 md:text-[11px] font-semibold leading-none text-[#168DCA]">
                    &#10003;
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-10 md:py-16">
          <h2 className="font-raleway text-[26px] font-medium tracking-wide text-black md:text-[35px]">
            {consultationPageContent.industriesTitle}
          </h2>
          <div className="mt-5 space-y-3">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {consultationIndustries.slice(0, 4).map(([label, image]) => (
                <div
                  key={label}
                  className="flex min-h-[64px] items-center gap-3 rounded-full bg-[#f5f5f5] px-3 pr-5 md:min-h-[76px]"
                >
                  <Image
                    src={"/" + image}
                    alt=""
                    width={58}
                    height={58}
                    className="h-10 w-10 shrink-0 rounded-full object-cover md:h-16 md:w-16"
                  />
                  <span className="font-raleway text-[10px] font-medium text-black md:text-sm">
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {consultationIndustries.slice(4).map(([label, image]) => (
                <div
                  key={label}
                  className="flex min-h-[64px] items-center gap-3 rounded-full bg-[#f5f5f5] px-3 pr-5 md:min-h-[76px]"
                >
                  <Image
                    src={"/" + image}
                    alt=""
                    width={58}
                    height={58}
                    className="h-10 w-10 shrink-0 rounded-full object-cover md:h-16 md:w-16"
                  />
                  <span className="font-raleway text-[10px] font-medium text-black md:text-sm">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>{" "}
        </section>

        <section className="relative mt-8 min-h-[260px] overflow-hidden rounded-[12px] px-6 py-16 text-center text-white md:min-h-[411px] md:px-[126px] md:py-[100px]">
          <Image
            src={consultationImages.ctaBackground}
            alt=""
            fill
            sizes="(max-width: 768px) 90vw, 1560px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10">
            <h2 className="font-raleway text-[30px] font-medium md:text-[35px]">
              {consultationPageContent.cta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-5xl text-sm md:leading-6 md:text-base ">
              {consultationPageContent.cta.description}
            </p>
            <ContactCtaButton className="mt-5 rounded-md bg-white px-4 md:px-6 py-3 text-xs md:text-sm text-black">
              {consultationPageContent.cta.buttonLabel}
            </ContactCtaButton>
          </div>
        </section>

        <section className="py-10 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-raleway text-[26px] font-medium tracking-wide text-black md:text-[35px]">
                {consultationPageContent.standards.title}
              </h2>
              <p className="mt-5 text-sm leading-6 text-[#636363] md:text-base">
                {consultationPageContent.standards.intro}
              </p>
              <p className="mt-5 text-sm leading-6 text-[#636363] md:text-base md:leading-7">
                {consultationPageContent.standards.lead}
              </p>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-[#636363] md:text-base md:leading-6">
                {consultationStandards.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#168DCA] text-[9px] font-semibold leading-none text-[#168DCA] md:h-5 md:w-5 md:text-[11px]">
                      &#10003;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-6 text-[#636363] md:text-base md:leading-7">
                {consultationStandardsDescription}
              </p>
            </div>
            <div className="relative aspect-[650/500] overflow-hidden rounded-[10px]">
              <Image
                src={consultationImages.standards}
                alt="Airfield lighting"
                fill
                sizes="(max-width: 768px) 90vw, 650px"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </div>

      <section className="bg-[#151515] py-16 text-white md:py-[80px]">
        <div className="mx-auto w-[90%] 2xl:max-w-350">
          <h2 className="font-raleway text-[30px] font-medium md:text-[35px]">
            {consultationPageContent.compliance.title}
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-white md:text-base md:leading-7">
            {consultationPageContent.compliance.description}
          </p>
          <div className="mt-10">
            <div className="md:hidden">
              <article className="min-h-[261px] rounded-[14px] border border-white/30 p-5">
                <Image
                  src={`/${activeCompliance[2]}`}
                  alt=""
                  width={44}
                  height={44}
                  className="h-12 w-12 object-contain brightness-0 invert"
                />
                <h3 className="mt-5 font-raleway text-[20px] font-medium">
                  {activeCompliance[0]}
                </h3>
                <p className="mt-4 text-sm leading-6 text-white">
                  {activeCompliance[1]}
                </p>
              </article>
              <div
                className="mt-5 flex justify-center gap-2"
                aria-label="Compliance cards"
              >
                {consultationCompliance.map(([title], index) => (
                  <button
                    key={title}
                    type="button"
                    aria-label={`Show ${title}`}
                    aria-current={activeComplianceIndex === index}
                    onClick={() => setActiveComplianceIndex(index)}
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${activeComplianceIndex === index ? "bg-white" : "bg-white/40"}`}
                  />
                ))}
              </div>
            </div>
            <div className="hidden gap-4 sm:grid-cols-2 lg:grid-cols-4 md:grid">
              {consultationCompliance.map(([title, description, icon]) => (
                <article
                  key={title}
                  className="min-h-[261px] rounded-[14px] border border-white/30 p-5 md:p-[18px]"
                >
                  <Image
                    src={`/${icon}`}
                    alt=""
                    width={44}
                    height={44}
                    className="h-10 w-10 object-contain brightness-0 invert md:h-[68px] md:w-[68px]"
                  />
                  <h3 className="mt-5 font-raleway text-[20px] font-medium md:text-[20px]">
                    {title}
                  </h3>
                  <p className="mt-4 text-[13px] leading-6 text-white ">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
