import DynamicHero from '@/components/common/hero';
import EngineeringExcellence from "../../../components/engr-solutions/about/engineering-excellence";
import OurApproach from "../../../components/engr-solutions/about/our-approach";
import TrustedSolutions from "../../../components/engr-solutions/about/trusted-solutions";
import Testimonials from '@/components/Testimonials';
import { aviationAboutData } from '@/data/aviation/about-data';

export default function AboutPage() {
    return (
        <main className="w-full bg-white">
            <DynamicHero
                title="Elevating Aviation Standards<br />with Technical Excellence"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "About" },
                ]}
                backgroundImage="/engr-solutions/about/hero-bg.png"
            />

            <TrustedSolutions data={aviationAboutData.trustedSolutions} />
            <EngineeringExcellence data={aviationAboutData.engineeringExcellence} />
            <OurApproach data={aviationAboutData.ourApproach} />
            <Testimonials />
        </main>
    );
}

