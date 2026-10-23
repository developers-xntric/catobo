import Image from "next/image";
import GradButton from "@/components/ui/grad-button";
import { ContactCtaButton } from "@/components/ContactCtaButton";
import { HeroData } from "@/data/types";

export default function Hero({ data }: { data: HeroData }) {
  const {
    title,
    subtitle,
    additionalParagraph,
    highlightText,
    buttonText,
    backgroundImage,
    backgroundVideo,
    partnerLogos = [],
  } = data;

  return (
    <>
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden shadow-none">
      <div className="absolute inset-0 z-0">
        {backgroundVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={backgroundImage}
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${backgroundImage}")` }}
          />
        )}
      </div>
      {backgroundVideo && (
        <div className="pointer-events-none absolute inset-0 z-0 bg-[#000]/45" />
      )}

      <div
        className={` ${backgroundVideo ? "relative z-10 flex-1 flex flex-col justify-center 2xl:max-w-[1400px] w-[90%] mx-auto  py-16 md:py-24 mt-16 2xl:mt-22" : "relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-16 md:py-24 mt-16 md:mt-10"}`}
      >
        
        <div className={`${backgroundVideo ? "max-w-[750px]" : ""}  `}>
          <h1 className="max-w-6xl text-3xl md:text-[40px] lg:text-[50px] font-medium leading-[1.1] tracking-tight text-white mb-3">
            {title}
          </h1>
          {subtitle && (
            <p className="max-w-5xl text-[14px] md:text-lg text-white mb-3">
              {subtitle}
            </p>
          )}
          {additionalParagraph && (
            <p className="max-w-5xl text-[14px] md:text-lg text-white mb-3">
              {additionalParagraph}
            </p>
          )}
          {highlightText && (
            <p className="max-w-5xl text-[14px] font-bold md:text-lg text-white mb-6">
              {highlightText}
            </p>
          )}
        </div>
        <div className={`flex flex-col sm:flex-row ${backgroundVideo ? "md:items-center" : "tems-center"} i gap-4`}>
          <ContactCtaButton className="group inline-flex items-center justify-center rounded-md transition-all duration-300 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 px-8 py-3.5 text-base bg-linear-to-l from-[#0F2453] to-[#168DCA] text-white hover:border hover:scale-105 hover:bg-none hover:text-[#168DCA] hover:border-[#168DCA] hover:shadow-xl hover:shadow-[#168DCA]/20 active:scale-95">
            {buttonText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 group-hover:translate-x-0.5 transition-transform duration-300"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </ContactCtaButton>
        </div>
      </div>

      {partnerLogos.length > 0 && (
        <div aria-label="Technology partners" className="marquee-logo-viewport relative z-10 mx-auto w-[90%] max-w-350 overflow-hidden py-5 select-none">
          <div className="marquee-track flex items-center gap-5">
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, i) => (
              <div key={`${logo.file}-${i}`} title={logo.name} className="flex h-15 w-[var(--marquee-logo-width)] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white bg-white/10 px-4 py-3 shadow-md shadow-black/20 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/15 md:h-24 2xl:h-28">
                <Image src={`/engr-solutions/logo/${logo.file}`} alt={logo.name} width={100} height={50} className={`h-full ${logo.name === "Partner 1" ? "w-[75%]" : "w-[95%]"} object-contain`} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
    </>
  );
}
