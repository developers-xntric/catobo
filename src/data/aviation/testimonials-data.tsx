import Image from 'next/image';
import { TestimonialsData } from '../types';

export const aviationTestimonialsData: TestimonialsData = {
  hero: {
    title: "Testimonials",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Testimonials" },
    ],
    backgroundImage: "/aviation/testimonial-bg.png",
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
      company: "Dubai Civil Aviation Authority",
      text: "Representing the Dubai Civil Aviation Authority, DCAA, I have had numerous dealings with  CATOBO on many occasions. Predominately in the construction and or rehabilitation of Helipads throughout the entire UAE, CATOBO have set the benchmark in the Helipad ecosystem throughout the entire GCC region.",
      author: "Micheal Rudolph",
      designation: "UAS / UTM SME, DCAA",
      avatar: "/profile/user-2.png",
    },
    {
      id: 2,
      company: "Emirates Flight Training Academy",
      text: "Catobo is a specialist in engineering and technical solutions. Working with them is a pleasure. ",
      author: "TASHIR & LAVANYA ",
      designation: "Head of Operations",
      avatar: "/profile/user-1.png",
    },
    
    {
      id: 4,
      company: "SEED Engineering, UAE",
      text: "We have the pleasure of working with Catobo for more than 15 years Every once in a while, you run across another professional whose standards match your own. Catobo for us has been that kind of great experience. We were able to take our idea from concept, to a working model, then to a working product effectively with full confidence in what we were engineering. I wholeheartedly recommend Catobo as the go to team when it comes to engineering products and services ",
      author: "Sanju Mathew",
      designation: "CEO",
      avatar: "/profile/user-3.png",
      fullWidth: true,
    },
    {
      id: 5,
      company: "LavTech",
      text: "“Catobo is a specialist in engineering and technical solutions. Working with them is a pleasure.” ",
      author: "Atiq Hassan Mubarak",
      designation: "Intl. Security Safety Aviation Advisor",
      avatar: "/profile/user-1.png",
      response: {
        from: "Catobo Aviation Team",
        text: "“Thank you, Tashir & Lavanya, for your thoughtful feedback. At LavTech, we value strong partnerships and are glad to collaborate with teams that share our commitment to quality and innovation.” ",
      },
    },
  ],
};
