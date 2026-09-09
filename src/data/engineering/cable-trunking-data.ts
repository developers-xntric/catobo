import { CableTrunkingData } from '../types';

export type CableTrunkingProductSection = {
  id: string;
  badge: string;
  title: string;
  paragraphs: string[];
  subheading?: string;
  features?: string[];
  images: [string, string];
  layout?: "support";
};

export const productSections: CableTrunkingProductSection[] = [
  {
    id: "section-1",
    badge: "Cable Trunking Systems",
    title: "Protected. Organised. Built for the Environment.",
    paragraphs: [
      "Fully enclosed cable routing systems designed to protect and organise electrical cabling across indoor, outdoor and demanding environments.",
      "Available in galvanized, powder-coated and stainless-steel finishes to provide the required level of corrosion resistance, durability and service life.",
    ],
    subheading: "Protected. Organized. Built for the Environment.",
    features: [
      "Hot-dip galvanized steel",
      "Epoxy powder-coated steel",
      "Electro-galvanized steel with epoxy polyester coating",
      "Pre-galvanized zinc-coated steel",
      "Stainless steel SUS/AISI 304 or 316",
    ],
    images: ["/cable-trunking/figma-02.png", "/cable-trunking/figma-01.png"],
  },
  {
    id: "section-2",
    badge: "Perforated Cable Tray Systems",
    title: "Accessible Cable Routing with Natural Ventilation",
    paragraphs: [
      "Open, ventilated cable trays designed to support cable runs while allowing heat dissipation and easy access for installation, maintenance and future modifications.",
      "Available in steel, stainless steel and aluminium configurations for different load requirements and operating environments.",
    ],
    subheading: "Available Materials",
    features: [
      "Hot-dip galvanized steel",
      "Powder-coated steel",
      "Electro-galvanized steel",
      "Pre-galvanized steel",
      "Stainless steel 304 / 316",
      "Aluminium",
    ],
    images: ["/cable-trunking/figma-04.png", "/cable-trunking/figma-03.png"],
  },
  {
    id: "section-9",
    badge: "Cable Ladder Systems",
    title: "Heavy-Duty Support for High Cable Loads",
    paragraphs: [
      "Open-rung cable ladder systems engineered to carry substantial cable loads across longer spans.",
      "The open structure provides excellent airflow and easy cable access, making the system suited to industrial facilities, utilities and other high-capacity installations.",
    ],
    subheading: "Available Finishes",
    features: [
      "Hot-dip galvanized steel",
      "Epoxy powder-coated steel",
      "Stainless steel 304 / 316",
    ],
    images: ["/cable-trunking/figma-18.png", "/cable-trunking/figma-17.png"],
  },
  {
    id: "section-3",
    badge: "Rigid & Flexible Conduits",
    title: "Secure Protection from Connection to Connection",
    paragraphs: [
      "Protective steel conduit systems engineered for safe, reliable routing of electrical wiring.",
      "Manufactured using high-quality mild steel, the conduits provide consistent dimensional accuracy, smooth internal surfaces for easier cable pulling and secure threaded connections.",
    ],
    subheading: "Key Characteristics",
    features: [
      "High-quality mild steel construction",
      "Cold formed and high-frequency welded",
      "Galvanized internal surface",
      "Threaded ends for galvanized couplers",
      "Precision cutting and bending",
      "Consistent dimensional accuracy",
    ],
    images: ["/cable-trunking/figma-06.png", "/cable-trunking/figma-05.png"],
  },
  {
    id: "section-5",
    badge: "Flush Floor Trunking",
    title: "Cable Infrastructure Integrated Into the Floor",
    paragraphs: [
      "A concealed cable routing solution installed directly within the floor structure, allowing power and data services to run below the finished surface while keeping working areas clean and unobstructed.",
      "Available in galvanized and stainless-steel configurations for different project requirements.",
    ],
    images: ["/cable-trunking/figma-10.png", "/cable-trunking/figma-09.png"],
  },
  {
    id: "section-4",
    badge: "Raised Floor Outlet Boxes",
    title: "Power and Data Exactly Where You Need It",
    paragraphs: [
      "Integrated access points designed for raised-floor environments, providing controlled access to power, voice and data connections without disrupting the surrounding floor system.",
      "Engineered to support clean installations while providing convenient cable access from multiple directions.",
    ],
    subheading: "Key Features",
    features: [
      "Pre-galvanized steel box base",
      "Conduit connection knockouts",
      "Reinforced steel frame and lid",
      "Cable access from all four directions",
      "Engineering-grade Nylon 66 frame",
      "Mechanical, impact and fire resistance",
    ],
    images: ["/cable-trunking/figma-08.png", "/cable-trunking/figma-07.png"],
  },
  {
    id: "section-6",
    badge: "Service Outlet Boxes",
    title: "Flexible Connectivity for Modern Floor Systems",
    paragraphs: [
      "Raised Floor Outlet Boxes are supplied with a standard outlet panel and finished with a durable epoxy-polyester powder coating.",
      "Panels can support power, voice or data requirements, with additional configurations available based on project requirements.",
    ],
    images: ["/cable-trunking/figma-12.png", "/cable-trunking/figma-11.png"],
  },
  {
    id: "section-support",
    badge: "Strut Support Systems",
    title: "Flexible Structural Support Without Drilling or Welding",
    paragraphs: [
      "A modular metal framing system designed to support electrical and mechanical services including cable trays, pipework, ducting and equipment.",
      "Components can be bolted together, adjusted, dismantled and reused, helping simplify installation across changing project layouts.",
      "LanRic's system conforms to BS 6946:1988 — Metal Channels Cable Support Systems for Electrical Installations.",
    ],
    images: ["/cable-trunking/figma-final.png", "/cable-trunking/figma-final.png"],
    layout: "support",
  },  {
    id: "section-7",
    badge: "Wiremesh Cable Tray Systems",
    title: "Lightweight Routing for Flexible Installations",
    paragraphs: [
      "Open wire-mesh cable trays provide a lightweight and highly ventilated alternative to conventional tray systems.",
      "They can be cut and shaped on site, making them particularly suitable for complex, constrained or frequently changing cable routes.",
    ],
    images: ["/cable-trunking/figma-14.png", "/cable-trunking/figma-13.png"],
  },
  {
    id: "section-8",
    badge: "Fibre Optic & Telecommunication Raceways",
    title: "Dedicated Protection for Sensitive Data Infrastructure",
    paragraphs: [
      "Purpose-built containment systems for fibre optic and telecommunications cabling.",
      "Dedicated routing helps protect sensitive data lines while keeping them organised and separated from other services.",
    ],
    images: ["/cable-trunking/figma-16.png", "/cable-trunking/figma-15.png"],
  },




];

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
      { label: "Overview", hasArrow: true },
      { label: "Cable Trunking Systems", hasArrow: true },
      { label: "Perforated Cable Tray Systems", hasArrow: true },
      { label: "Cable Ladder Systems", hasArrow: true },
      { label: "Rigid & Flexible Conduits", hasArrow: true },
      { label: "Flush Floor Trunking", hasArrow: true },
      { label: "Raised Floor Outlet Boxes", hasArrow: true },
      { label: "Service Outlet Boxes", hasArrow: true },
      { label: "Strut Support Systems", hasArrow: true },
      { label: "Wiremesh Cable Tray Systems", hasArrow: true },
      { label: "Fibre Optic & Telecommunication Raceways", hasArrow: true },
    ],
  }
};