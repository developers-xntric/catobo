import { ContactCtaButton } from "@/components/ContactCtaButton";
import { HomeData } from "@/data/types";

export default function HowItWorks({ data }: { data: HomeData['howItWorks'] }) {
  const { badge, title, description, videoSrc, ctaText } = data;

  return (
    <section className="w-full bg-[#F8F8F8] pb-10">
      <div className="2xl:max-w-350 w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
          <div className="w-full lg:w-[30%] flex flex-col items-start justify-end">
            <div className="flex flex-col gap-2 ">
              <div className="flex w-fit items-center gap-2 mb-2 border border-gray-200 px-3 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#168DCA]" />
                <span className="text-xs font-medium text-[#000000] tracking-widest">
                  {badge}
                </span>
              </div>

              <h2 className="text-[20px] md:text-3xl lg:text-[35px] font-medium leading-[1.2] text-[#0a0f1e] mb-2">
                {title}
              </h2>

              <p className="text-[14px] md:text-[15px] leading-relaxed text-[#636363] mb-8">
                {description}
              </p>
            </div>

            <ContactCtaButton className="group inline-flex items-center justify-center rounded-md transition-all duration-300 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 px-6 py-2.5 text-sm bg-linear-to-l from-[#0F2453] to-[#168DCA] text-white hover:border hover:scale-105 hover:bg-none hover:text-[#168DCA] hover:border-[#168DCA] hover:shadow-xl hover:shadow-[#168DCA]/20 active:scale-95">
              {ctaText}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-0.5 transition-transform duration-300"><path d="m9 18 6-6-6-6" /></svg>
            </ContactCtaButton>
          </div>

          <div className="w-full lg:w-[70%] lg:pl-10">
            <div className="hidden md:block w-full rounded-[10px] overflow-hidden 2xl:h-100.5">
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <div className="block md:hidden w-full rounded-[10px] overflow-hidden md:h-[500px]">
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
