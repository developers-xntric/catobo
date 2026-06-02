import Hero from '@/components/engr-solutions/home/hero';
import Solutions from '@/components/engr-solutions/home/solutions';
import Stats from '@/components/engr-solutions/home/stats';

export default function EngineeringHome() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Hero />
      <div className="bg-white py-16 md:px-8 lg:px-0">
        <div className="2xl:max-w-350 w-[90%] mx-auto">
          <Solutions />
          <div className="my-16 h-px bg-gray-200" />
          <Stats />
        </div>
      </div>
    </div>
  );
}
