import DynamicHero from '@/components/common/hero';
import TestimonialsPageContent from '@/components/TestimonialsPageContent';
import { engineeringTestimonialsData } from '@/data/engineering/testimonials-data';

export default function TestimonialsPage() {
    const { hero } = engineeringTestimonialsData;

    return (
        <main className="w-full bg-white pb-20">
            <DynamicHero
                title={hero.title}
                breadcrumbs={hero.breadcrumbs}
                backgroundImage={hero.backgroundImage}
            />

            <TestimonialsPageContent data={engineeringTestimonialsData} />
        </main>
    );
}
