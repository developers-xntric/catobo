import { LightningProtectionData } from '../types';

export const aviationLightningProtectionData: LightningProtectionData = {
  hero: {
    title: "Aviation Lightning Protection",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Aviation Lightning Protection" },
    ],
    backgroundImage: "/lightning-protection-bg.png",
  },
  sidebar: {
    title: "Lightning Protection",
    items: [
      { label: "Airport Lightning Protection Systems", hasArrow: true },
      {
        label: "Control Tower Protection",
        hasArrow: false,
        subItems: [{ label: "External Lightning Protection", hasArrow: true }],
      },
      {
        label: "Runway & Taxiway Earthing",
        hasArrow: false,
        subItems: [{ label: "Earth Electrode Design", hasArrow: true }],
      },
      {
        label: "Airfield Lighting Surge Protection",
        hasArrow: false,
        subItems: [{ label: "SPD Selection Guide", hasArrow: true }],
      },
      {
        label: "Fuel Farm Grounding",
        hasArrow: false,
        subItems: [{ label: "Exothermic Welding", hasArrow: true }],
      },
      {
        label: "ATC Radar Tower Protection",
        hasArrow: false,
        subItems: [{ label: "Structural LPS Design", hasArrow: true }],
      },
    ],
  },
  sections: [
    {
      badge: "Airport Lightning Protection",
      title: "Comprehensive Lightning Protection for Airport Facilities",
      points: [
        "Complete lightning protection systems designed to IEC 62305 and FAA standards.",
        "External lightning protection system (LPS) for terminal buildings and control towers.",
        "Internal surge protection devices (SPDs) for sensitive ATC and navigation equipment.",
        "Equipotential bonding networks to prevent dangerous sparking in fuel handling areas.",
        "Earthing systems designed for low impedance in high-resistivity soil conditions.",
        "Annual inspection and certification services to maintain compliance and safety.",
      ],
      images: [
        { src: "/lightning-protection/1.png", alt: "Airport lightning protection system" },
        { src: "/lightning-protection/2.png", alt: "Lightning protection installation", className: "mix-blend-multiply" },
      ],
    },
    {
      badge: "Control Tower Protection",
      title: "External Lightning Protection",
      points: [
        "Air termination systems designed for complex tower geometries and protruding antennas.",
        "Copper or aluminium down conductors routed through dedicated service shafts.",
        "Earth termination system with multiple ring earth electrodes achieving <10 ohm resistance.",
        "Transient overvoltage protection for all incoming power and data lines to ATC equipment.",
        "Structural bonding of all metallic building services to the LPS earthing network.",
      ],
      images: [
        { src: "/lightning-protection/3.png", alt: "Control tower lightning protection" },
        { src: "/lightning-protection/4.png", alt: "Tower air termination", className: "mix-blend-multiply" },
      ],
    },
    {
      badge: "Runway & Taxiway Earthing",
      title: "Earth Electrode Design",
      points: [
        "Ring earth electrodes installed around runway and taxiway lighting circuits.",
        "Copper-clad steel rods driven to achieve specified resistance values.",
        "Exothermic welded connections for permanent, corrosion-free joints.",
        "Earth pits with accessible test points for periodic resistance measurement.",
        "Bonding of all metallic lighting bases, handholes, and cable armors to the earthing system.",
      ],
      images: [
        { src: "/lightning-protection/5.png", alt: "Runway earthing system" },
        { src: "/lightning-protection/6.png", alt: "Earth electrode installation", className: "mix-blend-multiply" },
      ],
    },
    {
      badge: "Airfield Lighting Surge Protection",
      title: "SPD Selection Guide",
      subtitle: "Surge Protection Device Classification",
      points: [
        "Type 1 SPDs at main distribution boards for direct lightning current protection.",
        "Type 2 SPDs at sub-distribution boards for switching and induced surge protection.",
        "Type 3 SPDs at sensitive ATC, navigation, and communication equipment terminals.",
        "Combined Type 1+2 units for CCR (Constant Current Regulator) power supplies.",
        "Signal and data line SPDs for instrument landing systems (ILS) and radio communications.",
      ],
      images: [
        { src: "/lightning-protection/7.png", alt: "Surge protection device installation" },
        { src: "/lightning-protection/8.png", alt: "SPD panel", className: "mix-blend-multiply" },
      ],
      subSections: [
        {
          title: "CCR Surge Protection",
          description: "Constant Current Regulator Protection Package Includes:",
          points: [
            "Type 1+2 combined SPD for AC input power supply.",
            "Series protection for series lighting circuit output.",
            "Remote status monitoring with dry contact output to ATC control system.",
          ],
        },
      ],
      numberCards: [
        {
          number: 1,
          title: "Main Distribution Board Protection",
          subtitle: "Type 1 SPD Installation",
          points: [
            "Installed At The Main Low Voltage Switchboard Serving Airfield Lighting Circuits. Imax 50kA Per Mode, Up To 100kA Total. Voltage Protection Level < 2.5kV At Rated Current.",
          ],
        },
        {
          number: 2,
          title: "Sub-Distribution Protection",
          points: [
            "Type 2 SPDs At CCR Room And Apron Lighting Sub-Boards. Imax 20kA Per Mode With Integrated Thermal Disconnector.",
            "Visual And Remote Indication Of Protection Status. Replaceable Cartridge Modules For Minimal Downtime.",
          ],
        },
        {
          number: 3,
          title: "Equipment Level Protection",
          points: [
            "Type 3 SPDs For ILS, VOR, DME, And Communication Equipment Racks.",
            "Low Voltage Protection Rating < 1.5kV. Multi-Pole Protection For Power, Signal, And Data Lines. Plug-In Modules With RJ45, BNC, And Terminal Block Interfaces.",
          ],
        },
      ],
    },
    {
      badge: "Fuel Farm Grounding",
      title: "Exothermic Welding Systems",
      points: [
        "Permanent molecular bond between copper and steel conductors for earthing networks.",
        "No external power source required – suitable for remote fuel farm locations.",
        "Corrosion-resistant connections that withstand aggressive fuel vapor environments.",
        "Comprehensive training provided for on-site exothermic welding by client teams.",
        "All materials supplied with manufacturer certification and installation guidelines.",
      ],
      pdfLinks: [
        { label: "View Aviation Lightning Protection Brochure" },
      ],
      images: [
        { src: "/lightning-protection/9.png", alt: "Fuel farm grounding installation" },
        { src: "/lightning-protection/10.png", alt: "Exothermic welded connection", className: "mix-blend-multiply" },
      ],
    },
  ],
};
