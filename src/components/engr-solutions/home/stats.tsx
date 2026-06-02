'use client';

import { useEffect, useRef, useState } from 'react';
import GradButton from '@/components/ui/grad-button';

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
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-5xl font-bold text-white mb-1">
        {count.toLocaleString()}+
      </div>
      <div className="text-sm md:text-base text-white/70">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden rounded-xl">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/engr-solutions/hero-bg.png")' }} />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.75)' }} />
      </div>
      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-4 border border-white/30 px-4 py-2 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-[#168DCA]" />
              <span className="text-xs font-semibold text-white tracking-wide">Our Impact</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-medium leading-[1.2] mb-6">
              Delivering Excellence Across the Globe
            </h2>
            <p className="text-base text-white/70 mb-8 max-w-lg">
              With decades of experience and a proven track record, we have successfully delivered complex engineering solutions for clients worldwide.
            </p>
            <GradButton href="/" size="lg">
              Learn More
            </GradButton>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <AnimatedCounter target={450} label="Projects Completed" />
            <AnimatedCounter target={32} label="Countries Served" />
            <AnimatedCounter target={200} label="Happy Clients" />
            <AnimatedCounter target={15} label="Years Experience" />
          </div>
        </div>
      </div>
    </section>
  );
}
