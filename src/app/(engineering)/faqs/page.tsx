import DynamicHero from '@/components/common/hero';
import FaqAccordion from '@/components/FaqAccordion';
import PressContent from '@/components/Press';

const Faqs = () => {
    return (
        
        <div>
            <DynamicHero
                title={"Faqs"}
                breadcrumbs={
                    [
                        { label: "Home", href: "/" },
                        { label: "Faqs" },
                    ]
                }
                backgroundImage={"/faqs.png"}
            />
           
            <FaqAccordion />
        </div>
    )
}

export default Faqs
