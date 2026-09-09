import { ContactData } from '../types';
import { Mail, Phone } from "lucide-react";


function PhoneIcon() {
  return <Phone width={20} height={20} strokeWidth={1.8} color="white" aria-hidden="true" />;
}

function EmailIcon() {
  return <Mail width={22} height={22} strokeWidth={1.8} color="white" aria-hidden="true" />;
}

function LocationIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}



export const aviationContactData: ContactData = {
  hero: {
    title: "Contact Us",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Contact Us" },
    ],
    backgroundImage: "/aviation/contact-bg.png",
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
      company: "Company / Organization",
      subject: "Subject",
      enquiry: "Enquiry Details",
    },
    submitText: "Submit Now",
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3608.3445428399737!2d55.3189441!3d25.2589927!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5da2e3a82867%3A0x6df6bbe7793fb398!2sAl%20Masaood%20Tower!5e0!3m2!1sen!2s!4v1780651063068!5m2!1sen!2s",
  mapTitle: "Catobo – Office 702, Al Masaood Tower, Deira, Dubai",
};
