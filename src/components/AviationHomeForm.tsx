"use client";

import { useRef, useState, type FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import CountryPhoneInput, { formatInternationalPhone } from "@/components/CountryPhoneInput";
import type { Country } from "react-phone-number-input";

type FormState = { name: string; surname: string; phone: string; email: string; company: string; subject: string; enquiry: string };
const initial: FormState = { name: "", surname: "", phone: "", email: "", company: "", subject: "", enquiry: "" };
const input = "w-full rounded-md border border-[#D9E6F0] bg-white px-3 py-2.5 text-[13px] text-[#1a1a1a] placeholder:text-[#ABABAB] focus:border-[#168DCA] focus:outline-none focus:ring-1 focus:ring-[#168DCA]/20";

export default function AviationHomeForm() {
  const [form, setForm] = useState(initial);
  const [countryCode, setCountryCode] = useState<Country>("AE");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [token, setToken] = useState<string | null>(null);
  const captcha = useRef<ReCAPTCHA>(null);
  const change = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm((previous) => ({ ...previous, [event.target.name]: event.target.value }));

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!token) return;
    setBusy(true); setStatus("idle");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: form.name, email: form.email, inquiryType: form.subject, message: `Surname: ${form.surname}\nPhone: ${formatInternationalPhone(countryCode, form.phone)}\nCompany: ${form.company}\nSubject: ${form.subject}\n\nMessage:\n${form.enquiry}`, recaptchaToken: token }) });
      if (!response.ok) throw new Error();
      setForm(initial); setCountryCode("AE"); setToken(null); captcha.current?.reset(); setStatus("success");
    } catch { setStatus("error"); } finally { setBusy(false); }
  }

  return <form onSubmit={submit} className="space-y-4"><div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
    {([['name', 'Name', 'Enter Your Name', 'text'], ['surname', 'Surname', 'Enter Your Name', 'text'], ['email', 'Email Address', 'Enter Your Email Address', 'email'], ['company', 'Company Name', 'Enter Your Company Name', 'text']] as const).map(([name, label, placeholder, type]) => <div key={name}><label className="mb-1.5 block text-[12px] font-medium tracking-wide text-[#1a1a1a]">{label}<span className="text-[#168DCA]">*</span></label><input required type={type} name={name} value={form[name]} onChange={change} placeholder={placeholder} className={input} /></div>)}
    <div><label className="mb-1.5 block text-[12px] font-medium tracking-wide text-[#1a1a1a]">Phone Number<span className="text-[#168DCA]">*</span></label><CountryPhoneInput country={countryCode} number={form.phone} onCountryChange={setCountryCode} onNumberChange={(phone) => setForm((previous) => ({ ...previous, phone }))} required /></div>
    <div><label className="mb-1.5 block text-[12px] font-medium tracking-wide text-[#1a1a1a]">Subject<span className="text-[#168DCA]">*</span></label><select required name="subject" value={form.subject} onChange={change} className={input}><option value="" disabled>Select a Subject</option><option value="general">General Enquiry</option><option value="sales">Sales</option><option value="support">Technical Support</option><option value="other">Other</option></select></div>
    <div className="md:col-span-2"><label className="mb-1.5 block text-[12px] font-medium tracking-wide text-[#1a1a1a]">Enquiry<span className="text-[#168DCA]">*</span></label><textarea required name="enquiry" value={form.enquiry} onChange={change} placeholder="Enter Your Enquiry..." rows={5} className={input + " resize-none"} /></div>
  </div><div className="w-full overflow-hidden"><div className="origin-left scale-[0.77] sm:scale-100"><ReCAPTCHA ref={captcha} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} onChange={setToken} /></div></div><button type="submit" disabled={busy || !token} className="mt-2 flex w-full items-center justify-center gap-2.5 rounded-lg py-3.5 text-[14px] font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50" style={{ background: "linear-gradient(93deg,#22A1D8 0.43%,#025094 98.09%)" }}>{busy ? "Submitting..." : "Submit Now"}{!busy && <span aria-hidden>→</span>}</button>{status === "success" && <p className="text-sm text-green-600">Thank you! Your message has been sent successfully.</p>}{status === "error" && <p className="text-sm text-red-600">Failed to send message. Please try again later.</p>}</form>;
}