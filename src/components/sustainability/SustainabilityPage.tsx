"use client";

import { useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/badge";
import {
  systems,
  impactProjects,
  savingsOptions,
  energyOptions,
  positiveAmount,
  sustainabilityContent,
} from "./data";

const format = (value: number) =>
  value.toLocaleString("en-US", { maximumFractionDigits: 2 });
const total = impactProjects.reduce((sum, project) => sum + project.avoided, 0);
const container = "2xl:max-w-360 w-[90%] 2xl:px-4 mx-auto";

export default function SustainabilityPage() {
  const [group, setGroup] = useState<"fuel" | "renewable">("fuel");
  const [savingSystem, setSavingSystem] = useState(0);
  const [spend, setSpend] = useState("");
  const [energy, setEnergy] = useState(0);
  const [consumption, setConsumption] = useState("");
  const saving = savingsOptions[savingSystem];
  const source = energyOptions[energy];
  const baseline = positiveAmount(consumption) * source.factor;

  function switchTab(event: KeyboardEvent<HTMLButtonElement>) {
    if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      const next =
        event.key === "Home"
          ? "fuel"
          : event.key === "End"
            ? "renewable"
            : group === "fuel"
              ? "renewable"
              : "fuel";
      setGroup(next);
      document.getElementById("tab-" + next)?.focus();
    }
  }

  return (
    <main className="bg-white font-(family-name:--font-poppins) text-black [&_section]:scroll-mt-28 [&_footer]:scroll-mt-28 overflow-hidden">
      <section
        id="overview"
        className="relative min-h-160 h-[min(56.25vw,1080px)] overflow-hidden bg-[#222] text-white max-md:h-[95svh] max-md:min-h-185 max-md:max-h-225"
      >
        <Image
          src="/sustainability/hero.png"
          alt="Solar panels and wind turbines beside a renewable energy facility"
          fill
          priority
          sizes="100vw"
          className="object-cover -scale-x-100 max-md:object-[42%_center]"
        />
        <Image
          src="/sustainability/hero-overlay.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-fill"
        />
        <div className={container + " relative h-full"}>
          <div className="absolute top-[29.9%] w-[49%] max-md:top-1/4 max-md:w-full max-md:max-w-130">
            <Badge
              text={sustainabilityContent.hero.badge}
              className="mb-4 border-white/10 [&>span:first-child]:bg-white"
            />
            <h1 className="text-[clamp(36px,3.386vw,65px)] font-medium leading-[1.16] tracking-[.02em] max-md:text-[clamp(30px,7.8vw,48px)]">
              {sustainabilityContent.hero.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-5 text-[clamp(14px,1.146vw,22px)] leading-6 max-md:max-w-110 max-md:text-sm">
              {sustainabilityContent.hero.description}
            </p>
          </div>
          <div className="absolute bottom-[5.8%] flex gap-[clamp(30px,5.625vw,108px)] max-md:bottom-[6%] max-md:w-full max-md:justify-between max-md:gap-4">
            {sustainabilityContent.hero.stats.map(([value, label]) => (
              <div key={value} className="max-md:flex-1">
                <strong className="block text-[clamp(28px,2.344vw,45px)] font-semibold max-md:text-[27px]">
                  {value}
                </strong>
                <span className="block text-[clamp(12px,1.146vw,22px)] max-md:max-w-27.5 max-md:text-[11px]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="systems" className="pt-[clamp(55px,4.48vw,86px)]">
        <div className={container}>
          <div className="mx-auto mb-9 text-center max-md:mb-7">
            <h2 className="text-[clamp(28px,2.344vw,45px)] font-semibold leading-[1.2] tracking-[.02em]">
              {sustainabilityContent.systems.title}
            </h2>
            <p className="mx-auto mt-4 md:max-w-[45%] text-[clamp(14px,1.146vw,22px)] leading-6 text-[#3c3c3c]">
              {sustainabilityContent.systems.description}
            </p>
          </div>
          <div
            className="mb-10 flex justify-center gap-7.5 max-md:mb-6 max-md:gap-2.5"
            role="tablist"
            aria-label="Sustainability systems"
          >
            {(["fuel", "renewable"] as const).map((tab) => (
              <button
                key={tab}
                id={"tab-" + tab}
                type="button"
                role="tab"
                aria-selected={group === tab}
                aria-controls={"panel-" + tab}
                tabIndex={group === tab ? 0 : -1}
                onKeyDown={switchTab}
                onClick={() => setGroup(tab)}
                className="rounded-[5px] border border-[#1473ad] px-[clamp(20px,2.6vw,50px)] py-3.5 text-[clamp(14px,1.042vw,20px)] text-[#1473ad] transition-colors focus-visible:outline-3 focus-visible:outline-[#168dca] focus-visible:outline-offset-4 aria-selected:bg-[linear-gradient(106deg,#168dca_24.15%,#0f2453_134.7%)] aria-selected:text-white max-md:flex-1 max-md:px-2 max-md:text-xs"
              >
                {sustainabilityContent.systems.tabs[tab]}
              </button>
            ))}
          </div>
          <div
            id={"panel-" + group}
            role="tabpanel"
            aria-labelledby={"tab-" + group}
            className="grid grid-cols-3 gap-7.5 max-md:grid-cols-1 max-md:gap-5"
          >
            {systems
              .filter((system) => system.group === group)
              .map((system) => (
                <article
                  key={system.id}
                  id={system.id}
                  className="group min-h-[min(26.05vw,500px)] rounded-[20px] border border-[#cfcfcf] px-4.25 py-7 transition-colors duration-300 hover:bg-[linear-gradient(106deg,#168dca_24.15%,#0f2453_134.7%)] hover:text-white max-xl:px-[18px] max-xl:py-[22px] max-md:min-h-0 max-md:p-4.5"
                >
                  <div className="flex h-20 items-start pt-1.5 ">
                    <div
                      className="size-[51px] shrink-0 bg-[linear-gradient(90deg,#168dca,#0f2453)] transition-[background] duration-300 group-hover:!bg-white group-hover:!bg-none"
                      style={{
                        maskImage: "url(/sustainability/" + system.icon + ")",
                        WebkitMaskImage: "url(/sustainability/" + system.icon + ")",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskSize: "100% 100%",
                        WebkitMaskSize: "100% 100%",
                      }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mb-1 flex items-center gap-3 text-[clamp(12px,1vw,19px)] group-hover:text-white">
                    <span className="size-2 rounded-full bg-[linear-gradient(93deg,#168dca,#0f2453)] group-hover:!bg-white group-hover:!bg-none" />
                    {sustainabilityContent.systems.tabs[group]}
                  </div>
                  <h3 className="text-[clamp(21px,1.82vw,35px)] font-semibold leading-[1.18] tracking-[.02em] max-md:text-[25px]">
                    {system.name}
                  </h3>
                  <p className="my-4 md:my-2 mb-2 text-[clamp(13px,1.042vw,20px)] uppercase text-black group-hover:text-white">
                    {system.metric}
                  </p>
                  <p className="text-[clamp(13px,.938vw,18px)] text-[#3c3c3c] group-hover:text-white max-md:text-sm">
                    {system.intro}
                  </p>
                  <hr className="my-3 border-0 border-t border-[#cfcfcf]" />
                  <p className="text-[clamp(13px,.938vw,18px)] text-[#3c3c3c] group-hover:text-white max-md:text-sm">
                    {system.detail}
                  </p>
                </article>
              ))}
          </div>
        </div>
      </section>

      <section
        id="savings"
        className="pb-[clamp(55px,4.27vw,82px)] pt-[clamp(60px,5.31vw,102px)]"
      >
        <div className={container}>
          <SectionHeading
            title={sustainabilityContent.savings.title}
            text={sustainabilityContent.savings.description}
          />
          <Calculator
            image="/sustainability/savings.png"
            imageAlt="Modern industrial warehouse with energy monitoring systems"
            title={sustainabilityContent.savings.calculatorTitle}
            description={sustainabilityContent.savings.calculatorDescription}
            label={sustainabilityContent.savings.label}
            fieldId="saving-system"
            value={savingSystem}
            onChange={setSavingSystem}
            options={savingsOptions.map((option) => option.label)}
            inputLabel={"Current monthly " + saving.kind + " spend (AED)"}
            inputId="monthly-spend"
            inputValue={spend}
            onInputChange={setSpend}
            placeholder="e.g. 40000"
            result={"AED " + format(positiveAmount(spend) * saving.rate)}
            resultDescription="Estimated monthly saving"
          />
        </div>
      </section>

      <section
        id="emissions"
        className="bg-[#151515] bg-[url('/sustainability/emissions-background.png')] bg-cover bg-left-top py-[clamp(60px,4.984vw,96px)] text-white"
      >
        <div className={container}>
          <SectionHeading
            dark
            title={sustainabilityContent.emissions.title}
            text={sustainabilityContent.emissions.description}
          />
          <Calculator
            dark
            image="/sustainability/emissions.png"
            imageAlt="Industrial energy plant framed by green trees"
            title={sustainabilityContent.emissions.calculatorTitle}
            description={sustainabilityContent.emissions.calculatorDescription}
            label={sustainabilityContent.emissions.label}
            fieldId="energy-source"
            value={energy}
            onChange={setEnergy}
            options={energyOptions.map((option) => option.label)}
            inputLabel={"Monthly consumption (" + source.unit + ")"}
            inputId="monthly-consumption"
            inputValue={consumption}
            onInputChange={setConsumption}
            placeholder="e.g. 150000"
            result={format(baseline * source.rate) + " kg CO\u2082e"}
            resultDescription="Estimated CO\u2082e avoided per month"
            secondaryResult={
              "Baseline: " + format(baseline) + " kg CO\u2082e/month"
            }
          />
        </div>
      </section>

      <section id="impact" className="pb-10 pt-[clamp(55px,3.68vw,71px)]">
        <div className={container}>
          <div className="mb-9.5 grid grid-cols-[1.1fr_1.5fr] items-center gap-7.5 max-xl:grid-cols-1">
            <div>
              <h2 className="text-[clamp(25px,2.083vw,40px)] font-semibold leading-[1.2]">
                {sustainabilityContent.impact.title}
              </h2>
              <p className="mt-4 text-[clamp(14px,.833vw,16px)] text-[#3c3c3c]">
                {sustainabilityContent.impact.description}
              </p>
            </div>
            <div className="flex justify-between gap-[18px] max-xl:justify-start max-xl:gap-8.75 max-md:gap-3">
              {[
                [
                  String(impactProjects.length).padStart(2, "0"),
                  "Projects live",
                ],
                [format(total), "kg CO\u2082e avoided / month"],
                [format(total * 12), "kg CO\u2082e avoided / year"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="min-w-0 border-l border-[#c9c9c9] pl-[18px] max-md:flex-1 max-md:pl-2.5"
                >
                  <strong className="block bg-[linear-gradient(90deg,#168dca,#0f2453)] bg-clip-text text-[clamp(28px,3.34vw,64px)] font-semibold leading-[1.15] text-transparent max-md:text-[clamp(24px,6.2vw,34px)]">
                    {value}
                  </strong>
                  <span className=" block text-[clamp(11px,1.042vw,20px)] max-md:text-[10px]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div
            tabIndex={0}
            role="region"
            aria-label={sustainabilityContent.impact.tableLabel}
            className="overflow-x-auto focus-visible:outline-3 focus-visible:outline-[#168dca] focus-visible:outline-offset-4"
          >
            <table className="w-full table-fixed border-separate border-spacing-y-[18px] text-left max-md:min-w-175">
              <thead>
                <tr className="[&_th]:text-[clamp(12px,1.25vw,24px)] [&_th]:font-semibold [&_th]:uppercase">
                  <th scope="col">Project</th>
                  <th scope="col">Sector</th>
                  <th scope="col">System</th>
                  <th scope="col">kg CO\u2082e avoided / month</th>
                </tr>
              </thead>
              <tbody>
                {impactProjects.map((project) => (
                  <tr
                    key={project.project}
                    className="[&_td]:border-y-[1.5px] [&_td]:border-[#1475af33] [&_td]:bg-[#f8f8f8] [&_td]:px-3.5 [&_td]:py-[18px] [&_td]:text-[clamp(12px,1.042vw,20px)] [&_td]:text-[#3c3c3c] [&_td:first-child]:rounded-l-[10px] [&_td:first-child]:border-l-[1.5px] [&_td:last-child]:rounded-r-[10px] [&_td:last-child]:border-r-[1.5px]"
                  >
                    <td>{project.project}</td>
                    <td>{project.sector}</td>
                    <td>{project.system}</td>
                    <td>{format(project.avoided)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="[&_th]:font-semibold [&_td]:font-semibold">
                  <th scope="row" colSpan={3} className="text-md md:text-lg">
                    Total
                  </th>
                  <td className="text-md md:text-lg">{format(total)} KG</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="bg-[linear-gradient(118deg,#168dca_24.15%,#0f2453_134.7%)] text-white"
      >
        <div
          className={
            container +
            " grid md:grid-cols-[112px_minmax(20px,1.2fr)_repeat(3,minmax(0,1fr))] lg:grid-cols-[112px_minmax(210px,1.2fr)_repeat(3,minmax(0,1fr))] xl:grid-cols-[112px_minmax(210px,1.2fr)_repeat(3,minmax(0,1fr))] items-center gap-7.5 py-2 max-xl:grid-cols-2 max-xl:gap-x-10 max-xl:gap-y-7 max-md:grid-cols-[70px_1fr] max-md:gap-4"
          }
        >
          <Link
            href="/"
            aria-label="Catobo home"
            className="relative size-28 shrink-0 overflow-hidden max-md:size-20"
          >
            <Image
              src="/sustainability/logo.png"
              alt="Catobo"
              fill
              sizes="112px"
              className="!size-[140.57%] !max-w-none !left-[-39.29%] !top-[-20%]"
            />
          </Link>
          <h2 className="text-[clamp(20px,1.563vw,30px)] font-semibold leading-[1.2]">
            {sustainabilityContent.footer.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          {[
            [
              "email",
              "Email",
              "info@catobollc.com",
              "mailto:info@catobollc.com",
            ],
            ["phone", "Phone", "+971 4 391 8018", "tel:+97143918018"],
            ["office", "Office", "Dubai, UAE", ""],
          ].map(([icon, label, value, href]) => (
            <div
              key={icon}
              className="flex min-w-0 items-start md:justify-end gap-3.75 max-lg:col-span-2"
            >
              <Image
                src={`/sustainability/${icon}.svg`}
                alt=""
                width={62}
                height={62}
                className="size-[40px] md:size-[50px] shrink-0"
              />
              <div>
                <h3 className="text-[clamp(16px,1.25vw,24px)] font-semibold uppercase">
                  {label}
                </h3>
                {href ? (
                  <a
                    className="text-[clamp(11px,.833vw,16px)] hover:underline max-md:text-sm"
                    href={href}
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-[clamp(11px,.833vw,16px)] max-md:text-sm">
                    {value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-white/25 p-4 text-center text-[clamp(11px,.833vw,16px)]">
          Copyright © 2026 All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({
  title,
  text,
  dark = false,
}: {
  title: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto mb-9 text-center max-md:mb-7">
      <h2 className="text-[clamp(28px,2.344vw,45px)] font-semibold leading-[1.2] tracking-[.02em]">
        {title}
      </h2>
      <p
        className={
          "mx-auto mt-4 max-w-191.5 text-[clamp(14px,1.146vw,22px)] leading-6 " +
          (dark ? "text-white" : "text-[#3c3c3c]")
        }
      >
        {text}
      </p>
    </div>
  );
}

type CalculatorProps = {
  dark?: boolean;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  label: string;
  fieldId: string;
  value: number;
  onChange: (value: number) => void;
  options: string[];
  inputLabel: string;
  inputId: string;
  inputValue: string;
  onInputChange: (value: string) => void;
  placeholder: string;
  result: string;
  resultDescription: string;
  secondaryResult?: string;
};

function Calculator({
  dark = false,
  image,
  imageAlt,
  title,
  description,
  label,
  fieldId,
  value,
  onChange,
  options,
  inputLabel,
  inputId,
  inputValue,
  onInputChange,
  placeholder,
  result,
  resultDescription,
  secondaryResult,
}: CalculatorProps) {
  const fields = dark
    ? "bg-[#2f2f2f] [&_p]:text-white [&_input]:border-[#282828] [&_input]:bg-[#2b2b2b] [&_input]:text-white [&_select]:border-[#282828] [&_select]:bg-[#2b2b2b] [&_select]:text-white [&_select]:[color-scheme:dark]"
    : "bg-[#f2f2f2]";
  return (
    <div className="grid grid-cols-2 gap-7.5 max-md:grid-cols-1 max-md:gap-5">
      <div className="relative aspect-[765/632] min-h-107.5 overflow-hidden rounded-[20px] max-md:min-h-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 767px) 90vw, 41vw"
          className="object-cover"
        />
      </div>
      <div
        className={
          "flex min-h-[min(32.92vw,632px)] flex-col overflow-hidden rounded-[20px] " +
          fields +
          " max-md:min-h-105"
        }
      >
        <div className="flex-1 px-[clamp(24px,1.875vw,36px)] py-[clamp(24px,2.1vw,40px)] max-md:px-[22px] max-md:py-[26px]">
          <h3 className="text-[clamp(23px,1.823vw,35px)] font-semibold">
            {title}
          </h3>
          <p className="mb-6 mt-1.75 text-[clamp(13px,1.146vw,22px)] leading-6 text-[#3c3c3c] max-md:text-[13px]">
            {description}
          </p>
          <label
            htmlFor={fieldId}
            className="mb-3 mt-5 block font-(family-name:--font-raleway) text-[clamp(17px,1.302vw,25px)] font-semibold"
          >
            {label}
          </label>
          <select
            id={fieldId}
            value={value}
            onChange={(event) => onChange(Number(event.target.value))}
            className="h-[clamp(48px,3.554vw,68px)] w-full min-w-0 rounded-[10px] border-[1.5px] border-[#ddd] bg-[#edeaea] px-[18px] text-[clamp(13px,1.146vw,22px)] text-[#3c3c3c] focus-visible:outline-3 focus-visible:outline-[#168dca] focus-visible:outline-offset-4 max-md:text-[13px]"
          >
            {options.map((option, index) => (
              <option key={option} value={index}>
                {option}
              </option>
            ))}
          </select>
          <label
            htmlFor={inputId}
            className="mb-3 mt-5 block font-(family-name:--font-raleway) text-[clamp(17px,1.302vw,25px)] font-semibold"
          >
            {inputLabel}
          </label>
          <input
            id={inputId}
            type="number"
            min="0"
            step="any"
            inputMode="decimal"
            placeholder={placeholder}
            value={inputValue}
            onChange={(event) => onInputChange(event.target.value)}
            className="h-[clamp(48px,3.554vw,68px)] w-full min-w-0 rounded-[10px] border-[1.5px] border-[#ddd] bg-[#edeaea] px-[18px] text-[clamp(13px,1.146vw,22px)] text-[#3c3c3c] placeholder:text-[#a4a0a0] focus-visible:outline-3 focus-visible:outline-[#168dca] focus-visible:outline-offset-4 max-md:text-[13px]"
          />
        </div>
        <div
          role="status"
          aria-live="polite"
          className="min-h-[clamp(126px,9.343vw,179px)] bg-[linear-gradient(114deg,#168dca_5.4%,#0f2453_105.1%)] px-[clamp(24px,1.875vw,36px)] py-[clamp(22px,2vw,38px)] text-white max-md:px-[22px] max-md:py-[25px]"
        >
          <strong className="block break-words text-[clamp(30px,2.606vw,50px)] font-semibold leading-[1.2]">
            {result}
          </strong>
          <p className="mt-1.5 text-[clamp(12px,1vw,19px)]">
            {resultDescription}
          </p>
          {secondaryResult && (
            <p className="mt-1.5 text-[clamp(12px,1vw,19px)]">
              {secondaryResult}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
