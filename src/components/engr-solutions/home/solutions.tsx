'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { HomeData } from "@/data/types";
import Stats from "./stats";
import ConsultationTabs from "@/components/consultation-tab";

const cardRoutes: Record<string, string> = {
  'Cable Containment Systems': '/engineering/cable-trunking',
  'Lightning Protection Systems': '/engineering/solution-lightening-protection-systems',
  'Industrial Products': '/engineering/explosion-proof-systems',
}

export default function Solutions({ data }: { data: HomeData['solutions'] }) {
  const pathname = usePathname()
  const isAviation = pathname?.startsWith('/aviation')
  const { badge, title, cards, stats } = data;
  const [activeDot, setActiveDot] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft } = scrollRef.current;
    const child = scrollRef.current.children[0] as HTMLElement;
    if (!child) return;
    const gap = 24;
    const cardWidth = child.offsetWidth;
    const idx = Math.round(scrollLeft / (cardWidth + gap));
    setActiveDot(Math.min(idx, cards.length - 1));
  }, [cards.length]);

  useEffect(() => {
    if (cards.length <= 1) return;
    const timer = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft } = scrollRef.current;
      const child = scrollRef.current.children[0] as HTMLElement;
      if (!child) return;
      const gap = 24;
      const cardWidth = child.offsetWidth;
      const currentIdx = Math.round(scrollLeft / (cardWidth + gap));
      const nextIndex = (currentIdx + 1) % cards.length;
      scrollRef.current.scrollTo({
        left: nextIndex * (cardWidth + gap),
        behavior: 'smooth',
      });
    }, 2500);
    return () => clearInterval(timer);
  }, [cards.length]);

  return (
    <div className="2xl:max-w-350 w-[90%] py-16 mx-auto">
      <div className="flex items-center gap-2 mb-2 border border-gray-200 px-4 py-2 rounded-full w-fit mx-auto">
        <span className="w-2 h-2 rounded-full bg-[#168DCA]" />
        <span className="text-xs font-medium text-black tracking-normal lg:tracking-wide">
          {badge}
        </span>
      </div>

      <h2 className={`text-[22px] md:text-[30px] lg:text-[35px] font-medium leading-[1.2] text-balance text-[#000] text-center ${isAviation ? 'mb-5 md:mb-10' : 'mb-10'}`}>
        {title}
      </h2>

      {isAviation ? (
        <ConsultationTabs />
      ) : (
        <>
        <div ref={scrollRef} onScroll={handleScroll} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible">
          {cards.map((item) => (
            <Link
              key={item.title}
              href={cardRoutes[item.title] || '#'}
              className="bg-[#f3f3f3] border border-gray-200 rounded-xl p-5 min-h-[300px] md:min-h-[335px] hover:shadow-lg hover:border-[#168DCA] transition-all duration-300 flex flex-col group shrink-0 w-[95%] snap-center md:w-auto"
            >
              <div className="flex items-start justify-between mb-4 border-b border-white/20">
                <h3 className="text-[20px] md:text-[22px] min-h-14 text-balance font-semibold text-[#151515] leading-7 md:w-[95%]">
                  {item.title}
                </h3>
                <div className="relative  shrink-0 w-11 h-11 rounded-full border border-gray-400 flex items-center justify-center">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path
                      d="M12.0497 4.10513L1.70026 14.4545L0 12.7543L10.3482 2.40489H1.22769V0H14.4545V13.2268H12.0497V4.10513Z"
                      fill="#151515"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-[#6D6D6D] leading-relaxed border-t border-gray-300 pt-4 md:mb-0">
                {item.desc}
              </p>
              <div className="w-12 h-12 bg-linear-to-r from-[#0F2453] to-[#168DCA] text-white rounded-full flex items-center justify-center mt-auto transition-transform duration-300 group-hover:scale-110 p-2.5">
                {item.icon}
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {cards.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${i === activeDot ? 'bg-[#168DCA]' : 'bg-gray-300'}`}
            />
          ))}
        </div>
        </>
      )}
      <Stats {...stats} />
    </div>
  );
}
