export const consultationWhyChoose = [
  "Turnkey Aviation Consultancy",
  "ICAO, FAA, CAP 437 & Local Authority Compliance",
  "Design to Certification Support",
  "Experienced Aviation Engineering Team",
  "Single Point of Responsibility",
] as const;

export const consultationServices = [
  ["Feasibility Studies", "Evaluate project viability, operational requirements, helicopter suitability, and site constraints before design begins."],
  ["Site Assessment & OLS Studies", "Comprehensive site inspections, Obstacle Limitation Surface (OLS) assessments, flight path evaluations, and obstacle analysis."],
  ["Aviation Design Consultancy", "Development of heliport, vertiport, helideck, and airfield concepts, layouts, and engineering solutions tailored to operational requirements."],
  ["Regulatory Compliance", "Guidance on ICAO, FAA, CAP 437, GCAA, and local aviation authority requirements throughout the project lifecycle."],
  ["Authority Approvals", "Preparation of technical submissions, coordination with authorities, and support throughout the approval process."],
  ["Project Planning", "Construction methodology, phasing, procurement strategy, budget optimization, and execution planning."],
] as const;

export const consultationDeliverables = [
  "Feasibility Reports",
  "OLS Reports",
  "Aviation Risk Assessments",
  "Concept Designs",
  "Detailed Engineering Drawings",
  "Firefighting Design Calculations",
  "Technical Specifications",
  "Bill of Quantities (BOQ)",
  "Authority Submission Documents",
  "Certification Support",
] as const;

export const consultationIndustries = [
  ["Hospitals & Emergency Medical Services", "consultation-industry-1.png"],
  ["Airports & Airfields", "consultation-industry-2.png"],
  ["Government & Public Infrastructure", "consultation-industry-3.png"],
  ["Defence & Military Facilities", "consultation-industry-4.png"],
  ["Oil & Gas", "consultation-industry-5.png"],
  ["Offshore Platforms", "consultation-industry-6.png"],
  ["Commercial Developments", "consultation-industry-7.png"],
  ["Advanced Air Mobility (AAM)", "consultation-industry-8.png"],
  ["Urban Air Mobility (UAM) / Vertiports", "consultation-industry-9.png"],
] as const;

export const consultationCompliance = [
  ["Regulatory Compliance", "We ensure every project is designed and executed in accordance with the latest aviation regulations and industry standards, supporting smooth authority approvals and long-term compliance.", "consultation-compliance-icon-1.png"],
  ["Operational Safety", "Safety is at the core of every design. We evaluate operational risks, obstacle clearances, approach paths, lighting, markings, and safety systems to ensure safe helicopter operations.", "consultation-compliance-icon-2.png"],
  ["Technical Assurance", "Our engineering team reviews every aspect of the project, from concept and design to construction and commissioning, ensuring technical accuracy and reliable performance.", "consultation-compliance-icon-3.png"],
  ["Authority Coordination", "We support clients throughout the approval process by preparing technical documentation, coordinating with regulatory authorities, addressing comments, and assisting until project certification.", "consultation-compliance-icon-4.png"],
] as const;

export const consultationStandards = [
  "ICAO Annex 14, Volume II \u2013 Heliports",
  "ICAO Doc 9261 \u2013 Heliport Manual",
  "FAA AC 150/5390-2D \u2013 Heliport Design",
  "NFPA 418 \u2013 Standards for Heliports",
  "CAP 437 \u2013 Standards for Offshore Helicopter Landing Areas (where applicable)",
  "Applicable Civil Aviation Authority Regulations (e.g., GCAA and other local authorities)",
] as const;

export const consultationStandardsDescription =
  "By integrating these standards from the earliest design stage, Catobo delivers aviation facilities that achieve regulatory compliance, operational safety, and a smooth path to authority approval and certification.";
export const consultationPageContent = {
  hero: {
    title: "Aviation Consultation",
    backgroundImage: "/consultation-bg.png",
  },
  intro: {
    title: "Engineering Aviation Projects with Confidence",
    paragraphs: [
      "Every successful aviation facility begins with the right planning. Catobo provides specialist aviation consultation for heliports, vertiports, helidecks, airfields, and emerging Advanced Air Mobility (AAM) infrastructure. Our team supports clients from the earliest feasibility stage through design, authority approvals, construction, certification, and operational readiness.",
      "With decades of project experience across the Middle East, Africa, and India, we combine engineering expertise with practical aviation knowledge to deliver safe, compliant, and future-ready infrastructure.",
    ],
  },
  whyChooseTitle: "Why Choose Catobo?",
  servicesTitle: "Aviation Consultation Service",
  deliverables: {
    title: "Deliverables",
    intro: "Our consultation packages may include:",
  },
  industriesTitle: "Industries We Serve",
  cta: {
    title: "From Concept To Certification",
    description: "Whether you are planning a new heliport, upgrading an existing facility, or developing infrastructure for next-generation air mobility, Catobo provides the engineering expertise, regulatory guidance, and technical support required to deliver a safe, compliant, and operationally ready aviation facility.",
    buttonLabel: "Let's build your aviation project together.",
  },
  standards: {
    title: "Standards & Regulatory Compliance",
    intro: "Every aviation facility designed by Catobo is developed in accordance with internationally recognized aviation and fire safety standards, together with the applicable requirements of local aviation authorities. Our engineering approach ensures every project is safe, compliant, and ready for certification.",
    lead: "Our designs comply with, but are not limited to",
  },
  compliance: {
    title: "Standards, Compliance & Safety Assurance",
    description: "All designs are developed in line with recognized international aviation and fire safety standards. Our team ensures that systems are optimized for performance while meeting regulatory approval requirements.",
  },
} as const;

export const consultationImages = {
  hero: "/consultation-bg.png",
  deliverables: "/consultation-cta.png",
  ctaBackground: "/consultation-deliverables.png",
  standards: "/consultation-compliance-image.png",
  serviceIconPrefix: "/consultation-service-",
} as const;