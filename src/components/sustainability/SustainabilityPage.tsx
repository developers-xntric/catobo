"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Accordion, Dialog, Tabs } from "radix-ui";
import Badge from "@/components/ui/badge";
import Typography from "@/components/ui/heading";
import Button from "@/components/ui/grad-button";
import { Footer } from "@/components/Footer";
import SavingsEnquiry from "./SavingsEnquiry";
import {
  asset,
  faqs,
  industries,
  products,
  steps,
  type Product,
} from "./revamp-data";

const container = "mx-auto w-[90%] 2xl:max-w-350";
const paragraph = "text-xs md:text-base leading-relaxed text-[#3c3c3c]";

export default function SustainabilityPage() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [interest, setInterest] = useState("");
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const consultationRef = useRef(false);

  function consult(product: Product) {
    setInterest(product.name);
    if (selected) {
      consultationRef.current = true;
      setSelected(null);
    } else {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
      document.getElementById("estimate-name")?.focus({ preventScroll: true });
    }
  }

  return (
    <>
      <main className="bg-white text-black [&_section]:scroll-mt-28 [&_h2]:font-semibold">
        <section
          id="overview"
          className="relative flex h-svh flex-col overflow-hidden bg-[#222] pb-5 pt-24 text-white md:pb-8 md:pt-28"
        >
          <Image
            src={asset("hero.png")}
            alt="Solar panels, wind turbines and renewable energy facilities"
            fill
            priority
            sizes="100vw"
            className="object-cover -scale-x-100 max-md:object-[40%_center]"
          />
          <Image
            src={asset("hero-overlay.svg")}
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div
            className={
              container +
              " relative flex min-h-0 flex-1 flex-col justify-center py-5 md:py-8 [@media(max-height:600px)]:py-2"
            }
          >
            <div className="max-w-165 lg:w-[50%]">
              <Badge
                text="SUSTAINABILITY SOLUTIONS"
                className="rounded-lg border-white/10 [&>span:first-child]:bg-white"
              />
              <h1 className="mb-3 text-3xl font-semibold leading-[1.1] tracking-tight md:text-[40px] lg:text-[50px]">
                Sustainability Solutions
                <br />
                One Desk.
              </h1>
              <p className="text-sm leading-relaxed md:text-lg [@media(max-height:600px)]:text-[13px] [@media(max-height:600px)]:leading-5">
                Fuel &amp; combustion, cooling, and renewable energy
                technologies, all retrofit onto equipment a customer already
                runs. This vertical sits beside Catobo&apos;s Aviation and
                Engineering lines as the group&apos;s dedicated
                energy-efficiency offer.
              </p>
              <div className="mt-4 md:mt-6">
                <strong className="block text-3xl font-semibold md:text-[40px]">
                  5–10%
                </strong>
                <span className="mt-2 block text-sm md:text-lg">Less fuel</span>
              </div>
            </div>
          </div>
          <div
            aria-label="Technology partners"
            className={container + " marquee-logo-viewport relative hidden shrink-0 overflow-hidden py-2 select-none"}
          >
            <div className="marquee-track motion-reduce:animate-none">
              {[0, 1, 2].map((copy) => (
                <div
                  key={copy}
                  aria-hidden={copy > 0 ? true : undefined}
                  className="flex shrink-0 items-center gap-5 pr-5"
                >
                  <Partner name="Frictape">
                    <Image
                      src={asset("partner-proterial.svg")}
                      alt="Frictape"
                      width={135}
                      height={23}
                      className="max-w-full"
                    />
                  </Partner>
                  <Partner name="Phillips">
                    <div className="relative w-24 aspect-[122.288/77.613] md:w-30">
                      <Image
                        src={asset("partner-hef.png")}
                        alt="Phillips"
                        fill
                        sizes="120px"
                        className="object-contain"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          maskImage: `url(${asset("partner-hef-mask.png")})`,
                          maskSize: "100% 100%",
                          background:
                            "linear-gradient(to bottom,white 19.64%,transparent 19.64%,transparent 81.94%,white 81.94%,white 98.42%,transparent 98.42%)",
                        }}
                      />
                    </div>
                  </Partner>
                  <Partner name="ALS Airfield Lighting Systems">
                    <div
                      role="img"
                      aria-label="ALS Airfield Lighting Systems"
                      className="aspect-[138.224/65.046] w-24 bg-[#168dca] md:w-32"
                      style={{
                        maskImage: `url(${asset("partner-american-wind.png")})`,
                        maskSize: "contain",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                      }}
                    />
                  </Partner>
                  <Partner name="Technology partner">
                    <Image
                      src={asset("partner-sun-wind.png")}
                      alt="Technology partner"
                      width={119}
                      height={79}
                      className="h-12 w-auto object-contain md:h-16"
                    />
                  </Partner>
                  <Partner name="Cranton">
                    <Image
                      src={asset("partner-catalyst.png")}
                      alt="Cranton"
                      width={101}
                      height={79}
                      className="h-12 w-auto object-contain md:h-16"
                    />
                  </Partner>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="systems" className={container + " py-14 md:py-20"}>
          <div className="mx-auto max-w-190">
            <Typography text="Cut your fuel and energy bills, without changing your equipment" />
          </div>
          <Tabs.Root defaultValue="Catobo">
            <Tabs.List
              aria-label="Solution brands"
              className="mb-8 flex justify-center gap-4 md:mb-10 md:gap-7"
            >
              {["Catobo", "Aerostrata"].map((brand) => (
                <Tabs.Trigger
                  key={brand}
                  value={brand}
                  className="min-w-32 rounded-md border border-[#1473ad] px-6 py-3 text-sm text-[#1473ad] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#168dca] data-[state=active]:bg-linear-to-r data-[state=active]:from-[#168dca] data-[state=active]:to-[#0f2453] data-[state=active]:text-white md:min-w-44 md:text-base"
                >
                  {brand}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            {["Catobo", "Aerostrata"].map((brand) => (
              <Tabs.Content
                key={brand}
                value={brand}
                className="grid gap-6 outline-none md:grid-cols-3"
              >
                {products
                  .filter((product) => product.brand === brand)
                  .map((product) => (
                    <article
                      key={product.id}
                      className="flex min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#cfcfcf] bg-white"
                    >
                      <div className="relative aspect-[500/352] overflow-hidden bg-[#f5f5f5]">
                        <Image
                          src={asset(product.image)}
                          alt={product.name}
                          fill
                          sizes="(max-width: 767px) 90vw, 30vw"
                          className={
                            product.id === "catalyst"
                              ? "object-cover scale-[1.025] origin-top-left"
                              : "object-cover"
                          }
                        />
                        <span className="absolute right-4 top-4 rounded bg-linear-to-r from-[#168dca] to-[#0f2453] px-3 py-1.5 text-xs text-white">
                          {brand}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-4 lg:p-5">
                        <h3 className="mb-2 text-xl font-semibold leading-tight lg:text-2xl">
                          {product.name}
                        </h3>
                        <p className={paragraph + " mb-5"}>{product.intro}</p>
                        <div className="mt-auto grid grid-cols-[.85fr_1.15fr] gap-2 max-[350px]:grid-cols-1">
                          <Button
                            variant="outline"
                            size="sm"
                            className="min-h-10 !px-2 !text-xs !border-[#168dca] !text-[#1473ad] [&>svg]:hidden"
                            onClick={(event) => {
                              triggerRef.current = event.currentTarget;
                              setSelected(product);
                            }}
                          >
                            Learn more
                          </Button>
                          <Button
                            size="sm"
                            className="min-h-10 !px-2 !text-xs hover:!scale-100 [&>svg]:hidden"
                            onClick={() => consult(product)}
                          >
                            Book Your Consultation
                          </Button>
                        </div>
                      </div>
                    </article>
                  ))}
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </section>

        <section id="about" className={container + " pb-14 md:pb-20"}>
          <Typography text="Simple, low-risk, results first" />
          <div className="grid items-stretch gap-8 md:grid-cols-2 lg:gap-16">
            <div className="relative min-h-72 overflow-hidden rounded-[20px] md:min-h-110">
              <Image
                src={asset("process.png")}
                alt="Industrial plant with chimneys and processing equipment"
                fill
                sizes="(max-width: 767px) 90vw, 43vw"
                className="object-cover"
              />
            </div>
            <ol className="flex flex-col justify-between gap-6">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex items-center gap-5 border-l-[5px] border-[#168ac7] py-3 pl-5 lg:gap-6 lg:pl-7"
                >
                  <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#168dca] to-[#0f2453] lg:size-20">
                    <Image
                      src={asset(step.icon)}
                      alt=""
                      width={48}
                      height={48}
                      className={
                        "h-auto max-h-12 w-10 lg:w-12" +
                        (index === 1 || index === 2 ? " -scale-y-100" : "")
                      }
                    />
                  </div>
                  <div>
                    <h3 className="md:mb-2 text-xl font-semibold lg:text-2xl">
                      {step.title}
                    </h3>
                    <p className={paragraph}>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="faqs" className="bg-[#f6f6f6] py-14 md:py-20">
          <div className={container}>
            <Typography text="Frequently Asked Questions" />
            <Accordion.Root
              type="single"
              collapsible
              defaultValue="faq-0"
              className="space-y-3"
            >
              {faqs.map(([question, answer], index) => (
                <Accordion.Item
                  key={question}
                  value={`faq-${index}`}
                  className="group rounded-xl border border-[#dadada] px-5 data-[state=open]:border-transparent data-[state=open]:bg-white md:px-6"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="flex w-full items-center justify-between gap-5 py-5 text-left font-(family-name:--font-raleway) text-base font-medium focus-visible:outline-2 focus-visible:outline-[#168dca] group-data-[state=open]:text-[#1473ad] md:text-lg">
                      {question}
                      <span aria-hidden className="shrink-0">
                        <Image
                          src={asset("plus.svg")}
                          alt=""
                          width={24}
                          height={24}
                          className="group-data-[state=open]:hidden"
                        />
                        <Image
                          src={asset("minus.svg")}
                          alt=""
                          width={24}
                          height={24}
                          className="hidden group-data-[state=open]:block"
                        />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="pb-5 text-sm leading-relaxed text-[#333] md:text-base">
                    {answer}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </section>

        <section id="industries" className={container + " pt-14 md:pt-20"}>
          <Typography text="Industries we serve" />
          <div className="mx-auto grid max-w-260 grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex items-center gap-3 rounded-xl border border-[#cfcfcf] p-3 md:gap-5"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-[#168dca] to-[#0f2453] md:size-16">
                  <Image
                    src={asset(industry.icon)}
                    alt=""
                    width={42}
                    height={42}
                    className="h-8 w-auto max-w-8 md:h-10 md:max-w-10"
                  />
                </div>
                <h3 className="text-sm font-medium sm:text-lg lg:text-2xl">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className={container + " py-14 md:py-20"}>
          <h2 className="mb-4 text-[22px] font-semibold leading-[1.2] md:text-3xl lg:text-[40px]">
            Get your free savings estimate
          </h2>
          <p className={paragraph + " mb-7"}>
            Tell us a little about your site and our team will get back to you
            within two working days.
          </p>
          <SavingsEnquiry interest={interest} />
        </section>
      </main>
      <Footer />

      <Dialog.Root
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/70" />
          <Dialog.Content
            aria-describedby={undefined}
            onCloseAutoFocus={(event) => {
              event.preventDefault();
              if (consultationRef.current) {
                consultationRef.current = false;
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
                document
                  .getElementById("estimate-name")
                  ?.focus({ preventScroll: true });
              } else triggerRef.current?.focus({ preventScroll: true });
            }}
            className="fixed left-1/2 top-1/2 z-[101] max-h-[90dvh] w-[92%] max-w-6xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl bg-[#f2f4f4] shadow-2xl focus:outline-none"
          >
            {selected && (
              <div className="grid md:grid-cols-[43%_57%]">
                <div className="relative min-h-64 overflow-hidden bg-white max-md:h-64 md:min-h-120">
                  <Image
                    src={asset(selected.detailImage)}
                    alt={
                      selected.name === "High Emissivity Coating"
                        ? "Furnace heat flow before and after FuelSave coating"
                        : selected.name
                    }
                    fill
                    sizes="(max-width: 767px) 92vw, 43vw"
                    className={
                      selected.id === "coating"
                        ? "object-contain"
                        : selected.id === "sun-wind"
                          ? "object-cover object-[37.3%_center]"
                          : "object-cover"
                    }
                  />
                </div>
                <div className="flex flex-col justify-center gap-8 px-6 py-10 md:px-8 md:py-12 lg:px-10">
                  <div>
                    <Dialog.Title className="mb-5 text-2xl font-extrabold leading-tight lg:text-3xl">
                      {selected.name}
                    </Dialog.Title>
                    <div className="space-y-4 text-sm leading-relaxed text-[#464646] md:text-base">
                      {selected.paragraphs.map((text) => (
                        <p key={text}>{text}</p>
                      ))}
                    </div>
                  </div>
                  <Button
                    fullWidth
                    className="hover:!scale-100 [&>svg]:hidden"
                    onClick={() => consult(selected)}
                  >
                    Book Your Consultation
                  </Button>
                </div>
                <Dialog.Close
                  aria-label="Close product details"
                  className="absolute right-3 top-3 flex size-10 items-center justify-center rounded-full bg-[#f2f4f4]/95 hover:bg-white focus-visible:outline-2 focus-visible:outline-[#168dca]"
                >
                  <Image
                    src={asset("close.svg")}
                    alt=""
                    width={16}
                    height={18}
                  />
                </Dialog.Close>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

function Partner({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div
      title={name}
      className="flex h-15 w-[var(--marquee-logo-width)] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white bg-white/10 px-4 py-2 shadow-md shadow-black/20 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/15 md:h-24 2xl:h-28"
    >
      {children}
    </div>
  );
}
