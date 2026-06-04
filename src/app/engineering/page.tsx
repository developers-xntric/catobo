import Hero from "@/components/engr-solutions/home/hero";
import Solutions from "@/components/engr-solutions/home/solutions";
import HowItWorks from "@/components/engr-solutions/home/how-it-works";
import OurProjects from "@/components/engr-solutions/home/our-projects";
import AboutCompany from "@/components/engr-solutions/home/about-company";
import ContactSection from "@/components/ContactSection";
import Testimonials from "@/components/Testimonials";
import { engineeringHomeData } from "@/data/engineering/home-data";

export default function EngineeringHome() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Hero data={engineeringHomeData.hero} />
      <Solutions data={engineeringHomeData.solutions} />
      <HowItWorks data={engineeringHomeData.howItWorks} />
      <OurProjects data={engineeringHomeData.projects} />
      <AboutCompany data={engineeringHomeData.aboutCompany} />
      <Testimonials data={engineeringHomeData.testimonials} />
      <ContactSection />
    </div>
  );
}
