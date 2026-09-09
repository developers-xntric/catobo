"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { ExplosionProofData } from "@/data/types";
import {
  explosionProofIndustrialSection,
  explosionProofIntro,
  explosionProofProductSections,
  ExplosionProofProductSection,
} from "@/data/engineering/explosion-proof-data";

interface ExplosionProofContentProps {
  data: ExplosionProofData;
}

function Badge({ children }: { children: string }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-[10px] text-black md:text-[12px]">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#168DCA] to-[#0F2453]" />
      {children}
    </div>
  );
}

function FeatureList({ features }: { features: string[] }) {
  return (
    <div className={`grid gap-x-8 gap-y-2 ${features.length > 3 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
      {features.map((feature) => (
        <div key={feature} className="flex items-start gap-3 text-[14px] leading-relaxed text-[#636363]">
          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#1475AF] bg-white">
            <Check className="h-3 w-3 text-[#1475AF]" strokeWidth={2.5} />
          </span>
          <span>{feature}</span>
        </div>
      ))}
    </div>
  );
}

function ProductSection({ section }: { section: ExplosionProofProductSection }) {
  return (
    <section id={section.id} className="mb-10 scroll-mt-8">
      <h2 className="mb-3 text-[28px] font-medium leading-tight tracking-wide text-black 2xl:text-[32px]">
        {section.title}
      </h2>
      <h3 className="mb-2 text-[16px] font-medium leading-tight tracking-wide text-black 2xl:text-[20px]">
        {section.subtitle}
      </h3>
      <p className="mb-5 text-[14px] leading-[1.78] text-[#636363]">{section.description}</p>

      {section.features.length > 0 && (
        <div className="mb-8">
          {section.featuresHeading && (
            <h4 className="mb-4 text-[22px] font-medium tracking-wide text-black 2xl:text-[25px]">
              {section.featuresHeading}
            </h4>
          )}
          <FeatureList features={section.features} />
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-[5fr_3fr]">
        <div className="relative h-64 overflow-hidden rounded-[8px] md:rounded-[14px] bg-[#F0F0F0] sm:h-72 md:h-[367px]">
          <Image src={section.images[0]} alt={`${section.title} installation`} fill className="object-cover" sizes="(min-width: 768px) 62vw, 90vw" />
        </div>
        <div className="relative h-64 overflow-hidden rounded-[8px] md:rounded-[14px] bg-[#E6E6E6] sm:h-72 md:h-[367px]">
          <Image src={section.images[1]} alt={`${section.title} product`} fill className="object-cover mix-blend-multiply" sizes="(min-width: 768px) 38vw, 90vw" />
        </div>
      </div>
    </section>
  );
}

function IndustrialPowerSection() {
  return (
    <section id={explosionProofIndustrialSection.id} className="mb-16 scroll-mt-8">
      <div className="grid items-start gap-8 xl:grid-cols-[1.02fr_0.8fr]">
        <div>
          <Badge>{explosionProofIndustrialSection.badge}</Badge>
          <h2 className="mb-4 text-[28px] font-medium leading-tight tracking-wide text-black 2xl:text-[32px]">
            {explosionProofIndustrialSection.title}
          </h2>
          <div className="space-y-4 text-[14px] leading-[1.78] text-[#636363]">
            {explosionProofIndustrialSection.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-[18px] font-medium tracking-wide text-black 2xl:text-[20px]">
            {explosionProofIndustrialSection.featuresHeading}
          </h3>
          <div className="space-y-2">
            {explosionProofIndustrialSection.featureCards.map((card) => (
              <div key={card.title} className="rounded-[10px] bg-[#F3F3F3] p-3">
                <h4 className="text-[14px] font-medium text-black">{card.title}</h4>
                <p className="mt-1 text-[11px] leading-relaxed text-[#636363]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid items-stretch gap-8 xl:grid-cols-[1.02fr_0.8fr]">
        <div className="relative min-h-[320px] w-full self-stretch overflow-hidden rounded-[14px] bg-[#E6E6E6] ">
          <Image src={explosionProofIndustrialSection.image} alt="Industrial power connection systems" fill className="object-cover" sizes="(min-width: 1280px) 48vw, 90vw" />
        </div>
        <div>
          <Badge>{explosionProofIndustrialSection.imageRowContent.badge}</Badge>
          <h2 className="mb-4 text-[28px] font-medium leading-tight tracking-wide text-black 2xl:text-[32px]">
            {explosionProofIndustrialSection.imageRowContent.title}
          </h2>
          <div className="space-y-2 md:space-y-3.5 text-[13px] md:text-[14px] leading-relaxed text-[#636363]">
            {explosionProofIndustrialSection.imageRowContent.points.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#1475AF] bg-white">
                  <Check className="h-3 w-3 text-[#1475AF]" strokeWidth={2.5} />
                </span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default function ExplosionProofContent({ data }: ExplosionProofContentProps) {
  void data;

  return (
    <div className="min-w-0 max-w-240 flex-1 mt-7 md:mt-0">
      <section id="section-0" className="mb-16 scroll-mt-8">
        <div className="grid items-stretch gap-7 xl:grid-cols-[1.02fr_1fr]">
          <div className="relative order-2 min-h-[320px] overflow-hidden rounded-[15px] bg-gray-100 xl:order-1 xl:min-h-0">
            <Image src={explosionProofIntro.image} alt="Industrial explosion proof systems" fill priority className="object-cover" sizes="(min-width: 1280px) 48vw, 90vw" />
          </div>
          <div className="order-1 xl:order-2">
            <Badge>{explosionProofIntro.badge}</Badge>
            <h1 className="mb-5 text-[28px] font-medium leading-tight tracking-wide text-black 2xl:text-[32px]">
              {explosionProofIntro.title}
            </h1>
            <div className="space-y-4 text-[14px] leading-[1.78] text-[#636363]">{explosionProofIntro.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </div>
        </div>
      </section>

      <IndustrialPowerSection />
      {explosionProofProductSections.map((section) => (
        <ProductSection key={section.id} section={section} />
      ))}
    </div>
  );
}