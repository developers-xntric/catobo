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
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O9JEhv14uha1sY0SBJkyuYBTxsm3bG.png',
    alt: 'Airsight Training Program',
  },
  {
    id: 2,
    title: 'The Annual Catobo Iftar Gathering at The S Hotel, Dubai 02.04.24',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O9JEhv14uha1sY0SBJkyuYBTxsm3bG.png',
    alt: 'The Annual Catobo Iftar Gathering',
  },
  {
    id: 3,
    title: "International Childhood Cancer Awareness Day",
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O9JEhv14uha1sY0SBJkyuYBTxsm3bG.png',
    alt: 'International Childhood Cancer Awareness Day',
  },
  {
    id: 4,
    title: 'Happy New Year 2024',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O9JEhv14uha1sY0SBJkyuYBTxsm3bG.png',
    alt: 'Happy New Year 2024',
  },
  {
    id: 5,
    title: 'Dubai Frame / AWL',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O9JEhv14uha1sY0SBJkyuYBTxsm3bG.png',
    alt: 'Dubai Frame / AWL',
  },
  {
    id: 6,
    title: 'Dubai Airshow 2023',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O9JEhv14uha1sY0SBJkyuYBTxsm3bG.png',
    alt: 'Dubai Airshow 2023',
  },
  {
    id: 7,
    title: 'Aviation Workshop',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O9JEhv14uha1sY0SBJkyuYBTxsm3bG.png',
    alt: 'Aviation Workshop',
  },
  {
    id: 8,
    title: 'Catobo Iftar Function 2023',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O9JEhv14uha1sY0SBJkyuYBTxsm3bG.png',
    alt: 'Catobo Iftar Function 2023',
  },
  {
    id: 9,
    title: 'Catobo Flies High',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O9JEhv14uha1sY0SBJkyuYBTxsm3bG.png',
    alt: 'Catobo Flies High',
  },
  {
    id: 10,
    title: 'Cupcakes Of Hope Campaign Feb 2023',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O9JEhv14uha1sY0SBJkyuYBTxsm3bG.png',
    alt: 'Cupcakes Of Hope Campaign Feb 2023',
  },
  {
    id: 11,
    title: 'Happy New Year 2023',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O9JEhv14uha1sY0SBJkyuYBTxsm3bG.png',
    alt: 'Happy New Year 2023',
  },
  {
    id: 12,
    title: 'Team C celebrates 15 years',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O9JEhv14uha1sY0SBJkyuYBTxsm3bG.png',
    alt: 'Team C celebrates 15 years',
  },
];

export default function Press() {
  return (
    <section className="w-full py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-lg  "
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <div className="mt-auto flex">
                  <img src="/Btn.png" alt="" className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
