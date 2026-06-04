'use client';

import Image from 'next/image';
import { PortfolioData } from '@/data/types';

interface PortfolioContentProps {
    data?: PortfolioData;
}

const defaultAssociates = [
    { id: 1, title: 'Passage of Chains' },
    { id: 2, title: 'Distinguished Marks' },
    { id: 3, title: 'The status of the companies' },
    { id: 4, title: 'The future of the market' },
    { id: 5, title: 'Training' },
    { id: 6, title: 'Management' },
];

export default function PortfolioContent({ data }: PortfolioContentProps) {
    const d = data || {
        associateImage: "/portfolio/poseidon.png",
        associateTitle: "Associated Companies & Affiliates",
        associateDescription: "AirPoseidon strives to foster long-term relationships with its customers in an effort to attain their true satisfaction by providing a wide spectrum of services in the Aviation sector.\nWe offer the below services (either directly/in conjunction with our associates & based on geographical locations).\nPlease click on the logo for further information.",
        associates: defaultAssociates,
    } as PortfolioData;

    return (
        <section className="w-full py-12 ">
            <div className="2xl:max-w-[1440px] w-[90%] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                    <div className="flex justify-center w-full h-full ">
                        <div className="w-full h-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="relative w-full h-full min-h-[300px]">
                                <Image
                                    src={d.associateImage}
                                    alt="Poseidon"
                                    fill
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 bg-[#FAFAFA] border border-[#E6E6E6] rounded-xl p-2 md:p-5">
                        <div>
                            <h2 className="text-[20px] md:text-[30px] lg:text-[35px] text-[#000000] font-medium mb-2 leading-12 w-[90%]">
                                {d.associateTitle}
                            </h2>
                        </div>

                        <p className="text-[#636363] leading-relaxed text-[16px] font-light whitespace-pre-line">
                            {d.associateDescription}
                        </p>

                        <div className="space-y-2">
                            {d.associates.map((associate) => (
                                <div
                                    key={associate.id}
                                    className="flex items-start gap-3 group"
                                >
                                    <Image src="/portfolio/tick.png" alt="" width={16} height={16} className="mt-1" />
                                    <span className="text-[#636363] text-[16px] ">
                                        {associate.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
