"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface ContactPopupContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const ContactPopupContext = createContext<ContactPopupContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function ContactPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ContactPopupContext.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
    </ContactPopupContext.Provider>
  );
}

export function useContactPopup() {
  return useContext(ContactPopupContext);
}
