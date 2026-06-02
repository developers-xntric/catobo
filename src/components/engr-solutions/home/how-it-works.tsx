import GradButton from "@/components/ui/grad-button";

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#F8F8F8] py-16">
      <div className="2xl:max-w-350 w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
          <div className="w-full lg:w-[30%] flex flex-col items-start justify-end">
            <div className="flex flex-col gap-2 ">
              <div className="flex w-fit items-center gap-2 mb-2 border border-gray-200 px-3 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#168DCA]" />
                <span className="text-xs font-medium text-[#000000] tracking-widest">
                  How It Works
                </span>
              </div>

              <h2 className="text-[20px] md:text-3xl lg:text-[2.7vw] 2xl:text-[40px] font-medium leading-[1.2] text-[#0a0f1e] mb-2">
                Expertise-Driven Delivery
              </h2>

              <p className="text-[14px] md:text-[15px] leading-relaxed text-[#636363] mb-8 font-medium">
                Our dense knowledge team ensures reliable runway and helipad
                solutions via streamlined agile steps.
              </p>
            </div>

            <GradButton href="/" size="lg">
            Book Your Consultation
            </GradButton>
          </div>

          <div className="w-full lg:w-[70%] lg:pl-10">
            <div className="hidden md:block w-full rounded-[10px] overflow-hidden 2xl:h-100.5">
              <video
                src="/engr-solutions/steps.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <div className="block md:hidden w-full rounded-[10px] overflow-hidden md:h-[500px]">
              <video
                src="/engr-solutions/steps-mobile.webm"
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
