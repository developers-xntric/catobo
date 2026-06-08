'use client'

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { AboutData } from "@/data/types";

export default function OurApproach({ data }: { data: AboutData['ourApproach'] }) {
    const { badge, title, description, steps } = data;
    const [activeDot, setActiveDot] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleScroll = useCallback(() => {
        if (!scrollRef.current) return;
        const { scrollLeft } = scrollRef.current;
        const child = scrollRef.current.children[0] as HTMLElement;
        if (!child) return;
        const gap = 20;
        const cardWidth = child.offsetWidth;
        const idx = Math.round(scrollLeft / (cardWidth + gap));
        setActiveDot(Math.min(idx, steps.length - 1));
    }, [steps.length]);

    useEffect(() => {
        if (steps.length <= 1) return;
        const timer = setInterval(() => {
            if (!scrollRef.current) return;
            const { scrollLeft } = scrollRef.current;
            const child = scrollRef.current.children[0] as HTMLElement;
            if (!child) return;
            const gap = 20;
            const cardWidth = child.offsetWidth;
            const currentIdx = Math.round(scrollLeft / (cardWidth + gap));
            const nextIndex = (currentIdx + 1) % steps.length;
            scrollRef.current.scrollTo({
                left: nextIndex * (cardWidth + gap),
                behavior: 'smooth',
            });
        }, 2500);
        return () => clearInterval(timer);
    }, [steps.length]);

    return (
        <section className="w-full bg-[#0E0E0E] py-16 text-white">
            <div className="2xl:max-w-360 w-[90%] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-stretch gap-10 mb-10 h-full">
                    <div className="lg:w-[50%] w-full text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-6 border border-white/20 px-3 py-2 rounded-full w-fit bg-white/5 mx-auto lg:mx-0">
                            <span className="w-2 h-2 rounded-full bg-[#168DCA]" />
                            <span className="text-xs font-medium text-white/80">
                                {badge}
                            </span>
                        </div>
                        <h2 className="text-[22px] md:text-[35px] font-medium md:leading-[1.2] mb-6">
                            {title}
                        </h2>
                        <p className="text-white text-[16px] md:text-base max-w-2xl font-normal mx-auto lg:mx-0">
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

                <div ref={scrollRef} onScroll={handleScroll} className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible">
                    {steps.map((item, i) => (
                        <div key={i} className="p-5 border border-[#565555] rounded-2xl transition-all duration-300 group shrink-0 w-[90%] snap-center md:w-auto">
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
                <div className="flex justify-center gap-2 mt-6 md:hidden">
                    {steps.map((_, i) => (
                        <span
                            key={i}
                            className={`w-2 h-2 rounded-full transition-colors ${i === activeDot ? 'bg-[#168DCA]' : 'bg-gray-600'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

