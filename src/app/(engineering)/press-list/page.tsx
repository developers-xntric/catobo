import DynamicHero from '@/components/common/hero';
import PressContent from '@/components/Press';
import TrainingProgramCard from '@/components/trainingcard';

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
           
             <TrainingProgramCard
        image="/press-list.png"
        title="Airsight Training Program – Singapore"
        description="A successful training course was conducted by Airsight in Singapore from the 16-18th of April 2024 for Runway, Taxiway, and Apron Planning & Design (ICAO Annex 14). The training was conducted by the Regional Manager of Asia-Pacific Jan Friedrich. Many participants from Airports and Civil aviation were present for the 3-day training session."
       
      />
        </div>
    )
}

export default Press
