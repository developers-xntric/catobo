import DynamicHero from '@/components/common/hero';
import ConsultationTabs from '@/components/consultation-tab';
import PressContent from '@/components/Press';

const Press = () => {
    return (
        <div>
            <DynamicHero
                title={"Insights, Announcements, and Industry Recognition"}
                breadcrumbs={
                    [
                        { label: "Home", href: "/" },
                        { label: "Press" },
                    ]
                }
                backgroundImage={"/press/bg.png"}
            />
            
            <PressContent basePath="/engineering" />
        </div>
    )
}

export default Press
