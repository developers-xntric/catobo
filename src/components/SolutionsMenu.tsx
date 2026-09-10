"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const solutionLinks = [
  ["Aircraft Warning Lights", "/aviation/aircraft-warning-lights", 3962],
  ["Aviation Consultation & Firefighting Design", "/aviation/consultation", 3959],
  ["Portable Helipad & VertiPad", "/aviation/portable-helipad-lighting-solutions", 3961],
  ["Heliport & Vertiport Lighting Systems", "/aviation/heliport-and-vertiport-lighting-solutions", 3963],
  ["Cable Containment Systems", "/engineering/cable-trunking", 3967],
  ["Industrial Products", "/engineering/explosion-proof-systems", 3969],
  ["Heliport & Vertiport Firefighting Systems", "/aviation/firefighting-systems", 3965],
  ["Airfield Lighting Systems", "/aviation/airfield-lighting", 3960],
  ["Modular Floating Solutions", "/aviation/modular-floating-solutions", 3966],
  ["Helipad & VertiPad Construction", "/aviation/heliport-vertiport-construction", 3968],
  ["Lightning Protection Systems", "/engineering/lightening-protection-systems", 3964],
].map(([label, href, image]) => ({ label: String(label), href: String(href), image: Number(image) }));

export default function SolutionsMenu({ onClose, contactHref }: { onClose: () => void; contactHref: string }) {
  const [preview, setPreview] = useState({ image: 3959, label: "Helipad solutions" });
  return <div id="solutions-dropdown" className="absolute inset-x-0 top-full pt-3 text-black">
    <div className="grid grid-cols-[0.95fr_1.9fr_0.95fr] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
      <div className="p-6 pr-0"><div className="relative h-full min-h-[300px] overflow-hidden rounded-xl">
        <Image src={`/solutions/Rectangle${preview.image}.png`} alt={preview.label} fill sizes="24vw" className="object-cover" />
      </div></div>
      <div className="flex min-w-0 flex-col gap-4 p-6">
        <h2 className="border-b border-black/40 pb-2 text-xl font-medium">Solutions</h2>
        <div className="grid flex-1 grid-flow-col grid-rows-6 grid-cols-2 gap-x-5 gap-y-1">
          {solutionLinks.map(item => <Link key={item.href} href={item.href} onClick={onClose} onMouseEnter={() => setPreview(item)} onFocus={() => setPreview(item)} className="flex items-center justify-between gap-3 rounded px-1 py-2 text-xs leading-relaxed hover:bg-sky-50 hover:text-[#168dca] focus-visible:outline-2 focus-visible:outline-sky-600">
            {item.label}<Image src="/solutions/Vector1.svg" width={13} height={13} alt="" className="shrink-0" />
          </Link>)}
        </div>
        <Link href={contactHref} onClick={onClose} className="flex items-center justify-between rounded-md border border-[#168dca]/40 bg-[#168dca]/5 px-3 py-3 text-xs text-[#168dca] hover:bg-sky-100">Start Your Consultation<Image src="/solutions/Vector.svg" width={14} height={14} alt="" /></Link>
      </div>
      <aside className="flex flex-col justify-center gap-5 bg-[#d1e9f3] p-6 text-xs leading-relaxed">
        <Link href={contactHref} onClick={onClose} className="w-fit border-b border-black text-base">Contact Us</Link>
        <div><h3 className="mb-1 text-sm font-medium">Our Location</h3><p>Office 702 – Al Masaood Tower,<br />Riggat Al Buteen, Deira,<br />Dubai, UAE</p></div>
        <div><h3 className="mb-1 text-sm font-medium">Phone Number</h3><a href="tel:+97143918018">+971 4 391 8018</a></div>
        <div><h3 className="mb-1 text-sm font-medium">Email</h3><a href="mailto:info@catobo.com">info@catobo.com</a></div>
        <Link href="/sustainability" onClick={onClose} className="border-t border-black/15 pt-3 text-[#0f2453] hover:underline">Explore Sustainability ↗</Link>
      </aside>
    </div>
  </div>;
}
