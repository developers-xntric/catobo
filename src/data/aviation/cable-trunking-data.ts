import { CableTrunkingData } from '../types';

export const aviationCableTrunkingData: CableTrunkingData = {
  hero: {
    title: "Aviation Cable Trunking",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Aviation Cable Trunking" },
    ],
    backgroundImage: "/cable-trunking-bg.png",
  },
  sidebar: {
    title: "Aviation Cable Trunking",
    items: [
      { label: "Airport Cable Management Systems", hasArrow: true },
      {
        label: "Runway Cable Troughs",
        hasArrow: false,
        subItems: [{ label: "Material & Finishes", hasArrow: true }],
      },
      {
        label: "Taxiway Cable Ducts",
        hasArrow: false,
        subItems: [{ label: "Material & Finishes", hasArrow: true }],
      },
      {
        label: "Apron Cable Trenches",
        hasArrow: false,
        subItems: [{ label: "Material & Finishes", hasArrow: true }],
      },
      {
        label: "Terminal Floor Trunking",
        hasArrow: false,
        subItems: [{ label: "Flush Floor Trunking", hasArrow: true }],
      },
      {
        label: "Control Tower Cable Support",
        hasArrow: false,
        subItems: [{ label: "Wiremesh Cable Tray Systems", hasArrow: true }],
      },
    ],
  },
  sections: [
    {
      badge: "Airport Cable Management",
      title: "Airport Cable Management Systems",
      points: [
        "Hot-dip galvanized steel to BS EN ISO 1461 (BS 729) for corrosion resistance in harsh airport environments.",
        "Epoxy powder coated finish with minimum film thickness 45um for extended service life near runways.",
        "Pre-galvanized zinc coated steel JIS G3302 equivalent to BS EN 10142 with G275 coating designation.",
        "Stainless steel sheet to SUS 304, SUS 316 for high-corrosion zones near de-icing areas.",
        "Aluminium to AA5052-H32 for lightweight runway edge lighting cable supports.",
        "All systems designed to withstand jet blast, fuel spillage, and extreme weather conditions.",
      ],
      images: [
        { src: "/cable-trunking/1.png", alt: "Airport cable trunking systems" },
        { src: "/cable-trunking/2.png", alt: "Runway cable management product", className: "mix-blend-multiply" },
      ],
    },
    {
      badge: "Runway Cable Troughs",
      title: "Material & Finishes",
      points: [
        "Heavy-duty hot-dip galvanized steel to BS EN ISO 1461 for direct burial runway crossings.",
        "Cold rolled steel sheet with epoxy powder coating for above-ground installations.",
        "Stainless steel SUS 316 for areas exposed to de-icing chemicals and hydraulic fluids.",
        "Integral cover plate systems designed for rapid access during maintenance.",
      ],
      images: [
        { src: "/cable-trunking/3.png", alt: "Runway cable trough" },
        { src: "/cable-trunking/4.png", alt: "Runway trough installation", className: "mix-blend-multiply" },
      ],
    },
    {
      badge: "Taxiway Cable Ducts",
      title: "Material & Finishes",
      points: [
        "Manufactured from high-strength mild steel with superior forming properties for curved taxiway paths.",
        "High-frequency welded construction for leak-proof duct joints.",
        "Internal galvanised surface for easier cable pulling and future replacement.",
        "Threaded coupler connections for rapid installation and relocation.",
        "Dimensionally accurate to ensure precise alignment with airfield lighting bases.",
        "Uniform quality certified to international airport authority standards.",
      ],
      images: [
        { src: "/cable-trunking/5.png", alt: "Taxiway cable ducts" },
        { src: "/cable-trunking/6.png", alt: "Duct product", className: "mix-blend-multiply" },
      ],
    },
    {
      badge: "Apron Cable Trenches",
      title: "Flush Floor Trunking",
      subtitle: "Material & Finishes",
      points: [
        "Hot-dip galvanized steel to BS EN ISO 1461 for heavy-duty apron areas.",
        "Pre-galvanized zinc coated steel JIS G3302 equivalent to BS EN 10142 with G275 coating.",
        "Stainless steel SUS 304 or SUS 316 for fuel-resistant zones.",
        "Recessed cover systems rated for aircraft live-load bearing capacity.",
      ],
      images: [
        { src: "/cable-trunking/7.png", alt: "Apron cable trench installation" },
        { src: "/cable-trunking/8.png", alt: "Apron trench product", className: "mix-blend-multiply" },
      ],
      subSections: [
        {
          title: "Service Outlet Box",
          description: "Aircraft Service Pit Box Consists Of The Following Components:",
          points: [
            "Heavy-duty outlet frame rated for aircraft stand loading.",
            "Polyamide frame reinforced with 2.5mm steel sheet infill.",
            "Epoxy-Polyester Powder Coated service panel for ground power and fuel data.",
          ],
        },
      ],
      numberCards: [
        {
          number: 1,
          title: "Apron Service Pit Box",
          subtitle: "Consists Of 1 Unit Non-Combustible Metal Frame",
          points: [
            "Box Base – Manufactured From Pre-Galvanized Zinc Coated Steel Sheet To JIS G3302 With Suitable Knockouts For Conduit Connection To Airfield Lighting Circuits.",
          ],
        },
        {
          number: 2,
          title: "Frame And Cover With Steel Lid",
          points: [
            "Frame And Cover Assembled With 2.5mm Strengthened Steel Sheet With Anti-Slip Surface. Cover Is Fully Removable For Cable Access In All Directions.",
            "Light Grey Colour Frame Components Moulded From Engineering Plastics (Nylon 66) Providing Mechanical Strength, Impact And Fire Resistance For Airport Environments.",
          ],
        },
        {
          number: 3,
          title: "Epoxy-Polyester Powder Coated Service Pit",
          points: [
            "Standard Service Pit Panels Provided For Each Apron Position Including Ground Power, Pre-Conditioned Air, And Fuel Data Connections.",
            "Service Panels Fabricated From Cold-Rolled Steel Sheet With Epoxy-Polyester Powder Coating. Additional Panels Available Upon Request For Future Expansion.",
          ],
        },
      ],
    },
    {
      badge: "Control Tower Cable Support",
      title: "Wiremesh Cable Tray Systems",
      points: [
        "Manufactured from low carbon steel wire with superior mechanical properties for control tower installations.",
        "Hot-dip galvanized to BS EN ISO 1461 or zinc electroplated for indoor tower environments.",
        "Modular design for rapid installation in confined tower cable risers.",
        "Available in standard widths: 50mm, 100mm, 150mm, 200mm, 300mm, 400mm, 500mm, 600mm.",
        "Compatible with aviation-grade cable management accessories and seismic-rated brackets.",
        "Wiremesh construction allows free airflow for optimal cooling of sensitive ATC electronics.",
      ],
      pdfLinks: [
        { label: "View Aviation Wiremesh Cable Tray PDF" },
      ],
      images: [
        { src: "/cable-trunking/9.png", alt: "Control tower cable tray installation" },
        { src: "/cable-trunking/10.png", alt: "Aviation cable tray product", className: "mix-blend-multiply" },
      ],
    },
  ],
};
