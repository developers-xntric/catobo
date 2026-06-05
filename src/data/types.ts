export interface NavLink {
    label: string;
    href?: string;
}

export interface HeroData {
    title: string;
    subtitle?: string;
    buttonText?: string;
    backgroundImage: string;
    breadcrumbs?: NavLink[];
    partnerLogos?: { file: string; name: string }[];
}

export interface SolutionCard {
    title: string;
    desc: string;
    icon: React.ReactNode;
}

export interface HomeData {
    hero: HeroData;
    solutions: {
        badge: string;
        title: string;
        cards: SolutionCard[];
        stats: {
            title: string;
            description: string;
            buttonText: string;
            buttonHref: string;
            backgroundImage: string;
            counters: { target: number; label: string }[];
        };
    };
    howItWorks: {
        badge: string;
        title: string;
        description: string;
        videoSrc: string;
        ctaText: string;
    };
    aboutCompany: {
        badge: string;
        title: string;
        description: React.ReactNode;
        image: string;
        safelyBg: string;
        safelyTitle: string;
        safelyDesc: string;
    };
    projects: {
        badge: string;
        title: string;
        description: string;
        items: {
            image: string;
            title: string;
            description: string;
            link: string;
            category: string;
        }[];
        categories: string[];
    };
    testimonials: {
        badge: string;
        title: string;
        description: string;
        items: {
            id: number;
            company: string;
            quote: string;
            author: string;
            designation: string;
            image: string;
        }[];
    };
}

export interface AboutData {
    trustedSolutions: {
        badge: string;
        title: string;
        description: string;
        cards: {
            title: string;
            desc: string;
            icon: React.ReactNode;
        }[];
    };
    engineeringExcellence: {
        badge: string;
        title: string;
        paragraphs: React.ReactNode[];
        image: string;
    };
    ourApproach: {
        badge: string;
        title: string;
        description: string;
        steps: {
            title: string;
            desc: string;
            icon: string;
        }[];
    };
    testimonials?: HomeData['testimonials'];
}

export interface SidebarItem {
    label: string;
    hasArrow?: boolean;
    subItems?: SidebarItem[];
}

export interface SectionImage {
    src: string;
    alt: string;
    className?: string;
}

export interface ContentSection {
    id?: string;
    badge?: string;
    title: string;
    subtitle?: string;
    description?: string;
    paragraphs?: string[];
    points?: string[];
    images?: SectionImage[];
    pdfLinks?: { label: string; url?: string }[];
    subSections?: ContentSection[];
    numberCards?: NumberedCardData[];
}

export interface NumberedCardData {
    number: number;
    title: string;
    subtitle?: string;
    points: string[];
}

export interface CableTrunkingData {
    hero: HeroData;
    sidebar: {
        title: string;
        items: SidebarItem[];
    };
    sections: ContentSection[];
}

export interface ContactData {
    hero: HeroData;
    infoCards: {
        icon: React.ReactNode;
        title: string;
        lines: string[];
    }[];
    form: {
        heading: string;
        fields: {
            name: string;
            surname: string;
            phone: string;
            email: string;
            company: string;
            subject: string;
            enquiry: string;
        };
        submitText: string;
    };
    mapEmbedUrl: string;
    mapTitle: string;
}

export interface ExplosionProofData {
    hero: HeroData;
    sidebar: {
        title: string;
        items: SidebarItem[];
    };
    sections: ContentSection[];
}

export interface LightningProtectionData {
    hero: HeroData;
    sidebar: {
        title: string;
        items: SidebarItem[];
    };
    sections: ContentSection[];
}

export interface TestimonialItem {
    id: number;
    company: string;
    text?: string;
    text1?: string;
    text2?: string;
    logo?: string;
    author: string;
    designation: string;
    avatar: string;
    fullWidth?: boolean;
    response?: {
        from: string;
        text: string;
    };
}

export interface TestimonialsData {
    hero: HeroData;
    stats: {
        icon: React.ReactNode;
        value: string;
        label: string;
    }[];
    heading: string;
    subheading: string;
    items: TestimonialItem[];
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqsData {
    hero: HeroData;
    faqs: FaqItem[];
}

export interface PortfolioData {
    hero: HeroData;
    associateImage: string;
    associateTitle: string;
    associateDescription: string;
    associates: { id: number; title: string }[];
    partners: {
        badge: string;
        title: string;
        description: string;
        logoCount: number;
        logosBasePath?: string;
    };
}
