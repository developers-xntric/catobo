import { ExplosionProofData } from '../types';

export type ExplosionProofProductSection = {
  id: string;
  badge?: string;
  title: string;
  subtitle: string;
  description: string;
  featuresHeading: string;
  features: string[];
  images: [string, string];
};

export type ExplosionProofFeatureCard = {
  title: string;
  description: string;
};

export const explosionProofIntro = {
  badge: "Industrial Products & Explosion Proof Systems",
  title: "Reliable Power Where Conditions Are Anything but Ordinary",
  paragraphs: [
    "Industrial environments demand equipment that performs consistently under heat, moisture, dust, mechanical stress and hazardous operating conditions.",
    "Our industrial product range combines durable materials, proven connection technologies and certified protection systems to support safer, more efficient operations throughout the equipment lifecycle.",
  ],
  image: "/eps/figma-intro.png",
};

export const explosionProofIndustrialSection = {
  id: "section-industrial-power",
  badge: "Industrial Power Connection Systems",
  title: "Dependable Connections for High-Demand Applications",
  paragraphs: [
    "Heavy-duty connectors, socket outlets and plug-in systems are engineered for demanding industrial environments and continuous operation.",
    "Technologies including pilot-contact interlocking, lamellar contacts, multi-way connections and push-and-pull engagement help maintain consistent connection quality throughout the system's service life.",
  ],
  featuresHeading: "Engineered for Performance",
  featureCards: [
    { title: "Durable Construction", description: "Available in marine-grade aluminium or copper for demanding applications." },
    { title: "Environmental Protection", description: "IP66 and IP67 options provide resistance against dust, dirt and water." },
    { title: "Safe Operation", description: "Ergonomic designs engineered in accordance with applicable IEC 60079 requirements." },
    { title: "Extreme Temperature Resistance", description: "Standard operating range from -40°C to 80°C, with extended options rated up to 400°C." },
  ] satisfies ExplosionProofFeatureCard[],
  image: "/eps/figma-industrial.png",
  imageRowContent: {
    badge: "Product Range",
    title: "Solutions include:",
    points: [
      "Plugs and socket outlets — 16A, 32A, 63A and 125A",
      "ATEX-certified plugs and sockets",
      "Explosion-proof lighting",
      "Portable and pendant lighting",
      "Explosion-proof floodlights and signal devices",
      "Junction boxes",
      "Control stations",
      "Cable glands",
      "Explosion-proof connectors and socket outlets",
    ],
  },
};

export const explosionProofProductSections: ExplosionProofProductSection[] = [
  {
    id: "section-isolator",
    title: "Isolator Switches",
    subtitle: "Four Ranges. Different Environments. One Focus on Reliable Isolation.",
    description: "Our isolator switch portfolio is engineered around different operating environments, electrical loads and safety requirements.",
    featuresHeading: "",
    features: [],
    images: ["/eps/figma-isolator-2.png", "/eps/figma-isolator-1.png"],
  },
  {
    id: "section-thermoplastic",
    title: "Thermoplastic Range",
    subtitle: "Reliable Isolation with Corrosion-Resistant Construction",
    description: "A lightweight and corrosion-resistant solution for standard industrial applications requiring dependable and lockable electrical isolation.",
    featuresHeading: "Key Features",
    features: [
      "Conforms to IEC/EN 60947-3",
      "Available from 16A to 100A",
      "Lockable switching",
      "Full-rated AC3–AC23A switching category",
      "Robust enclosure construction",
    ],
    images: ["/eps/figma-thermoplastic-2.png", "/eps/figma-thermoplastic-1.png"],
  },
  {
    id: "section-metal-clad",
    title: "Metal Clad Range",
    subtitle: "Robust Isolation for More Demanding Installations",
    description: "Constructed from die-cast aluminium alloy for applications requiring greater mechanical strength and environmental protection.",
    featuresHeading: "Key Features",
    features: [
      "Conforms to EN 60947-3 and EN 60529",
      "Available from 16A to 100A",
      "Die-cast aluminium alloy construction",
      "Door-interlocked operation",
      "Full-rated AC23A switching",
      "Modular construction",
      "Padlockable design",
    ],
    images: ["/eps/figma-metal-clad-2.png", "/eps/figma-metal-clad-1.png"],
  },
  {
    id: "section-fire-rated",
    title: "Fire Rated Range",
    subtitle: "Electrical Isolation Engineered for Critical Fire Conditions",
    description: "A fire-rated F400 isolator switch built in aluminium alloy for installations where continued performance under extreme temperatures is essential.",
    featuresHeading: "Key Features",
    features: [
      "Conforms to EN 60947-3 / EN 12101-3",
      "Rated to 400°C for 120 minutes",
      "Available from 16A to 200A",
      "High-visibility operating handle",
      "Full-rated AC3–AC23A category",
      "Customisable entry flanges",
    ],
    images: ["/eps/figma-fire-rated-2.png", "/eps/figma-fire-rated-1.png"],
  },
  {
    id: "section-switch-fuses",
    title: "Switch Fuses & Switch Disconnectors",
    subtitle: "High-Capacity Isolation with Flexible Protection Options",
    description: "Heavy-duty switch disconnectors and fused switch disconnectors engineered for industrial power distribution requirements.",
    featuresHeading: "Key Features",
    features: [
      "Mild-steel construction",
      "Conforms to IEC 60947-3",
      "IP65 enclosure",
      "Steel or GRP enclosure options",
      "Fully rated to AC-23A",
      "Padlockable operation",
      "Interlocked door",
      "Available from 32A to 630A",
    ],
    images: ["/eps/figma-switch-fuses-2.png", "/eps/figma-switch-fuses-1.png"],
  },
];

export const engineeringExplosionProofData: ExplosionProofData = {
  hero: {
    title: "Industrial Products / Explosion Proof Systems",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industrial Products / Explosion Proof Systems" },
    ],
    backgroundImage: "/explosion-proof-bg.png",
  },
  sidebar: {
    title: "Explosion Proof Systems",
    items: [
      { label: "Overview", hasArrow: true },
      { label: "Industrial Power Connection Systems", hasArrow: true },
      { label: "Isolator Switches", hasArrow: true },
      { label: "Thermoplastic Range", hasArrow: true },
      { label: "Metal Clad Range", hasArrow: true },
      { label: "Fire Rated Range", hasArrow: true },
      { label: "Switch Fuses & Switch Disconnectors", hasArrow: true },
    ],
  },
  sections: [],
};