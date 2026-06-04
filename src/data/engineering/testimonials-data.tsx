import Image from 'next/image';
import { TestimonialsData } from '../types';

export const engineeringTestimonialsData: TestimonialsData = {
  hero: {
    title: "Testimonials",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Testimonials" },
    ],
    backgroundImage: "/testimonials/hero-bg.png",
  },
  stats: [
    {
      icon: <Image src="/testimonials/user.png" alt="Happy Customers" width={35} height={35} />,
      value: "2500+",
      label: "Happy Customers",
    },
    {
      icon: <Image src="/testimonials/star.png" alt="Average Rating" width={35} height={35} />,
      value: "4.8",
      label: "Average Rating",
    },
    {
      icon: <Image src="/testimonials/watch.png" alt="Response Time" width={35} height={35} />,
      value: "24h",
      label: "Response Time",
    },
  ],
  heading: "Recent Reviews",
  subheading: "See what our community is saying",
  items: [
    {
      id: 1,
      company: "SEED Engineering, UAE",
      text1: `"We have the pleasure of working with Catobo for more than 15 years. Every once in a while, you run across another professional whose standards match your own. Catobo for us has been that kind of great experience. We were able to take our idea from concept, to a working model, then to a working product effectively with full confidence in what we were engineering. I wholeheartedly recommend Catobo as the "go to team" when it comes to engineering products and services.`,
      text2: `We have used Catobo for their engineering services since 2007. Catobo has a very broad service offering. Their Sales and support team is extremely knowledgeable with conventional and "leading edge" solutions. What I appreciate most is their ability to guide us toward and/or provide practical solutions regardless of the complexity of the problem"`,
      author: "SANJU MATHEW",
      designation: "CEO",
      avatar: "/testimonials/sanju.png",
      logo: "/testimonials/seed-logo.png",
      fullWidth: true,
    },
    {
      id: 2,
      company: "Leads Investments Group L.L.C",
      text: `"We had the pleasure of working with Catobo for more than 7 years. Their team has successfully completed multiple projects with our requirements. Catobo has always been responsive to our needs, very knowledgeable in many engineering topics, and their reports are clear, concise, and professional. I look forward to work with Catobo on future projects and I would recommend them to anyone in need of engineering and technical services."`,
      author: "ATIQ HASSAN MUBARAK",
      designation: "Intl. Security Safety Aviation Advisor",
      avatar: "/testimonials/atiq.png",
    },
    {
      id: 3,
      company: "Dubai Civil Aviation Authority, DCAA",
      text: `"Representing the Dubai Civil Aviation Authority, DCAA, I have had numerous dealings with CATOBO on many occasions. Predominately in the construction and or rehabilitation of Helipads throughout the entire UAE. CATOBO have set the benchmark in the Helipad ecosystem throughout the entire GCC region.`,
      author: "MICHEAL RUDOLPH",
      designation: "UAE / UTM SME",
      avatar: "/testimonials/micheal.png",
    },
    {
      id: 4,
      company: "LavTech",
      text: `"Catobo is a specialist in engineering and technical solutions. Working with them is a pleasure."`,
      author: "TASHIR & LAVANYA",
      designation: "Managing Directors",
      avatar: "/testimonials/micheal.png",
      response: {
        from: "Catobo",
        text: "Thank you, Tashir & Lavanya, for your thoughtful feedback. At LavTech, we value strong partnerships and are glad to collaborate with teams that share our commitment to quality and innovation.",
      },
    },
  ],
};
