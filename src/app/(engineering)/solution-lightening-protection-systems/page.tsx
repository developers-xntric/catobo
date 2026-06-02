import DynamicHero from '@/components/common/hero';
import Hero from '@/components/engr-solutions/home/hero';

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
        </div>
    )
}

export default SolutionLighteningProtectionSystems
