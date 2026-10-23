import Hero from "@/components/engr-solutions/home/hero";
import Solutions from "@/components/engr-solutions/home/solutions";
import HowItWorks from "@/components/engr-solutions/home/how-it-works";
import OurProjects from "@/components/engr-solutions/home/our-projects";
import AboutCompany from "@/components/engr-solutions/home/about-company";
import ContactSection from "@/components/ContactSection";
import Testimonials from "@/components/Testimonials";
import { aviationHomeData } from "@/data/aviation/home-data";
import About from "@/components/aviation/about";

export default function AviationHome() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans overflow-hidden md:overflow-auto">
      <Hero data={aviationHomeData.hero} />
      <Solutions data={aviationHomeData.solutions} />
      <About data={aviationHomeData.aboutCompany}/>
      <OurProjects data={aviationHomeData.projects} />
      <HowItWorks data={aviationHomeData.howItWorks} />
      <AboutCompany data={aviationHomeData.aboutCompany} />
      <Testimonials data={aviationHomeData.testimonials} />
      <ContactSection aviation />
    </div>
  );
}
