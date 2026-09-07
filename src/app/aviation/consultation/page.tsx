import DynamicHero from "@/components/common/hero";
import ConsultationDesignBody from "@/components/aviation/ConsultationDesignBody";
import { consultationPageContent } from "@/data/aviation/consultation-data";

export default function SolutionAviationConsultationPage2() {
    return (
        <div>
            <DynamicHero
                title={consultationPageContent.hero.title}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: consultationPageContent.hero.title },
                ]}
                backgroundImage={consultationPageContent.hero.backgroundImage}
            />
            <ConsultationDesignBody />
        </div>
    );
}