import GradButton from "@/components/ui/grad-button";
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

            <GradButton href="/" size="md">
              {ctaText}
            </GradButton>
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
