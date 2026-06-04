import React from 'react';
import { AboutData } from '../types';

export const aviationAboutData: AboutData = {
    trustedSolutions: {
        badge: "Our Aviation Mission",
        title: "World-Class Aviation Solutions For Global Safety",
        description: "Our mission is to provide the aviation industry with innovative, reliable, and compliant technical solutions that ensure the highest levels of safety and efficiency.",
        cards: [
            {
                title: "Aviation Expertise",
                desc: "Specialized knowledge in airfield lighting, PAPI systems, and helipad safety protocols.",
                icon: (
                    <svg width="66" height="69" viewBox="0 0 66 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Aviation-themed SVG placeholder */}
                        <circle cx="33" cy="34.5" r="30" stroke="url(#paint0_linear_aviation)" strokeWidth="2" />
                        <path d="M15 34.5 H51" stroke="url(#paint1_linear_aviation)" strokeWidth="2" />
                        <defs>
                            <linearGradient id="paint0_linear_aviation" x1="0" y1="0" x2="66" y2="69" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#168DCA" />
                                <stop offset="1" stopColor="#0F2453" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_aviation" x1="15" y1="34.5" x2="51" y2="34.5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#168DCA" />
                                <stop offset="1" stopColor="#0F2453" />
                            </linearGradient>
                        </defs>
                    </svg>
                ),
            },
            {
                title: "Global Aviation Network",
                desc: "Supporting international airports and private flight facilities with a robust network of technical experts.",
                icon: (
                    <svg width="64" height="69" viewBox="0 0 64 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="15" width="44" height="40" rx="5" stroke="url(#paint0_linear_aviation2)" strokeWidth="2" />
                        <path d="M32 5 V64" stroke="url(#paint1_linear_aviation2)" strokeWidth="2" />
                        <defs>
                            <linearGradient id="paint0_linear_aviation2" x1="10" y1="15" x2="54" y2="55" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#168DCA" />
                                <stop offset="1" stopColor="#0F2453" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_aviation2" x1="32" y1="5" x2="32" y2="64" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#168DCA" />
                                <stop offset="1" stopColor="#0F2453" />
                            </linearGradient>
                        </defs>
                    </svg>
                ),
            },
        ]
    },
    engineeringExcellence: {
        badge: "About Catobo Aviation",
        title: "Innovating Flight Safety for a Dynamic World",
        image: "/engr-solutions/about/about.png",
        paragraphs: [
            <p key="1">
                Catobo's Aviation Division was established with a clear vision: to redefine safety and efficiency in aviation infrastructure. Our journey began with a focus on specialized lighting systems and has since expanded to encompass a full suite of technical solutions for the modern airfield.
            </p>,
            <p key="2">
                We understand that in aviation, there is no room for error. That's why our approach is rooted in uncompromising quality and rigorous adherence to international standards set by ICAO, FAA, and other regulatory bodies. Our team of experts brings decades of collective experience to every project.
            </p>,
            <p key="3">
                From large-scale international airport upgrades to bespoke private helipad installations, we deliver end-to-end solutions that include design, supply, installation, and ongoing maintenance. Our technology-driven mindset ensures that we are always at the forefront of aviation innovation.
            </p>,
            <p key="4">
                Today, Catobo is recognized as a leader in the field, trusted by aviation authorities and private operators alike. We continue to push the boundaries of what's possible, ensuring that every takeoff and landing is supported by the very best in aviation engineering.
            </p>
        ]
    },
    ourApproach: {
        badge: "Our Operational Standards",
        title: "A Rigorous Methodology for Unmatched Aviation Safety",
        description: "Every aviation project we undertake follows a strict set of protocols designed to guarantee performance and compliance in the air and on the ground.",
        steps: [
            {
                title: "Site Assessment",
                desc: "Detailed technical analysis of airfield conditions and regulatory requirements.",
                icon: "/engr-solutions/about/1.png"
            },
            {
                title: "Compliance-First Design",
                desc: "Engineering solutions that meet or exceed all relevant international aviation standards.",
                icon: "/engr-solutions/about/2.png"
            },
            {
                title: "Precision Execution",
                desc: "On-site implementation by certified technicians with specialized aviation training.",
                icon: "/engr-solutions/about/3.png"
            },
            {
                title: "Lifecycle Support",
                desc: "Comprehensive maintenance and periodic testing to ensure continued operational safety.",
                icon: "/engr-solutions/about/4.png"
            }
        ]
    }
};
