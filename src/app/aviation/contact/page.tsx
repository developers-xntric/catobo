import DynamicHero from '@/components/common/hero';
import ContactPageContent from '@/components/ContactPageContent';
import { aviationContactData } from '@/data/aviation/contact-data';

export default function ContactPage() {
    const { hero } = aviationContactData;

    return (
        <main className="min-h-screen bg-white overflow-hidden">
            <DynamicHero
                title={hero.title}
                breadcrumbs={hero.breadcrumbs}
                backgroundImage={hero.backgroundImage}
            />
            <ContactPageContent data={aviationContactData} />
        </main>
    );
}
