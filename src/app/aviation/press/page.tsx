import DynamicHero from '@/components/common/hero';
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
                backgroundImage={"/aviation/press-bg.png"}
            />
           
            <PressContent basePath="/aviation" />
        </div>
    )
}

export default Press
