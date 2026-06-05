
'use client';

import Image from 'next/image';
import Link from 'next/link';
import Badge from './ui/badge';
import { pressItems } from '@/data/press-items';

interface PressProps {
  limit?: number;
  showHeading?: boolean;
  basePath?: string;
}

export default function Press({ limit, showHeading = false, basePath = "" }: PressProps) {
  const displayItems = limit ? pressItems.slice(0, limit) : pressItems;

  return (
    <section className="w-full py-12">
      <div className="2xl:max-w-[1440px] w-[90%] mx-auto">
        {showHeading && (
          <div className="mb-10 text-left">
            <Badge text="Latest Blogs" variant="black" className="mx-0" />
            <h2 className="text-[20px] md:text-3xl lg:text-[40px] font-medium leading-[1.2] text-[#000000]">
              Recent News
            </h2>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((item) => (
            <Link
              key={item.id}
              href={`${basePath}/press-list/${item.id}`}
              className="group flex flex-col overflow-hidden rounded-lg"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  fill
                  className="object-fit center"
                />
              </div>
              <div className="pt-4 flex flex-col flex-1">
                <h3 className="w-[90%] text-sm md:text-xl font-medium text-[#000000] line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <div className="mt-auto flex pt-3">
                  <img src="/Btn.png" alt="fwe" className="w-8 h-8" />
                </div>
                <hr className="border-t border-[#D1D1D1] mt-5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
