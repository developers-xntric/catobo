"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import { Input } from "@/components/ui/input";
import CountryPhoneInput, { formatInternationalPhone } from "@/components/CountryPhoneInput";
import type { Country } from "react-phone-number-input";

const aviationInitialForm = {
  name: "",
  surname: "",
  phone: "",
  countryCode: "AE" as Country,
  email: "",
  company: "",
  subject: "",
  enquiry: "",
};

export default function ContactPopup() {
  const { isOpen, close } = useContactPopup();
  const pathname = usePathname();
  const isAviation = pathname?.startsWith("/aviation") ?? false;
  const usesDetailedForm = isAviation || (pathname?.startsWith("/engineering") ?? false);
  const [aviationForm, setAviationForm] = useState(aviationInitialForm);
  const [basicForm, setBasicForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  function handleAviationChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setAviationForm(previous => ({ ...previous, [event.target.name]: event.target.value }));
  }

  function handleBasicChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setBasicForm(previous => ({ ...previous, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!recaptchaToken) return;
    setIsSubmitting(true);
    setSubmitStatus("idle");
    const payload = usesDetailedForm
      ? {
          name: aviationForm.name,
          email: aviationForm.email,
          inquiryType: aviationForm.subject,
          message: `Surname: ${aviationForm.surname}\nPhone: ${formatInternationalPhone(aviationForm.countryCode, aviationForm.phone)}\nCompany: ${aviationForm.company}\nSubject: ${aviationForm.subject}\n\nMessage:\n${aviationForm.enquiry}`,
          recaptchaToken,
        }
      : { ...basicForm, recaptchaToken };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Unable to send message");
      setSubmitStatus("success");
      if (usesDetailedForm) setAviationForm(aviationInitialForm);
      else setBasicForm({ name: "", email: "", message: "" });
      setRecaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} />
      <div role="dialog" aria-modal="true" aria-labelledby="consultation-title" className={`relative max-h-[90dvh] w-full overflow-y-auto rounded-2xl bg-white shadow-2xl ${usesDetailedForm ? "max-w-4xl" : "max-w-lg"}`}>
        <div className="flex items-center justify-between p-6 pb-0">
          <h2 id="consultation-title" className="text-2xl font-semibold text-[#0a0f1e]">{usesDetailedForm ? "Book Your Consultation" : "Get In Touch"}</h2>
          <button type="button" onClick={close} className="rounded-full p-2 transition-colors hover:bg-gray-100" aria-label="Close">
            <X className="size-5" />
          </button>
        </div>
        {usesDetailedForm ? (
          <AviationForm form={aviationForm} onChange={handleAviationChange} onCountryChange={(countryCode) => setAviationForm((previous) => ({ ...previous, countryCode }))} onSubmit={handleSubmit} isSubmitting={isSubmitting} token={recaptchaToken} setToken={setRecaptchaToken} recaptchaRef={recaptchaRef} status={submitStatus} />
        ) : (
          <BasicForm form={basicForm} onChange={handleBasicChange} onSubmit={handleSubmit} isSubmitting={isSubmitting} token={recaptchaToken} setToken={setRecaptchaToken} recaptchaRef={recaptchaRef} status={submitStatus} />
        )}
      </div>
    </div>
  );
}

function AviationForm({ form, onChange, onCountryChange, onSubmit, isSubmitting, token, setToken, recaptchaRef, status }: {
  form: typeof aviationInitialForm;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onCountryChange: (country: Country) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
  token: string | null;
  setToken: (token: string | null) => void;
  recaptchaRef: React.RefObject<ReCAPTCHA | null>;
  status: "idle" | "success" | "error";
}) {
  const inputClass = "w-full rounded-md border border-[#D9E6F0] bg-white px-3 py-2.5 text-[13px] text-[#1a1a1a] placeholder:text-[#ABABAB] transition-all focus:border-[#168DCA] focus:outline-none focus:ring-1 focus:ring-[#168DCA]/20";
  const labelClass = "mb-1.5 block text-[12px] font-medium tracking-wide text-[#1a1a1a]";

  return (
    <form onSubmit={onSubmit} className="p-6 pt-5">
      <div className="rounded-2xl border border-[#1475AF] bg-[#F9F6F6] p-4 md:p-7">
        <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
          <Field label="Name" name="name" value={form.name} onChange={onChange} placeholder="Enter Your Name" className={inputClass} labelClass={labelClass} />
          <Field label="Surname" name="surname" value={form.surname} onChange={onChange} placeholder="Enter Your Name" className={inputClass} labelClass={labelClass} />
          <div><label className={labelClass} htmlFor="consultation-phone">Phone Number<span className="text-[#168DCA]">*</span></label><CountryPhoneInput id="consultation-phone" country={form.countryCode} number={form.phone} onCountryChange={onCountryChange} onNumberChange={(phone) => onChange({ target: { name: "phone", value: phone } } as ChangeEvent<HTMLInputElement>)} required /></div>
          <Field label="Email Address" name="email" type="email" value={form.email} onChange={onChange} placeholder="Enter Your Email Address" className={inputClass} labelClass={labelClass} />
          <Field label="Company / Organization" name="company" value={form.company} onChange={onChange} placeholder="Enter Your Company Name" className={inputClass} labelClass={labelClass} />
          <div>
            <label className={labelClass} htmlFor="consultation-subject">Subject<span className="text-[#168DCA]">*</span></label>
            <select id="consultation-subject" name="subject" value={form.subject} onChange={onChange} required className={inputClass + " cursor-pointer"}>
              <option value="" disabled>Select a Subject</option>
              <option value="general">General Enquiry</option>
              <option value="sales">Sales</option>
              <option value="support">Technical Support</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className={labelClass} htmlFor="consultation-enquiry">Enquiry Details<span className="text-[#168DCA]">*</span></label>
            <textarea id="consultation-enquiry" name="enquiry" value={form.enquiry} onChange={onChange} placeholder="Enter Your Enquiry..." rows={5} required className={inputClass + " resize-none"} />
          </div>
        </div>
        <div className="mt-4 w-full overflow-hidden"><div className="origin-left scale-[0.77] sm:scale-100"><ReCAPTCHA ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} onChange={setToken} /></div></div>
        <button type="submit" disabled={isSubmitting || !token} className="mt-5 flex w-full items-center justify-center gap-2.5 rounded-lg py-3.5 text-[14px] font-medium tracking-wide text-white transition-opacity hover:opacity-90 disabled:opacity-50" style={{ background: "linear-gradient(93deg, #22A1D8 0.43%, #025094 98.09%)" }}>
          {isSubmitting ? "Submitting..." : "Submit Now"}<span aria-hidden>→</span>
        </button>
        <FormStatus status={status} />
      </div>
    </form>
  );
}

function BasicForm({ form, onChange, onSubmit, isSubmitting, token, setToken, recaptchaRef, status }: {
  form: { name: string; email: string; message: string };
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
  token: string | null;
  setToken: (token: string | null) => void;
  recaptchaRef: React.RefObject<ReCAPTCHA | null>;
  status: "idle" | "success" | "error";
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-4 p-6">
      <label className="block text-sm font-medium text-[#101010]">Name<Input name="name" value={form.name} onChange={onChange} placeholder="Your Name" className="mt-1.5 border-[#D6D6D6] bg-white" required /></label>
      <label className="block text-sm font-medium text-[#101010]">Email<Input name="email" type="email" value={form.email} onChange={onChange} placeholder="Your Email" className="mt-1.5 border-[#D6D6D6] bg-white" required /></label>
      <label className="block text-sm font-medium text-[#101010]">Message<textarea name="message" value={form.message} onChange={onChange} placeholder="Your Message" rows={5} required className="mt-1.5 w-full rounded-md border border-[#D6D6D6] bg-white p-3 text-sm" /></label>
      <div className="w-full overflow-hidden"><div className="origin-left scale-[0.77] sm:scale-100"><ReCAPTCHA ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} onChange={setToken} /></div></div>
      <button type="submit" disabled={isSubmitting || !token} className="w-full rounded-lg py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50" style={{ background: "linear-gradient(93deg, #168DCA -24.15%, #0F2453 134.7%)" }}>{isSubmitting ? "Submitting..." : "Submit Now"}</button>
      <FormStatus status={status} />
    </form>
  );
}

function Field({ label, name, value, onChange, placeholder, className, labelClass, type = "text" }: {
  label: string; name: keyof typeof aviationInitialForm; value: string; onChange: (event: ChangeEvent<HTMLInputElement>) => void; placeholder: string; className: string; labelClass: string; type?: string;
}) {
  const id = `consultation-${name}`;
  return <div><label className={labelClass} htmlFor={id}>{label}<span className="text-[#168DCA]">*</span></label><input id={id} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} required className={className} /></div>;
}

function FormStatus({ status }: { status: "idle" | "success" | "error" }) {
  if (status === "success") return <p role="status" className="mt-3 text-sm text-green-600">Thank you! Your message has been sent successfully.</p>;
  if (status === "error") return <p role="alert" className="mt-3 text-sm text-red-600">Failed to send message. Please try again later.</p>;
  return null;
}
