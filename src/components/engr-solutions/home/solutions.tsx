const cards = [
  {
    title: 'Cable Containment',
    desc: 'LanRic offers a comprehensive metal framing system that conforms to BS 6946:1988 (Metal Channels cable Support Systems for Electrical Installations) Flexibility of elements of the system can be combined to create an unlimited range of structural designs.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: 'Lightning Protection',
    desc: 'Lightning protection needs vary according to each specific facility. The requirements of telecom structures, buildings, power utility substations, transmission and distribution systems and grounding and bonding requirements can all vary greatly. ',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: 'Industrial Safety',
    desc: 'Catobo supply high quality, heavy-duty industrial power connectors, power units and automatic plug-in systems for applications worldwide. Technologies that help customers improve safety, reduce environmental impact and operate more efficiently. ',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function Solutions() {
  return (
    <>
      <div className="flex items-center gap-2 mb-2 border border-gray-200 px-4 py-2 rounded-full w-fit mx-auto">
        <span className="w-2 h-2 rounded-full bg-[#168DCA]" />
        <span className="text-xs font-medium text-black tracking-normal lg:tracking-wide">
          Engineering Solutions
        </span>
      </div>

      <h2 className="text-[20px] md:text-[30px] lg:text-[35px] font-medium leading-[1.2] text-balance text-[#000] mb-10 text-center">
       Construction Infrastructure Solutions Engineered for Reliability
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((item) => (
          <div key={item.title} className="bg-[#f3f3f3] border border-gray-200 rounded-xl p-5 h-80 hover:shadow-lg hover:border-[#168DCA] transition-all duration-300 flex flex-col group">
            <div className="flex items-start justify-between mb-4 border-b border-white/20">
              <h3 className="text-[22px] min-h-14 text-balance font-semibold text-[#151515] leading-7 md:w-[95%]">
                {item.title}
              </h3>
              <div className="relative  shrink-0 w-11 h-11 rounded-full border border-gray-400 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M12.0497 4.10513L1.70026 14.4545L0 12.7543L10.3482 2.40489H1.22769V0H14.4545V13.2268H12.0497V4.10513Z" fill="#151515" />
                </svg>
              </div>
            </div>
            <p className="text-sm text-[#6D6D6D] leading-relaxed">
              {item.desc}
            </p>
            <div className="w-12 h-12 bg-linear-to-r from-[#0F2453] to-[#168DCA] text-white rounded-full flex items-center justify-center mt-auto transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
