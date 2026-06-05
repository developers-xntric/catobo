"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactPopup() {
  const { isOpen, close } = useContactPopup();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "Services",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", inquiryType: "Services", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 pb-0">
          <h2 className="text-2xl font-semibold text-[#0a0f1e]">Get In Touch</h2>
          <button onClick={close} className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-[#101010]">Name</label>
            <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="border-[#D6D6D6] bg-white" required />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-[#101010]">Email</label>
            <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="border-[#D6D6D6] bg-white" required />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-[#101010]">Inquiry Type</label>
            <Select value={formData.inquiryType} onValueChange={(v) => setFormData((prev) => ({ ...prev, inquiryType: v }))}>
              <SelectTrigger className="border-[#D6D6D6] bg-white">
                <SelectValue placeholder="Select inquiry type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Services">Services</SelectItem>
                <SelectItem value="Support">Support</SelectItem>
                <SelectItem value="Partnership">Partnership</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-[#101010]">Message</label>
            <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="border-[#D6D6D6] bg-white resize-none" rows={5} required />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-lg text-white text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50"
            style={{ background: "linear-gradient(93deg, #168DCA -24.15%, #0F2453 134.7%)" }}
          >
            {isSubmitting ? "Submitting..." : submitStatus === "success" ? "Sent Successfully!" : "Submit Now"}
          </button>
          {submitStatus === "error" && <p className="text-red-600 text-sm text-center">Failed to send. Please try again.</p>}
        </form>
      </div>
    </div>
  );
}
