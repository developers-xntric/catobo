import { PortfolioData } from '../types';

export const engineeringPortfolioData: PortfolioData = {
  hero: {
    title: "Our Network of Associate Companies & Strategic Partners",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Portfolio" },
    ],
    backgroundImage: "/portfolio/bg.png",
  },
  associateImage: "/portfolio/poseidon.png",
  associateTitle: "Associated Companies & Affiliates",
  associateDescription: "AirPoseidon strives to foster long-term relationships with its customers in an effort to attain their true satisfaction by providing a wide spectrum of services in the Aviation sector. We offer the below services (either directly/in conjunction with our associates & based on geographical locations). Please click on the logo for further information.",
  associates: [
    { id: 1, title: "Passage of Chains" },
    { id: 2, title: "Distinguished Marks" },
    { id: 3, title: "The status of the companies" },
    { id: 4, title: "The future of the market" },
    { id: 5, title: "Training" },
    { id: 6, title: "Management" },
  ],
  partners: {
    badge: "Partners",
    title: "Technology & Industry Partners",
    description: "Some of the global players in their field of excellence with whom we have partnered for various prestigious projects",
    logoCount: 7,
  },
};
