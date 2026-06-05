import DynamicHero from '@/components/common/hero';
import { Sidebar } from '@/components/Sidebar';
import MainContent from '@/components/MainContent';
import { aviationLightningProtectionData } from '@/data/aviation/lightning-protection-data';

const SolutionLighteningProtectionSystems = () => {
    const { hero, sidebar } = aviationLightningProtectionData;

    return (
        <div>
            <DynamicHero
                title={hero.title}
                breadcrumbs={hero.breadcrumbs}
                backgroundImage={hero.backgroundImage}
            />
            <main className="min-h-screen bg-white">
                <div className="2xl:max-w-360 w-[90%] mx-auto py-8">
                    <div className="flex gap-5 items-start">
                        <Sidebar title={sidebar.title} items={sidebar.items} />
                        <MainContent data={aviationLightningProtectionData} />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default SolutionLighteningProtectionSystems
