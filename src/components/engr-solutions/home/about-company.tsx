import Image from "next/image";
import GradButton from "@/components/ui/grad-button";
import { ContactCtaButton } from "@/components/ContactCtaButton";
import { HomeData } from "@/data/types";

export default function AboutCompany({ data }: { data: HomeData['aboutCompany'] }) {
  const { badge, title, description, image, safelyBg, safelyTitle, safelyDesc, buttonHref } = data;

  return (
    <section className="w-full bg-white pb-6 md:pb-10 pt-16">
      <div className="2xl:max-w-350 w-[90%] mx-auto h-full">
        <div className="relative mb-16 py-16 px-4 rounded-xl overflow-hidden text-center">
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url("${safelyBg}")`,
              }}
            />
          </div>
          <div className="relative z-10 mx-auto">
            <h2 className="text-[22px] md:text-3xl lg:text-[35px] font-medium leading-[1.2] text-white mb-4">
              {safelyTitle}
            </h2>
            <p className="text-[14px] md:text-lg text-white mb-6 max-w-full sm:max-w-[80%] px-4 sm:px-0 mx-auto">
              {safelyDesc}
            </p>

            <ContactCtaButton
              className="group inline-flex items-center gap-2.5 rounded-[5px] bg-white px-7 py-3 text-sm font-medium text-[#000000] shadow-lg shadow-white/10
                         hover:bg-transparent hover:text-white hover:border hover:border-white hover:shadow-xl hover:shadow-white/20 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              Start Your Consultation
            </ContactCtaButton>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-10 items-stretch">
          <div className="w-full lg:w-[35%]">
            <div className="relative w-full h-full rounded-[15px] overflow-hidden min-h-[250px]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-[65%] flex flex-col justify-between xl:pl-8">
            <div>
              <div className="flex items-center gap-2 mb-4 border border-gray-200 px-3 py-2 rounded-full w-fit">
                <span className="w-2 h-2 rounded-full bg-[#168DCA]" />
                <span className="text-xs font-medium text-[#000000]">
                  {badge}
                </span>
              </div>

              <h2 className="text-[18px] md:text-3xl lg:text-[35px] font-medium leading-[1.2] text-balance text-[#000] mb-6">
                {title}
              </h2>

              <div className="space-y-2 md:space-y-5 text-[14px] md:text-[16px] 2xl:text-[18px] leading-relaxed text-[#636363] mb-10">
                {description}
              </div>
            </div>

            <div className="flex flex-row gap-8">
              <GradButton href={buttonHref} size="md">
                More About Us
              </GradButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
