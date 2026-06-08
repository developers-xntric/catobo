"use client";

import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";
import Button from '@/components/ui/grad-button';
import Badge from './ui/badge';
import { HomeData } from "@/data/types";

export default function Testimonials({ data }: { data?: HomeData['testimonials'] }) {
    if (!data) return null;
    const { badge, title, description, items, buttonHref } = data;
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const [activeDot, setActiveDot] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const toggleExpand = (id: number) => {
        setExpandedId((prev) => (prev === id ? null : id));
    };

    const handleScroll = useCallback(() => {
        if (!scrollRef.current) return;
        const { scrollLeft } = scrollRef.current;
        const child = scrollRef.current.children[0] as HTMLElement;
        if (!child) return;
        const gap = 16;
        const cardWidth = child.offsetWidth;
        const idx = Math.round(scrollLeft / (cardWidth + gap));
        setActiveDot(Math.min(idx, items.length - 1));
    }, [items.length]);

    useEffect(() => {
        if (items.length <= 1) return;
        const timer = setInterval(() => {
            if (!scrollRef.current) return;
            const { scrollLeft } = scrollRef.current;
            const child = scrollRef.current.children[0] as HTMLElement;
            if (!child) return;
            const gap = 16;
            const cardWidth = child.offsetWidth;
            const currentIdx = Math.round(scrollLeft / (cardWidth + gap));
            const nextIndex = (currentIdx + 1) % items.length;
            scrollRef.current.scrollTo({
                left: nextIndex * (cardWidth + gap),
                behavior: 'smooth',
            });
        }, 2500);
        return () => clearInterval(timer);
    }, [items.length]);

    return (
        <section className="py-16 bg-white">
            <div className="2xl:max-w-[1440px] w-[90%]  mx-auto space-y-3 flex flex-col items-center justify-center">
                <Badge text={badge} variant='black' />
                <h2 className="text-[20px] md:text-3xl lg:text-[40px] font-medium leading-[1.2] text-balance text-[#000000] text-center ">
                    {title}
                </h2>
                <p className="text-[14px] md:text-lg text-[#636363] mb-6 max-w-full sm:max-w-[80%] px-4 sm:px-0 text-center mx-auto tracking-normal">
                    {description}
                </p>
                <div ref={scrollRef} onScroll={handleScroll} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible w-full">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-md bg-[#1E1E1E] p-6 text-white flex flex-col justify-between min-h-[250px] md:h-[295px] shrink-0 w-[85%] snap-center md:w-auto"
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
                <div className="flex justify-center gap-2 mt-4 md:hidden">
                    {items.map((_, i) => (
                        <span
                            key={i}
                            className={`w-2 h-2 rounded-full transition-colors ${i === activeDot ? 'bg-[#168DCA]' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
                <div className="flex justify-center">
                    <Button
                        href={buttonHref}
                        className="text-white font-medium py-3 px-10 transition-colors rounded-lg disabled:opacity-50 mt-5"
                    >
                        View All Testimonals
                    </Button>
                </div>
            </div>
        </section>
    );
}
