import DynamicHero from '@/components/common/hero';
import FaqAccordion from '@/components/FaqAccordion';
import { aviationFaqsData } from '@/data/aviation/faqs-data';

const Faqs = () => {
    const { hero, faqs } = aviationFaqsData;

    return (
        <div>
            <DynamicHero
                title={hero.title}
                breadcrumbs={hero.breadcrumbs}
                backgroundImage={hero.backgroundImage}
            />

            <FaqAccordion faqData={faqs} />
        </div>
    )
}

export default Faqs
