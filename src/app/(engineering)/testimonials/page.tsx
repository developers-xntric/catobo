
import DynamicHero from '@/components/common/hero';
import Image from "next/image";


const stats = [
    {
        icon: <Image src="/testimonials/user.png" alt="Happy Customers" width={35} height={35} />,
        value: "2500+",
        label: "Happy Customers",
        bg: "bg-[#F8F9FA]"
    },
    {
        icon: <Image src="/testimonials/star.png" alt="Average Rating" width={35} height={35} />,
        value: "4.8",
        label: "Average Rating",
        bg: "bg-[#F8F9FA]"
    },
    {
        icon: <Image src="/testimonials/watch.png" alt="Response Time" width={35} height={35} />,
        value: "24h",
        label: "Response Time",
        bg: "bg-[#F8F9FA]"
    }
];

const testimonials = [
    {
        id: 1,
        company: "SEED Engineering, UAE",
        text1: `"We have the pleasure of working with Catobo for more than 15 years. Every once in a while, you run across another professional whose standards match your own. Catobo for us has been that kind of great experience. We were able to take our idea from concept, to a working model, then to a working product effectively with full confidence in what we were engineering. I wholeheartedly recommend Catobo as the "go to team" when it comes to engineering products and services.`,
        text2: `We have used Catobo for their engineering services since 2007. Catobo has a very broad service offering. Their Sales and support team is extremely knowledgeable with conventional and "leading edge" solutions. What I appreciate most is their ability to guide us toward and/or provide practical solutions regardless of the complexity of the problem"`,
        author: "SANJU MATHEW",
        designation: "CEO",
        avatar: "/testimonials/sanju.png",
        logo: "/testimonials/seed-logo.png",
        fullWidth: true
    },
    {
        id: 2,
        company: "Leads Investments Group L.L.C",
        text: `"We had the pleasure of working with Catobo for more than 7 years. Their team has successfully completed multiple projects with our requirements. Catobo has always been responsive to our needs, very knowledgeable in many engineering topics, and their reports are clear, concise, and professional. I look forward to work with Catobo on future projects and I would recommend them to anyone in need of engineering and technical services."`,
        author: "ATIQ HASSAN MUBARAK",
        designation: "Intl. Security Safety Aviation Advisor",
        avatar: "/testimonials/atiq.png"
    },
    {
        id: 3,
        company: "Dubai Civil Aviation Authority, DCAA",
        text: `"Representing the Dubai Civil Aviation Authority, DCAA, I have had numerous dealings with CATOBO on many occasions. Predominately in the construction and or rehabilitation of Helipads throughout the entire UAE. CATOBO have set the benchmark in the Helipad ecosystem throughout the entire GCC region.`,
        author: "MICHEAL RUDOLPH",
        designation: "UAE / UTM SME",
        avatar: "/testimonials/micheal.png"
    }
];

export default function TestimonialsPage() {
    return (
        <main className="w-full bg-white pb-20">
            <DynamicHero
                title="Testimonials"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Testimonials" },
                ]}
                backgroundImage="/testimonials/hero-bg.png"
            />

            <div className="2xl:max-w-360 w-[90%] mx-auto z-20 pt-16">
                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {stats.map((stat, i) => (
                        <div key={i} className={`${stat.bg} p-5 rounded-xl border border-gray-100 flex items-center gap-6 shadow-sm`}>
                            <div className="w-14 h-14 rounded-full bg-[#E4E4E4] flex items-center justify-center shrink-0">
                                {stat.icon}
                            </div>
                            <div>
                                <h2 className="text-2xl font-medium text-[#111111]">{stat.value}</h2>
                                <p className="text-sm text-[#636363]">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recent Reviews Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-[20px] md:text-[30px] lg:text-[35px] font-medium leading-[1.2] text-[#000] mb-2">
                        Recent Reviews
                    </h2>
                    <p className="text-sm text-[#6D6D6D]">
                        See what our community is saying
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="flex flex-col gap-8">
                    {/* SEED Engineering (Full Width Card) */}
                    <div className="bg-[#FAFAFA] rounded-[15px] overflow-hidden border border-gray-100 flex flex-col lg:flex-row transition-shadow p-4 gap-10">
                        <div className="lg:w-[35%] w-full min-h-[300px] xl:min-h-[380px] relative rounded-xl overflow-hidden shrink-0">
                            <Image
                                src="/testimonials/seed.png"
                                alt="SEED Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="lg:w-[65%] flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-semibold mb-6 text-gray-900">SEED Engineering, UAE</h3>
                                <div className="space-y-6">
                                    <p className="text-sm md:text-[15px] 2xl:text-base  text-[#111111]">
                                        {testimonials[0].text1}
                                    </p>
                                    <p className="text-sm md:text-[15px] 2xl:text-base  text-[#111111] ">
                                        {testimonials[0].text2}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-10 flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                    <Image src="/testimonials/sanju.png" alt="Sanju Mathew" fill className="object-cover" />
                                </div>
                                <div>
                                    <div className="font-bold text-[#111111] text-sm uppercase">{testimonials[0].author}</div>
                                    <div className="text-xs text-[#111111] font-medium">{testimonials[0].designation}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle Row (Two Cards) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.slice(1).map((item) => (
                            <div key={item.id} className="bg-[#F8F9FA] p-5  rounded-[15px] border border-gray-100 flex flex-col justify-between transition-shadow">
                                <div>
                                    <h3 className="text-lg font-semibold mb-6 text-[#111111]">{item.company}</h3>
                                    <p className="text-sm leading-relaxed text-[#111111]">
                                        {item.text}
                                    </p>
                                </div>
                                <div className="mt-8 flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                        <Image src={item.avatar || ""} alt={item.author} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <div className="text-[#111111] text-xs uppercase mb-1">{item.author}</div>
                                        <div className="text-[10px] text-[#111111] font-medium max-w-[200px] leading-tight">{item.designation}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* LavTech Card */}
                    <div className="bg-[#FAFAFA] p-5 rounded-[15px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-semibold mb-6 text-[#111111]">LavTech</h3>
                        <p className="text-sm leading-relaxed text-[#111111] mb-5">
                            "Catobo is a specialist in engineering and technical solutions. Working with them is a pleasure."
                        </p>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-gray-200">
                                <Image src="/testimonials/micheal.png" alt="Tashir & Lavanya" fill className="object-cover" />
                            </div>
                            <div>
                                <div className="text-[#111111] text-xs uppercase mb-1 ">TASHIR & LAVANYA</div>
                                <div className="text-[10px] text-[#111111] font-medium leading-tight lowercase first-letter:uppercase">Managing Directors</div>
                            </div>
                        </div>

                        {/* Catobo Response */}
                        <div className="bg-[#E7F3FF] p-4 rounded-xl border-l-[4px] border-[#168DCA]">
                            <div className="font-bold text-[#111111] mb-2 text-sm uppercase">Catobo</div>
                            <p className="text-sm text-[#111111] leading-relaxed">
                                "Thank you, Tashir & Lavanya, for your thoughtful feedback. At LavTech, we value strong partnerships and are glad to collaborate with teams that share our commitment to quality and innovation."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
