
import DynamicHero from '@/components/common/hero';
import Image from "next/image";
import EngineeringExcellence from "../../../components/engr-solutions/about/engineering-excellence";
import OurApproach from "../../../components/engr-solutions/about/our-approach";
import TrustedSolutions from "../../../components/engr-solutions/about/trusted-solutions";
import Testimonials from '@/components/Testimonials';


export default function AboutPage() {
    return (
        <main className="w-full bg-white">
            <DynamicHero
                title="Where Engineering Expertise<br />Meets Global Capability"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "About" },
                ]}
                backgroundImage="/engr-solutions/about/hero-bg.png"
            />

            <TrustedSolutions />
            <EngineeringExcellence />
            <OurApproach />
            <Testimonials />
        </main>
    );
}

