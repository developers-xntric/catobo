import { TestimonialsData } from '../types';

export const aviationTestimonialsData: TestimonialsData = {
  hero: {
    title: "Aviation Client Testimonials",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Aviation Testimonials" },
    ],
    backgroundImage: "/testimonials-bg.png",
  },
  stats: [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" stroke="#168DCA" strokeWidth="2" />
          <path d="M12 16l3 3 5-6" stroke="#168DCA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      value: "200+",
      label: "Airport Projects",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" stroke="#168DCA" strokeWidth="2" />
          <path d="M12 16l3 3 5-6" stroke="#168DCA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      value: "50+",
      label: "Airports Served",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" stroke="#168DCA" strokeWidth="2" />
          <path d="M12 16l3 3 5-6" stroke="#168DCA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      value: "15+",
      label: "Years in Aviation",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" stroke="#168DCA" strokeWidth="2" />
          <path d="M12 16l3 3 5-6" stroke="#168DCA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      value: "100%",
      label: "Safety Compliance",
    },
  ],
  heading: "What Our Aviation Partners Say",
  subheading: "Trusted by leading aviation authorities and airport operators worldwide.",
  items: [
    {
      id: 1,
      company: "Dubai Civil Aviation Authority",
      text: "Catobo has been instrumental in upgrading our helipad infrastructure across the UAE. Their technical expertise and commitment to safety standards are exemplary.",
      author: "Micheal Rudolph",
      designation: "UAS / UTM SME, DCAA",
      avatar: "/profile/user-2.png",
    },
    {
      id: 2,
      company: "Emirates Flight Training Academy",
      text: "The airfield lighting system Catobo installed has significantly improved our training operations. Their understanding of aviation requirements is outstanding.",
      author: "Capt. Abdullah",
      designation: "Head of Operations",
      avatar: "/profile/user-1.png",
    },
    {
      id: 3,
      company: "Global Air Logistics",
      text1: "Catobo delivered our heliport lighting project ahead of schedule and within budget.",
      text2: "Their team's responsiveness and technical knowledge make them a valued partner for our aviation infrastructure needs.",
      author: "Hassan Bin Zayed",
      designation: "Director of Safety",
      avatar: "/profile/user-3.png",
    },
    {
      id: 4,
      company: "SEED Engineering, UAE",
      text: "We have collaborated with Catobo on multiple airport projects. Their lightning protection and earthing designs consistently meet the highest international standards.",
      author: "Sanju Mathew",
      designation: "CEO",
      avatar: "/profile/user-3.png",
      fullWidth: true,
    },
    {
      id: 5,
      company: "Leads Investments Group L.L.C",
      text: "Catobo's aviation division provided end-to-end solutions for our private airfield project. From design through certification, their professionalism was unmatched.",
      author: "Atiq Hassan Mubarak",
      designation: "Intl. Security Safety Aviation Advisor",
      avatar: "/profile/user-1.png",
      response: {
        from: "Catobo Aviation Team",
        text: "Thank you for your continued trust in our aviation solutions. We look forward to supporting your future projects.",
      },
    },
  ],
};
