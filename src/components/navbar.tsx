"use client";

import React, { useState, useRef, useEffect, useCallback, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

interface SubItem {
  label: string;
  href?: string;
}

interface ContentItem {
  heading: string;
  subItems?: SubItem[];
  href?: string;
  hoverImage?: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: {
    image: string;
    imageAlt: string;
    items: ContentItem[];
  };
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/engineering",
  },
  {
    label: "About Us",
    href: "/engineering/about",
  },
  {
    label: "Engineering Solution",
    href: "/engineering",
    dropdown: {
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80",
      imageAlt: "Engineering",
      items: [
        {
          heading: "Core Solutions",
          subItems: [
            { label: "Cable Containment", href: "/engineering/cable-trunking" },
            { label: "Lightning Protection", href: "/engineering/solution-lightening-protection-systems" },
            { label: "Industrial Products Explosion Proof Systems", href: "/explosion-proof-systems" },
          ],
        },
      ],
    },
  },
  {
    label: "Portfolio",
    href: "/engineering/portfolio",
  },
  {
    label: "Testimonials",
    href: "/engineering/testimonials",
  },
  {
    label: "FAQs",
    href: "/engineering/faqs",
  },
  {
    label: "Contact Us",
    href: "/engineering/contact",
  },
];

const AVIATION_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/aviation" },
  { label: "About Us", href: "/aviation/about" },
  {
    label: "Aviation Solutions",
    href: "/aviation",
    dropdown: {
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80",
      imageAlt: "Aviation",
      items: [
        {
          heading: "Fire & Safety",
          subItems: [
            { label: "Heliport & Vertiport Firefighting Systems", href: "/aviation/firefighting-systems" },
            { label: "Aviation Consultation & Firefighting Design", href: "/aviation/consultation-design" },
          ],
        },
        {
          heading: "Infrastructure",
          subItems: [
            { label: "Helipad & VertiPad Construction", href: "/aviation/helipad-construction" },
            { label: "Portable Helipad & VertiPad Solutions", href: "/aviation/portable-helipad" },
          ],
        },
        {
          heading: "Lighting Solutions",
          subItems: [
            { label: "Portable Lighting Solutions", href: "/aviation/portable-lighting" },
            { label: "Aircraft Warning Lights", href: "/aviation/aircraft-warning-lights" },
            { label: "Airfield Lighting Solution", href: "/aviation/airfield-lighting" },
            { label: "Helideck & Helipad Lighting Systems", href: "/aviation/helideck-and-helipad-lighting-systems" },
          ],
        },
      ],
    },
  },
  { label: "Portfolio", href: "/aviation/portfolio" },
  { label: "Testimonials", href: "/aviation/testimonials" },
  { label: "FAQs", href: "/aviation/faqs" },
  { label: "Contact Us", href: "/aviation/contact" },
];

const ExpandableRow = memo(function ExpandableRow({
  item,
  isSimpleList,
  isOpen,
  onToggle,
  onHover,
  onClose,
}: {
  item: ContentItem;
  isSimpleList: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
  onHover?: (item: ContentItem) => void;
  onClose?: () => void;
}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isCurrentlyOpen = isOpen !== undefined ? isOpen : internalOpen;
  const handleToggle = onToggle || (() => setInternalOpen(!internalOpen));
  const hasSubItems = item.subItems && item.subItems.length > 0;

  if (isSimpleList) {
    return (
      <Link
        href={item.href ?? "#"}
        onMouseEnter={() => onHover && onHover(item)}
        onClick={() => onClose && onClose()}
        className="group flex justify-between items-center gap-2 px-3 py-2 text-xs text-[#333333] hover:text-[#133066] hover:bg-blue-50 rounded-md transition-colors duration-150 font-medium"
      >
        {item.heading}
        <ArrowRight className="w-3 h-3 shrink-0 scale-0 group-hover:scale-100 transition-transform duration-300" />
      </Link>
    );
  }

  return (
    <div className="border-b border-gray-100 last:border-0 p-1">
      <div
        className={`rounded-xl transition-all duration-300 ${isCurrentlyOpen ? "bg-blue-50/80 pb-2" : ""}`}
      >
        <button
          onClick={() => hasSubItems && handleToggle()}
          onMouseEnter={() => onHover && onHover(item)}
          className={`w-full flex items-center font-bold text-xs justify-between px-3 py-2.5 rounded-xl transition-colors duration-150 ${isCurrentlyOpen
              ? "text-[#133066]"
              : "text-[#333333] hover:text-[#133066] hover:bg-gray-50"
            } ${hasSubItems ? "cursor-pointer" : "cursor-default"}`}
        >
          <span>{item.heading}</span>
          {hasSubItems && (
            <svg
              className={`w-3.5 h-3.5 text-[#333333] transition-transform duration-200 ${isCurrentlyOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </button>
        {isCurrentlyOpen && hasSubItems && (
          <ul className="px-2 space-y-1">
            {item.subItems!.map((sub) => (
              <li key={sub.label}>
                <Link
                  href={sub.href ?? "#"}
                  onClick={() => onClose && onClose()}
                  className="group flex justify-between items-center gap-2 px-3 py-1.5 text-[11.5px] rounded-lg text-[#133066] hover:bg-white transition-all duration-200"
                >
                  {sub.label}
                  <ArrowRight className="w-3 h-3 shrink-0 scale-0 group-hover:scale-100 transition-transform duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
});

ExpandableRow.displayName = "ExpandableRow";

const DropdownPanel = memo(function DropdownPanel({
  dropdown,
  isSimpleList,
  onClose,
}: {
  dropdown: NonNullable<NavItem["dropdown"]>;
  isSimpleList: boolean;
  onClose?: () => void;
}) {
  const [openSubItem, setOpenSubItem] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState(
    !isSimpleList && dropdown.items.length > 0 && dropdown.items[0].hoverImage
      ? dropdown.items[0].hoverImage
      : dropdown.image,
  );

  useEffect(() => {
    if (!isSimpleList && dropdown.items.length > 0) {
      setOpenSubItem(null);
      setCurrentImage(dropdown.items[0].hoverImage || dropdown.image);
    } else {
      setOpenSubItem(null);
      setCurrentImage(dropdown.image);
    }
  }, [dropdown, isSimpleList]);

  const handleHover = useCallback((item: ContentItem) => {
    if (item.hoverImage) setCurrentImage(item.hoverImage);
  }, []);

  return (
    <div className="absolute top-full left-full -translate-x-1/2 pt-3 w-110 z-50 animate-dropdown">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden p-2">
        <div className="flex items-stretch">
          <div className="relative w-45 shrink-0 overflow-hidden rounded-[10px]">
            <Image
              src={currentImage}
              alt={dropdown.imageAlt}
              fill
              sizes="180px"
              className="object-cover transition-all duration-500 ease-in-out"
              loading="eager"
              priority
            />
          </div>
          <div className="flex-1 px-4 overflow-y-auto max-h-125 custom-scrollbar">
            {isSimpleList ? (
              <div className="space-y-1 border-2 border-[#F5F5F5] rounded-[10px]">
                {dropdown.items.map((item) => (
                  <ExpandableRow
                    key={item.heading}
                    item={item}
                    isSimpleList={true}
                    onHover={handleHover}
                    onClose={onClose}
                  />
                ))}
              </div>
            ) : (
              <div className="divide-y divide-gray-100 border-2 border-[#F5F5F5] rounded-[10px]">
                {dropdown.items.map((item) => (
                  <ExpandableRow
                    key={item.heading}
                    item={item}
                    isSimpleList={false}
                    isOpen={openSubItem === item.heading}
                    onToggle={() =>
                      setOpenSubItem(
                        openSubItem === item.heading ? null : item.heading,
                      )
                    }
                    onHover={handleHover}
                    onClose={onClose}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

DropdownPanel.displayName = "DropdownPanel";

const MobileMenu = memo(function MobileMenu({
  open,
  onClose,
  items,
}: {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
}) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [expandedSubIdx, setExpandedSubIdx] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      setExpandedIdx(null);
      setExpandedSubIdx(null);
    }
  }, [open]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-80 bg-[#1e2533] text-white z-50 overflow-y-auto transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <span className="font-bold text-base tracking-wide">Menu</span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="px-4 py-3 space-y-1">
          {items.map((item, idx) => (
            <div key={item.label}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() =>
                      setExpandedIdx(expandedIdx === idx ? null : idx)
                    }
                    className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${expandedIdx === idx ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedIdx === idx && (
                    <div className="ml-3 mt-1 space-y-1 border-l border-white/10 pl-3">
                      {item.dropdown.items.map((di) =>
                        di.subItems ? (
                          <div key={di.heading}>
                            <button
                              onClick={() =>
                                setExpandedSubIdx(
                                  expandedSubIdx === di.heading
                                    ? null
                                    : di.heading,
                                )
                              }
                              className="w-full flex items-center justify-between py-2 text-[13px] font-semibold text-gray-300 hover:text-white transition-colors"
                            >
                              {di.heading}
                              <svg
                                className={`w-3 h-3 transition-transform duration-200 ${expandedSubIdx === di.heading ? "rotate-180" : ""}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>
                            {expandedSubIdx === di.heading && (
                              <ul className="space-y-1 pl-3 pb-1">
                                {di.subItems.map((sub) => (
                                  <li key={sub.label}>
                                    <Link
                                      href={sub.href ?? "#"}
                                      onClick={onClose}
                                      className="group flex justify-between items-center gap-2 text-[11.5px] pr-1.5 text-gray-400 hover:text-white py-1 transition-colors"
                                    >
                                      {sub.label}
                                      <ArrowRight className="w-3 h-3 text-blue-400 shrink-0 scale-0 group-hover:scale-100 transition-transform duration-300" />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ) : (
                          <Link
                            key={di.heading}
                            href={di.href ?? "#"}
                            onClick={onClose}
                            className="group flex justify-between items-center gap-2 py-2 text-[13px] text-gray-300 hover:text-white transition-colors"
                          >
                            {di.heading}
                            <ArrowRight className="w-3 h-3 text-blue-400 shrink-0 scale-0 group-hover:scale-100 transition-transform duration-300" />
                          </Link>
                        ),
                      )}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href ?? "#"}
                  onClick={onClose}
                  className="block px-3 py-3 text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
});

MobileMenu.displayName = "MobileMenu";

export default function Navbar() {
  const pathname = usePathname();
  const isAviation = pathname?.startsWith("/aviation") ?? false;
  const navItems = isAviation ? AVIATION_NAV_ITEMS : NAV_ITEMS;

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 400);
      setActiveDropdown(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node))
        setActiveDropdown(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const handleMouseEnter = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  }, []);

  return (
    <>
      <style>{`
        @keyframes dropdownIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .animate-dropdown { animation: dropdownIn 0.18s ease forwards; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
      `}</style>

      <header
        ref={navRef}
        className="fixed top-4 left-0 right-0 z-50 bg-transparent transition-all duration-300"
      >
        <div
          className={`2xl:max-w-350 w-[90%] mx-auto border ${scrolled ? "bg-[#168DCA]/50 backdrop-blur-xs text-white border-[#168DCA] shadow-md" : "border-gray-500/50 backdrop-blur-3xl"} rounded-[10px] px-3 transition-all duration-300`}
        >
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="shrink-0 flex items-center gap-2 w-14 h-14">
              <Image
                src="/logo.png"
                alt="Catobo Logo"
                width={2000}
                height={2000}
                className="object-cover "
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const hasDropdown = !!item.dropdown;
                const isActive = activeDropdown === item.label;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() =>
                      hasDropdown && handleMouseEnter(item.label)
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    {hasDropdown ? (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveDropdown(isActive ? null : item.label);
                        }}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 text-sm rounded-lg transition-all duration-150 ${scrolled ? "text-white hover:text-white" : "text-white"}`}
                      >
                        {item.label}
                        <svg
                          className={`w-3 h-3 mt-0.5 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    ) : (
                      <Link
                        href={item.href ?? "#"}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-sm rounded-lg transition-all duration-150 text-white"
                      >
                        {item.label}
                      </Link>
                    )}
                    {hasDropdown && isActive && (
                      <DropdownPanel
                        dropdown={item.dropdown!}
                        isSimpleList={!item.dropdown?.items.some(i => i.subItems && i.subItems.length > 0)}
                        onClose={() => setActiveDropdown(null)}
                      />
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="hidden lg:block">
              <Link
                href={isAviation ? "/aviation/contact" : "/engineering/contact"}
                className="relative inline-flex h-11 overflow-hidden rounded-[10px] p-0.5 focus:outline-none"
              >
                <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_20%,#0F2453_80%,#E2E8F0_100%)] pointer-events-none" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-[8px] bg-linear-to-r from-[#0F2453] to-[#168DCA] px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300 hover:bg-transparent hover:text-white">
                  Request a Quote
                </span>
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg transition-colors text-gray-300 hover:text-white hover:bg-white/10"
              aria-label="Open menu"
              aria-controls="mobile-menu"
              aria-expanded={mobileOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} items={navItems} />
    </>
  );
}
