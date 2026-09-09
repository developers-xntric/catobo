"use client";

import DynamicHero from "@/components/common/hero";
import { Sidebar } from "@/components/Sidebar";
import ExplosionProofContent from "@/components/ExplosionProofContent";
import { engineeringExplosionProofData } from "@/data/engineering/explosion-proof-data";

export default function SolutionExplosionProofSystems() {
    const { hero, sidebar } = engineeringExplosionProofData;

    return (
        <div>
            <DynamicHero
                title={hero.title}
                breadcrumbs={hero.breadcrumbs}
                backgroundImage={hero.backgroundImage}
            />

            <main className="min-h-screen bg-white">
                <div className="2xl:max-w-360 w-[90%] mx-auto py-8">
                    <div className="flex flex-col lg:flex-row gap-5 items-start">
                        <Sidebar title={sidebar.title} items={sidebar.items} sectionIds={["section-0", "section-industrial-power", "section-isolator", "section-thermoplastic", "section-metal-clad", "section-fire-rated", "section-switch-fuses"]} />
                        <ExplosionProofContent data={engineeringExplosionProofData} />
                    </div>
                </div>
            </main>
        </div>
    );
}
