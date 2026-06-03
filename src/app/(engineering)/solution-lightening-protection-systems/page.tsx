import DynamicHero from '@/components/common/hero';
import Hero from '@/components/engr-solutions/home/hero';
import MainContent from '@/components/MainContent';
import Sidebar from '@/components/Sidebar';

const SolutionLighteningProtectionSystems = () => {
    return (
        <div>
            <DynamicHero
                title={"Lightning Protection Systems"}
                breadcrumbs={
                    [
                        { label: "Home", href: "/" },
                        { label: "Lightning Protection Systems" },
                    ]
                }
                backgroundImage={"/lightening-sol.png"}
            />
            <main className="min-h-screen bg-white">
                <div className="2xl:max-w-360 w-[90%] mx-auto py-8">
                    <div className="flex gap-5 items-start">
                        {/* Sidebar TOC */}
                        <Sidebar />

                        {/* Main content area */}
                        <MainContent />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default SolutionLighteningProtectionSystems