"use client";

import React from "react";
import Image from "next/image";
import { TestimonialsData } from "@/data/types";

interface TestimonialsPageContentProps {
    data: TestimonialsData;
}

export default function TestimonialsPageContent({ data }: TestimonialsPageContentProps) {
    const fullWidthItem = data.items.find((item) => item.fullWidth);
    const standardItems = data.items.filter((item) => !item.fullWidth && !item.response);
    const responseItem = data.items.find((item) => item.response);

    return (
        <main className="w-full bg-white pb-20">
            <div className="2xl:max-w-360 w-[90%] mx-auto z-20 pt-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {data.stats.map((stat, i) => (
                        <div key={i} className="bg-[#F8F9FA] p-5 rounded-xl border border-gray-100 flex items-center gap-6 shadow-sm">
                            <div className="w-14 h-14 rounded-full bg-[#E4E4E4] flex items-center justify-center shrink-0">
                                {stat.icon}
                            </div>
                            <div>
                                <h2 className="text-2xl font-medium text-[#111111]">{stat.value}</h2>
                                <p className="text-sm text-[#636363]">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mb-10">
                    <h2 className="text-[20px] md:text-[30px] lg:text-[35px] font-medium leading-[1.2] text-[#000] mb-2">
                        {data.heading}
                    </h2>
                    <p className="text-sm text-[#6D6D6D]">
                        {data.subheading}
                    </p>
                </div>

                <div className="flex flex-col gap-8">
                    {fullWidthItem && (
                        <div className="bg-[#FAFAFA] rounded-[15px] overflow-hidden border border-gray-100 flex flex-col lg:flex-row transition-shadow p-4 gap-10">
                            <div className="lg:w-[35%] w-full min-h-[300px] xl:min-h-[380px] relative rounded-xl overflow-hidden shrink-0">
                                <Image
                                    src={fullWidthItem.logo || "/testimonials/seed.png"}
                                    alt={fullWidthItem.company}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="lg:w-[65%] flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold mb-6 text-gray-900">{fullWidthItem.company}</h3>
                                    <div className="space-y-6">
                                        {fullWidthItem.text1 && (
                                            <p className="text-sm md:text-[15px] 2xl:text-base text-[#111111]">
                                                {fullWidthItem.text1}
                                            </p>
                                        )}
                                        {fullWidthItem.text2 && (
                                            <p className="text-sm md:text-[15px] 2xl:text-base text-[#111111]">
                                                {fullWidthItem.text2}
                                            </p>
                                        )}
                                        {fullWidthItem.text && !fullWidthItem.text1 && (
                                            <p className="text-sm md:text-[15px] 2xl:text-base text-[#111111]">
                                                {fullWidthItem.text}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-10 flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                        <Image
                                            src={fullWidthItem.avatar}
                                            alt={fullWidthItem.author}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-bold text-[#111111] text-sm uppercase">{fullWidthItem.author}</div>
                                        <div className="text-xs text-[#111111] font-medium">{fullWidthItem.designation}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {standardItems.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {standardItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-[#F8F9FA] p-5 rounded-[15px] border border-gray-100 flex flex-col justify-between transition-shadow"
                                >
                                    <div>
                                        <h3 className="text-lg font-semibold mb-6 text-[#111111]">{item.company}</h3>
                                        <p className="text-sm leading-relaxed text-[#111111]">
                                            {item.text}
                                        </p>
                                    </div>
                                    <div className="mt-8 flex items-center gap-4">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                            <Image
                                                src={item.avatar || ""}
                                                alt={item.author}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="text-[#111111] text-xs uppercase mb-1">{item.author}</div>
                                            <div className="text-[10px] text-[#111111] font-medium max-w-[200px] leading-tight">{item.designation}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {responseItem && (
                        <div className="bg-[#FAFAFA] p-5 rounded-[15px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-semibold mb-6 text-[#111111]">{responseItem.company}</h3>
                            <p className="text-sm leading-relaxed text-[#111111] mb-5">
                                {responseItem.text}
                            </p>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-gray-200">
                                    <Image
                                        src={responseItem.avatar}
                                        alt={responseItem.author}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="text-[#111111] text-xs uppercase mb-1">{responseItem.author}</div>
                                    <div className="text-[10px] text-[#111111] font-medium leading-tight lowercase first-letter:uppercase">{responseItem.designation}</div>
                                </div>
                            </div>

                            {responseItem.response && (
                                <div className="bg-[#E7F3FF] p-4 rounded-xl border-l-[4px] border-[#168DCA]">
                                    <div className="font-bold text-[#111111] mb-2 text-sm uppercase">{responseItem.response.from}</div>
                                    <p className="text-sm text-[#111111] leading-relaxed">
                                        {responseItem.response.text}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
