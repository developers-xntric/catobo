'use client';

import { motion } from 'framer-motion';

interface TimelineStep {
  number: string;
  title: string;
}

interface ProcessTimelineProps {
  steps?: TimelineStep[];
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
  steps = defaultSteps,
}: ProcessTimelineProps) {
  return (
    <div className="w-full py-8 bg-amber-100 justify-center">
        <div className="2xl:max-w-[1440px] w-[90%] mx-auto">
       
      <div className="flex min-w-max gap-[20px] justify-center">
        
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
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
            {/* Number Circle */}
            <div className="absolute -top-4 left-0 z-0 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-[#0B5D8E] to-[#083A63] text-sm font-semibold text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
              
            </div>

            {/* Card */}
            <div className="relative z-[1000] flex h-40 w-[220px] flex-col rounded-sm border border-white/30 bg-white/10 backdrop-blur-md px-2 py-3 shadow-lg ml-5 mt-2 justify-between">
              <span className="text-[17px]  text-[#000000]">{step.number}</span>
              <p className="max-w-[170px] text-[11px] leading-tight text-gray-700">
                {step.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  );
}
