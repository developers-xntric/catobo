"use client";

import { useRef, useState, type FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/grad-button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { industries } from "./revamp-data";
import CountryPhoneInput, { formatInternationalPhone } from "@/components/CountryPhoneInput";
import type { Country } from "react-phone-number-input";

const inputClass = "h-12 w-full rounded-lg border-2 border-[#e6e6e6] bg-white px-4 text-sm shadow-none placeholder:text-[#acafb2]";
const fields = [
  { name: "name", label: "Name", placeholder: "Enter Your Name", autoComplete: "given-name", type: "text" },
  { name: "surname", label: "Surname", placeholder: "Enter Your Surname", autoComplete: "family-name", type: "text" },
] as const;

export default function SavingsEnquiry({ interest }: { interest: string }) {
  const captcha = useRef<ReCAPTCHA>(null);
  const submitting = useRef(false);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);
  const [countryCode, setCountryCode] = useState<Country>("AE");
  const [phone, setPhone] = useState("");
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    const form = event.currentTarget;
    const data = new FormData(form);
    setBusy(true);
    setStatus("");
    setSuccess(false);
    try {
      if (!siteKey || !captcha.current) throw new Error("Verification is unavailable. Please contact info@catobo.com or try again later.");
      const recaptchaToken = await captcha.current.executeAsync();
      if (!recaptchaToken) throw new Error("Please complete the verification and try again.");
      const message = [
        "Sustainability savings estimate",
        interest ? `Product of interest: ${interest}` : "Product of interest: Please advise",
        `Phone: ${formatInternationalPhone(countryCode, phone)}`,
        `Company: ${data.get("company")}`,
        `Industry: ${data.get("industry")}`,
        `Monthly fuel spend (AED): ${data.get("spend")}`,
        `Fuel type: ${data.get("fuel")}`,
      ].join("\n");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${data.get("name")} ${data.get("surname")}`.trim(),
          email: data.get("email"),
          inquiryType: "Sustainability savings estimate",
          message,
          recaptchaToken,
        }),
      });
      if (!response.ok) throw new Error("Your enquiry could not be sent. Please try again or contact info@catobo.com.");
      setSuccess(true);
      setStatus("Thank you! Your enquiry has been sent. Our team will get back to you within two working days.");
      form.reset();
      setCountryCode("AE");
      setPhone("");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unable to send your enquiry. Please try again.");
    } finally {
      captcha.current?.reset();
      submitting.current = false;
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="rounded-xl border border-[#1475af] bg-[#f6f6f6] px-5 py-7 md:px-7 md:py-10">
      <fieldset disabled={busy} className="grid min-w-0 gap-4 md:grid-cols-2">
        {fields.map(field => (
          <div key={field.name} className="space-y-2">
            <label htmlFor={`estimate-${field.name}`} className="block text-sm">{field.label}*</label>
            <Input id={`estimate-${field.name}`} {...field} required maxLength={100} className={inputClass} />
          </div>
        ))}
        <div className="space-y-2">`r`n          <label htmlFor="estimate-phone" className="block text-sm">Phone Number*</label>`r`n          <CountryPhoneInput id="estimate-phone" country={countryCode} number={phone} onCountryChange={setCountryCode} onNumberChange={setPhone} required wrapperClassName="rounded-lg border-2 border-[#e6e6e6]" />`r`n        </div>`r`n        <div className="space-y-2">
          <label htmlFor="estimate-email" className="block text-sm">Email Address*</label>
          <Input id="estimate-email" name="email" type="email" autoComplete="email" placeholder="Enter Your Email Address" required maxLength={254} className={inputClass} />
        </div>
        <div className="space-y-2">
          <label htmlFor="estimate-company" className="block text-sm">Company Name*</label>
          <Input id="estimate-company" name="company" autoComplete="organization" placeholder="Enter Your Company Name" required maxLength={200} className={inputClass} />
        </div>
        <FormSelect name="industry" label="Industry" placeholder="Select an Industry" options={[...industries.map(item => item.name), "Warehousing & Logistics", "Commercial & Retail", "Other"]} />
        <div className="space-y-2">
          <label htmlFor="estimate-spend" className="block text-sm">Monthly fuel spend (AED)*</label>
          <Input id="estimate-spend" name="spend" type="number" min="0" max="1000000000000" step="0.01" inputMode="decimal" placeholder="AED 416" required className={inputClass} />
        </div>
        <FormSelect name="fuel" label="Fuel type" placeholder="Select Fuel type" options={["Diesel", "HFO", "LPG", "Natural gas", "CNG", "LFO", "Electricity", "Other"]} />
      </fieldset>
      {siteKey && <ReCAPTCHA ref={captcha} sitekey={siteKey} size="invisible" />}
      <div className="mt-8 text-center">
        <Button type="submit" disabled={busy} className="min-w-48 disabled:cursor-wait disabled:opacity-60 hover:!scale-100">{busy ? "Sending…" : "Send enquiry"}</Button>
        {status && <p role={success ? "status" : "alert"} className={`mt-4 text-sm ${success ? "text-green-700" : "text-red-700"}`}>{status}</p>}
      </div>
    </form>
  );
}

function FormSelect({ name, label, placeholder, options }: { name: string; label: string; placeholder: string; options: string[] }) {
  return (
    <div className="space-y-2">
      <label htmlFor={`estimate-${name}`} className="block text-sm">{label}*</label>
      <Select name={name} required>
        <SelectTrigger id={`estimate-${name}`} className={inputClass + " data-[size=default]:h-12"}><SelectValue placeholder={placeholder} /></SelectTrigger>
        <SelectContent>{options.map(option => <SelectItem key={option} value={option}>{option}</SelectItem>)}</SelectContent>
      </Select>
    </div>
  );
}
