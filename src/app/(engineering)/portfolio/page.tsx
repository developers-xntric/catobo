import DynamicHero from '@/components/common/hero';
import PortfolioContent from '@/components/portfolio';
import TechnologyPartners from '@/components/TechnologyPartners';

const Portfolio = () => {
    return (
        <div>
            <DynamicHero
                title={"Our Network of Associate Companies & Strategic Partners"}
                breadcrumbs={
                    [
                        { label: "Home", href: "/" },
                        { label: "Portfolio" },
                    ]
                }
                backgroundImage={"/portfolio/bg.png"}
            />
            <PortfolioContent />
             <TechnologyPartners
        data={{
          badge: "Partners",
          title: "Technology & Industry Partners",
          description: [{
            children: [{ text: "Some of the global players in their field of excellence with whom we have partnered for various prestigious projects" }]
          }]
        }}
        logoCount={7}
      />
        </div>
    )
}

export default Portfolio
