"use client";

import Image from "next/image";
import { useState } from "react";
import Button from '@/components/ui/grad-button';

interface Testimonial {
    id: number;
    company: string;
    quote: string;
    readMoreLink: string;
    author: string;
    designation: string;
    image: string;
}
import Badge from './ui/badge';
const testimonials: Testimonial[] = [
    {
        id: 1,
        company: "Leads Investments Group L.L.C",
        quote:
            "We had the pleasure of working with Catobo for more than 7 years. Their team has successfully completed multiple projects with our requirements. Catobo has always been responsive to our needs, very knowledgeable in many engineering topics",
        readMoreLink: "#",
        author: "ATIQ HASSAN MUBARAK ",
        designation: "Intl. Security Safety Aviation Advisor",
        image: "/profile/user-1.png",
    },
    {
        id: 2,
        company: "Dubai Civil Aviation Authority, DCAA",
        quote:
            "Representing the Dubai Civil Aviation Authority, DCAA, I have had numerous dealings with  CATOBO on many occasions. Predominately in the construction and or rehabilitation of Helipads throughout the entire UAE, CATOBO have set the benchmark",
        readMoreLink: "#",
        author: "MICHEAL RUDOLPH ",
        designation: "UAS / UTM SME ",
        image: "/profile/user-2.png",
    },
    {
        id: 3,
        company: "SEED Engineering, UAE",
        quote:
            "We have the pleasure of working with Catobo for more than 15 years Every once in a while, you run across another professional whose standards match your own. Catobo for us has been that kind of great experience. We were able to take our idea from concept",
        readMoreLink: "#",
        author: "SANJU MATHEW",
        designation: "CEO",
        image: "/profile/user-3.png",
    },
];

export default function Testimonials() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleExpand = (id: number) => {
        setExpandedId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="py-16 bg-white">
            <div className="2xl:max-w-[1440px] w-[90%]  mx-auto space-y-3">
                <Badge text='Testimonials' variant='black' />
                <h2 className="text-[20px] md:text-3xl lg:text-[40px] font-medium leading-[1.2] text-balance text-[#000000] text-center ">
                    Voices of Partnerships
                </h2>
                <p className="text-base md:text-lg text-[#636363] mb-6 max-w-[80%] text-center mx-auto tracking-normal">
                    What We've Learned Together.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-md bg-[#1E1E1E] p-6 text-white flex flex-col justify-between h-[295px]"
                        >
                            <h3 className="text-[17px] font-semibold mb-4">
                                {item.company}
                            </h3>

                            <div>
                                <p
                                    className={`text-[14px] leading-relaxed text-[#C6CDD1] ${expandedId !== item.id ? "line-clamp-4" : ""}`}
                                >
                                    "{item.quote}"
                                </p>

                                <button
                                    onClick={() => toggleExpand(item.id)}
                                    className="mt-2 self-start text-[14px] font-medium text-[#1EA7FF] underline"
                                >
                                    {expandedId === item.id ? "Show Less" : "Read More"}
                                </button>

                                <div className="mt-4 flex items-center gap-3 ">
                                    <Image
                                        src={item.image}
                                        alt={item.author}
                                        width={28}
                                        height={28}
                                        className="rounded-md object-cover"
                                    />

                                    <div>
                                        <p className="text-[13px] font-light uppercase text-[#cdd6db]">
                                            {item.author}
                                        </p>
                                        <p className="text-[12px] text-gray-400">
                                            {item.designation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <Button
                        href="/testimonials"
                        className="text-white font-medium py-3 px-10 transition-colors rounded-lg disabled:opacity-50 mt-5"
                    >
                        View All Testimonals
                    </Button>
                </div>
            </div>
        </section>
    );
}