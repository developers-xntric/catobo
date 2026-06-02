'use client';

import Image from 'next/image';

interface PressItem {
  id: number;
  title: string;
  imageUrl: string;
  alt: string;
}

const pressItems: PressItem[] = [
  {
    id: 1,
    title: 'Airsight Training Program – Singapore',
    imageUrl: '/press/1.png',
    alt: 'Airsight Training Program',
  },
  {
    id: 2,
    title: 'The Annual Catobo Iftar Gathering at The S Hotel, Dubai 02.04.24',
    imageUrl: '/press/2.png',
    alt: 'The Annual Catobo Iftar Gathering',
  },
  {
    id: 3,
    title: "International Childhood Cancer Awareness Day",
    imageUrl: '/press/3.png',
    alt: 'International Childhood Cancer Awareness Day',
  },
  {
    id: 4,
    title: 'Happy New Year 2024',
    imageUrl: '/press/4.png',
    alt: 'Happy New Year 2024',
  },
  {
    id: 5,
    title: 'Dubai Frame / AWL',
    imageUrl: '/press/5.png',
    alt: 'Dubai Frame / AWL',
  },
  {
    id: 6,
    title: 'Dubai Airshow 2023',
    imageUrl: '/press/6.png',
    alt: 'Dubai Airshow 2023',
  },
  {
    id: 7,
    title: 'Aviation Workshop',
    imageUrl: '/press/7.png',
    alt: 'Aviation Workshop',
  },
  {
    id: 8,
    title: 'Catobo Iftar Function 2023',
    imageUrl: '/press/8.png',
    alt: 'Catobo Iftar Function 2023',
  },
  {
    id: 9,
    title: 'Catobo Flies High',
    imageUrl: '/press/9.png',
    alt: 'Catobo Flies High',
  },
  {
    id: 10,
    title: 'Cupcakes Of Hope Campaign Feb 2023',
    imageUrl: '/press/10.png',
    alt: 'Cupcakes Of Hope Campaign Feb 2023',
  },
  {
    id: 11,
    title: 'Happy New Year 2023',
    imageUrl: '/press/11.png',
    alt: 'Happy New Year 2023',
  },
  {
    id: 12,
    title: 'Team C celebrates 15 years',
    imageUrl: '/press/12.png',
    alt: 'Team C celebrates 15 years',
  },
  {
    id: 13,
    title: 'Catobo Turns 15',
    imageUrl: '/press/13.png',
    alt: 'Catobo Turns 15',
  },
  {
    id: 14,
    title: 'Mr. Syed Abdul Jameel',
    imageUrl: '/press/14.png',
    alt: 'Mr. Syed Abdul Jameel',
  },
   {
    id: 15,
    title: 'Erbil Visit',
    imageUrl: '/press/15.png',
    alt: 'Erbil Visit',
  },
];

export default function Press() {
  return (
    <section className="w-full ">
      <div className="2xl:max-w-[1440px] w-[90%] mx-auto">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-lg  "
            >
              <div className="relative w-full h-60 overflow-hidden">
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
                  <img src="/Btn.png" alt="" className="w-8 h-8" />
                </div>
                <hr className="border-t border-[#D1D1D1] mt-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
