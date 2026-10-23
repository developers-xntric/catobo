"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { sustainabilityLinks } from "./sustainability/revamp-data";

type FooterLink = { label: string; href: string };

const aviationLinks: FooterLink[] = [
  { label: "Home", href: "/aviation" },
  { label: "About Us", href: "/aviation/about" },
  { label: "Solutions", href: "/aviation" },
  { label: "Affiliations", href: "/aviation/affiliations" },
  { label: "FAQs", href: "/aviation/faqs" },
  { label: "Contact Us", href: "/aviation/contact" },
];

const engineeringLinks: FooterLink[] = [
  { label: "Home", href: "/engineering" },
  { label: "About Us", href: "/engineering/about" },
  { label: "Solutions", href: "/engineering" },
  { label: "Affiliations", href: "/engineering/affiliations" },
  { label: "FAQs", href: "/engineering/faqs" },
  { label: "Contact Us", href: "/engineering/contact" },
];

export function Footer() {
  const pathname = usePathname();
  const isAviation = pathname?.startsWith("/aviation") ?? false;
  const isSustainability = pathname?.startsWith("/sustainability") ?? false;
  const navLinks = isSustainability
    ? sustainabilityLinks.map(({ label, href }) => ({
        label:
          label === "About"
            ? "About Us"
            : label === "Contact"
              ? "Contact Us"
              : label,
        href,
      }))
    : isAviation
      ? aviationLinks
      : engineeringLinks;
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  async function handleNewsletterSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      if (!response.ok) throw new Error("Unable to subscribe");
      setNewsletterEmail("");
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <footer
      className="w-full overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(105.44deg, #168DCA 24.153%, #0F2453 134.7%)",
      }}
    >
      <div className="mx-auto grid w-[90%] max-w-350 gap-5 py-6 md:py-10 sm:grid-cols-2 lg:grid-cols-4 lg:items-start lg:gap-10">
        <Link
          href={
            isSustainability
              ? "/sustainability#overview"
              : isAviation
                ? "/aviation"
                : "/engineering"
          }
          aria-label="Catobo home"
          className="relative h-16 md:w-60 w-44 max-w-full"
        >
          <Image
            src="/new-logo.png"
            alt="Catobo"
            fill
            sizes="192px"
            className="object-contain"
          />
        </Link>
        <Office
          heading="CATOBO ME"
          address={
            <>
              Office 702 – Al Masaood Tower,
              <br />
              Riggat Al Buteen, Deira, Dubai, UAE
            </>
          }
          phones={["+971 4 391 8018"]}
        />
        <Office
          heading="CATOBO INDIA"
          address={
            <>
              Door No.92/48, 3rd Main Road,
              <br />
              Meena Estate, Coimbatore – 641028,
              <br />
              Tamil Nadu – India
            </>
          }
          phones={["+91 958 553 1029", "+91 422 231 8336"]}
        />
        <div>
          <h2 className="mb-4 font-(family-name:--font-raleway) text-base font-medium tracking-wide">
            Subscribe To Newsletter
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-white">
            Subscribe to receive the latest news, project updates, and industry
            insights straight to your inbox.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="relative">
            <Input
              type="email"
              aria-label="Newsletter email address"
              placeholder="Email Address *"
              value={newsletterEmail}
              onChange={(event) => setNewsletterEmail(event.target.value)}
              required
              disabled={isSubmitting}
              className="h-12 w-full border-0 bg-white/10 pr-22 text-sm text-white placeholder:text-white focus-visible:ring-white/60"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="absolute right-1 top-1/2 h-9 -translate-y-1/2 bg-white px-4 text-xs font-medium text-[#0f2453] hover:bg-white/90"
            >
              {isSubmitting ? "..." : "Subscribe"}
            </Button>
          </form>
          {submitStatus === "success" && (
            <p role="status" className="mt-2 text-xs text-green-200">
              Thank you for subscribing!
            </p>
          )}
          {submitStatus === "error" && (
            <p role="alert" className="mt-2 text-xs text-red-200">
              Failed to subscribe. Please try again.
            </p>
          )}
        </div>
      </div>
      <div className="border-t border-white/25">
        <div className="mx-auto flex w-[90%] max-w-350 flex-col-reverse gap-4 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} All Rights Reserved.</p>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-7 gap-y-2 sm:justify-end"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-(family-name:--font-raleway) font-medium transition-colors hover:text-white/70"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
function Office({
  heading,
  address,
  phones,
}: {
  heading: string;
  address: ReactNode;
  phones: string[];
}) {
  return (
    <section>
      <h2 className="mb-4 font-(family-name:--font-raleway) text-base font-medium tracking-wide">
        {heading}
      </h2>
      <address className="mb-5 not-italic text-sm leading-relaxed text-white">
        {address}
      </address>
      <h3 className="mb-2 font-(family-name:--font-raleway) text-sm font-medium">
        Contact Information
      </h3>
      <div className="mb-2 flex flex-wrap gap-x-3 gap-y-1 border-b border-white/10 pb-2 text-xs">
        {phones.map((phone) => (
          <a
            key={phone}
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="hover:underline"
          >
            {phone}
          </a>
        ))}
      </div>
      <a href="mailto:info@catobo.com" className="text-sm hover:underline">
        info@catobo.com
      </a>
    </section>
  );
}
