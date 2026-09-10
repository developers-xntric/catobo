import type { Metadata } from "next";
import SustainabilityPage from "@/components/sustainability/SustainabilityPage";

export const metadata: Metadata = {
  title: "Sustainability Solutions | Catobo",
  description: "Six patented systems for fuel efficiency, cooling and renewable energy. Explore solutions and estimate your savings and emissions avoided.",
};

export default function Page() {
  return <SustainabilityPage />;
}
