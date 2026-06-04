import { ContactData } from '../types';

export const aviationContactData: ContactData = {
  hero: {
    title: "Contact Our Aviation Team",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Contact Aviation" },
    ],
    backgroundImage: "/contact-bg.png",
  },
  infoCards: [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92V19C22.0001 20.3264 21.3488 21.577 20.2218 22.3708C19.0948 23.1646 17.6471 23.4109 16.296 23.0479C12.4764 22.0894 8.93007 20.2814 5.99998 17.75C3.48997 15.6157 1.61399 12.9242 0.540031 9.90993C0.179865 8.55895 0.427281 7.11272 1.22027 5.98646C2.01326 4.86019 3.26156 4.208 4.58597 4.205H6.58597C7.31422 4.20429 8.00895 4.53033 8.46893 5.08822C8.92892 5.6461 9.11108 6.38143 8.96997 7.08622C8.77954 8.04418 8.47693 8.97915 8.06597 9.87472C7.86198 10.3086 7.91242 10.8218 8.19778 11.207C9.52173 12.9851 11.1774 14.4986 13.086 15.8032C13.4724 16.0886 13.9879 16.136 14.421 15.9292C15.2888 15.526 16.1951 15.2279 17.124 15.0431C17.8322 14.9035 18.5703 15.0839 19.1316 15.5398C19.6929 15.9958 20.0223 16.6837 20.022 17.412V16.92H22Z" stroke="#168DCA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Phone",
      lines: [
        "+971 4 123 4567",
        "+971 50 987 6543",
      ],
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="#168DCA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Email",
      lines: [
        "aviation@catobo.com",
        "projects@catobo.com",
      ],
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#168DCA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#168DCA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Address",
      lines: [
        "Catobo Aviation Division",
        "Dubai Airport Freezone (DAFZA)",
        "Dubai, United Arab Emirates",
      ],
    },
  ],
  form: {
    heading: "Send Us A Message",
    fields: {
      name: "Name",
      surname: "Surname",
      phone: "Phone Number",
      email: "Email Address",
      company: "Company / Organization",
      subject: "Subject",
      enquiry: "Enquiry Details",
    },
    submitText: "Submit Enquiry",
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178!2d55.364!3d25.197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzQ5LjIiTiA1NcKwMjEnNTAuNCJF!5e0!3m2!1sen!2sae!4v1",
  mapTitle: "Catobo Aviation - Dubai Office",
};
