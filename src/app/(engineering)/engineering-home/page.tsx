import Hero from "@/components/engr-solutions/home/hero";
import Solutions from "@/components/engr-solutions/home/solutions";
import HowItWorks from "@/components/engr-solutions/home/how-it-works";
import OurProjects from "@/components/engr-solutions/home/our-projects";
import AboutCompany from "@/components/engr-solutions/home/about-company";

export default function EngineeringHome() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Hero />
      <Solutions />
      <HowItWorks />
      <OurProjects />
      <AboutCompany />
    </div>
  );
}
