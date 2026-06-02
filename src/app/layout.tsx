import type { Metadata } from "next";
import { Poppins, Raleway, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", raleway.variable, poppins.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
