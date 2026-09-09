"use client";

import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { CableTrunkingData } from "@/data/types";
import { CableTrunkingProductSection, productSections } from "@/data/engineering/cable-trunking-data";


function Badge({ children }: { children: string }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-[10px] md:text-[12px] text-black">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#168DCA] to-[#0F2453]" />
      {children}
    </div>
  );
}
function ProductSection({ section }: { section: CableTrunkingProductSection }) {
  if (section.layout === "support") {
    return (
      <section id={section.id} className="mb-16 scroll-mt-8">
        <div className="grid items-stretch gap-7 xl:grid-cols-[0.8fr_1fr]">
          <div className="relative min-h-[320px] overflow-hidden rounded-[10px] md:rounded-[15px] bg-gray-100 xl:min-h-0 order-2 xl:order-1">
            <Image
              src={section.images[0]}
              alt={section.title}
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 43vw, 90vw"
            />
          </div>
          <div className="order-1 xl:order-2">
            <Badge>{section.badge}</Badge>
            <h2 className="mb-5 text-[28px] font-medium leading-tight tracking-wide text-black 2xl:text-[32px]">
              {section.title}
            </h2>
            <div className="space-y-4 text-[14px] leading-[1.78] text-[#636363]">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={section.id} className="mb-16 scroll-mt-8">
      <Badge>{section.badge}</Badge>
      <h2
        className={`text-[28px] 2xl:text-[32px] mb-2 font-medium leading-tight tracking-wide text-black`}
      >
        {section.title}
      </h2>
      <div className="space-y-2 text-[14px]  text-[#636363]">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {section.subheading && (
        <div className="mt-5">
          <h3 className="mb-3 text-[20px] font-medium tracking-wide text-black">
            {section.subheading}
          </h3>
          <div className={`grid gap-x-8 gap-y-2 ${section.features && section.features.length > 3 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
            {section.features?.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 text-[14px] leading-relaxed text-[#636363]"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#1475AF] bg-white">
                  <Check className="h-3 w-3 text-[#1475AF]" strokeWidth={2.5} />
                </span>
                {feature}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-[5fr_3fr]">
        <div className="relative h-72 overflow-hidden rounded-[10px] md:rounded-[14px] bg-[#E6E6E6] md:h-[367px]">
          <Image
            src={section.images[0]}
            alt={section.title}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 62vw, 90vw"
          />
        </div>
        <div className="relative h-72 overflow-hidden rounded-[14px] bg-[#E6E6E6] md:h-[367px]">
          <Image
            src={section.images[1]}
            alt={`${section.title} product`}
            fill
            className="object-cover mix-blend-multiply"
            sizes="(min-width: 768px) 38vw, 90vw"
          />
        </div>
      </div>
    </section>
  );
}

const whyCards = [
  { title: "Flexible", description: "Components can be combined into a wide range of structural configurations.", key: "flexible", spanClass: "md:col-span-2", icon: "/cable-trunking/why-flexible.png" },
  { title: "Rigid", description: "Creates strong and stable support structures without on-site drilling or welding.", key: "rigid", spanClass: "md:col-span-2", icon: "/cable-trunking/why-rigid.png" },
  { title: "Adjustable", description: "Component positioning can be modified after installation.", key: "adjustable", spanClass: "md:col-span-2", icon: "/cable-trunking/why-adjustable.png" },
  { title: "Reusable", description: "Structures can be dismantled and reconfigured elsewhere.", key: "reusable", spanClass: "md:col-span-3", icon: "/cable-trunking/why-reusable.png" },
  { title: "Cost-Efficient", description: "High strength-to-weight performance and faster assembly help reduce installation effort.", key: "cost-efficient", spanClass: "md:col-span-3", icon: "/cable-trunking/why-cost-efficient.png" },
] as const;

function WhyCard({ card }: { card: (typeof whyCards)[number] }) {
  return (
    <div className={`rounded-[10px] bg-[#F3F3F3] p-4 ${card.spanClass}`}>
      <div
        className="mb-4 h-[40px] w-[40px] bg-gradient-to-r from-[#168DCA] to-[#0F2453]"
        style={{
          maskImage: `url(${card.icon})`,
          WebkitMaskImage: `url(${card.icon})`,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: "contain",
          WebkitMaskSize: "contain",
        }}
        aria-hidden="true"
      />
      <h3 className="text-[22px] font-medium text-black">{card.title}</h3>
      <p className="mt-1 text-[14px] leading-relaxed text-[#636363]">{card.description}</p>
    </div>
  );
}

function WhyItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % whyCards.length);
    }, 1500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="section-why-it-works" className="mb-16 md:mb-10">
      <h2 className="text-[25px] font-medium text-black">Why It Works</h2>
      <div className="mt-6 md:hidden">
        <WhyCard card={whyCards[activeIndex]} />
        <div className="mt-4 flex items-center justify-center gap-2" aria-label="Why It Works slides">
          {whyCards.map((card, index) => (
            <button
              key={card.key}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${card.title} card`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-2 rounded-full transition-all ${activeIndex === index ? "w-6 bg-[#168DCA]" : "w-2 bg-[#C9C9C9]"}`}
            />
          ))}
        </div>
      </div>
      <div className="mt-6 hidden gap-4 md:grid md:grid-cols-6">
        {whyCards.map((card) => (
          <WhyCard key={card.key} card={card} />
        ))}
      </div>
    </section>
  );
}
export default function CableTrunkingContent({
  data,
}: {
  data: CableTrunkingData;
}) {
  void data;
  return (
    <div className="min-w-0 max-w-240 flex-1">
      <section id="section-0" className="mb-16 scroll-mt-8">
        <div className="grid items-stretch gap-7 xl:grid-cols-[1.02fr_1fr]">
          <div className="relative order-2 min-h-[320px] overflow-hidden rounded-[15px] bg-gray-100 xl:order-1 xl:min-h-full">
            <Image
              src="/cable-trunking/figma-intro.png"
              alt="Cable containment systems"
              fill
              className="object-cover"
              priority
              sizes="(min-width: 1280px) 48vw, 90vw"
            />
          </div>
          <div className="order-1 xl:order-2">
            <Badge>Cable Containment Systems</Badge>
            <h1 className="mb-5 text-[28px] 2xl:text-[32px] font-medium leading-tight tracking-wide text-black">
              Built Around the Way Your Infrastructure Works
            </h1>
            <div className="space-y-4 text-[14px] leading-[1.78] text-[#636363]">
              <p>
                From enclosed trunking and ventilated cable trays to heavy-duty
                ladder systems and underfloor solutions, our cable containment
                range is engineered to support different loads, environments and
                installation requirements.
              </p>
              <p>
                Available across multiple materials and finishes, each system is
                designed to deliver dependable performance, installation
                flexibility and long-term protection.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="section-solutions" className="mb-12 scroll-mt-8">
        <h2 className="text-[28px] 2xl:text-[32px] font-medium leading-tight tracking-wide text-black">
          Our Cable Containment Solutions
        </h2>
      </section>
      {productSections.map((section) => (
        <React.Fragment key={section.id}>
          <ProductSection section={section} />
          {section.layout === "support" && <WhyItWorks />}
        </React.Fragment>
      ))}

    </div>
  );
}
