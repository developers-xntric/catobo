"use client";

import React, { useState } from "react";
import { ContactData } from "@/data/types";

interface ContactPageContentProps {
    data: ContactData;
}

function ArrowRightIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    );
}

export default function ContactPageContent({ data }: ContactPageContentProps) {
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
            <div className="2xl:max-w-360 w-[90%] mx-auto py-10">
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                    {data.infoCards.map((card, i) => (
                        <div key={i} className="flex-1 border border-[#D9E6F0] rounded-xl p-5 bg-white min-w-0">
                            <div
                                className="w-10 h-10 rounded-md flex items-center justify-center mb-3"
                                style={{
                                    background: "linear-gradient(90deg, #168DCA 0%, #0F2453 100%)",
                                }}
                            >
                                {card.icon}
                            </div>
                            <p className="text-[13px] font-semibold text-[#1a1a1a] mb-1.5 tracking-wide">
                                {card.title}
                            </p>
                            <div className="space-y-0.5">
                                {card.lines.map((line, j) => (
                                    <p key={j} className="text-[12.5px] text-[#636363] leading-snug">
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <section>
                    <h2 className="text-[26px] font-medium text-[#1a1a1a] mb-5 tracking-wide">
                        {data.form.heading}
                    </h2>

                    <div className="border border-[#D9E6F0] rounded-2xl p-7 bg-[#F9F6F6]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                            <div>
                                <label className={labelClass}>
                                    {data.form.fields.name}<span className="text-[#168DCA]">*</span>
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

                            <div>
                                <label className={labelClass}>
                                    {data.form.fields.surname}<span className="text-[#168DCA]">*</span>
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

                            <div>
                                <label className={labelClass}>
                                    {data.form.fields.phone}<span className="text-[#168DCA]">*</span>
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

                            <div>
                                <label className={labelClass}>
                                    {data.form.fields.email}<span className="text-[#168DCA]">*</span>
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

                            <div>
                                <label className={labelClass}>
                                    {data.form.fields.company}<span className="text-[#168DCA]">*</span>
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

                            <div>
                                <label className={labelClass}>
                                    {data.form.fields.subject}<span className="text-[#168DCA]">*</span>
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

                            <div className="md:col-span-2">
                                <label className={labelClass}>
                                    {data.form.fields.enquiry}<span className="text-[#168DCA]">*</span>
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
                        </div>

                        <button
                            onClick={handleSubmit}
                            className="mt-6 w-full flex items-center justify-center gap-2.5 py-3.5 rounded-lg text-white text-[14px] font-medium tracking-wide transition-opacity hover:opacity-90 active:opacity-80"
                            style={{
                                background: "linear-gradient(93deg, #22A1D8 0.43%, #025094 98.09%)",
                            }}
                        >
                            {data.form.submitText}
                            <ArrowRightIcon />
                        </button>
                    </div>
                </section>

                <section className="mt-8">
                    <div className="overflow-hidden border border-[#D9E6F0] h-120 w-full">
                        <iframe
                            title={data.mapTitle}
                            src={data.mapEmbedUrl}
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
