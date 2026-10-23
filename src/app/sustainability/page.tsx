import type { Metadata } from "next";
import SustainabilityPage from "@/components/sustainability/SustainabilityPage";

export const metadata: Metadata = {
  title: "Sustainability Solutions | Catobo",
  description: "Cut fuel and energy bills with Catobo and Aerostrata retrofit solutions for fuel efficiency, cooling and renewable energy. Request your free savings estimate.",
};

export default function Page() {
  return <SustainabilityPage />;
}
