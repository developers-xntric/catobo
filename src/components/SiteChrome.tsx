"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/Footer";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideChrome = pathname === "/";

  if (hideChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      {!pathname.startsWith("/sustainability") && <Footer />}
    </>
  );
}
