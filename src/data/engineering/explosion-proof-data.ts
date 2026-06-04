import { ExplosionProofData } from '../types';

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
      { label: "Industrial Products", hasArrow: true },
      { label: "Thermoplastic Range", hasArrow: true },
      { label: "Metal Clad Range", hasArrow: true },
      { label: "Fire Rated Range", hasArrow: true },
      { label: "Switch Fuses & Switch Disconnectors", hasArrow: true },
    ],
  },
  sections: [
    {
      title: "Industrial Products / Explosion Proof Systems",
      paragraphs: [
        "Catobo supply high quality, heavy-duty industrial power connectors, power units and automatic plug-in systems for applications worldwide. Technologies that help customers improve safety, reduce environmental impact and operate more efficiently. Our connectors are used in many heavy industries for all kinds of electrification purposes.",
        "Our connectors feature a variety of cutting-edge technologies that ensure optimal performance throughout products lifetime. These features include electrical interlocking of pilot contacts, lamellar, Multi-Way Technology, and Push & Pull systems. All connectors are IP 66 protected, and have a standard maximum operating temperature of 80°C – which can be extended to withstand temperatures of up to 400°C",
      ],
      points: [
        "High quality and durable (Marine grade aluminium or copper)",
        "Dust, dirt and waterproof resulting in low maintenance (IP66, IP67)",
        "Safe to use (Ergonomic design, IEC 60079)",
        "Unlikely to freeze or melt (-40-80C, option up to 400C)",
        "Multi-way technology (Extra tight connection between male and female poles)",
        "Plugs / Socket outlets 16-32-63-125 amps.",
        "Reefer Points",
        "Plugs / Sockets outlets 200-250-320-400 amps",
        "Atex certified plugs / sockets , lighting and small devices.",
        "Ex-Light fittings – Portable, Pendant , Flood-lights ,Signals",
        "Ex-Terminal boxes , Junction boxes , Control Stations ,Glands",
        "Ex-Connectors , Socket outlets",
        "Isolator Switches",
      ],
      images: [
        { src: "/eps/1.png", alt: "Industrial shipping containers" },
        { src: "/eps/2.png", alt: "Connector schematic", className: "mix-blend-multiply" },
      ],
      pdfLinks: [
        { label: "View Isolator Switches PDF" },
      ],
    },
    {
      title: "Thermoplastic Range",
      points: [
        "Conformity to IEC/EN 60947-3",
        "Wide Range from 16A to 100A",
        "Lockable Switch Full rated AC3 – AC23A switching category",
        "Robust and wide enclosure",
      ],
      images: [
        { src: "/eps/3.png", alt: "Electrical maintenance" },
        { src: "/eps/4.png", alt: "Thermoplastic isolator", className: "mix-blend-multiply" },
      ],
    },
    {
      title: "Metal Clad Range",
      points: [
        "Conformity to EN 60947-3 EN60529",
        "Wide Range from 16A to 125A",
        "die cast aluminium alloy",
        "Full rated AC23A switching category",
        "Modular Construction",
        "Padlock able and door interlocked",
      ],
      images: [
        { src: "/eps/5.png", alt: "Industrial panel" },
        { src: "/eps/6.png", alt: "Metal clad plugs", className: "mix-blend-multiply" },
      ],
    },
    {
      title: "Fire Rated Range",
      points: [
        "Fire rated F400 isolator switch in aluminium alloy.",
        "Conformity to EN 60947-3 / EN12101-3 (400°C for 120 minutes)",
        "Wide Range from 16A to 200A",
        "High visibility handle",
        "Full rated AC3-AC23A category",
        "Customisable entry flanges",
      ],
      images: [
        { src: "/eps/7.png", alt: "Wire installation" },
        { src: "/eps/8.png", alt: "Fire rated switch" },
      ],
    },
    {
      title: "Switch Fuses & Switch Disconnectors",
      points: [
        "Switch Disconnector or Fused Switch Disconnector in Mild Steel.",
        "Conformity to IEC60947-3",
        "Robust and wide IP65 Enclosures",
        "Fully rated to AC-23A category",
        "Pad lockable and interlocked door",
        "In Steel or GRP Enclosure Options.",
        "Wide Range 32A – 630A",
      ],
      images: [
        { src: "/eps/9.png", alt: "Industrial site" },
        { src: "/eps/10.png", alt: "Switch disconnectors", className: "mix-blend-multiply" },
      ],
    },
  ],
};
