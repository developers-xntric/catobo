"use client";

import { CheckIcon } from "@/components/common/CheckIcon";
import DynamicHero from "@/components/common/hero";
import React, { useState } from "react";

// SHARED UI COMPONENTS

function CheckItem({ label }: { label: string }) {
    return (
        <div className="flex items-start gap-3">
            <CheckIcon />
            <span className="text-[14px] text-[#636363] leading-relaxed">{label}</span>
        </div>
    );
}

function BodyText({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <p className={`text-[14px] text-[#636363] ${className}`}>
            {children}
        </p>
    );
}

function SectionHeading({
    children,
    size = "h2",
    className = "",
}: {
    children: React.ReactNode;
    size?: "h1" | "h2" | "h3";
    className?: string;
}) {
    const base = `font-medium text-black leading-tight tracking-wide ${className}`;
    if (size === "h1") return <h1 className={`text-[28px] ${base}`}>{children}</h1>;
    if (size === "h3") return <h3 className={`text-[16px] ${base}`}>{children}</h3>;
    return <h2 className={`text-[35px] ${base}`}>{children}</h2>;
}

// FEATURE CARD ICONS

function IconLED() {
    return (
        <svg width="71" height="66" viewBox="0 0 71 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M58.986 35.4616C58.9796 29.2244 56.4991 23.2445 52.0887 18.8341C47.6783 14.4237 41.6984 11.9431 35.4612 11.9368C12.9701 11.9368 3.41352 40.7869 21.3487 54.2863V64.1314C21.3487 64.6096 21.5386 65.0682 21.8768 65.4064C22.2149 65.7446 22.6736 65.9345 23.1518 65.9345H47.7705C48.2488 65.9345 48.7074 65.7446 49.0455 65.4064C49.3837 65.0682 49.5737 64.6096 49.5737 64.1314V54.2863C52.4909 52.0896 54.8592 49.2465 56.4923 45.9802C58.1255 42.7139 58.979 39.1134 58.986 35.4616ZM24.9549 62.3283V53.3968C24.9566 53.1016 24.8864 52.8106 24.7502 52.5487C24.6141 52.2869 24.4161 52.0622 24.1736 51.8941C8.19782 40.8229 15.9994 15.6152 35.4612 15.543C54.923 15.4709 62.7245 40.7869 46.7488 51.8941C46.5062 52.0622 46.3082 52.2869 46.1721 52.5487C46.0359 52.8106 45.9657 53.1016 45.9674 53.3968V62.3283H24.9549Z" fill="url(#paint0_linear_3112_9028)" />
            <path d="M35.4594 9.01572C35.9376 9.01572 36.3962 8.82574 36.7344 8.48759C37.0725 8.14944 37.2625 7.6908 37.2625 7.21258V1.80319C37.2625 1.32497 37.0725 0.866339 36.7344 0.528186C36.3962 0.190033 35.9376 6.10352e-05 35.4594 6.10352e-05C34.9812 6.10352e-05 34.5225 0.190033 34.1844 0.528186C33.8462 0.866339 33.6562 1.32497 33.6562 1.80319V7.24865C33.6657 7.72059 33.8598 8.17001 34.197 8.5004C34.5341 8.8308 34.9873 9.01581 35.4594 9.01572Z" fill="url(#paint1_linear_3112_9028)" />
            <path d="M57.9894 10.3862L54.1307 14.2328C53.8302 14.5797 53.6722 15.0276 53.6887 15.4862C53.7051 15.9449 53.8946 16.3803 54.2191 16.7048C54.5437 17.0294 54.9791 17.2189 55.4377 17.2353C55.8964 17.2517 56.3442 17.0938 56.6911 16.7933L60.5378 12.9346C60.8563 12.5928 61.0297 12.1407 61.0215 11.6735C61.0132 11.2064 60.824 10.7607 60.4936 10.4303C60.1633 10.1 59.7176 9.91074 59.2504 9.9025C58.7833 9.89426 58.3312 10.0677 57.9894 10.3862Z" fill="url(#paint2_linear_3112_9028)" />
            <path d="M69.1197 33.6584H63.6742C63.196 33.6584 62.7374 33.8484 62.3992 34.1866C62.0611 34.5247 61.8711 34.9834 61.8711 35.4616C61.8711 35.9398 62.0611 36.3984 62.3992 36.7366C62.7374 37.0747 63.196 37.2647 63.6742 37.2647H69.1197C69.5979 37.2647 70.0565 37.0747 70.3947 36.7366C70.7328 36.3984 70.9228 35.9398 70.9228 35.4616C70.9228 34.9834 70.7328 34.5247 70.3947 34.1866C70.0565 33.8484 69.5979 33.6584 69.1197 33.6584Z" fill="url(#paint3_linear_3112_9028)" />
            <path d="M56.6911 54.1301C56.3442 53.8296 55.8964 53.6716 55.4377 53.6881C54.9791 53.7045 54.5437 53.894 54.2191 54.2185C53.8946 54.5431 53.7051 54.9785 53.6887 55.4371C53.6722 55.8958 53.8302 56.3436 54.1307 56.6905L57.9894 60.5372C58.3312 60.8557 58.7833 61.0291 59.2504 61.0209C59.7176 61.0126 60.1633 60.8234 60.4936 60.493C60.824 60.1626 61.0132 59.7169 61.0215 59.2498C61.0297 58.7827 60.8563 58.3306 60.5378 57.9888L56.6911 54.1301Z" fill="url(#paint4_linear_3112_9028)" />
            <path d="M14.233 54.1301L10.3863 57.9888C10.0678 58.3306 9.89438 58.7827 9.90262 59.2498C9.91087 59.7169 10.1001 60.1626 10.4305 60.493C10.7608 60.8234 11.2065 61.0126 11.6737 61.0209C12.1408 61.0291 12.5929 60.8557 12.9347 60.5372L16.7934 56.6905C17.0939 56.3436 17.2518 55.8958 17.2354 55.4371C17.219 54.9785 17.0295 54.5431 16.7049 54.2185C16.3804 53.894 15.945 53.7045 15.4864 53.6881C15.0277 53.6716 14.5799 53.8296 14.233 54.1301Z" fill="url(#paint5_linear_3112_9028)" />
            <path d="M7.24859 33.6584H1.80313C1.32491 33.6584 0.866278 33.8484 0.528125 34.1866C0.189972 34.5247 0 34.9834 0 35.4616C0 35.9398 0.189972 36.3984 0.528125 36.7366C0.866278 37.0747 1.32491 37.2647 1.80313 37.2647H7.24859C7.72681 37.2647 8.18544 37.0747 8.52359 36.7366C8.86174 36.3984 9.05172 35.9398 9.05172 35.4616C9.05172 34.9834 8.86174 34.5247 8.52359 34.1866C8.18544 33.8484 7.72681 33.6584 7.24859 33.6584Z" fill="url(#paint6_linear_3112_9028)" />
            <path d="M14.2331 16.7932C14.58 17.0937 15.0278 17.2516 15.4865 17.2352C15.9451 17.2188 16.3805 17.0292 16.7051 16.7047C17.0296 16.3802 17.2191 15.9448 17.2355 15.4861C17.252 15.0274 17.094 14.5796 16.7935 14.2327L12.9348 10.386C12.7697 10.2089 12.5707 10.0668 12.3495 9.96823C12.1283 9.86968 11.8895 9.81669 11.6474 9.81241C11.4053 9.80814 11.1648 9.85268 10.9403 9.94337C10.7158 10.0341 10.5118 10.169 10.3406 10.3403C10.1694 10.5115 10.0344 10.7154 9.94373 10.94C9.85304 11.1645 9.80851 11.405 9.81278 11.6471C9.81705 11.8892 9.87004 12.1279 9.9686 12.3491C10.0671 12.5703 10.2092 12.7694 10.3864 12.9345L14.2331 16.7932Z" fill="url(#paint7_linear_3112_9028)" />
            <defs>
                <linearGradient id="paint0_linear_3112_9028" x1="-0.0340175" y1="11.9368" x2="78.8278" y2="15.9949" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#168DCA" />
                    <stop offset="1" stopColor="#0F2453" />
                </linearGradient>
                <linearGradient id="paint1_linear_3112_9028" x1="32.7337" y1="6.08184e-05" x2="38.7977" y2="0.143467" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#168DCA" />
                    <stop offset="1" stopColor="#0F2453" />
                </linearGradient>
                <linearGradient id="paint2_linear_3112_9028" x1="51.8114" y1="9.90222" x2="64.1078" y2="10.6292" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#168DCA" />
                    <stop offset="1" stopColor="#0F2453" />
                </linearGradient>
                <linearGradient id="paint3_linear_3112_9028" x1="59.5556" y1="33.6584" x2="74.4564" y2="35.8697" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#168DCA" />
                    <stop offset="1" stopColor="#0F2453" />
                </linearGradient>
                <linearGradient id="paint4_linear_3112_9028" x1="51.8114" y1="53.6869" x2="64.1078" y2="54.4139" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#168DCA" />
                    <stop offset="1" stopColor="#0F2453" />
                </linearGradient>
                <linearGradient id="paint5_linear_3112_9028" x1="8.0262" y1="53.6869" x2="20.3226" y2="54.4139" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#168DCA" />
                    <stop offset="1" stopColor="#0F2453" />
                </linearGradient>
                <linearGradient id="paint6_linear_3112_9028" x1="-2.31548" y1="33.6584" x2="12.5853" y2="35.8697" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#168DCA" />
                    <stop offset="1" stopColor="#0F2453" />
                </linearGradient>
                <linearGradient id="paint7_linear_3112_9028" x1="7.91334" y1="9.81213" x2="20.3606" y2="10.5481" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#168DCA" />
                    <stop offset="1" stopColor="#0F2453" />
                </linearGradient>
            </defs>
        </svg>
    );
}

function IconBattery() {
    return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.9721 3.49944C21.5428 0.92877 25.3379 0 30.0411 0H40.8707C45.5739 0 49.3691 0.92877 51.9396 3.49944C54.5104 6.07011 55.4391 9.86535 55.4391 14.5684C55.4391 15.6365 54.5733 16.5023 53.5053 16.5023C52.4373 16.5023 51.5714 15.6365 51.5714 14.5684C51.5714 10.2468 50.6952 7.72477 49.2049 6.23433C47.7143 4.74389 45.1923 3.86772 40.8707 3.86772H30.0411C25.7195 3.86772 23.1975 4.74389 21.707 6.23433C20.2166 7.72477 19.3404 10.2468 19.3404 14.5684V15.4709H25.3998C30.103 15.4709 33.8982 16.3997 36.4687 18.9703C39.0395 21.541 39.9682 25.3362 39.9682 30.0393V36.0988H40.8707C45.1923 36.0988 47.7143 35.2226 49.2049 33.7322C50.6952 32.2416 51.5714 29.7196 51.5714 25.3981C51.5714 24.3301 52.4373 23.4642 53.5053 23.4642C54.5733 23.4642 55.4391 24.3301 55.4391 25.3981C55.4391 30.1012 54.5104 33.8965 51.9396 36.467C49.3691 39.0377 45.5739 39.9665 40.8707 39.9665H38.0344C36.9664 39.9665 36.1005 39.1006 36.1005 38.0326V30.0393C36.1005 25.7178 35.2244 23.1958 33.734 21.7052C32.2434 20.2148 29.7214 19.3386 25.3998 19.3386H17.4065C16.3385 19.3386 15.4727 18.4728 15.4727 17.4048V14.5684C15.4727 9.86535 16.4014 6.07011 18.9721 3.49944Z" fill="url(#paint0_linear_3112_9037)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M3.49944 18.9704C6.07011 16.3997 9.86535 15.4709 14.5684 15.4709H25.3981C30.1012 15.4709 33.8965 16.3997 36.467 18.9704C39.0377 21.5411 39.9665 25.3362 39.9665 30.0394V40.869C39.9665 45.5722 39.0377 49.3674 36.467 51.9379C33.8965 54.5087 30.1012 55.4374 25.3981 55.4374H14.5684C9.86535 55.4374 6.07011 54.5087 3.49944 51.9379C0.92877 49.3674 0 45.5722 0 40.869C0 39.801 0.865829 38.9351 1.93386 38.9351C3.0019 38.9351 3.86772 39.801 3.86772 40.869C3.86772 45.1905 4.74389 47.7126 6.23433 49.2032C7.72477 50.6935 10.2468 51.5697 14.5684 51.5697H25.3981C29.7196 51.5697 32.2416 50.6935 33.7322 49.2032C35.2226 47.7126 36.0988 45.1905 36.0988 40.869V30.0394C36.0988 25.7178 35.2226 23.1958 33.7322 21.7053C32.2416 20.2148 29.7196 19.3387 25.3981 19.3387H14.5684C10.2468 19.3387 7.72477 20.2148 6.23433 21.7053C4.74389 23.1958 3.86772 25.7178 3.86772 30.0394C3.86772 31.1074 3.0019 31.9732 1.93386 31.9732C0.865829 31.9732 0 31.1074 0 30.0394C0 25.3362 0.92877 21.5411 3.49944 18.9704Z" fill="url(#paint1_linear_3112_9037)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M28.8773 29.057C29.6336 29.8112 29.6351 31.0357 28.8809 31.7917L18.8506 41.8478C18.4881 42.2114 17.996 42.4159 17.4827 42.4161C16.9693 42.4164 16.477 42.2127 16.114 41.8496L11.0859 36.8216C10.3307 36.0663 10.3307 34.8421 11.0859 34.0868C11.8412 33.3316 13.0656 33.3316 13.8208 34.0868L17.4797 37.7457L26.1426 29.0606C26.8968 28.3043 28.1213 28.3028 28.8773 29.057Z" fill="url(#paint2_linear_3112_9037)" />
            <defs>
                <linearGradient id="paint0_linear_3112_9037" x1="5.24899" y1="-9.60708e-07" x2="72.2558" y2="3.96163" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#168DCA" />
                    <stop offset="1" stopColor="#0F2453" />
                </linearGradient>
                <linearGradient id="paint1_linear_3112_9037" x1="-10.2237" y1="15.4709" x2="56.7831" y2="19.4326" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#168DCA" />
                    <stop offset="1" stopColor="#0F2453" />
                </linearGradient>
                <linearGradient id="paint2_linear_3112_9037" x1="5.67815" y1="28.4924" x2="37.3156" y2="31.0349" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#168DCA" />
                    <stop offset="1" stopColor="#0F2453" />
                </linearGradient>
            </defs>
        </svg>
    );
}

function IconShield() {
    return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.57843 17.468H1.08806C0.487232 17.468 0 17.9551 0 18.5561C0 19.157 0.487232 19.6441 1.08806 19.6441H4.57843C5.17926 19.6441 5.66649 19.157 5.66649 18.5561C5.66649 17.9551 5.17937 17.468 4.57843 17.468Z" fill="url(#paint0_linear_3112_9042)" />
            <path d="M7.90389 9.4417C8.11639 9.6542 8.39482 9.7604 8.67326 9.7604C8.95169 9.7604 9.23012 9.65409 9.44262 9.4417C9.86751 9.01682 9.86751 8.32786 9.44262 7.90298L6.97469 5.43494C6.5498 5.01005 5.86106 5.01005 5.43585 5.43494C5.01097 5.85982 5.01097 6.54878 5.43585 6.97367L7.90389 9.4417Z" fill="url(#paint1_linear_3112_9042)" />
            <path d="M18.5568 5.66655C19.1576 5.66655 19.6449 5.17943 19.6449 4.57849V1.08812C19.6449 0.487184 19.1576 6.10352e-05 18.5568 6.10352e-05C17.956 6.10352e-05 17.4688 0.487184 17.4688 1.08812V4.57849C17.4688 5.17943 17.956 5.66655 18.5568 5.66655Z" fill="url(#paint2_linear_3112_9042)" />
            <path d="M28.4397 9.76046C28.7182 9.76046 28.9966 9.65415 29.2091 9.44177L31.6771 6.97373C32.102 6.54884 32.102 5.85988 31.6771 5.435C31.2521 5.01011 30.5634 5.01011 30.1383 5.435L27.6702 7.90304C27.2453 8.32792 27.2453 9.01688 27.6702 9.44177C27.8828 9.65426 28.1612 9.76046 28.4397 9.76046Z" fill="url(#paint3_linear_3112_9042)" />
            <path d="M45.6484 20.9127C44.7273 20.9127 43.8241 21.0359 42.9499 21.2799C42.8317 20.6372 42.6608 20.0054 42.4385 19.3906C42.2341 18.8255 41.6105 18.5331 41.0452 18.7374C40.4801 18.9418 40.1877 19.5656 40.392 20.1307C40.7052 20.9964 40.8933 21.9037 40.9515 22.8279C40.9738 23.1827 41.1681 23.5043 41.4719 23.6891C41.7756 23.8738 42.1504 23.8986 42.476 23.7553C43.4802 23.3132 44.5477 23.0889 45.6484 23.0889C49.9954 23.0889 53.532 26.6255 53.532 30.9725C53.532 35.3195 49.9954 38.8562 45.6484 38.8562H16.9035C12.5565 38.8562 9.01986 35.3195 9.01986 30.9725C9.01986 26.6255 12.5565 23.0889 16.9035 23.0889C17.9693 23.0889 19.0028 23.2977 19.975 23.7095C20.2993 23.847 20.6697 23.8188 20.9693 23.6346C21.2691 23.4503 21.4612 23.1322 21.485 22.7811C21.8294 17.6861 26.1042 13.695 31.2167 13.695C32.2429 13.695 33.2531 13.8533 34.2191 14.1655C34.791 14.3505 35.4043 14.0367 35.5891 13.4648C35.7739 12.8931 35.4602 12.2797 34.8884 12.095C33.7058 11.7127 32.4704 11.519 31.2168 11.519C29.6331 11.519 28.116 11.8339 26.7253 12.4029C24.7964 9.83769 21.8007 8.32855 18.5557 8.32855C12.9161 8.32855 8.32797 12.9167 8.32797 18.5563C8.32797 20.4447 8.83663 22.2584 9.80468 23.8519C7.97663 25.6742 6.84375 28.1936 6.84375 30.9726C6.84375 36.5169 11.3523 41.028 16.8957 41.0323L13.8787 44.0492C13.4538 44.4741 13.4538 45.1631 13.8787 45.588C14.0912 45.8005 14.3696 45.9067 14.6481 45.9067C14.9265 45.9067 15.2049 45.8003 15.4174 45.588L19.973 41.0324H28.2545L25.2377 44.0492C24.8128 44.4741 24.8128 45.1631 25.2377 45.588C25.4502 45.8005 25.7286 45.9067 26.007 45.9067C26.2855 45.9067 26.5639 45.8003 26.7764 45.588L31.3321 41.0323H39.6135L36.5967 44.0492C36.1718 44.4741 36.1718 45.1631 36.5967 45.588C36.8092 45.8005 37.0876 45.9067 37.366 45.9067C37.6445 45.9067 37.9229 45.8003 38.1354 45.588L42.691 41.0324H45.6483C51.1952 41.0324 55.708 36.5196 55.708 30.9726C55.708 25.4257 51.1953 20.9127 45.6484 20.9127ZM10.5041 18.556C10.5041 14.1163 14.116 10.5043 18.5557 10.5043C20.9873 10.5043 23.2417 11.5803 24.7631 13.4259C22.0677 15.1677 20.1041 17.9663 19.4897 21.2479C18.6513 21.0251 17.7858 20.9126 16.9035 20.9126C14.9252 20.9126 13.0786 21.487 11.5212 22.4772C10.8535 21.2844 10.5041 19.9459 10.5041 18.556Z" fill="url(#paint4_linear_3112_9042)" />
            <path d="M18.3804 48.9768L13.5062 53.8511C13.0813 54.2759 13.0813 54.9649 13.5062 55.3898C13.7187 55.6023 13.9971 55.7085 14.2755 55.7085C14.554 55.7085 14.8324 55.6022 15.0449 55.3898L19.9192 50.5155C20.3441 50.0906 20.3441 49.4017 19.9192 48.9768C19.4942 48.5518 18.8054 48.5519 18.3804 48.9768Z" fill="url(#paint5_linear_3112_9042)" />
            <path d="M29.7359 48.9768L24.8616 53.8511C24.4367 54.2759 24.4367 54.9649 24.8616 55.3898C25.0741 55.6023 25.3526 55.7085 25.631 55.7085C25.9094 55.7085 26.1879 55.6022 26.4004 55.3898L31.2746 50.5155C31.6995 50.0906 31.6995 49.4017 31.2746 48.9768C30.8496 48.5518 30.1609 48.5519 29.7359 48.9768Z" fill="url(#paint6_linear_3112_9042)" />
            <path d="M41.0953 48.9767L36.221 53.851C35.7961 54.2759 35.7961 54.9648 36.221 55.3897C36.4335 55.6022 36.7119 55.7084 36.9904 55.7084C37.2688 55.7084 37.5472 55.6021 37.7597 55.3897L42.634 50.5155C43.0589 50.0906 43.0589 49.4016 42.634 48.9767C42.209 48.5517 41.5203 48.5518 41.0953 48.9767Z" fill="url(#paint7_linear_3112_9042)" />
            <path d="M38.7521 16.7408C39.0384 16.7408 39.319 16.6244 39.5214 16.422C39.7238 16.2196 39.8402 15.9389 39.8402 15.6528C39.8402 15.3666 39.7239 15.0859 39.5214 14.8835C39.319 14.6811 39.0384 14.5647 38.7521 14.5647C38.466 14.5647 38.1852 14.6811 37.9818 14.8835C37.7795 15.0859 37.6641 15.3666 37.6641 15.6528C37.6641 15.9389 37.7795 16.2196 37.9818 16.422C38.1852 16.6244 38.4661 16.7408 38.7521 16.7408Z" fill="url(#paint8_linear_3112_9042)" />
            <defs>
                <linearGradient id="paint0_linear_3112_9042" x1="-1.44952" y1="17.468" x2="7.86325" y2="18.9017" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#168DCA" />
                    <stop offset="1" stopColor="#0F2453" />
                </linearGradient>
                <linearGradient id="paint1_linear_3112_9042" x1="3.9292" y1="5.11627" x2="11.7154" y2="5.57661" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#168DCA" />
                    <stop offset="1" stopColor="#0F2453" />
                </linearGradient>
                <linearGradient id="paint2_linear_3112_9042" x1="16.9121" y1="6.08989e-05" x2="20.5714" y2="0.0831452" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#168DCA" />
                    <stop offset="1" stopColor="#0F2453" />
                </linearGradient>
                <linearGradient id="paint3_linear_3112_9042" x1="26.1635" y1="5.11633" x2="33.9499" y2="5.57669" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#168DCA" />
                    <stop offset="1" stopColor="#0F2453" />
                </linearGradient>
                <linearGradient id="paint4_linear_3112_9042" x1="-5.65603" y1="8.32855" x2="76.0719" y2="14.6118" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#168DCA" />
                    <stop offset="1" stopColor="#0F2453" />
                </linearGradient>
                <linearGradient id="paint5_linear_3112_9042" x1="11.384" y1="48.6581" x2="23.2044" y2="49.3569" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#168DCA" />
                    <stop offset="1" stopColor="#0F2453" />
                </linearGradient>
                <linearGradient id="paint6_linear_3112_9042" x1="22.7395" y1="48.6581" x2="34.5599" y2="49.3569" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#168DCA" />
                    <stop offset="1" stopColor="#0F2453" />
                </linearGradient>
                <linearGradient id="paint7_linear_3112_9042" x1="34.0988" y1="48.658" x2="45.9192" y2="49.3569" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#168DCA" />
                    <stop offset="1" stopColor="#0F2453" />
                </linearGradient>
                <linearGradient id="paint8_linear_3112_9042" x1="37.1074" y1="14.5647" x2="40.7558" y2="14.7804" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#168DCA" />
                    <stop offset="1" stopColor="#0F2453" />
                </linearGradient>
            </defs>
        </svg>
    );
}

// FEATURE CARD (3-col, border style matching design)

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="border border-[#E8E8E8] rounded-2xl p-5 bg-white flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F3F3F3] flex items-center justify-center">
                {icon}
            </div>
            <p className="text-[20px] text-[#1a1a1a] leading-snug tracking-wide">
                {title}
            </p>
            <BodyText>{description}</BodyText>
        </div>
    );
}

// PROCESS TIMELINE

interface Step {
    number: string;
    title: string;
}

interface ProcessTimelineProps {
    title: string;
    columns?: number;
    steps: Step[];
    subtitle?: string;
}

export function ProcessTimeline({
    title,
    columns = 4,
    steps,
    subtitle,
}: ProcessTimelineProps) {
    return (
        <div className="bg-[#EEF4F8] rounded-2xl p-7 w-full">
            <SectionHeading size="h2" className="mb-2">
                {title}
            </SectionHeading>
            {subtitle && <BodyText className="mb-2">{subtitle}</BodyText>}
            <div
                className="grid gap-5 mt-6"
                style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
            >
                {steps.map((step) => (
                    <div key={step.number} className="flex flex-col items-start gap-3">
                        <div
                            className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                            style={{
                                background: "linear-gradient(135deg, #168DCA 0%, #0F2453 100%)",
                            }}
                        >
                            <span className="text-white font-semibold text-[15px] tracking-wide">
                                {step.number}
                            </span>
                        </div>
                        <p className="text-[13px] text-[#1a1a1a] font-normal leading-snug">
                            {step.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// SIDEBAR

interface SidebarItem {
    label: string;
    hasArrow?: boolean;
}

interface SidebarGroup {
    heading?: string;
    items: SidebarItem[];
}

interface SidebarProps {
    title: string;
    groups: SidebarGroup[];
}

export function Sidebar({ title, groups }: SidebarProps) {
    const [active, setActive] = useState(0);
    let globalIdx = 0;

    return (
        <div className="w-90 shrink-0 bg-[#F3F3F3] p-5 rounded-2xl sticky top-8">
            <div className="mb-4 px-1">
                <h2 className="text-[1.1rem] text-black font-medium tracking-wide leading-snug">
                    {title}
                </h2>
            </div>
            <div className="flex flex-col gap-2">
                {groups.map((group, gi) => (
                    <div key={gi}>
                        {group.heading && (
                            <p className="text-[0.72rem] font-semibold text-[#1a1a1a] uppercase tracking-widest mb-2 px-1">
                                {group.heading}
                            </p>
                        )}
                        <div className="flex flex-col gap-2">
                            {group.items.map((item) => {
                                const idx = globalIdx++;
                                const isActive = active === idx;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            setActive(idx);
                                            document.getElementById(`section-${idx}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
                                        }}
                                        className={`w-full text-left flex items-center justify-between px-4 py-3.5 rounded-xl border transition-all ${isActive
                                            ? "border-transparent shadow-md"
                                            : "border-[#E8E8E8] hover:border-gray-300"
                                            }`}
                                        style={{
                                            background: isActive
                                                ? "linear-gradient(93deg, #168DCA -24.15%, #0F2453 134.7%)"
                                                : "#fff",
                                        }}
                                    >
                                        <span
                                            className={`text-[0.875rem] leading-snug font-normal tracking-wide pr-3 whitespace-pre-line ${isActive ? "text-white" : "text-[#1a1a1a]"
                                                }`}
                                        >
                                            {item.label}
                                        </span>
                                        {item.hasArrow && (
                                            <svg
                                                className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-black"}`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={1.5}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                                            </svg>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// MAIN CONTENT

function MainContent() {
    return (
        <div className="flex-1 min-w-0 max-w-240">

            {/* ─── Section 1: Overview ─── */}
            <section id="section-0" className="mb-12">
                <SectionHeading size="h1" className="mb-4">
                    Reliable. Rapid. Ready For Every Operation.
                </SectionHeading>

                <BodyText className="mb-3">
                    When permanent power infrastructure isn't available or time is critical, Catoba's Portable Lighting
                    Solutions deliver dependable, compliant, and high-performance illumination for aviation and emergency
                    environments. Designed for fast deployment and harsh conditions, our portable systems ensure
                    uninterrupted operations when it matters most.
                </BodyText>

                <BodyText className="mb-6">
                    Catoba's portable lighting systems are engineered for temporary, emergency, and expedited aviation
                    operations. Whether supporting emergency response, temporary helicopter ops, or airfield setups, our
                    solutions combine durability, visibility, and operational efficiency in one compact system.
                </BodyText>

                {/* 2×2 check grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                    {[
                        "Temporary helipads and vertipads",
                        "Portable runway and taxiway lighting",
                        "Emergency and medevac operations",
                        "Rapid-deployment aviation environments",
                    ].map((item, i) => (
                        <CheckItem key={i} label={item} />
                    ))}
                </div>

                {/* Equal 50/50 image grid */}
                <div className="flex gap-3">
                    <div className="w-[63%] rounded-xl overflow-hidden bg-gray-100 h-74">
                        <img src="/pl/1.png" alt="" className="w-full h-full object-fill" />
                    </div>
                    <div className="w-[36%] rounded-xl overflow-hidden bg-gray-100 h-74">
                        <img src="/pl/2.png" alt="" className="w-full h-full object-fill" />
                    </div>
                </div>
            </section>

            {/* ─── Section 2: Key Features That Set It Apart ─── */}
            <section id="section-1" className="mb-12">
                <SectionHeading size="h2" className="mb-5">
                    Key Features That Set It Apart
                </SectionHeading>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <FeatureCard
                        icon={<IconLED />}
                        title="High-Intensity LED Performance"
                        description="Ultra high-intensity LEDs provide exceptional visibility with improved power consumption, delivering long operational life and reduced maintenance requirements."
                    />
                    <FeatureCard
                        icon={<IconBattery />}
                        title="Fully Portable & Self-Powered"
                        description="Built-in rechargeable lithium-ion batteries enable completely independent operation; no external power or cabling required."
                    />
                    <FeatureCard
                        icon={<IconShield />}
                        title="Rugged, Weather-Proof Design"
                        description="Manufactured with hard-anodised aluminium housing and sealed construction, the system is resistant to corrosion, shock, UV exposure, and extreme environmental conditions."
                    />
                </div>
            </section>

            {/* ─── Section 3: Smart Control & Operational Flexibility ─── */}
            <section id="section-2" className="mb-12">
                <SectionHeading size="h2" className="mb-2">
                    Smart Control &amp; Operational Flexibility
                </SectionHeading>

                <p className="text-[13.5px] font-semibold text-[#1a1a1a] mb-2">
                    Simple On-Site Operation
                </p>

                <BodyText className="mb-5">
                    Intuitive controls allow quick activation and immediate deployment, minimizing setup time during critical
                    operations.
                </BodyText>

                <div className="space-y-3">
                    {[
                        "Wireless remote operation for centralized control",
                        "Air-to-ground radio control for aviation coordination",
                        "Automatic dusk-to-dawn operation with photocell support",
                        "Night-vision compatible infrared lighting options",
                    ].map((item, i) => (
                        <CheckItem key={i} label={item} />
                    ))}
                </div>
            </section>

            {/* ─── Section 4: Applications (ProcessTimeline) ─── */}
            <section id="section-3" className="mb-12">
                <ProcessTimeline
                    title="Applications"
                    columns={4}
                    steps={[
                        { number: "01", title: "Touchdown And Lift-Off Areas (TLOF)" },
                        { number: "02", title: "Final Approach And Take-Off Areas (FATO)" },
                        { number: "03", title: "Runway And Taxiway Edge Lighting" },
                        { number: "04", title: "Threshold And Approach Lighting" },
                    ]}
                />
            </section>

            {/* ─── Section 5: Why Choose Catobo — Image LEFT | Text RIGHT ─── */}
            <section id="section-4" className="mb-10">
                <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-8 items-center">
                    {/* Left – image */}
                    <div className="rounded-xl overflow-hidden bg-gray-100 h-90">
                        <img
                            src="/pl/3.png"
                            alt="Aerial helipad view"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right – text */}
                    <div>
                        <SectionHeading size="h2" className="mb-5">
                            Why Choose Catobo Portable Lighting?
                        </SectionHeading>

                        <div className="space-y-3 mb-7">
                            {[
                                "Fast deployment with zero infrastructure dependency",
                                "Proven performance in demanding environments",
                                "Aviation-grade reliability and compliance",
                                "Scalable solutions for temporary or emergency use",
                            ].map((item, i) => (
                                <CheckItem key={i} label={item} />
                            ))}
                        </div>

                        {/* CTA Button */}
                        <button
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white text-[14px] font-medium tracking-wide transition-opacity hover:opacity-90 active:opacity-80"
                            style={{
                                background: "linear-gradient(93deg, #22A1D8 0.43%, #025094 98.09%)",
                            }}
                        >
                            Talk to an Expert
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}

// MAIN PAGE EXPORT

export default function SolutionPortableLighting() {
    const sidebarGroups: SidebarGroup[] = [
        {
            items: [
                { label: "Overview", hasArrow: true },
                { label: "Key Features", hasArrow: true },
                { label: "Smart Control", hasArrow: true },
                { label: "Applications", hasArrow: true },
            ],
        },
    ];

    return (
        <div>
            <DynamicHero
                title={"Portable Lighting Solutions"}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Portable Lighting Solutions" },
                ]}
                backgroundImage="/pl.png"
            />
            <main className="min-h-screen bg-white">
                <div className="2xl:max-w-360 w-[90%] mx-auto py-8">
                    <div className="flex flex-col lg:flex-row gap-5 items-start">
                        <Sidebar
                            title="Portable Lighting Solutions"
                            groups={sidebarGroups}
                        />
                        <MainContent />
                    </div>
                </div>
            </main>
        </div>
    );
}