import Image from "next/image";
import { AboutData } from "@/data/types";

export default function OurApproach({ data }: { data: AboutData['ourApproach'] }) {
    const { badge, title, description, steps } = data;

    return (
        <section className="w-full bg-[#0E0E0E] py-16 text-white">
            <div className="2xl:max-w-360 w-[90%] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-stretch gap-10 mb-10 h-full">
                    <div className="lg:w-[50%] w-full">
                        <div className="flex items-center gap-2 mb-6 border border-white/20 px-3 py-2 rounded-full w-fit bg-white/5 mx-auto lg:mx-0">
                            <span className="w-2 h-2 rounded-full bg-[#168DCA]" />
                            <span className="text-xs font-medium text-white/80">
                                {badge}
                            </span>
                        </div>
                        <h2 className="text-[28px] md:text-[35px] font-medium leading-[1.2] mb-6">
                            {title}
                        </h2>
                        <p className="text-white text-sm md:text-base max-w-2xl font-normal ">
                            {description}
                        </p>
                    </div>
                    <div className="lg:w-[50%] relative min-h-[300px] w-full rounded-2xl overflow-hidden border border-white/10 group">
                        <Image
                            src="/engr-solutions/about/approach.png"
                            alt="Approach"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {steps.map((item, i) => (
                        <div key={i} className="p-5 border border-[#565555] rounded-2xl transition-all duration-300 group">
                            <div className="mb-8 flex items-center transition-colors">
                                <Image src={item.icon} alt={item.title} width={2000} height={2000} className="w-16 h-16 " />
                            </div>
                            <h3 className="text-[20px] font-semibold mb-4 text-white/90 group-hover:text-[#168DCA] transition-colors">{item.title}</h3>
                            <p className="text-[#A6A6A6] text-[14px] leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

