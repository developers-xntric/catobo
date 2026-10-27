import { ContactCtaButton } from "@/components/ContactCtaButton";
import { HomeData } from "@/data/types";

export default function AboutCompany({
  data,
}: {
  data: HomeData["aboutCompany"];
}) {
  const {
    badge,
    title,
    description,
    image,
    safelyBg,
    safelyTitle,
    safelyDesc,
    safelyCtaText,
    buttonHref,
  } = data;

  return (
    <section className="w-full bg-white pb-2 md:pb-1 pt-16">
      <div className="2xl:max-w-350 w-[90%] mx-auto h-full">
        <div className="relative  py-16 px-4 rounded-xl overflow-hidden text-center">
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
            <p className="text-[14px] md:text-base text-white mb-6 max-w-full lg:max-w-[90%] px-4 sm:px-0 mx-auto">
              {safelyDesc}
            </p>

            <ContactCtaButton
              className="group inline-flex items-center gap-2.5 rounded-[5px] bg-white px-4 md:px-7 py-3 text-[11px] md:text-sm font-medium text-[#000000] shadow-lg shadow-white/10
                         hover:bg-transparent hover:text-white hover:border hover:border-white hover:shadow-xl hover:shadow-white/20 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              {safelyCtaText}
            </ContactCtaButton>
          </div>
        </div>

        
       
      </div>
    </section>
  );
}
