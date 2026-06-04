import DynamicHero from '@/components/common/hero';
import TestimonialsPageContent from '@/components/TestimonialsPageContent';
import { aviationTestimonialsData } from '@/data/aviation/testimonials-data';

export default function TestimonialsPage() {
    const { hero } = aviationTestimonialsData;

    return (
        <main className="w-full bg-white pb-20">
            <DynamicHero
                title={hero.title}
                breadcrumbs={hero.breadcrumbs}
                backgroundImage={hero.backgroundImage}
            />

            <TestimonialsPageContent data={aviationTestimonialsData} />
        </main>
    );
}
