"use client"

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const footerData = {
    logo: { url: '/footerlogo.png', alt: 'Americana Computers Logo' },
    locationSection: {
        heading: 'Our Location',
        address: 'Office 702 – Al Masaood Tower,Riggat Al ButeenDeira, Dubai, UAE',
        mapUrl: 'https://maps.google.com/?q=ICAD+3+Bldg.+3B,+Mrawiq+St,+Mussafah+South,+1st+Floor+-+Abu+Dhabi',
    },
    socialMediaLinks: [
        { platform: 'Facebook', url: 'https://www.facebook.com/people/Americana-Computer-Systems-LLC/100068080842516/', icon: { url: '/social1.png', alt: 'Facebook' } },
        { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/americana-computer-system-llc./', icon: { url: '/social2.png', alt: 'Twitter' } },
        { platform: 'Twitter/X', url: 'https://x.com/Americana_group', icon: { url: '/social3.png', alt: 'LinkedIn' } },
    ],
    contactSection: {
        heading: 'Contact Information',
        phoneNumbers: [
            { label: 'Phone 1', number: '+971 4 391 8018', href: 'tel:+97143918018' },
           
        ],
        email: 'info@catobo.com',
        emailHref: 'mailto:info@catobo.com',
    },
    newsletterSection: {
        heading: 'Subscribe To Newsletter',
        description: 'Subscribe to receive the latest news, project updates, and industry insights straight to your inbox.',
        emailPlaceholder: 'Your email address',
        buttonText: 'Subscribe',
        successMessage: 'Thank you for subscribing!',
        errorMessage: 'Failed to subscribe. Please try again.',
    },
    bottomSection: {
        copyrightText: 'All rights reserved.',
        navLinks: [
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '/about' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'Portfolio', href: '/portfolio' },
            { label: 'Testimonials', href: '/testimonials' },
            { label: 'Faqs', href: '/faqs' },
            { label: 'Contact Us', href: '/contact' },
        ],
    },
}

export function Footer() {
    const [newsletterEmail, setNewsletterEmail] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: newsletterEmail }),
            })
            const result = await response.json()
            if (response.ok) {
                setSubmitStatus('success')
                setNewsletterEmail('')
            } else {
                setSubmitStatus('error')
            }
        } catch {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    const {
        logo,
        locationSection,
        socialMediaLinks,
        contactSection,
        newsletterSection,
        bottomSection,
    } = footerData

    return (
        <footer
            className="relative w-full overflow-hidden text-white"
            style={{ background: "linear-gradient(93deg, #168DCA -24.15%, #0F2453 134.7%)" }}
        >
            <div className="relative z-10">
                <div className="mx-auto max-w-350 w-[90%] py-5 md:pt-8 md:pb-4">
                    <div className="grid grid-cols-1 gap-5 md:gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                        {/* Logo Section */}
                        <div className="flex flex-col items-start w-fit">
                            <Link href="/" className="relative w-36 h-28 mb-2">
                                <Image
                                    src={logo.url}
                                    alt={logo.alt}
                                    fill
                                    className="object-contain object-left"
                                />
                            </Link>
                        </div>

                        {/* Our Location */}
                        <div>
                            <h3 className="mb-6 text-sm tracking-wider font-medium">
                                {locationSection.heading}
                            </h3>
                            <a
                                href={locationSection.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-white space-y-0.5 hover:text-blue-400 transition-colors block"
                            >
                                {locationSection.address.split('\n').map((line, i) => (
                                    <span key={i} className="block">{line}</span>
                                ))}
                            </a>
                            
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h3 className="mb-4 md:mb-6 text-sm tracking-wider font-medium">
                                {contactSection.heading}
                            </h3>
                            <div className="space-y-3 text-sm text-white">
                                <p className='border-b border-b-[rgba(255,255,255,0.10)] pb-4 flex flex-col gap-0.5'>
                                    {contactSection.phoneNumbers.map((phone, index) => (
                                        <a key={index} href={phone.href} className="hover:text-blue-400 transition-colors font-sans">
                                            {phone.number}
                                        </a>
                                    ))}
                                </p>
                                <p>
                                    <a href={contactSection.emailHref} className="hover:text-blue-400 transition-colors">
                                        {contactSection.email}
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Subscribe to Newsletter */}
                        <div>
                            <h3 className="mb-4 md:mb-6 text-sm tracking-wider font-medium">
                                {newsletterSection.heading}
                            </h3>
                            <label className="mb-3 block text-sm text-white">
                                {newsletterSection.description}
                            </label>
                            <form onSubmit={handleNewsletterSubmit} className="space-y-3 flex relative">
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder={newsletterSection.emailPlaceholder}
                                    value={newsletterEmail}
                                    onChange={(e) => setNewsletterEmail(e.target.value)}
                                    required
                                    disabled={isSubmitting}
                                    className="bg-[rgba(255,255,255,0.10)] border-none text-white placeholder:text-white focus:border-none outline-none focus:ring-none rounded-lg px-4 py-6 text-sm disabled:opacity-50"
                                />
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-[30%] h-[60%] bg-white text-[#0F2453] hover:bg-blue-50 text-xs font-semibold absolute right-1 top-1.5 rounded-sm disabled:opacity-50"
                                >
                                    {isSubmitting ? '...' : newsletterSection.buttonText}
                                </Button>
                            </form>
                            {submitStatus === 'success' && (
                                <p className="text-green-400 text-xs mt-2">{newsletterSection.successMessage}</p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="text-red-400 text-xs mt-2">{newsletterSection.errorMessage}</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="relative z-10 border-t border-[rgba(255,255,255,0.10)]">
                    <div className="mx-auto max-w-350 w-[90%] py-4 md:py-4">
                        <div className="flex flex-col-reverse gap-4 sm:flex-row md:items-center md:justify-between">
                            <p className="text-sm text-white text-left">
                                Copyright <span className='font-sans'>© {new Date().getFullYear()}</span> {bottomSection.copyrightText}
                            </p>
                            <div className="flex items-center gap-5 md:gap-6 text-sm text-white font-medium justify-start md:justify-end">
                                {bottomSection.navLinks.map((link, index) => (
                                    <a key={index} href={link.href} className="hover:text-blue-400 transition-colors">{link.label}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
