"use client";

import DynamicHero from "@/components/common/hero";
import { Sidebar } from "@/components/Sidebar";
import CableTrunkingContent from "@/components/CableTrunkingContent";
import { engineeringCableTrunkingData } from "@/data/engineering/cable-trunking-data";

export default function SolutionCableTrunking() {
    const { hero, sidebar, sections } = engineeringCableTrunkingData;

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
                        <Sidebar title={sidebar.title} items={sidebar.items} />
                        <CableTrunkingContent data={engineeringCableTrunkingData} />
                    </div>
                </div>
            </main>
        </div>
    );
}
