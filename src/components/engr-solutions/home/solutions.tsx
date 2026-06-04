import { HomeData } from "@/data/types";
import Stats from "./stats";

export default function Solutions({ data }: { data: HomeData['solutions'] }) {
  const { badge, title, cards } = data;

  return (
    <div className="2xl:max-w-350 w-[90%] py-16 mx-auto">
      <div className="flex items-center gap-2 mb-2 border border-gray-200 px-4 py-2 rounded-full w-fit mx-auto">
        <span className="w-2 h-2 rounded-full bg-[#168DCA]" />
        <span className="text-xs font-medium text-black tracking-normal lg:tracking-wide">
          {badge}
        </span>
      </div>

      <h2 className="text-[20px] md:text-[30px] lg:text-[35px] font-medium leading-[1.2] text-balance text-[#000] mb-10 text-center">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((item) => (
          <div
            key={item.title}
            className="bg-[#f3f3f3] border border-gray-200 rounded-xl p-5 h-[335px] hover:shadow-lg hover:border-[#168DCA] transition-all duration-300 flex flex-col group"
          >
            <div className="flex items-start justify-between mb-4 border-b border-white/20">
              <h3 className="text-[22px] min-h-14 text-balance font-semibold text-[#151515] leading-7 md:w-[95%]">
                {item.title}
              </h3>
              <div className="relative  shrink-0 w-11 h-11 rounded-full border border-gray-400 flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path
                    d="M12.0497 4.10513L1.70026 14.4545L0 12.7543L10.3482 2.40489H1.22769V0H14.4545V13.2268H12.0497V4.10513Z"
                    fill="#151515"
                  />
                </svg>
              </div>
            </div>
            <p className="text-sm text-[#6D6D6D] leading-relaxed border-t border-gray-300 pt-4">
              {item.desc}
            </p>
            <div className="w-12 h-12 bg-linear-to-r from-[#0F2453] to-[#168DCA] text-white rounded-full flex items-center justify-center mt-auto transition-transform duration-300 group-hover:scale-110 p-2.5">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
      <Stats />
    </div>
  );
}
