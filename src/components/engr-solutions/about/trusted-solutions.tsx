import { AboutData } from "@/data/types";

export default function TrustedSolutions({ data }: { data: AboutData['trustedSolutions'] }) {
    const { badge, title, description, cards } = data;

    return (
        <section className="w-full bg-white py-16">
            <div className="2xl:max-w-360 w-[90%] mx-auto">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/2">
                        <div className="flex items-center gap-2 mb-6 border border-gray-200 px-3 py-2 rounded-full w-fit mx-auto lg:mx-0">
                            <span className="w-2 h-2 rounded-full bg-[#168DCA]" />
                            <span className="text-xs font-medium text-[#000000]">
                                {badge}
                            </span>
                        </div>
                        <h2 className="text-[28px] md:text-[35px] font-medium text-[#111111] leading-[1.2] mb-4">
                            {title}
                        </h2>
                        <p className="text-[#636363] text-sm md:text-base leading-relaxed">
                            {description}
                        </p>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {cards.map((card, index) => (
                            <div key={index} className="bg-[#F3F3F3] p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col items-start">
                                <div className="w-14 h-14 flex items-center justify-center mb-6">
                                    {card.icon}
                                </div>
                                <h3 className="text-[20px] font-semibold text-[#111111] mb-4">{card.title}</h3>
                                <p className="text-[#636363] text-sm ">
                                    {card.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
