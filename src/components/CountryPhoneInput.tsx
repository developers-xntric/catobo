"use client";

import { getCountries, getCountryCallingCode, type Country } from "react-phone-number-input";
import labels from "react-phone-number-input/locale/en";

const countries = getCountries();

export function formatInternationalPhone(country: Country, number: string) {
  return `+${getCountryCallingCode(country)} ${number}`.trim();
}

type CountryPhoneInputProps = {
  country: Country;
  number: string;
  onCountryChange: (country: Country) => void;
  onNumberChange: (number: string) => void;
  id?: string;
  required?: boolean;
  wrapperClassName?: string;
};

export default function CountryPhoneInput({
  country,
  number,
  onCountryChange,
  onNumberChange,
  id,
  required = false,
  wrapperClassName = "",
}: CountryPhoneInputProps) {
  return (
    <div className={`flex w-full overflow-hidden rounded-md border border-[#D9E6F0] bg-white focus-within:border-[#168DCA] focus-within:ring-1 focus-within:ring-[#168DCA]/20 ${wrapperClassName}`}>
      <select
        aria-label="Country calling code"
        value={country}
        onChange={(event) => onCountryChange(event.target.value as Country)}
        className="w-22 shrink-0 border-r border-[#D9E6F0] bg-white px-2 py-2.5 text-[13px] text-[#1a1a1a] outline-none"
      >
        {countries.map((code) => (
          <option key={code} value={code}>
            +{getCountryCallingCode(code)}
          </option>
        ))}
      </select>
      <input
        id={id}
        type="tel"
        value={number}
        onChange={(event) => onNumberChange(event.target.value)}
        placeholder="Enter your phone number"
        autoComplete="tel-national"
        inputMode="tel"
        required={required}
        className="min-w-0 flex-1 bg-white px-3 py-2.5 text-[13px] text-[#1a1a1a] placeholder:text-[#ABABAB] outline-none"
      />
    </div>
  );
}