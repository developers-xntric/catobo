import Image from "next/image";
import { AboutData } from "@/data/types";

export default function EngineeringExcellence({ data }: { data: AboutData['engineeringExcellence'] }) {
    const { badge, title, paragraphs, image } = data;

    return (
        <section className="w-full bg-white pt-10 pb-20 overflow-hidden">
            <div className="2xl:max-w-360 w-[90%] mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 relative h-[400px] md:h-[690px] w-full rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <div className="flex items-center gap-2 mb-6 border border-gray-200 px-3 py-2 rounded-full w-fit mx-auto lg:mx-0">
                            <span className="w-2 h-2 rounded-full bg-[#168DCA]" />
                            <span className="text-xs font-medium text-[#000000]">
                                {badge}
                            </span>
                        </div>
                        <h2 className="text-[28px] md:text-[35px] font-medium text-[#111111] leading-[1.2] mb-5">
                            {title}
                        </h2>
                        <div className="space-y-3 text-[#636363] text-sm md:text-[15px] leading-relaxed">
                            {paragraphs}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
