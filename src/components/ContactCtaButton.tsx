"use client";

import { useContactPopup } from "@/contexts/ContactPopupContext";

export function ContactCtaButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const { open } = useContactPopup();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
