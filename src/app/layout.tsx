import Navbar from "@/components/navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Poppins, Raleway } from "next/font/google";
import "./globals.css";


const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Catobo - Engineering & Technical Solutions",
  description: "Integrated systems for aviation, construction, and industrial infrastructure",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", raleway.variable, poppins.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
