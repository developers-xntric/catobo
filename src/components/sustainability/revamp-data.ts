export const products = [
  {
    id: "catalyst",
    brand: "Catobo",
    name: "Catalyst Fuel Saver",
    intro: "Save 5–10% on fuel with your existing equipment",
    image: "catalyst-card.png",
    detailImage: "catalyst-detail.png",
    paragraphs: [
      "The Catalyst is fitted on the fuel line, just before the burner or engine. As the fuel passes through, the catalyst acts as a reformer. It breaks down the heavy, long-chain hydrocarbons into lighter ones, which raises the usable calorific power of the fuel.",
      "The lighter fuel burns more completely. Less fuel leaves the stack or exhaust unburnt, so you get the same heat or power from less fuel. There are no chemicals, no moving parts and no change to your equipment.",
      "Works with: diesel, HFO, LPG and natural gas, on furnaces, boilers, kilns, generators and vehicle fleets. Typical saving: 5–10% fuel, plus lower CO₂ and smoke.",
    ],
  },
  {
    id: "coating",
    brand: "Catobo",
    name: "High Emissivity Coating",
    intro: "Keeps more heat in the furnace and saves a further 5–10% fuel",
    image: "coating-card.png",
    detailImage: "high-emissivity.png",
    paragraphs: [
      "This special coating is applied to the inside of the furnace, on the refractory walls and roof. Normal refractory absorbs much of the heat and loses it through the walls. The coating sends the heat back to the steel or product being heated.",
      "The result is faster, more even heating and less fuel for the same output. It also protects the refractory and can extend its life.",
      "Works with: reheating furnaces, kilns, boilers and other fired heaters. Typical saving: a further 5–10% fuel, on top of other measures.",
    ],
  },
  {
    id: "xplate",
    brand: "Catobo",
    name: "Xplate",
    intro: "More oxygen for better combustion, saving 3–5% fuel",
    image: "xplate-card.png",
    detailImage: "xplate-detail.png",
    paragraphs: [
      "Xplate is a simple plate fitted at the burner air intake. It improves the oxygen available for combustion, so the fuel burns more cleanly and completely.",
      "No power supply, no maintenance and no change to your burner settings.",
      "Works with: boilers, furnaces and burners on any fuel. Typical saving: 3–5% fuel.",
    ],
  },
  {
    id: "cooling",
    brand: "Aerostrata",
    name: "Vaayu Nano Hybrid Cooling",
    intro:
      "Comfortable working temperatures in hot warehouses, using about 50% less power",
    image: "cooling-card.png",
    detailImage: "cooling-detail.png",
    paragraphs: [
      "Many warehouses in the UAE reach around 45°C inside, which makes it hard for people to work. Vaayu takes in this hot air and delivers it at a comfortable 25–30°C, without compressors or refrigerant.",
      "It can also pre-cool the air going into a building's chiller system, which is under heavy load in summer.",
      "Works with: warehouses, factories, hangars, workshops, chiller pre-cooling. Typical saving: about 50% less power than traditional cooling; around 20% saving on load when used for pre-cooling.",
    ],
  },
  {
    id: "american-wind",
    brand: "Aerostrata",
    name: "American Wind",
    intro: "Industrial wind power that keeps generating day and night",
    image: "american-wind-card.png",
    detailImage: "american-wind-detail.png",
    paragraphs: [
      "A compact, cube-shaped wind turbine with a low-friction generator. A built-in duct speeds up the wind before it reaches the blades, so it produces more power from the same wind. Units can be stacked on rooftops, facades and open sites.",
      "Unlike solar, it keeps generating at night, whenever there is wind.",
      "Works with: industrial sites, rooftops and facades with wind of 20 mph and above.",
    ],
  },
  {
    id: "sun-wind",
    brand: "Aerostrata",
    name: "Sun Wind Technology",
    intro: "Compact wind power for retail and commercial sites",
    image: "sun-wind.png",
    detailImage: "sun-wind.png",
    paragraphs: [
      "A small, quiet wind turbine for sites with lighter wind. It suits shops, malls, petrol stations and commercial buildings that want visible, on-site renewable power.",
      "Works with: retail and commercial sites with wind of 15 mph and above.",
      "Wind figures (output, payback) are left out on purpose. We give them per site after a wind check.",
    ],
  },
] as const;

export type Product = (typeof products)[number];
export const asset = (name: string) => `/sustainability/revamp/${name}`;

export const steps = [
  {
    title: "Site assessment",
    text: "Our engineers visit your site, study your equipment and fuel use, and show where you can save.",
    icon: "assessment.svg",
  },
  {
    title: "Pilot",
    text: "We install on one unit first, so you see the result before you commit.",
    icon: "pilot.svg",
  },
  {
    title: "Results",
    text: "Savings are measured with you, using your own meters and fuel records.",
    icon: "results.svg",
  },
  {
    title: "Pay from savings",
    text: "Options where the system pays for itself from the fuel you save, with no upfront cost.",
    icon: "savings.svg",
  },
] as const;

export const industries = [
  { name: "Steel", icon: "steel.svg" },
  { name: "Ceramics", icon: "ceramics.svg" },
  { name: "Power & Utilities", icon: "power.svg" },
  { name: "Food & Beverage", icon: "food.svg" },
  { name: "Fleets & Generators", icon: "fleets.svg" },
  { name: "Oil & Gas", icon: "oil.svg" },
] as const;

// The design supplies the first answer. Remaining answers summarize the
// supplied product and process copy; site-specific terms need an assessment.
export const faqs = [
  [
    "Do I need to change or stop my equipment?",
    "No. Our systems fit onto your existing burners, furnaces, boilers, engines and buildings. Installation is quick and usually done during a planned stop.",
  ],
  [
    "How much can I really save?",
    "It depends on your equipment, fuel and how it runs. Typical savings are 5–10% with the Catalyst, a further 5–10% with the Coating and 3–5% with Xplate. We give you a site-specific estimate after the assessment.",
  ],
  [
    "How do I know the savings are real?",
    "We start with a pilot on one unit and measure before and after, using your own meters and fuel records. You see the numbers before you decide.",
  ],
  [
    "Is there any upfront cost?",
    "For suitable projects, we offer a pay-from-savings option. The system is paid for out of the fuel you save, so there is no capital outlay.",
  ],
  [
    "Which fuels do your products work with?",
    "Diesel, HFO, LFO, LPG, natural gas and CNG.",
  ],
  [
    "Which industries do you work with?",
    "Steel, ceramics, power and utilities, oil and gas, food and beverage, and fleets and generators.",
  ],
  [
    "Will it affect my product quality or warranty?",
    "No. The products do not change your process settings or the equipment itself. Many customers see more stable combustion and more even heating.",
  ],
  [
    "Does it help with our sustainability targets?",
    "Yes. Less fuel burnt means lower CO₂ emissions. We provide measured savings data you can use in your ESG and sustainability reporting.",
  ],
  [
    "How long does it take to see results?",
    "Results show from the first weeks of operation. A typical pilot runs for one to three months to give reliable data.",
  ],
  [
    "Where do you operate?",
    "We are based in Dubai and support customers across the GCC.",
  ],
  [
    "How do I get started?",
    "Fill in the enquiry form or book a consultation. Our team will contact you to arrange a site assessment.",
  ],
] as const;

export const sustainabilityLinks = [
  { label: "Home", href: "/sustainability#overview" },
  { label: "About", href: "/sustainability#about" },
  { label: "Solutions", href: "/sustainability#systems" },
  { label: "Industries", href: "/sustainability#industries" },
  { label: "FAQs", href: "/sustainability#faqs" },
  { label: "Contact", href: "/sustainability#contact" },
];
