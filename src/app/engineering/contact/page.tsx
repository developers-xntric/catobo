"use client";

import DynamicHero from "@/components/common/hero";
import React, { useState } from "react";

function PhoneIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_3115_17565)">
                <mask id="mask0_3115_17565" style={{ maskType: "luminance" }} x="0" y="0" width="24" height="24">
                    <path d="M24 0H0V24H24V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_3115_17565)">
                    <path d="M20 11.03V17C20 21 19 22 15 22H9C5 22 4 21 4 17V7C4 3 5 2 9 2H15C19 2 20 3 20 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14 5.5H10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.0012 19.1C12.8572 19.1 13.5512 18.406 13.5512 17.55C13.5512 16.694 12.8572 16 12.0012 16C11.1452 16 10.4512 16.694 10.4512 17.55C10.4512 18.406 11.1452 19.1 12.0012 19.1Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_3115_17565">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

function EmailIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_3115_17579)">
                <mask id="mask0_3115_17579" style={{ maskType: "luminance" }} x="0" y="0" width="24" height="24">
                    <path d="M24 0H0V24H24V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_3115_17579)">
                    <path d="M20 11.03V17C20 21 19 22 15 22H9C5 22 4 21 4 17V7C4 3 5 2 9 2H15C19 2 20 3 20 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14 5.5H10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.0012 19.1C12.8572 19.1 13.5512 18.406 13.5512 17.55C13.5512 16.694 12.8572 16 12.0012 16C11.1452 16 10.4512 16.694 10.4512 17.55C10.4512 18.406 11.1452 19.1 12.0012 19.1Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_3115_17579">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

function LocationIcon() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

function ArrowRightIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    );
}

// ==========================================
// INFO CARD COMPONENT
// ==========================================

interface InfoCardProps {
    icon: React.ReactNode;
    title: string;
    lines: string[];
}

function InfoCard({ icon, title, lines }: InfoCardProps) {
    return (
        <div className="flex-1 border border-[#D9E6F0] rounded-xl p-5 bg-white min-w-0">
            {/* Icon box */}
            <div
                className="w-10 h-10 rounded-md flex items-center justify-center mb-3"
                style={{
                    background: "linear-gradient(90deg, #168DCA 0%, #0F2453 100%)",
                }}
            >
                {icon}
            </div>

            {/* Title */}
            <p className="text-[13px] font-semibold text-[#1a1a1a] mb-1.5 tracking-wide">
                {title}
            </p>

            {/* Info lines */}
            <div className="space-y-0.5">
                {lines.map((line, i) => (
                    <p key={i} className="text-[12.5px] text-[#636363] leading-snug">
                        {line}
                    </p>
                ))}
            </div>
        </div>
    );
}

// ==========================================
// MAIN CONTACT PAGE COMPONENT
// ==========================================

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
        company: "",
        subject: "",
        enquiry: "",
        robot: false,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    const handleSubmit = () => {
        console.log("Form submitted:", formData);
    };

    const inputClass =
        "w-full border border-[#D9E6F0] rounded-md px-3 py-2.5 text-[13px] text-[#1a1a1a] placeholder:text-[#ABABAB] bg-white focus:outline-none focus:border-[#168DCA] focus:ring-1 focus:ring-[#168DCA]/20 transition-all";

    const labelClass = "block text-[12px] text-[#1a1a1a] font-medium mb-1.5 tracking-wide";

    return (
        <main className="min-h-screen bg-white">
            <DynamicHero
                title={"Contact Us"}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Contact Us" },
                ]}
                backgroundImage={"/contact-bg.png"}
            />
            <div className="2xl:max-w-360 w-[90%] mx-auto py-10">

                {/* ─── Info Cards Row ─── */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                    <InfoCard
                        icon={<PhoneIcon />}
                        title="Phone Number"
                        lines={["Tel: +971 4 391 6018", "Fax: +971 4 391 8138"]}
                    />
                    <InfoCard
                        icon={<EmailIcon />}
                        title="Email Address"
                        lines={["info@catobo.com"]}
                    />
                    <InfoCard
                        icon={<LocationIcon />}
                        title="Address"
                        lines={[
                            "Office 702 – Al Masaood Tower,",
                            "Riggat Al Buteen, Deira, Dubai, UAE",
                        ]}
                    />
                </div>

                {/* ─── Form Section ─── */}
                <section>
                    <h2 className="text-[26px] font-medium text-[#1a1a1a] mb-5 tracking-wide">
                        How May We Help You
                    </h2>

                    {/* Form Card */}
                    <div className="border border-[#D9E6F0] rounded-2xl p-7 bg-[#F9F6F6]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">

                            {/* Name */}
                            <div>
                                <label className={labelClass}>
                                    Name<span className="text-[#168DCA]">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter Your Name"
                                    className={inputClass}
                                />
                            </div>

                            {/* Surname */}
                            <div>
                                <label className={labelClass}>
                                    Surname<span className="text-[#168DCA]">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="surname"
                                    value={formData.surname}
                                    onChange={handleChange}
                                    placeholder="Enter Your Name"
                                    className={inputClass}
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className={labelClass}>
                                    Phone Number<span className="text-[#168DCA]">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter Your Phone Number"
                                    className={inputClass}
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className={labelClass}>
                                    Email Address<span className="text-[#168DCA]">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter Your Email Address"
                                    className={inputClass}
                                />
                            </div>

                            {/* Company */}
                            <div>
                                <label className={labelClass}>
                                    Company Name<span className="text-[#168DCA]">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Enter Your Company Name"
                                    className={inputClass}
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label className={labelClass}>
                                    Subject<span className="text-[#168DCA]">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`${inputClass} appearance-none pr-8 cursor-pointer`}
                                    >
                                        <option value="" disabled hidden>
                                            Select a Subject
                                        </option>
                                        <option value="general">General Enquiry</option>
                                        <option value="sales">Sales</option>
                                        <option value="support">Technical Support</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {/* Custom chevron */}
                                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#888"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Enquiry — full width */}
                            <div className="md:col-span-2">
                                <label className={labelClass}>
                                    Enquiry<span className="text-[#168DCA]">*</span>
                                </label>
                                <textarea
                                    name="enquiry"
                                    value={formData.enquiry}
                                    onChange={handleChange}
                                    placeholder="Enter Your Enquiry..."
                                    rows={5}
                                    className={`${inputClass} resize-none`}
                                />
                            </div>

                            {/* reCAPTCHA mock — full width */}
                            {/* <div className="md:col-span-2">
                                <div className="inline-flex items-center gap-3 border border-[#D9E6F0] rounded-md px-4 py-3 bg-[#FAFAFA]">
                                    <input
                                        type="checkbox"
                                        name="robot"
                                        id="robot"
                                        checked={formData.robot}
                                        onChange={handleChange}
                                        className="w-4 h-4 accent-[#168DCA] cursor-pointer"
                                    />
                                    <label htmlFor="robot" className="text-[13px] text-[#333] cursor-pointer select-none">
                                        I am not a robot
                                    </label>
                                    <div className="ml-2 flex flex-col items-center">
                                        <div className="w-9 h-9 rounded-full border-4 border-t-[#4A90D9] border-r-[#4A90D9] border-b-[#ccc] border-l-[#ccc] animate-spin" />
                                    </div>
                                </div>
                            </div> */}
                        </div>

                        {/* Submit Button — full width */}
                        <button
                            onClick={handleSubmit}
                            className="mt-6 w-full flex items-center justify-center gap-2.5 py-3.5 rounded-lg text-white text-[14px] font-medium tracking-wide transition-opacity hover:opacity-90 active:opacity-80"
                            style={{
                                background: "linear-gradient(93deg, #22A1D8 0.43%, #025094 98.09%)",
                            }}
                        >
                            Submit Now
                            <ArrowRightIcon />
                        </button>
                    </div>
                </section>

                {/* ─── Map Embed ─── */}
                <section className="mt-8">
                    <div className="overflow-hidden border border-[#D9E6F0] h-120 w-full">
                        <iframe
                            title="catobo Location – Al Masaood Tower, Deira, Dubai"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.9!2d55.3241!3d25.2744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d3f4c0c0001%3A0x0!2sAl+Masaood+Tower%2C+Deira%2C+Dubai!5e0!3m2!1sen!2sae!4v1699999999999"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </section>

            </div>
        </main>
    );
}