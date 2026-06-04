import DynamicHero from '@/components/common/hero';
import ContactPageContent from '@/components/ContactPageContent';
import { engineeringContactData } from '@/data/engineering/contact-data';

export default function ContactPage() {
    const { hero } = engineeringContactData;

    return (
        <main className="min-h-screen bg-white">
            <DynamicHero
                title={hero.title}
                breadcrumbs={hero.breadcrumbs}
                backgroundImage={hero.backgroundImage}
            />
            <ContactPageContent data={engineeringContactData} />
        </main>
    );
}
