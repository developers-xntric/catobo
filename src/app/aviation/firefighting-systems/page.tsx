import DynamicHero from "@/components/common/hero";
import FirefightingSystemsBody from "@/components/aviation/FirefightingSystemsBody";

export default function SolutionHeliportFirefightingSystems() {
    return (
        <div>
            <DynamicHero
                title={"Heliport & Vertiport Firefighting Systems"}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Heliport & Vertiport Firefighting Systems" },
                ]}
                backgroundImage="/hpfs.png"
            />
            <FirefightingSystemsBody />
        </div>
    );
}