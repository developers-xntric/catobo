'use client';

import { useEffect, useRef, useState } from 'react';
import { ContactCtaButton } from '@/components/ContactCtaButton';

function AnimatedCounter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const start = () => {
      if (timerRef.current) clearInterval(timerRef.current);
      setCount(0);
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      timerRef.current = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          if (timerRef.current) clearInterval(timerRef.current);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [target]);

  return (
    <div ref={ref} className="text-left">
      <div className="text-3xl md:text-5xl font-medium text-white mb-1">
        {count.toLocaleString()}+
      </div>
      <div className="text-sm text-white">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative  mx-auto my-6 p-6 overflow-hidden rounded-xl">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/engr-solutions/stats-bg.png")' }} />
      </div>
      <div className="relative z-10">
        <div className="flex flex-row justify-center gap-12 items-center">
          <div className="text-white">
           
            <h2 className="text-xl md:text-2xl font-medium leading-[1.2] mb-1">
              Impact Across Continents
            </h2>
            <p className="text-[13px] text-white mb-3 max-w-lg">
             from mission critical sites to healthcare systems, aviation precision initiatives engineered to endure challenges.
            </p>
            <ContactCtaButton className="group inline-flex items-center justify-center rounded-md transition-all duration-300 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 px-6 py-2.5 text-sm bg-linear-to-l from-[#0F2453] to-[#168DCA] text-white hover:border hover:scale-105 hover:bg-none hover:text-[#168DCA] hover:border-[#168DCA] hover:shadow-xl hover:shadow-[#168DCA]/20 active:scale-95">
              Book Your Consultation
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-0.5 transition-transform duration-300"><path d="m9 18 6-6-6-6" /></svg>
            </ContactCtaButton>
          </div>
          <div className="grid grid-cols-4 gap-10">
            <AnimatedCounter target={18} label="Military & Defense Projects" />
            <AnimatedCounter target={30} label="Healthcare Facility Deployments" />
            <AnimatedCounter target={120} label="Aviation Installations Executed" />
            <AnimatedCounter target={75} label="Government & Public Sector Installations" />
          </div>
        </div>
      </div>
    </section>
  );
}
