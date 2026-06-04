import DynamicHero from '@/components/common/hero';
import PortfolioContent from '@/components/portfolio';
import TechnologyPartners from '@/components/TechnologyPartners';
import { aviationPortfolioData } from '@/data/aviation/portfolio-data';

const Portfolio = () => {
    const { hero, partners } = aviationPortfolioData;

    return (
        <div>
            <DynamicHero
                title={hero.title}
                breadcrumbs={hero.breadcrumbs}
                backgroundImage={hero.backgroundImage}
            />
            <PortfolioContent data={aviationPortfolioData} />
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
