
import Image from "next/image";

export default function EngineeringExcellence() {
    return (
        <section className="w-full bg-white pt-10 pb-20 overflow-hidden">
            <div className="2xl:max-w-360 w-[90%] mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 relative h-[400px] md:h-[690px] w-full rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/engr-solutions/about/about.png"
                            alt="Engineering Excellence"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <div className="flex items-center gap-2 mb-6 border border-gray-200 px-3 py-2 rounded-full w-fit">
                            <span className="w-2 h-2 rounded-full bg-[#168DCA]" />
                            <span className="text-xs font-medium text-[#000000]">
                                About Us
                            </span>
                        </div>
                        <h2 className="text-[28px] md:text-[35px] font-medium text-[#111111] leading-[1.2] mb-5">
                            Engineering Excellence That Powers Progress
                        </h2>
                        <div className="space-y-3 text-[#636363] text-sm md:text-[15px] leading-relaxed">
                            <p>
                                Company started in 2007 of industry presence, Catobo has grown into a highly internationalized engineering and technical solutions group. We support critical industries by enhancing productivity, safety, and sustainability through well-integrated systems and expert-led execution.
                            </p>
                            <p>
                               Our strength lies in a unique management approach, deep technical knowledge, and extensive global experience across diverse business activities. These elements form the foundation of our operational success what we call our Nucleus for Success. Guided by a forward-thinking philosophy, Catobo continuously develops, integrates, and applies knowledge, information, and technology to meet evolving industry demands and improve modern operational environments.
                            </p>
                            <p>
                             We deliver end-to-end solutions across key domains, including cable containment systems, aircraft warning lights, airfield lighting, helideck and helipad lighting systems, lightning protection systems, and industrial explosion-proof products.
                            </p>
                            <p>
                                Backed by a strong regional presence and a global engineering network, our teams provide responsive local support while maintaining international standards of quality and compliance. With a diversified portfolio and a strong regional footprint, Catobo continues to build trusted partnerships across industries worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
