'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/grad-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import Badge from './ui/badge';
import Typography from './ui/heading';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        inquiryType: 'Services',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!recaptchaToken) return;
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, recaptchaToken }),
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    inquiryType: 'Services',
                    message: '',
                });
                setRecaptchaToken(null);
                recaptchaRef.current?.reset();
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSelectChange = (value: string) => {
        setFormData(prev => ({
            ...prev,
            inquiryType: value,
        }));
    };

    return (
        <section className="w-full bg-[#E6E5E5] md:py-16 py-10">
            <div className="2xl:max-w-350 w-[90%] mx-auto lg:px-8 ">
                {/* Header */}
                <div className="text-center w-full md:w-[80%] mx-auto flex flex-col items-center justify-center">
                    <Badge text='Partner with Precision' variant='black' />
                    <h2 className="text-[22px] md:text-3xl lg:text-[40px] font-medium leading-[1.2] text-balance text-[#000000] mb-10 text-center ">
                        Begin your Journey with Precision-Engineered Aviation Safety, Heliport, Vertiport, and Airfield Solutions Backed by Decades of Expertise.
                    </h2>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 gap-6 md:gap-1 xl:gap-8 2xl:gap-8 lg:grid-cols-2">
                    {/* Left Column - Image */}
                    <div className="md:flex hidden items-center justify-center">
                        <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-xl">
                            <Image src="/contact.png" alt="Contact" fill className="object-cover" />
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="flex flex-col  justify-center bg-[#D9D9D9] px-5 md:px-8 py-6 rounded-[14px]">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name Field */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-md font-medium text-[#101010]">
                                    Name
                                </label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Please enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="border-[#D6D6D6] bg-white placeholder-[#808080] outline-none px-4"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-md font-medium text-[#101010]">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Please enter your email ID"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="border-[#D6D6D6] bg-white placeholder-[#808080] outline-none px-4"
                                />
                            </div>

                            {/* Inquiry Type Dropdown */}
                            <div className="space-y-2">
                                <label htmlFor="inquiry" className="block text-md font-medium text-[#101010]">
                                    Inquiry Type<span className="text-red-500">*</span>
                                </label>
                                <Select value={formData.inquiryType} onValueChange={handleSelectChange}>
                                    <SelectTrigger
                                        id="inquiry"
                                        className="border-[#D6D6D6] bg-white w-full"
                                    >
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

                            {/* Message Field */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-md font-medium text-[#101010]">
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Please write your message here"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="border-[#D6D6D6] bg-white placeholder-[#808080] outline-none px-4 resize-none"
                                    rows={10}
                                />
                            </div>

                            {/* reCAPTCHA */}
                            <div className="w-full overflow-hidden">
                                <div className="sm:scale-100 scale-[0.77] origin-left">
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                                        onChange={(token) => setRecaptchaToken(token)}
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                disabled={isSubmitting || !recaptchaToken}
                                className="text-white font-medium py-3 px-10 transition-colors rounded-lg disabled:opacity-50"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Now'}
                            </Button>

                            {/* Status Message */}
                            {submitStatus === 'success' && (
                                <p className="text-green-600 text-sm">
                                    Thank you! Your message has been sent successfully.
                                </p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="text-red-600 text-sm">
                                    Failed to send message. Please try again later.
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Left Column - Image */}
                    <div className="flex items-center justify-center md:hidden">
                        <div className="relative w-full h-80 overflow-hidden rounded-lg">
                            <Image src="/contact.png" alt="Contact" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
