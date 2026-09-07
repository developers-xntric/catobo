import React from "react";
import { HomeData } from "../types";

export const aviationHomeData: HomeData = {
  hero: {
    title: "Decades of Precision, Across Continents",
    subtitle:
      "Catobo harnesses deep expertise in ME/African military, healthcare, airport, and royal challenges to deliver holistic airfield lighting, vertiport & heliport, lightning protection, and cable systems from inception to completion.",
    buttonText: "Book Your Consultation",
    backgroundImage: "/engr-solutions/hero-bg.png", // placeholder
    partnerLogos: [
      { file: "1-aviation.png", name: "Partner 1" },
      { file: "2-aviation.png", name: "Partner 2" },
      { file: "3-aviation.png", name: "Partner 3" },
      { file: "4-aviation.png", name: "Partner 4" },
      { file: "5-aviation.png", name: "Partner 5" },
    ],
  },
  solutions: {
    badge: "Solutions",
    title: "Complete Aviation Lighting Solutions for High-Risk Environments",
    cards: [],
    stats: {
      title: "Impact Across Continents",
      description:
        "from mission critical sites to healthcare systems, aviation precision initiatives engineered to endure challenges.",
      buttonText: "Book Your Consultation",
      buttonHref: "/",
      backgroundImage: "/aviation/stats.png",
      counters: [
        { target: 18, label: "Military & Defense Projects" },
        { target: 30, label: "Healthcare Facility Deployments" },
        { target: 120, label: "Aviation Installations Executed" },
        { target: 75, label: "Government & Public Sector Installations" },
      ],
    },
  },
  howItWorks: {
    badge: "How It Work",
    title: "Expertise-Driven Delivery",
    description:
      "Our dense knowledge team ensures reliable runway and helipad solutions via streamlined agile steps.",
    videoSrc: "/how-it-works.webm",
    ctaText: "Book Your Consultation",
  },
  aboutCompany: {
    badge: "About Our Company",
    title: "Evolution Through Expertise.",
    description: (
      <>
        <p>
          Complete aviation infrastructure solutions across the Middle East,
          Africa, and India—delivering turnkey Design & Build, Engineering,
          Construction, Certification, and Maintenance for Heliports,
          Vertiports, Airfield Infrastructure for Advanced Air Mobility (AAM),
          and Urban Air Services (UAS).
        </p>
        <p>
          Established in 2007, Catobo has grown into a trusted aviation
          infrastructure specialist with a proven track record across the Middle
          East, Africa, and India. Our journey began with complex military
          airfields, airport developments, and helipad projects, where we
          delivered critical aviation infrastructure under demanding operational
          and regulatory requirements.
        </p>
        <p>
          Today, Catobo provides complete turnkey solutions for heliports,
          vertiports, airfield lighting, aviation lighting systems, firefighting
          systems, aircraft warning lights, and supporting aviation
          infrastructure. We work across Healthcare, Government, Elite Royal,
          Defence, Airports, Offshore, Commercial, and emerging Advanced Air
          Mobility (AAM) sectors, helping clients deliver safe, compliant, and
          futureready aviation facilities.
        </p>
        <p>
          From initial consultation and feasibility studies to design,
          engineering, authority approvals, construction, testing,
          certification, and long-term maintenance, Catobo serves as a single
          point of responsibility throughout the entire project lifecycle. Our
          deep technical expertise, international partnerships, and commitment
          to aviation safety enable us to deliver infrastructure that meets the
          highest international standards while supporting the future of
          helicopter and next-generation air mobility operations.
        </p>
      </>
    ),
    buttonHref: "/aviation/about",

    image: "/aviation/our-company.png", // placeholder
    safelyBg: "/engr-solutions/safely-bg.png", // placeholder
    safelyTitle: "Safety Without Compromise.",
    safelyDesc:
      "Catobo integrates rigorous international compliance ICAO, FAA, IEC, and local regulations into airfield lighting, vertiport & heliport, lightning protection, and cable systems, delivering risk-mitigated excellence from design to maintenance.",
  },
  projects: {
    badge: "Our Projects",
    buttonHre: "/aviation/portfolio",
    title: "Engineering Excellence in Every Project We Deliver",
    description:
      "Showcasing our expertise in aviation, construction, and critical infrastructure solutions. Explore how we deliver safety, compliance, and precision in every project.",
    items: [
      {
        image: "/aviation/project-image.png",
        title: "vertiport & heliport Lighting & Safety System",
        description:
          "Delivered a state-of-the-art helipad lighting system designed for maximum safety, reliability, and operational efficiency. The project included perimeter and touchdown lighting, integrated safety beacons, and a control & monitoring system to ensure continuous compliance with international aviation standards. Engineered to withstand challenging conditions, this installation highlights Catobo’s expertise in end-to-end aviation solutions.",
        link: "/projects/runway-upgrade",
        category: "Aviation",
      },
      {
        image: "/engr-solutions/project-image.png",
        title: "Hospital Emergency Helipad",
        description:
          "Designed and installed a rapid-response lighting system for a critical care facility, ensuring 24/7 accessibility for medical transport.",
        link: "/projects/hospital-helipad",
        category: "Healthcare",
      },
      {
        image: "/engr-solutions/project-image.png",
        title: "Private Estate Vertiport",
        description:
          "Created a bespoke, discreet lightning and landing system for a high-profile residence, balancing high performance with aesthetic requirements.",
        link: "/projects/private-vertiport",
        category: "Aviation",
      },
    ],
    categories: [
      "Aviation",
      "Defense & Military",
      "Healthcare",
      "Transportation",
    ],
  },
  testimonials: {
    badge: "Testimonials",
    title: "Voices of Partnerships",
    description: "What We've Learned Together.",
    buttonHref: "/aviation/testimonials",
    items: [
      {
        id: 1,
        company: "Leads Investments Group L.L.C",
        quote:
          "We had the pleasure of working with Catobo for more than 7 years. Their team has successfully completed multiple projects with our requirements. Catobo has always been responsive to our needs, very knowledgeable in many engineering topics",
        author: "ATIQ HASSAN MUBARAK ",
        designation: "Intl. Security Safety Aviation Advisor ",
        image: "/profile/user-1.png",
      },
      {
        id: 2,
        company: "Dubai Civil Aviation Authority, DCAA",
        quote:
          "Representing the Dubai Civil Aviation Authority, DCAA, I have had numerous dealings with  CATOBO on many occasions. Predominately in the construction and or rehabilitation of Helipads throughout the entire UAE, CATOBO have set the benchmark",
        author: "MICHEAL RUDOLPH ",
        designation: "UAS / UTM SME ",
        image: "/profile/user-2.png",
      },
      {
        id: 3,
        company: "SEED Engineering,  UAE ",
        quote:
          "We have the pleasure of working with Catobo for more than 15 years Every once in a while, you run across another professional whose standards match your own. Catobo for us has been that kind of great experience. We were able to take our idea from concept",
        author: "SANU MATHEW ",
        designation: "CEO",
        image: "/profile/user-3.png",
      },
    ],
  },
};
