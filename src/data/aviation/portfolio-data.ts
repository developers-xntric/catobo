import { PortfolioData } from '../types';

export const aviationPortfolioData: PortfolioData = {
  hero: {
    title: "Aviation Portfolio",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Aviation Portfolio" },
    ],
    backgroundImage: "/portfolio-bg.png",
  },
  associateImage: "/aviation/associate.png",
  associateTitle: "Global Aviation Partners & Affiliations",
  associateDescription: "Catobo's Aviation Division is proud to be associated with leading international aviation authorities, regulatory bodies, and industry partners, ensuring our solutions meet the highest global standards.",
  associates: [
    { id: 1, title: "ICAO – International Civil Aviation Organization" },
    { id: 2, title: "FAA – Federal Aviation Administration" },
    { id: 3, title: "EASA – European Union Aviation Safety Agency" },
    { id: 4, title: "GCAA – General Civil Aviation Authority (UAE)" },
    { id: 5, title: "IATA – International Air Transport Association" },
    { id: 6, title: "ACI – Airports Council International" },
    { id: 7, title: "Dubai Airshow Exhibitor" },
    { id: 8, title: "International Heliport & Vertiport Association" },
  ],
  partners: {
    badge: "Our Partners",
    title: "Trusted by Leading Aviation Organizations",
    description: "We collaborate with premier aviation organizations, technology providers, and engineering firms to deliver world-class airport infrastructure solutions.",
    logoCount: 6,
  },
};
