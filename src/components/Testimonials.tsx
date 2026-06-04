"use client";

import Image from "next/image";
import { useState } from "react";
import Button from '@/components/ui/grad-button';
import Badge from './ui/badge';
import { HomeData } from "@/data/types";

export default function Testimonials({ data }: { data?: HomeData['testimonials'] }) {
    if (!data) return null;
    const { badge, title, description, items } = data;
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleExpand = (id: number) => {
        setExpandedId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="py-16 bg-white">
            <div className="2xl:max-w-[1440px] w-[90%]  mx-auto space-y-3">
                <Badge text={badge} variant='black' />
                <h2 className="text-[20px] md:text-3xl lg:text-[40px] font-medium leading-[1.2] text-balance text-[#000000] text-center ">
                    {title}
                </h2>
                <p className="text-base md:text-lg text-[#636363] mb-6 max-w-[80%] text-center mx-auto tracking-normal">
                    {description}
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-md bg-[#1E1E1E] p-6 text-white flex flex-col justify-between h-[295px]"
                        >
                            <h3 className="text-[17px] font-semibold mb-4">
                                {item.company}
                            </h3>

                            <div>
                                <p
                                    className={`text-[14px] leading-relaxed text-[#C6CDD1] ${expandedId !== item.id ? "line-clamp-4" : ""}`}
                                >
                                    "{item.quote}"
                                </p>

                                <button
                                    onClick={() => toggleExpand(item.id)}
                                    className="mt-2 self-start text-[14px] font-medium text-[#1EA7FF] underline"
                                >
                                    {expandedId === item.id ? "Show Less" : "Read More"}
                                </button>

                                <div className="mt-4 flex items-center gap-3 ">
                                    <Image
                                        src={item.image}
                                        alt={item.author}
                                        width={28}
                                        height={28}
                                        className="rounded-md object-cover"
                                    />

                                    <div>
                                        <p className="text-[13px] font-light uppercase text-[#cdd6db]">
                                            {item.author}
                                        </p>
                                        <p className="text-[12px] text-gray-400">
                                            {item.designation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <Button
                        href="/testimonials"
                        className="text-white font-medium py-3 px-10 transition-colors rounded-lg disabled:opacity-50 mt-5"
                    >
                        View All Testimonals
                    </Button>
                </div>
            </div>
        </section>
    );
}
