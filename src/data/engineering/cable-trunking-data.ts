import { CableTrunkingData } from '../types';

export const engineeringCableTrunkingData: CableTrunkingData = {
  hero: {
    title: "Cable Trunking",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Cable Trunking" },
    ],
    backgroundImage: "/cable-trunking-bg.png",
  },
  sidebar: {
    title: "Cable Trunking",
    items: [
      { label: "Cable Trunking Systems", hasArrow: true },
      {
        label: "Perforated Cable Tray",
        hasArrow: false,
        subItems: [{ label: "Material & Finishes", hasArrow: true }],
      },
      {
        label: "Cable Ladder Systems",
        hasArrow: false,
        subItems: [{ label: "Material & Finishes", hasArrow: true }],
      },
      {
        label: "Rigid Flexible Conduits",
        hasArrow: false,
        subItems: [{ label: "Material & Finishes", hasArrow: true }],
      },
      {
        label: "Floor Trunking Systems",
        hasArrow: false,
        subItems: [{ label: "Flush Floor Trunking", hasArrow: true }],
      },
      {
        label: "Strut Support Systems",
        hasArrow: false,
        subItems: [{ label: "Wiremesh Cable Tray Systems", hasArrow: true }],
      },
    ],
  },
  sections: [
    {
      badge: "Cable Trunking",
      title: "Cable Trunking Systems",
      points: [
        "Cold rolled steel sheet to JIS G3141 SPCC SD/Hot-Rolled steel sheet to JIS G3131 SPHC, Hot-dip galvanized BS EN ISO 1461 (BS 729) after fabrication.",
        "Cold rolled steel sheet to JIS G3141 SPCC SD/ Epoxy Powder Coat with minimum film thickness 45um after fabrication.",
        "Electro-galvanized steel sheet to JIS G3313 SECC equivalent to BS EN 101152 with Epoxy Polyester Powder Coating with minimum film thickness 45um after fabrication.",
        "Pre-galvanized zinc coated steel JIS G3302 equivalent to BS EN 10142 (BS 2989) with a minimum coating designation of G275. (BS EN 10142 supersedes BS2989).",
        "Stainless Steel Sheet to SUS 304, SUS, 316. AISI type 304 or AISI Type 316.",
        "Aluminium to AA5052-H32, 1100-H14, 3003-H14, 5052-H32, 6061-T6.",
      ],
      images: [
        { src: "/cable-trunking/1.png", alt: "Cable trunking systems" },
        { src: "/cable-trunking/2.png", alt: "Cable trunking product", className: "mix-blend-multiply" },
      ],
    },
    {
      badge: "Perforated Cable Tray",
      title: "Material & Finishes",
      points: [
        "Cold rolled steel to JIS G3141 SPCC SD/Hot-Rolled steel sheet to JIS G3141 SPHC, Hot-dip Galvanized BS EN ISO 1461 (BS 729) after fabrication.",
        "Cold rolled steel sheet to JIS G3141 SPCC SD/Epoxy Powder Coated with minimum film thickness 45um after fabrication.",
        "Stainless Steel sheet to SUS 304, SUS, 316. AISI Type 304 or AISI Type 316.",
      ],
      images: [
        { src: "/cable-trunking/3.png", alt: "Perforated cable tray" },
        { src: "/cable-trunking/4.png", alt: "Cable ladder", className: "mix-blend-multiply" },
      ],
    },
    {
      badge: "Rigid Flexible Conduits",
      title: "Material & Finishes",
      points: [
        "Made of high quality mild steel strips with superior bending and forming properties.",
        "Manufactured by cold forming and high frequency welding.",
        "Internal surface is galvanised for easier wire pulling and pushing.",
        "Threaded on both end to be fitted with galvanized couplers.",
        "Easier to cut, thread, bend and pull wire.",
        "Dimensionally accurate. Uniform quality in every aspect.",
      ],
      images: [
        { src: "/cable-trunking/5.png", alt: "Rigid flexible conduits" },
        { src: "/cable-trunking/6.png", alt: "Conduit product", className: "mix-blend-multiply" },
      ],
    },
    {
      badge: "Floor Trunking Systems",
      title: "Flush Floor Trunking",
      subtitle: "Material & Finishes",
      points: [
        "Cold rolled steel sheet to JIS G3141 SPCC SD/Hot-Rolled steel sheet to JIS G3131 SPHC, Hot-dip galvanized BS EN ISO 1461 (BS 729) after fabrication.",
        "Pre-galvanized zinc coated steel JIS G3302 equivalent to BS EN 10142 (BS 2989) with a minimum coating designation of G275. (BS EN 10142 supersedes BS2989).",
        "Stainless steel sheet to SUS 304, SUS, 316. AISI type 304 or AISI type 316.",
      ],
      images: [
        { src: "/cable-trunking/7.png", alt: "Flush floor trunking installation" },
        { src: "/cable-trunking/8.png", alt: "Flush floor trunking product", className: "mix-blend-multiply" },
      ],
      subSections: [
        {
          title: "Service Outlet Box",
          description: "Raised Floor Box Consists Of The Following Components:",
          points: [
            "Basic Outlet Frame.",
            "Polyamide Frame and confine with 2.5mm steel sheet in fill.",
            "Epoxy-Polyester Powder Coated service and Data outlet Panel.",
          ],
        },
      ],
      numberCards: [
        {
          number: 1,
          title: "Raised Floor Outlet Box",
          subtitle: "Consists Of 1 Unit Non-Combustible Metal Frame",
          points: [
            "Box Base – Manufactured From Pre-Galvanized Zinc Coated Steel Sheet To JIS G3302 Equivalent To BS EN 10142 (BS EN 10142 Supersedes BS2989) With Suitable Knockout For Conduit Connection.",
          ],
        },
        {
          number: 2,
          title: "Frame And Trap With Steel Lid Affix",
          points: [
            "Frame And Portable Lid Interleaves With 2.5mm Strengthen Steel Sheet With 7mm Carpet Recess. Trap Is Fully Overturned Without Removing The Frame Thus Makes Cable Way Be Available In Four Directions (Optionally).",
            "Light Grey Colour Frame And Needed Parts Are Moulded From Engineering Plastics (Nylon 66) That Provide Mechanical Strength, Impact And Fire Resistance.",
          ],
        },
        {
          number: 3,
          title: "Epoxy-Polyester Powder Coated Service Outlet Box",
          points: [
            "Standard Services Outlet Panels Will Be Provided For Each Set Of Raised Floor Outlet Box Sold.",
            "Service Outlet Panels Suitable For Powder, Voices And Data Are Fabricated From Cold-Rolled Steel Sheet With Epoxy – Polyester Powder Coated And Additional Service Outlet Panels Are Also Available Upon Request.",
          ],
        },
      ],
    },
    {
      badge: "Strut Support Systems",
      title: "Wiremesh Cable Tray Systems",
      points: [
        "Manufactured from low carbon steel wire with superior mechanical properties.",
        "Hot-dip galvanized to BS EN ISO 1461 or zinc electroplated for corrosion resistance.",
        "Modular design for rapid installation and flexible routing.",
        "Available in standard widths: 50mm, 100mm, 150mm, 200mm, 300mm, 400mm, 500mm, 600mm.",
        "Compatible with standard cable management accessories and support brackets.",
        "Wiremesh construction allows free airflow for optimal cable cooling.",
      ],
      pdfLinks: [
        { label: "View Wiremesh Cable Tray PDF" },
      ],
      images: [
        { src: "/cable-trunking/9.png", alt: "Wiremesh cable tray installation" },
        { src: "/cable-trunking/10.png", alt: "Wiremesh cable tray product", className: "mix-blend-multiply" },
      ],
    },
  ],
};
