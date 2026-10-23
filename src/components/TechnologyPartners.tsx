"use client";

import Image from "next/image";

interface TechnologyPartnersProps {
  data?: {
    badge?: string;
    title?: string;
    description?: any[];
    logos?: Array<{
      _key?: string;
      logo?: {
        asset?: {
          url?: string;
        };
        alt?: string;
      };
      name?: string;
      link?: string;
    }>;
  };
  logoCount?: number;
  logosBasePath?: string;
  cardDescriptions?: string[];
}

export default function TechnologyPartners({
  data,
  logoCount = 49,
  logosBasePath = "/technologypartner",
  cardDescriptions,
}: TechnologyPartnersProps) {
  const badge = data?.badge || "Our Technology Partners";
  const title =
    data?.title || "Strategic Technology Partnerships That Deliver Results";
  const description = data?.description;

  const defaultDescription =
    "Partnering with the best technology vendors in the world, Americana Computers is among the top digital transformation companies in UAE, delivering best-in-class enterprise solutions. Using vendor-certified expertise and technology consulting, we design innovative technology ecosystems that optimize businesses for operational efficiency and enable sustainable growth.";

  const logos = Array.from({ length: logoCount }, (_, i) => ({
    src: `${logosBasePath}/${i + 1}.png`,
    alt: `Partner ${i + 1}`,
    key: i.toString(),
    description: cardDescriptions?.[i],
  }));

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="2xl:max-w-350 w-[90%] mx-auto flex flex-col md:items-center">
        {/* Badge */}
        <div className="flex items-center gap-2 mb-3 md:mb-6 bg-white border border-gray-200 px-4 py-2 rounded-full w-fit md:mx-auto">
          <span className="w-2 h-2 rounded-full bg-[#168DCA]" />
          <span className="text-xs font-medium text-black tracking-normal lg:tracking-wide">
            {badge}
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[20px] lg:text-[40px] font-medium leading-[1.2] text-[#0a0f1e] md:text-center mb-2 md:mb-4">
          {title}
        </h2>

        {/* Paragraph */}
        {description && description.length > 0 ? (
          <div className="text-[#636363] leading-relaxed text-[15px] md:text-[16px] font-light mb-4 md:mb-7">
            {description.map((block: any, idx: number) => (
              <p key={idx}>
                {block.children?.map((child: any) => child.text).join("")}
              </p>
            ))}
          </div>
        ) : (
          <p className="text-[#636363] leading-relaxed text-[16px] font-light">
            {defaultDescription}
          </p>
        )}

        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-3 lg:gap-4 w-full mb-6 md:mb-0 ">
          {logos.map((logo) => (
            <div
              key={logo.key}
              className={`flex w-[calc(50%_-_0.5rem)] items-center justify-center rounded-[10px] border border-[#E6E6E6] border-r border-r-[#D9D9D9] bg-[#FAFAFA] p-2.5 md:p-4 transition-shadow hover:shadow-md sm:w-[calc(33.33%_-_0.5rem)] md:w-[calc(25%_-_0.75rem)] lg:w-[calc(20%_-_0.8rem)] ${logo.description ? "min-h-[145px] flex-col" : "aspect-[2.2/1]"}`}
            >
              <div
                className={`relative flex w-full items-center justify-center ${
                  logo.description ? "h-14 shrink-0" : "h-full"
                } ${logo.key === logos[0]?.key && logos[0]?.description ? "md:!w-36" : ""}`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
              {logo.description && (
                <p className="mt-3 text-center text-[10px] md:text-[12px] md:leading-relaxed text-[#636363]">
                  {logo.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
