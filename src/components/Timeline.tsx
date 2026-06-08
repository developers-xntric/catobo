'use client';

import { motion } from 'framer-motion';

export interface TimelineStep {
  number: string;
  title: string;
}

interface ProcessTimelineProps {
  title?: string;
  subtitle?: string;
  steps?: TimelineStep[];
  columns?: 2 | 3 | 4 | 5 | 6;
  cardHeight?: string;
  className?: string;
}

const defaultSteps: TimelineStep[] = [
  {
    number: '01',
    title: 'Touchdown And Lift-Off Areas (TLOF)',
  },
  {
    number: '02',
    title: 'Final Approach And Take-Off Areas (FATO)',
  },
  {
    number: '03',
    title: 'Runway And Taxiway Edge Lighting',
  },
  {
    number: '04',
    title: 'Threshold And Approach Lighting',
  },
];

export default function ProcessTimeline({
  title = 'Application',
  subtitle,
  steps = defaultSteps,
  columns = 4,
  cardHeight = 'h-40',
  className = '',
}: ProcessTimelineProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 xl:grid-cols-4',
    5: 'md:grid-cols-3 xl:grid-cols-5',
    6: 'md:grid-cols-3 xl:grid-cols-6',
  };

  return (
    <section className={`w-full py-8 ${className}`}>
      <div className="2xl:max-w-360 mx-auto bg-[#D7E3ED] rounded-lg p-4 sm:p-8">
        <h2 className={`text-lg sm:text-xl md:text-3xl lg:text-[40px] font-medium leading-[1.2] text-black ${subtitle ? "mb-2" : "mb-6 sm:mb-10"}`}>
          {title}
        </h2>
        {subtitle && (
          <p className="text-[13px] sm:text-sm text-[#3a3a3a] leading-relaxed mb-6 sm:mb-10 max-w-3xl">
            {subtitle}
          </p>
        )}

        <div className={`grid grid-cols-1 gap-5 sm:gap-7.5 ${gridCols[columns]}`}>
          {steps.map((step, index) => (
            <motion.div
              key={`${step.number}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              {/* Background Circle */}
              <div className="absolute -top-5 sm:-top-7 -left-3 sm:-left-5 z-0 flex h-16 w-16 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-linear-to-b from-[#0B5D8E] to-[#083A63] shadow-lg transition-transform duration-300 group-hover:scale-105" />

              {/* Card */}
              <div
                className={`relative z-10 flex ${cardHeight} flex-col justify-between rounded-sm border border-white/30 bg-white/10 backdrop-blur-md px-2 sm:px-3 py-2 sm:py-3 shadow-lg`}
              >
                <span className="text-sm sm:text-[17px] font-medium text-black">
                  {step.number}
                </span>

                <p className="max-w-[70%] text-xs sm:text-[13px] font-medium text-black leading-tight">
                  {step.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}