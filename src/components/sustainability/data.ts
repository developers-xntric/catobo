export const sustainabilityContent = {
  hero: {
    badge: "SUSTAINABILITY SOLUTIONS",
    title: ["Sustainability Solutions", "Six Patented Systems,", "One Desk."],
    description: "Fuel and combustion, cooling, and renewable energy technologies, all retrofit onto equipment a customer already runs. This vertical sits beside Catobo's Aviation and Construction lines as the group's dedicated energy-efficiency offer.",
    stats: [["5-10%", "Less fuel"], ["50%", "Less cooling power"], ["24/7", "Renewable generation"]],
  },
  systems: {
    title: "All Six Systems",
    description: "Click a block for how it works. Copper = fuel & combustion (CATOBO); teal = cooling & renewable (Aerostrata).",
    tabs: { fuel: "Fuel and combustion", renewable: "Cooling and renewable" },
  },
  savings: {
    title: "Estimate Your Savings",
    description: "A directional estimate using the same percentages shown above. A real proposal always follows a site assessment.",
    calculatorTitle: "Savings Estimator",
    calculatorDescription: "Pick a system and enter your current spend or load.",
    label: "System",
  },
  emissions: {
    title: "Estimate Emissions Avoided",
    description: "Fuel and electricity use converted to CO\u2082e using indicative combustion and grid factors. Swap in your utility's published factor for a final number.",
    calculatorTitle: "Emissions Calculator",
    calculatorDescription: "Pick what you burn or draw, and how much, per month.",
    label: "Fuel / energy source",
  },
  impact: {
    title: "Live Impact Fuel and Combustion",
    description: "Running total across our fuel and combustion installations. Cooling and renewable projects are not in this count yet - we will add that track once we have live installations to report on.",
    tableLabel: "Illustrative project impact - scroll to view all columns",
  },
  footer: { title: ["Talk to the", "Sustainability Desk"] },
} as const;

export const systems = [
  { id: "catalyst", group: "fuel", name: "Catalyst Fuel Saver", metric: "5?10% less fuel", icon: "catalyst.png",
    intro: "In-line fuel conditioner fitted to boilers, furnaces, trucks, ships or generators.",
    detail: "Breaks long hydrocarbon chains into shorter ones before combustion, so fuel on diesel, LPG, natural gas, CNG, HFO or LFO burns more completely cutting cost and supporting Net Zero 2030 style targets." },
  { id: "ceramic", group: "fuel", name: "Ceramic Coating", metric: "+5?10% further fuel saved", icon: "ceramic.png",
    intro: "A refractory heat-shield coating for the inside of a furnace.",
    detail: "A binder-and-additive mixture protects the refractory lining and re-radiates heat back into the furnace instead of losing it through the walls ? stacks on top of Catalyst." },
  { id: "xplate", group: "fuel", name: "Xplate Oxygen Converter", metric: "Cleaner combustion", icon: "xplate.png",
    intro: "A plate on the air/combustion fan that concentrates oxygen from ambient air.",
    detail: "Uses an electrostatic process to separate oxygen from nitrogen so more oxygen reaches the flame. The same principle assists deaeration in desalination plants." },
  { id: "cooling", group: "renewable", name: "Vaayu ? Nano Hybrid Cooling", metric: "~50% less power", icon: "cooling.png",
    intro: "Spot comfort cooling and chiller pre-cooling for hot warehouses.",
    detail: "Takes in ambient air (~45?C in UAE warehouses) and delivers 25?30?C output; can pre-cool intake to a building?s chiller water system, saving ~20% enthalpy load." },
  { id: "american-wind", group: "renewable", name: "American Wind", metric: "24/7 generation", icon: "american-wind.png",
    intro: "Modular micro-cube wind units for exposed, high-wind industrial sites.",
    detail: "Each cube produces about 1kW wherever wind of 20mph+ is available ? tall buildings, exhaust outlets ? generating around the clock, unlike solar?s ~7 daylight hours." },
  { id: "sun-wind", group: "renewable", name: "Sun Wind Technology", metric: "15 mph+ activation", icon: "sun-wind.png",
    intro: "Compact wind power sized for commercial and retail rooftops.",
    detail: "The same wind-to-power concept as American Wind, scaled down for sites where wind of around 15mph is available." },
] as const;

// Illustrative Figma data, not a feed of verified installations.
export const impactProjects = [
  { project: "Boiler catalyst retrofit", sector: "Beverage manufacturing, Dubai", system: "Catalyst", avoided: 3200 },
  { project: "Furnace coating", sector: "Ceramics, Ras Al Khaimah", system: "Ceramic Coating", avoided: 1450 },
  { project: "Combustion air upgrade", sector: "Fuel retail network, UAE", system: "Xplate", avoided: 820 },
  { project: "CNG boiler catalyst", sector: "Industrial processing", system: "Catalyst", avoided: 1900 },
];

export const savingsOptions = [
  { label: "Catalyst ? fuel saver (avg. 7.5%)", rate: 0.075, kind: "fuel" },
  { label: "Ceramic coating (avg. 7.5% additional)", rate: 0.075, kind: "fuel" },
  { label: "Vaayu ? cooling (up to 50%)", rate: 0.5, kind: "cooling electricity" },
];
export const energyOptions = [
  { label: "Diesel", unit: "liters", factor: 2.68, rate: 0.075 },
  { label: "LPG", unit: "liters", factor: 1.51, rate: 0.075 },
  { label: "Natural gas", unit: "m?", factor: 1.94, rate: 0.075 },
  { label: "UAE grid electricity", unit: "kWh", factor: 0.45, rate: 0.5 },
];
export const positiveAmount = (value: string) => Number.isFinite(Number(value)) ? Math.max(0, Number(value)) : 0;
