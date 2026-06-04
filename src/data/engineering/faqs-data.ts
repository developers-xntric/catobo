import { FaqsData } from '../types';

export const engineeringFaqsData: FaqsData = {
  hero: {
    title: "Faqs",
    backgroundImage: "/faqs.png",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Faqs" },
    ],
  },
  faqs: [
    {
      question: "What are your operating hours?",
      answer: "Catobo ME trades from 08:00 to 17:00 Monday to Friday.",
    },
    {
      question: "What products do you offer?",
      answer: "We offer a wide range of engineering and technology solutions.",
    },
    {
      question: "Who are your group companies?",
      answer: "Our group companies operate across multiple sectors and regions.",
    },
    {
      question: "Who are your associate companies?",
      answer: "We work with several strategic partners and associate companies.",
    },
    {
      question: "Are you ISO certified?",
      answer: "Yes, we maintain internationally recognized ISO certifications.",
    },
  ],
};
