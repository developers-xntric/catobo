
import DynamicHero from '@/components/common/hero';
import PressContent from '@/components/Press';
import TrainingProgramCard from '@/components/trainingcard';
import { pressItems } from '@/data/press-items';
import { notFound } from 'next/navigation';

export default async function PressDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const item = pressItems.find((p) => p.id === parseInt(id));

    if (!item) {
        notFound();
    }

    return (
        <div>
            <DynamicHero
                title={item.title}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Press", href: "/press" },
                    { label: item.title },
                ]}
                backgroundImage="/press/hero-press-list.png"
            />

            <TrainingProgramCard
                image={item.imageUrl}
                title={item.title}
                description={item.description || "No description available."}
            />

            <PressContent limit={6} showHeading={true} />
        </div>
    );
}
