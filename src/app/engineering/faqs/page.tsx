import DynamicHero from '@/components/common/hero';
import FaqAccordion from '@/components/FaqAccordion';
import { engineeringFaqsData } from '@/data/engineering/faqs-data';

const Faqs = () => {
    const { hero, faqs } = engineeringFaqsData;

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
