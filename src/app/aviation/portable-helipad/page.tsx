"use client";

import { CheckIcon } from "@/components/common/CheckIcon";
import DynamicHero from "@/components/common/hero";
import React, { useState } from "react";

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
        <p className={`text-[14px] text-[#636363] leading-[1.78] ${className}`}>
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
    if (size === "h1") return <h1 className={`text-[30px] ${base}`}>{children}</h1>;
    if (size === "h3") return <h3 className={`text-[18px] ${base}`}>{children}</h3>;
    return <h2 className={`text-[24px] ${base}`}>{children}</h2>;
}

// FEATURE CARD ICONS (SVG outlines)

function IconModular() {
    return (
        <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.8286 12.2493H37.85L28.2148 21.8849L30.38 24.05L40.0155 14.4149V21.4363H43.0779V9.18701H30.8286V12.2493Z" fill="url(#paint0_linear_3112_9209)" />
            <path d="M46.1406 0V3.06232H49.2029V6.12464H52.2653V0H46.1406Z" fill="url(#paint1_linear_3112_9209)" />
            <path d="M49.2029 39.8102H46.1406V42.8725H52.2653V36.7479H49.2029V39.8102Z" fill="url(#paint2_linear_3112_9209)" />
            <path d="M49.1992 9.18701H52.2615V15.3117H49.1992V9.18701Z" fill="url(#paint3_linear_3112_9209)" />
            <path d="M49.1992 18.374H52.2615V24.4986H49.1992V18.374Z" fill="url(#paint4_linear_3112_9209)" />
            <path d="M49.1992 27.5609H52.2615V33.6856H49.1992V27.5609Z" fill="url(#paint5_linear_3112_9209)" />
            <path d="M12.4529 3.06232H15.5153V0H9.39062V6.12464H12.4529V3.06232Z" fill="url(#paint6_linear_3112_9209)" />
            <path d="M9.39062 9.18701H12.4529V15.3117H9.39062V9.18701Z" fill="url(#paint7_linear_3112_9209)" />
            <path d="M9.39062 18.374H12.4529V24.4986H9.39062V18.374Z" fill="url(#paint8_linear_3112_9209)" />
            <path d="M18.5781 0H24.7028V3.06232H18.5781V0Z" fill="url(#paint9_linear_3112_9209)" />
            <path d="M27.7656 0H33.8903V3.06232H27.7656V0Z" fill="url(#paint10_linear_3112_9209)" />
            <path d="M36.9531 0H43.0778V3.06232H36.9531V0Z" fill="url(#paint11_linear_3112_9209)" />
            <path d="M27.7656 39.8102H33.8903V42.8726H27.7656V39.8102Z" fill="url(#paint12_linear_3112_9209)" />
            <path d="M36.9531 39.8102H43.0778V42.8726H36.9531V39.8102Z" fill="url(#paint13_linear_3112_9209)" />
            <path d="M0 52.2636H24.4986V27.7651H0V52.2636ZM3.06232 30.8274H21.4363V49.2013H3.06232V30.8274Z" fill="url(#paint14_linear_3112_9209)" />
            <defs>
                <linearGradient id="paint0_linear_3112_9209" x1="24.4128" y1="9.18701" x2="49.3318" y2="10.6603" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint1_linear_3112_9209" x1="44.5739" y1="-1.47223e-07" x2="54.8423" y2="0.607099" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint2_linear_3112_9209" x1="44.5739" y1="36.7479" x2="54.8423" y2="37.355" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint3_linear_3112_9209" x1="48.4159" y1="9.18701" x2="53.5635" y2="9.33918" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint4_linear_3112_9209" x1="48.4159" y1="18.374" x2="53.5635" y2="18.5261" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint5_linear_3112_9209" x1="48.4159" y1="27.5609" x2="53.5635" y2="27.7131" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint6_linear_3112_9209" x1="7.8239" y1="-1.47223e-07" x2="18.0923" y2="0.607099" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint7_linear_3112_9209" x1="8.60726" y1="9.18701" x2="13.7549" y2="9.33918" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint8_linear_3112_9209" x1="8.60726" y1="18.374" x2="13.7549" y2="18.5261" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint9_linear_3112_9209" x1="17.0114" y1="-7.36116e-08" x2="27.1736" y2="1.20164" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint10_linear_3112_9209" x1="26.1989" y1="-7.36116e-08" x2="36.3611" y2="1.20164" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint11_linear_3112_9209" x1="35.3864" y1="-7.36116e-08" x2="45.5486" y2="1.20164" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint12_linear_3112_9209" x1="26.1989" y1="39.8102" x2="36.3611" y2="41.0119" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint13_linear_3112_9209" x1="35.3864" y1="39.8102" x2="45.5486" y2="41.0119" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint14_linear_3112_9209" x1="-6.26688" y1="27.7651" x2="34.8068" y2="30.1935" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
            </defs>
        </svg>
    );
}

function IconLoad() {
    return (
        <svg width="49" height="51" viewBox="0 0 49 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M48.1121 40.1015L44.3381 18.7394C43.5569 14.3179 39.7311 11.1088 35.2412 11.1088H29.902C30.7093 9.96131 31.1852 8.56477 31.1852 7.05827C31.1853 3.16645 28.0188 0.00012207 24.127 0.00012207C20.2351 0.00012207 17.0687 3.16645 17.0687 7.05837C17.0687 8.56487 17.5446 9.96141 18.3519 11.1089H13.0127C8.52287 11.1089 4.69703 14.318 3.91582 18.7395L0.141814 40.1015C-0.334514 42.798 0.40162 45.5475 2.16126 47.6453C3.92099 49.7433 6.50055 50.9464 9.23881 50.9464H39.0153C41.7536 50.9464 44.3331 49.7432 46.0928 47.6454C47.8525 45.5476 48.5883 42.798 48.1121 40.1015ZM24.127 3.00784C26.3604 3.00784 28.1775 4.82489 28.1775 7.05837C28.1775 9.29185 26.3603 11.1089 24.127 11.1089C21.8936 11.1089 20.0764 9.29185 20.0764 7.05837C20.0764 4.82489 21.8935 3.00784 24.127 3.00784ZM43.7883 45.7125C42.6016 47.1273 40.8619 47.9387 39.0153 47.9387H9.23881C7.39221 47.9387 5.65247 47.1273 4.46578 45.7125C3.27909 44.2976 2.78256 42.4432 3.10386 40.6248L6.87787 19.2628C7.40474 16.2809 9.98489 14.1165 13.0128 14.1165H35.2414C38.2694 14.1165 40.8496 16.2807 41.3764 19.2626L45.1504 40.6247C45.4716 42.4432 44.9749 44.2976 43.7883 45.7125Z" fill="url(#paint0_linear_3112_9225)" />
            <path d="M19.1817 31.0274L22.9503 27.1333C23.5279 26.5366 23.5122 25.5845 22.9153 25.0069C22.3184 24.4291 21.3664 24.445 20.7887 25.0417L16.5742 29.3967V26.0875C16.5742 25.257 15.9009 24.5836 15.0703 24.5836C14.2398 24.5836 13.5664 25.257 13.5664 26.0875V35.9674C13.5664 36.798 14.2398 37.4713 15.0703 37.4713C15.9009 37.4713 16.5742 36.798 16.5742 35.9674V32.6582L20.7887 37.0132C21.0837 37.3181 21.4764 37.4713 21.8697 37.4713C22.2462 37.4713 22.6233 37.3307 22.9153 37.0481C23.5122 36.4705 23.5277 35.5186 22.9503 34.9216L19.1817 31.0274Z" fill="url(#paint1_linear_3112_9225)" />
            <path d="M33.1843 29.9486H30.9268C30.0962 29.9486 29.4229 30.622 29.4229 31.4525C29.4229 32.2831 30.0962 32.9564 30.9268 32.9564H31.6556C31.5124 33.8107 30.7678 34.4637 29.8733 34.4637C28.8769 34.4637 28.0662 33.6531 28.0662 32.6566V29.3986C28.0662 28.4022 28.8769 27.5915 29.8733 27.5915C30.4339 27.5915 30.9536 27.8455 31.2994 28.2885C31.8104 28.943 32.7555 29.0596 33.4102 28.5486C34.0648 28.0374 34.1814 27.0924 33.6704 26.4378C32.7508 25.2597 31.3668 24.5839 29.8734 24.5839C27.2185 24.5839 25.0586 26.7439 25.0586 29.3987V32.6567C25.0586 35.3116 27.2185 37.4715 29.8734 37.4715C32.5283 37.4715 34.6882 35.3116 34.6882 32.6567V31.4527C34.6882 30.622 34.0149 29.9486 33.1843 29.9486Z" fill="url(#paint2_linear_3112_9225)" />
            <defs>
                <linearGradient id="paint0_linear_3112_9225" x1="-12.3436" y1="0.000120846" x2="68.5866" y2="4.53209" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint1_linear_3112_9225" x1="11.0577" y1="24.5836" x2="27.5241" y2="25.3244" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint2_linear_3112_9225" x1="22.5953" y1="24.5839" x2="38.765" y2="25.2982" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
            </defs>
        </svg>
    );
}

function IconInstall() {
    return (
        <svg width="49" height="51" viewBox="0 0 49 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M48.1121 40.1015L44.3381 18.7394C43.5569 14.3179 39.7311 11.1088 35.2412 11.1088H29.902C30.7093 9.96131 31.1852 8.56477 31.1852 7.05827C31.1853 3.16645 28.0188 0.00012207 24.127 0.00012207C20.2351 0.00012207 17.0687 3.16645 17.0687 7.05837C17.0687 8.56487 17.5446 9.96141 18.3519 11.1089H13.0127C8.52287 11.1089 4.69703 14.318 3.91582 18.7395L0.141814 40.1015C-0.334514 42.798 0.40162 45.5475 2.16126 47.6453C3.92099 49.7433 6.50055 50.9464 9.23881 50.9464H39.0153C41.7536 50.9464 44.3331 49.7432 46.0928 47.6454C47.8525 45.5476 48.5883 42.798 48.1121 40.1015ZM24.127 3.00784C26.3604 3.00784 28.1775 4.82489 28.1775 7.05837C28.1775 9.29185 26.3603 11.1089 24.127 11.1089C21.8936 11.1089 20.0764 9.29185 20.0764 7.05837C20.0764 4.82489 21.8935 3.00784 24.127 3.00784ZM43.7883 45.7125C42.6016 47.1273 40.8619 47.9387 39.0153 47.9387H9.23881C7.39221 47.9387 5.65247 47.1273 4.46578 45.7125C3.27909 44.2976 2.78256 42.4432 3.10386 40.6248L6.87787 19.2628C7.40474 16.2809 9.98489 14.1165 13.0128 14.1165H35.2414C38.2694 14.1165 40.8496 16.2807 41.3764 19.2626L45.1504 40.6247C45.4716 42.4432 44.9749 44.2976 43.7883 45.7125Z" fill="url(#paint0_linear_3112_9225)" />
            <path d="M19.1817 31.0274L22.9503 27.1333C23.5279 26.5366 23.5122 25.5845 22.9153 25.0069C22.3184 24.4291 21.3664 24.445 20.7887 25.0417L16.5742 29.3967V26.0875C16.5742 25.257 15.9009 24.5836 15.0703 24.5836C14.2398 24.5836 13.5664 25.257 13.5664 26.0875V35.9674C13.5664 36.798 14.2398 37.4713 15.0703 37.4713C15.9009 37.4713 16.5742 36.798 16.5742 35.9674V32.6582L20.7887 37.0132C21.0837 37.3181 21.4764 37.4713 21.8697 37.4713C22.2462 37.4713 22.6233 37.3307 22.9153 37.0481C23.5122 36.4705 23.5277 35.5186 22.9503 34.9216L19.1817 31.0274Z" fill="url(#paint1_linear_3112_9225)" />
            <path d="M33.1843 29.9486H30.9268C30.0962 29.9486 29.4229 30.622 29.4229 31.4525C29.4229 32.2831 30.0962 32.9564 30.9268 32.9564H31.6556C31.5124 33.8107 30.7678 34.4637 29.8733 34.4637C28.8769 34.4637 28.0662 33.6531 28.0662 32.6566V29.3986C28.0662 28.4022 28.8769 27.5915 29.8733 27.5915C30.4339 27.5915 30.9536 27.8455 31.2994 28.2885C31.8104 28.943 32.7555 29.0596 33.4102 28.5486C34.0648 28.0374 34.1814 27.0924 33.6704 26.4378C32.7508 25.2597 31.3668 24.5839 29.8734 24.5839C27.2185 24.5839 25.0586 26.7439 25.0586 29.3987V32.6567C25.0586 35.3116 27.2185 37.4715 29.8734 37.4715C32.5283 37.4715 34.6882 35.3116 34.6882 32.6567V31.4527C34.6882 30.622 34.0149 29.9486 33.1843 29.9486Z" fill="url(#paint2_linear_3112_9225)" />
            <defs>
                <linearGradient id="paint0_linear_3112_9225" x1="-12.3436" y1="0.000120846" x2="68.5866" y2="4.53209" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint1_linear_3112_9225" x1="11.0577" y1="24.5836" x2="27.5241" y2="25.3244" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint2_linear_3112_9225" x1="22.5953" y1="24.5839" x2="38.765" y2="25.2982" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
            </defs>
        </svg>
    );
}

function IconWeather() {
    return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.57843 17.468H1.08806C0.487232 17.468 0 17.9551 0 18.5561C0 19.157 0.487232 19.6441 1.08806 19.6441H4.57843C5.17926 19.6441 5.66649 19.157 5.66649 18.5561C5.66649 17.9551 5.17937 17.468 4.57843 17.468Z" fill="url(#paint0_linear_3112_9198)" />
            <path d="M7.90389 9.44177C8.11639 9.65426 8.39482 9.76046 8.67326 9.76046C8.95169 9.76046 9.23012 9.65415 9.44262 9.44177C9.86751 9.01688 9.86751 8.32792 9.44262 7.90304L6.97469 5.435C6.5498 5.01011 5.86106 5.01011 5.43585 5.435C5.01097 5.85988 5.01097 6.54884 5.43585 6.97373L7.90389 9.44177Z" fill="url(#paint1_linear_3112_9198)" />
            <path d="M18.5568 5.66649C19.1576 5.66649 19.6449 5.17937 19.6449 4.57843V1.08806C19.6449 0.487123 19.1576 0 18.5568 0C17.956 0 17.4688 0.487123 17.4688 1.08806V4.57843C17.4688 5.17937 17.956 5.66649 18.5568 5.66649Z" fill="url(#paint2_linear_3112_9198)" />
            <path d="M28.4397 9.76046C28.7182 9.76046 28.9966 9.65415 29.2091 9.44177L31.6771 6.97373C32.102 6.54884 32.102 5.85988 31.6771 5.435C31.2521 5.01011 30.5634 5.01011 30.1383 5.435L27.6702 7.90304C27.2453 8.32792 27.2453 9.01688 27.6702 9.44177C27.8828 9.65426 28.1612 9.76046 28.4397 9.76046Z" fill="url(#paint3_linear_3112_9198)" />
            <path d="M45.6484 20.9127C44.7273 20.9127 43.8241 21.0359 42.9499 21.28C42.8317 20.6373 42.6608 20.0054 42.4385 19.3907C42.2341 18.8255 41.6105 18.5332 41.0452 18.7375C40.4801 18.9418 40.1877 19.5656 40.392 20.1308C40.7052 20.9964 40.8933 21.9037 40.9515 22.8279C40.9738 23.1828 41.1681 23.5044 41.4719 23.6891C41.7756 23.8739 42.1504 23.8987 42.476 23.7554C43.4802 23.3132 44.5477 23.089 45.6484 23.089C49.9954 23.089 53.532 26.6256 53.532 30.9726C53.532 35.3196 49.9954 38.8562 45.6484 38.8562H16.9035C12.5565 38.8562 9.01986 35.3196 9.01986 30.9726C9.01986 26.6256 12.5565 23.089 16.9035 23.089C17.9693 23.089 19.0028 23.2978 19.975 23.7096C20.2993 23.847 20.6697 23.8188 20.9693 23.6346C21.2691 23.4503 21.4612 23.1323 21.485 22.7812C21.8294 17.6861 26.1042 13.695 31.2167 13.695C32.2429 13.695 33.2531 13.8533 34.2191 14.1656C34.791 14.3506 35.4043 14.0368 35.5891 13.4649C35.7739 12.8931 35.4602 12.2798 34.8884 12.095C33.7058 11.7128 32.4704 11.519 31.2168 11.519C29.6331 11.519 28.116 11.834 26.7253 12.4029C24.7964 9.83775 21.8007 8.32861 18.5557 8.32861C12.9161 8.32861 8.32797 12.9167 8.32797 18.5563C8.32797 20.4448 8.83663 22.2585 9.80468 23.8519C7.97663 25.6743 6.84375 28.1937 6.84375 30.9727C6.84375 36.517 11.3523 41.0281 16.8957 41.0323L13.8787 44.0493C13.4538 44.4742 13.4538 45.1631 13.8787 45.588C14.0912 45.8005 14.3696 45.9067 14.6481 45.9067C14.9265 45.9067 15.2049 45.8004 15.4174 45.588L19.973 41.0324H28.2545L25.2377 44.0493C24.8128 44.4742 24.8128 45.1631 25.2377 45.588C25.4502 45.8005 25.7286 45.9067 26.007 45.9067C26.2855 45.9067 26.5639 45.8004 26.7764 45.588L31.3321 41.0323H39.6135L36.5967 44.0493C36.1718 44.4742 36.1718 45.1631 36.5967 45.588C36.8092 45.8005 37.0876 45.9067 37.366 45.9067C37.6445 45.9067 37.9229 45.8004 38.1354 45.588L42.691 41.0324H45.6483C51.1952 41.0324 55.708 36.5196 55.708 30.9727C55.708 25.4258 51.1953 20.9127 45.6484 20.9127ZM10.5041 18.556C10.5041 14.1163 14.116 10.5044 18.5557 10.5044C20.9873 10.5044 23.2417 11.5804 24.7631 13.4259C22.0677 15.1678 20.1041 17.9664 19.4897 21.248C18.6513 21.0251 17.7858 20.9126 16.9035 20.9126C14.9252 20.9126 13.0786 21.487 11.5212 22.4773C10.8535 21.2844 10.5041 19.946 10.5041 18.556Z" fill="url(#paint4_linear_3112_9198)" />
            <path d="M18.3804 48.9768L13.5062 53.8511C13.0813 54.2759 13.0813 54.9649 13.5062 55.3898C13.7187 55.6023 13.9971 55.7085 14.2755 55.7085C14.554 55.7085 14.8324 55.6022 15.0449 55.3898L19.9192 50.5155C20.3441 50.0906 20.3441 49.4017 19.9192 48.9768C19.4942 48.5518 18.8054 48.5519 18.3804 48.9768Z" fill="url(#paint5_linear_3112_9198)" />
            <path d="M29.7359 48.9768L24.8616 53.8511C24.4367 54.2759 24.4367 54.9649 24.8616 55.3898C25.0741 55.6023 25.3526 55.7085 25.631 55.7085C25.9094 55.7085 26.1879 55.6022 26.4004 55.3898L31.2746 50.5155C31.6995 50.0906 31.6995 49.4017 31.2746 48.9768C30.8496 48.5518 30.1609 48.5519 29.7359 48.9768Z" fill="url(#paint6_linear_3112_9198)" />
            <path d="M41.0953 48.9768L36.221 53.8511C35.7961 54.2759 35.7961 54.9649 36.221 55.3898C36.4335 55.6023 36.7119 55.7085 36.9904 55.7085C37.2688 55.7085 37.5472 55.6022 37.7597 55.3898L42.634 50.5155C43.0589 50.0906 43.0589 49.4017 42.634 48.9768C42.209 48.5518 41.5203 48.5519 41.0953 48.9768Z" fill="url(#paint7_linear_3112_9198)" />
            <path d="M38.7521 16.7408C39.0384 16.7408 39.319 16.6244 39.5214 16.422C39.7238 16.2196 39.8402 15.9389 39.8402 15.6528C39.8402 15.3666 39.7239 15.0859 39.5214 14.8835C39.319 14.6811 39.0384 14.5647 38.7521 14.5647C38.466 14.5647 38.1852 14.6811 37.9818 14.8835C37.7795 15.0859 37.6641 15.3666 37.6641 15.6528C37.6641 15.9389 37.7795 16.2196 37.9818 16.422C38.1852 16.6244 38.4661 16.7408 38.7521 16.7408Z" fill="url(#paint8_linear_3112_9198)" />
            <defs>
                <linearGradient id="paint0_linear_3112_9198" x1="-1.44952" y1="17.468" x2="7.86325" y2="18.9017" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint1_linear_3112_9198" x1="3.9292" y1="5.11633" x2="11.7154" y2="5.57667" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint2_linear_3112_9198" x1="16.9121" y1="-1.3621e-07" x2="20.5714" y2="0.0830841" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint3_linear_3112_9198" x1="26.1635" y1="5.11633" x2="33.9499" y2="5.57669" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint4_linear_3112_9198" x1="-5.65603" y1="8.32861" x2="76.0719" y2="14.6118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint5_linear_3112_9198" x1="11.384" y1="48.6581" x2="23.2044" y2="49.3569" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint6_linear_3112_9198" x1="22.7395" y1="48.6581" x2="34.5599" y2="49.3569" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint7_linear_3112_9198" x1="34.0988" y1="48.6581" x2="45.9192" y2="49.3569" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint8_linear_3112_9198" x1="37.1074" y1="14.5647" x2="40.7558" y2="14.7804" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
            </defs>
        </svg>
    );
}

function IconSafe() {
    return (
        <svg width="37" height="42" viewBox="0 0 37 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.40994e-07 7.91441V17.4981C-0.00143086 27.66 6.37102 36.9403 15.8589 40.5895C16.6245 40.8843 17.4302 41.0303 18.2358 41.0303C19.0415 41.0303 19.8472 40.8829 20.6142 40.5895L22.0367 40.0414C30.8062 36.6684 36.4731 28.1852 36.4717 18.4312V7.91441C36.4717 7.12733 35.8492 6.4805 35.0635 6.45045C29.7958 6.24581 24.4251 4.16936 19.1002 0.281201C18.585 -0.0937336 17.8867 -0.0937336 17.3715 0.281201C12.0451 4.16936 6.67441 6.24581 1.40815 6.45045C0.622506 6.4805 2.40994e-07 7.12733 2.40994e-07 7.91441ZM2.93079 9.28535C8.03676 8.80309 13.1742 6.78245 18.2358 3.2635C23.296 6.78245 28.4349 8.80309 33.5409 9.28535V18.4312C33.5423 26.9631 28.6138 34.3716 20.9834 37.3053L19.5624 37.8534C18.7067 38.1825 17.7636 38.1825 16.9107 37.8534C8.54765 34.6364 2.92935 26.4565 2.93079 17.4981V9.28535Z" fill="url(#paint0_linear_5013_2860)" />
            <path d="M15.2351 26.1085C15.5099 26.3833 15.8819 26.5378 16.2712 26.5378C16.6604 26.5378 17.0325 26.3833 17.3073 26.1085L26.4216 16.9941C26.994 16.4217 26.994 15.4944 26.4216 14.922C25.8492 14.3496 24.9218 14.3496 24.3494 14.922L16.2712 23.0003L12.1226 18.8502C11.5501 18.2778 10.6228 18.2778 10.0504 18.8502C9.47799 19.4226 9.47799 20.35 10.0504 20.9224L15.2351 26.1085Z" fill="url(#paint1_linear_5013_2860)" />
            <defs>
                <linearGradient id="paint0_linear_5013_2860" x1="-9.32967" y1="-9.86279e-07" x2="51.8626" y2="3.2159" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint1_linear_5013_2860" x1="5.2136" y1="14.4927" x2="33.9958" y2="16.9268" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
            </defs>
        </svg>
    );
}

function IconTile() {
    return (
        <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.7197 23.5367C44.9278 23.5367 45.1273 23.454 45.2745 23.3069C45.4216 23.1598 45.5043 22.9602 45.5043 22.7521V0.784556C45.5043 0.576479 45.4216 0.376924 45.2745 0.229791C45.1273 0.0826584 44.9278 0 44.7197 0L0.784556 0C0.576479 0 0.376924 0.0826584 0.229791 0.229791C0.0826584 0.376924 0 0.576479 0 0.784556L0 44.7197C0 44.9278 0.0826584 45.1273 0.229791 45.2745C0.376924 45.4216 0.576479 45.5043 0.784556 45.5043H22.7521C22.9602 45.5043 23.1598 45.4216 23.3069 45.2745C23.454 45.1273 23.5367 44.9278 23.5367 44.7197V23.5367H44.7197ZM21.9676 31.3422C19.9601 31.1565 18.0809 30.2745 16.6553 28.849C15.2298 27.4234 14.3477 25.5441 14.162 23.5367H21.9676V31.3422ZM14.162 21.9676C14.3477 19.9601 15.2298 18.0809 16.6553 16.6553C18.0809 15.2298 19.9601 14.3477 21.9676 14.162V21.9676H14.162ZM32.9129 21.9676C32.713 19.3477 31.5102 16.9059 29.555 15.1506C29.3997 15.0141 29.1967 14.9444 28.9902 14.9568C28.7838 14.9691 28.5906 15.0625 28.4526 15.2166C28.3147 15.3707 28.2431 15.573 28.2536 15.7796C28.264 15.9861 28.3556 16.1802 28.5084 16.3196C30.1315 17.7773 31.1433 19.7949 31.3407 21.9676H23.5367V14.1636C24.5093 14.2486 25.4602 14.4999 26.3478 14.9066C26.4418 14.9529 26.5442 14.9799 26.6488 14.9859C26.7535 14.992 26.8583 14.9771 26.957 14.942C27.0558 14.9068 27.1466 14.8523 27.2239 14.7815C27.3012 14.7108 27.3636 14.6252 27.4073 14.53C27.4511 14.4347 27.4753 14.3316 27.4785 14.2269C27.4817 14.1221 27.4639 14.0177 27.4261 13.92C27.3884 13.8222 27.3314 13.733 27.2585 13.6576C27.1857 13.5822 27.0985 13.5222 27.0021 13.481C25.9091 12.9811 24.7355 12.6808 23.5367 12.5945V1.56911H34.5605C34.7496 3.99248 35.7981 6.26862 37.5169 7.98742C39.2356 9.70621 41.5118 10.7546 43.9352 10.9438V21.9676H32.9129ZM43.9352 9.37467C41.9277 9.18896 40.0484 8.30694 38.6229 6.88139C37.1973 5.45584 36.3153 3.57657 36.1296 1.56911H43.9352V9.37467ZM9.37467 1.56911C9.18896 3.57657 8.30694 5.45584 6.88139 6.88139C5.45584 8.30694 3.57657 9.18896 1.56911 9.37467V1.56911H9.37467ZM1.56911 36.1296C3.57657 36.3153 5.45584 37.1973 6.88139 38.6229C8.30694 40.0484 9.18896 41.9277 9.37467 43.9352H1.56911V36.1296ZM10.9438 43.9352C10.7546 41.5118 9.70621 39.2356 7.98742 37.5169C6.26862 35.7981 3.99248 34.7496 1.56911 34.5605V23.5367H3.92278C4.13086 23.5367 4.33041 23.454 4.47755 23.3069C4.62468 23.1598 4.70734 22.9602 4.70734 22.7521C4.70734 22.5441 4.62468 22.3445 4.47755 22.1974C4.33041 22.0502 4.13086 21.9676 3.92278 21.9676H1.56911V10.9438C3.99248 10.7546 6.26862 9.70621 7.98742 7.98742C9.70621 6.26862 10.7546 3.99248 10.9438 1.56911H21.9676V12.5929C19.5442 12.7821 17.2681 13.8305 15.5493 15.5493C13.8305 17.2681 12.7821 19.5442 12.5929 21.9676H7.06101C6.85293 21.9676 6.65338 22.0502 6.50624 22.1974C6.35911 22.3445 6.27645 22.5441 6.27645 22.7521C6.27645 22.9602 6.35911 23.1598 6.50624 23.3069C6.65338 23.454 6.85293 23.5367 7.06101 23.5367H12.5929C12.7821 25.9601 13.8305 28.2362 15.5493 29.955C17.2681 31.6738 19.5442 32.7222 21.9676 32.9114V43.9352H10.9438Z" fill="url(#paint0_linear_3112_9236)" />
            <path d="M49.4279 26.6752H27.4603C27.2523 26.6752 27.0527 26.7578 26.9056 26.905C26.7584 27.0521 26.6758 27.2517 26.6758 27.4597V41.5817C26.6758 41.7898 26.7584 41.9894 26.9056 42.1365C27.0527 42.2836 27.2523 42.3663 27.4603 42.3663C27.6684 42.3663 27.868 42.2836 28.0151 42.1365C28.1622 41.9894 28.2449 41.7898 28.2449 41.5817V37.6189C30.6683 37.4298 32.9444 36.3814 34.6632 34.6626C36.382 32.9438 37.4304 30.6677 37.6196 28.2443H48.6434V39.2681C46.22 39.4572 43.9439 40.5057 42.2251 42.2244C40.5063 43.9432 39.4578 46.2194 39.2687 48.6428H28.2449V44.72C28.2449 44.5119 28.1622 44.3123 28.0151 44.1652C27.868 44.0181 27.6684 43.9354 27.4603 43.9354C27.2523 43.9354 27.0527 44.0181 26.9056 44.1652C26.7584 44.3123 26.6758 44.5119 26.6758 44.72V49.4273C26.6758 49.6354 26.7584 49.8349 26.9056 49.9821C27.0527 50.1292 27.2523 50.2119 27.4603 50.2119H49.4279C49.636 50.2119 49.8356 50.1292 49.9827 49.9821C50.1298 49.8349 50.2125 49.6354 50.2125 49.4273V27.4597C50.2125 27.2517 50.1298 27.0521 49.9827 26.905C49.8356 26.7578 49.636 26.6752 49.4279 26.6752ZM28.2449 36.0498V28.2443H36.0504C35.8647 30.2517 34.9827 32.131 33.5572 33.5566C32.1316 34.9821 30.2524 35.8641 28.2449 36.0498ZM40.8378 48.6428C41.0235 46.6353 41.9055 44.756 43.3311 43.3305C44.7566 41.9049 46.6359 41.0229 48.6434 40.8372V48.6428H40.8378Z" fill="url(#paint1_linear_3112_9236)" />
            <defs>
                <linearGradient id="paint0_linear_3112_9236" x1="-11.6403" y1="-1.09382e-06" x2="64.651" y2="4.51056" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
                <linearGradient id="paint1_linear_3112_9236" x1="20.655" y1="26.6752" x2="60.116" y2="29.0082" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#168DCA" />
                    <stop offset="1" stop-color="#0F2453" />
                </linearGradient>
            </defs>
        </svg>
    );
}

// FEATURE CARD COMPONENT

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    bullets: string[];
}

function FeatureCard({ icon, title, bullets }: FeatureCardProps) {
    return (
        <div className="bg-[#F3F3F3] rounded-2xl p-5 flex flex-col gap-3">
            {/* Icon */}
            <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm">
                {icon}
            </div>
            {/* Title */}
            <p className="text-[14px] font-semibold text-[#1a1a1a] leading-snug tracking-wide">
                {title}
            </p>
            {/* Bullets */}
            <ul className="space-y-1.5">
                {bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-[#636363] leading-snug">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#636363] shrink-0" />
                        {b}
                    </li>
                ))}
            </ul>
        </div>
    );
}

// PROCESS TIMELINE COMPONENT
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
                                        onClick={() => setActive(idx)}
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

// EQUAL IMAGE GRID

function ImageGridEqual({ left, right }: { left: string; right: string }) {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="rounded-xl col-span-2 overflow-hidden bg-gray-100 h-72">
                <img src={left} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden bg-gray-100 h-72">
                <img src={right} alt="" className="w-full h-full object-contain" />
            </div>
        </div>
    );
}

// MAIN CONTENT

function MainContent() {
    const featureCards: FeatureCardProps[] = [
        {
            icon: <IconModular />,
            title: "Modular & Scalable Design",
            bullets: [
                "Interlocking tiles bolted together to form larger sections",
                "Configurable layouts to achieve required helipad dimensions",
                "Easily expandable or reconfigurable as operational needs change",
            ],
        },
        {
            icon: <IconLoad />,
            title: "High Load-Bearing Capacity",
            bullets: [
                "Engineered to support heavy helicopter loads",
                "Tested for high point-load resistance with minimal deflection",
                "Suitable for repeated take-off and landing operations",
            ],
        },
        {
            icon: <IconInstall />,
            title: "Rapid Installation",
            bullets: [
                "Sections can be pre-assembled off-site",
                "Manual handling possible without heavy lifting equipment",
                "Quick deployment on soil, sand, gravel, or uneven terrain",
            ],
        },
        {
            icon: <IconWeather />,
            title: "Anti-Slip & Weather Resistant",
            bullets: [
                "Vehicle-grade, anti-slip surface",
                "UV-stabilized material for long-term outdoor exposure",
                "Designed to perform in extreme environmental conditions",
            ],
        },
        {
            icon: <IconSafe />,
            title: "Safe Access & Ground Stability",
            bullets: [
                "Integrated anchoring points to secure the helipad to the ground",
                "Optional rubber ramps for smooth on/off access",
                "Prevents surface damage and ground penetration",
            ],
        },
        {
            icon: <IconTile />,
            title: "Tile-Based Construction",
            bullets: [
                "Individual tiles connected to form large sections",
                "Sections combined to create a full helipad area",
                "Lightweight yet structurally robust",
            ],
        },
    ];

    return (
        <div className="flex-1 min-w-0 max-w-240">

            {/* ─── Section 1: Overview ─── */}
            <section className="mb-12">
                <SectionHeading size="h1" className="mb-4">
                    Rapid-Deploy Helipad Systems For Temporary &amp; Emergency Operations
                </SectionHeading>

                <BodyText className="mb-6">
                    Catobo's Portable Helipad and VertiPad solutions are engineered for rapid deployment where permanent
                    infrastructure is not feasible. Designed for emergency response, temporary operations, and remote
                    locations, these systems deliver high load capacity, operational safety, and compliance without
                    permanent civil works.
                </BodyText>

                {/* Overview sub-heading */}
                <p className="text-[15px] font-semibold text-[#1a1a1a] mb-2">Overview</p>
                <BodyText className="mb-3">
                    Our portable helipad systems use a modular, heavy-duty flooring structure that can be quickly
                    assembled to create stable, load-bearing landing areas for helicopters. The system is ideal for medical
                    evacuation, disaster response, construction sites, events, and temporary aviation operations.
                </BodyText>
                <BodyText className="mb-8">
                    Each solution is designed for speed, strength, and flexibility, allowing teams to deploy, relocate, or
                    dismantle the helipad with minimal manpower and tools.
                </BodyText>

                <ImageGridEqual
                    left="/ph/1.png"
                    right="/ph/2.png"
                />
            </section>

            {/* ─── Section 2: Key Features — 3×2 card grid ─── */}
            <section className="mb-14">
                <SectionHeading size="h2" className="mb-6">
                    Key Features
                </SectionHeading>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {featureCards.map((card, i) => (
                        <FeatureCard key={i} {...card} />
                    ))}
                </div>
            </section>

            {/* ─── Section 3: Applications (ProcessTimeline) ─── */}
            <section className="mb-14">
                <ProcessTimeline
                    title="Applications"
                    columns={4}
                    steps={[
                        { number: "01", title: "Emergency Medical Evacuation (MEDEVAC)" },
                        { number: "02", title: "Temporary Helipads For Construction And Infrastructure Projects" },
                        { number: "03", title: "Disaster Response And Relief Operations" },
                        { number: "04", title: "Remote And Off-Grid Aviation Operations" },
                    ]}
                />
            </section>

            {/* ─── Section 4: Why Choose Catobo — Image LEFT | Text RIGHT ─── */}
            <section className="mb-10">
                <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-8 items-center">
                    {/* Left – image */}
                    <div className="rounded-xl overflow-hidden bg-gray-100 h-90">
                        <img
                            src="/ph/3.png"
                            alt="Aerial view of helipad"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right – text */}
                    <div>
                        <SectionHeading size="h2" className="mb-5">
                            Why Choose Catobo Portable Helipad Solutions
                        </SectionHeading>

                        <div className="space-y-3 mb-7">
                            {[
                                "Proven modular engineering",
                                "High load performance with rapid deployment",
                                "Minimal site preparation required",
                                "Flexible, reusable, and cost-effective",
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

export default function SolutionPortableHelipad() {
    const sidebarGroups: SidebarGroup[] = [
        {
            items: [
                { label: "Overview", hasArrow: true },
                { label: "Key Features", hasArrow: true },
                { label: "Applications", hasArrow: true },
            ],
        },
    ];

    return (
        <div>
            <DynamicHero
                title={"Portable Helipad & VertiPad Solutions"}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Portable Helipad & VertiPad Solutions" },
                ]}
                backgroundImage="/ph.png"
            />
            <main className="min-h-screen bg-white">
                <div className="2xl:max-w-360 w-[90%] mx-auto py-8">
                    <div className="flex flex-col lg:flex-row gap-5 items-start">
                        <Sidebar
                            title="Portable Helipad & VertiPad Solutions"
                            groups={sidebarGroups}
                        />
                        <MainContent />
                    </div>
                </div>
            </main>
        </div>
    );
}