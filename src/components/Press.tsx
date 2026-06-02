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
    title: 'Youth Program',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O9JEhv14uha1sY0SBJkyuYBTxsm3bG.png',
    alt: 'Youth Program',
  },
  {
    id: 2,
    title: 'The Grand Celebration at The 5 Hotel, Dubai Oct 4-6',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O9JEhv14uha1sY0SBJkyuYBTxsm3bG.png',
    alt: 'The Grand Celebration',
  },
  {
    id: 3,
    title: "International Children's Cancer Awareness Day",
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O9JEhv14uha1sY0SBJkyuYBTxsm3bG.png',
    alt: 'International Childrens Cancer Awareness Day',
  },
  {
    id: 4,
    title: 'Happy New Year 2024',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O9JEhv14uha1sY0SBJkyuYBTxsm3bG.png',
    alt: 'Happy New Year 2024',
  },
  {
    id: 5,
    title: 'Dubai Festival / ADIB',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O9JEhv14uha1sY0SBJkyuYBTxsm3bG.png',
    alt: 'Dubai Festival',
  },
  {
    id: 6,
    title: 'Dubai Airshow 2023',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O9JEhv14uha1sY0SBJkyuYBTxsm3bG.png',
    alt: 'Dubai Airshow 2023',
  },
  {
    id: 7,
    title: 'Ackbari Workshop',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O9JEhv14uha1sY0SBJkyuYBTxsm3bG.png',
    alt: 'Ackbari Workshop',
  },
  {
    id: 8,
    title: 'Carnival Pre Function 2023',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O9JEhv14uha1sY0SBJkyuYBTxsm3bG.png',
    alt: 'Carnival Pre Function 2023',
  },
  {
    id: 9,
    title: 'Carnival Film Night',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O9JEhv14uha1sY0SBJkyuYBTxsm3bG.png',
    alt: 'Carnival Film Night',
  },
  {
    id: 10,
    title: 'Cute mom & Happy Celebration Podcast',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O9JEhv14uha1sY0SBJkyuYBTxsm3bG.png',
    alt: 'Cute mom and Happy Celebration Podcast',
  },
  {
    id: 11,
    title: 'Happy New Year 2022',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O9JEhv14uha1sY0SBJkyuYBTxsm3bG.png',
    alt: 'Happy New Year 2022',
  },
  {
    id: 12,
    title: 'Team Collaboration in post',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O9JEhv14uha1sY0SBJkyuYBTxsm3bG.png',
    alt: 'Team Collaboration in post',
  },
];

export default function Press() {
  return (
    <section className="w-full py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Press & Events</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our recent press coverage and events
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <div className="relative w-full h-48 overflow-hidden bg-gray-200">
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
