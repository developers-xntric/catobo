"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FaqItem } from "@/data/types";

interface FaqAccordionProps {
    faqData?: FaqItem[];
}

const defaultFaqData: FaqItem[] = [
    {
        question: "What are your operating hours?",
        answer:
            "Catobo ME trades from 08:00 to 17:00 Monday to Friday.",
    },
    {
        question: "What products do you offer?",
        answer:
            "We offer a wide range of engineering and technology solutions.",
    },
    {
        question: "Who are your group companies?",
        answer:
            "Our group companies operate across multiple sectors and regions.",
    },
    {
        question: "Who are your associate companies?",
        answer:
            "We work with several strategic partners and associate companies.",
    },
    {
        question: "Are you ISO certified?",
        answer:
            "Yes, we maintain internationally recognized ISO certifications.",
    },
];

export default function FaqAccordion({ faqData }: FaqAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number>(0);
    const data = faqData || defaultFaqData;

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="2xl:max-w-350 w-[90%] mx-auto lg:px-8 py-5 md:py-10">
            <div className="w-full overflow-hidden rounded border border-[#1475AF] bg-[#F9F6F6] p-3">
                {data.map((faq, index) => (
                    <div
                        key={index}
                        className={`border-b border-[#D9D9D9] ${index === data.length - 1 ? "border-b-0" : ""
                            }`}
                    >
                        <button
                            onClick={() => toggleItem(index)}
                            className="flex w-full items-center justify-between px-4 py-3 text-left"
                        >
                            <span className="text-[16px] font-medium text-[#000000]">
                                {faq.question}
                            </span>

                            {openIndex === index ? (
                                <Minus size={20} className="text-[#2B6CB0]" />
                            ) : (
                                <Plus size={20} className="text-[#2B6CB0]" />
                            )}
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ${openIndex === index
                                ? "max-h-40 pb-3"
                                : "max-h-0"
                                }`}
                        >
                            <p className="px-4 text-[13px] font-medium text-[#7C7E86]">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
