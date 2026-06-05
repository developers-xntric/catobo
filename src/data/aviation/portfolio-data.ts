import { PortfolioData } from '../types';

export const aviationPortfolioData: PortfolioData = {
  hero: {
    title: "Our Network of Associate Companies & Strategic Partners",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Portfolio" },
    ],
    backgroundImage: "/aviation/portfolio-bg.png",
  },
  associateImage: "/portfolio/poseidon.png",
  associateTitle: "Associated Companies & Affiliates",
  associateDescription: "AirPoseidon strives to foster long-term relationships with its customers in an effort to attain their true satisfaction by providing a wide spectrum of services in the Aviation sector. We offer the below services (either directly/in conjunction with our associates & based on geographical locations). Please click on the logo for further information.",
  associates: [
    { id: 1, title: "Passenger Charters" },
    { id: 2, title: "VIP Helicopter" },
    { id: 3, title: "Med-Evac Flights" },
    { id: 4, title: "Dry Lease of Helicopters" },
    { id: 5, title: "Wet Lease of Helicopters" },
    { id: 6, title: "Aircraft Sales (Fixed Wing & Rotary)" },
    { id: 7, title: "Training" },
    { id: 8, title: "Management" },
  ],
  partners: {
    badge: "Our Partners",
    title: "Technology & Industry Partners",
    description: "Some of the global players in their field of excellence with whom we have partnered for various prestigious projects",
    logoCount: 5,
    logosBasePath: "/aviation/partners",
  },
};
