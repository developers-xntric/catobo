import Image from 'next/image';
import GradButton from '@/components/ui/grad-button';
import { ContactCtaButton } from '@/components/ContactCtaButton';
import { HeroData } from '@/data/types';

export default function Hero({ data }: { data: HeroData }) {
  const { title, subtitle,buttonText, backgroundImage, partnerLogos = [] } = data;

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden shadow-none">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${backgroundImage}")` }}
        />
      </div>


      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-24">
        <h1 className="max-w-6xl text-3xl lg:text-[50px] xl:text-[50px] font-medium leading-[1.1] tracking-tight text-white mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-5xl text-base md:text-lg text-white mb-6">
            {subtitle}
          </p>
        )}


        <div className="flex flex-col sm:flex-row items-center gap-4">
          <ContactCtaButton className="group inline-flex items-center justify-center rounded-md transition-all duration-300 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 px-8 py-3.5 text-base bg-linear-to-l from-[#0F2453] to-[#168DCA] text-white hover:border hover:scale-105 hover:bg-none hover:text-[#168DCA] hover:border-[#168DCA] hover:shadow-xl hover:shadow-[#168DCA]/20 active:scale-95">
            {buttonText}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-0.5 transition-transform duration-300"><path d="m9 18 6-6-6-6" /></svg>
          </ContactCtaButton>
        </div>
      </div>

      <div className="relative z-10 bottom-6 overflow-hidden py-5 select-none">
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 h-full w-28 z-10"
            style={{
              background:
                "linear-gradient(to right, rgba(10,14,22,0.95) 0%, transparent 100%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 h-full w-28 z-10"
            style={{
              background:
                "linear-gradient(to left, rgba(10,14,22,0.95) 0%, transparent 100%)",
            }}
          />
          <div className="marquee-track flex items-center gap-5">
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, i) => (
              <div
                key={`${logo.file}-${i}`}
                title={logo.name}
                className="shrink-0 flex items-center justify-center w-35 md:w-45 h-15 md:h-20 rounded-xl border border-white bg-white/10 backdrop-blur-md shadow-md shadow-black/20 hover:border-white/40 hover:bg-white/15 hover:shadow-lg hover:shadow-black/30 transition-all duration-300 overflow-hidden px-4 py-3"
              >
                <Image
                  src={`/engr-solutions/logo/${logo.file}`}
                  alt={logo.name}
                  width={100}
                  height={50}
                  className="object-contain w-[95%] h-full opacity-85 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
