'use client';

import { useEffect, useRef, useState } from 'react';
import GradButton from '@/components/ui/grad-button';

interface CounterItem {
  target: number;
  label: string;
}

interface StatsProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  backgroundImage?: string;
  counters?: CounterItem[];
}

function AnimatedCounter({
  target,
  label,
}: {
  target: number;
  label: string;
}) {
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

          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
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

      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
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

export default function Stats({
  title = '',
  description = '',
  buttonText = '',
  buttonHref = '/',
  backgroundImage = '',
  counters = [],
}: StatsProps) {
  return (
    <section className="relative mx-auto my-6 p-6 overflow-hidden rounded-xl">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${backgroundImage}")` }}
        />
      </div>

      <div className="relative z-10">
        <div className="flex flex-row justify-center gap-12 items-center">
          <div className="text-white">
            <h2 className="text-xl md:text-2xl font-medium leading-[1.2] mb-1">
              {title}
            </h2>

            <p className="text-[13px] text-white mb-3 max-w-lg">
              {description}
            </p>

            <GradButton href={buttonHref} size="md">
              {buttonText}
            </GradButton>
          </div>

          <div
            className={`grid gap-10 ${
              counters.length <= 2
                ? 'grid-cols-2'
                : counters.length === 3
                ? 'grid-cols-3'
                : 'grid-cols-4'
            }`}
          >
            {counters.map((counter, index) => (
              <AnimatedCounter
                key={index}
                target={counter.target}
                label={counter.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}