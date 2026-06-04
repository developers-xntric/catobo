import { LightningProtectionData } from '../types';

export const engineeringLightningProtectionData: LightningProtectionData = {
  hero: {
    title: "Lightning Protection Systems",
    backgroundImage: "/lightening-sol.png",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Lightning Protection Systems" },
    ],
  },
  sidebar: {
    title: "Lightning Protection",
    items: [
      { label: "Lightning Protection Systems", hasArrow: true },
      { label: "Lightning Protection System/\nEarthing", hasArrow: true },
      { label: "Surge Protection Devices", hasArrow: true },
    ],
  },
  sections: [
    {
      title: "Franklin France",
      points: [
        "Early Streamer Emission System-Active 2D",
        "Early Streamer Emission System-Active 4D",
      ],
      pdfLinks: [
        { label: "View PDF" },
        { label: "View PDF" },
      ],
      images: [
        { src: "/slps/1.png", alt: "Lightning protection installation worker" },
        { src: "/slps/2.png", alt: "Lightning rod system", className: "mix-blend-multiply" },
      ],
    },
    {
      title: "Lightning Protection System/Earthing",
      description: "Lightning protection needs vary according to each specific facility. The requirements of telecom structures, buildings, power utility substations, transmission and distribution systems and grounding and bonding requirements can all vary greatly. In all cases, the purpose of a high-quality lightning protection system is to:",
      points: [
        "Secure critical infrastructure and assets",
        "Provide protection in the event of unintentional contact between live conductors and bonded/grounded parts",
        "Ensure maximum safety from lightning",
      ],
      paragraphs: [
        "Nvent ERICO has the experts, experience and technology options to select and design the ideal lightning protection solution for your application from the ground up.",
      ],
      images: [
        { src: "/slps/3.png", alt: "Grounding cables installation" },
        { src: "/slps/4.png", alt: "Electrical panel technician" },
      ],
    },
    {
      title: "Surge Protection Devices",
      paragraphs: [
        "Modern industry relies heavily on electronic automation to increase productivity, ensure safety and provide economic benefits. However, power circuits are often severely polluted with electrical disturbances from switching of electrical loads, electrical noise and even the occasional induced impulse. Since the safety and economic consequences of temporary or permanent failure of industrial equipment cannot be tolerated, protection devices should be installed on critical power circuits.",
        "Nvent ERICO offers a complete line of surge protection devices that can be coordinated into an effectively staged electrical protection plan.",
        "Nvent ERICO offers power surge protection solutions in a coordinated approach where the first stage of defense is the installation of primary protection devices at the mains supply service entrance, followed by secondary protection at distribution branch panels and where necessary, at point-of-use applications.",
      ],
      images: [
        { src: "/slps/5.png", alt: "Surge protection device left" },
        { src: "/slps/6.png", alt: "Surge protection device center" },
        { src: "/slps/7.png", alt: "Surge protection device right" },
      ],
    },
  ],
};
