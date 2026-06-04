import { ExplosionProofData } from '../types';

export const aviationExplosionProofData: ExplosionProofData = {
  hero: {
    title: "Aviation Explosion Proof Systems",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Aviation Explosion Proof" },
    ],
    backgroundImage: "/explosion-proof-bg.png",
  },
  sidebar: {
    title: "Explosion Proof Solutions",
    items: [
      { label: "Airport Fuel Station Protection", hasArrow: true },
      {
        label: "Hangar Explosion Proof Lighting",
        hasArrow: false,
        subItems: [{ label: "Certification Standards", hasArrow: true }],
      },
      {
        label: "Aircraft Refueling Area Equipment",
        hasArrow: false,
        subItems: [{ label: "ATEX & IECEx Ratings", hasArrow: true }],
      },
      {
        label: "Fuel Hydrant Pit Systems",
        hasArrow: false,
        subItems: [{ label: "Material & Finishes", hasArrow: true }],
      },
      {
        label: "Aviation Fuel Farm Protection",
        hasArrow: false,
        subItems: [{ label: "Zone Classification", hasArrow: true }],
      },
      {
        label: "Ground Power Unit Protection",
        hasArrow: false,
        subItems: [{ label: "Explosion Proof Enclosures", hasArrow: true }],
      },
    ],
  },
  sections: [
    {
      badge: "Airport Fuel Station Protection",
      title: "Explosion Proof Systems for Aviation Fuel Stations",
      points: [
        "ATEX and IECEx certified equipment for Zone 1 and Zone 2 hazardous areas.",
        "Explosion proof lighting fixtures designed for aircraft refueling positions.",
        "Intrinsically safe control systems for fuel pump monitoring and emergency shutdown.",
        "Weatherproof enclosures rated IP66 for outdoor apron installation.",
        "Stainless steel construction for corrosion resistance in fuel-exposed environments.",
        "Compliant with IEC 60079, ATEX 2014/34/EU, and local civil aviation authority regulations.",
      ],
      images: [
        { src: "/explosion-proof/1.png", alt: "Airport fuel station explosion proof system" },
        { src: "/explosion-proof/2.png", alt: "Explosion proof lighting at refueling area", className: "mix-blend-multiply" },
      ],
    },
    {
      badge: "Hangar Explosion Proof Lighting",
      title: "Certification Standards",
      points: [
        "Explosion proof LED luminaires certified for Zone 1 and Zone 2 hangar areas.",
        "High bay lighting designed for aircraft hangar maintenance bays.",
        "Emergency lighting systems with battery backup for safe egress during incidents.",
        "Corrosion-resistant housing suitable for exposure to fuel vapors and cleaning solvents.",
        "Uniform illumination meeting ICAO and national hangar lighting standards.",
      ],
      images: [
        { src: "/explosion-proof/3.png", alt: "Hangar explosion proof lighting" },
        { src: "/explosion-proof/4.png", alt: "Hangar lighting installation", className: "mix-blend-multiply" },
      ],
    },
    {
      badge: "Aircraft Refueling Area Equipment",
      title: "ATEX & IECEx Ratings",
      points: [
        "Explosion proof junction boxes and cable glands for refueling hydrant pits.",
        "Intrinsically safe barriers for fuel level sensing and overfill protection.",
        "Explosion proof solenoid valves and actuators for fuel flow control.",
        "Equipment rated for Gas Group IIA, IIB, and Temperature Class T3-T6.",
        "All equipment supplied with full ATEX documentation and certificate of conformity.",
      ],
      images: [
        { src: "/explosion-proof/5.png", alt: "Refueling area explosion proof equipment" },
        { src: "/explosion-proof/6.png", alt: "ATEX rated junction box", className: "mix-blend-multiply" },
      ],
    },
    {
      badge: "Fuel Hydrant Pit Systems",
      title: "Material & Finishes",
      subtitle: "Hydrant Pit Construction",
      points: [
        "316L stainless steel hydrant pits for maximum corrosion resistance.",
        "Explosion proof electrical connections with hermetically sealed terminals.",
        "Epoxy powder coated internal components for additional chemical resistance.",
        "Hydrant pit covers rated for aircraft live-load bearing capacity.",
        "Automatic bonding and grounding systems for static discharge prevention.",
      ],
      images: [
        { src: "/explosion-proof/7.png", alt: "Fuel hydrant pit system" },
        { src: "/explosion-proof/8.png", alt: "Hydrant pit installation", className: "mix-blend-multiply" },
      ],
      subSections: [
        {
          title: "Hydrant Pit Electrical Assembly",
          description: "Explosion Proof Hydrant Pit Components:",
          points: [
            "ATEX certified terminal enclosures with dual cable entry.",
            "Intrinsically safe pressure and flow transducer interfaces.",
            "Emergency shut-off actuator with manual override.",
          ],
        },
      ],
      numberCards: [
        {
          number: 1,
          title: "Hydrant Pit Enclosure",
          subtitle: "316L Stainless Steel Fabricated Body",
          points: [
            "Base Enclosure – Manufactured From 316L Stainless Steel Plate With Certified Explosion Proof Rating For Zone 1 Hazardous Areas. All Welds Ground Smooth And Passivated Per ASTM A380.",
          ],
        },
        {
          number: 2,
          title: "Cover And Service Access",
          points: [
            "Hinged And Gasketed Cover With Stainless Steel Hardware. Cover Interlocked With Power Disconnect To Prevent Opening Under Load.",
            "Neoprene Gasket Provides Weatherproof Seal To IP66 Standard. Cover Rated For 15-Ton Aircraft Wheel Load.",
          ],
        },
        {
          number: 3,
          title: "Internal Electrical Assembly",
          points: [
            "Explosion Proof Terminal Enclosures With Pre-Wired Intrinsically Safe Barriers For Level Sensing, Pressure Monitoring, And Emergency Shutdown Signals.",
            "All Wiring Terminations In Nickel-Plated Brass Or Stainless Steel. Cable Entries Fitted With ATEX Certified Glands For Armoured Cable.",
          ],
        },
      ],
    },
    {
      badge: "Aviation Fuel Farm Protection",
      title: "Zone Classification Standards",
      points: [
        "Zone 0: Inside fuel storage tank vapor spaces – intrinsically safe equipment only.",
        "Zone 1: Within 1m of fuel hydrant pits and refueling vehicle connections – explosion proof apparatus.",
        "Zone 2: Fuel farm perimeter up to 3m from Zone 1 boundaries – increased safety equipment.",
        "Full hazardous area classification drawings provided with each fuel farm installation.",
        "Comprehensive earthing and bonding networks designed per IEC 62305 and local codes.",
      ],
      pdfLinks: [
        { label: "View Aviation Explosion Proof Brochure" },
      ],
      images: [
        { src: "/explosion-proof/9.png", alt: "Aviation fuel farm protection" },
        { src: "/explosion-proof/10.png", alt: "Fuel farm zone classification", className: "mix-blend-multiply" },
      ],
    },
  ],
};
