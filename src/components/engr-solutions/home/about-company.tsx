import Image from "next/image";
import GradButton from "@/components/ui/grad-button";
import Link from "next/link";

export default function AboutCompany() {
  return (
    <section className="w-full bg-white py-16">
      <div className="2xl:max-w-350 w-[90%] mx-auto h-full">
        <div className="relative mb-16 py-16 px-4 rounded-xl overflow-hidden text-center">
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url("/engr-solutions/safely-bg.png")',
              }}
            />
          </div>
          <div className="relative z-10  mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium leading-[1.2] text-white mb-4">
              Safety Without Compromise.
            </h2>
            <p className="text-base md:text-lg text-white mb-6 max-w-[80%] mx-auto">
              Catobo integrates rigorous international compliance ICAO, FAA,
              IEC, and local regulations into airfield lighting, vertiport &
              heliport, lightning protection, and cable systems, delivering
              risk-mitigated excellence from design to maintenance.
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-[5px] bg-white px-7 py-3 text-sm font-medium text-[#000000] shadow-lg shadow-white/10
                         hover:bg-transparent hover:text-white hover:border hover:border-white hover:shadow-xl hover:shadow-white/20 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              Start Your Consultation
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row  gap-10 md:gap-2">
          <div className="w-full lg:w-[35%]">
            <div className="relative w-full rounded-[15px] overflow-hidden">
              <Image
                src="/engr-solutions/about.png"
                alt="About Catobo Engineering"
                width={2000}
                height={2000}
                className="object-cover md:h-full h-60"
              />
            </div>
          </div>

          <div className="w-full lg:w-[65%] flex flex-col items-start justify-between xl:pl-8 h-full">
            <div className="flex items-center gap-2 mb-4 border border-gray-200 px-3 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#168DCA]" />
              <span className="text-xs font-medium text-[#000000] tracking-widest">
                About Our Company
              </span>
            </div>

            <h2 className="text-[20px] md:text-[30px] lg:text-[35px] font-medium leading-[1.2] text-balance text-[#000] mb-6 text-center">
              Evolution Through Expertise.
            </h2>

            <div className="space-y-2 md:space-y-5 text-[14px] md:text-[16px] 2xl:text-[18px] leading-relaxed text-[#636363] mb-10 ">
              <p>
                Company started in 2007, Catobo emerged amid the demanding ME
                military airfields and African airport expansions, tackling
                complex airfield lighting and helideck installations under
                stringent timelines. This foundation propelled growth into
                healthcare infrastructure optimizations and elite royal
                commissions, where lightning protection and cable systems proved
                pivotal.
              </p>
              <p>
                Today, as a one-stop partner, Catobo delivers end-to-end
                precision from initial consultation through design, supply,
                installation, certification, and sustained maintenance across
                continents, transforming high stakes visions into resilient
                realities.
              </p>
            </div>

            <div className="flex flex-row items-start sm:items-center gap-8">
              <GradButton href="/" size="md">
                More About Us
              </GradButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
