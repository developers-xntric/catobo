import DynamicHero from '@/components/common/hero';
import PortfolioContent from '@/components/portfolio';
import TechnologyPartners from '@/components/TechnologyPartners';
import { engineeringPortfolioData } from '@/data/engineering/portfolio-data';

const Portfolio = () => {
    const { hero, partners } = engineeringPortfolioData;

    return (
        <div>
            <DynamicHero
                title={hero.title}
                breadcrumbs={hero.breadcrumbs}
                backgroundImage={hero.backgroundImage}
            />
            <PortfolioContent data={engineeringPortfolioData} />
            <TechnologyPartners
                data={{
                    badge: partners.badge,
                    title: partners.title,
                    description: [{
                        children: [{ text: partners.description }]
                    }]
                }}
                logoCount={partners.logoCount}
            />
        </div>
    )
}

export default Portfolio
