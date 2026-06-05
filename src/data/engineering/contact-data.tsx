import { ContactData } from '../types';

function PhoneIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <g clipPath="url(#clip0_3115_17565)">
                <mask id="mask0_3115_17565" style={{ maskType: "luminance" }} x="0" y="0" width="24" height="24">
                    <path d="M24 0H0V24H24V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_3115_17565)">
                    <path d="M20 11.03V17C20 21 19 22 15 22H9C5 22 4 21 4 17V7C4 3 5 2 9 2H15C19 2 20 3 20 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 5.5H10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.0012 19.1C12.8572 19.1 13.5512 18.406 13.5512 17.55C13.5512 16.694 12.8572 16 12.0012 16C11.1452 16 10.4512 16.694 10.4512 17.55C10.4512 18.406 11.1452 19.1 12.0012 19.1Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
            <g clipPath="url(#clip0_3115_17579)">
                <mask id="mask0_3115_17579" style={{ maskType: "luminance" }} x="0" y="0" width="24" height="24">
                    <path d="M24 0H0V24H24V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_3115_17579)">
                    <path d="M20 11.03V17C20 21 19 22 15 22H9C5 22 4 21 4 17V7C4 3 5 2 9 2H15C19 2 20 3 20 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 5.5H10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.0012 19.1C12.8572 19.1 13.5512 18.406 13.5512 17.55C13.5512 16.694 12.8572 16 12.0012 16C11.1452 16 10.4512 16.694 10.4512 17.55C10.4512 18.406 11.1452 19.1 12.0012 19.1Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

export const engineeringContactData: ContactData = {
  hero: {
    title: "Contact Us",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Contact Us" },
    ],
    backgroundImage: "/contact-bg.png",
  },
  infoCards: [
    {
      icon: <PhoneIcon />,
      title: "Phone Number",
      lines: ["Tel: +971 4 391 6018", "Fax: +971 4 391 8138"],
    },
    {
      icon: <EmailIcon />,
      title: "Email Address",
      lines: ["info@catobo.com"],
    },
    {
      icon: <LocationIcon />,
      title: "Address",
      lines: ["Office 702 – Al Masaood Tower", "54 Al Maktoum Rd, Riggat Al Buteen", "Deira, Dubai, United Arab Emirates"],
    },
  ],
  form: {
    heading: "How May We Help You",
    fields: {
      name: "Name",
      surname: "Surname",
      phone: "Phone Number",
      email: "Email Address",
      company: "Company Name",
      subject: "Subject",
      enquiry: "Enquiry",
    },
    submitText: "Submit Now",
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3608.3445428399737!2d55.3189441!3d25.2589927!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5da2e3a82867%3A0x6df6bbe7793fb398!2sAl%20Masaood%20Tower!5e0!3m2!1sen!2s!4v1780651063068!5m2!1sen!2s",
  mapTitle: "Catobo – Office 702, Al Masaood Tower, Deira, Dubai",
};
